import { apiClient } from "@/lib/axios";

export async function apiGet<TResponse>(url: string, params?: Record<string, string | number>) {
  const response = await apiClient.get<TResponse>(url, { params });
  return response.data;
}

export async function apiPost<TResponse, TBody>(url: string, body: TBody) {
  const response = await apiClient.post<TResponse>(url, body);
  return response.data;
}
