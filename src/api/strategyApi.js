import { beltmarApi } from "./beltmarApi";

export const strategyApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Generate a new marketing strategy using AI
    generateStrategy: builder.mutation({
      query: (strategyData) => ({
        url: `/api/marketing-strategies/generate`,
        method: "POST",
        body: strategyData,
      }),
    }),

    // ✅ Get a specific marketing strategy by ID
    getStrategyById: builder.query({
      query: (id) => `/api/marketing-strategies/${id}`,
    }),

    // ✅ Get all strategies created by a specific user
    getUserStrategies: builder.query({
      query: (userId) => `/api/marketing-strategies/user/${userId}`,
    }),
  }),
});

export const {
  useGenerateStrategyMutation,
  useGetStrategyByIdQuery,
  useGetUserStrategiesQuery,
} = strategyApi;

