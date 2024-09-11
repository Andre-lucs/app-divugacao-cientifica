import { View, Text, Pressable } from "react-native";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router } from "expo-router";
import { SignUpForm } from "@/src/components/Forms";

export default function RegisterPage () {
    return (
        <AuthPageView>
            <MainAuthView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <SignUpForm onSubmit={(_registerData)=>{router.replace("/")}} />
            </MainAuthView>
            
            <BottomTextView>
                <Text>Já tem uma conta?</Text>               
                <Link href={"/auth/login"} replace>
                    <BottomTextButton>Entrar</BottomTextButton>
                </Link>
            </BottomTextView>
        </AuthPageView>
    )
}