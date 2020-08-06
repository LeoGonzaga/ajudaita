import React from 'react';
import {View, Text, Alert} from 'react-native';

import styled from 'styled-components/native';
import {
  Container,
  ContainerButton,
  ButtonAction,
  TitleApp,
  SubTitle,
  TitleButton,
  Logo,
} from '../../Styles/Global';
import {Colors} from '../../Styles/Colors';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo source={require('../../Assets/Logo.png')} />

      <TitleApp>Ajuda Ita</TitleApp>
      <SubTitle>Uma frase braba</SubTitle>
      <ContainerButton>
        <ButtonAction
          primary
          onPress={() => Alert.alert('aaaaaa')}
          underlayColor={Colors.onClick}>
          <TitleButton>Entrar</TitleButton>
        </ButtonAction>
        <ButtonAction>
          <TitleButton primary>Criar uma conta</TitleButton>
        </ButtonAction>
      </ContainerButton>
    </Container>
  );
};

export default Login;
