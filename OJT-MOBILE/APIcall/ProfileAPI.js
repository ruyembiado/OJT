import { API_URL } from "@env";

export const ProfileApi = async (image) => {
  console.log(`${API_URL}update_profile.php?process=updateProfile`);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: JSON.stringify({ image }),
  };

  const response = await fetch(
    `${API_URL}update_profile.php?process=updateProfile`,
    requestOptions
  );
  const data = await response.json();
  return data;
};

export const updateEmail = async (userID, email) => {
  console.log(`${API_URL}profile.php?process=UpdateEmail`);

  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID, email }),
    };
    const response = await fetch(
      `${API_URL}profile.php?process=UpdateEmail`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updatePassword = async (userID, Passwords) => {
  console.log(`${API_URL}profile.php?process=UpdatePassword`);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID, Passwords }),
    };
    const response = await fetch(
      `${API_URL}profile.php?process=UpdatePassword`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUsername = async (userID, username) => {
  console.log(`${API_URL}profile.php?process=UpdateUsername`);
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID, username }),
    };
    const response = await fetch(
      `${API_URL}profile.php?process=UpdateUsername`,
      requestOptions
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
