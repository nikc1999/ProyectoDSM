import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Inicio from '../views/Inicio'
import MenuCliente from '../views/MenuCliente';

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
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStack;