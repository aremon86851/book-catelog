import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import { bookApi } from "./features/bookSlice/bookSlice";
import { reviewApi } from "./features/reviews/reviewSlice";

const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    [reviewApi.reducerPath]: reviewApi.reducer,
    users: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware, reviewApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
