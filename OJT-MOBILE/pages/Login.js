import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginAPI } from "../APIcall/LoginAPI";

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userError, setUserError] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginAPI(username, password); // call login function
      if (data.success) {
        await AsyncStorage.setItem("session", JSON.stringify(data.session)); //set session
        if (data.session.role === "student") {
          navigation.navigate("StudentEmergency"); //redirect to student emergency page
        } else if (data.session.role === "rescuer") {
          navigation.navigate("EmergencyList"); //redirect to Rescuer emergency page
        }
      } else if (data.errors) {
        setUserError(data.errors.username || "");
        setPasswordError(data.errors.password || "");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/login-logo.png")}
          style={{ ...styles.loginlogo, marginTop: 120 }}
        />
        <View style={styles.logintitleCont}>
          <Text style={styles.titlelogin}>Sign in</Text>
          <Text style={styles.titlesub}>Please sign in to continue</Text>
        </View>
        <View style={styles.formgroup}>
          <View style={styles.formicons}>
            <Icon name="user" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Username"
              placeholderTextColor="#fff"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          {userError ? <Text style={styles.error}>{userError}</Text> : null}

          <View style={styles.formicons}>
            <Icon name="lock" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Password"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
          </View>
          {passwordError ? (
            <Text style={styles.error}>{passwordError}</Text>
          ) : null}

          <TouchableOpacity style={styles.confirmbutton} onPress={handleLogin}>
            <LinearGradient
              colors={["#6692c0", "#304e73"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.confirmGradient}
            >
              <Text style={styles.buttonText}>Sign in</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Text style={styles.links}>No Account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.links}> Register here</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.forgotpass}>Forgot Password?</Text>
        </View>
      </View>
    </LinearGradient>
  );
}

export default Login;
