'use client'

import { SOCIALS } from "./data"
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card"
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, ExternalLink, Filter, ListFilter } from "lucide-react"
import { toast } from "sonner"
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { YapsTooltip } from "@/components/yaps-tooltip"

export default function SocialsPage() {
  // Split socials into active and inactive
  const activeSocials = SOCIALS.filter(social => social.status === "active")
  const inactiveSocials = SOCIALS.filter(social => social.status === "inactive")
  
  // State for category filter
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  // Group socials by platform type
  const groupedActiveSocials = activeSocials.reduce((acc, social) => {
    // Determine category based on platform name
    let category = "Other"
    
    if (/github|gitlab|devpost|stackoverflow|codeforces|leetcode|dmoj|kaggle|huggingface|lablabai/i.test(social.platform)) {
      category = "Coding"
    } else if (/twitter|x|instagram|linkedin|reddit|quora|discord|telegram/i.test(social.platform)) {
      category = "Social Media"
    } else if (/youtube|twitch/i.test(social.platform)) {
      category = "Streaming"
    } else if (/patreon|buy me a coffee/i.test(social.platform)) {
      category = "Support"
    } else if (/scholar|medium|dev/i.test(social.platform)) {
      category = "Writing"
    }
    
    if (!acc[category]) acc[category] = []
    acc[category].push(social)
    return acc
  }, {} as Record<string, typeof SOCIALS>)
  
  // Get all available categories
  const categories = Object.keys(groupedActiveSocials).sort()
  
  // Filter inactive socials by selected category
  const filteredInactiveSocials = selectedCategory 
    ? inactiveSocials.filter(social => {
        let category = "Other"
        if (/github|gitlab|devpost|stackoverflow|codeforces|leetcode|dmoj|kaggle|huggingface|lablabai/i.test(social.platform)) {
          category = "Coding"
        } else if (/twitter|x|instagram|linkedin|reddit|quora|discord|telegram/i.test(social.platform)) {
          category = "Social Media"
        } else if (/youtube|twitch/i.test(social.platform)) {
          category = "Streaming"
        } else if (/patreon|buy me a coffee/i.test(social.platform)) {
          category = "Support"
        } else if (/scholar|medium|dev/i.test(social.platform)) {
          category = "Writing"
        }
        return category === selectedCategory
      })
    : inactiveSocials
  
  return (
    <div className="not-prose mx-auto">
        <Tabs defaultValue="active" className="space-y-0 mt-4">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="active" className="cursor-pointer">Active ({activeSocials.length})</TabsTrigger>
              <TabsTrigger value="inactive" className="cursor-pointer">Inactive ({inactiveSocials.length})</TabsTrigger>
            </TabsList>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <ListFilter className="h-4 w-4" />
                  {selectedCategory || "Filter by Category"}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  className="cursor-pointer" 
                  onClick={() => {
                    setSelectedCategory(null)
                    toast.success("Showing all categories")
                  }}
                >
                  All Categories
                </DropdownMenuItem>
                {categories.map(category => (
                  <DropdownMenuItem 
                    key={category} 
                    className="cursor-pointer"
                    onClick={() => {
                      setSelectedCategory(category)
                      toast.success(`Filtered by ${category}`)
                    }}
                  >
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <TabsContent value="active" className="space-y-8 mt-6">
            {Object.entries(selectedCategory ? 
              { [selectedCategory]: groupedActiveSocials[selectedCategory] || [] } : 
              groupedActiveSocials
            ).map(([category, socials]) => (
              <div key={category} className="space-y-4">
                <h2 className="text-xl font-semibold">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {socials.map((social) => (
                    <SocialCard key={social.uid} social={social} />
                  ))}
                </div>
              </div>
            ))}
          </TabsContent>
          
          <TabsContent value="inactive" className="space-y-4 mt-6">
            {selectedCategory && (
              <h2 className="text-xl font-semibold mb-4">{selectedCategory}</h2>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredInactiveSocials.map((social) => (
                <SocialCard key={social.uid} social={social} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
    </div>
  )
}

function SocialCard({ social }: { social: (typeof SOCIALS)[0] }) {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText(social.url)    
    toast(
      "Copied to clipboard",
      {
        description: "Copied to clipboard",
        action: {
          label: "Yaps!",
          onClick: () => console.log("dismiss"),
        },
        duration: 2000,
      },
    )
  }

  return (
    <Card className="overflow-hiddenp py-4 gap-4">
      <CardHeader className="pb-0 px-4">
        <CardTitle
            className="flex items-center justify-between">
            <span>{social.platform}</span>
            <YapsTooltip content="Click to copy link">
                <Badge
                    variant={social.status === "active" ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={handleCopyUrl}
                    >
                    {social.status}
                </Badge>
            </YapsTooltip>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4">
        <Button asChild variant="outline" className="w-full justify-between">
            <Link href={social.url.startsWith("http") ? social.url : `https://${social.url}`} target="_blank" rel="noopener noreferrer">
                <span className="truncate">{social.url}</span>
                <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
