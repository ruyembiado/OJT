import React, { useState, useEffect } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import BottomNav from "../components/BottomNav";
import Icons from "react-native-vector-icons/MaterialIcons";
import { FetchBuilding } from "../APIcall/FetchData";

function Building({ navigation }) {
  const [buildingData, setBuildingData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [emergencyiconLink, setEmergencyIconLink] =
    useState("StudentEmergency");

  useEffect(() => {
    FetchBuilding()
      .then((data) => setBuildingData(data.building))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (query) => {
    if (query) {
      const filteredData = buildingData.filter((building) =>
        building.building_name.toLowerCase().includes(query.toLowerCase())
      );
      setBuildingData(filteredData);
    } else {
      FetchBuilding()
        .then((data) => setBuildingData(data.building))
        .catch((error) => console.error(error));
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
          {buildingData.map((building) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Rooms", {
                  building_id: building.building_id,
                  building_name: building.building_name,
                })
              }
              key={building.building_id}
              style={styles.buildings}
            >
              <Image
                source={require("../assets/images/bg-gradient.jpg")}
                style={styles.BGGradient}
              />
              <Icons name="business" size={23} style={styles.icon} />
              <Text style={styles.buildingName}>{building.building_name}</Text>
            </TouchableOpacity>
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

export default Building;
