import { useState } from "react";
import { View, Image, ImageBackground, Text, ScrollView ,Modal, Button} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [modal,setModal] = useState(false)
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      <Text>Testing modal</Text>
      <Button title="Click Me" onPress={()=>setModal(true)} color="mdinightblue"/>

      <Modal
       visible={modal}
       onRequestClose={()=> setModal(false)}
       animationType="slide"
       presentationStyle="pageSheet"
       >
        <View style={{flex:1,backgroundColor:"lightblue",padding:70}}>
          <Text>Modal Content</Text>
          <Button title="Close" color='midnightblue' onPress={()=>setModal(false)}/>
        </View>
        
       </Modal>
    </View>
  );
}
