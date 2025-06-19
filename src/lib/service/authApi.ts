import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

// Helper function to extract error message
const getErrorMessage = (error: unknown, defaultMessage: string): string => {
  if (typeof error === "object" && error !== null) {
    const err = error as Record<string, unknown>;
    if (err.status === "FETCH_ERROR") {
      return "Network error, please try again later.";
    }
    if (err.data && typeof err.data === "object" && err.data !== null) {
      const data = err.data as Record<string, unknown>;
      if (typeof data.message === "string") {
        return data.message;
      }
    }
  }
  return defaultMessage;
};

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
}

export interface AuthResponse {
  id: string;
  status: string;
  message?: string;
  data: {
    token: string;
    refreshToken?: string;
    user?: User;
  };
}

export interface ApiError {
  status: number | string;
  data?: {
    message: string;
    errors?: string[];
  };
}

interface SignUpData {
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

interface LogoutResponse {
  status: string;
  message?: string;
}

interface ForgotPasswordData {
  email: string;
}

interface ResetPasswordData {
  resetToken: string;
  newPassword: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    credentials: "include",
    prepareHeaders: async (headers) => {
      headers.set("Content-Type", "application/json");
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => "/user/me",
      providesTags: ["User"],
    }),
    signUp: builder.mutation<{ status: string; message?: string }, SignUpData>({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(
          error,
          "Registration failed, please try again."
        );
        toast.error(message);
        return error;
      },
      transformResponse: (response: { status: string; message?: string }) => {
        if (response.status === "success") {
          toast.success(
            "Registration successful! Please check your email to activate your account."
          );
        } else {
          toast.error(
            response.message || "Registration failed, please try again."
          );
        }
        return response;
      },
    }),

    activateAccount: builder.mutation<
      { status: string; message?: string },
      ActivationData
    >({
      query: (data) => ({
        url: "/users/activate",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(
          error,
          "Activation failed, please try again."
        );
        toast.error(message);
        return error;
      },
      transformResponse: (response: { status: string; message?: string }) => {
        if (response.status === "success") {
          toast.success("Account activated successfully!");
        } else {
          toast.error(
            response.message || "Activation failed, please try again."
          );
        }
        return response;
      },
    }),

    signIn: builder.mutation<AuthResponse, SignInData>({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(
          error,
          "Login failed, please try again."
        );
        toast.error(message);
        return error;
      },
      transformResponse: (response: AuthResponse) => {
        if (response.status === "success") {
          localStorage.setItem("token", response.data.token);
          if (response.data.refreshToken) {
            localStorage.setItem("refreshToken", response.data.refreshToken);
          }
          toast.success("Login successful!");
        } else {
          toast.error(response.message || "Login failed, please try again.");
        }
        return response;
      },
      invalidatesTags: ["User"],
    }),

    logout: builder.mutation<LogoutResponse, void>({
      query: () => ({
        url: "/users/logout",
        method: "POST",
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(error, "Logout failed.");
        toast.error(message);
        return error;
      },
      transformResponse: (response: LogoutResponse) => {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");
        toast.success("Logged out successfully!");
        return response;
      },
      invalidatesTags: ["User"],
    }),

    forgotPassword: builder.mutation<
      { status: string; message?: string },
      ForgotPasswordData
    >({
      query: (data) => ({
        url: "/users/forgot-password",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(error, "Failed to send reset email.");
        toast.error(message);
        return error;
      },
      transformResponse: (response: { status: string; message?: string }) => {
        if (response.status === "success") {
          toast.success("Password reset email sent! Please check your inbox.");
        } else {
          toast.error(response.message || "Failed to send reset email.");
        }
        return response;
      },
    }),

    resetPassword: builder.mutation<
      { status: string; message?: string },
      ResetPasswordData
    >({
      query: (data) => ({
        url: "/users/reset-password",
        method: "POST",
        body: data,
      }),
      transformErrorResponse: (error: unknown) => {
        const message = getErrorMessage(error, "Password reset failed.");
        toast.error(message);
        return error;
      },
      transformResponse: (response: { status: string; message?: string }) => {
        if (response.status === "success") {
          toast.success(
            "Password reset successful! Please login with your new password."
          );
        } else {
          toast.error(response.message || "Password reset failed.");
        }
        return response;
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpMutation,
  useActivateAccountMutation,
  useSignInMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
