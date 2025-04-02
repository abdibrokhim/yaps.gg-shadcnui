import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist. Please use the sidebar to navigate to a valid page.
      </p>
      <Link href="/" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground w-fit">
        Go Home
      </Link>
    </div>
  )
} 