import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNav from "../components/BottomNav";
import { getSession, clearSession } from "../components/Session";
import { updateUsername } from "../APIcall/ProfileAPI";

function UpdateUsername() {
  const [userValue, setUserValue] = useState("");
  const [UserID, SetUserID] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [successMessage, SetsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        SetUserID(session.id);
      }
    });
  }, []);

  const handleUpdateUsername = async () => {
    try {
      console.log(UserID);
      const data = await updateUsername(UserID, userValue);
      if (data.success) {
        setSuccess(true);
        setUserValue("");
        setUsernameError("");
        SetsuccessMessage(data.success);
      } else if (data.errors) {
        setUsernameError(data.errors.username || "");
        setSuccess("");
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
      <View style={{ ...styles.container }}>
        <View style={{ ...styles.formgroup, marginTop: 10 }}>
          {success && (
            <View style={styles.successcontainer}>
              <Icon
                name="check-circle-o"
                size={20}
                color="white"
                style={styles.icon}
              />
              {successMessage ? (
                <Text style={styles.successmessage}>{successMessage}</Text>
              ) : null}
            </View>
          )}
          <View style={styles.formicons}>
            <Icon name="user" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Enter new username"
              placeholderTextColor="#fff"
              value={userValue}
              onChangeText={setUserValue}
            />
          </View>
          {usernameError ? (
            <Text style={styles.error}>{usernameError}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.confirmbutton}
            onPress={handleUpdateUsername}
          >
            <LinearGradient
              colors={["#6692c0", "#304e73"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.confirmGradient}
            >
              <Text style={styles.buttonText}>Change</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

export default UpdateUsername;
