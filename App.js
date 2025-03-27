import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './src/screens/LoadingScreen';
import LoginScreen from './src/screens/LoginScreen';
import UserTypeSelectScreen from './src/screens/UserTypeSelectScreen';
import PetOwnerRegisterScreen from './src/screens/PetOwnerRegisterScreen';
import VeterinarianRegisterScreen from './src/screens/VeterinarianRegisterScreen';
import GroomerRegisterScreen from './src/screens/GroomerRegisterScreen';
import HotelRegisterScreen from './src/screens/HotelRegisterScreen';
import CaregiverRegisterScreen from './src/screens/CaregiverRegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="UserTypeSelect" component={UserTypeSelectScreen} />
        <Stack.Screen name="PetOwnerRegister" component={PetOwnerRegisterScreen} />
        <Stack.Screen name="VeterinarianRegister" component={VeterinarianRegisterScreen} />
        <Stack.Screen name="GroomerRegister" component={GroomerRegisterScreen} />
        <Stack.Screen name="HotelRegister" component={HotelRegisterScreen} />
        <Stack.Screen name="CaregiverRegister" component={CaregiverRegisterScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}