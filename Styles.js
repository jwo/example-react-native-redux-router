import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
  navbar: {
    height: 60,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between"
  },
  button: {
    margin: 30,
    padding: 20,
    backgroundColor: "#2980b9",
    width: 100
  },
  buttonText: {
    color: "white",
    fontWeight: "600"
  }
})

export default styles
