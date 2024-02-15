import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView } from "react-native";
import { StyledView, StyledText, StyledPressable } from "../components/styled";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Selection'>;

export default function Selection({ navigation }: HomeProps) {
    return (
        <SafeAreaView>
            <ScrollView>
                <StyledText className="text-3xl w-48 m-auto text-center text-black mt-14 mb-8">Sculleryflow Inventory</StyledText>
                <StyledView className="flex flex-row -ml-3 justify-center ">
                    <Item name="kitchen" navigation={navigation} />
                    <Item name="stockroom" navigation={navigation} />
                </StyledView>
                <StyledView className="w-80 m-auto mt-7">
                    <StyledView className="-mx-1">
                        <StyledText className="text-xl text-black">Low Inventory...</StyledText>
                        <StyledView className="mt-1">
                            <LowInventoryItem />
                            <LowInventoryItem />
                            <LowInventoryItem />
                            <LowInventoryItem />
                            <LowInventoryItem />
                        </StyledView>
                    </StyledView>
                </StyledView>
            </ScrollView>
        </SafeAreaView>
    )
}

type ItemProps = {
    name: 'kitchen'|'stockroom';
    navigation?: NativeStackNavigationProp<RootStackParamList, 'Selection'>;
}

function Item({ name, navigation }: ItemProps) {
    return (
        <StyledPressable
            onPress={ () => !!navigation && navigation.navigate('Inventory', { type: name }) }
            className="w-40 h-28 ml-3 flex flex-row justify-end items-center bg-gray-300 rounded-lg active:opacity-90"
        >
            <StyledView className="px-2 py-0 bg-green-600 rounded-tl-lg rounded-bl-lg">
                    <StyledText className="text-lg text-white capitalize">{ name }</StyledText>
            </StyledView>
        </StyledPressable>
    );
}

function LowInventoryItem() {
    return (
        <StyledView className="h-11 rounded-lg bg-red-500 mt-3">
            <StyledView className="flex flex-row w-full px-3 h-full justify-between items-center">
                <StyledText className="text-white">Lettuce</StyledText>
                <StyledText className="text-white">1 pack remaining</StyledText>
            </StyledView>
        </StyledView>
    );
}