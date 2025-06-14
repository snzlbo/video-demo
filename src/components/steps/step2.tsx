import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export function Step2() {
  const reviews = [
    {
      id: 1,
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-01-15",
      title: "Great product!",
      content:
        "I've been using this product for 3 months and I can see a significant improvement in my skin. The absorption is excellent and it doesn't leave any greasy residue. Highly recommend!",
      helpful: 12,
      verified: true,
    },
    {
      id: 2,
      author: "Mike Chen",
      rating: 4,
      date: "2024-01-10",
      title: "Good value for money",
      content:
        "The product works well for dry skin. I noticed improvements after 2 weeks of use. The only downside is the packaging could be better, but the product itself is great.",
      helpful: 8,
      verified: true,
    },
    {
      id: 3,
      author: "Emma Wilson",
      rating: 5,
      date: "2024-01-08",
      title: "Amazing Product!",
      content:
        "This has become my go-to skincare product. The natural ingredients make it perfect for sensitive skin, and the results are visible within days. Will definitely repurchase!",
      helpful: 15,
      verified: true,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Top Review Comments</h2>
        <p className="text-muted-foreground">Customer feedback and ratings analysis</p>
      </div>

      <div className="grid gap-4">
        {reviews.map((review) => (
          <Card key={review.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback>
                      {review.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
              </div>
              <CardTitle className="text-lg">{review.title}</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground mb-3">{review.content}</p>
              <div className="flex items-center space-x-4 text-sm">
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <button className="flex items-center space-x-1 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>Reply</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
