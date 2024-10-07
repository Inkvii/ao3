"use client"

import { Route } from "@/library/router/types/Route"
import { useParams } from "next/navigation"

export function useTypedParams<
  TSearchParams,
  TVariables extends {
    [key: string]: string | string[]
  },
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
>(route: Route<TSearchParams, TVariables>) {
  const params = useParams<TVariables>()

  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      ;(params[key] as string[]) = (params[key] as string[]).map((p) => decodeURIComponent(p))
    }
    ;(params[key] as string) = decodeURIComponent(params[key] as string)
  })

  return params as unknown as TVariables
}
