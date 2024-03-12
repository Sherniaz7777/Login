import { createSlice } from "@reduxjs/toolkit";





const signUpSlice = createSlice({
    name:"signUp",
    initialState: {
        userData:{},
        loading:false,
        err:""
    },
    reducers:{
    createUser(state, action){
        state.userData=action.payload;
        localStorage.setItem('auth', JSON.stringify(state.userData))
    },
    getFromLS(state) {
        const authData = localStorage.getItem('auth');
        if (authData) {
            state.userData = JSON.parse(authData);
        }
    },
    signOut(state) {
        state.userData = {};
        localStorage.removeItem('auth');
    }
    }
})

export const {createUser, getFromLS, signOut}=signUpSlice.actions 

export default  signUpSlice.reducer;