import React from 'react';
import { FlatList, ScrollView, View, StyleSheet } from 'react-native';
import VendasCard from '../componentes/VendasCard.js';

import filmes from '../mocks/vendas.js';

export default function Filmes() {
    return <FlatList 
                data={filmes}
                renderItem={({ item }) => (
                    <VendasCard nome={item.nome} imagem={item.imagem} preco={item.preco} />
                )}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListContent}
            />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    flatListContent: {
        padding: 16,
    },
});