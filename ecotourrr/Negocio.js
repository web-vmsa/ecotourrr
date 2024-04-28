import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function Negocio({navigation}) {
  const [nomeNegocio, setNomeNegocio] = useState('');
  const [tipoNegocio, setTipoNegocio] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [localAtuacao, setLocalAtuacao] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleRegister = () => {
    if (nomeNegocio && tipoNegocio && cnpj && localAtuacao && email && telefone) {
      alert('Registro Concluído. Obrigado por se registrar. Iremos avaliar seu negócio e entrar em contato.');
      navigation.navigate('Login');
    } else {
      alert('Preencha todos os campos');
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
          label="Nome do Negócio"
          placeholder="Nome do Negócio"
          value={nomeNegocio}
          onChangeText={(text) => setNomeNegocio(text)}
        />
        <TextInput
          style={styles.input}
          label="Tipo de Negócio"
          placeholder="Tipo de Negócio"
          value={tipoNegocio}
          onChangeText={(text) => setTipoNegocio(text)}
        />
        <TextInput
          style={styles.input}
          label="CNPJ"
          placeholder="CNPJ"
          value={cnpj}
          onChangeText={(text) => setCnpj(text)}
        />
        <TextInput
          style={styles.input}
          label="Local de Atuação"
          placeholder="Local de Atuação"
          value={localAtuacao}
          onChangeText={(text) => setLocalAtuacao(text)}
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
          label="Telefone"
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />

        <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
          <Text style={styles.buttonText}>REGISTRAR</Text>
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
    borderColor: '#4caf50', // Green color for contrast
    backgroundColor: '#4caf50', // Green color for contrast
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
