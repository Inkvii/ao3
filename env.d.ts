export {}

type StringBoolean = "false" | "true"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_VERSION: string
      NEXTAUTH_URL: string
      NEXTAUTH_SECRET: string

      NEXT_PUBLIC_SORT_DESCENDING_FLAG: string
      NEXT_PUBLIC_SORT_ASCENDING_FLAG: string
      NEXT_PUBLIC_SORT_SEPARATOR: string
    }
  }
}
