import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { toast} from 'react-toastify';


interface User{
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string; // Assuming avatar is a URL. Change to appropriate type if needed.

  // Add any other user properties you need
}

interface LogInResponse {
  status: string;
  message?: string;
  data: {
    token: string;
    // Add any other fields returned by your API here
  };
}

interface SinUpData {
    name: string;
    email: string;
    password: string;

}
interface ActivationData {
    activationToken: string;
    activationCode: string;
}
 interface SignInData {
    email: string;
    password: string;
}
 
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api", // Replace with your API base URL
        credentials: "include",
        prepareHeaders: async (headers) => {
            // Add any custom headers here
            headers.set('Content-Type', 'application/json');
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        }
    }),
    endpoints: (builder) => ({
        // Example endpoint, replace or extend as needed
        getUser: builder.query<User, void>({
            query: () => '/user',
        }),
        singup : builder.mutation<{ status: string; message?: string }, SinUpData>({
            query :(data) => ({
                url: '/users/register',
                method: 'POST',
                body: JSON.stringify(data)
            }),
            transformErrorResponse: (error) => {
                if (error.status === "FETCH_ERROR") {
                    toast.error("Network error, please try again later.");
                }
            },
            transformResponse: (response: { status: string; message?: string }) => {
                if (response.status === "success") {
                    toast.success("Registration successful! Please check your email to activate your account.");
                } else {
                    toast.error(response.message || "Registration failed, please try again.");
                }
                return response;
            }
        }),
        activateAccount: builder.mutation<void, ActivationData>({
            query: (data) => ({
                url: '/users/activate',
                method: 'POST',
                body: JSON.stringify(data)
            }),
            transformErrorResponse: (error) => {
                if (error.status === "FETCH_ERROR") {
                    toast.error("Network error, please try again later.");
                }
            },
            transformResponse: (response: { status: string; message?: string }) => {
                if (response.status === "success") {
                    toast.success("Account activated successfully!");
                } else {
                    toast.error(response.message || "Activation failed, please try again.");
                }
            }

        }),
        signIn: builder.mutation<LogInResponse, SignInData>({
            query: (data) => ({
                url: '/users/login',
                method: 'POST',
                body: JSON.stringify(data)
            }),
            transformErrorResponse : (error) => {
                if (error.status === "FETCH_ERROR") {
                    toast.error("Network error, please try again later.");
                }
            },
            transformResponse: (response: LogInResponse) => {
                if (response.status === "success") {
                    localStorage.setItem('token', response.data.token);
                    toast.success("Login successful!");
                } else {
                    toast.error(response.message || "Login failed, please try again.");
                }
                return response;
            }
        })
    })

})

export const {
    useGetUserQuery,
    useSingupMutation,
    useActivateAccountMutation,
    useSignInMutation
} = authApi;