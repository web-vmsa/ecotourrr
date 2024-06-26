import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Cadastro({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [vinculo, setVinculo] = useState('');

  const handleRegister = () => {
    if (email && password && nome && vinculo) {
      navigation.navigate('Home');
    } else {
      alert('Prrencha todos os campos!');
    }
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.logoTop}>
          <Image style={styles.logo} source={require('./assets/logo-ecotour.jpeg')} />
        </View>

        <TextInput
          style={styles.input}
          label="Nome completo"
          placeholder="Nome completo"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          label="Profissão"
          placeholder="Profissão"
          value={vinculo}
          onChangeText={(text) => setVinculo(text)}
        />
        <TextInput
          style={styles.input}
          label="Email"
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          label="Senha"
          secureTextEntry
          placeholder="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>CADASTRE-SE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dceeb1',
    justifyContent: 'center'
  },
  logo: {
    width: 180,
    height: 100,
  },
  logoTop: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#333',
  },
  registerButton: {
    height: 40,
    borderColor: '#fd4e6d',
    backgroundColor: '#fd4e6d',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  },
  loginButton: {
    height: 40,
    borderColor: '#4dbce9',
    backgroundColor: '#4dbce9',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },

});