import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productSlice from "../feature/ProductSlice"




// const persistConfig = {
//     key: 'root',
//     storage,
//   }


//   const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: {
    products:productSlice
  },
})



// export const persistor = persistStore(store)