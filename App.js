import { useState } from "react";
import { View, Image, ImageBackground, Text, ScrollView ,Modal, Button,StatusBar} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal,setModal] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <StatusBar backgroundColor="lightblue" barStyle={"dark-content"} />
      {/* we can ues the hidden in the statusBar for hiding the status bar */}
    </View>
  );
}
