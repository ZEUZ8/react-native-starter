import { useState } from "react";
import { View, Alert, Button } from "react-native";
import Greet from "./components/Greet";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <Greet name="Bruce Wayne"/>
      <Greet name="Clark kent"/>
    </View>
  );
}
