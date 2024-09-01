import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';


export const NavbarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #107039; /* Cor de fundo da navbar */
  padding: 10px 0;
  width: 100%;
  height: 66px;
  gap: 30px;
`;

export const NavItem = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const NavText = styled(Text)`
  color: #ffffff; /* Cor do texto dos itens de navegação */
  font-size: 16;
`;

export const NavbarIcon = styled.Image`
    height: 35px;
    width: 35px;
`;