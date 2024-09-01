import { NavbarContainer, NavbarIcon, NavItem, NavText } from "./styles";

export default function () {
    return (
        <NavbarContainer>
          <NavItem onPress={() => console.log('Navigate to Home')}>
            <NavText><NavbarIcon source={require('@/assets/images/home_icon.svg')}/></NavText>
          </NavItem>
          <NavItem onPress={() => console.log('Navigate to Profile')}>
            <NavText><NavbarIcon source={require('@/assets/images/radio_icon.svg')} style={{height:42, width: 42}}/></NavText>
          </NavItem>
          <NavItem onPress={() => console.log('Navigate to Settings')}>
            <NavText><NavbarIcon source={require('@/assets/images/user_icon.svg')}/></NavText>
          </NavItem>
        </NavbarContainer>
      );
}