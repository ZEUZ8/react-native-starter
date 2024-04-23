import { View, Text } from "react-native";

export default function Greet({name,styles}){
    return (
        <View>
            <Text style={styles.darkTextColor}>hello , {name} <Text style={styles.fontSize}>sinan is here</Text></Text>
        </View>
    )
}