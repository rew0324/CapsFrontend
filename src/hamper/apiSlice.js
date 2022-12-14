import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
 
//get code from the server
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000'}),
    endpoints: builder => ({
        getCategories: builder.query({
            query:() => '/api/categories',
            providesTags: ['categories']           
        }),

        getLabels: builder.query({
            query:() => '/api/labels',
            providesTags:['transaction'] 
        }), 

        getTransaction: builder.query({
            query:() => '/api/transaction',
            providesTags:['transaction'] 
        }),

        addTransaction: builder.mutation({            
            query:(initialTransaction) => ({
                url:'/api/transaction',
                method:"POST",
                body: initialTransaction
            }),
            invalidatesTags: ['transaction']
        }),

        deleteTransaction: builder.mutation({
            query: recordId => ({
                url:'/api/transaction',
                method: "DELETE",
                body:recordId
            }),
            invalidatesTags: ['transaction']
        })

    })
})

export default apiSlice;