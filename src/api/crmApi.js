import { beltmarApi } from "./beltmarApi";

export const crmApi = beltmarApi.injectEndpoints({
  endpoints: (builder) => ({
    // ✅ Leads
    getLeads: builder.query({
      query: () => "/crm/leads",
      providesTags: ["Leads"],
    }),
    addLead: builder.mutation({
      query: (lead) => ({
        url: "/crm/leads",
        method: "POST",
        body: lead,
      }),
      invalidatesTags: ["Leads"],
    }),
    updateLead: builder.mutation({
      query: ({ id, ...lead }) => ({
        url: `/crm/leads/${id}`,
        method: "PUT",
        body: lead,
      }),
      invalidatesTags: ["Leads"],
    }),
    deleteLead: builder.mutation({
      query: (id) => ({
        url: `/crm/leads/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Leads"],
    }),
    searchLeads: builder.query({
      query: (query) => `/crm/leads/search?query=${query}`,
    }),

    // ✅ Contacts
    getContacts: builder.query({
      query: () => "/crm/contacts",
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/crm/contacts",
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    updateContact: builder.mutation({
      query: ({ id, ...contact }) => ({
        url: `/crm/contacts/${id}`,
        method: "PUT",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/crm/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    searchContacts: builder.query({
      query: (query) => `/crm/contacts/search?query=${query}`,
    }),

    // ✅ Deals
    getDeals: builder.query({
      query: () => "/crm/deals",
      providesTags: ["Deals"],
    }),
    addDeal: builder.mutation({
      query: (deal) => ({
        url: "/crm/deals",
        method: "POST",
        body: deal,
      }),
      invalidatesTags: ["Deals"],
    }),
    updateDeal: builder.mutation({
      query: ({ id, ...deal }) => ({
        url: `/crm/deals/${id}`,
        method: "PUT",
        body: deal,
      }),
      invalidatesTags: ["Deals"],
    }),
    deleteDeal: builder.mutation({
      query: (id) => ({
        url: `/crm/deals/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Deals"],
    }),
    searchDeals: builder.query({
      query: (query) => `/crm/deals/search?query=${query}`,
    }),

    // ✅ Tasks
    getTasks: builder.query({
      query: () => "/crm/tasks",
      providesTags: ["Tasks"],
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/crm/tasks",
        method: "POST",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    updateTask: builder.mutation({
      query: ({ id, ...task }) => ({
        url: `/crm/tasks/${id}`,
        method: "PUT",
        body: task,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/crm/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    searchTasks: builder.query({
      query: (query) => `/crm/tasks/search?query=${query}`,
    }),

    // ✅ CRM Analytics Dashboard
    getCRMAnalytics: builder.query({
      query: () => "/crm/dashboard",
    }),
  }),
});

export const {
  useGetLeadsQuery,
  useAddLeadMutation,
  useUpdateLeadMutation,
  useDeleteLeadMutation,
  useSearchLeadsQuery,
  
  useGetContactsQuery,
  useAddContactMutation,
  useUpdateContactMutation,
  useDeleteContactMutation,
  useSearchContactsQuery,

  useGetDealsQuery,
  useAddDealMutation,
  useUpdateDealMutation,
  useDeleteDealMutation,
  useSearchDealsQuery,

  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
  useSearchTasksQuery,

  useGetCRMAnalyticsQuery,
} = crmApi;

