import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import CadastroScreen from './screens/CadastroScreen';
import CardapioScreen from './screens/CardapioScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Tela Inicial' }}
        />
        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="Cardapio"
          component={CardapioScreen}
          options={{ title: 'Cardápio' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
