import { View, Text, Pressable } from "react-native";
import LoginForm, { LoginData } from  "@/src/components/Forms/LoginForm/index";
import { BottomTextButton, MainAuthView, LogoImage, BottomTextView,AuthPageView } from "@/src/pages/auth/styles";
import { Link, router,  } from "expo-router";
import {signIn} from "@/src/services/auth";
import { useContext } from "react";
import { AuthContext } from "@/src/app/_layout";

export default function LoginPage () {

    const authContext = useContext(AuthContext);

    function logIn(_logindata: LoginData){
        signIn(_logindata).then((data)=>{
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
                <LoginForm onSubmit={logIn} forgotPassword={()=>{}}/>
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