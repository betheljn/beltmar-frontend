import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const beltmarApi = createApi({
  reducerPath: "beltmarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000",
    prepareHeaders: (headers, { getState }) => {
      const state = getState?.(); // optional chaining
      const token = state?.auth?.token;
    
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    
      return headers;
    },    
  }),
  tagTypes: [
    "User",
    "CRM",
    "Strategy",
    "Performance",
    "Optimization",
    "ABTest",
    "AIAdjustments",
    "Alerts",
    "Trends",
  ],
  endpoints: () => ({}),
});

export default beltmarApi;
