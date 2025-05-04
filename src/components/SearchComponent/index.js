import React from "react";
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from "react-native";

import Feather from 'react-native-vector-icons/Feather'

export default function SearchComponent(){
    return(
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder="Looking for a game?"
                placeholderTextColor="#FFF"
            />

            <TouchableOpacity style={styles.buttonSearch}>
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