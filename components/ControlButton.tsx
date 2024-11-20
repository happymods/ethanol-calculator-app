import {View, StyleSheet, Text, Pressable} from "react-native";
import AntDesignIcons from "@expo/vector-icons/AntDesign";

type Props = {
    icon: keyof typeof AntDesignIcons.glyphMap;
    operation?: string;
    onPress?: () => void;
}

export default function ControlButton({ icon, operation, onPress }: Props) {
    return(
        <View style={styles.controlButtonContainer}>
            <Pressable style={styles.controlButton} onPress={onPress}>
                <AntDesignIcons name={icon} size={24} color="#000" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    controlButtonContainer: {},
    controlButton: {
        width: 70,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 20,
    },
    controlButtonText: {
        color: '#fff',
        fontSize: 16
    },
});