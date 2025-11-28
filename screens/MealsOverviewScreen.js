import { MEALS } from "../data/dummy-data";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useRoute } from '@react-navigation/native';
import MealItem from "../components/MealItem";

function MealsOverviewScreen() {
    const route = useRoute();
    const categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });
    
    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
               renderItem={({ item }) => <MealItem item={item} />}
            />
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
