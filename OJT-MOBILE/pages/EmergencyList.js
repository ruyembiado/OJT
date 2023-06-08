import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import BottomNav from "../components/BottomNav";
import Icon from "react-native-vector-icons/FontAwesome";
import { FetchEmergencyList } from "../APIcall/FetchData";

const EmergencyList = ({ navigation }) => {
  const [EmergencyList, setEmergencyList] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      FetchEmergencyList()
        .then((data) => setEmergencyList(data.emergencyList))
        .catch((error) => console.error(error));
    }, 1000); // update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.Aligns}
    >
      <View
        style={{
          ...styles.container,
          marginTop: 36,
          width: "87%",
          alignSelf: "center",
        }}
      >
        <Text style={styles.titleEmergency}>Emergency</Text>
        <View style={styles.container_sub}>
          {EmergencyList &&
            EmergencyList.map((emergency) => (
              <TouchableOpacity
                style={styles.container_sub2}
                key={emergency.emergency_id}
                onPress={() => navigation.navigate('Respond', { emergency_id: emergency.emergency_id })}
              >
                <Image
                  source={require("../assets/images/user-logo.png")}
                  style={styles.StudEmergProfile}
                />
                <Text style={styles.levelText}>
                  {emergency.emergency_level == 1
                    ? "Minor"
                    : emergency.emergency_level == 2
                      ? "Moderate"
                      : emergency.emergency_level == 3
                        ? "Serious"
                        : emergency.emergency_level == 4
                          ? "Critical"
                          : emergency.emergency_level == 5
                            ? "Life-threatening"
                            : "Unknown"}
                </Text>
                <View style={styles.ViewButtonEmerge}>
                  <Icon name="angle-right" style={styles.ArrowRight} />
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
      <BottomNav
        emergencyicon="EmergencyList"
        navigation={navigation}
      ></BottomNav>
    </LinearGradient>
  );
};

export default EmergencyList;
