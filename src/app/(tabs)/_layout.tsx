import { Redirect, Tabs } from "expo-router";
import Header from "@/src/components/Header";
import Feather from '@expo/vector-icons/Feather';
import Colors from "@/src/styles/Colors";
import { useContext, useEffect } from "react";
import { EventContext, EventProvider } from "@/src/contexts/EventContext";
import { AuthContext } from "@/src/contexts/AuthContext";

export default function TabLayout(){

  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    eventContext?.getEvents();
  }, [])

  const TabLayout = (
  <EventProvider>
    <Tabs screenOptions={{ 
      tabBarShowLabel:true,
      tabBarActiveTintColor: 'white',
      tabBarActiveBackgroundColor: Colors.darkprimary,
      tabBarInactiveTintColor: 'white',
      tabBarItemStyle: {height: 66, paddingBottom: 5},
      tabBarStyle: {backgroundColor: Colors.primary, height: 66},
      header: (props) => <Header/>,  
    }}
      backBehavior="initialRoute"
      initialRouteName="index"
      screenListeners={{tabPress: (e) => {console.log(JSON.stringify(authContext))} }}
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
        name="user" 
        options={{ 
          title: "User",
          tabBarIcon: ({ color }) => <Feather size={28} name="user" color={color} />,
         }} 
      />
    </Tabs>
  </EventProvider>
  );

return (authContext?.authData?.isSignedIn ? TabLayout : <Redirect href="/auth" />)
}
