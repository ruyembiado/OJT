import { API_URL } from "@env";

export const FetchBuilding = async () => {
  console.log(`${API_URL}fetchData.php?process=getBuilding`);

  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=getBuilding`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FetchRoom = async (building_id) => {
  console.log(`${API_URL}fetchData.php?process=getRoom&building_id=${building_id}`);
  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=getRoom&building_id=${building_id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FetchEmergencyStatus = async (userID) => {
  console.log(`${API_URL}fetchData.php?process=helpStatus&userID=${userID}`);
  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=helpStatus&userID=${userID}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FetchEmergencyList = async (userID) => {
  console.log(`${API_URL}fetchData.php?process=EmergencyList`);
  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=EmergencyList`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FetchEmergencySpecific = async (emergency_id) => {
  console.log(`${API_URL}fetchData.php?process=EmergencySpecific&emergency_id=${emergency_id}`);
  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=EmergencySpecific&emergency_id=${emergency_id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCourses = async () => {
  console.log(`${API_URL}fetchData.php?process=getCourse`);
  try {
    const response = await fetch(
      `${API_URL}fetchData.php?process=getCourse`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const FetchTools = async () => {
  console.log(`${API_URL}fetchData.php?process=getTools`);
  try {
    const response = await fetch(`${API_URL}fetchData.php?process=getTools`);
    const data = await response.json();

    // Add a delay of 1 second before logging the data
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
