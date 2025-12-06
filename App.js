import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator();
function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: { backgroundColor: '#494848ff' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#e5e3e2ff' },
      drawerContentStyle: { backgroundColor: '#494848ff' },
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#494848ff',
      drawerActiveBackgroundColor: '#e5e3e2ff',
    }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Your Favorites',
          drawerIcon: ({ color, size }) => <Ionicons name="star" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#494848ff" />
      <FavoritesContextProvider>
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
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              options={{ headerBackVisible: true }}
            />

            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                headerBackVisible: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}
