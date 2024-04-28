import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Animated, Linking } from 'react-native';

export default function FAQ() {
  const [faqs, setFaqs] = useState([
    { question: 'Quais documentos preciso para visitar o Brasil?', answer: 'Passaporte válido, visto de turismo, comprovante de hospedagem, comprovante de recursos financeiros, certificado internacional de vacinação.' },
    { question: 'Preciso verificar os requisitos de visto antes de viajar para um país estrangeiro?', answer: 'Sim, é importante garantir que você atenda aos requisitos de visto antes de reservar qualquer viagem internacional. Em alguns casos, onde você precisará de um visto para viajar, o processo poderá ser demorado e levar vários meses para ser aprovado. Embora nossos dados sejam confiáveis ​​e atualizados, confirme as políticas reais de visto com uma embaixada antes de sua viagem.' },
    { question: 'O que é isento de visto?', answer: 'Isenção de visto significa que seu passaporte permite que você viaje para o país de destino sem precisar de visto de viagem. Ainda é importante ter seu passaporte e/ou carteira de identidade presente e válido por pelo menos 6 meses antes do vencimento.' },
    { question: 'O que é eTA?', answer: 'A Autorização Eletrônica de Viagem (eTA) é um requisito de entrada para estrangeiros isentos de visto e está vinculada ao passaporte do viajante. A solicitação de um eTA é um processo on-line simples, geralmente com processamento no mesmo dia.' },
    { question: 'O que é eVisa?', answer: 'O Visto Eletrônico (eVisa) é um visto obtido online. No banco de dados do Passport Index, existem dois tipos de eVisas com base nos requisitos da aplicação e no tempo de processamento. Certos eVisas (azuis) são um pedido de visto online simples, enquanto outros eVisas (vermelhos) exigem um procedimento mais complexo.' },
    { question: 'Você tem um aplicativo móvel?', answer: 'Sim, oferecemos acesso por aplicativo móvel à plataforma ECOTOUR em iOS e Android. Também temos um aplicativo Visa Checker dedicado para acesso rápido aos nossos dados, disponível para usuários do Android.' },
  ]);

  const [selectedIdx, setSelectedIdx] = useState(null);

  const toggleAnswer = (index) => {
    setSelectedIdx(selectedIdx === index ? null : index);
  };

  const openLink = () => {
    const link = `https://www.passportindex.org/`;
    Linking.openURL(link);
  };

  const renderFaqs = () => {
    return faqs.map((faq, index) => {
      const isOpen = selectedIdx === index;
      return (
        <View key={index} style={styles.faqContainer}>
          <TouchableOpacity onPress={() => toggleAnswer(index)}>
            <Text style={styles.question}>{faq.question}</Text>
          </TouchableOpacity>
          {isOpen && (
            <Animated.View style={[styles.answerContainer, { maxHeight: isOpen ? 1000 : 0 }]}>
              <Text style={styles.answer}>{faq.answer}</Text>
            </Animated.View>
          )}
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Perguntas Frequentes</Text>
      {renderFaqs()}

      <TouchableOpacity style={styles.loginButton} onPress={() => openLink()}>
          <Text style={styles.buttonText}>MAIS INFORMAÇÕES</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dceeb1',
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  faqContainer: {
    marginBottom: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  answerContainer: {
    overflow: 'hidden',
  },
  answer: {
    fontSize: 16,
    color: '#666',
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
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white'
  }
});
