import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";

function MealsOverviewScreen() {
    return (
        <View style={styles.container}>
            <Text>Meals Overview Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default MealsOverviewScreen;
