import { Text, Alert } from "react-native";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router } from "expo-router";
import { RegisterForm } from "@/src/components/Forms";
import { useContext } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";
import { RegisterFormResponse } from "@/@types/authTypes";

export default function RegisterPage () {
    const authContext = useContext(AuthContext);

    function onSubmit(_registerData: RegisterFormResponse){
        authContext.register(_registerData).then((data)=>{
            console.log(data);
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
                <Link href={"/auth/"} replace>
                    <BottomTextButton>Entrar</BottomTextButton>
                </Link>
            </BottomTextView>
        </AuthPageView>
    )
}