import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:"#494848ff"}}>
      <StatusBar style="light" backgroundColor="#494848ff" />

      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: { backgroundColor: '#494848ff' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#e5e3e2ff' },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />

          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            options={{ headerBackVisible: true }}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ headerBackVisible: true }}
          />  
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
