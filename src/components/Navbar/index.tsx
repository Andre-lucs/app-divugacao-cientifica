import { NavbarContainer, NavbarIcon, NavItem, NavText } from "./styles";


export default function () {
    return (
        <NavbarContainer>
          <NavItem onPress={() => console.log('Navigate to Home')}>
            <NavText><NavbarIcon source={require('@/assets/images/home_icon.png')}/></NavText>
          </NavItem>
          <NavItem onPress={() => console.log('Navigate to Profile')}>
            <NavText><NavbarIcon source={require('@/assets/images/radio_icon.png')} style={{width: 42, paddingBottom: 10}}/></NavText>
          </NavItem>
          <NavItem onPress={() => console.log('Navigate to Settings')}>
            <NavText><NavbarIcon source={require('@/assets/images/home_icon.png')}/></NavText>
          </NavItem>
        </NavbarContainer>
      );
}