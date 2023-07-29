import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { APIClient } from "../Urls/urls";

//BrandCategories
    export const fetchAsyncBrandCategories = createAsyncThunk(
      'BrandByCategory/fetchAsyncBrandCategories',
      async()=>{
        const response = await APIClient.get(`/findAllBrandDetails`);
        const data = await response.data.data;
        return data;
   }
);

const BrandSlice = createSlice({
        name : 'brands',
        initialState : {
                        BrandByCategory : [],
                        selectedData : [],
                        selectedBrands : [],
                       },  
        reducers : {
          setAvailableBrands(state,action) {
              state.availableBrand = action.payload;
              },
          setSelectedBrands(state,action) {
              state.selectedBrands = action.payload;
              },
          setSelectedData(state,action) {
              state.selectedData = action.payload;
              }
        },
        extraReducers:(builder)=>{
          builder

//BrandCategories
        .addCase(fetchAsyncBrandCategories.fulfilled,(state,action)=>{
          state.BrandByCategory=action.payload;
        })
        .addCase(fetchAsyncBrandCategories.rejected,()=>{
          console.log("Rejected")
        })
      }
  })
  
export const {setAvailableBrands,setSelectedBrands,setSelectedData} = BrandSlice.actions;
export const getBrandByCategories=(state)=>state.brands.BrandByCategory;
export default BrandSlice.reducer;