import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import axios from 'axios';
import api from "../../../service/api";
import Posto from "./Posto";


export default function Postos() {

    const [nome, setNome] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = api.get("/postos/listar")
            .then((response) => {
                setNome(response.data[0].nome);
                setLista(response.data)
            })
        console.log(lista)
    }, []);

    const TopoLista = () => {
        return <Text style={estilos.titulo}>Postos de Gasolina</Text>
    }


    return <FlatList
        data={lista}
        renderItem={({ item }) => <Posto {...item}/>}
        keyExtractor={({id}) => id}
        ListHeaderComponent={TopoLista}
    />
}

const estilos = StyleSheet.create({
    titulo:{
        fontSize:20,
        lineHeight:32,
        marginHorizontal:16,
        marginTop:16,
        fontWeight:'bold',
        textAlign: "center"
    }
})