import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";


export default function Contador5() {

 const [sec,setSec] = useState(0)
    let [min, setMin] = useState(0)
    const [interval,setIntervalHook] = useState()

    
    const start = ()=>{
    clearInterval(interval)
    setIntervalHook(
        setInterval(()=>{
    timer()
        },1000)
    )
    }
    
    const stop = ()=>{
        if(interval){
            clearInterval(interval)
        }
    }
    
    const reset = ()=>{
        stop()
        setMin(0)
        setSec(0)
    }
    
    const timer = ()=>{
        setSec((prevState)=>{
            if(prevState+1==60){
                setMin(min = min+1)
                return 0
            }
    return prevState+1
        })
    }

    if (min === 5){
        reset()
        Alert.alert(
            'Hora de por a mão na massa!',
            'Agora vá para o contador de 25min',
        )
    }

    return <>
        <View style={style.fundo}>
            <Text style={style.numero}>{min <10 ? '0' + min: min}:
            {sec <10 ? '0' + sec: sec}</Text>
        </View>

        <View style={style.buttons}>
            <TouchableOpacity style={style.button1} onPress={() => start()}>
                <Text style={style.buttonText}>Start</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button2} onPress={() => stop()}>
                <Text style={style.buttonText}>Pause</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button3} onPress={() => reset()}>
                <Text style={style.buttonText}>Reset</Text>
            </TouchableOpacity>

        </View>
    </>
}

const style = StyleSheet.create({
    fundo: {
        backgroundColor: 'red',
        marginTop: "40%",
        borderRadius: 4,
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
    },

    numero: {
        color: '#FFFFFF',
        fontSize: 120,
        fontFamily: "Arial, Helvetica, sans-serif"
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    button1: {
        marginTop: 40,
        backgroundColor: 'blue',
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: '5%',
    },

    button2: {
        marginTop: 40,
        backgroundColor: 'orange',
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: '5%',
    },

    button3: {
        marginTop: 40,
        backgroundColor: 'red',
        padding: 10,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10,
        marginHorizontal: '5%'
    },

    buttonText: {
        color: 'white',
        fontSize: 25,
        fontFamily: "Arial, Helvetica, sans-serif"
    }
})
