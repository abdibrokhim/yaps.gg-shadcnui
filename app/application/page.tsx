'use client'

import React, { useState, useEffect } from 'react'
import { APPLICATIONS } from './data'
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Tabs, 
  TabsContent, 
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BookOpen, ChevronDown, ChevronRight, ListCollapse, CircleDollarSign, User, Youtube, ListFilter, PenBox, Trophy, Copy, RotateCcw, Check } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { toast } from 'sonner'
import { Separator } from '@/components/ui/separator'

export default function ApplicationsPage() {
  const [filteredApplications, setFilteredApplications] = useState(APPLICATIONS)
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({})

  // Get unique years from applications
  const years = ['all', ...new Set(APPLICATIONS.map(app => app.appliedYear || ''))]
  
  // Get unique application types
  const applicationTypes = ['all', ...new Set(
    APPLICATIONS.flatMap(app => app.applicationType || [])
  )]

  // Get unique statuses
  const statuses = ['all', 'accepted', 'rejected', 'in-progress', 'unknown', 'ongoing']

  useEffect(() => {
    let filtered = [...APPLICATIONS]
    
    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(app => app.applicationStatus === selectedStatus)
    }
    
    // Filter by year
    if (selectedYear !== 'all') {
      filtered = filtered.filter(app => app.appliedYear === selectedYear)
    }
    
    // Filter by application type
    if (selectedType !== 'all') {
      filtered = filtered.filter(app => 
        app.applicationType?.includes(selectedType as any)
      )
    }
    
    setFilteredApplications(filtered)
  }, [selectedStatus, selectedYear, selectedType])

  // Get badge variant based on hackathon status
  const getBadgeVariant = (status: string) => {
      switch(status) {
          case 'accepted': return 'destructive'
          case 'rejected': return 'default'
          case 'in-progress': return 'default'
          case 'unknown': return 'outline'
          case 'ongoing': return 'default'
          default: return 'outline'
      }
  }

  const handleCopyUrl = (link: string) => {
      navigator.clipboard.writeText(link)    
      toast.success("Copied to clipboard")
  }

  const toggleCardExpand = (uid: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setExpandedCards(prev => ({
      ...prev,
      [uid]: !prev[uid]
    }))
  }

  const resetFilters = () => {
    setSelectedStatus('all')
    setSelectedYear('all')
    setSelectedType('all')
    toast.success("All filters reset")
  }

  return (
    <div className="mx-auto mt-4 not-prose">
      <div className="flex justify-between items-center mb-8">
        <div className="text-zinc-400 text-sm">
          Showing <span className="font-bold">{filteredApplications.length}</span> application{filteredApplications.length !== 1 ? 's' : ''}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
                <ListFilter className="h-4 w-4" />
                {selectedStatus === 'all' ? 'Filter by status' : selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem 
                className="cursor-pointer" 
                onClick={() => {
                  setSelectedStatus('all')
                  toast.success("Showing all statuses")
                }}
              >
                All Statuses
              </DropdownMenuItem>
              {statuses.filter(status => status !== 'all').map(status => (
                <DropdownMenuItem 
                  key={status} 
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedStatus(status)
                    toast.success(`Filtered by ${status}`)
                  }}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
                <ListFilter className="h-4 w-4" />
                {selectedYear === 'all' ? 'Filter by year' : selectedYear}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem 
                className="cursor-pointer" 
                onClick={() => {
                  setSelectedYear('all')
                  toast.success("Showing all years")
                }}
              >
                All Years
              </DropdownMenuItem>
              {years.filter(year => year !== 'all').map(year => (
                <DropdownMenuItem 
                  key={year} 
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedYear(year)
                    toast.success(`Filtered by ${year}`)
                  }}
                >
                  {year}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
                <ListFilter className="h-4 w-4" />
                {selectedType === 'all' ? 'Filter by type' : selectedType}
                <ChevronRight className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem 
                className="cursor-pointer" 
                onClick={() => {
                  setSelectedType('all')
                  toast.success("Showing all types")
                }}
              >
                All Types
              </DropdownMenuItem>
              {applicationTypes.filter(type => type !== 'all').map(type => (
                <DropdownMenuItem 
                  key={type} 
                  className="cursor-pointer"
                  onClick={() => {
                    setSelectedType(type)
                    toast.success(`Filtered by ${type}`)
                  }}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            variant="outline" 
            size="sm" 
            className="gap-2 cursor-pointer" 
            onClick={resetFilters}
            disabled={selectedStatus === 'all' && selectedYear === 'all' && selectedType === 'all'}
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <Tabs defaultValue="grid" className="w-full">
        <TabsContent value="grid" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredApplications.map((app) => (
              <Card key={app.uid} className="py-4 h-full overflow-hidden transition-colors hover:bg-muted/50">
                <Link href={app.link} className="h-full">
                  <CardHeader className="px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">
                        <span className="">{app.title}</span>
                      </CardTitle>
                      <div className="flex flex-col items-center gap-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button 
                              size="icon" 
                              variant="ghost" 
                              className="rounded-full h-8 w-8 cursor-pointer" 
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ListCollapse className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            {app.socials?.medium && (
                              <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                                e.stopPropagation();
                                if (app.socials?.medium) {
                                  window.open(app.socials.medium, '_blank', 'noopener,noreferrer');
                                }
                              }}>
                                <BookOpen className="mr-2 h-4 w-4" /> Read on Medium
                              </DropdownMenuItem>
                            )}
                            {app.socials?.dev && (
                              <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                                e.stopPropagation();
                                if (app.socials?.dev) {
                                  window.open(app.socials.dev, '_blank', 'noopener,noreferrer');
                                }
                              }}>
                                <PenBox className="mr-2 h-4 w-4" /> Read on Dev
                              </DropdownMenuItem>
                            )}
                            {app.socials?.youtube && (
                              <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                                e.stopPropagation();
                                if (app.socials?.youtube) {
                                  window.open(app.socials.youtube, '_blank', 'noopener,noreferrer');
                                }
                              }}>
                                <Youtube className="mr-2 h-4 w-4" /> Watch on YouTube
                              </DropdownMenuItem>
                            )}
                            {app.socials?.patreon && (
                              <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                                e.stopPropagation();
                                if (app.socials?.patreon) {
                                  window.open(app.socials.patreon, '_blank', 'noopener,noreferrer');
                                }
                              }}>
                                <CircleDollarSign className="mr-2 h-4 w-4" /> View on Patreon
                              </DropdownMenuItem>
                            )}
                            {app.socials?.topmate && (
                              <DropdownMenuItem className="cursor-pointer" onClick={(e) => {
                                e.stopPropagation();
                                if (app.socials?.topmate) {
                                  window.open(app.socials.topmate, '_blank', 'noopener,noreferrer');
                                }
                              }}>
                                <User className="mr-2 h-4 w-4" /> View on Topmate
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                </Link>
                
                <div className="px-4 cursor-pointer" onClick={(e) => toggleCardExpand(app.uid, e)}>
                  <div className="flex flex-col items-center justify-center">
                    <Separator className="flex-grow" />
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedCards[app.uid] ? 'rotate-180' : ''}`} />
                  </div>
                </div>
                
                {expandedCards[app.uid] && (
                  <CardContent className="pt-0 px-4 animate-in fade-in-50 duration-300">
                    <div className="space-y-3 mt-2 text-sm text-muted-foreground">
                      <div>
                        <span className="font-medium text-foreground">Writing Type:</span> {app.writingType?.join(', ') || 'N/A'}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Application Type:</span> {app.applicationType?.join(', ') || 'N/A'}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Year:</span> {app.appliedYear || 'N/A'}
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Status:</span> {app.applicationStatus.charAt(0).toUpperCase() + app.applicationStatus.slice(1)}
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
