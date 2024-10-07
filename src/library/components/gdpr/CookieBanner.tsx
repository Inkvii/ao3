"use client"
import { Button } from "@/library/button/Button"
import useLocalStorage from "@/library/button/hooks/useLocalStorage"
import { ReactNode, useEffect, useState } from "react"

export default function CookieBanner(props: {
  /**
   * Changing this property will lead users to re-acknowledge changed GDPR consent
   */
  consentVersion: number
  children: ReactNode
}) {
  const { value: localStorageConsentVersion, loading, update } = useLocalStorage("gdpr")
  const [showBanner, setShowBanner] = useState<boolean>(false)

  useEffect(() => {
    if (loading) return

    const parsedTimestamp: number = parseInt(localStorageConsentVersion)

    if (isNaN(parsedTimestamp)) {
      setShowBanner(true)
      return
    }

    if (props.consentVersion > parseInt(localStorageConsentVersion)) {
      setShowBanner(true)
    } else {
      setShowBanner(false)
    }
  }, [props.consentVersion, localStorageConsentVersion, loading, showBanner])

  if (!showBanner) return

  return (
    <div
      className={"fixed inset-x-0 min-h-96 bottom-0 bg-neutral-900 dark:bg-neutral-950 z-50 rounded-t-xl p-8 space-y-4"}
      data-testid={"gdpr-banner"}
    >
      {props.children}
      <Button
        variant={"solid"}
        onPress={() => {
          update(props.consentVersion.toString())
        }}
      >
        Understood
      </Button>
    </div>
  )
}
