import { Alert, Text } from "react-native";
import LoginForm from  "@/src/components/Forms/LoginForm/index";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router, usePathname,  } from "expo-router";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/src/contexts/AuthContext";
import { LoginData } from "@/@types/authTypes";

export default function LoginPage () {

    const authContext = useContext(AuthContext);
    
    function signIn(_logindata: LoginData){
        authContext.login(_logindata).then((data)=>{
            console.log(data);
        }).catch((error:Error)=>{
            Alert.alert("Error :", error.message, [{text:"Tentar novamente"}]);
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