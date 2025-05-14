import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { useNavigation } from '@react-navigation/native'

import Feather from 'react-native-vector-icons/Feather'

export default function Header(){

    const navigation = useNavigation();

    return(
        
        <SafeAreaView style={styles.container}>
            
            <View style={styles.titleContainer}>
                
                <Text style={[styles.title, styles.titleColor1]}>Info</Text>

                <Text style={[styles.title, styles.titleColor2]}>Games</Text>

            </View>

            <TouchableOpacity 
                style={styles.iconContainer}
                onPress={() => navigation.navigate('Favorites')}
            >

                <Feather
                    name="bookmark"
                    size={25}
                    color="#FFF"
                />

            </TouchableOpacity>

        </SafeAreaView>
        
    )

}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 80,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 10
    },
    titleContainer:{
        flexDirection: 'row',
        marginLeft: 10,
        marginBottom: 10
    },
    titleColor1:{
        color: '#FFF'
    },
    titleColor2:{
        color: '#FF455F'
    },
    title:{
        fontSize: 35,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    iconContainer:{
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#1F2430',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    } 
})