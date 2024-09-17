import { Text, Alert } from "react-native";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router } from "expo-router";
import { RegisterForm } from "@/src/components/Forms";
import { useContext } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";
import * as Auth from "@/src/services/auth";
import { RegisterFormResponse } from "@/@types/authTypes";

export default function RegisterPage () {
    const authContext = useContext(AuthContext);

    function onSubmit(_registerData: RegisterFormResponse){
        Auth.register(_registerData).then((data)=>{
            authContext.setAuthData(data);
            router.replace("/");
        }).catch((error:Error)=>{
            Alert.alert("Erro :", error.message, [{text:"Ok"}]);
        });
    }

    return (
        <AuthPageView>
            <MainAuthView>
                <LogoImage source={require("@/assets/images/logo.png")}/>
                <RegisterForm onSubmit={onSubmit} />
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