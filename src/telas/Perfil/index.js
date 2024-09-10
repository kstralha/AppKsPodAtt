import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TextInput, Alert } from 'react-native';
import mockPerfil from '../../mocks/perfil.js'; 
import Texto from '../../componentes/Texto'
import AvatarDefault from '../../../assets/avatar1.png';
import * as ImagePicker from 'expo-image-picker';

export default function Perfil() {
  
  const [descricao, setDescricao] = useState("Desenvolvedor Full Stack apaixonado por tecnologia.");
  const [editando, setEditando] = useState(false); 
  const [avatar, setAvatar] = useState(AvatarDefault); 

 
  const editarPerfil = () => {
    setEditando(!editando);
  };

  
  const tirarFoto = async () => {
    // Solicita permissões para a câmera
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão necessária', 'Precisamos da permissão para acessar a câmera!');
      return;
    }
  
    try {
      // Abre a câmera para tirar a foto
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [1, 1], // Para manter a proporção quadrada (como um avatar)
        quality: 1, // Qualidade da imagem
      });
  
      // Exibe o resultado completo no console para verificar o que está retornando
      console.log("Resultado da câmera:", result);
  
      // Verifica se o usuário tirou a foto
      if (!result.canceled) {
        // Atualiza o URI corretamente
        const uri = result.assets[0].uri;
        console.log("Foto URI:", uri); // Verifique o URI no console
        setAvatar({ uri: uri }); // Define a foto como o novo avatar
      }
    } catch (error) {
      console.error("Erro ao capturar a foto: ", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Exibe o avatar (foto ou padrão) */}
      <Image source={avatar} style={styles.avatar} />

      {/* Botão para tirar a foto */}
      <Button title="Tirar Foto" onPress={tirarFoto} />

      {/* Alterna entre TextInput (modo de edição) e Text (visualização) */}
      {editando ? (
        <TextInput
          style={styles.descricaoInput}
          value={descricao}
          onChangeText={setDescricao} // Atualiza o estado da descrição enquanto o usuário edita
        />
      ) : (
        <Text style={styles.descricao}>{descricao}</Text> // Exibe a descrição no modo de visualização
      )}

      {/* Botão que alterna entre "Editar" e "Salvar" */}
      <Button title={editando ? "Salvar" : "Editar Perfil"} onPress={editarPerfil} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75, // Faz com que a imagem seja exibida como círculo
    marginBottom: 20,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  descricaoInput: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: '80%',
  },
});