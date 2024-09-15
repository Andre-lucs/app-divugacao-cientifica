import styled from "styled-components/native"
import { Text } from "react-native"
import { useRouter } from "expo-router";
import { useTheme } from "react-native-paper";

export default function (){

  const theme = useTheme();
  const Router = useRouter();

  const CreateBtn = styled.Pressable`
  height: 40px;
  background-color: ${theme.colors.secondary};
  align-items: center;
  justify-content: center;
  width: 95%;
  border-radius: 5px;
  margin: 50px auto;
`;

  function gotoCreateEvent(){
    Router.navigate("events/newEvent");
  }
  return <CreateBtn onPress={gotoCreateEvent} ><Text style={{color:'white'}}>Criar</Text></CreateBtn>
}
