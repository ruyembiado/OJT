import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "../components/Style";
import * as React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import BottomNav from "../components/BottomNav";

function Dashboard({ navigation }) {
  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={styles.title_container}>
          <Text style={styles.dashboard_title}>Activity</Text>
        </View>
        <View style={styles.dashbox_sm_container}>
          <View style={styles.dashbox_sm}></View>
          <View style={styles.dashbox_sm}></View>
          <View style={styles.dashbox_sm}></View>
        </View>
        <View style={styles.title_container}>
          <Text style={styles.dashboard_title}>Lorem Ipsum</Text>
        </View>
        <View style={styles.dashbox}></View>
      </View>
      <BottomNav></BottomNav>
    </LinearGradient>
  );
}
export default Dashboard;
