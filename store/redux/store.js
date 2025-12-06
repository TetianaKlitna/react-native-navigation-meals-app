import { configureStore } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

const favoriteMealsSlice = createSlice({
    name: 'favoriteMeals',
    initialState: {
        ids: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

const store = configureStore({
    reducer: {
        favoriteMeals: favoriteMealsSlice.reducer
    }
})

export const { addFavorite, removeFavorite } = favoriteMealsSlice.actions;
export default store;