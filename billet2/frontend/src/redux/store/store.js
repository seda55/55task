import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "../features/ProductSlice.js";
import basketReducer from "../features/BasketSlice.js";

// Persisted product config
const persistProductConfig = {
  key: "product",
  storage,
};

// Persisted basket config
const persistBasketConfig = {
  key: "basket",
  storage,
};

// Persist product and basket reducers
const persistedProductReducer = persistReducer(persistProductConfig, productReducer);
const persistedBasketReducer = persistReducer(persistBasketConfig, basketReducer);

export const store = configureStore({
  reducer: {
    product: persistedProductReducer,
    basket: persistedBasketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
