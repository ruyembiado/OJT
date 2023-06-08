import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  //Register and Login
  container: {
    flex: 1,
    marginTop: 0,
    alignItems: "center",
  },
  error: {
    color: "#dc3545",
    fontSize: 12,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 30,
  },
  profilePic: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 999,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  fabars: {
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  title: {
    color: "white",
    fontSize: 23,
    marginTop: 10,
    marginBottom: 18,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  formgroup: {
    width: "80%",
  },
  formicons: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 16,
    paddingHorizontal: 20,
    backgroundColor: "rgba(211, 211, 211, 0.080)",
  },
  form: {
    color: "#BDBDBD",
    width: "100%",
    // borderColor: "#BDBDBD",
    height: 56,
    borderRadius: 999,
    paddingLeft: 10,
  },
  label: {
    marginVertical: 7,
    color: "#fff",
  },
  confirmbutton: {
    marginTop: 14,
    borderColor: "#0F6FFD",
    width: "100%",
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 9,
    backgroundColor: "#0F6FFD",
  },
  confirmGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  links: {
    color: "lightgray",
    marginTop: 10,
    fontSize: 13,
    alignSelf: "center",
  },
  dashboard_title: {
    color: "lightgray",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "left",
  },
  title_container: {
    alignSelf: "flex-start",
    width: "80%",
    marginLeft: 20,
    marginBottom: 10,
  },
  forgotpass: {
    color: "lightgray",
    fontSize: 13,
    alignSelf: "center",
    marginTop: 6,
  },
  dashbox_sm_container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  //Dashboard
  dashbox: {
    // borderWidth: 1,
    // borderColor: "white",
    height: 150,
    width: "90%",
    borderRadius: 15,
    backgroundColor: "rgba(211, 211, 211, 0.2)",
  },
  dashbox_sm: {
    height: 100,
    width: "30%",
    marginBottom: 15,
    borderRadius: 15,
    backgroundColor: "rgba(211, 211, 211, 0.2)",
  },

  card: {
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end", // change to justifyContent
    flexDirection: "column",
    paddingTop: 14,
    paddingBottom: 14,
    paddingRight: 16,
    backgroundColor: "#212529",
  },
  baricon: {
    color: "lightgray",
    borderWidth: 1,
  },
  ul: {
    flexDirection: "row",
  },
  li: {
    marginHorizontal: 10,
    color: "lightgray",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    height: 59,
  },

  icon: {
    color: "white",
  },
  iconBox: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  iconText: {
    color: "white",
    fontSize: 10,
  },

  //Student page
  student_title: {
    color: "lightgray",
    fontWeight: "bold",
  },

  emergencyContainer: {
    height: 130,
    width: 130,
    backgroundColor: "red",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#lightgray",
    // shadowColor: "lightgray",
    // shadowOffset: {
    //   width: 7,
    //   height: 7,
    // },
    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 5,

    // For the second shadow, we need to add another box with a negative offset
    // and a different color and radius.
    overflow: "visible",
  },
  respondContainer: {
    height: 150,
    width: 150,
    backgroundColor: "red",
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#lightgray",

    shadowOpacity: 1,
    shadowRadius: 14,
    elevation: 5,

    // For the second shadow, we need to add another box with a negative offset
    // and a different color and radius.
    overflow: "visible",
  },
  contentContainer: {
    height: "84%",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
  },
  ermergencyIcon: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
    letterSpacing: 3,
  },
  MainCont: {
    padding: 25,
    borderRadius: 999,
    backgroundColor: "rgba(90, 90, 90, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },

  RequestTools: {
    padding: 16,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "lightblue",
    marginTop: 28,
    backgroundColor: "rgba(90, 90, 90, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  successmessage: {
    color: "white",
    fontSize: 13,
    marginStart: 3,
  },
  successcontainer: {
    flexDirection: "row",
    width: "100%",
    padding: 15,
    backgroundColor: "rgba(25, 135, 84, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 11,
  },
  email: {
    color: "white",
    fontSize: 13,
  },
  accountname: {
    color: "white",
    fontSize: 23,
    marginTop: 16,
    marginBottom: 3,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  accountLink: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    borderRadius: 10,
    paddingHorizontal: 20,
    backgroundColor: "rgba(211, 211, 211, 0.080)",
    paddingHorizontal: 24,
  },
  accountLinkCont: {
    marginTop: 18,
    width: "80%",
    justifyContent: "space-between",
  },
  iconsep: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 56,
  },
  settingBut: {
    color: "white",
    marginStart: 7,
  },
  buildingCont: {
    marginTop: 20,
    width: "80%",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  levelCont: {
    marginTop: 10,
    width: "100%",
    justifyContent: "space-between",
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buildings: {
    flexDirection: "row",
    color: "#fff",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(211, 211, 211, 0.2)",
    height: 90,
    marginBottom: 11,
    borderRadius: 10,
  },
  LevelColor: {
    flexDirection: "row",
    color: "#fff",
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    height: 90,
    marginBottom: 11,
    borderRadius: 10,
  },
  buildingName: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
    marginLeft: 5,
    fontWeight: "bold",
  },

  searchBox: {
    width: "80%",
    alignSelf: "center",
    height: 50,
    color: "#fff",
    paddingLeft: 13,
    borderRadius: 13,
    backgroundColor: "rgba(211, 211, 211, 0.2)",
  },
  searchCont: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  MaginifyGlass: {
    color: "white",
    fontSize: 25,
    position: "absolute",
    right: 45,
  },
  Aligns: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: -2,
  },
  BGGradient: {
    position: "absolute",
    width: "100%",
    flex: 1,
    opacity: 0.25,
    zIndex: -2,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    height: "100%",
    borderRadius: 10,
  },

  Linear: {
    zIndex: -99999,
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  RoomTitleCont: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  RoomTitle: {
    marginVertical: 5,
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 5,
  },
  imageBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.2)", // Set the background color to semi-transparent black
  },
  loginButnDefault: {
    borderColor: "#0F6FFD",
    width: "100%",
    height: 50,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 13,
    backgroundColor: "#0F6FFD",
  },
  registerButnDefault: {
    borderWidth: 1,
    borderColor: "#6692c0",
    width: "100%",
    height: 50,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  registerDefault: {
    color: "#6692c0",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginDefault: {
    color: "lightgray",
    fontWeight: "bold",
    fontSize: 16,
  },
  containerDefault: {
    width: "80%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
  },
  buttonContDef: {
    flex: 1,
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  welcomeDefault: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    fontFamily: "poppins-regular",
  },
  GradientBut: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  BuildingGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  loginlogo: {
    width: 180,
    height: 180,
    marginTop: 30,
  },
  logintitleCont: {
    alignItems: "flex-start",
    textAlign: "left",
    width: "80%",
  },
  titlelogin: {
    color: "white",
    fontSize: 23,
    marginTop: 5,
    alignSelf: "flex-start",
    marginBottom: 8,
    fontFamily: "Roboto",
    fontWeight: "bold",
  },
  titlesub: {
    color: "lightgray",
    fontSize: 13,
    marginBottom: 5,
  },
  modalEmergency: {
    marginTop: 70,
    backgroundColor: "#fff",
    width: "90%",
    height: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#28282B",
    borderWidth: 1,
    borderColor: "rgba(70, 70, 70, 70)",
  },
  ModalConteCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingBottom: 8,
    paddingHorizontal: 9,
  },
  closeicon: {
    fontSize: 20,
    color: "#fff",
  },
  emergencyTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  AlertGradient: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  emergencyIcon: {
    width: 65,
    height: 50,
    resizeMode: "contain",
    transform: [{ scaleX: -1 }],
  },
  emergeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  LifeThreat: {
    fontSize: 40,
    color: "#fff",
  },
  SlectLvl: {
    marginTop: 10,
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  Slecttool: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  flexing: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  getmodalEmergency: {
    width: "80%",
    height: "40%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#28282B",
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "rgba(70, 70, 70, 70)",
  },
  getmodalEmergencyCont: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  CalmGIF: {
    height: 130,
    width: 130,
    alignSelf: "center",
  },
  Waitingtext: {
    color: "#fff",
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  ButtonWaitCancel: {
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 9,
    marginTop: 29,
    marginBottom: 10,
    borderRadius: 13,
  },
  canceLbutEmer: {
    color: "#fff",
  },
  titleEmergency: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  container_sub: {
    marginTop: 30,
    // borderWidth: 1,
    // borderColor: "#fff",
    width: "100%",
  },
  container_sub2: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 13,
    paddingVertical: 10,
    borderRadius: 14,
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "rgba(211, 211, 211, 0.080)",
  },
  StudEmergProfile: {
    width: 45,
    height: 45,
  },
  levelText: {
    color: "#fff",
  },
  ViewButtonEmerge: {
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  ContentText: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 27,
    fontFamily: "poppins-regular",
  },
  textSecondary: {
    color: "lightgray",
    letterSpacing: 1.3,
    marginBottom: 5,
  },
  profileImgContainer: {
    borderWidth: 1,
    borderColor: "#fff",
    width: 90,
    height: 90,
    borderRadius: 999,
  },
  cameraIconCont: {
    borderColor: "lightgray",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
    position: "absolute",
    top: "60%",
    right: -5,
    zIndex: 999,
  },

  modalProfilePic: {
    marginTop: 120,
    backgroundColor: "#fff",
    width: "90%",
    height: "63%",
    alignSelf: "center",
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#28282B",
    borderWidth: 1,
    borderColor: "rgba(70, 70, 70, 70)",
  },
  containerProfTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  photoTitl: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  ProfileUpdateCont: {
    marginTop: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    overflow: "hidden",
    height: 200,
    width: "70%",
    alignSelf: "center",
  },
  buttonUpload: {
    marginTop: 10,
    width: "70%",
    height: 54,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
  minorLevel: {
    marginBottom: 20,
    marginTop: 27,
    color: "blue",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  moderateLevel: {
    marginBottom: 20,
    marginTop: 27,
    color: "green",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  seriousLevel: {
    marginBottom: 20,
    marginTop: 27,
    color: "yellow",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  criticalLevel: {
    marginBottom: 20,
    marginTop: 27,
    color: "orange",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  lifelLevel: {
    marginBottom: 20,
    marginTop: 27,
    color: "red",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  profileLoaded: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  ArrowRight: {
    color: "#fff",
    fontSize: 25,
  },
  outline2: {
    borderColor: "#fff",
    borderRadius: 999,
    padding: 24,
    backgroundColor: "rgba(120, 120, 120, 0.2)",
  },
  outline3: {
    borderColor: "#fff",
    borderRadius: 999,
    padding: 24,
    backgroundColor: "rgba(100, 100, 100, 0.2)",
  },
  RespondText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2,
  },
  RespondTools: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    letterSpacing: 2,
  },
  nameToRespond: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },

  nameToRespondSub: {
    color: "#fff",
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
  roomToRespond: {
    color: "#fff",
    marginTop: 5,
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
  },
  LevelEmerge: {
    marginBottom: 20,
    marginTop: 27,
    color: "red",
    fontSize: 36,
    letterSpacing: 2,
    textAlign: "center",
    fontWeight: "bold",
  },
  pickers: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 16,
    color: "white",
    paddingLeft: 10,
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "transparent",
  },
  pickerCont: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 15,
    paddingHorizontal: 20,
    backgroundColor: "rgba(211, 211, 211, 0.080)",
  },
  PickerLabel: {
    color: "#fff",
    marginVertical: 5
  },
  Options: {
    paddingLeft: 10,
  },
  contResponding: {
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;