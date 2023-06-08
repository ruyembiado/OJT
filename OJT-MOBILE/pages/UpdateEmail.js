import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNav from "../components/BottomNav";
import { getSession, clearSession } from "../components/Session";
import { updateEmail } from "../APIcall/ProfileAPI";

function UpdateEmail() {
  const [EmailValue, setEmailValue] = useState("");
  const [UserID, SetUserID] = useState("");
  const [emailError, setEmailErrors] = useState("");
  const [successMessage, SetsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        SetUserID(session.id);
      }
    });
  }, []);

  const handleUpdateEmail = async () => {
    try {
      console.log(UserID);
      const data = await updateEmail(UserID, EmailValue);
      if (data.success) {
        setSuccess(true);
        setEmailValue("");
        setEmailErrors("");
        SetsuccessMessage(data.success);
      } else if (data.errors) {
        setEmailErrors(data.errors.email || "");
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
            <Icon name="envelope" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Enter new email"
              placeholderTextColor="#fff"
              value={EmailValue}
              onChangeText={setEmailValue}
            />
          </View>
          {emailError ? <Text style={styles.error}>{emailError}</Text> : null}
          <TouchableOpacity
            style={styles.confirmbutton}
            onPress={handleUpdateEmail}
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

export default UpdateEmail;
