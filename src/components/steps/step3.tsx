"use client"

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { cn } from "@/lib/utils"
import { User } from "lucide-react"
import { Button } from "../ui/button"

interface Step3Props {
  selectedVideo: string | null
  onSelect: (videoId: string) => void
}

export function Step3({ selectedVideo, onSelect }: Step3Props) {
  const videoReviews = [
    {
      id: "video1",
      author: "Tech Reviewer Pro",
      rating: 4.8,
      description: "🧴🌸 使いやすくてすぐに吸収される！赤ちゃんの肌にとてもやさしく、乾燥しやすい冬でもしっとりと保湿してくれるので助かっています😊✨。優しい香りが一日中残って、パッケージもかわいくて持ち運びに便利🎒。乾燥肌や敏感肌の赤ちゃんにもぴったりで、もう手放せません！💖",
    },
    {
      id: "video2",
      author: "Sarah Johnson",
      rating: 4.6,
      description: "✨レシピを選択🥳 :ピンク1本 乾燥肌のうちの子にピッタリの優しいローション。肌がもちもちで、べたつかずサラっと伸びるのにしっかり潤いキープ！☺️💦 香りも強すぎず癒されます🌱。お風呂上がりやおむつ替えの後の乾燥が全く気にならなくなりました！赤ちゃんの肌トラブルに悩む方に超おすすめです✨🙆",
    },
    {
      id: "video3",
      author: "Tech Analysis Hub",
      rating: 4.9,
      description: "🌿 成分:敏感肌に適した優しい処方 🛡️ 安全性:赤ちゃんの乾燥しやすい肌をやさしく包み込みます 😊 乾燥がひどい時期でもふんわりしっとり！ 🥰 繊細で強すぎない香りにも癒されます。小さなお子様の肌に安心して使えて、これで乾燥知らず✨ 持ち運びもラクチンでママ友にも人気です！おすすめします！",
    },
    {
      id: "video4",
      author: "Tech Analysis Hub",
      rating: 4.9,
      description: "レシピを選択🥳 :ブルー+ピンク(各1個) 乾燥肌&敏感肌のうちの子でも全くトラブルなし！💓 しっとりと保湿してくれるテクスチャーで、花粉や冷房でゴワゴワしやすい季節も安心。ママの手にも馴染むし、香りも優しくて家族みんなで使えます😊👐これ一本でおむつかぶれも乾燥も防げるので最高です！",
    },
    {
      id: "video5",
      author: "Unbox Everything",
      rating: 4.5,
      description: "✨一日中続く素敵な香り&しっとり保湿✨ 赤ちゃんの乾燥しがちな肌も、朝から夜まで潤い続きます！使いやすくてすぐに吸収され、ベタつきなし👼毎日のお手入れに欠かせません！敏感肌の子どもでも赤くならず、しっとりツルツルに。香りも控えめで親子一緒に癒やされています💖オススメ度MAX‼️",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Video Reviews</h2>
        <p className="text-muted-foreground">Select a video review to analyze</p>
        <div className="flex items-center justify-center space-x-4 mt-4">
           <Button
            variant={selectedVideo === "positive" ? "default" : "outline"}
            onClick={() => onSelect("positive")}
            type="button"
          >
            Positive
          </Button>
          <Button
            variant={selectedVideo === "negative" ? "default" : "outline"}
            onClick={() => onSelect("negative")}
            type="button"
          >
            Negative
          </Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {videoReviews.map((video) => (
          <Card
            key={video.id}
            className={cn(
              "relative transition-all duration-200  py-4",
              // selectedVideo === video.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50",
            )}
            // onClick={() => onSelect(video.id)}
          >
            <CardContent className="space-y-3">
              <div>
                <CardTitle className="text-lg line-clamp-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{video.author}</span>
                  <div className="flex items-center gap-1">
                    <span className="text-sm">⭐</span>
                    <span className="text-sm font-medium">{video.rating}</span>
                  </div>
                </CardTitle>
                <div className="flex items-center gap-2 mt-2">
                  
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>

              <div className="flex items-center justify-between absolute top-4 right-4">
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
    </div>
  )
}
