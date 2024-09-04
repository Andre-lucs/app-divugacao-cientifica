import { View, Text, Pressable } from "react-native";
import LoginForm from '../../components/Forms/LoginForm/index';
import { RegisterButtonText, MainLoginView, LogoImage, BottomTextView,LoginPageView } from "./styles";

export default function LoginPage () {
    return (
        <LoginPageView>
            <MainLoginView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <LoginForm onSubmit={()=>{}} forgotPassword={()=>{}}/>
            </MainLoginView>
            
            <BottomTextView>
                <Text>Não tem uma conta?</Text>               
                <Pressable onPress={()=> {console.log("asd")}}>
                    <RegisterButtonText>Registrar-se</RegisterButtonText>
                </Pressable>
            </BottomTextView>
        </LoginPageView>
    )
}