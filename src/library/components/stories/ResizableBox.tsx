import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

export default function ResizableBox(props: { className?: string; children: ReactNode }) {
  return (
    <div
      className={twMerge(
        "border border-neutral-500 dark:border-neutral-300",
        "rounded resize p-4 w-full overflow-hidden",
        "bg-background dark:bg-background-dark",
        props.className
      )}
    >
      {props.children}
    </div>
  )
}
