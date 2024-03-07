'use client'

interface RootErrorProps {
  error: Error & {digest?: string},
  reset: () => void
}
export default function RootError({error, reset}: RootErrorProps) {
  return <div className="flex flex-col items-center justify-center">
    <h3 className="text-3xl font-bold">
      Something went wrong in root layout/template
    </h3>
    <button onClick={reset}>Retry</button>
  </div>
}