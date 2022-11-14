import { useNavigation } from '@react-navigation/native';
import React from 'react';

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Pressable
} from 'react-native';
//import { useLinkProps, useNavigation} from '@react-navigation/native';


const Inicio = () => {
  const navigation = useNavigation();
  return(
      <View style={styles.container}>
        
            <Text style={styles.title1}>Bienvenido.</Text>
            <Text style={styles.title2}>Eliga un rol</Text>
            
            <Pressable onPress={()=> navigation.navigate('MenuCliente')} style = {styles.button1}>
              <Text style={styles.title4}>Cliente</Text>
            </Pressable>
            
            <Pressable  onPress={() => navigation.navigate('MenuAdministrador') } style = {styles.button2}>
              <Text style= {styles.title4}>Administrador</Text>
            </Pressable>
  
      </View>
  
    );
  }
  const styles = StyleSheet.create({
      container:{
         flex: 1,
         textAlign: 'center',
         padding:20,
         marginTop: 150,
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
      title4:{
        textAlign: 'center',
        color:'#FFFFFF',

      },
      texto:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
        backgroundColor: '#BA4A00',
        marginTop: 5,
      }
  }); 
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