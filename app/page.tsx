"use client"

import { usePathname } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { BookOpen, FlaskConicalIcon, LifeBuoy, Send, SquareTerminal } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Link href="/tutorial" className="group flex flex-col gap-2 rounded-xl bg-muted/50 p-6 transition-colors hover:bg-muted border border-muted shodow-sm">
          <BookOpen className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-medium">Tutorials</h3>
          <p className="text-sm text-muted-foreground">Explore written and video tutorials to enhance your skills.</p>
        </Link>
        <div className="flex flex-col gap-2 rounded-xl bg-muted/30 p-6">
          <FlaskConicalIcon className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-medium">Labs</h3>
          <p className="text-sm text-muted-foreground">Experiment with cutting-edge features and projects.</p>
        </div>
        <div className="flex flex-col gap-2 rounded-xl bg-muted/30 p-6">
          <SquareTerminal className="h-8 w-8 text-primary" />
          <h3 className="text-lg font-medium">Playground</h3>
          <p className="text-sm text-muted-foreground">Test your code in an interactive environment.</p>
        </div>
      </div>
    </>
  )
}
