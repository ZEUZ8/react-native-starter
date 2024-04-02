import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.constainer}>
      <Greet name="Bruce Wayne" />
      <View style={[styles.box,styles.lightBlue]}>
        <Text style={{borderRadius:5}}>Lightblue Box</Text>
      </View>
      <View style={[styles.box,styles.ligthgreen]}>
        <Text>Lightgreen Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: { flex: 1, backgroundColor: "plum", padding: 50 },
  box:{
    height:100,
    width:100,

    paddingVertical:20,
    paddingHorizontal:10,
    marginVertical:10,
    borderWidth:2,
    borderColor:"white",
    // borderStyle:"solid"  //this is the default style
    borderRadius:5 
    // you could use the border radius for the view and that will work for both android and i phone 
    // but radius for the text component is only work in android

  },
  lightBlue:{backgroundColor:"lightblue"},
  ligthgreen:{backgroundColor:"lightgreen"}
});
