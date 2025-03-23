import { beltmarApi } from "./beltmarApi";

export const trendAnalysisApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Fetch trend analysis for a specific strategy
    getTrendAnalysis: builder.query({
      query: (strategyId) => `/api/trends/${strategyId}`,
    }),
  }),
});

export const {
  useGetTrendAnalysisQuery,
} = trendAnalysisApi;

