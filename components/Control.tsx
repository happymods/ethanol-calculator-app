import {View, Text, StyleSheet} from "react-native";
import ControlButton from "@/components/ControlButton";

type Props = {
    title: string;
    value: number;
    prefix?: string;
    suffix?: string;
    onButtonLeftPress: () => void;
    onButtonRightPress: () => void;
    // unit: string;
    // increment: number;
}

export default function Control({ title, value, prefix, suffix, onButtonLeftPress, onButtonRightPress }: Props) {
    return(
        <View style={styles.controlContainer}>
            <View style={styles.controlButtonLeft}>
                <ControlButton icon="minus" onPress={onButtonLeftPress} />
            </View>
            <View style={styles.controlData}>
                <Text style={styles.controlTitle}>{title}</Text>
                <Text style={styles.controlValue}>{prefix}</Text>
                <Text style={styles.controlValue}>{value}</Text>
                <Text style={styles.controlValue}>{suffix}</Text>
            </View>
            <View style={styles.controlButtonRight}>
                <ControlButton icon="plus" onPress={onButtonRightPress} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    controlContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    controlData: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    controlTitle: {
        fontSize: 18,
        fontWeight: "900",
        marginRight: 6,
    },
    controlValue: {
        fontSize: 18,
    },
    controlButtonLeft: {
    },
    controlButtonRight: {
    },
});