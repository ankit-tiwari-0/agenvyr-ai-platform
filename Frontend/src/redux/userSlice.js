import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userwa",
    initialState: {
        userData: null,
    },
    reducers: {
        setUsedata: (state, action) => {
            state.userData = action.payload;

        }
    }
})

export const { setUsedata } = userSlice.actions;
export default userSlice.reducer;