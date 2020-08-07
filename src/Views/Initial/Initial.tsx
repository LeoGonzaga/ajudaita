import React, {useRef, useEffect} from 'react';

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
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';

const FadeInView: React.FC = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const Login: React.FC = () => {
  const {navigate} = useNavigation();

  function navigateToLogin() {
    navigate('Login');
  }
  function navigateToHome() {
    navigate('Home');
  }

  useEffect(() => {
    !true ? navigateToLogin() : navigateToHome();
  }, []);

  return (
    <Container>
      <FadeInView>
        <Logo source={require('../../Assets/Logo.png')} />
        <TitleApp>Ajuda Ita</TitleApp>
        <SubTitle>Uma frase braba</SubTitle>
      </FadeInView>

      <ContainerButton>
        <ButtonAction primary onPress={navigateToLogin}>
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
