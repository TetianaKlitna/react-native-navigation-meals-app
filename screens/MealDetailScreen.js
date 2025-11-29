import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemDetail from "../components/MealItemDetail";
import MealImage from "../components/MealImage";

function MealDetailScreen({ route }) {    
    const mealId = route.params.mealId;   
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <MealImage imageUrl={selectedMeal.imageUrl} title={selectedMeal.title} />
            <MealItemDetail item={selectedMeal} />
            <Text style={styles.title}>Ingredients:</Text>
            {selectedMeal.ingredients.map((ingredient) => (
                <Text key={ingredient} style={styles.text}>- {ingredient}</Text>
            ))} 
            <Text style={styles.title}>Steps:</Text>
            {selectedMeal.steps.map((step, index) => (
                <Text key={step} style={styles.text}>{index + 1}. {step}</Text>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
        textAlign: 'center',
        padding: 4,
    },
    text: {
        fontSize: 14,
        marginVertical: 2,      
    }
});

export default MealDetailScreen;