import { API_URL } from "@env";

export const registerAPI = async (formData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  console.log(`${API_URL}login_register.php?process=register`);
  const response = await fetch(
    `${API_URL}login_register.php?process=register`,
    requestOptions
  );
  const data = await response.json();
  return data;
};
