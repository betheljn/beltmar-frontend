import { beltmarApi } from "./beltmarApi";

export const abTestApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Create a new A/B test
    createABTest: builder.mutation({
      query: (testData) => ({
        url: "/api/ab-test/create",
        method: "POST",
        body: testData,
      }),
    }),

    // ✅ Update A/B test metrics
    updateABTestMetrics: builder.mutation({
      query: (metricsData) => ({
        url: "/api/ab-test/update",
        method: "POST",
        body: metricsData,
      }),
    }),

    // ✅ Track A/B test metrics for a specific test ID
    trackABTestMetrics: builder.mutation({
      query: ({ testId, metrics }) => ({
        url: `/api/ab-test/${testId}/track`,
        method: "POST",
        body: metrics,
      }),
    }),

    // ✅ Determine the winner of an A/B test
    getABTestWinner: builder.query({
      query: (abTestId) => `/api/ab-test/${abTestId}/winner`,
    }),

    // ✅ Fetch all A/B tests
    getAllABTests: builder.query({
      query: () => "/api/ab-test/all",
    }),
  }),
});

export const {
  useCreateABTestMutation,
  useUpdateABTestMetricsMutation,
  useTrackABTestMetricsMutation,
  useGetABTestWinnerQuery,
  useGetAllABTestsQuery,
} = abTestApi;

