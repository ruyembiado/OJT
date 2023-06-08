import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";

function AccountSettings({ navigation }) {
  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ ...styles.container }}>
        <View style={styles.accountLinkCont}>
          <TouchableOpacity
            style={styles.accountLink}
            onPress={() => navigation.navigate("Change Email")}
          >
            <View style={styles.iconsep}>
              <Icon
                name="envelope"
                size={20}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.settingBut}>Change Email</Text>
            </View>
            <Icon
              name="angle-right"
              size={20}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountLink}
            onPress={() => navigation.navigate("Change Username")}
          >
            <View style={styles.iconsep}>
              <Icon name="user" size={20} color="white" style={styles.icon} />
              <Text style={styles.settingBut}>Change Username</Text>
            </View>
            <Icon
              name="angle-right"
              size={20}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountLink}
            onPress={() => navigation.navigate("Change Password")}
          >
            <View style={styles.iconsep}>
              <Icon name="lock" size={20} color="white" style={styles.icon} />
              <Text style={styles.settingBut}>Change Password</Text>
            </View>
            <Icon
              name="angle-right"
              size={20}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}
export default AccountSettings;
