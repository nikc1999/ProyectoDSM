import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import React from 'react';
import { View } from 'react-native';
import MainStack from './navegacion/MainStack';
import Inicio from './views/Inicio';
import MenuCliente from './views/MenuCliente';
import MenuAdministrador from './views/MenuAdministrador';
import CrearCategoria from './functions/CrearCategoria';

const stack = createNativeStackNavigator();
function App () {
        return(
                <NavigationContainer>
                        <stack.Navigator initialRouteName='Inicio'>
                                <stack.Screen name="Inicio" component={Inicio}/>
                                <stack.Screen
                                        name = 'MenuCliente'
                                        component={MenuCliente}
                                />
                                <stack.Screen
                                        name = 'MenuAdministrador'
                                        component={MenuAdministrador}
                                />
                                <stack.Screen
                                        name = 'CrearCategoria'
                                        component={CrearCategoria}
                                />
                        </stack.Navigator>

        </NavigationContainer>
        
        )}
export default App;
