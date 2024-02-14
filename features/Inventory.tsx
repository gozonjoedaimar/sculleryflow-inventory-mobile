import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableHighlight, View } from "react-native";

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Inventory'>

export default function Inventory({ navigation, route }: ProfileProps) {
    return (
        <View>
            <Text>Inventory type: { route?.params?.type }</Text>
            <TouchableHighlight onPress={ () => navigation.navigate('Selection') }>
                <Text>Cancel</Text>
            </TouchableHighlight>
        </View>
    )
}