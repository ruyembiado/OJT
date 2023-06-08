import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
  PermissionsAndroid,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNav from "../components/BottomNav";
import { getSession, clearSession } from "../components/Session";
import * as DocumentPicker from "expo-document-picker";

function StudentAct({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyicon, setEmergencyLink] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profilepic, setProfilepic] = useState(null);

  const handleImageLoad = (uri) => {
    setProfilepic(uri);
  };

  const handleLogout = async () => {
    try {
      await clearSession(); // call clearSession here
      navigation.navigate("Login");
      // You can perform any additional cleanup or navigation here
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        setName(session.name);
        setEmail(session.email);
        if (session.role == "student") {
          setEmergencyLink("StudentEmergency");
        } else if (session.role == "rescuer") {
          setEmergencyLink("EmergencyList");
        }
      }
    });
  }, []);

  async function requestStoragePermission() {
    try {
      const permissionStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );

      if (permissionStatus === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Storage Permission Granted.");
        // Perform actions that require storage permission
      } else {
        PermissionsAndroid.RESULTS.GRANTED;
      }
    } catch (err) {
      console.warn(err);
    }
  }

  // Call the function to request permissions
  requestStoragePermission();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      console.log(
        "Selected file:",
        result.uri,
        result.type, // mime type
        result.name,
        result.size
      );
      setProfilepic(result.uri);
      console.log(profilepic);
      // Here you can send the selected file to your server or process it as needed.
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
        console.log("User cancelled document picker");
      } else {
        // Error occurred!
        console.log("Error occurred while picking the document:", err);
      }
    }
  };

  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ ...styles.container, marginTop: 90 }}>
        <View style={styles.profileImgContainer}>
          <Image
            source={require("../assets/images/profile_default.jpg")}
            style={styles.profilePic}
          />
          <TouchableOpacity style={styles.cameraIconCont} onPress={openModal}>
            <Icon
              name="camera"
              size={17}
              color="#000"
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.accountname}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        <View style={styles.accountLinkCont}>
          <TouchableOpacity
            style={styles.accountLink}
            onPress={() => navigation.navigate("Account Settings")}
          >
            <View style={styles.iconsep}>
              <Icon name="cog" size={20} color="white" style={styles.icon} />
              <Text style={styles.settingBut}>Account Settings</Text>
            </View>
            <Icon
              name="angle-right"
              size={20}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountLink} onPress={handleLogout}>
            <View style={styles.iconsep}>
              <Icon
                name="sign-out"
                size={20}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.settingBut}>Logout</Text>
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View style={styles.modalProfilePic}>
          <View style={styles.containerProfTitle}>
            <Text style={styles.photoTitl}>Upload Photo</Text>
            <Icon
              name="close"
              size={20}
              color="white"
              style={styles.icon}
              onPress={closeModal}
            />
          </View>
          <View style={styles.ProfileUpdateCont}>
            {profilepic ? (
              <Image
                source={{ uri: profilepic }}
                onLoad={() => handleImageLoad(profilepic)}
                style={styles.profileLoaded}
              />
            ) : (
              <Image
                source={require("../assets/images/profile_default.jpg")}
                style={styles.profileLoaded}
              />
            )}
          </View>
          <TouchableOpacity style={styles.buttonUpload} onPress={pickDocument}>
            <LinearGradient
              colors={["#6692c0", "#304e73"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.confirmGradient}
            >
              <Text style={styles.buttonText}>Upload Photo</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonUpload}>
            <LinearGradient
              colors={["#6692c0", "#304e73"]}
              start={{ x: 1, y: 1 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.confirmGradient}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Modal>
      <BottomNav
        emergencyicon={emergencyicon}
        navigation={navigation}
      ></BottomNav>
    </LinearGradient>
  );
}
export default StudentAct;
