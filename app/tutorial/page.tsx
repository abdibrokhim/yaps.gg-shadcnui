'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"
import { TUTORIALS, VIDEO_TUTORIALS } from "./data"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, PlayCircle } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Type definitions to match data.ts
type Tutorial = typeof TUTORIALS[0];
type VideoTutorial = typeof VIDEO_TUTORIALS[0];

// Card that handles navigation but allows button clicks without nesting <a> tags
function TutorialCard({ 
  tutorial, 
  isVideo = false 
}: { 
  tutorial: Tutorial | VideoTutorial, 
  isVideo?: boolean 
}) {
  const router = useRouter()
  
  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only navigate if the click was directly on the card, not on a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(tutorial.link);
  };
  
  return (
    <Card 
      className="py-4 h-full overflow-hidden transition-colors hover:bg-muted/50 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="px-4">
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
          {tutorial.cover ? (
            <Image
              src={tutorial.cover}
              alt={tutorial.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              {isVideo ? (
                <PlayCircle className="h-10 w-10 text-muted-foreground" />
              ) : (
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              )}
            </div>
          )}
        </AspectRatio>
      </div>
      <CardHeader className="text-left px-4">
        <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {tutorial.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-start gap-2 px-4">
        {!isVideo && 'socials' in tutorial && tutorial.socials?.medium && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            if (tutorial.socials && tutorial.socials.medium) {
              window.open(tutorial.socials.medium, '_blank', 'noopener,noreferrer');
            }
          }}>
            Medium <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        )}
        {!isVideo && 'socials' in tutorial && tutorial.socials?.github && (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            if (tutorial.socials && tutorial.socials.github) {
              window.open(tutorial.socials.github, '_blank', 'noopener,noreferrer');
            }
          }}>
            GitHub <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        )}
        {(!isVideo && 'socials' in tutorial && tutorial.socials?.youtube) || 
          (isVideo && 'youtubeUrl' in tutorial) ? (
          <Button size="sm" variant="outline" onClick={(e) => {
            e.stopPropagation();
            const url = isVideo && 'youtubeUrl' in tutorial 
              ? tutorial.youtubeUrl 
              : 'socials' in tutorial && tutorial.socials ? tutorial.socials.youtube : undefined;
            if (url) window.open(url, '_blank', 'noopener,noreferrer');
          }}>
            <PlayCircle className="mr-1 h-3 w-3" /> {isVideo ? 'Watch on YouTube' : 'YouTube'}
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}

export default function TutorialsPage() {
  // Sort tutorials in descending order (newest first)
  const sortedTutorials = [...TUTORIALS].reverse()
  const sortedVideoTutorials = [...VIDEO_TUTORIALS].reverse()
  
  return (
    <div className="not-prose">
      <Tabs defaultValue="all" className="w-full mt-4">
        <TabsList>
          <TabsTrigger value="all">All Tutorials</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedTutorials.map((tutorial) => (
              <TutorialCard 
                key={tutorial.uid} 
                tutorial={tutorial} 
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="videos" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedVideoTutorials.map((tutorial) => (
              <TutorialCard 
                key={tutorial.uid} 
                tutorial={tutorial} 
                isVideo={true}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 