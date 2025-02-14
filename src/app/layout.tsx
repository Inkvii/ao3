import "styles/globals.css"
import { Inter } from "next/font/google"
import { ReactNode } from "react"
import { getServerSession } from "next-auth"
import { getTheme } from "@/library/server/theme"
import { twMerge } from "tailwind-merge"
import SessionProvider from "components/auth/SessionProvider"

const customFont = Inter({ subsets: ["latin"], variable: "--custom-font" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.svg",
  },
}

export default async function RootLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession()
  const theme = await getTheme()
  return (
    <html lang="en" className={twMerge(`${customFont.variable} font-sans`, theme === "dark" && "dark")}>
      <body className={"min-w-[320px] min-h-dvh flex flex-col"}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  )
}
