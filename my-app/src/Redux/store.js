import {configureStore} from '@reduxjs/toolkit'
import categoriesnavReducer from './categorynavSlice'
import cartReducer from './cartSlice'
import brandReducer from './BrandSlice'
import userReducer from './Regslice'
import tokenReducer from './Regslice'

export const store=configureStore({
    reducer:{
        categoriesnav:categoriesnavReducer,
        cart:cartReducer,
        brands:brandReducer,
        user:userReducer,
        token:tokenReducer,

    }
})