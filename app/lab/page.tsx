'use client'

import { FlaskConicalIcon, SparklesIcon, Lock } from "lucide-react"
import { LABS } from "./data"
import { SUBSCRIPTION_URL } from "@/lib/constants"
import Image from "next/image"
import Link from "next/link" 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Spotlight } from "@/components/motion-primitives/spotlight"

export default function LabPage() {
  return (
    <div className="flex flex-col gap-6 relative h-full non-prose">
      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {LABS.map((lab) => (
          <div key={lab.uid} className="relative rounded-xl overflow-hidden p-[1px]">
            <Spotlight 
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <Card className="overflow-hidden h-full flex flex-col py-4 relative bg-card/60 backdrop-blur-sm border border-muted">
              <div className="px-4">
                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                  {lab.cover ? (
                    <Image
                      src={lab.cover}
                      alt={lab.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted">
                      <FlaskConicalIcon className="h-10 w-10 text-muted-foreground" />
                    </div>
                  )}
                </AspectRatio>
              </div>
              <CardHeader>
                <CardTitle>{lab.title}</CardTitle>
                <CardDescription>{lab.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>

      {/* Premium Overlay */}
      <div className="absolute inset-0 backdrop-blur-lg bg-background/60 flex flex-col items-center justify-center z-10 rounded-lg">
        <div className="flex flex-col items-center gap-6 max-w-md text-center p-6">
          <div className="bg-primary/10 p-3 rounded-full">
            <Lock className="h-6 w-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Probably Enterprise... idk yet</h2>
          <p className="text-muted-foreground">
            Unlock access to crazy experiments about nerdy web stuff I guess
          </p>
          <Button asChild size="lg" className="gap-2">
            <a href={SUBSCRIPTION_URL} target="_blank" rel="noopener noreferrer">
              <SparklesIcon className="h-4 w-4" />
              Upgrade to Pro
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
} 