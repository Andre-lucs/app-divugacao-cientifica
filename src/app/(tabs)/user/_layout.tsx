import { Stack } from "expo-router";

export default function Index(){
  return (
    <Stack screenOptions={{headerShown:false} } initialRouteName="/" >
      <Stack.Screen name="index"/>
      <Stack.Screen name="updateProfile" options={{headerBackVisible:true, presentation:"modal"}} />
      <Stack.Screen name="event"/>
      <Stack.Screen name="history"/>
    </Stack>
  )
}