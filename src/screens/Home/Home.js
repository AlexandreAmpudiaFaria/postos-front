import React from "react";
import { Dimensions, Image, StyleSheet } from "react-native";
import logo from '../../../assets/postos-de-gasolina.webp';
import Postos from "./Components/Postos";


const width = Dimensions.get('screen').width;

export default function Home() {
    return <>
        <Image source={logo} style={styles.logo} />
        <Postos/>
    </>
}

const styles = StyleSheet.create({
    logo: {
        width: width,
        height: 627 / 1200 * width,
    }
}) 