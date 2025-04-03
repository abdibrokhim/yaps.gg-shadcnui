'use client'

import { useState, useEffect } from 'react'
import { EXPERIENCES } from './data'
import { 
  X, 
  ChevronRight, 
  Calendar, 
  ExternalLink, 
  ListFilter,
  Info
} from 'lucide-react'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/motion-primitives/spotlight'
import { toast } from 'sonner'
import { YapsTooltip } from '@/components/yaps-tooltip'

// Type for grid cells
type GridCell = {
  date: Date
  experiences: typeof EXPERIENCES
  isActive: boolean
  matchesFilter: boolean
}

export default function ExperiencePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [grid, setGrid] = useState<GridCell[][]>([])
  const [years, setYears] = useState<number[]>([])
  const [months] = useState(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])
  const [selectedCell, setSelectedCell] = useState<GridCell | null>(null)
  const [isCardOpen, setIsCardOpen] = useState(false)
  
  // Extract unique job categories
  const extractCategories = () => {
    const categories = new Set<string>()
    
    EXPERIENCES.forEach(exp => {
      // Extract category from position title
      const positionWords = exp.metadata.position.toLowerCase().split(' ')
      
      if (positionWords.includes('founder') || positionWords.includes('ceo') || positionWords.includes('cto')) {
        categories.add('Leadership')
      }
      
      if (positionWords.includes('engineer') || positionWords.includes('developer')) {
        categories.add('Engineering')
      }
      
      if (positionWords.includes('mentor') || positionWords.includes('facilitator')) {
        categories.add('Mentorship')
      }
      
      if (positionWords.includes('researcher') || positionWords.includes('research')) {
        categories.add('Research')
      }
      
      if (positionWords.includes('intern')) {
        categories.add('Internship')
      }
      
      if (positionWords.includes('content') || positionWords.includes('creator')) {
        categories.add('Content Creation')
      }
    })
    
    return Array.from(categories).sort()
  }
  
  const categories = extractCategories()
  
  // Check if experience matches selected category
  const matchesCategory = (exp: (typeof EXPERIENCES)[0], category: string | null) => {
    if (!category) return true
    
    const positionLower = exp.metadata.position.toLowerCase()
    
    switch(category) {
      case 'Leadership':
        return positionLower.includes('founder') || positionLower.includes('ceo') || positionLower.includes('cto')
      case 'Engineering':
        return positionLower.includes('engineer') || positionLower.includes('developer')
      case 'Mentorship':
        return positionLower.includes('mentor') || positionLower.includes('facilitator')
      case 'Research':
        return positionLower.includes('researcher') || positionLower.includes('research')
      case 'Internship':
        return positionLower.includes('intern')
      case 'Content Creation':
        return positionLower.includes('content') || positionLower.includes('creator')
      default:
        return true
    }
  }
  
  // Filter experiences by selected category
  const filteredExperiences = selectedCategory 
    ? EXPERIENCES.filter(exp => matchesCategory(exp, selectedCategory))
    : EXPERIENCES
    
  // Get color intensity based on number of experiences and filter match
  const getCellColor = (cell: GridCell) => {
    const { experiences, matchesFilter } = cell
    const count = experiences.length
    
    // If cell has experiences matching the filter, highlight it with pink
    if (count > 0 && matchesFilter && selectedCategory) {
      if (count === 1) return 'bg-pink-500/30 hover:bg-pink-500/40 border-pink-500/50 shadow-sm shadow-pink-500/20'
      if (count === 2) return 'bg-pink-500/40 hover:bg-pink-500/50 border-pink-500/60 shadow-sm shadow-pink-500/30'
      if (count === 3) return 'bg-pink-500/50 hover:bg-pink-500/60 border-pink-500/70 shadow-sm shadow-pink-500/40'
      return 'bg-pink-500/60 hover:bg-pink-500/70 border-pink-500/80 shadow-md shadow-pink-500/50'
    }
    
    // Regular color intensity based on number of experiences
    if (count === 0) return 'bg-card hover:bg-muted/40 border-muted'
    if (count === 1) return 'bg-primary/20 hover:bg-primary/30 border-primary/40'
    if (count === 2) return 'bg-primary/40 hover:bg-primary/50 border-primary/60'
    if (count === 3) return 'bg-primary/60 hover:bg-primary/70 border-primary/80'
    return 'bg-primary hover:bg-primary/90 border-primary text-primary-foreground'
  }
  
  // Generate the year/month grid
  useEffect(() => {
    // Find min and max dates
    let minDate = new Date()
    let maxDate = new Date('2020-01-01')
    
    EXPERIENCES.forEach(exp => {
      const startDate = new Date(exp.metadata.startDate)
      const endDate = exp.metadata.endDate === 'Present' 
        ? new Date() 
        : new Date(exp.metadata.endDate || new Date())
      
      if (startDate < minDate) minDate = startDate
      if (endDate > maxDate) maxDate = endDate
    })
    
    // Round to years
    const startYear = minDate.getFullYear()
    const endYear = maxDate.getFullYear()
    const yearRange = []
    for (let y = startYear; y <= endYear; y++) {
      yearRange.push(y)
    }
    setYears(yearRange)
    
    // Create grid
    const newGrid: GridCell[][] = []
    
    // For each year in our range
    for (let year of yearRange) {
      const yearRow: GridCell[] = []
      
      // For each month in the year
      for (let month = 0; month < 12; month++) {
        // Create date for this cell (1st day of month)
        const cellDate = new Date(year, month, 1)
        
        // Find all experiences active during this month
        const activeExperiences = EXPERIENCES.filter(exp => {
          const startDate = new Date(exp.metadata.startDate)
          const endDate = exp.metadata.endDate === 'Present' 
            ? new Date() 
            : new Date(exp.metadata.endDate || new Date())
          
          // Check if cell month falls within experience date range
          return (
            (startDate <= cellDate) && 
            (endDate >= new Date(year, month + 1, 0)) // Last day of month
          )
        })

        // Check if any experience in this cell matches the selected filter
        const hasMatchingExperience = activeExperiences.some(exp => 
          matchesCategory(exp, selectedCategory)
        )
        
        yearRow.push({
          date: cellDate,
          experiences: activeExperiences,
          isActive: activeExperiences.length > 0,
          matchesFilter: hasMatchingExperience
        })
      }
      
      newGrid.push(yearRow)
    }
    
    setGrid(newGrid)
  }, [EXPERIENCES, selectedCategory]) // Rebuild grid when filter changes
  
  // Handle cell click
  const handleCellClick = (cell: GridCell) => {
    if (cell.experiences.length === 0) return
    
    setSelectedCell(cell)
    setIsCardOpen(true)
  }
  
  // Format date for display
  const formatDate = (date: Date) => {
    return `${months[date.getMonth()]} ${date.getFullYear()}`
  }
  
  return (
    <div className="space-y-8 w-full flex flex-col non-prose">
      {/* Header section with stats */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <ListFilter className="h-4 w-4" />
                {selectedCategory || "Filter by Role"}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem 
                className="cursor-pointer" 
                onClick={() => {
                  setSelectedCategory(null)
                  toast.success("Showing all experiences")
                }}
              >
                All Experiences
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
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-card border"></div>
            <span>No activity</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary/20 border border-primary/40"></div>
            <span>1 role</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary/40 border border-primary/60"></div>
            <span>2 roles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary/60 border border-primary/80"></div>
            <span>3 roles</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-primary border border-primary"></div>
            <span>4+ roles</span>
          </div>
          {selectedCategory && (
            <div className="flex items-center gap-1.5 ml-2">
              <div className="w-3 h-3 rounded-sm bg-pink-500/40 border border-pink-500/60 shadow-sm shadow-pink-500/30"></div>
              <span>Matches filter</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Month Grid */}
      <div className="w-full overflow-x-auto">
        <div className="grid grid-rows-[auto_repeat(5,1fr)] gap-1 min-w-[800px]">
          {/* Month headers */}
          <div className="grid grid-cols-[auto_repeat(12,1fr)] gap-1 mb-2">
            <div className=""></div>
            {months.map(month => (
              <div key={month} className="text-center text-xs font-medium">
                {month}
              </div>
            ))}
          </div>
          
          {/* Year rows */}
          {grid.map((yearRow, yearIndex) => (
            <div key={yearIndex} className="grid grid-cols-[auto_repeat(12,1fr)] gap-1">
              <div className="flex items-center justify-end pr-2 text-xs font-medium">
                {years[yearIndex]}
              </div>
              
              {yearRow.map((cell, monthIndex) => (
                <YapsTooltip 
                  key={`${yearIndex}-${monthIndex}`} 
                  content={
                    <div className="text-xs">
                      <div className="font-medium">{formatDate(cell.date)}</div>
                      {cell.experiences.length > 0 ? (
                        <ul className="mt-1 space-y-1">
                          {cell.experiences.map((exp, i) => (
                            <li key={i} className={matchesCategory(exp, selectedCategory) && selectedCategory ? "text-pink-400" : ""}>
                              <span className="font-medium">{exp.title}</span>
                              <span className="text-muted"> - {exp.metadata.position}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-muted-foreground">No work experience</div>
                      )}
                    </div>
                  }
                >
                  <div 
                    className={`w-full aspect-square rounded-sm cursor-pointer transition-all duration-300 border ${getCellColor(cell)}`}
                    onClick={() => handleCellClick(cell)}
                  ></div>
                </YapsTooltip>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Selected Cell Card */}
      {isCardOpen && selectedCell && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full max-h-[80vh] overflow-auto bg-card p-6 rounded-xl shadow-lg border">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-4 top-4"
              onClick={() => setIsCardOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                {formatDate(selectedCell.date)}
              </h2>
              <p className="text-muted-foreground">
                {selectedCell.experiences.length} {selectedCell.experiences.length === 1 ? 'role' : 'roles'} during this month
              </p>
            </div>
            
            <div className="space-y-6">
              {selectedCell.experiences.map((experience) => (
                <div 
                  key={experience.uid} 
                  className={`relative rounded-xl overflow-hidden p-[1px] ${
                    matchesCategory(experience, selectedCategory) && selectedCategory 
                      ? "ring-2 ring-pink-500/50 ring-offset-1 ring-offset-background" 
                      : ""
                  }`}
                >
                  <Spotlight 
                    className={
                      matchesCategory(experience, selectedCategory) && selectedCategory
                        ? "from-pink-500/30 via-pink-500/20 to-transparent blur-2xl"
                        : "from-primary/20 via-primary/10 to-transparent blur-2xl"
                    }
                    size={200}
                  />
                  <Card className="w-full">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle>{experience.title}</CardTitle>
                        <Badge 
                          variant={matchesCategory(experience, selectedCategory) && selectedCategory ? "default" : "outline"}
                          className={matchesCategory(experience, selectedCategory) && selectedCategory ? "bg-pink-500 hover:bg-pink-500/90 text-white" : ""}
                        >
                          {experience.metadata.endDate ? 
                            `${experience.metadata.startDate} - ${experience.metadata.endDate}` : 
                            experience.metadata.startDate
                          }
                        </Badge>
                      </div>
                      <CardDescription>
                        {experience.metadata.position}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {experience.description && (
                          <p className="text-sm text-muted-foreground">
                            {experience.description}
                          </p>
                        )}
                        
                        <div>
                          <h4 className="text-sm font-medium mb-2">Responsibilities:</h4>
                          <ul className="space-y-2 text-sm list-disc pl-5">
                            {experience.responsibilities.map((responsibility, index) => (
                              <li key={index}>
                                {responsibility.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      {experience.url ? (
                        <Button 
                          variant="outline" 
                          asChild 
                          className={`w-full ${
                            matchesCategory(experience, selectedCategory) && selectedCategory 
                              ? "border-pink-500/50 hover:bg-pink-500/10" 
                              : ""
                          }`}
                        >
                          <a href={experience.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between">
                            <span>Visit Website</span>
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      ) : experience.link ? (
                        <Button 
                          variant="outline" 
                          asChild 
                          className={`w-full ${
                            matchesCategory(experience, selectedCategory) && selectedCategory 
                              ? "border-pink-500/50 hover:bg-pink-500/10" 
                              : ""
                          }`}
                        >
                          <Link href={experience.link} className="flex items-center justify-between">
                            <span>Learn More</span>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      ) : null}
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Footer info */}
      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
        <Info className="h-4 w-4" />
        <span>Click on any colored cell to see the detailed experience for that month</span>
      </div>
    </div>
  )
}
