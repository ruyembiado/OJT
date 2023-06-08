import { API_URL } from "@env";

export const loginAPI = async (username, password) => {
  console.log(`${API_URL}login_register.php?process=login`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(
    `${API_URL}login_register.php?process=login`,
    requestOptions
  );

  const data = await response.json();
  return data;
};
