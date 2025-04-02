import { FlaskConicalIcon } from "lucide-react"

export default function LabPage() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Lab Projects</h2>
      <p className="text-muted-foreground">
        Explore experimental projects and cutting-edge features.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg bg-card p-6">
          <h3 className="mb-2 text-lg font-medium">Yaps World</h3>
          <p className="text-sm text-muted-foreground">
            An interactive playground for exploring the Yaps ecosystem.
          </p>
        </div>
        <div className="rounded-lg bg-card p-6">
          <h3 className="mb-2 text-lg font-medium">Open Community</h3>
          <p className="text-sm text-muted-foreground">
            Collaborate with other developers on open-source projects.
          </p>
        </div>
        <div className="rounded-lg bg-card p-6">
          <h3 className="mb-2 text-lg font-medium">That Two PhDs</h3>
          <p className="text-sm text-muted-foreground">
            Advanced research and development projects.
          </p>
        </div>
      </div>
    </div>
  )
} 