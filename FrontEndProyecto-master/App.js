import React from 'react';
import Inicio from './vistas/Inicio';
import VistaCliente from './vistas/VistaCliente';
import {
  View
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const App = ()=> {
return(
  <NavigationContainer>
    <Inicio/>
  </NavigationContainer>
    
)}
export default App;