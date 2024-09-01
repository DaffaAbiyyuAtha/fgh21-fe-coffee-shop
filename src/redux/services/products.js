import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const products = createApi({
  reducerPath: "query/product",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000",
  }),
  endpoints: (builder) => ({
    listProducts: builder.query({
      query: ([page, limit]) => `/products?page=${page}&limit=${limit}`,
    }),
    getProducts: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useListProductsQuery, useGetProductsQuery } = products;
