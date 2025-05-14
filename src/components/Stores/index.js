import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Linking
} from "react-native";

export default function Stores({data}){

    function openStore(){
        Linking.openURL(`https://${data.store.domain}`)
    }

    return(
        
        <TouchableOpacity onPress={openStore}>

            <View style={styles.container}>

                <Text style={styles.title}>{data.store.name}</Text>

            </View>

        </TouchableOpacity>
        
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