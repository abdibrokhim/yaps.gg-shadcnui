'use client'

import { useState } from 'react'
import { WRAPPEDS } from './data'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

export default function WrappedPage() {
  const router = useRouter()

  const handleCardClick = (wrapped: typeof WRAPPEDS[0], e: React.MouseEvent<HTMLDivElement>) => {
    // Only navigate if the click was directly on the card, not on a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    router.push(`/wrapped/${wrapped.uid}`);
  };

  return (
    <div className="mx-auto mt-4 not-prose">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {WRAPPEDS.map((wrapped) => (
          <div key={wrapped.uid} className="flex flex-col">
            <Card 
              className="py-4 h-full overflow-hidden transition-colors hover:bg-muted/50 cursor-pointer"
              onClick={(e) => handleCardClick(wrapped, e)}
            >
              <CardContent className="px-4 flex flex-col items-center justify-center">
                <div className="text-8xl font-bold mb-4">
                  {wrapped.title.split(' ')[1] || '24'}
                </div>
                <Badge variant="outline" className="mb-2">
                  {wrapped.title}
                </Badge>
                <div className="text-sm text-muted-foreground text-center">
                  {wrapped.ps}
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
