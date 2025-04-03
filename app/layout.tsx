import type { Metadata, Viewport } from 'next'
import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { SidebarProvider } from '@/components/ui/sidebar'
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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { SquareTerminal } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"
import { cn } from "@/lib/utils"
import { Toaster } from 'sonner'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  title: "Yaps World",
  description: "Yaps World",
  metadataBase: new URL("https://yaps.gg/"),
  keywords: ["ai builder", "youtube creator", "open-source builder", "open-source"],
  
  alternates: {
    canonical: "/",
  },

  authors: [
    {
      name: "Ibrohim Abdivokhidov",
      url: "https://github.com/abdibrokhim",
    },
  ],

  openGraph: {
    title: "Yaps World",
    description: "Yaps World",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/yapsdotgg.png",
        width: 1200,
        height: 630,
        alt: "OG Image",
      },
    ],
  },
  
  icons: {
    icon: '/favicon.ico',
  },

  twitter: {
    card: 'summary_large_image',
    title: "Yaps World",
    description: "Yaps World",
    images: ['/images/yapsdotgg.png'],
    site: '@abdibrokhim',
    creator: '@abdibrokhim',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  appleWebApp: {
    title: 'Yaps World',
    statusBarStyle: 'black-translucent',
  },
  
  appLinks: {
    web: {
      url: 'https://yaps.gg',
      should_fallback: true,
    },
  },
};

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='bg-sidebar' lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-sidebar font-sans antialiased overflow-x-hidden', geist.variable, geistMono.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <PageHeader />
              <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
        <Analytics />
        <Toaster theme='dark' />
      </body>
    </html>
  )
}
