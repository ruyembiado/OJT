import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import BottomNav from "../components/BottomNav";
import Icons from "react-native-vector-icons/MaterialIcons";
import { useRoute } from "@react-navigation/native";
import { FetchRoom } from "../APIcall/FetchData";
import Icon from "react-native-vector-icons/FontAwesome";
import { helpAPI } from "../APIcall/HelpAPI";
import { getSession } from "../components/Session";

function Rooms({ navigation }) {
  const route = useRoute();
  const { building_id, building_name } = route.params;
  const [roomData, setRoomData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [user_id, setUserID] = useState("");

  useEffect(() => {
    getSession().then((session) => {
      if (session !== null) {
        setUserID(session.id);
      }
    });
  }, []);

  useEffect(() => {
    FetchRoom(building_id)
      .then((data) => setRoomData(data.rooms))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filteredData = roomData.filter((rooms) =>
        rooms.room_num.toLowerCase().includes(query.toLowerCase())
      );
      setRoomData(filteredData);
    } else {
      FetchRoom(building_id)
        .then((data) => setRoomData(data.rooms))
        .catch((error) => console.error(error));
    }
  };

  const handleEmergency = async (room_id, emergency_level) => {
    try {
      const data = await helpAPI(user_id, room_id, emergency_level);
      if (data.success) {
        if (data.success) {
          console.log(data.success);
          navigation.navigate("StudentEmergency");
        }
      } else if (data.errors) {
        console.log(user_id);
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
      style={styles.Aligns}
    >
      <View style={{ zIndex: 1 }}>
        <View style={styles.RoomTitleCont}>
          <Icons name="business" size={20} style={styles.icon}></Icons>
          <Text style={styles.RoomTitle}>{building_name}</Text>
        </View>

        <View style={styles.searchCont}>
          <TextInput
            placeholder="Search here..."
            placeholderTextColor="#fff"
            style={styles.searchBox}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={() => handleSearch(searchQuery)}
          ></TextInput>
          <Icons name="search" style={styles.MaginifyGlass}></Icons>
        </View>

        <View style={styles.buildingCont}>
          {roomData &&
            roomData.map((room) => (
              <React.Fragment key={room.room_id}>
                <TouchableOpacity
                  style={styles.buildings}
                  onPress={() => setSelectedRoom(room)}
                >
                  <Image
                    source={require("../assets/images/bg-gradient.jpg")}
                    style={styles.BGGradient}
                  />
                  <Icons name="business" size={23} style={styles.icon} />
                  <Text style={styles.buildingName}>{room.room_num}</Text>
                </TouchableOpacity>

                {selectedRoom && selectedRoom.room_id === room.room_id && (
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={true}
                    onRequestClose={() => setSelectedRoom(null)}
                  >
                    <View style={styles.modalEmergency}>
                      <View style={styles.ModalConteCont}>
                        <Text style={styles.emergencyTitle}>
                          {building_name} Room {room.room_num}
                        </Text>
                        <TouchableOpacity onPress={() => setSelectedRoom(null)}>
                          <Icon name="close" style={styles.closeicon}></Icon>
                        </TouchableOpacity>
                      </View>
                      <Text style={styles.SlectLvl}>
                        Select level of emergency
                      </Text>

                      <View style={styles.levelCont}>
                        <TouchableOpacity
                          style={styles.LevelColor}
                          id={1}
                          onPress={() => handleEmergency(room.room_id, 1)}
                        >
                          <LinearGradient
                            colors={["#02386E", "#0052A2"]}
                            start={{ x: 0.5, y: 0.5 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.AlertGradient}
                          >
                            <Image
                              source={require("../assets/images/level1.png")}
                              style={styles.emergencyIcon}
                            />
                            <Text style={styles.emergeText}>Minor</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.LevelColor}
                          id={2}
                          onPress={() => handleEmergency(room.room_id, 2)}
                        >
                          <LinearGradient
                            colors={["#014122", "#018141"]}
                            start={{ x: 0.5, y: 0.5 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.AlertGradient}
                          >
                            <Image
                              source={require("../assets/images/level2.png")}
                              style={styles.emergencyIcon}
                            />
                            <Text style={styles.emergeText}>Moderate</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.LevelColor}
                          id={3}
                          onPress={() => handleEmergency(room.room_id, 3)}
                        >
                          <LinearGradient
                            colors={["#B09B12", "#D9C21D"]}
                            start={{ x: 0.5, y: 0.2 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.AlertGradient}
                          >
                            <Image
                              source={require("../assets/images/level3.png")}
                              style={styles.emergencyIcon}
                            />
                            <Text style={styles.emergeText}>Serious</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.LevelColor}
                          id={4}
                          onPress={() => handleEmergency(room.room_id, 4)}
                        >
                          <LinearGradient
                            colors={["#f9530B", "#ff9005"]}
                            start={{ x: 0.5, y: 0.2 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.AlertGradient}
                          >
                            <Image
                              source={require("../assets/images/level4.png")}
                              style={styles.emergencyIcon}
                            />
                            <Text style={styles.emergeText}>Critical</Text>
                          </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.LevelColor}
                          id={5}
                          onPress={() => handleEmergency(room.room_id, 5)}
                        >
                          <LinearGradient
                            colors={["#8B0001", "#B12E21"]}
                            start={{ x: 0.5, y: 0.2 }}
                            end={{ x: 0.5, y: 1 }}
                            style={styles.AlertGradient}
                          >
                            <Icon name="warning" style={styles.LifeThreat} />
                            <Text style={styles.emergeText}>
                              Life-threatening
                            </Text>
                          </LinearGradient>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                )}
              </React.Fragment>
            ))}
        </View>
      </View>
      <BottomNav
        emergencyicon="StudentEmergency"
        navigation={navigation}
      ></BottomNav>
    </LinearGradient>
  );
}

export default Rooms;
