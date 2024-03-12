import { configureStore } from "@reduxjs/toolkit";
import signUpSlices from "./slice/signUpSlices";





const store = configureStore({
    reducer:{
        signUp:signUpSlices
    }
})

export default store