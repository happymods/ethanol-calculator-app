import {Text, View, StyleSheet} from "react-native";
import { Stack, Link } from "expo-router";

import Control from "@/components/Control";
import Button from "@/components/Button";

export default function Index() {
    return (
        <>
            <Stack.Screen options={{title: 'HAPPYMODS' }} />
            <View style={styles.container}>
                <View style={styles.controlsContainer}>
                    <Control title="Mix" unit="E" />
                    <Control title="Fuel" unit="E" />
                    <Control title="Ethanol" unit="E" />
                </View>
                <View style={styles.contentsContainer}>
                    <Text style={styles.contentsValue}>54l</Text>
                    <Text style={styles.contentsTitle}>Total</Text>
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.informationText}>
                        This calculator does not take the quality of your fuel and ethanol or their contents into account
                        when calculating your fuel mix ratios.
                    </Text>
                </View>
                <View style={styles.copyrightContainer}>
                    <Link href="/about" style={styles.copyrightText}>
                        © Mazi Muhlari (4.0.0)
                    </Link>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
    },
    controlsContainer: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    contentsContainer: {
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    contentsValue: {
        fontSize: 46,
        fontWeight: "900",
    },
    contentsTitle: {
        fontSize: 46,
        fontWeight: "900",
    },
    informationContainer: {
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
        marginRight: 15,
    },
    informationText: {
        fontSize: 16,
        textAlign: "center",
    },
    copyrightContainer: {
        flex: 1 / 4,
        alignItems: "center",
        margin: 15,
    },
    copyrightText: {
        fontSize: 16,
    },
});