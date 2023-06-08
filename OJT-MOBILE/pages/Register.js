import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../components/Style";
import { registerAPI } from "../APIcall/RegisterAPI";
import { Picker } from '@react-native-picker/picker';
import { getCourses } from "../APIcall/FetchData";

function Register() {
  // useState for the success message
  const [success, setSuccess] = useState(false);
  const [courseData, setcourseData] = useState([]);

  //use State function to set the value of input
  const [formData, setFormData] = useState({
    studentId: "",
    name: "",
    email: "",
    username: "",
    year: 1,
    course: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    getCourses()
      .then((data) => setcourseData(data.course))
      .catch((error) => console.error(error));
  }, []);

  //use State function to set and make the error appear
  const [formErrors, setFormErrors] = useState({});

  //use to change or update the value of formData and formError
  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };
  const handlePickerChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const yearLevelOptions = [
    { value: 1, label: "1st year" },
    { value: 2, label: "2nd year" },
    { value: 3, label: "3rd year" },
    { value: 4, label: "4th year" },
    { value: 5, label: "5th year" },
  ];
  const courseOptions = courseData.map((course) => ({
    value: course.course_ID,
    label: course.course_name,
  }));
  //if click the register button
  const handleRegister = async () => {
    try {
      const data = await registerAPI(formData); // call register function and send the data formData through parameter
      if (data.success) {
        setSuccess(data.success);
        //empty the input field when success
        setFormData({
          studentId: "",
          name: "",
          email: "",
          username: "",
          year: "",
          course: "",
          password: "",
          confirmPassword: "",
        });
      } else if (data.errors) {
        //remove the success for the next registration if there is error
        setSuccess("");
        //set the error message
        setFormErrors(data.errors);
      }
    } catch (error) {
      console.error(error);
    }
  };
  //create a function renderInput to display the form-input cleanly
  const renderInput = (field, placeholder, icon, secureTextEntry = false) => (
    <>
      <View style={styles.formicons}>
        <Icon name={icon} size={20} color="white" style={styles.icon} />
        <TextInput
          style={styles.form}
          placeholder={placeholder}
          placeholderTextColor="#BDBDBD"
          secureTextEntry={secureTextEntry}
          value={formData[field]}
          onChangeText={(value) => handleInputChange(field, value)}
        />
      </View>
      {/* display the error */}
      {formErrors[field] && (
        <Text style={styles.error}>{formErrors[field]}</Text>
      )}
    </>
  );
  const renderPicker = (field, options, icon) => (
    <>
      <View style={styles.pickerCont}>
        <Icon name={icon} size={20} color="white" style={styles.icon} />
        <Picker
          selectedValue={formData[field]}
          onValueChange={(value) => handlePickerChange(field, value)}
          style={styles.pickers}
        >
          {options.map((option) => (
            <Picker.Item
              key={option.value}
              label={option.label}
              value={option.value}
              style={styles.Options}
            />
          ))}
        </Picker>
      </View>

      {formErrors[field] && (
        <Text style={styles.error}>{formErrors[field]}</Text>
      )}
    </>
  );

  return (
    <LinearGradient
      colors={["black", "rgba(0,0,0,0.8)"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={{ ...styles.container }}>
          <Image
            source={require("../assets/images/login-logo.png")}
            style={{ ...styles.loginlogo, marginTop: 25 }}
          />
          <View style={styles.logintitleCont}>
            <Text style={styles.titlelogin}>Sign up</Text>
            <Text style={styles.titlesub}>Please sign up to continue</Text>
          </View>
          <View style={styles.formgroup}>
            {/* success message that are hidden */}
            {success && (
              <View style={styles.successcontainer}>
                <Icon
                  name="check-circle-o"
                  size={20}
                  color="white"
                  style={styles.icon}
                />
                <Text style={styles.successmessage}>Sign up Successfully</Text>
              </View>
            )}

            {renderInput("studentId", "Student ID", "id-card")}
            {renderInput("name", "Name", "tag")}
            {renderInput("email", "Email", "envelope")}
            {renderInput("username", "Username", "user")}
            {renderPicker('year', yearLevelOptions, 'calendar')}
            {renderPicker('course', courseOptions, 'building')}
            {renderInput("password", "Password", "lock", true)}
            {renderInput("confirmPassword", "Confirm Password", "repeat", true)}
            <TouchableOpacity
              style={{ ...styles.confirmbutton, marginBottom: 40 }}
              onPress={handleRegister}
            >
              <LinearGradient
                colors={["#6692c0", "#304e73"]}
                start={{ x: 1, y: 1 }}
                end={{ x: 0.5, y: 1 }}
                style={styles.confirmGradient}
              >
                <Text style={styles.buttonText}>Sign up</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

export default Register;
