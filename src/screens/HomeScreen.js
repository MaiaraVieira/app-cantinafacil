import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Cantina Fácil</Text>
      <Text style={styles.subtitle}>Faça seu pedido com ainda mais facilidade!</Text>

      <View style={styles.emojiWrapper}>
        <Text style={styles.emoji}>🍕</Text>
        <Text style={styles.emoji}>🍔</Text>
        <Text style={styles.emoji}>🥤</Text>
        <Text style={styles.emoji}>🥗</Text>
      </View>

      <View style={styles.buttonWrapper}>
        <Button
          title=" Cadastra-se"
          onPress={() => navigation.navigate('Cadastro')}
          color="#007AFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  emojiWrapper: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 36,
    marginHorizontal: 8,
  },
  buttonWrapper: {
    width: '70%',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default HomeScreen;
