
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Audio } from 'expo-av';
import { useFonts, Kanit_200ExtraLight, Kanit_600SemiBold } from '@expo-google-fonts/kanit';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//outras importações...
import Produto from './src/telas/Produtos';
import Sobre from './src/telas/Sobre';
import mock from './src/mocks/produto';
import mock_sobre from './src/mocks/sobre';
import mock_vendas from './src/mocks/vendas';
import mock_perfil from './src/mocks/perfil';
import Vendas from './src/Vendas';
import Perfil from './src/telas/Perfil';

function MenuPerfil() {
  return <Perfil />; // Apenas chame o componente de Perfil, sem precisar do mock diretamente aqui
}

function MenuKit() {
  return <Produto {...mock} />;
}

function MenuSobre() {
  return <Sobre {...mock_sobre} />;
}

function MenuVendas() {
  return <Vendas {...mock_vendas} />;
}


const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Kit") {
            iconName = focused ? 'flame-outline' : 'flame-outline';
          } else if (route.name === "Sobre") {
            iconName = focused ? 'at-outline' : 'at-outline';
          } else if (route.name === "Produtos") {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === "Lista de Desejos") {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === "Perfil") {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        tabBarHideOnKeyboard: true,
        headerShown: false,
      })}
    >
      <Tab.Screen name='Sobre' component={MenuSobre} />
      <Tab.Screen name='Kit' component={MenuKit} />
      <Tab.Screen name='Produtos' component={MenuVendas} />
      <Tab.Screen name='Lista de Desejos' component={MenuKit} />
      <Tab.Screen name='Perfil' component={MenuPerfil} />

    </Tab.Navigator>
  );
}

export default function App() {
  const [fonteCarregada] = useFonts({
    "KanitRegular": Kanit_200ExtraLight,
    "KanitBold": Kanit_600SemiBold
  });


  //INICIO SOM

  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  async function playSound() {
    // Verifica se há um som já carregado, se sim, pare-o antes de carregar o novo
    if (sound) {
      await sound.unloadAsync(); // Limpa o som anterior
    }

    const { sound: newSound } = await Audio.Sound.createAsync(require('./audio/recayd.mp3'));
    setSound(newSound);

    console.log("Playing music");
    await newSound.playAsync();
    setIsPlaying(true);
  }

  async function stopSound() {
    if (sound) {
      console.log("Stopping music");
      await sound.stopAsync();
      setIsPlaying(false);
    }
  }

  // Hook para limpar o som quando o componente for desmontado


  const toggleSound = () => {
    if (isPlaying) {
      stopSound();
    } else {
      playSound();
    }
  };

  // Verifica se as fontes foram carregadas
  if (!fonteCarregada) {
    return <View />;
  }

  return (
    <NavigationContainer>
      <TabsMenu />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleSound} style={styles.customButton}>
          <Text style={styles.buttonText}>
            {isPlaying ? "Music Off" : "Music On"}
          </Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
}

//FIM SOM


const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 85, // Ajuste a altura do botão conforme necessário
    left: 10,
  },
  customButton: {
    backgroundColor: '#4CAF50', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF', // Cor da fonte
    fontSize: 16,
    fontWeight: 'bold',
  },
});