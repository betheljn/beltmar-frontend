import { beltmarApi } from "./beltmarApi";

export const aiAdjustmentsApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Generate AI-Driven Adjustments
    generateAIAdjustments: builder.mutation({
      query: ({ strategyId }) => ({
        url: `/api/ai-adjustments/${strategyId}/generate`,
        method: "POST",
      }),
      invalidatesTags: ["AIAdjustments"],
    }),

    // ✅ Apply AI-Driven Adjustment
    applyAIAdjustment: builder.mutation({
      query: ({ recommendationId }) => ({
        url: `/api/ai-adjustments/${recommendationId}/apply`,
        method: "POST",
      }),
      invalidatesTags: ["AIAdjustments"],
    }),

    // ✅ Get AI Adjustments for a Strategy
    getAIAdjustments: builder.query({
      query: ({ strategyId }) => `/api/ai-adjustments/${strategyId}`,
      providesTags: ["AIAdjustments"],
    }),

    // ✅ Evaluate AI Impact
    evaluateAIImpact: builder.query({
      query: ({ strategyId }) => `/api/ai-adjustments/${strategyId}/impact`,
      providesTags: ["AIAdjustments"],
    }),
  }),
});

export const {
  useGenerateAIAdjustmentsMutation,
  useApplyAIAdjustmentMutation,
  useGetAIAdjustmentsQuery,
  useEvaluateAIImpactQuery,
} = aiAdjustmentsApi;

