import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleCadastro = () => {
    if (nome && email) {
      navigation.navigate('Cardapio', { nome, email });
    } else {
      alert('Preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro do Aluno</Text>

      <View style={styles.inputWrapper}>
        <Ionicons name="person-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Ionicons name="mail-outline" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.buttonWrapper}>
        <Button title="Cadastrar" onPress={handleCadastro} color="#007AFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
