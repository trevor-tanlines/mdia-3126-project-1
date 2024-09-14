import { Text, View } from "react-native";

export default function Bio({ bioText }) {
    return(
        <View>
            <Text
                style={{
                    color:"green",
                    fontSize:30,
                    margin:50,
                    fontWeight:400,
                }}>
                {bioText}
            </Text>
        </View>
    )
}