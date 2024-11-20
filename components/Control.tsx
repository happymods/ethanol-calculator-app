import {View, Text, StyleSheet} from "react-native";
import ControlButton from "@/components/ControlButton";

type Props = {
    title: string;
    unit: string;
}

export default function Control({ title, unit }: Props) {
    return(
        <View style={styles.controlContainer}>
            <View style={styles.controlButtonLeft}>
                <ControlButton icon="minus" />
            </View>
            <View style={styles.controlData}>
                <Text style={styles.controlTitle}>{title}</Text>
                <Text style={styles.controlValue}>0</Text>
            </View>
            <View style={styles.controlButtonRight}>
                <ControlButton icon="plus" />
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
        marginRight: 3,
    },
    controlValue: {
        fontSize: 18,
        marginLeft: 3,
    },
    controlButtonLeft: {
    },
    controlButtonRight: {
    },
});