'use client'
import { ScrollProgress } from '@/components/motion-primitives/scroll-progress'
import { usePathname } from 'next/navigation'
import { useState, useEffect, ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Check, ChevronDown, Share2, ArrowLeft } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Markdown } from '@/components/ui/markdown'

function ShareDropdown({ onCopy }: { onCopy: () => void }) {
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-1 cursor-pointer">
          <Share2 className="h-4 w-4" />
          <span>Share</span>
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={onCopy}
        >
          <Copy className="mr-2 h-4 w-4" />
          <span>Copy URL</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function LayoutTutorial({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isMainTutorialPage = pathname === '/tutorial'
  const [copied, setCopied] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  // Extract title from path for detail pages
  useEffect(() => {
    if (!isMainTutorialPage && pathname) {
      const pathSegments = pathname.split('/')
      const slug = pathSegments[pathSegments.length - 1]
      const formattedTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
      setTitle(formattedTitle)
    } else {
      setTitle('Tutorials')
    }
  }, [pathname, isMainTutorialPage])

  const handleCopy = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast.success('URL copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      {!isMainTutorialPage && (
        <div className="mx-auto mt-4 mb-8 w-full">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">{title}</h1>
              <ShareDropdown onCopy={handleCopy} />
            </div>
          </div>
          <Separator className="my-6" />
        </div>
      )}

      {/* Main content area with proper spacing and typography */}
      <main className="w-full prose prose-zinc max-w-none dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:prose-base prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {!isMainTutorialPage ? (
          <div className="w-full rounded-lg overflow-hidden border bg-muted">
            <div className="p-6">
              {children}
            </div>
          </div>
          ) : (
            <>
              {children}
            </>
          )
        }
      </main>
    </>
  )
}
