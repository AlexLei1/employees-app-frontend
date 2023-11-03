import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { API_URL } from "@/configs/api.config";

// baseUrl - базовый url сервера для запросов к нему 
// prepareHeaders - функция которая принимает headers который хранит в себе token 
// 					Данный headers будет уходить с каждым запросом к серверу

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem("token");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

// retry - данная функция позволяет отправлять запрос повторно N-раз при ошибке сервера  
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 });

// reducerPath - указываем уникальное название 
/* 
refetchOnMountOrArgChange - которая используется в React для повторного запроса данных или обновления состояния компонента,
когда он монтируется (т.е. появляется на экране) или когда один из его аргументов (props) изменяется. 
*/ 

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWithRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
});
