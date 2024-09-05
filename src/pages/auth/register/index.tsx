import { View, Text, Pressable } from "react-native";
import { BottomTextButton, MainLoginView, LogoImage, BottomTextView,LoginPageView } from "@/src/pages/auth/styles";
import { Link } from "expo-router";
import { SignUpForm } from "@/src/components/Forms";

export default function LoginPage () {
    return (
        <LoginPageView>
            <MainLoginView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <SignUpForm onSubmit={()=>{}} />
            </MainLoginView>
            
            <BottomTextView>
                <Text>Já tem uma conta?</Text>               
                <Link href={"/login"} replace>
                    <BottomTextButton>Entrar</BottomTextButton>
                </Link>
            </BottomTextView>
        </LoginPageView>
    )
}