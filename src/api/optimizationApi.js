import { beltmarApi } from "./beltmarApi";

export const optimizationApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Optimize a marketing strategy (AI-powered)
    optimizeStrategy: builder.mutation({
      query: (strategyId) => ({
        url: `/api/optimization/${strategyId}/optimize`,
        method: "POST",
      }),
    }),

    // ✅ Get optimization results
    getOptimizationResults: builder.query({
      query: (strategyId) => `/api/optimization/${strategyId}`,
    }),
  }),
});

export const {
  useOptimizeStrategyMutation,
  useGetOptimizationResultsQuery,
} = optimizationApi;

