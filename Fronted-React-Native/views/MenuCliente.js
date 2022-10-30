import React from 'react'
import { View,Text,StyleSheet } from 'react-native';

const MenuCliente = () =>{
    return(
        <View style={style.container}>
            <Text>Vista cliente</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        backgroundColor: "#B03A2E",
        flex: 1,

    }
});
export default MenuCliente;