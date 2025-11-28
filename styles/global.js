import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    shadow: {
        // Android
        elevation: 4,

        // iOS
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
});
