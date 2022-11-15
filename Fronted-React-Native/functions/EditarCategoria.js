import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react'
import { View,StyleSheet,TextInput,Text, Pressable } from 'react-native'

const EditarCategoria = () =>{
    let [nombreCat, setNombreCat] = useState("");
    let [nombreCatNuevo,setNombreCatNuevo] = useState("");
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>Editar Categoria</Text>
            <TextInput placeholder="El nombre de la categoria a editar" style = {styles.input} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)}/>
            <TextInput placeholder="El nuevo nombre de la categoria" style = {styles.input} value ={nombreCatNuevo} onChangeText = {(value) => setNombreCatNuevo(value)}/>
            <Pressable style = {styles.button1} onPress = {() => updateCategory(nombreCat,nombreCatNuevo)}>
              <Text style = {styles.text1}>Confirmar</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        padding: 10,
        marginBottom: 15,
    },
    text:{
        textAlign: 'center',
        fontSize: 30,
        padding: 15
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
      text1:{
        color:'#FFFFFF'
      }


});

let updateCategory = (name,name1) =>{

    fetch('http://192.168.1.163:8000/editarCategoria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombreActualCategoria": name,
        "nuevoNombre" : name1 })
    })
    .then(res => {
      console.log(res.status);
      console.log(res.headers);
      return res.json();
    })
    .then(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
      }
    )
  };
export default EditarCategoria;