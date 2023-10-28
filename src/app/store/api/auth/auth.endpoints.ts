import {ReqUserData, ResLoginData } from "@/types/user.types";
import { api } from "../api";


// injectEndpoints - функция добавляет Endpoints в виде обьекта
// Endpoint - тело запроса 
// builder - предоставляет возможности для тестирования и отладки endpoints, а также для управления доступом к ним.

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResLoginData, ReqUserData>({
      query: (userData) => ({
          url: "/user/login",
          method: "POST",
          body: userData,
      }),
    }),
    register: builder.mutation<ResLoginData, ReqUserData>({
      query: (userData) => ({
          url: "/user/register",
          method: "POST",
          body: userData,
      }),
    }),
    current: builder.query<ResLoginData, void>({
      query: () => ({
          url: "/user/current",
          method: "GET",
      }),
    }),
  }),
});

export const { 
  useRegisterMutation, 
  useLoginMutation, 
  useCurrentQuery 
} = authApi;

export const {
  endpoints: { 
    login, 
    register, 
    current 
  },
} = authApi;
