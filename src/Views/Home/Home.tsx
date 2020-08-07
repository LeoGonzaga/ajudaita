import React from 'react';
import {Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  HomeContainer,
  AnalyseBox,
  SubTitle,
  TitleAppHeader,
  UserContainer,
  NumberID,
  UserName,
  LightText,
  Status,
  ContainerButtonHome,
  ButtonActionHome,
  TitleButtonHome,
} from '../../Styles/Global';

Icon.loadFont();
const Home: React.FC = () => {
  return (
    <HomeContainer>
      <TitleAppHeader>Ajuda Ita</TitleAppHeader>
      <UserContainer>
        <Image source={require('../../Assets/User.png')} user />
        <UserName>Léo Gonzaga</UserName>
        <LightText>CPF: 123.122.122-45</LightText>
      </UserContainer>
      <ContainerButtonHome>
        <ButtonActionHome>
          <Icon name="help-circle" />
          <TitleButtonHome>Dívidas</TitleButtonHome>
        </ButtonActionHome>
        <ButtonActionHome>
          <Icon name="feather" />
          <TitleButtonHome>Sugestões</TitleButtonHome>
        </ButtonActionHome>
        <ButtonActionHome>
          <Icon name="send" />
          <TitleButtonHome>Contato</TitleButtonHome>
        </ButtonActionHome>
      </ContainerButtonHome>
      <SubTitle>
        Nº de cadastros:<NumberID> 13872</NumberID>
      </SubTitle>
      <AnalyseBox>
        <LightText secundary>Situação:</LightText>
        <Status>Em analise</Status>
      </AnalyseBox>
    </HomeContainer>
  );
};

export default Home;
