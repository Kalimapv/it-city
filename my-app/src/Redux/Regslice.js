import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { APIClient } from '../Urls/urls';

const userSlice = createSlice({
                name: 'user',
                initialState: {
                user: [],
                token: '',
                },

      extraReducers: (builder) => {
        builder
          .addCase(registration.fulfilled, (state, action) => {
            state.user = action.payload;
            state.token = action.payload;
          })
          .addCase(registration.rejected, (state, action) => {
            console.log('rejected');
          })
          .addCase(login.fulfilled, (state,action) => {
            state.token = action.payload;
            state.user = action.payload;
            return state;
          })
          .addCase(login.rejected, (state,action) => {
            console.log("rejected")
          })
    }
});

  export const registration = createAsyncThunk(
    'registration/registerUser',
    async (userData) => {
      try {
        const response = await APIClient.post('/register', userData);
        return response.data.data;
          } catch (error) {
        if (!error.response) {
          throw error;
          }
    }
  }
);

  export const login = createAsyncThunk(
    'auth/login', 
    async ({customer_email,password},) => {
      try {
        const Config = {
              headers : {
                        'Content-Type' : 'application/json'
                        },
                      }
        const response = await APIClient.post('/login', {customer_email, password}, Config);
        const token = response.data.token;
        console.log("token", token);
        localStorage.setItem("token", token)
        localStorage.setItem("token", JSON.stringify(token))

        const user = response.data.user;
        localStorage.setItem("token", user);
        localStorage.setItem("token", JSON.stringify(user))
        return {token, user};
      }
        catch (error) {
          throw new Error(error.response.data.message)
        }
}
);
    
  export const fetchAsyncuserdetails = createAsyncThunk('name/fetchAsyncuserdetails',
    async () => {
      try {
        const response = await APIClient.get(`http://itcity.tectuz.com/api/getUserbyToken?customer_id=23672`)
        const data = await response.data.data;
        return data;
      } catch (error) {
        console.log(error);
      }
    });

export const getUser = (state) => state.user.user;
export const getToken = (state) => state.user.token;
export default userSlice.reducer;