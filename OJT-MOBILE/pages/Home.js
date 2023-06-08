import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import styles from "../components/Style";
import Nav from "../components/Nav";
import BottomNav from "../components/BottomNav";

function Home() {
  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      {/* <Nav /> */}
      <BottomNav />
    </View>
  );
}

export default Home;
