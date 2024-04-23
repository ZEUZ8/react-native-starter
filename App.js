import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.constainer}>
      <View style={styles.darkBackground}>
        <Greet name="Bruce Wayne" styles={styles}/>
      </View>
      <View style={[styles.box, styles.lightBlue, styles.boxShadow]}>
        <Text style={{ borderRadius: 5 }}>Lightblue Box</Text>
      </View>
      <View style={[styles.box, styles.ligthgreen, styles.androidShadow]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: { flex: 1, backgroundColor: "plum", padding: 50 },
  darkBackground: { backgroundColor: "black" },
  darkTextColor :{color:"white"},
  fontSize:{fontWeight:"600"},
  box: {
    height: 250,
    width: 250,

    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "white",
    // borderStyle:"solid"  //this is the default style
    borderRadius: 5,
    // you could use the border radius for the view and that will work for both android and i phone
    // but radius for the text component is only work in android
  },

  lightBlue: { backgroundColor: "lightblue" },
  ligthgreen: { backgroundColor: "lightgreen" },

  boxShadow: {
    shadowColor: "#33333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  //using the box shadow will only work on the i phone for androd you need to use something else

  androidShadow: {
    elevation: 20,
  },
  //using the elevation will help us to bring he shadow for the android phones
});
