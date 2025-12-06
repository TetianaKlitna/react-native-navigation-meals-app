import { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { FavoritesContext } from '../store/context/favorite-context';
import MealItem  from '../components/MealItem';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) => favoriteMealsCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoriteMeals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,    
  },
    text: {
      fontSize: 16,
      color: 'black',
      fontWeight: 'bold',
    },
});

export default FavoritesScreen;