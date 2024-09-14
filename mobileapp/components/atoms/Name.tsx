import { Text, View } from "react-native";

export default function Name({ nameText }) {
    return(
        <View>
            <Text
                style={{
                    color:"green",
                    fontSize:100,
                    fontWeight:"600",
                    margin:20,
                }}>
                {nameText}
            </Text>
        </View>
    )
}