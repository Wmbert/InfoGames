import {useContext} from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";

import { AppContext } from "../../Context";

import { useNavigation } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather'

export default function FavoriteList({ data }){ 

    const { deleteGame } = useContext(AppContext);
    const navigation = useNavigation();

    async function handleDeleteGame(){
        deleteGame(data)
    }

    return(
        
        <TouchableOpacity
            onLongPress={ handleDeleteGame }
            onPress={() => navigation.navigate('Detail', {name: data.slug})}
            style={styles.button}
        >

            <TouchableOpacity 
                style={styles.removeButton}
                onPress={ handleDeleteGame }
            >
                
                <Feather
                    name="trash"
                    size={20}
                    color="#FFF"
                />

            </TouchableOpacity>

            <View>

                <Image
                    source={{uri: data.background_image	}}
                    style={styles.image}
                />
                
                <View style={styles.titleArea}>

                    <Text style={styles.title}>{data.name}</Text>

                    <View style={styles.ratingArea}>

                        <Image
                            source={require('../../assets/metacritic.png')}
                            style={styles.logoM}
                        />

                        <View style={styles.rating}>

                            <Text style={styles.ratingText}>{data.metacritic}</Text>

                        </View>

                    </View>

                </View>

            </View>

        </TouchableOpacity>
        
    )
    
}

const styles = StyleSheet.create({
    button:{
        flex: 1,
        maxWidth: 400,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    removeButton:{
        backgroundColor: '#FF455F',
        width: 30,
        height: 30,
        position: 'absolute',
        zIndex: 99,
        right: '3%',
        top: '5%',
        alignItems: 'center',
        justifyContent:  'center',
        borderRadius: '50%'
    },
    image:{
        width: '100%',
        height: 150,
        opacity: 0.6,
        borderRadius: 10
    },
    titleArea:{
        position: 'absolute',
        bottom: '0%',
        left: '2%'
    },
    title:{
        color: '#FFF',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5
    },
    ratingArea:{
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoM:{
        width: 25,
        height: 25
    },
    rating:{
        backgroundColor: 'green',
        marginLeft: 10,
        paddingHorizontal: 5,
        paddingVertical: 4,
        borderRadius: 5
    },
    ratingText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})