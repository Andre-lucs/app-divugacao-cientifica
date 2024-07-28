import { ReactNode } from "react";
import { Pressable } from "react-native"
import { Text } from "./style";

type props = {
  children: ReactNode;
  onPress: ()=>void;
}

export default function Index(p:props){
  return (
    <Pressable onPress={p.onPress}>
      <Text>{p.children}</Text>
    </Pressable>
  )
}