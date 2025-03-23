import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { beltmarApi } from "../api/beltmarApi";
import { authApi } from "../api/authApi";
import { crmApi } from "../api/crmApi";
import { strategyApi } from "../api/strategyApi";
import { performanceApi } from "../api/performanceApi";
import { optimizationApi } from "../api/optimizationApi";
import { abTestApi } from "../api/abTestApi";
import { aiAdjustmentsApi } from "../api/aiAdjustmentsApi";
import { alertApi } from "../api/alertsApi";
import { trendAnalysisApi } from "../api/trendsApi";
import { oauthApi } from "../api/oauthApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [beltmarApi.reducerPath]: beltmarApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [crmApi.reducerPath]: crmApi.reducer,
    [strategyApi.reducerPath]: strategyApi.reducer,
    [performanceApi.reducerPath]: performanceApi.reducer,
    [optimizationApi.reducerPath]: optimizationApi.reducer,
    [abTestApi.reducerPath]: abTestApi.reducer,
    [aiAdjustmentsApi.reducerPath]: aiAdjustmentsApi.reducer,
    [alertApi.reducerPath]: alertApi.reducer,
    [trendAnalysisApi.reducerPath]: trendAnalysisApi.reducer,
    [oauthApi.reducerPath]: oauthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      beltmarApi.middleware,
      authApi.middleware,
      crmApi.middleware,
      strategyApi.middleware,
      performanceApi.middleware,
      optimizationApi.middleware,
      abTestApi.middleware,
      aiAdjustmentsApi.middleware,
      alertApi.middleware,
      trendAnalysisApi.middleware,
      oauthApi.middleware
    ),
});



