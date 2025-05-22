import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen({ route }) {
  const { nome } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bem-vindo, {nome}!</Text>
      <Text style={styles.content}>Aqui está o seu cardápio 🍽️</Text>
      {/* Você pode adicionar uma lista de itens do cardápio aqui depois */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    color: '#666',
  },
});
