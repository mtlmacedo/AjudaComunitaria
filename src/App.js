/* eslint-disable prettier/prettier */
// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import MoradorSingUp from './screens/MoradorSingUp';
import DoadorSingUp from './screens/DoadorSingUp';
import RepresentanteSingUp from './screens/RepresentanteSingUp';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoradorSingUp" component={MoradorSingUp} />
        <Stack.Screen name="DoadorSingUp" component={DoadorSingUp} />
        <Stack.Screen name="RepresentanteSingUp" component={RepresentanteSingUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
