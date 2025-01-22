import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from "../features/ProductSlice.js";
import basketReducer from "../features/BasketSlice";



const persistProductConfig = {
  key: 'product',
  storage,
}
const persistBasketConfig = {
  key: 'basket',
  storage,
}

const persistProductReducer = persistReducer(persistProductConfig, productReducer)
const persistBasketReducer = persistReducer(persistBasketConfig, basketReducer)



export const store = configureStore({
  reducer: {
    product: persistProductReducer,
    basket : persistBasketReducer
  }, middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare({ serializableCheck: false })

})


export const persistor = persistStore(store);