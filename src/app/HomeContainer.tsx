"use client"

export type Props = {
  status: string | undefined
}
export default function HomeContainer({ status }: Props) {

  return (
    <div>
      Home container {status}
    </div>
  )
}
