import { HeaderBackground, HeaderContent, HeaderImage } from "@/src/components/Header/styles";
import Feather from '@expo/vector-icons/Feather';



export default function  () {
    return (
        <HeaderBackground>
          <HeaderContent>
            <HeaderImage source={require('@/assets/images/experiment_icon.png')} />
            <Feather name="bell" size={35} color="#ffff" />
          </HeaderContent>
        </HeaderBackground>
      );
}

