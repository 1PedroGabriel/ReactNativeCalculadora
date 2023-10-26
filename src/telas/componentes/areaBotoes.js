import React from "react";
import { View, StyleSheet } from "react-native";
import Botoes from "./botoes";

export default function AreaBotoes(){

    return  <View style={estilos.area}>
        <Botoes />
    </View>
}

const estilos = StyleSheet.create({

    area: {
        backgroundColor: '#5617B2',
        
        height: 800,
        paddingTop: 50,
        
        
        
    },




})