import { View, StyleSheet, Image } from "react-native";

export default function ImageDetail({ data }){

    return(
        
        <View style={styles.container}>

            <Image
                source={{uri: data}}
                style={styles.images}
            />
            
        </View>

    )
    
}

const styles = StyleSheet.create({
    container:{
    },
    images:{
        width: 300,
        height: 200,
    }
})