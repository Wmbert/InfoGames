import { View, Text, StyleSheet } from "react-native";

export default function Plataforms({data}){

    return(

        <View style={styles.container}>

            <Text style={styles.title}>{data.platform.name}</Text>

        </View>
        
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1F2430',
        marginRight: 8,
        padding: 2,
        borderRadius: 4,
        paddingHorizontal: 5
       
    },  
    title:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
})