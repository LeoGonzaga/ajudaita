import React, {useRef, useState} from 'react';
import {Animated, KeyboardAvoidingView, Platform} from 'react-native';
import {
  Logo,
  ButtonAction,
  TitleButton,
  InputText,
  ContainerInputs,
  Container,
  ShowPassword,
} from '../../Styles/Global';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

import {Colors} from '../../Styles/Colors';

Icon.loadFont();
const Login: React.FC = () => {
  const {navigate, reset} = useNavigation();

  const [hidePassword, setHidePassword] = useState(true);

  function handleNavigationToHome() {
    reset({
      index: 0,
      routes: [{name: 'Home'}],
    });
  }

  return (
    <Container>
      <ShowPassword
        onPress={() => {
          setHidePassword(!hidePassword);
        }}>
        <Logo source={require('../../Assets/Logo.png')} />
      </ShowPassword>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ContainerInputs>
          <InputText
            placeholder="Digite seu melhor email"
            keyboardType="email-address"
          />
          <InputText
            placeholder="Digite sua senha"
            secureTextEntry={hidePassword}></InputText>
          <ButtonAction
            primary
            underlayColor={Colors.onClick}
            onPress={handleNavigationToHome}>
            <TitleButton>Entrar</TitleButton>
          </ButtonAction>
        </ContainerInputs>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
