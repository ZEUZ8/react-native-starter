import { View,Image} from "react-native";
const logoImg = require("./assets/adaptive-icon.png")

export default function App(){
  return (
    <View style={{flex:1, backgroundColor:"plum",padding:50}}>
      {/* <View style={{ width:200,height:200, backgroundColor:"lightblue"}}></View>
      <View style={{ width:200,height:200, backgroundColor:"lightgreen"}}></View> */}
      <Image source={logoImg} style={{width:300, height:300}}/>
      <Image source={logoImg} style={{width:300, height:300}}/>
    </View>
  )
}



