import { useState } from "react";
import { View,ActivityIndicator} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal,setModal] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <ActivityIndicator/>
      <ActivityIndicator size='large'/>
      <ActivityIndicator size='large' color='midnigthblue'/>
      <ActivityIndicator size='large' color='midnigthblue' animating={false}/>
    </View>
  );
}
