import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNav from "../components/BottomNav";
import { getSession, clearSession } from "../components/Session";
import { updatePassword } from "../APIcall/ProfileAPI";

function UpdatePassword() {
  const [UserID, SetUserID] = useState("");
  const [CurrentValue, setCurrentValue] = useState("");
  const [currentError, setCurrentError] = useState("");
  const [newValue, setNewValue] = useState("");
  const [newError, setNewError] = useState("");
  const [confNewValue, setConfNewValue] = useState("");
  const [confNewError, setConfNewError] = useState("");
  const [successMessage, SetsuccessMessage] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        SetUserID(session.id);
      }
    });
  }, []);

  const Passwords = {
    currentpassword: CurrentValue,
    newpassword: newValue,
    confnewpassword: confNewValue,
  };

  const handleUpdatePassword = async () => {
    try {
      const data = await updatePassword(UserID, Passwords);
      if (data.success) {
        setSuccess(true);
        setNewValue("");
        setCurrentValue("");
        setConfNewValue("");
        setCurrentError("");
        setNewError("");
        setConfNewError("");
        SetsuccessMessage(data.success);
      } else if (data.errors) {
        setCurrentError(data.errors.currentpassword || "");
        setNewError(data.errors.newpassword || "");
        setConfNewError(data.errors.confnewpassword || "");
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
          {/* SuccessMessage */}
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

          {/* Inputs */}
          <View style={styles.formicons}>
            <Icon name="lock" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Enter Current Password"
              placeholderTextColor="#fff"
              value={CurrentValue}
              secureTextEntry={true}
              onChangeText={setCurrentValue}
            />
          </View>
          {currentError ? (
            <Text style={styles.error}>{currentError}</Text>
          ) : null}

          <View style={styles.formicons}>
            <Icon name="lock" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Enter New Password"
              placeholderTextColor="#fff"
              value={newValue}
              secureTextEntry={true}
              onChangeText={setNewValue}
            />
          </View>

          {newError ? <Text style={styles.error}>{newError}</Text> : null}
          <View style={styles.formicons}>
            <Icon name="lock" size={20} color="white" style={styles.icon} />
            <TextInput
              style={styles.form}
              placeholder="Confirm New Password"
              placeholderTextColor="#fff"
              value={confNewValue}
              onChangeText={setConfNewValue}
              secureTextEntry={true}
            />
          </View>
          {confNewError ? (
            <Text style={styles.error}>{confNewError}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.confirmbutton}
            onPress={handleUpdatePassword}
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

export default UpdatePassword;
