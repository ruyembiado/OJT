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
import { getSession } from "../components/Session";
import { FetchEmergencyStatus } from "../APIcall/FetchData";
import { cancelHelp } from "../APIcall/HelpAPI";
function Student({ navigation }) {
  const [userID, setUserID] = useState("");
  const [emergencyData, setEmergencyData] = useState(null);
  const [emergencyID, setEmergencyID] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //getting the session
  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        setUserID(session.id);
      }
    });
  }, []);

  //modal to show the waiting
  useEffect(() => {
    const fetchEmergencyStatus = async () => {
      try {
        if (userID !== "") {
          const data = await FetchEmergencyStatus(userID);
          if (
            data.emergencyStatus?.status !== undefined &&
            data.emergencyStatus?.status !== ""
          ) {
            setEmergencyData(data.emergencyStatus.status);
            setEmergencyID(data.emergencyStatus.emergency_id);
          }
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchEmergencyStatus();
    const intervalId = setInterval(fetchEmergencyStatus, 1000); // fetch every 5 seconds

    return () => clearInterval(intervalId);
  }, [userID]);

  const isWaitingForRescue =
    emergencyData != 1 &&
    emergencyData != 2 &&
    emergencyData != null &&
    emergencyData != undefined &&
    emergencyData != "";

  useEffect(() => {
    StatusBar.setHidden(true);
  }, []);

  const cancelHandler = async () => {
    try {
      const data = await cancelHelp(emergencyID);
      if (data.success) {
        console.log(data.success);
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
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <View style={{ ...styles.contentContainer, marginTop: 50 }}>
          <Text style={styles.ContentText}>Are you in emergency?</Text>
          <Text style={styles.textSecondary}>
            Press the button below, help will
          </Text>
          <Text style={{ ...styles.textSecondary, marginBottom: 35 }}>
            reach you soon
          </Text>
          <View style={styles.outline3}>
            <View style={styles.outline2}>
              <TouchableOpacity
                style={styles.MainCont}
                onPress={() => navigation.navigate("Building")}
              >
                <LinearGradient
                  colors={["#8D0801", "#E6331A", "#FFA07A"]}
                  style={styles.emergencyContainer}
                  start={{ x: 0.5, y: 0.5 }}
                  end={{ x: 2, y: 1 }}
                >
                  <Text style={styles.ermergencyIcon}>SOS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isLoading || isWaitingForRescue}
        onRequestClose={() => {}}
        style={styles.ModCont}
      >
        <View style={styles.getmodalEmergencyCont}>
          <View style={styles.getmodalEmergency}>
            {isLoading ? (
              <Text>Loading...</Text>
            ) : (
              <View>
                <Image
                  source={require("../assets/images/GIFwaiting.gif")}
                  style={{ ...styles.CalmGIF, marginTop: 25 }}
                />
                <Text style={styles.Waitingtext}>Waiting for rescue...</Text>
                <TouchableOpacity
                  style={styles.ButtonWaitCancel}
                  onPress={cancelHandler}
                >
                  <Text style={styles.canceLbutEmer}>Cancel</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
      <BottomNav
        emergencyicon="StudentEmergency"
        navigation={navigation}
      ></BottomNav>
    </LinearGradient>
  );
}

export default Student;
