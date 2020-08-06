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
import {Colors} from '../../Styles/Colors';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();
const Login: React.FC = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);

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
          <ButtonAction primary underlayColor={Colors.onClick}>
            <TitleButton>Entrar</TitleButton>
          </ButtonAction>
        </ContainerInputs>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Login;
