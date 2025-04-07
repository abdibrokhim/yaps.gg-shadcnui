'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Wrapped } from '../data'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Copy, Check, ExternalLink, ArrowLeft, Boxes, ChevronDown, Share2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Markdown } from '@/components/ui/markdown'

function ShareDropdown({ wrapped, onCopy }: { wrapped: Wrapped, onCopy: () => void }) {
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
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          className="cursor-pointer"
          onClick={() => {
            const sourceUrl = wrapped.rawUrl.replace('raw.githubusercontent.com', 'github.com').replace('/refs/heads/main/README.md', '')
            window.open(sourceUrl, '_blank', 'noopener,noreferrer')
          }}
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          <span>View on GitHub</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function WrappedClient({ wrapped }: { wrapped: Wrapped }) {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [copied, setCopied] = useState<boolean>(false)

  useEffect(() => {
    fetchWrappedContent()
  }, [])

  const fetchWrappedContent = async () => {
    try {
      setLoading(true)
      
      const response = await fetch(wrapped.rawUrl)
      const rawContent = await response.text()
      
      setContent(rawContent)
    } catch (error) {
      toast.error('Failed to load content')
      console.error('Error fetching content:', error)
    } finally {
      setLoading(false)
    }
  }
  
  const handleCopy = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    toast.success('URL copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="mx-auto mt-4 not-prose">
      <div className="mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h1 className="scroll-m-20 font-bold tracking-tight">{wrapped.ps}</h1>
            <ShareDropdown wrapped={wrapped} onCopy={handleCopy} />
          </div>
        </div>
        
        <Separator className="my-6" />
      </div>
      
      {loading ? (
        <div className="w-full h-screen flex items-center justify-center p-12 border rounded-lg bg-muted">
          <div className="text-center text-muted-foreground">
            <div className="animate-pulse mb-4">Loading content...</div>
          </div>
        </div>
      ) : content ? (
        <div className="w-full rounded-lg overflow-hidden border bg-muted">
          <div className="p-6">
            <pre className="whitespace-pre-wrap overflow-auto max-h-screen">
              <Markdown>{content}</Markdown>
            </pre>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center p-12 border rounded-lg bg-muted">
          <div className="text-center text-muted-foreground">
            <Boxes className="w-12 h-12 mx-auto mb-4" />
            <p>No content available</p>
            <Link href="/wrapped">
              <Button
                variant="default"
                size="sm"
                className="mt-4 cursor-pointer"
              >
                <ArrowLeft className="mr-1 h-3 w-3" /> Back
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
