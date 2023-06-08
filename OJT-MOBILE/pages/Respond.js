import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "../components/Style";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { FetchEmergencySpecific } from "../APIcall/FetchData";
import { respondHelp } from "../APIcall/HelpAPI";
import { getSession } from "../components/Session";


const Respond = ({ navigation, route }) => {
  const { emergency_id } = route.params;
  const [emergency, setEmergency] = useState([]);
  const [UserID, SetUserID] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        SetUserID(session.id);
      }
    });
  }, []);

  useEffect(() => {
    FetchEmergencySpecific(emergency_id)
      .then((data) => {
        setEmergency(data.emergencySpecific);
      })
      .catch((error) => console.error(error));
  }, [emergency_id]);

  const respondHandler = async () => {
    try {
      const data = await respondHelp(emergency_id, UserID);
      if (data.success) {
        console.log(data.success);
        navigation.navigate('Responding', { emergency_id: emergency_id })
      } else if (data.errors) {
        console.log(data.errors);
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
      style={{ ...styles.Aligns, flex: 1 }}
    >
      {emergency.map((item) => (
        <View
          style={{
            ...styles.container,
            marginTop: 120,
            width: "87%",
            alignSelf: "center",
          }}
          key={item.emergency_id}
        >
          <View>
            <Text style={styles.nameToRespond}>{item.name}</Text>
            <Text style={styles.nameToRespondSub}>
              is waiting for responders at
            </Text>
            <Text style={styles.roomToRespond}>{item.building_name} Room {item.room_num}</Text>
            <Text style={item.emergency_level == 1
              ? styles.minorLevel
              : item.emergency_level == 2
                ? styles.moderateLevel
                : item.emergency_level == 3
                  ? styles.seriousLevel
                  : item.emergency_level == 4
                    ? styles.criticalLevel
                    : item.emergency_level == 5
                      ? styles.lifelLevel
                      : "Unknown"}>
              {item.emergency_level == 1
                ? "Minor"
                : item.emergency_level == 2
                  ? "Moderate"
                  : item.emergency_level == 3
                    ? "Serious"
                    : item.emergency_level == 4
                      ? "Critical"
                      : item.emergency_level == 5
                        ? "Life-threatening"
                        : "Unknown"}</Text>
          </View>
          <View style={styles.outline3}>
            <View style={styles.outline2}>
              <TouchableOpacity
                style={styles.MainCont}
                onPress={respondHandler}
              >
                <LinearGradient
                  colors={["#8D0801", "#E6331A", "#FFA07A"]}
                  style={styles.respondContainer}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 2, y: 1 }}
                >
                  <Text style={styles.RespondText}>RESPOND</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ))
      }
    </LinearGradient >
  );
};

export default Respond;
