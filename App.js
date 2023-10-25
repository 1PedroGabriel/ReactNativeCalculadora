import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Home from "./src/telas/home/index.js";

    function App(){
        return <SafeAreaView>

            <Home style={estilos.home}/>
        </SafeAreaView>
    }



export default App;

const estilos = StyleSheet.create({
    home: {
        flex: 1,
    }
})