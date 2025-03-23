import { beltmarApi } from "./beltmarApi";

export const alertApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Get Alerts for a Strategy
    getAlerts: builder.query({
      query: ({ strategyId }) => `/api/alerts/${strategyId}`,
      providesTags: ["Alerts"],
    }),

    // ✅ Mark Alert as Read
    markAlertAsRead: builder.mutation({
      query: ({ alertId }) => ({
        url: `/api/alerts/${alertId}/read`,
        method: "POST",
      }),
      invalidatesTags: ["Alerts"],
    }),
  }),
});

export const {
  useGetAlertsQuery,
  useMarkAlertAsReadMutation,
} = alertApi;

