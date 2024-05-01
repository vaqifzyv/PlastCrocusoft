import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// impoort AxiosBase from './axios-base'

export const prApi = createApi({
  reducerPath: "prApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (build) => ({
    getCards: build.query({
      query: () => `cards`,
    }),
    getOurCards: build.query({
      query: () => `ourCards`,
    }),
    getLabels: build.query({
      query: () => `labels`,
    }),
    getNavItems: build.query({
      query: () => `navItems`,
    }),
    getDevicesCard: build.query({
      query: () => `devices`,
    }),
    getSearch: build.query({
      query: () => `search`,
    }),
    // postComment : build.mutation({
    //   query: (data) => {
    //     return {
    //       url : '/',
    //       method  : 'POST',
    //       data
    //     }

    //   }
  }),
});

export const {
  useGetCardsQuery,
  useGetOurCardsQuery,
  useGetLabelsQuery,
  useGetNavItemsQuery,
  useGetDevicesCardQuery,
  useGetSearchQuery,
} = prApi;
