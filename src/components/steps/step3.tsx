"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface Step3Props {
  selectedVideo: string | null
  onSelect: (videoId: string) => void
}

export function Step3({ selectedVideo, onSelect }: Step3Props) {
  const videoReviews = [
    {
      id: "video1",
      title: "Product Deep Dive Review",
      author: "Tech Reviewer Pro",
      duration: "8:45",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: "125K",
      rating: 4.8,
      description: "Comprehensive analysis of features, performance, and user experience.",
    },
    {
      id: "video2",
      title: "Real User Experience",
      author: "Sarah Johnson",
      duration: "5:32",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: "89K",
      rating: 4.6,
      description: "Honest review after 3 months of daily usage and testing.",
    },
    {
      id: "video3",
      title: "Comparison & Benchmarks",
      author: "Tech Analysis Hub",
      duration: "12:18",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: "203K",
      rating: 4.9,
      description: "Side-by-side comparison with competitors and performance tests.",
    },
    {
      id: "video4",
      title: "Unboxing & First Impressions",
      author: "Unbox Everything",
      duration: "6:21",
      thumbnail: "/placeholder.svg?height=200&width=300",
      views: "156K",
      rating: 4.5,
      description: "First look at packaging, build quality, and initial setup process.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Video Reviews</h2>
        <p className="text-muted-foreground">Select a video review to analyze</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {videoReviews.map((video) => (
          <Card
            key={video.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg",
              selectedVideo === video.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50",
            )}
            onClick={() => onSelect(video.id)}
          >
            <CardHeader className="pb-3">
              <div className="relative">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <Badge className="absolute bottom-2 right-2 bg-black/80 text-white">
                  <Clock className="w-3 h-3 mr-1" />
                  {video.duration}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <CardTitle className="text-lg line-clamp-2">{video.title}</CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{video.author}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium">{video.views} views</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">⭐</span>
                    <span className="text-sm font-medium">{video.rating}</span>
                  </div>
                </div>
                {selectedVideo === video.id && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedVideo && (
        <div className="text-center p-4 bg-purple-50 dark:bg-purple-950 rounded-lg border border-purple-200 dark:border-purple-800">
          <p className="text-purple-800 dark:text-purple-200">
            ✓ Selected: <strong>{videoReviews.find((v) => v.id === selectedVideo)?.title}</strong> for analysis
          </p>
        </div>
      )}
    </div>
  )
}
