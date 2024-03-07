'use client'

interface ErrorProps {
  error: Error & {digest?: string},
  reset: () => void
}
export default function DashboardError({error, reset}: ErrorProps) {
  return <div className="flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold">Something went wrong in dashboard.</h2>
    <button onClick={reset}>Retry</button>
  </div>
}