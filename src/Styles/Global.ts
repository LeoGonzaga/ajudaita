import styled from 'styled-components/native';
import {Colors} from '../Styles/Colors';
import {ButtonType} from '../Types/Types';
import {RectButton} from 'react-native-gesture-handler';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${Colors.secundary};
  flex-direction: column;
`;

export const Container = styled.View`
  flex: 1;
  background: ${Colors.secundary};
  justify-content: flex-end;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  background-color: ${(props: any) => (props.user ? '#fff' : Colors.primary)};
  align-self: center;
  border-radius: 10px;
  margin-top: 80px;
`;

export const TitleApp = styled.Text`
  font-size: 62px;
  color: ${Colors.primary};
  font-weight: bold;
  text-align: center;
`;

export const TitleAppHeader = styled.Text`
  font-size: 26px;
  color: ${Colors.primary};
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
`;

export const SubTitle = styled.Text`
  font-size: 17px;
  color: ${Colors.subTitle};
  text-align: center;
  margin: 10px 0;
`;

export const ContainerButton = styled.View`
  flex: 1;
  align-items: center;
  margin: 40px 0;
`;

export const ButtonAction = styled(RectButton)`
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

export const ContainerInputs = styled.View`
  align-items: center;
  margin-top: 40px;
  align-items: center;
`;

export const InputText = styled.TextInput`
  width: 90%;
  height: 60px;
  padding: 10px;
  border-radius: 24px;
  border: 1px solid ${Colors.grey};
  margin-bottom: 10px;
  text-align: center;
  font-size: 18px;
`;

export const DetailTextButton = styled.TouchableOpacity``;

export const ShowPassword = styled.TouchableOpacity``;

//-------------  H O M E ---------------
export const AnalyseBox = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${Colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const UserContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.Text`
  font-size: 22px;
  font-weight: 600;
`;

export const ButtonsContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const LightText = styled.Text`
  font-size: 20px;
  color: ${(props: ButtonType) =>
    props.secundary ? Colors.secundary : Colors.grey};
  font-weight: 100;
`;

export const Status = styled.Text`
  font-weight: bold;
  color: ${Colors.secundary};
  font-size: 28px;
`;

export const ContainerButtonHome = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonActionHome = styled(RectButton)`
  width: 90%;
  height: 60px;
  padding: 10px;
  flex-direction: row;
  background: ${(props: ButtonType) =>
    props.primary ? Colors.primary : Colors.secundary};
  margin: 7px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  elevation: 2;
`;

export const TitleButtonHome = styled.Text`
  font-size: 14px;
  margin: 0 10px;
`;
export const NumberID = styled.Text`
  color: ${Colors.primary};
  font-weight: bold;
`;
