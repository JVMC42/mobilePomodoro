import React from 'react';
import { ImageBackground, SafeAreaView, StatusBar } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppRotas from './src/Rotas/AppRotas';

export default function App(){
  
  return (
    
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <NavigationContainer>
      <AppRotas/>
      </NavigationContainer>
    </SafeAreaView>
   
  );
  
}