import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { APIClient } from "../Urls/urls";

//categoriesnav
    export const fetchAsyncategories=createAsyncThunk(
        'categoriesnav/fetchAsyncategories',
        async()=>{
            const response=await APIClient.get(`/findAllCategories`);
            const data= await response.data.data;
            return data;
})

//Carousel
    export const fetchAsyncarousel=createAsyncThunk(
        'carouselOne/fetchAsyncarousel',
        async()=>{
            const response=await APIClient.get(`/findHomeImagesByEnglish`);
            const data= await response.data.data;
            return data;
})

//LatestProduct
    export const fetchAsynLatest=createAsyncThunk(
        'LatestProduct/fetchAsynLatest',
         async()=>{
            const response=await APIClient.get(`/latestproduct?cur=KWD`);
            const data= await response.data.data;
            return data;
})

//ProductByCategory 
    export const fetchAsyncCategory=createAsyncThunk(
        'ProductCategory/fetchAsyncCategory',
        async(category_id)=>{
            const response=await APIClient.get(`/findAllProductbyCategoryid?cur=KWD&category_id=${category_id}`);
            const data= await response.data.data;
            return data;
})   
        
//ProductBySingle 
    export const fetchAsyncSingle=createAsyncThunk(
        'ProductSingle/fetchAsyncSingle',
         async(product_id)=>{
            const response=await APIClient.get(`/findProductbyProductId?cur=KWD&product_id=${product_id}`);
            const data= await response.data.data;
            return data;
})

//HomeLatestProduct Slice
    export const fetchAsyncLatest=createAsyncThunk(
        'ProductLatest/fetchAsyncLatest',
         async(category_id)=>{
            const response=await APIClient.get(`/findAllProductbyCategoryid?cur=KWD&category_id=${category_id}category=99`);
            const data= await response.data.data;
            return data;
})

    const initialState={
                categoriesnav:[],   
                carouselOne:[],
                LatestProduct:[],
                ProductByCategory:[],
                ProductBySingle:[],
                HomeLatest:[],
}

    const categorynavSlice=createSlice({
                name:'categoriesnav',
                initialState,
                reducers:{},
                extraReducers:(builder)=>{
                builder

//categoriesnav
            .addCase(fetchAsyncategories.fulfilled,(state,action)=>{
                state.categoriesnav=action.payload;
            })
            .addCase(fetchAsyncategories.rejected,()=>{
                console.log("Rejected")
            })

//Carousel
            .addCase(fetchAsyncarousel.fulfilled,(state,action)=>{
                state.carouselOne=action.payload;
            })
            .addCase(fetchAsyncarousel.rejected,()=>{
                console.log("Rejected")
            })

//LatestProduct
            .addCase(fetchAsynLatest.fulfilled,(state,action)=>{
                state.LatestProduct=action.payload;
            })
            .addCase(fetchAsynLatest.rejected,()=>{
                console.log("Rejected")
            })

//ProductByCategory
            .addCase(fetchAsyncCategory.fulfilled,(state,action)=>{
                state.ProductByCategory=action.payload;
            })
            .addCase(fetchAsyncCategory.rejected,()=>{
                console.log("Rejected")
            })

//ProductBySingle
            .addCase(fetchAsyncSingle.fulfilled,(state,action)=>{
                state.ProductBySingle=action.payload;
            })
            .addCase(fetchAsyncSingle.rejected,()=>{
                console.log("Rejected")
            })

//HomeLatest
            .addCase(fetchAsyncLatest.fulfilled,(state,action)=>{
                state.HomeLatest=action.payload;
            })
            .addCase(fetchAsyncLatest.rejected,()=>{
                console.log("Rejected")
            })
        }
    })

export const getcategoriesNav=(state)=>state.categoriesnav.categoriesnav;
export const getcarouselOne=(state)=>state.categoriesnav.carouselOne;
export const getLatestProduct=(state)=>state.categoriesnav.LatestProduct;
export const getProductCategory=(state)=>state.categoriesnav.ProductByCategory;
export const getProductBySingle=(state)=>state.categoriesnav.ProductBySingle;
export const getHomeLatest=(state)=>state.categoriesnav.HomeLatest;
export default categorynavSlice.reducer;
