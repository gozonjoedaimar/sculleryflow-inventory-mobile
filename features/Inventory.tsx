import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { StyledText, StyledView } from "../components/styled";

type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Inventory'>

export default function Inventory({ navigation, route }: ProfileProps) {

    function goBack() {
        navigation.navigate('Selection');
    }

    return (
        <StyledView className="flex-1 items-center justify-center bg-blue-100">
            <StyledView className="flex flex-row">
                <StyledText className="text-xl mr-1 text-black">Inventory type:</StyledText>
                <StyledText className="text-xl font-bold uppercase text-red-500">{ route?.params?.type }</StyledText>
            </StyledView>
            <StyledView className="mt-4">
                <Button title="Cancel" onPress={ goBack } />
            </StyledView>
        </StyledView>
    )
}
