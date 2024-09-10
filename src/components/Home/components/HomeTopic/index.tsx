import React from 'react';
import Colors from "@/src/styles/Colors";
import { View, Image, Text, StyleSheet, ImageSourcePropType } from "react-native";

type HomeTopicProps = {
  icon: ImageSourcePropType;
  path: string;
  title: string;
  color: string;
};

const HomeTopic: React.FC<HomeTopicProps> = ({ icon, path, title, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <Image source={require('@/assets/images/arrow_right_icon.png')} style={styles.icon} />
      </View>
      <View>
        <Image source={icon} style={styles.topicImage} />
        <Text style={styles.topicTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 155,
    borderRadius: 20,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  icon: {
    width: 11,
    height: 21,
  },
  topicImage: {
    width: 75,
    height: 75,
  },
  topicTitle: {
    textAlign: "center",
    color: Colors.white,
    fontWeight: '400',
    marginTop: 5,
  },
});

export default HomeTopic;
