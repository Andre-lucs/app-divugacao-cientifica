import { View, Text, Pressable } from "react-native";
import LoginForm from '../../../components/Forms/LoginForm/index';
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router,  } from "expo-router";

export default function LoginPage () {
    return (
        <AuthPageView>
            <MainAuthView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <LoginForm onSubmit={(_logindata)=>{router.replace("/")}} forgotPassword={()=>{}}/>
            </MainAuthView>
            
            <BottomTextView>
                <Text>Não tem uma conta?</Text>               
                <Link href={"/register"} replace>
                    <BottomTextButton>Registrar-se</BottomTextButton>
                </Link>
            </BottomTextView>
        </AuthPageView>
    )
}