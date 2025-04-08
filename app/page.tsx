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
      <div className="w-full h-[calc(100vh-2rem)] rounded-lg">
        <iframe 
          src="https://zarin.vercel.app" 
          className="w-full h-full border-0 rounded-lg"
          title="Zarin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </>
  )
}
