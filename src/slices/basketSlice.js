import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name    : "basket",
    initialState,
    reducers: {
        addToBasket     : (state, action) => {
            const index = state.items.findIndex(i => i.id === action.payload.id)

            if (index >= 0) {
                state.items[index].qty++
            } else {
                state.items = [...state.items, {...action.payload, qty: 1}]
            }
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(i => i.id === action.payload)

            if (index >= 0 && state.items[index].qty > 1) {
                state.items[index].qty--
            } else {
                state.items.splice(state.items.findIndex(i => i.id === action.payload), 1)
            }
        },
    },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectGroupedItems = (state) => state.basket.items.reduce((rez, item) => {
    rez[item.category] = rez[item.category] ? [...rez[item.category], item] : [item]

    return rez
}, []);
export const selectItemsCount = (state) => state.basket.items.reduce((rez, item) => rez+=item.qty, 0);
export const selectItemsTotal = (state) => state.basket.items.reduce((rez, item) => rez+=item.qty*item.price, 0);

export default basketSlice.reducer;
