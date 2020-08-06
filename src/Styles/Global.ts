import styled from 'styled-components/native';
import {Colors} from '../Styles/Colors';
import {ButtonType} from '../Types/Types';

export const Container = styled.View`
  flex: 1;
  background: ${Colors.secundary};
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  background-color: ${Colors.primary};
  align-self: center;
  border-radius: 10px;
  margin-top: 50px;
`;

export const TitleApp = styled.Text`
  font-size: 62px;
  color: ${Colors.primary};
  font-weight: bold;
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${Colors.subTitle};
  text-align: center;
`;
export const ContainerButton = styled.View`
  flex: 1%;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonAction = styled.TouchableHighlight`
  width: 90%;
  height: 60px;
  padding: 10px;
  background: ${(props: ButtonType) =>
    props.primary ? Colors.primary : Colors.secundary};
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  elevation: 15;
`;

export const TitleButton = styled.Text`
  color: ${(props: ButtonType) =>
    props.primary ? Colors.primary : Colors.secundary};
  font-weight: bold;
  font-size: 20px;
`;
