"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { BookOpen, FlaskConicalIcon, LifeBuoy, Send, SquareTerminal } from "lucide-react"
import Link from "next/link"

export default function PageHeader() {
  const pathname = usePathname()
  
  // Get page title and icon based on current route
  const getPageInfo = () => {
    if (pathname === "/") {
      return {
        title: "Playground",
        icon: <SquareTerminal className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/tutorial")) {
      return {
        title: "Tutorials",
        icon: <BookOpen className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/lab")) {
      return {
        title: "Lab",
        icon: <FlaskConicalIcon className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/support")) {
      return {
        title: "Support",
        icon: <LifeBuoy className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/feedback")) {
      return {
        title: "Feedback",
        icon: <Send className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/blog")) {
      return {
        title: "Blog",
        icon: <BookOpen className="h-5 w-5" />,
      }
    } else {
      return {
        title: "Playground",
        icon: <SquareTerminal className="h-5 w-5" />,
      }
    }
  }

  const { title, icon } = getPageInfo()

  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="/">
                <div className="flex items-center gap-2">
                  {icon}
                  <span>{title}</span>
                </div>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {pathname !== "/" && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{pathname.split("/").filter(Boolean).pop()}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  )
} 