import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';
import MealImage from './MealImage';
import MealItemDetail from './MealItemDetail';

function MealItem({ item }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: item.id,
        });
    }
    return (
        <View style={[styles.mealItem, globalStyles.shadow]} pressed>
            <Pressable onPress={selectMealItemHandler} style={({ pressed }) => [
                pressed && styles.pressed
            ]}>
                <View style={styles.innerContainer}>
                    <MealImage imageUrl={item.imageUrl} title={item.title} />
                    <MealItemDetail item={item} />
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
   
});

export default MealItem;