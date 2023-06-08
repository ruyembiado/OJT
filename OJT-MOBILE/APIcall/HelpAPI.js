import { API_URL } from "@env";

export const helpAPI = async (id, room_id, emergency_level) => {
  console.log(`${API_URL}helpPost.php?process=help`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, room_id, emergency_level }),
  };

  const response = await fetch(
    `${API_URL}helpPost.php?process=help`,
    requestOptions
  );
  const data = await response.json();
  return data;
};

export const cancelHelp = async (emergencyID) => {
  console.log(`${API_URL}helpPost.php?process=cancelHelp`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emergencyID }),
  };

  const response = await fetch(
    `${API_URL}helpPost.php?process=cancelHelp`,
    requestOptions
  );
  const data = await response.json();
  return data;
};


export const respondHelp = async (emergencyID, UserID) => {
  console.log(`${API_URL}helpPost.php?process=respondHelp`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ emergencyID, UserID }),
  };

  const response = await fetch(
    `${API_URL}helpPost.php?process=respondHelp`,
    requestOptions
  );

  const data = await response.json();
  return data;
};

export const ToolRequest = async (tool_ID, emergency_id) => {
  console.log(`${API_URL}helpPost.php?process=requestTools`);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ tool_ID, emergency_id }),
  };

  const response = await fetch(
    `${API_URL}helpPost.php?process=requestTools`,
    requestOptions
  );

  const data = await response.json();
  return data;
};
