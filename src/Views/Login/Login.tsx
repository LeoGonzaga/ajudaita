import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import {
  Logo,
  ButtonAction,
  TitleButton,
  InputText,
  DetailTextButton,
  ContainerInputs,
  Container,
} from '../../Styles/Global';
import {Colors} from '../../Styles/Colors';
import styled from 'styled-components/native';

const Login: React.FC = ({navigation}) => {
  return (
    <Container>
      <Logo source={require('../../Assets/Logo.png')} />
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ContainerInputs>
          <InputText
            placeholder="Digite seu melhor email"
            keyboardType="email-address"
          />
          <InputText placeholder="Digite sua senha" secureTextEntry />
          <ButtonAction primary underlayColor={Colors.onClick}>
            <TitleButton>Entrar</TitleButton>
          </ButtonAction>
        </ContainerInputs>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
