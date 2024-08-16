import { apiSlice } from "../services/apiSlice";


const homeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>({
            getIndexPage: builder.query({
                query:()=>({
                    url:""
                }),
                
            }),
    }) 
})


export const {
    useGetIndexPageQuery,
    
} = homeApiSlice