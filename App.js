import { useState } from "react";
import { View, Alert, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid Data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid Data", "DOB incorrect")}
      />
      <Button
        title="Alert 3"
        onPress={() =>
          Alert.alert("Invalid Data", "DOB incorrect", [
            {
              text: "Cancel",
              onPress: () => console.log("cancel Clicked"),
            },
            {
              text: "Ok",
              onPress: () => console.log("Ok Clicked"),
            },
          ])
        }
      />
    </View>
  );
}
