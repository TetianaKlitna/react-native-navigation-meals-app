import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { globalStyles } from "../styles/global";

function CategoryGridTile({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, globalStyles.shadow]}>
            <Pressable style={({ pressed }) => [
                styles.btn,
                pressed && styles.pressed
            ]} onPress={onPress}>
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    btn: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    pressed: {
        opacity: 0.5,
    },
});

export default CategoryGridTile;