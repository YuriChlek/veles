import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StoreAdminUser } from "../interfaces/interfaces";

const initialState: StoreAdminUser = {
    user: {
        admin_id: '',
        login: '',
        email: '',
        first_name: '',
        last_name: '',
        role: ''
    },
    token: ''
}

const adminUserSlice = createSlice({
    name: 'adminUser',
    initialState: initialState,
    reducers: {
        setAdminUser: (state, action: PayloadAction<StoreAdminUser>) => {
            return { ...action.payload };
        },
        setAdminData: (state, action: PayloadAction<StoreAdminUser>) => {
            return {...state, user: action.payload}
        },
        setAdminToken: (state, action: PayloadAction<StoreAdminUser>) => {
            return {...state, token: action.payload}
        }
    }
})

export const {
    setAdminUser,
    setAdminData,
    setAdminToken
} = adminUserSlice.actions;

export default adminUserSlice.reducer;
