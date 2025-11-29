import { View, Text, StyleSheet } from 'react-native';

function MealItemDetail({ item }) {
    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{item.duration}m</Text>
            <Text style={styles.detailItem}>{item.complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{item.affordability.toUpperCase()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default MealItemDetail;