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
import { BookOpen, FlaskConicalIcon, LifeBuoy, Send, SquareTerminal, Boxes, Moon, Sun, Sparkles, MoonStar, SunDim, Briefcase, Backpack, Box, Frame } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { SUBSCRIPTION_URL } from "@/lib/constants"

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
        title: "Labs",
        icon: <FlaskConicalIcon className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/thing")) {
      return {
        title: "Things",
        icon: <Boxes className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/blog")) {
      return {
        title: "Blog",
        icon: <BookOpen className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/experience")) {
      return {
        title: "Experience",
        icon: <Box className="h-5 w-5" />,
      }
    } else if (pathname.startsWith("/socials")) {
      return {
        title: "Socials",
        icon: <Frame className="h-5 w-5" />,
      }
    } else {
      return {
        title: "Playground",
        icon: <SquareTerminal className="h-5 w-5" />,
      }
    }
  }

  const { title, icon } = getPageInfo()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Set default theme to dark when component mounts
  useEffect(() => {
    setMounted(true)
    setTheme("dark")
  }, [setTheme])

  // Prevent hydration mismatch
  if (!mounted) return null

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 justify-between">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 cursor-pointer" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href={pathname === "/" ? "/" : pathname.split("/")[1]}>
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
      
      <div className="flex items-center px-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="cursor-pointer">
              {theme === "dark" ? (
                <MoonStar className="h-5 w-5" />
              ) : (
                <SunDim className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("light")}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer" onClick={() => setTheme("dark")}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </DropdownMenuItem>
            <Separator className="my-1" /> */}
            <DropdownMenuItem>
              <Link href={SUBSCRIPTION_URL} className="flex w-full">
                <Sparkles className="mr-2 h-4 w-4" />
                <span>Upgrade to Pro</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
} 