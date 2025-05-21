import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardapioScreen({ route }) {
  const { nome, email } = route.params || {};

  const cardapio = [
    { nome: '🍕 Pizza', preco: 'R$ 12,00' },
    { nome: '🍔 Hambúrguer', preco: 'R$ 10,00' },
    { nome: '🥗 Salada', preco: 'R$ 8,00' },
    { nome: '🧃 Suco natural', preco: 'R$ 5,00' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Bem-vindo, {nome}!</Text>
      <Text style={styles.subtitle}>Cardápio de hoje:</Text>

      <View style={styles.cardapio}>
        {cardapio.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Text style={styles.itemNome}>{item.nome}</Text>
            <Text style={styles.itemPreco}>{item.preco}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.footer}>E-mail cadastrado: {email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffaf0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardapio: {
    width: '100%',
    backgroundColor: '#f0f0f5',
    padding: 20,
    borderRadius: 12,
    marginBottom: 30,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 5,
  },
  itemNome: {
    fontSize: 18,
    color: '#333',
  },
  itemPreco: {
    fontSize: 18,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
