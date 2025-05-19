import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function GenresList({ data }){

    const navigation =  useNavigation();

    return(
        
        <TouchableOpacity 
            style={styles.buttonView}
            onPress={() => navigation.navigate('Categories', {data: data})}
        >

            <View style={styles.constainer}>

                <Text style={styles.title}>{data.name}</Text>

            </View>

        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    buttonView:{
        marginVertical: 14,
        marginHorizontal: 8,
        backgroundColor: '#64748B',
        height: 35,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    constainer:{  
        marginHorizontal: 14,
    },
    title:{
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold'
    }
})