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
        <Text>Lightblue Box</Text>
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
    padding:10
  },
  lightBlue:{backgroundColor:"lightblue"},
  ligthgreen:{backgroundColor:"lightgreen"}
});
