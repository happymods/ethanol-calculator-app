import {Text, View, StyleSheet} from "react-native";
import { Stack } from "expo-router";

import Credits from "@/components/Credits";

export default function About() {
    return (
        <>
            <Stack.Screen options={{title: 'ABOUT', headerBackButtonDisplayMode: "minimal" }} />
            <View style={styles.container}>
                <View style={styles.brandingContainer}>
                    <Text style={styles.brandTitle}>Happymods</Text>
                    <Text style={styles.brandSubtitle}>Ethanol Calculator</Text>
                </View>
                <View style={styles.creditsContainer}>
                    <Credits />
                </View>
                <View style={styles.copyrightContainer}>
                    <Text style={styles.copyrightText}>
                        © Mazi Muhlari (4.0.0)
                    </Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    brandingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    brandTitle: {
        fontSize: 34,
        fontWeight: "900",
    },
    brandSubtitle: {
        fontSize: 22,
        fontWeight: "900",
    },
    creditsContainer: {
        flex: 1 / 2,
        alignItems: "center",
        justifyContent: "center",
        margin: 15,
    },
    copyrightContainer: {
        flex: 1 / 5,
        alignItems: "center",
        margin: 15,
    },
    copyrightText: {
        fontSize: 16,
    },
});