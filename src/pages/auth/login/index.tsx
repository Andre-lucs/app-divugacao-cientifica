import { Alert, Text } from "react-native";
import LoginForm from  "@/src/components/Forms/LoginForm/index";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router, usePathname,  } from "expo-router";
import * as Auth from "@/src/services/auth";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";
import { LoginData } from "@/@types/authTypes";

export default function LoginPage () {

    const authContext = useContext(AuthContext);
    
    function signIn(_logindata: LoginData){
        Auth.signIn(_logindata).then((data)=>{
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
                <LoginForm onSubmit={signIn} forgotPassword={()=>{}}/>
            </MainAuthView>
            
            <BottomTextView>
                <Text>Não tem uma conta?</Text>               
                <Link href={"/auth/register"} replace>
                    <BottomTextButton>Registrar-se</BottomTextButton>
                </Link>
            </BottomTextView>
        </AuthPageView>
    )
}