import { Alert, Button, Text, View, TextInput, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Colors from "@/src/styles/Colors";
import RowDetail from "@/src/components/RowDetail";
import UserNavigation from "@/src/components/User/UserNavigation";


export default function Index() {
  const [date, setDate] = useState(new Date())


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        flexGrow:1,
        flexDirection:"column",
        width:'100%',
     
      }}
    >
      <View style={styles.userInfoProfileContainer}>
        <View style={styles.userInfo}>
          <Image source={require('@/assets/images/user_photo_profile.png')}/>
          <View>
            <Text style={styles.userName}>Julia Soares</Text>
            <Text>Estudante</Text>
          </View>
        </View>
        <View>
          <View style={styles.userAdditionalInfo}>
            <Feather name="phone" size={24} color={Colors.primary} />
            <Text>(99) 9999-9999</Text>
          </View>
          <View style={styles.userAdditionalInfo}>
            <MaterialCommunityIcons name="email-outline" size={24} color={Colors.primary}/>
            <Text>email@gmail.com</Text>
          </View>
        </View>
          <UserNavigation/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

    userInfoProfileContainer: {
      width: "100%"
    },

    userInfo: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: 20,
      gap: 20
    },

    userName: {
      fontSize: 24,
      fontWeight: "600"
    },

    userAdditionalInfo: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: 20,
      marginBottom: 15,
      gap: 20
    }

});
