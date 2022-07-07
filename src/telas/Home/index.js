import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";
import Contador25 from "../../Componentes/Contador25";

export default function Home(){
    const image = { uri: "https://cdn.wallpapersafari.com/10/90/VUi3WL.jpg" };
    const localImage = require('../../../assets/images/bg2.png')
   return <>
   <ImageBackground source={localImage} resizeMode="cover" style={style.img}>
    <View>
       <Contador25/>
       </View>
     </ImageBackground>
    </>
}

const style = StyleSheet.create({

fundo:{
    flex: 1,
    backgroundColor: '#083600',
},

img:{
    flex: 1,
    justifyContent: "center"
}

})