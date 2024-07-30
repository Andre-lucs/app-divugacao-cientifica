import { ReactNode } from "react";
import { Pressable } from "react-native"
import { DiscreteFormButtonText } from "@/src/components/Forms/styles";

type props = {
  children: ReactNode;
  onPress: ()=>void;
}

export default function Index(p:props){
  return (
    <Pressable onPress={p.onPress}>
      <DiscreteFormButtonText>{p.children}</DiscreteFormButtonText>
    </Pressable>
  )
}