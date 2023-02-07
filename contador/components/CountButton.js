import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, Alert} from 'react-native';

var set_novo_dia = true;

export default function CountButton(props){
    const [count, setCount] = useState(0);
    var hora = new Date().getHours();
    if(hora == 0 && set_novo_dia == true){
        setCount(0);
        set_novo_dia = false;
    }

    return (
        <>
            <TouchableOpacity onPress={ () => {
                if(Number(hora) != 0 && props.titulo == "coffe"){
                    set_novo_dia = true;
                }
                else{
                    setCount(count+1);
                }
                if(Number(hora) != 0 && props.titulo == "water"){
                    set_novo_dia = true;
                }
                else{
                    setCount(count+1);
                }
            } }>
            <View style={s.button}>
                <Image style={s.icon} source={ props.image }/>
                <Text style={s.titulo}>{props.titulo}</Text>
            </View>
            </TouchableOpacity>
            <Text style={s.count}>{count}</Text>
        </>
    )
}

const s = StyleSheet.create({
    icon: {
        width: "80%",
        height: "80%",
        resizeMode: 'contain',
    },
    button: {
        backgroundColor: "#8B4513",
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        width: 150,
        height: 150,
    },
    titulo: {
        fontSize: 20,
        color: "white",
    },
    count: {
        fontSize: 50,
        color: "green",
    }
});