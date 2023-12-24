import { View, Image, ImageBackground, Text, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View>
      <ScrollView style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
      {/* <View style={{ width:200,height:200, backgroundColor:"lightblue"}}></View>
      <View style={{ width:200,height:200, backgroundColor:"lightgreen"}}></View> */}
      {/* <Image source={logoImg} style={{width:300, height:300}}/> */}
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Text>
        using the image background with the view section using the image
        background with the view section using the image background with the
        view section using the image background with the view section using the
        image background with the view section using the image background with
        using the image background with the view section using the image
        background with the view section using the image background with the
        view section using the image background with the view section using the
        image background with the view section using the image background with
        using the image background with the view section using the image
        background with the view section using the image background with the
        view section using the image background with the view section using the
        image background with the view section using the image background with
        the view section using the image background with the view section{" "}
      </Text>

      {/* <ImageBackground source={logoImg} style={{flex:1}}>
        <Text>the who's ready to sacrifice himself for bringin the justice </Text>
      </ImageBackground> */}
      <Image source={logoImg} style={{ width: 300, height: 300 }} />
    </ScrollView>
    </View>
  );
}
