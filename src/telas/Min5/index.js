import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Contador5 from "../../Componentes/Contador5";

export default function Min5(){
   return <>
    <View style={style.fundo}>
       <Contador5/>
    </View>
    </>
}

const style = StyleSheet.create({

fundo:{
    flex:1,
    backgroundColor: 'gray',
},

})