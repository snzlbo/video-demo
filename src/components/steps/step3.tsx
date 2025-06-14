

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BarChart3, Download, Share2 } from "lucide-react"

export function Step3() {
  const analysisData = [
    { category: "ポジティブ評価", value: 85, color: "bg-green-500" },
    { category: "コスパ満足度", value: 78, color: "bg-blue-500" },
    { category: "効果実感", value: 92, color: "bg-purple-500" },
    { category: "リピート意向", value: 88, color: "bg-orange-500" },
    { category: "推奨度", value: 90, color: "bg-pink-500" },
    { category: "パッケージ評価", value: 72, color: "bg-cyan-500" },
    { category: "ブランド信頼度", value: 86, color: "bg-indigo-500" },
    { category: "総合満足度", value: 89, color: "bg-emerald-500" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
        <p className="text-muted-foreground">Comprehensive product analysis and insights</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Metrics
            </CardTitle>
            <CardDescription>Detailed breakdown of customer satisfaction metrics</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {analysisData.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{item.category}</span>
                  <span className="text-sm text-muted-foreground">{item.value}%</span>
                </div>
                <Progress value={item.value} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Key Insights</CardTitle>
            <CardDescription>Summary of analysis findings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Excellent Performance</h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                The product shows outstanding results with 92% effectiveness rating and 90% recommendation score.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Strong Customer Loyalty</h4>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                88% of customers express intent to repurchase, indicating high satisfaction levels.
              </p>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg border border-orange-200 dark:border-orange-800">
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Improvement Opportunity</h4>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Packaging design could be enhanced (72% satisfaction) to match product quality.
              </p>
            </div>

            <div className="flex gap-2 pt-4">
              <Button className="flex-1" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">ネガポン分析</h3>
            <p className="text-muted-foreground mb-4">
              Complete analysis finished! Your product shows excellent market performance.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View Detailed Report
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
