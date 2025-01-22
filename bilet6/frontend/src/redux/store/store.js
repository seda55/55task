import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productRedcuer from "../features/ProductSlice.js"
import basketRedcuer from "../features/BasketSlice.js"

const persistProductConfig = {
    key: 'product',
    storage,
  }

  const persistBasketConfig = {
    key: 'basket',
    storage,
  }


const persistProductReducer = persistReducer(persistProductConfig,productRedcuer)

const persistBasketReducer = persistReducer(persistBasketConfig,basketRedcuer)

const store = configureStore({
  reducer: {
    products: persistProductReducer,
    basket: persistBasketReducer,
  },
  middleware: (getDefaultMiddleWare) =>
  getDefaultMiddleWare({ serializableCheck: false })

});

export const persistor = persistStore(store);

export default store; 