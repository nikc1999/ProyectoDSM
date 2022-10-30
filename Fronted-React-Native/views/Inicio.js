import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput
} from 'react-native';
//import { useLinkProps, useNavigation} from '@react-navigation/native';


const Inicio = () => {
  const navigation = useNavigation();
  return(
  <View style={styles.container}>
        <Text style={styles.title1}>Bienvenido.</Text>
        <Text style={styles.title2}>Eliga un rol</Text>
        <Text/>
        <StatusBar style="auto" />
        <Button color= "#900C3F"
          title="Cliente" onPress={()=> navigation.navigate('MenuCliente')}
        />
        <Text/>
        <Button
          title="Administrador" color= "#212F3D" onPress={() => getMoviesFromApiAsync()}
        />
        <Text style={styles.title3}>Test para crear un pedido</Text>
        <Image source={{uri:'https://mastike.cl/wp-content/uploads/Pichangas-Mastike-comida-a-domicilio-antofagasta.png'}}
        style={styles.imagen}/>
        <Text>
            Insertar nueva categoria
        </Text>
        <TextInput style ={styles.texto} value = "categoria" />

        <Button title = "Agregar Categoria" onPress={() => agregarCategoria()}/>
      </View>
  
    );
  }
  const styles = StyleSheet.create({
      container:{
         flex: 1,
         padding: 50,
         backgroundColor: '#E59866',
         textAlign: 'center',
      },
      title1: {
          textAlign: 'center',
          marginVertical: 8,
          fontSize: 30
      },
      title2: {
          textAlign: 'center',
          marginVertical: 5,
      },
      title3:{
        textAlign: 'center',
        marginVertical: 30,
      },
      imagen:{
        height:100,
        width:200
      },
      texto:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      }
  });
  
  const getMoviesFromApiAsync = async () => {
    try {
      const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({   "id": "33",
                                       "title": "prueba",
                                       "author": "prueba",
                                       "content": "adkhsadkah",
                                       "created_at": "2022-10-16T19:33:39.493463",
                                       "published_at": "2022-10-16T22:39:10.574Z",
                                       "published": false })
              };
  
      const response = await fetch(
        'http://192.168.1.163:8000/noticias',requestOptions
      );
      const json = await response.json();
      return //console.log(json.name);
    } catch (error) {
      console.error(error);
    }
  } 
 const agregarCategoria = async () =>{
    try{
        const request = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "id": "1",
              "nombre": "test"
            })
        }
        const response = await fetch(
            'http://192.168.1.163:8000/crearCategoria',request
        );
        const json = await response.json();
        return
    }catch(error){
        console.error(error);
    }
 }
export default Inicio;