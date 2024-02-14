/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Selection from './features/Selection';
import Inventory from './features/Inventory';

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Selection' screenOptions={screenOptions}>
        { /* Always see ./stack.d.ts if it matches with the current stack list */ }
        <Stack.Screen name="Selection" component={Selection} />
        <Stack.Screen name="Inventory" component={Inventory} />
        { /* Stack list end */ }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
