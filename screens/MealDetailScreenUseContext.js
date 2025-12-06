import { useLayoutEffect, useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemDetail from "../components/MealItemDetail";
import MealImage from "../components/MealImage";
import SubTitle from "../components/SubTitle";
import  IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";

function MealDetailScreen({ route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext);
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
            headerRight: () => (
                <IconButton
                    icon={mealIsFavorite ? "star" : "star-outline"}
                    color="white"
                    onPress={changeFavoriteStatusHandler}
                />
            ),
        });
    }, [mealId, navigation, changeFavoriteStatusHandler, mealIsFavorite]);
    return (
        <ScrollView>
            <View style={{ flex: 1, padding: 16 }}>
                <MealImage imageUrl={selectedMeal.imageUrl} title={selectedMeal.title} />
                <MealItemDetail item={selectedMeal} />
                <SubTitle>Ingredients:</SubTitle>
                {selectedMeal.ingredients.map((ingredient) => (
                    <Text key={ingredient} style={[styles.text, {textAlign: 'center', backgroundColor: '#f0f0f0', padding: 8, borderRadius: 6}]}>{ingredient}</Text>
                ))}
                <SubTitle>Steps:</SubTitle>
                {selectedMeal.steps.map((step, index) => (
                    <Text key={step} style={styles.text}>{index + 1}. {step}</Text>
                ))}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        marginVertical: 2,
        marginBottom: 8,
    }
});

export default MealDetailScreen;