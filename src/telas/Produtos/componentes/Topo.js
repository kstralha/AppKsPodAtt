import React from 'react';
import { StyleSheet, Dimensions, Image, StatusBar, View, SafeAreaView} from 'react-native';

import Header from '../../../../assets/elfbar.jpg'
import Texto from '../../../componentes/Texto.js'

//Captura o tamanho da tela que está rodando o app
const width = Dimensions.get('screen').width;

export default function Topo({titulo}){
    return <View>
                <StatusBar />  
                <Image source={Header} style={styles.topo} resizeMode="contain"/>
                <View style={styles.container}>
                    <View>
                    <Texto style={styles.titulo}>{titulo}</Texto>
                    </View>
                </View>     
            </View>
}

const styles = StyleSheet.create({
    topo: {
      width: "100%",
      height: 1197 / 1600 * width,
    },
    titulo: {
      width: "100%",
      position: "absolute",
      textAlign: "right",
      fontSize: 22,
      color: "white",
      fontWeight: "bold",
      paddingTop: 70,
    },
  });