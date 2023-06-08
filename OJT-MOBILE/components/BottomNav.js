import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Style";
import Icons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";

function BottomNav({ emergencyicon, navigation }) {
  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.3)"]}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.bottomNav}
    >
      <View style={styles.iconBox}>
        <Icons name="home" size={23} style={styles.icon} />
        <Text style={styles.iconText}>Home</Text>
      </View>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => navigation.navigate(emergencyicon)}
      >
        <Icons name="warning" size={23} style={{ color: "#8D0801" }} />
        <Text style={styles.iconText}>Emergency</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.iconBox}
        onPress={() => navigation.navigate("Account")}
      >
        <Icons name="person" size={23} style={styles.icon} />
        <Text style={styles.iconText}>Account</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

export default BottomNav;
