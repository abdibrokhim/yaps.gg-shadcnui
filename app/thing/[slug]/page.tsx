"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { useState, useEffect } from "react"
import * as React from "react"
import { THINGS } from "../data"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { 
  Boxes, 
  Copy,
  Check,
  ExternalLink, 
  Github, 
  PlayCircle,
  BookOpen,
  ArrowLeft
} from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Copy URL button component for thing pages
function CopyButton() {
  const [copied, setCopied] = useState(false)
  const currentUrl = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false)
      }, 2000)
      
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex gap-2 text-sm text-muted-foreground"
      onClick={() => {
        navigator.clipboard.writeText(currentUrl)
        setCopied(true)
      }}
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          <span>Copied</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5" />
          <span>Copy URL</span>
        </>
      )}
    </Button>
  )
}

export default function ThingPage({ params }: { params: { slug: string } }) {
  // Unwrap params using React.use()
  const unwrappedParams = React.use(params as any) as { slug: string };
  const thingSlug = unwrappedParams.slug;
  
  const router = useRouter()
  
  // Find thing by slug
  const thing = THINGS.find(
    (thing) => thing.link.split("/").pop() === thingSlug
  )
  
  if (!thing) {
    notFound()
  }
  
  // Handle button clicks for external links
  const handleExternalLink = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }
  
  // Determine if we should show the iframe
  const showIframe = thing.url && thing.url.trim() !== '';
  
  return (
    <>
      <div className="not-prose mb-8">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-start">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">{thing.title}</h1>
            <CopyButton />
          </div>
          <p className="text-xl text-muted-foreground">{thing.description}</p>
          
          {!showIframe && thing.cover && (
            <div className="mt-4 mb-6">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
                <Image
                  src={thing.cover}
                  alt={thing.title}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {thing.url && (
            <Button 
              size="sm" 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => handleExternalLink(thing.url)}
            >
              Visit <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          )}
          {thing.github && (
            <Button 
              size="sm" 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => handleExternalLink(thing.github)}
            >
              <Github className="mr-1 h-3 w-3" /> GitHub
            </Button>
          )}
          {thing.youtube && (
            <Button 
              size="sm" 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => handleExternalLink(thing.youtube)}
            >
              <PlayCircle className="mr-1 h-3 w-3" /> YouTube
            </Button>
          )}
          {thing.tutorial && (
            <Button 
              size="sm" 
              variant="outline" 
              className="cursor-pointer"
              onClick={() => router.push(thing.tutorial!)}
            >
              <BookOpen className="mr-1 h-3 w-3" /> Tutorial
            </Button>
          )}
        </div>
        
        <Separator className="my-6" />
      </div>
      
      {/* Embed the external website using an iframe if URL exists */}
      {showIframe ? (
        <div className="w-full h-screen rounded-lg overflow-hidden border">
          <iframe 
            src={thing.url} 
            className="w-full h-full" 
            title={thing.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center p-12 border rounded-lg bg-muted">
          <div className="text-center text-muted-foreground">
            <Boxes className="w-12 h-12 mx-auto mb-4" />
            <p>No website available for this project</p>
            <Button
              variant="default"
              size="sm"
              className="mt-4 cursor-pointer"
              onClick={() => router.back()}
            >
              <ArrowLeft className="mr-1 h-3 w-3" /> Back
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
