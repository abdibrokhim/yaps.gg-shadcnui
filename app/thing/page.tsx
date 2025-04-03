'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { THINGS } from "./data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Boxes, ExternalLink, PlayCircle, Github, BookOpen, Plus, ChevronRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"

// Type definitions to match data.ts
type Thing = typeof THINGS[0];

// Card that handles navigation but allows button clicks without nesting <a> tags
function ThingCard({ 
  thing
}: { 
  thing: Thing
}) {
  const router = useRouter()
  
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only navigate if the click was directly on the card, not on a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(thing.link);
  };

  const handleExternalLink = (url?: string) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };
  
  return (
    <Card 
      className="py-4 h-full overflow-hidden transition-colors hover:bg-muted/50 cursor-pointer flex flex-col"
      onClick={handleCardClick}
    >
      <div className="px-4">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
          {thing.cover ? (
            <Image
              src={thing.cover}
              alt={thing.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              <Boxes className="h-10 w-10 text-muted-foreground" />
            </div>
          )}
        </AspectRatio>
      </div>
      <CardHeader className="text-left px-4 flex-1">
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-2">{thing.title}</CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8 cursor-pointer" 
                onClick={(e) => e.stopPropagation()}>
                <Plus className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {thing.url && (
                <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleExternalLink(thing.url);
                }}>
                  <ExternalLink className="mr-2 h-4 w-4" /> Visit website
                </DropdownMenuItem>
              )}
              {thing.youtube && (
                <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleExternalLink(thing.youtube);
                }}>
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch on YouTube
                </DropdownMenuItem>
              )}
              {thing.github && (
                <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  handleExternalLink(thing.github);
                }}>
                  <Github className="mr-2 h-4 w-4" /> Fork on GitHub
                </DropdownMenuItem>
              )}
              {thing.tutorial && (
                <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                  e.stopPropagation();
                  router.push(thing.tutorial!);
                }}>
                  <BookOpen className="mr-2 h-4 w-4" /> Read tutorial
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription className="line-clamp-3">
          {thing.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function ThingsPage() {
    const [showAllTabs, setShowAllTabs] = useState(false)

  // Sort things in ascending order (newest first)
  const sortedThings = [...THINGS];
  const youtubeThings = sortedThings.filter(thing => thing.youtube);
  const tutorialThings = sortedThings.filter(thing => thing.tutorial);
  const githubThings = sortedThings.filter(thing => thing.github);
  
  return (
    <div className="not-prose">
      <Tabs defaultValue="all" className="w-full mt-4">
        <TabsList>
            <div className="flex items-center">
                <TabsTrigger value="all" className="cursor-pointer">Show all</TabsTrigger>
                <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 cursor-pointer 
                        ${showAllTabs ? 'text-primary' : ''}
                    `}
                    onClick={() => setShowAllTabs(!showAllTabs)}
                    >
                    <ChevronRight className={`h-4 w-4 transition-transform duration-200 ${showAllTabs ? 'rotate-180' : ''}`} />
                </Button>
                </div>
                
                {showAllTabs && (
                    <>
                        <Separator orientation="vertical" />
                        <TabsTrigger value="videos" className="cursor-pointer">YouTube videos</TabsTrigger>
                        <TabsTrigger value="tutorials" className="cursor-pointer">Written tutorials</TabsTrigger>
                        <TabsTrigger value="github" className="cursor-pointer">Source codes</TabsTrigger>
                    </>
                )}
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedThings.map((thing) => (
              <ThingCard 
                key={thing.uid} 
                thing={thing} 
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {youtubeThings.map((thing) => (
              <ThingCard 
                key={thing.uid} 
                thing={thing}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tutorials" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorialThings.map((thing) => (
              <ThingCard 
                key={thing.uid} 
                thing={thing}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="github" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {githubThings.map((thing) => (
              <ThingCard 
                key={thing.uid} 
                thing={thing}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 