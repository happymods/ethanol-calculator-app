import {View, Pressable, StyleSheet, Text} from "react-native";

type Props = {
    text: string;
    onPress?: () => void;
}

export default function Button({ text, onPress }: Props) {
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{text}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {},
    button: {},
    buttonText: {},
});