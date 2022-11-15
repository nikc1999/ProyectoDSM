import React, {useState} from 'react'
import { View,StyleSheet,TextInput,Button,Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const CrearCategoria = () =>{
    let [nombreCat, setNombreCat] = useState("");
    const navegation = useNavigation();
    return(
        <View style = {styles.container}>
            <Text style={styles.text}>CRUD Categoria</Text>
            <TextInput placeholder="Ingrese el nombre de la categoria" style = {styles.input} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)}/>
            <Pressable style = {styles.button1} onPress = {() => createCategory1(nombreCat)}>
                <Text style = {styles.text1}>Agregar</Text>
            </Pressable>
            <Pressable style = {styles.button2} value ={nombreCat} onChangeText = {(value) => setNombreCat(value)} onPress = {() => deleteCategory(nombreCat)}>
              <Text style = {styles.text1}>Eliminar</Text>
            </Pressable>
            <Pressable style = {styles.button3} onPress = {() => navegation.navigate('EditarCategoria')}>
              <Text>Editar</Text>
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
      button2:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 1,
        elevation: 3,
        backgroundColor: '#C70039',
        marginTop: 10,
      },
      button3:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        borderWidth: 1,
        elevation: 3,
        backgroundColor: '#229954',
        marginTop: 10,
      },
      text1:{
        color:'#FFFFFF'
      }


});

let createCategory1 = (name) =>{

    fetch('http://192.168.1.163:8000/crearCategoria', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombre": name })
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

  let deleteCategory = (name) =>{

    fetch(`http://192.168.1.163:8000/eliminarCategoria`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "nombre" : name })
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
  const createCategory = async (name) =>{
    try{
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "id": "1",
              "nombre": name
            })
        }
        const response = await fetch(
            'http://192.168.1.163:8000/crearCategoria',request
        );
        const json = await response.json();
        return console.json;
    }catch(error){
        console.error(error);
    }
 }

export default CrearCategoria;