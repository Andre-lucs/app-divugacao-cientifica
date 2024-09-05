import { View, Text, Pressable } from "react-native";
import LoginForm from '../../../components/Forms/LoginForm/index';
import { BottomTextButton, MainLoginView, LogoImage, BottomTextView,LoginPageView } from "@/src/pages/auth/styles";
import { Link,  } from "expo-router";

export default function LoginPage () {
    return (
        <LoginPageView>
            <MainLoginView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <LoginForm onSubmit={()=>{}} forgotPassword={()=>{}}/>
            </MainLoginView>
            
            <BottomTextView>
                <Text>Não tem uma conta?</Text>               
                <Link href={"/register"} replace>
                    <BottomTextButton>Registrar-se</BottomTextButton>
                </Link>
            </BottomTextView>
        </LoginPageView>
    )
}