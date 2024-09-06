import { Tabs } from "expo-router";
import Header from "@/src/components/Header";
import Feather from '@expo/vector-icons/Feather';
import Colors from "@/src/styles/Colors";

export default function TabLayout(){
  return (
    <Tabs screenOptions={{ 
      tabBarShowLabel:true,
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: Colors.darkprimary,
      tabBarInactiveTintColor: 'white',
      tabBarItemStyle: {height: 66, paddingBottom: 5},
      tabBarStyle: {backgroundColor: Colors.primary, height: 66},
      header: (props) => <Header/>,
      }}
      backBehavior="history"
      >
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: "Home",
          tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />,
         }} 
      />
      <Tabs.Screen 
        name="events" 
        options={{ 
          title: "Events",
          tabBarIcon: ({ color }) => <Feather size={28} name="radio" color={color} />,
          }} 
      />
      <Tabs.Screen 
        name="userProfile" 
        options={{ 
          title: "User",
          tabBarIcon: ({ color }) => <Feather size={28} name="user" color={color} />,
         }} 
      />
    </Tabs>
  );
}