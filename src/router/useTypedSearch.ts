"use client"

import { Route } from "@/library/router/types/Route"
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation"

type TypedSearchParams<TSearchParams> = Omit<ReadonlyURLSearchParams, "get" | "getAll"> & {
  get: (searchParam: keyof TSearchParams) => string | null
  getAll: (searchParam: keyof TSearchParams) => string[]
}

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function useTypedSearchParams<TSearchParams>(route: Route<TSearchParams, unknown>) {
  const params = useSearchParams()

  return {
    ...params,
    get: (searchParam: keyof TSearchParams) => params.get(searchParam as string),
    getAll: (searchParam: keyof TSearchParams) => params.getAll(searchParam as string),
  } as TypedSearchParams<TSearchParams>
}
