import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableHighlight, View } from "react-native";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Selection'>;

export default function Selection({ navigation }: HomeProps) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Select inventory:</Text>
            <TouchableHighlight onPress={ () => navigation.navigate('Inventory', { type: 'kitchen' }) }>
                <Text style={{ borderWidth: 1, paddingHorizontal: 5 }}>Kitchen</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={ () => navigation.navigate('Inventory', { type: 'stockroom' }) }>
                <Text style={{ borderWidth: 1, paddingHorizontal: 5 }}>Stockroom</Text>
            </TouchableHighlight>
        </View>
    )
}