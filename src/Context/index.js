import {
    createContext, 
    useState, 
    useEffect
} from "react";
import { Alert } from "react-native"

import api from "../services";

export const AppContext = createContext({});

import { useNavigation } from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppProvider({ children }){

    const navigation = useNavigation();

    const [genres,setGenres] = useState([]);
    const [games, setGames] = useState([]);
    const [gameDetail, setGameDetail] = useState([]);
    const [gameImage, setGameImage] = useState([]);
    const [gameSearch, setGameSearch] = useState([]);
    const [favoriteGames, setFavoriteGames] = useState([]);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function getGeners(){
      
            const response = await api.get('/genres?key=d22198479fd144bcb2462c4d8e011db2')
            //const allGames = await api.get('/games?page_size=40&key=b573bcd4439a49eda31b9f10279935d1')

            setGenres(response.data.results)
            //setLoading(false)
      
        }

        async function getTrendingGames(){
        
            //ordena os games da maior nota para a menor
            //const allGames = await api.get('/games?page_size=10&ordering=-rating&key=b573bcd4439a49eda31b9f10279935d1')
            
            //ordena os jogos pelo metacritic
            const allGames = await api.get('/games?page_size=40&ordering=-metacritic&key=b573bcd4439a49eda31b9f10279935d1')
    
            let result = allGames.data.results.filter( item => {
            
                return item.background_image !== null && item.metacritic !== null;
    
            })
    
            setGames(result);
            setLoading(false);
    
            //setGames(allGames.data.results)
        }

        getTrendingGames();
        getGeners();
    }, [])
    
    //função pega os detalhes do jogo
    async function getDetail(name){

        //pega a parte de detalher do jogo
        const details = await api.get(`/games/${name}?key=b573bcd4439a49eda31b9f10279935d1`);

        //pega os details
        let result = details.data;

        //pega as imagens necessarias
        let allImage = [result.background_image, result.background_image_additional];

        setGameDetail(result);
        setGameImage(allImage);
        
        //console.log(allImage);

    }

    //função para favoritar um game
    async function saveFavoriteGame(game) {
        //pega o index do item
        const itemIndex = favoriteGames.findIndex(item => item.id === game.id);
        
        //verifica se ele está na lista
        if (itemIndex !== -1) {
            alert('Este game está favoritado');
            return;
        }
      
        Alert.alert(
          'Favoritar',
          'Deseja favoritar esse game?',
          [
            {
              text: 'Não',
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => saveGame(game),
            },
          ]
        );

      }
      
      //salva todos os favoritos como um array
      async function saveGame(game) {
        try {
            //pega todos os itens do storage e coloca em uma lista para manipular
            const stored = await AsyncStorage.getItem('@games');
            const currentList = stored ? JSON.parse(stored) : [];

            //lista atualizada
            const updatedList = [...currentList, game];

            //atualiza a lista
            await AsyncStorage.setItem('@games', JSON.stringify(updatedList));
            setFavoriteGames(updatedList);
            alert('Game favoritado');

        } catch (error) {

          console.error('Erro ao salvar game:', error);

        }
      }

      //carrega os jogos favoritos
      async function loadFavoriteGames() {
        try {
            //pega todos os games salvos no storage e passa para a state
            const loadGame = await AsyncStorage.getItem('@games');
            setFavoriteGames(JSON.parse(loadGame));

        } catch (error) {

          console.error('Erro ao carregar os games:', error);

        }
      }
    
    //função para deletar games dos favoritos
    async function deleteGame(game){
        Alert.alert(
            "Deletar",
            "Deseja remover dos favoritos?",
            [
                {
                    text: "Não",
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => removeGame(game)
                }
            ]
        )
    }

    async function removeGame(game){
        
        try{
            //pega todos os itens do storage e coloca em uma lista para manipular
            const stored = await AsyncStorage.getItem('@games');
            const games = stored ? JSON.parse(stored) : [];

            //lista atualizada sem o jogo removido
            const newList = games.filter(item => item.id !== game.id);

            //atualiza o storage e a state
            await AsyncStorage.setItem('@games', JSON.stringify(newList));
            setFavoriteGames(newList);
            alert('Game removido com Sucesso');

        }catch(error){
            console.log(error);
        }

    }

    //função que remove todos os jogos do storage
    function removeAllGame(){

        Alert.alert(
            "Limpar",
            "Deseja limpar favoritos?",
            [
                {
                    text: "Não",
                    style: 'cancel'
                },
                {
                    text: 'Sim',
                    onPress: () => removeAll()
                }
            ]
        )

      }
    
    async function removeAll(){

        try{
            //limpa o storage
            await AsyncStorage.clear();
        
        }catch(error){
            console.log(error)
        }

    }
    //procura o game pelo nome
    async function searchGame(item){
        // pega o nome e substitui todos os espaços por -
        let gameName = item.replace(/\s/g, '-');

        const response = await api.get(`/games?page_size=40&ordering=-metacritic&key=b573bcd4439a49eda31b9f10279935d1&search=${gameName}`)
        
        let result = response.data.results.filter( item => {
            //retorna os jogos que se enquadrão nessas caracteristicas 
            return item.background_image !== null && item.metacritic !== null;

        });

        setGameSearch(result);
        console.log(result)
        navigation.navigate('Search');
        
    }
    

    return(

        <AppContext.Provider
            value={{
                genres, 
                loading, 
                games, 
                getDetail,
                gameDetail,
                gameImage,
                saveFavoriteGame,
                searchGame,
                gameSearch,
                loadFavoriteGames,
                favoriteGames,
                deleteGame,
                removeAllGame
            }}
        
        >
            {children}
        </AppContext.Provider>
        
    )

}
