import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const puppyApi = createApi({
    reducerPath: "puppyApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players",
    }),

    endpoints: (builder) => ({
        getPuppies: builder.query({
            query: () => "",
        })
    }),
});

export const { useGetPuppiesQuery } = puppyApi