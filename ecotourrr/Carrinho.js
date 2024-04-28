import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Carrinho({ navigation }) {
  
  const cancelar = () => {
    navigation.navigate('Home');
  };

  const acomodacoes = [
    {
      id: 1,
      nomeAcomodacao: 'Sesc Tepequém',
      valorAcomodacao: 'Diária: R$230,00',
      imagemAcomodacao: 'https://www.sescrr.com.br/wp-content/uploads/2020/08/Imagens-de-Apoio-Est%C3%A2ncia-Ecol%C3%B3gica-Sesc-Tepequ%C3%A9m-1.jpg',
      descricaoAcomodacao: 'Restaurante incluso. Quarto individual e quarto de casal.',
    },
  ];

  const seguros = [
    {
      id: 1,
      seguro: 'Seguro Real',
      seguroImagem:
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/05/melhor-seguro-viagem-capa2019-02-820x430.jpg',
      seguroDescricao: 'Para acidentes',
      valorSeguro: 'R$350,00'
    },
  ];

  const guias = [
    {
      id: 1,
      nomeGuia: 'Lucas Silveira',
      imagemGuia:
        'https://thispersondoesnotexist.com/',
      avaliacaoGuia: '4,9',
      descricaoGuia: 'Formado em Turismo no IFRR e com experiência de 15 anos em guiamento.',
      valorGuia: 'Diária: R$350,00'
    },
  ];

  const agencias = [
    {
      id: 1,
      nomeAgencia: 'Clube Native',
      imagemAgencia:
        'https://yt3.googleusercontent.com/ytc/AIdro_lR6PITewrANV5okFyAQ8UoBpoH0MV1E9Rm66Kz3W7KuV8=s900-c-k-c0x00ffffff-no-rj',
      contatoAgencia: 'www.clubenative.com.br',
      pacote: 'Safari Amazônico: Selva, banho de cachoeiras, rios e animais, interação como botos, pesca ecológica do pirarucu e todo exuberância da floresta Amazônica.',
      valorPacote: 'R$580,00'
    },
  ];

  const destinos = [
    {
      id: 1,
      nome: 'Serra do Tepequém',
      imagem:
        'https://s2-g1.glbimg.com/3J2w1KusYOBPQLg0nTwrmpE7_BM=/0x0:1280x693/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/M/U/upblQfSHS6wEwdeB8tGw/drone-master-imagens-aereas.jpg',
      descricao:
        'RR205 por mais 100 km. Tepequém. A terra dos diamantes, brilha hoje com o ecoturismo. Trilhas e cachoeiras são os elementos principais para quem nos visita. Local ideal para práticas de esportes de aventura, trekking, bike, Rapel entre outros.',
      observacao:
        '* Nosso destino é de baixa estrutura de mobilidade turística. Nossos atrativos não têm rampas de acesso, dificultando o acesso a quem tem mobilidade reduzida.',
      agenciasDisponiveis: [agencias[0]],
      acomodacoesDisponiveis: [acomodacoes[0]],
      segurosDisponiveis: [seguros[0]],
      guiasDisponiveis: [guias[0]]
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.destinos}>
          <Text style={styles.headerText}>Fechar Carrinho</Text>
          <Text style={styles.subHeader}>
            Verifique abaixo o seu carrinho completo.
          </Text>

          <View style={styles.linha}></View>
          <Text style={styles.tituloAgencias}>Agência Selecionada</Text>

          <View>
            {agencias.map((agencia) => (
              <TouchableHighlight
                key={agencia.id}>
                <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{ uri: agencia.imagemAgencia }}
                  />
                  <View style={styles.local}>
                    <Text style={styles.nome}>{agencia.nomeAgencia}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteText}>{agencia.pacote}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteValor}>{agencia.valorPacote}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <View style={styles.linha}></View>
          <Text style={styles.tituloAgencias}>Acomodação Selecionada</Text>

          <View>
            {acomodacoes.map((acomodacao) => (
              <TouchableHighlight
                key={acomodacao.id}
                onPress={() => openModal(acomodacao)}>
                <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{ uri: acomodacao.imagemAcomodacao }}
                  />
                  <View style={styles.local}>
                    <Text style={styles.nome}>{acomodacao.nomeAcomodacao}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteText}>{acomodacao.descricaoAcomodacao}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteValor}>{acomodacao.valorAcomodacao}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <View style={styles.linha}></View>
          <Text style={styles.tituloAgencias}>Guia Selecionada</Text>

          <View>
            {guias.map((guia) => (
              <TouchableHighlight
                key={guia.id}
                onPress={() => openModal(guia)}>
                <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{ uri: guia.imagemGuia }}
                  />
                  <View style={styles.local}>
                    <Text style={styles.nome}>{guia.nomeGuia}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteText}>{guia.descricaoGuia}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteValor}>{guia.valorGuia}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <View style={styles.linha}></View>
          <Text style={styles.tituloAgencias}>Seguro Selecionado</Text>

          <View>
            {seguros.map((seguro) => (
              <TouchableHighlight
                key={seguro.id}
                onPress={() => openModal(seguro)}>
                <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{ uri: seguro.seguroImagem }}
                  />
                  <View style={styles.local}>
                    <Text style={styles.nome}>{seguro.seguro}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteText}>{seguro.seguroDescricao}</Text>
                  </View>
                  <View style={styles.local}>
                    <Text style={styles.pacoteValor}>{seguro.valorSeguro}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <View style={styles.linha}></View>
          <Text style={styles.tituloAgencias}>Total: R$1.510,00</Text>
          <View style={styles.linha}></View>
          
          <TouchableOpacity style={styles.registerButton} onPress={cancelar}>
            <Text style={styles.buttonText}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.buttonText}>FINALIZAR COMPRA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dceeb1',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  headerEstrangeiro: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  subHeader: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'justify'
  },
  destinos: {
    justifyContent: 'center',
    padding: 20,
  },
  local: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  imagem: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  nome: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 10,
  },
  pacoteText: {
    fontSize: 16,
    paddingLeft: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  pacoteValor: {
    fontSize: 16,
    paddingLeft: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  fecharModal: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    borderColor: '#ccc',
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    fontWeight: 'bold',
  },
  modal: {
    backgroundColor: '#fafafa',
  },
  localModal: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  descricaoModal: {
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    textAlign: 'justify',
  },
  observacaoModal: {
    fontSize: 14,
    fontStyle: 'italic',
    marginLeft: 10,
    marginTop: 10,
  },
  linha: {
    height: 1,
    backgroundColor: '#ccc',
    marginLeft: 10,
    marginTop: 20,
  },
  tituloAgencias: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  agenciasListagem: {
    marginTop: 10,
    width: 350,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  agencia: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  agenciaNome: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 5,
    textAlign: 'center'
  },
  agenciaPacote: {
    fontSize: 14,
    marginBottom: 5,
    marginTop: 2,
    textAlign: 'center'
  },
  agenciaValor: {
    fontSize: 12,
    marginBottom: 5,
    marginTop: 2,
    textAlign: 'center'
  },
  agenciaImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 48,
  },
  agenciaContato: {
    fontSize: 14,
    color: '#4dbce9',
    textAlign: 'center'
  },
  agenciaAvaliacao: {
    fontSize: 14,
    color: '#e8da5e',
    textAlign: 'center'
  },
  carrinhoButton: {
    width: 180,
    height: 40,
    borderColor: '#4dbce9',
    backgroundColor: '#4dbce9',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  removerCarrinhoButton: {
    width: 180,
    height: 40,
    borderColor: '#ea525f',
    backgroundColor: '#ea525f',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  fecharCarrinho: {
    marginTop: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 40,
    borderColor: '#dceeb1',
    backgroundColor: '#dceeb1',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeCart: {
    fontWeight: 'bold',
  },
  requisitosButton: {
    height: 40,
    borderColor: '#4dbce9',
    backgroundColor: '#4dbce9',
    borderWidth: 1,
    borderRadius: 5,
    color: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  requisitosText: {
    fontWeight: 'bold',
    color: 'white'
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
  datas: {
    padding: 20,
  },
  precificacao: {
    fontStyle: 'italic',
    marginBottom: 8,
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
  }
});
