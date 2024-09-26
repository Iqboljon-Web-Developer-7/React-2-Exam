import { api } from "./index";

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query({
      query: ({
        page = 1,
        limit = 8,
        brand = "all",
        color = "all",
        rating = "all",
        price = "all",
      }) => ({
        url: `/products?_page=${page}&_limit=${limit}${brand}${color}${rating}${price}`,
      }),
      providesTags: ["Products"],
    }),
    getProduct: build.query({
      query: ({ id }) => ({
        url: `/products/${id}`,
      }),
    }),
    getBrands: build.query({
      query: (params) => ({
        url: "/brands",
        params,
      }),
    }),
    getColors: build.query({
      query: (params) => ({
        url: "/colors",
        params,
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetBrandsQuery,
  useGetColorsQuery,
} = productsApi;
