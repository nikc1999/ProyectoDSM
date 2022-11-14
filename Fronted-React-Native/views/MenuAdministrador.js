import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Button, Text,View,StyleSheet, TextInput, Pressable} from "react-native"


const MenuAdministrador = () =>{
    const navigation = useNavigation();
    return(
        <View style = {style.container}>
            <Text style = {style.text}>Opciones</Text>
            <Pressable style = {style.button1} onPress = {()=> navigation.navigate('CrearCategoria')}>
                <Text style = {style.text1}> Crear Categoria</Text>
            </Pressable>
        </View>
    )
}
const style = StyleSheet.create({
    text:{
        marginTop: 30,
        textAlign: 'center',
        fontSize: 20,
    },
    text1:{
        color:'#FFFFFF'
    },
    container:{
        flex: 1,
        padding: 50,
        textAlign: 'center',
     },
     button1:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 1,
        elevation: 3,
        backgroundColor: '#1A5276',
      },
});
export default MenuAdministrador;