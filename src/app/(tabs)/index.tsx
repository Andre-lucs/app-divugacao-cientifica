import { Alert, Button, Text, View, TextInput, StyleSheet, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Link } from "expo-router";
import React from "react";
import HomeTopics from "@/src/components/Home/HomeTopics";
import SimpleEventList from "@/src/components/Events/SimpleEventList";
import useEvents from "@/src/hooks/useEvents";


export default function Index() {

  const {events, getEvents} = useEvents();

  useEffect(() => {
    getEvents();
  }, [])

  
  return (
    <ScrollView
      style={{
        flex: 1,

        padding: 20,
        flexDirection:"column",
        width:'100%',
      }}
    > 
        <Text style={styles.title}>Bem vindo(a)!</Text>
        <HomeTopics/>  
        <View style={styles.eventsList}>
          <SimpleEventList title="Programação:" eventsData={events} category="programação"/> 
          <SimpleEventList title="GameDev:" eventsData={events} category="GameDev"/> 
          <SimpleEventList title="IA:" eventsData={events} category="IA"/> 
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 25,
    fontWeight: "600",
    margin: 20,

  },
  eventsList: {
    gap: 20,
    paddingBottom: 50,
    paddingTop: 20
  }
})