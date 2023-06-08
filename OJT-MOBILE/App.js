import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import StudentEmergency from "./pages/StudentEmergency";
import Account from "./pages/Profile";
import Building from "./pages/Building";
import Rooms from "./pages/Rooms";
import Default from "./pages/Default";
import EmergencyList from "./pages/EmergencyList";
import AccountSettings from "./pages/AccountSetttings";
import UpdateEmail from "./pages/UpdateEmail";
import UpdateUsername from "./pages/UpdateUsername";
import UpdatePassword from "./pages/UpdatePassword";
import Respond from "./pages/Respond";
import Responding from "./pages/Responding";

const Stack = createNativeStackNavigator();
function App() {
  const [loaded] = useFonts({
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return null;
    console.log("load failed");
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
        }}
      >

        <Stack.Screen
          name="Default"
          component={Default}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Responding"
          component={Responding}
          options={{
            header: () => null,
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="EmergencyList"
          component={EmergencyList}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen
          name="Respond"
          options={{
            header: () => null,
          }}
          component={Respond}
        />
        <Stack.Screen name="Change Email" component={UpdateEmail} />
        <Stack.Screen name="Change Username" component={UpdateUsername} />
        <Stack.Screen name="Change Password" component={UpdatePassword} />
        <Stack.Screen name="Building" component={Building} />
        <Stack.Screen name="Account Settings" component={AccountSettings} />
        <Stack.Screen name="Rooms" component={Rooms} />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            header: () => null,
          }}
        />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen
          name="StudentEmergency"
          options={{
            header: () => null,
          }}
          component={StudentEmergency}
        />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
