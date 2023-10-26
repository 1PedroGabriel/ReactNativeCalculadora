import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";


function Botoes() {

    const  [valor, setValor] = useState('');

    const Conta = (index) => {

        newValue = valor.concat(index.toString());

        return setValor(newValue);
    }

    const Calcular = () => {

        result = eval(valor).toString();
        return setValor(result);
        


    }

    const RenderBotoesNumericos = () => {
        const botoes = [];

        for(let i = 0; i < 3; i++){

            botoes.push(<View>
                
            <TouchableOpacity style={estilos.BotoesNumericos} key={1 + i * 3} onPress={() => Conta(1 + i * 3) } >

                <Text style={estilos.Simbolos}>{1 + i * 3}</Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={estilos.BotoesNumericos} key={2 + i * 3} onPress={() => Conta(2 + i * 3) } >

                <Text style={estilos.Simbolos}>{2 + i * 3}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={3 + i*3} onPress={() => Conta(3 + i*3) } >

                <Text style={estilos.Simbolos}>{3 + i*3}</Text>

            </TouchableOpacity>

             </View>);
        }

        botoes.push(<View>
              <TouchableOpacity style={estilos.BotoesNumericos} key={0} onPress={() => Conta(0) } >

        <Text style={estilos.Simbolos}>{0}</Text>

        </TouchableOpacity>

        </View>);
       

        return botoes;

    }

    const RenderBotoesOperadores = () => {
        const botoes = [];

        
        botoes.push(<View>

            <TouchableOpacity style={estilos.BotoesNumericos} key={13} onPress={() => setValor('') } >

                <Text style={estilos.Simbolos}>{'C'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={10} onPress={() => Conta(' + ') } >

                <Text style={estilos.Simbolos}>{'+'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={11} onPress={() => Conta(' - ') } >

                <Text style={estilos.Simbolos}>{'-'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={12} onPress={() => Conta(' * ') } >

                <Text style={estilos.Simbolos}>{'x'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={13} onPress={() => Conta(' / ') } >

                <Text style={estilos.Simbolos}>{'/'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={13} onPress={() => Calcular() } >

                <Text style={estilos.Simbolos}>{'='}</Text>

            </TouchableOpacity>


        </View>)

        return botoes

    }

    return <View>
        <Text style={estilos.Simbolos}>{valor}</Text>
        <View style={estilos.BotoesNumericosDisplay}>
            <RenderBotoesNumericos style={estilos.Simbolos} />
        </View>

        <View style={estilos.BotoesOperadoresDisplay}>
            <RenderBotoesOperadores style={estilos.Simbolos} />
        </View>
            
        </View>




}

export default Botoes;

const estilos = StyleSheet.create({

    BotoesNumericos: {
        
        backgroundColor: '#392240',
        width: 60,
        height: 60,
        marginHorizontal: 1,
        marginVertical: 1,
    
    },

    BotoesNumericosDisplay: {
        flexDirection: 'row',
    },

    BotoesOperadoresDisplay: {
        flexDirection: 'column',
    },

    Simbolos: {
        color: '#F28D9F',
        fontSize: 40,
        flexDirection: 'column',
    }


})