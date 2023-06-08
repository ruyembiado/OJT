import AsyncStorage from "@react-native-async-storage/async-storage";

export const getSession = async () => {
  try {
    const session = await AsyncStorage.getItem("session");
    if (session !== null) {
      return JSON.parse(session);
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const clearSession = async () => {
  try {
    await AsyncStorage.removeItem("session");
    console.log("Session cleared");
  } catch (error) {
    console.error("Error clearing session:", error);
  }
};
