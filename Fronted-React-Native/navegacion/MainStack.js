import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Inicio from '../views/Inicio'
import MenuAdministrador from '../views/MenuAdministrador';
import MenuCliente from '../views/MenuCliente';
import CrearCategoria from '../functions/CrearCategoria';

const stack = createNativeStackNavigator();

const MainStack = () =>{
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen 
                name = 'Inicio'
                component={Inicio}
                />
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
    )
}
export default MainStack;