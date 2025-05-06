//code : 1
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],       // No localStorage
    stateTab: false
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (indexProductId >= 0) {
                state.items[indexProductId].quantity += quantity;
            } else {
                state.items.push({ productId, quantity });
            }
        },
        changeQuantity(state, action) {
            const { productId, quantity } = action.payload;
            const indexProductId = state.items.findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexProductId].quantity = quantity;
            } else {
                state.items = state.items.filter(item => item.productId !== productId);
            }
        },
        toggleStatusTab(state) {
            state.stateTab = !state.stateTab;
        }
    }
});

export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
export default cartSlice.reducer;




//code : 2
//Use this when you need to store add data in browser and if any promblem you face than comment this all code and use code no. 1
// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//     items: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
//     stateTab: false
// }
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             const { productId, quantity } = action.payload;
//             const indexProductId = (state.items).findIndex((item => item.productId === productId));
//             if (indexProductId >= 0) {
//                 state.items[indexProductId].quantity += quantity;
//             } else {
//                 state.items.push({ productId, quantity });
//             }
//             localStorage.setItem("carts", JSON.stringify(state.items));
//         },
//         changeQuantity(state, action) {
//             const { productId, quantity } = action.payload;
//             const indexProductId = (state.items).findIndex(item => item.productId === productId)
//             if (quantity > 0) {
//                 state.items[indexProductId].quantity = quantity;
//             } else {
//                 // delete state.items[indexProductId];
//                 state.items = (state.items).filter(item => item.productId !== productId)
//             }
//         },

//         toggleStatusTab(state) {
//             if (state.stateTab === false) {
//                 state.stateTab = true;
//             } else {
//                 state.stateTab = false;
//             }
//         }
//     }
// })
// export const { addToCart, changeQuantity, toggleStatusTab } = cartSlice.actions;
// export default cartSlice.reducer;
