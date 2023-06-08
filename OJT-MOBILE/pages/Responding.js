import {
  Text,
  View,
  TouchableOpacity,
  Modal,

} from "react-native";
import styles from "../components/Style";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { FetchEmergencySpecific, FetchTools } from "../APIcall/FetchData";
import { getSession } from "../components/Session";
import { ToolRequest } from "../APIcall/HelpAPI";

function Responding({ navigation, route }) {
  const { emergency_id } = route.params;
  const [emergency, setEmergency] = useState([]);
  const [tools, setTools] = useState([]);
  const [requestTool, setRequestTool] = useState(false);
  const [success, setSuccess] = useState(null); // Updated to null initially

  useEffect(() => {
    FetchEmergencySpecific(emergency_id)
      .then((data) => {
        setEmergency(data.emergencySpecific);
      })
      .catch((error) => console.error(error));
  }, [emergency_id]);

  useEffect(() => {
    FetchTools()
      .then((data) => {
        setTools(data.tools);
      })
      .catch((error) => console.error(error));
  }, [tools]);

  const ToolRequestss = async (tool_ID) => {

    try {
      const data = await ToolRequest(tool_ID, emergency_id);
      if (data.success) {
        setSuccess(data.success);
        console.log(data.success);
      } else if (data.errors) {
        setSuccess("");
        console.log(data.errors);
      }
    } catch (error) {
      console.error(error);
    }

  };

  useEffect(() => {
    if (success !== null) {
      const timer = setTimeout(() => {
        setSuccess(null);
      }, 2000); // Clear success message after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ ...styles.Aligns, flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      {emergency.map((item) => (
        <View style={styles.contResponding}
          key={item.emergency_id}
        >

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
          <Text style={styles.roomToRespond}>{item.building_name} Room {item.room_num}</Text>
          <View>
            <Text style={styles.nameToRespond}>Responding to...</Text>
            <Text style={{ ...styles.nameToRespondSub, marginVertical: 27, fontSize: 16 }}>
              {item.name}
            </Text>
          </View>
          <View style={styles.outline3}>
            <View style={styles.outline2}>
              <TouchableOpacity
                style={styles.MainCont}
              >
                <LinearGradient
                  colors={["#001B66", "#3366CC", "#8D0801"]}
                  style={styles.respondContainer}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 2, y: 1 }}
                >
                  <Text style={styles.RespondText}>Done</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.RequestTools}
            onPress={() => setRequestTool(true)}
          >
            <Text style={styles.RespondTools}>Request Tools</Text>
          </TouchableOpacity>
        </View>
      ))
      }


      <Modal
        animationType="slide"
        transparent={true}
        visible={requestTool}
        onRequestClose={() => setRequestTool(false)}
      >
        <View style={styles.modalEmergency}>
          <View style={styles.ModalConteCont}>
            <Text style={styles.emergencyTitle}>
            </Text>
            <TouchableOpacity onPress={() => setRequestTool(false)}>
              <Icon name="close" style={styles.closeicon}></Icon>
            </TouchableOpacity>
          </View>

          <View style={styles.flexing}>
            <Icon name="wrench" size={20} color="white" style={{ ...styles.icon, marginEnd: 4 }} />
            <Text style={styles.Slecttool}>
              Request Tools
            </Text>
          </View>
          {success && (
            <View style={{ ...styles.successcontainer, marginTop: 10 }}>
              <Icon
                name="check-circle-o"
                size={20}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.successmessage}>Tool Requested Successfully</Text>
            </View>
          )}
          <View style={styles.levelCont}>
            {tools.map((tool) => (
              <TouchableOpacity
                style={styles.LevelColor}
                key={tool.tool_ID}
                onPress={() => ToolRequestss(tool.tool_ID)}
              >
                <LinearGradient
                  colors={["#02386E", "#0052A2"]}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.AlertGradient}
                >
                  <Text style={styles.emergeText}>{tool.tool_name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </LinearGradient >
  );
}
export default Responding;
