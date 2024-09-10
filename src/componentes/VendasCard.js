import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function FilmeCard({ nome, imagem, preco }) {
    return (
        <Card style={styles.card}>
            <Card.Cover source={imagem} style={styles.imagem} />
            <Card.Content>
                <Title style={styles.nome}>{nome}</Title>
                <Paragraph style={styles.preco}>{preco}</Paragraph>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        margin: 10,
        borderRadius: 15,
        backgroundColor: 'black',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 8,
        padding: 20,
        overflow: 'hidden',  // Para garantir que dois cards cabem na mesma linha
     
    },
    imagem: {
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 15,
    },
    nome: {
        fontSize: 20,
        fontWeight: '700',
        color: 'white',
    },
    preco: {
        fontSize: 18,
        color: 'grey',
        marginTop: 8,
    },
});