import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import styles from "../components/Style";
import { LinearGradient } from "expo-linear-gradient";

function Default({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/images/bg-default.jpeg")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay} />
      <View style={styles.containerDefault}>
        <Text style={styles.welcomeDefault}>WELCOME</Text>
        <View style={styles.buttonContDef}>
          <TouchableOpacity
            style={styles.loginButnDefault}
            onPress={() => navigation.navigate("Login")}
          >
            <LinearGradient
              colors={["#6692c0", "#304e73"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.GradientBut}
            >
              <Text style={styles.loginDefault}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.registerButnDefault}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.registerDefault}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
export default Default;
