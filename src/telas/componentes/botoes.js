import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";


function Botoes() {


    
    const  [valor, setValor] = useState('');

    const Conta = (index) => {
        if(valor.length <= 16){
        newValue = valor.concat(index.toString());

        return setValor(newValue);
        }
    }

    function isInteger(str) {
        var n = Math.floor(Number(str));
        return String(n) === str && n >= 0;
      }

    const Calcular = () => {
        
     
        if( isInteger(valor[0]) ) {
        result = eval(valor).toString();
        return setValor(result);

        }
        
        setValor('');



    }

    const RenderBotoesNumericos = ({i:i , zeroInc:zeroInc}) => {
        const botoes = [];

        if(!zeroInc){
            botoes.push(
            <View style={estilos.BotoesNumericosDisplay}>
                
            <TouchableOpacity style={estilos.BotoesNumericos} key={1 + i * 3} onPress={() => Conta(1 + i * 3) } >

                <Text style={estilos.Simbolos}>{1 + i * 3}</Text>

            </TouchableOpacity>
            
            <TouchableOpacity style={estilos.BotoesNumericos} key={2 + i * 3} onPress={() => Conta(2 + i * 3) } >

                <Text style={estilos.Simbolos}>{2 + i * 3}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={3 + i*3} onPress={() => Conta(3 + i*3) } >

                <Text style={estilos.Simbolos}>{3 + i*3}</Text>

            </TouchableOpacity>

             </View>
            );

        }   else {
            
            botoes.push(
                <View style={estilos.BotoesNumericosDisplay}>
                    
                <TouchableOpacity style={estilos.BotoesNulls} key={22} >
    
                    <Text>{}</Text>
    
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.BotoesNumericos} key={0} onPress={() => Conta(0) } >
    
                    <Text style={estilos.Simbolos}>{0}</Text>
    
                </TouchableOpacity>
    
                <TouchableOpacity style={estilos.BotoesNulls} key={44}  >
    
                    <Text>{}</Text>
    
                </TouchableOpacity>
    
                 </View>
                );
                

        }


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

            <TouchableOpacity style={estilos.BotoesNumericos} key={14} onPress={() => Conta(' / ') } >

                <Text style={estilos.Simbolos}>{'/'}</Text>

            </TouchableOpacity>

            <TouchableOpacity style={estilos.BotoesNumericos} key={15} onPress={() => Calcular() } >

                <Text style={estilos.Simbolos}>{'='}</Text>

            </TouchableOpacity>


        </View>)

        return botoes

    }

    return <View >
        <Text style={estilos.Simbolos}>{valor}</Text>
            
            <View style={estilos.BotoesOperadoresDisplay}>
                <View style={estilos.allDisplay}>
                
                    <View style={estilos.BotoesNumericosDisplay}>
                        <RenderBotoesNumericos i={0} style={estilos.Simbolos}  />
                    </View>
                    <View style={estilos.BotoesNumericosDisplay}>
                        <RenderBotoesNumericos i={1} style={estilos.Simbolos} />
                    </View>
                    <View style={estilos.BotoesNumericosDisplay}>
                        <RenderBotoesNumericos i={2} style={estilos.Simbolos} />
                    </View>
                    <View style={estilos.BotoesNumericosDisplay}>
                        <RenderBotoesNumericos zeroInc={true} style={estilos.Simbolos} />
                    </View>

               
                </View>

                <View style={estilos.allDisplay}>
                    <RenderBotoesOperadores style={estilos.Simbolos} />
                </View>
                
            </View>
        </View>




}

export default Botoes;

const estilos = StyleSheet.create({

    BotoesNumericos: {
        
        backgroundColor: '#392240',
        width: 98,
        height: 95,
        borderWidth: 1,
        borderColor: '#FFF953',
        display: "flex",
        
    
    },

    Zero: {
        backgroundColor: '#392240',
        width: 98,
        height: 95,
        borderWidth: 1,
        borderBottomWidth: 499,
        borderColor: '#FFF953',
    },

    allDisplay : {
         backgroundColor: '#FFF953'
        
    },

    BotoesNumericosDisplay: {
        flexDirection: 'row',
    
    },

    BotoesOperadoresDisplay: {
        flexDirection: 'row',
        marginTop: 70,
       
    },


    BotoesNulls: {
        backgroundColor: '#FFF953',
        width: 98,
        height: 500,
        
    },

    Simbolos: {
        color: '#F1F1F1',
        fontSize: 40,
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 10,
    },




})