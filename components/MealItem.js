import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { globalStyles } from '../styles/global';

function MealItem({ item }) {
    function selectMealItemHandler() {
        // Navigation logic will go here
    }
    return (
        <View style={[styles.mealItem, globalStyles.shadow]} pressed>
            <Pressable onPress={selectMealItemHandler} style={({ pressed }) => [
                pressed && styles.pressed
            ]}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{item.duration}m</Text>
                        <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    pressed: {
        opacity: 0.5,
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
        textAlign: 'center',
        padding: 4,
    },
    details: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
    },
    detailItem: {
        fontSize: 14,
        marginHorizontal: 8,
    },
});

export default MealItem;