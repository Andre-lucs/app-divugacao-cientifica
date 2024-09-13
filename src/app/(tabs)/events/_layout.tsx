import { Stack } from "expo-router";

export default function Index(){
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="[eventId]"/>
      <Stack.Screen name="myEvents/[myEventId]"/>
    </Stack>
  )
}