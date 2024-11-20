import {Text, View, StyleSheet} from "react-native";

export default function Credits() {
    return(
        <View style={styles.creditsContainer}>
            <Text style={styles.creditsTitle}>Mazi Muhlari</Text>
            <Text style={styles.creditsText}>
                I am a mobile developer and entrepreneur that loves making apps and software and building tech startups. I also race cars and enjoy modifying my car for the track in my spare time.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    creditsContainer: {},
    creditsTitle: {
        fontSize: 22,
        fontWeight: "900",
        marginBottom: 15,
        textAlign: "center",
    },
    creditsText: {
        fontSize: 16,
        textAlign: "center",
    }
});