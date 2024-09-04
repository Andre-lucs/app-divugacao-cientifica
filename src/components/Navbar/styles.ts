import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';


export const NavbarContainer = styled.View`
  flex-direction: row;
  background-color: #107039; 
  width: 100%;
  height: 66px;
  gap: 30px;
`;

export const NavItem = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
`;

export const NavText = styled(Text)`
  color: #ffffff;
  width: 60px;
  height: 60px;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavbarIcon = styled.Image`
    height: 35px;
    width: 35px;
`;