import { View, Text, Pressable } from "react-native";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router } from "expo-router";
import { SignUpForm } from "@/src/components/Forms";
import { useContext } from "react";
import { AuthContext } from "@/src/app/_layout";
import { register, signIn } from "@/src/services/auth";

export default function RegisterPage () {
    const authContext = useContext(AuthContext);


    function onSubmit(_registerData: any){
        register(_registerData).then((data)=>{
            authContext?.setAuthToken(data.token);
            authContext?.setUsername(data.name);
            authContext?.setEmail(data.email);
            authContext?.setIsSignedIn(true);
            router.replace("/");
        })
    }

    return (
        <AuthPageView>
            <MainAuthView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <SignUpForm onSubmit={onSubmit} />
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