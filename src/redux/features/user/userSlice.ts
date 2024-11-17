import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const initialState = {
  email: localStorage.getItem("email") || "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    signOutUser: (state) => {
      state.email = "";
      localStorage.setItem("email", "");
      signOut(auth);
    },
  },
});

export const { authenticateUser, signOutUser } = usersSlice.actions;
export default usersSlice.reducer;
