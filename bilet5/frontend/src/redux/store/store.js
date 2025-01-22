import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistProductConfig = {
    key: 'product',
    storage,
  } 

const persistProductReducer = persistReducer(persistProductConfig, productReducer)


export const store = configureStore({
  reducer: {
   
  },middleware:(getDefaultMiddleWare)=>
  getDefaultMiddleWare({serializableCheck:false})
  
})



export const persistor = persistStore(store)


