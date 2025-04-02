import { LifeBuoy } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Support Center</h2>
      <p className="text-muted-foreground">
        Get help with any issues you may encounter while using our platform.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg bg-card p-6">
          <h3 className="mb-2 text-lg font-medium">FAQs</h3>
          <p className="text-sm text-muted-foreground">
            Find answers to commonly asked questions.
          </p>
        </div>
        <div className="rounded-lg bg-card p-6">
          <h3 className="mb-2 text-lg font-medium">Contact Support</h3>
          <p className="text-sm text-muted-foreground">
            Reach out to our support team for personalized assistance.
          </p>
        </div>
      </div>
    </div>
  )
} 