import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `/`,
    }),
    getBookById: builder.query({
      query: (id) => `/book-details/${id}`,
    }),
    addBook: builder.mutation({
      query: ({ ...data }) => ({
        url: "/add-book",
        method: "POST",
        body: data,
      }),
      transformResponse: (response: any, meta, arg) => response.data,
    }),
  }),
});

export const { useGetAllBooksQuery, useAddBookMutation, useGetBookByIdQuery } =
  bookApi;
