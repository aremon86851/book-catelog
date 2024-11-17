import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["allReviews"],
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => `/reviews`,
      providesTags: ["allReviews"],
    }),
    getReviewByBook: builder.query({
      query: (id) => `/reviews/${id}`,
    }),
    addReviews: builder.mutation({
      query: ({ ...data }) => ({
        url: "/add-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["allReviews"],
      transformResponse: (response: any, meta, arg) => response.data,
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useAddReviewsMutation,
  useGetReviewByBookQuery,
} = reviewApi;
