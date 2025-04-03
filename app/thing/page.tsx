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
import { Boxes, ExternalLink, PlayCircle, Github } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
      className="py-4 h-full overflow-hidden transition-colors hover:bg-muted/50 cursor-pointer"
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
      <CardHeader className="text-left px-4">
        <CardTitle className="line-clamp-2">{thing.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {thing.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-wrap justify-start gap-2 px-4">
        {thing.url && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            handleExternalLink(thing.url);
          }}>
            Visit <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        )}
        {thing.youtube && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            handleExternalLink(thing.youtube);
          }}>
            <PlayCircle className="mr-1 h-3 w-3" /> YouTube
          </Button>
        )}
        {thing.github && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            handleExternalLink(thing.github);
          }}>
            <Github className="mr-1 h-3 w-3" /> GitHub
          </Button>
        )}
        {thing.tutorial && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            router.push(thing.tutorial!);
          }}>
            Tutorial
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default function ThingsPage() {
  // Sort things in ascending order (newest first)
  const sortedThings = [...THINGS];
  const youtubeThings = sortedThings.filter(thing => thing.youtube)
  
  return (
    <div className="not-prose">
      <Tabs defaultValue="all" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="all">All Things</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
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
      </Tabs>
    </div>
  )
} 