import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../../../assets/imagem.png';


export default function Posto({ nome, telefone }) {
    return <View style={estilos.cartao}>
        <Image source={logo} style={estilos.imagem} />
        <View style={estilos.infos}>
            <Text style={estilos.nome}> {nome} </Text>
            <Text> {telefone} </Text>
        </View>
    </View>
}

const estilos = StyleSheet.create({
    cartao: {
        backgroundColor: '#F6F6F6',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        
        elevation: 4, //apenas android

        //ios
        shadowColor:'#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

    },
    imagem: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    infos: {
        flex: 1,
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        fontWeight: "bold",
        lineHeight: 22,
    }
})