import {useContext, useState} from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import Feather from 'react-native-vector-icons/Feather';

import { AppContext } from "../../Context";

export default function SearchComponent(){

    const { searchGame } = useContext(AppContext);

    const [gameName, setGameName] = useState('')

    async function handleSearchGame(){

        if(gameName === ''){
            alert('Digite o nome de um game');
            return;
        }

        searchGame(gameName);
        setGameName('');
    }

    return(

        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder="Looking for a game?"
                placeholderTextColor="#FFF"
                value={gameName}
                onChangeText={(game) => setGameName(game)}
            />

            <TouchableOpacity 
                style={styles.buttonSearch}
                onPress={handleSearchGame}
            >

                <Feather
                    name='search'
                    size={35}
                    color='#FF455F'
                />
                
            </TouchableOpacity>

        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    input:{
        width: '85%',
        height: 45,
        backgroundColor: '#1F2430',
        borderRadius: 30,
        marginRight: 5,
        color: '#FFF',
        fontSize: 18,
        padding: 10,
        paddingLeft: 20
    },
    buttonSearch:{
        marginLeft: 5,
        marginRight: 5,
    }
})