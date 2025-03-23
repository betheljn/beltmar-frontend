import { beltmarApi } from "./beltmarApi";

export const oauthApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Google OAuth
    googleLogin: builder.query({
      query: () => "/oauth/google",
    }),
    googleCallback: builder.query({
      query: () => "/oauth/callback/google",
    }),

    // ✅ Facebook OAuth
    facebookLogin: builder.query({
      query: () => "/oauth/facebook",
    }),
    facebookCallback: builder.query({
      query: () => "/oauth/callback/facebook",
    }),

    // ✅ LinkedIn OAuth
    linkedinLogin: builder.query({
      query: () => "/oauth/linkedin",
    }),
    linkedinCallback: builder.query({
      query: () => "/oauth/callback/linkedin",
    }),
  }),
});

export const {
  useGoogleLoginQuery,
  useGoogleCallbackQuery,
  useFacebookLoginQuery,
  useFacebookCallbackQuery,
  useLinkedinLoginQuery,
  useLinkedinCallbackQuery,
} = oauthApi;
