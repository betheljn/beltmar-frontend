import { beltmarApi } from "./beltmarApi";

export const performanceApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Track new performance metric
    trackPerformance: builder.mutation({
      query: (metricData) => ({
        url: `/api/performance/track`,
        method: "POST",
        body: metricData,
      }),
    }),

    // ✅ Get performance metrics for a specific strategy
    getPerformanceMetrics: builder.query({
      query: (strategyId) => `/api/performance/${strategyId}`,
    }),

    // ✅ Generate AI performance insights for a strategy
    generatePerformanceInsights: builder.mutation({
      query: (strategyId) => ({
        url: `/api/performance/insights/${strategyId}`,
        method: "POST",
      }),
    }),

    // ✅ Predict performance using AI models
    predictPerformance: builder.query({
      query: (strategyId) => `/api/performance/predict/${strategyId}`,
    }),

    // ✅ Update performance metrics
    updatePerformance: builder.mutation({
      query: (updateData) => ({
        url: `/api/performance/update`,
        method: "POST",
        body: updateData,
      }),
    }),
  }),
});

export const {
  useTrackPerformanceMutation,
  useGetPerformanceMetricsQuery,
  useGeneratePerformanceInsightsMutation,
  usePredictPerformanceQuery,
  useUpdatePerformanceMutation,
} = performanceApi;

