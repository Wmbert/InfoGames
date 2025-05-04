import React, {createContext, useState, useEffect} from "react";

import api from "../services";

export const AppContext = createContext({});

export default function AppProvider({ children }){

    const [genres,setGenres] = useState([]);
    const [games, setGames] = useState([]);
    const [gameDetail, setGameDetail] = useState([]);
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
            
            return item.background_image !== null;
    
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

        alert(name)

    }
    

    return(
        <AppContext.Provider
            value={{ genres, loading, games, getDetail}}
        
        >
            {children}
        </AppContext.Provider>
    )

}