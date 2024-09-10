import React, { useState } from "react";
import { ScrollView, Image, StyleSheet, View, TouchableOpacity, Modal, Button } from "react-native";

import Texto from '../../componentes/Texto'
import Styles from './estilos'
import { WebView } from 'react-native-webview';
import VideoThumbnail from '../../../assets/teste.png';

export default function Index({ textos }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <ScrollView style={Styles.sobre}>
            <Image source={textos.logo} style={Styles.logo} resizeMode="contain" />
            <Texto style={Styles.textoSobre}>{textos.historia}</Texto>
            <Image source={textos.img_producao} style={Styles.fotoFitas} resizeMode="contain" />
            <Texto style={Styles.textoSobre}>{textos.texto_imagem}</Texto>

            {/* Imagem de miniatura para o vídeo */}
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={VideoThumbnail} style={styles.thumbnail} resizeMode="contain" />
            </TouchableOpacity>

            {/* Modal para exibir o vídeo */}
            <Modal
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
                transparent={true}
                animationType="slide"
            >
                <View style={Styles.modalContainer}>
                    <WebView
                        source={{ uri: 'https://www.youtube.com/watch?v=7-DnjWLmZDg' }} // Substitua SEU_ID_DE_VIDEO pelo ID do seu vídeo
                        style={Styles.video}
                        javaScriptEnabled={true}
                        domStorageEnabled={true}
                    />
                    <Button title="Fechar" onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    thumbnail: {
        width: '100%',
        height: 200, // Defina a altura conforme necessário
        marginVertical: 20,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparência para o fundo do modal
    },
    video: {
        width: '100%',
        height: 300, // Defina a altura conforme necessário
    },
});