import { View, Text } from "react-native";
import LoginForm from '../../components/Forms/LoginForm/index';
import { RegisterButton, MainLoginView, LogoImage, BottomTextView,LoginPageView } from "./styles";

export default function LoginPage () {
    return (
        <LoginPageView>
            <MainLoginView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <LoginForm onSubmit={()=>{}} forgotPassword={()=>{}}/>
            </MainLoginView>
            
            <BottomTextView>
                <Text>
                    Não tem uma conta? 
                    <RegisterButton onPress={()=> {console.log("asd")}}> Registrar-se</RegisterButton>
                </Text>               
            </BottomTextView>
        </LoginPageView>
    )
}