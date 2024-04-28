import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Compra({ navigation }) {
  const handleVoltar = () => {
    navigation.navigate('Home');
  };

  const handleAlterarPedido = () => {
    // Implemente a lógica para alterar o pedido
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compra Fechada</Text>
      <Text style={styles.description}>Um e-mail com mais detalhes foi enviado para você. Para alterações de última hora, clique no botão "ALTERAR PEDIDO".</Text>
      <TouchableOpacity style={styles.button} onPress={handleAlterarPedido}>
        <Text style={styles.buttonText}>ALTERAR PEDIDO</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSuporte}>
        <Text style={styles.buttonText}>FALAR COM O SUPORTE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.backButton} onPress={handleVoltar}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4dbce9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonSuporte: {
    backgroundColor: '#fd4e6d',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: '#ccc',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
