import {Text, View, StyleSheet} from "react-native";
import {Stack, Link} from "expo-router";
import {useState} from "react";

import Control from "@/components/Control";

export default function Index() {
    const [mix, setMix] = useState<number>(30);
    const [fuel, setFuel] = useState<number>(0);
    const [ethanol, setEthanol] = useState<number>(0);
    const [contents, setContents] = useState<string>("0");

    const onMoreMix = () => {
        if (mix < 100)
            setMix(mix + 5);

        setEthanol(0);
        setFuel(0);
        setContents("0");
    }

    const onLessMix = () => {
        if (mix > 0)
            setMix(mix - 5);

        setEthanol(0);
        setFuel(0);
        setContents("0");
    }
    const onMoreFuel = () => {
        const ethanolProportion = (mix / 100);
        const fuelProportion = (1 - (mix / 100));

        const uFuel = fuel + 1;
        const uEthanol = ((ethanolProportion / fuelProportion) * uFuel);
        const uContents = uEthanol + uFuel;

        setFuel(uFuel);
        setEthanol(uEthanol);
        setContents(uContents.toFixed(1));
    }
    const onLessFuel = () => {
        const ethanolProportion = (mix / 100);
        const fuelProportion = (1 - (mix / 100));

        const uFuel = fuel > 0 ? fuel - 1 : fuel;
        const uEthanol = (ethanolProportion / fuelProportion) * uFuel;
        const uContents = uEthanol + uFuel;

        setFuel(uFuel);
        setEthanol(uEthanol);
        setContents(uContents.toFixed(1));
    }
    const onMoreEthanol = () => {
        const fuelProportion = (1 - (mix / 100));
        const ethanolProportion = (mix / 100);

        const uEthanol = ethanol + 1;
        const uFuel = (fuelProportion / ethanolProportion) * uEthanol;
        const uContents = uFuel + uEthanol;

        setFuel(uFuel);
        setEthanol(uEthanol);
        setContents(uContents.toFixed(1));
    }
    const onLessEthanol = () => {
        const fuelProportion = (1 - (mix / 100));
        const ethanolProportion = (mix / 100);

        const uEthanol = ethanol > 0 ? ethanol - 1 : ethanol;
        const uFuel = (fuelProportion / ethanolProportion) * uEthanol;
        const uContents = uFuel + uEthanol;

        setFuel(uFuel);
        setEthanol(uEthanol);
        setContents(uContents.toFixed(1));
    }

    const onShareMix = () => {
        // await Share.RequestAsync(new ShareTextRequest
        // {
        //     Title = "Share Ethanol Mix",
        //         Subject = "Share Ethanol Mix",
        //         Text = string.Format("Hi, I just used the 'Happymods Ethanol Calculator ethanol calculator' to calculate my latest ethanol and fuel mixture.\n\nMix: E{0}\nFuel: {1}l\nEthanol: {2}l\n\nTotal Content: {3}l\n\nYou can also calculate your own ethanol fuel mixtures by downloading the app {4}", Mix, Math.Round(Fuel, 1), Math.Round(Ethanol, 1), Math.Round(TotalContent, 1), "http://onelink.to/9z7pkt")
        // });
    }

    return (
        <>
            <Stack.Screen options={{title: 'HAPPYMODS'}}/>
            <View style={styles.container}>
                <View style={styles.controlsContainer}>
                    <Control title="Mix" value={mix} prefix="E" onButtonLeftPress={onLessMix} onButtonRightPress={onMoreMix} />
                    <Control title="Fuel" value={fuel} suffix="l" onButtonLeftPress={onLessFuel} onButtonRightPress={onMoreFuel} />
                    <Control title="Ethanol" value={ethanol} suffix="l" onButtonLeftPress={onLessEthanol} onButtonRightPress={onMoreEthanol} />
                </View>
                <View style={styles.contentsContainer}>
                    <Text style={styles.contentsValue}>{contents}l</Text>
                    <Text style={styles.contentsTitle}>Total</Text>
                </View>
                <View style={styles.informationContainer}>
                    <Text style={styles.informationText}>
                        This calculator does not take the quality of your fuel and ethanol or their contents into
                        account
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