import { HeaderBackground, HeaderContent, HeaderImage } from "./styles";



export default function  () {
    return (
        <HeaderBackground>
          <HeaderContent>
            <HeaderImage source={require('@/assets/images/experiment_icon.png')} />
            <HeaderImage source={require('@/assets/images/bell_icon.png')} />
          </HeaderContent>
        </HeaderBackground>
      );
}

