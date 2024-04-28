import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Modal,
  Linking,
  TextInput,
  Picker
} from 'react-native';

export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [contador, setContador] = useState(0);
  const [selectedContinente, setSelectedContinente] = useState(''); 

  const continentes = [
    { id: 1, nome: 'África' },
    { id: 2, nome: 'América do Sul' },
    { id: 3, nome: 'Ásia' },
    { id: 4, nome: 'Europa' },
    { id: 5, nome: 'Oceania' },
    { id: 6, nome: 'América do Norte' },
  ];

  const closeCart = () => {
    if (contador > 0) {
      closeModal();
      navigation.navigate('Carrinho');
    } else {
      alert('O carrinho está vazio.');
    }
  };

  const handleRequisitos = () => {
    navigation.navigate('Requisitos');
  };

  const addCart = () => {
    setContador(contador + 1);
  };

  const removeCart = () => {
    if (contador > 0) {
      setContador(contador - 1);
    } else {
      alert('O carrinho está vazio.');
    }
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const acomodacoes = [
    {
      id: 1,
      nomeAcomodacao: 'Sesc Tepequém',
      valorAcomodacao: 'Diária: R$230,00',
      imagemAcomodacao: 'https://www.sescrr.com.br/wp-content/uploads/2020/08/Imagens-de-Apoio-Est%C3%A2ncia-Ecol%C3%B3gica-Sesc-Tepequ%C3%A9m-1.jpg',
      descricaoAcomodacao: 'Restaurante incluso. Quarto individual e quarto de casal.',
    },
    {
      id: 2,
      nomeAcomodacao: 'Pousada Platô',
      valorAcomodacao: 'Diária: R$350,00',
      imagemAcomodacao: 'https://www.hoteisdeluxobrasil.com.br/wp-content/uploads/2021/03/capa-46.jpg',
      descricaoAcomodacao: 'Quartos em formato de iglu, suítes e café da manhã.',
    },
    {
      id: 3,
      nomeAcomodacao: 'Pousada Donna Maroca',
      valorAcomodacao: 'Diária: R$300,00',
      imagemAcomodacao: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTilQAhyhAMMLUuihAr1VX63w22Y7nMvuNwnCUDammupA&s',
      descricaoAcomodacao: 'Redário. Camping. Café da manhã, almoço e jantar incluso.',
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
    {
      id: 2,
      seguro: 'Seguro Real',
      seguroImagem:
        'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/05/melhor-seguro-viagem-capa2019-02-820x430.jpg',
      seguroDescricao: 'Para acidentes',
      valorSeguro: 'R$350,00'
    },
    {
      id: 3,
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
    {
      id: 2,
      nomeGuia: 'Dhierry Costa',
      imagemGuia:
        'https://thispersondoesnotexist.com/',
      avaliacaoGuia: '4,8',
      descricaoGuia: 'Experiência de 25 anos em turismo.',
      valorGuia: 'R$350,00'
    },
    {
      id: 3,
      nomeGuia: 'Norton Luis',
      imagemGuia:
        'https://thispersondoesnotexist.com/',
      avaliacaoGuia: '5,0',
      descricaoGuia: 'Formado pela turma do Tepequém com experiência de 16 anos em guiamento.',
      valorGuia: 'R$350,00'
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
    {
      id: 2,
      nomeAgencia: 'Makunaima Soluções',
      imagemAgencia:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_w0ldTCI7Ca0R1jDWpVA65tV1xBcffAAtTK4psDvy_w&s',
      contatoAgencia: 'www.makunaima.com',
      pacote: 'City Tour em Boa Vista Em Boa Vista, no centro histórico, com duração: 2:h30m',
      valorPacote: 'R$85,00 reais por pessoa'
    },
    {
      id: 3,
      nomeAgencia: 'Turismo social SESC',
      imagemAgencia:
        'https://www.sesc-ce.com.br/wp-content/uploads/2017/02/turismo_social-300x247.png',
      contatoAgencia: 'www.milenio.com.br',
      pacote: 'A Fazenda Buritizal Grosso fica localizada no município do Bonfim a 130km da capital Boa Vista. O acesso é feito pela BR-401 sentido fronteira da Guiana, com duração de 1h:30m.',
      valorPacote: 'Valor: R$ 78,00 reais.'
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
      agenciasDisponiveis: [agencias[0], agencias[1], agencias[2]],
      acomodacoesDisponiveis: [acomodacoes[0], acomodacoes[1]],
      segurosDisponiveis: [seguros[0]],
      guiasDisponiveis: [guias[0], guias[1]]
    },
    {
      id: 2,
      nome: 'Serra Grande I',
      imagem:
        'https://static.wixstatic.com/media/aebb07_4ff21eb1eb62452db1e9afb66ec2acc3.jpg/v1/fill/w_720,h_540,al_c,q_85/aebb07_4ff21eb1eb62452db1e9afb66ec2acc3.jpg',
      descricao: 'Localizada no município de Cantá, a 38 quilômetros de Boa Vista, para chegar ao local, é preciso seguir pela BR 401, e depois entrar na RR 206, existe a possibilidade de visitar comunidades indígenas no caminho. após passar a vila Serra Grande siga na estrada vicinal Rio Branco e chegara ao seu destino. A Serra Grande tem 850 metros de altura mas por questões de segurança, os visitantes montam acampamento acima da principal cachoeira do lugar, a Excalibur, que fica a 500 metros do pé da serra, o visitante poderá também ver o Rio Branco que é o maior rio de Roraima',
      observacao: 'os atrativos dessa localidade cobram taxas de visitação+ utilização de condutores locais "Guias".',
      agenciasDisponiveis: [agencias[1]],
      acomodacoesDisponiveis: [acomodacoes[0]],
      segurosDisponiveis: [seguros[0]],
      guiasDisponiveis: []
    },
    {
      id: 3,
      nome: 'Monte Roraima',
      imagem:
        'https://services.meteored.com/img/article/conheca-o-monte-roraima-uma-das-formacoes-rochosas-mais-antigas-do-planeta-1681341827966_768.jpeg',
      descricao: 'O Monte Roraima é uma verdadeira obra-prima da natureza, repleto de emoção e mistério em cada uma de suas características distintas. Imagine-se diante dessa majestosa montanha, com suas paredes verticais se erguendo imponentes em direção ao céu. O formato singular de sua superfície plana nos deixa maravilhados, enquanto nos perguntamos sobre os segredos que ele guarda. Desafiar suas alturas é mais do que uma jornada física; é uma jornada espiritual, um teste de coragem e determinação que nos leva ao limite de nossos próprios limites.',
      observacao: '',
      agenciasDisponiveis: [],
      acomodacoesDisponiveis: [acomodacoes[1]],
      segurosDisponiveis: [seguros[0]],
      guiasDisponiveis: [guias[1]]
    },
  ];

  const openContact = (contato) => {
    Linking.openURL(contato);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.destinos}>
          <Text style={styles.headerText}>EcoTourRR</Text>
          <Text style={styles.subHeader}>
            Clique no destino para obter mais informações sobre como chegar aos
            locais.
          </Text>

          <View>
            {destinos.map((destino) => (
              <TouchableHighlight
                key={destino.id}
                onPress={() => openModal(destino)}>
                <View style={styles.card}>
                  <Image
                    style={styles.imagem}
                    source={{ uri: destino.imagem }}
                  />
                  <View style={styles.local}>
                    <Text style={styles.nome}>{destino.nome}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            ))}
          </View>

          <Text style={styles.headerEstrangeiro}>
            Você é turista estrangeiro?
          </Text>
          <Text style={styles.subHeader}>
            Para a entrada de um turista estrangeiro no Brasil, é necessário apresentar alguns documentos. Os requisitos podem variar de acordo com a nacionalidade do visitante.
          </Text>
          <TouchableOpacity style={styles.requisitosButton} onPress={handleRequisitos}>
            <Text style={styles.requisitosText}>CONFIRA AS EXIGÊNCIAS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        style={styles.modal}
        transparent={false}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <ScrollView>
          <Image
            source={{ uri: selectedItem?.imagem }}
            style={styles.modalImage}
          />
          <View style={styles.informacoes}>
            <Text style={styles.localModal}>{selectedItem?.nome}</Text>
            <Text style={styles.descricaoModal}>{selectedItem?.descricao}</Text>
            <Text style={styles.observacaoModal}>
              {selectedItem?.observacao}
            </Text>
          </View>
          <View style={styles.linha}></View>
          <View style={styles.agencias}>
            <Text style={styles.tituloAgencias}>Agências Parceiras</Text>
            <View style={styles.agenciasListagem}>
              {selectedItem?.agenciasDisponiveis &&
                selectedItem.agenciasDisponiveis.length > 0 && (
                  <View style={styles.agencia}>
                    {selectedItem.agenciasDisponiveis.map((agencia) => (
                      <View key={agencia.id}>
                        <Image
                          source={{ uri: agencia.imagemAgencia }}
                          style={styles.agenciaImage}
                        />
                        <Text style={styles.agenciaNome}>
                          {agencia.nomeAgencia}
                        </Text>
                        <Text style={styles.agenciaPacote}>
                          {agencia.pacote}
                        </Text>
                        <Text style={styles.agenciaValor}>
                          {agencia.valorPacote}
                        </Text>
                        <Text style={styles.agenciaContato} onPress={() => openContact(selectedItem.contatoAgencia)}>{agencia.contatoAgencia}</Text>
                        <TouchableOpacity style={styles.carrinhoButton} onPress={()=>addCart()}>
                          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.removerCarrinhoButton} onPress={()=>removeCart()}>
                          <Text style={styles.buttonText}>Remover do Carrinho</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
            </View>
          </View>

          <View style={styles.linha}></View>
          <View style={styles.agencias}>
            <Text style={styles.tituloAgencias}>Guias Disponíveis</Text>
            <View style={styles.agenciasListagem}>
              {selectedItem?.guiasDisponiveis &&
                selectedItem.agenciasDisponiveis.length > 0 && (
                  <View style={styles.agencia}>
                    {selectedItem.guiasDisponiveis.map((guia) => (
                      <View key={guia.id}>
                        <Image
                          source={{ uri: guia.imagemGuia }}
                          style={styles.agenciaImage}
                        />
                        <Text style={styles.agenciaNome}>
                          {guia.nomeGuia}
                        </Text>
                        <Text style={styles.agenciaPacote}>
                          {guia.descricaoGuia}
                        </Text>
                        <Text style={styles.agenciaValor}>
                          {guia.valorGuia}
                        </Text>
                        <Text style={styles.agenciaAvaliacao}>{guia.avaliacaoGuia}</Text>
                        <TouchableOpacity style={styles.carrinhoButton} onPress={()=>addCart()}>
                          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.removerCarrinhoButton} onPress={()=>removeCart()}>
                          <Text style={styles.buttonText}>Remover do Carrinho</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
            </View>
          </View>

          <View style={styles.linha}></View>
          <View style={styles.agencias}>
            <Text style={styles.tituloAgencias}>Acomodações Eco</Text>
            <View style={styles.agenciasListagem}>
              {selectedItem?.acomodacoesDisponiveis &&
                selectedItem.acomodacoesDisponiveis.length > 0 && (
                  <View style={styles.agencia}>
                    {selectedItem.acomodacoesDisponiveis.map((acomodacao) => (
                      <View key={acomodacao.id}>
                        <Image
                          source={{ uri: acomodacao.imagemAcomodacao }}
                          style={styles.agenciaImage}
                        />
                        <Text style={styles.agenciaNome}>
                          {acomodacao.nomeAcomodacao}
                        </Text>
                        <Text style={styles.agenciaPacote}>
                          {acomodacao.descricaoAcomodacao}
                        </Text>
                        <Text style={styles.agenciaValor}>
                          {acomodacao.valorAcomodacao}
                        </Text>
                        <TouchableOpacity style={styles.carrinhoButton} onPress={()=>addCart()}>
                          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.removerCarrinhoButton} onPress={()=>removeCart()}>
                          <Text style={styles.buttonText}>Remover do Carrinho</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
            </View>
          </View>

          <View style={styles.linha}></View>
          
          <View style={styles.datas}>
            <Text style={styles.precificacao}>Selecione um período e informe sua data de nascimento para precificação.</Text>
            <TextInput
              style={styles.input}
              label="Data de Ida"
              placeholder="Data de Ida"
            />
            <TextInput
              style={styles.input}
              label="Data de Volta"
              placeholder="Data de Volta"
            />
            <TextInput
              style={styles.input}
              label="Data de Nascimento"
              placeholder="Data de Nascimento"
            />
            <TextInput
              style={styles.input}
              label="Destino"
              placeholder="Destino"
            />
          </View>

          <View style={styles.agencias}>
            <Text style={styles.tituloAgencias}>Seguros</Text>
            <View style={styles.agenciasListagem}>
              {selectedItem?.segurosDisponiveis &&
                selectedItem.segurosDisponiveis.length > 0 && (
                  <View style={styles.agencia}>
                    {selectedItem.segurosDisponiveis.map((seguro) => (
                      <View key={seguro.id}>
                        <Image
                          source={{ uri: seguro.seguroImagem }}
                          style={styles.agenciaImage}
                        />
                        <Text style={styles.agenciaNome}>
                          {seguro.seguro}
                        </Text>
                        <Text style={styles.agenciaPacote}>
                          {seguro.seguroDescricao}
                        </Text>
                        <Text style={styles.agenciaValor}>
                          {seguro.valorSeguro}
                        </Text>
                        <TouchableOpacity style={styles.carrinhoButton} onPress={()=>addCart()}>
                          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.removerCarrinhoButton} onPress={()=>removeCart()}>
                          <Text style={styles.buttonText}>Remover do Carrinho</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                  </View>
                )}
            </View>
          </View>

          <TouchableHighlight style={styles.fecharCarrinho} onPress={closeCart}>
            <Text style={styles.closeCart}>Fechar Carrinho ({contador})</Text>
          </TouchableHighlight>

          <TouchableHighlight style={styles.fecharModal} onPress={closeModal}>
            <Text style={styles.closeButton}>Fechar</Text>
          </TouchableHighlight>
        </ScrollView>
      </Modal>
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
    height: 40,
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    marginBottom: 20,
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
  }
});
