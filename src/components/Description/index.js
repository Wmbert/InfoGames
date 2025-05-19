import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView,
    ScrollView
} from "react-native";

import Feather from 'react-native-vector-icons/Feather'

export default function Description({ closeModal, desc}){

    function handleCloseModal(){
        closeModal()
    }

    return(
        
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>

                <TouchableOpacity
                    style={styles.btnBack}
                    onPress={handleCloseModal}
                >
                    <Feather
                        name="arrow-left"
                        color="#FFF"
                        size={25}
                    />

                </TouchableOpacity>

                <Text style={styles.title}>Description</Text>
                
            </View>

            <ScrollView>
                <Text style={styles.description}>{desc}</Text>
            </ScrollView>

        </SafeAreaView>
        
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0F172A'
    },
    header:{
        //backgroundColor: 'red',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnBack:{
        position: 'absolute',
        left: '3%',
        top: 20,
        backgroundColor: '#000',
        padding: 8,
        borderRadius: '50%',
        zIndex: 99
    },
    title:{
        color: '#FFF',
        fontSize: 25,
        marginTop: 20,
        fontWeight: 'bold'
    },
    description:{
        color: '#FFF',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 15,
        marginHorizontal: 10
    }

})