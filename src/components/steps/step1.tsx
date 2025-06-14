import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Step1() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Product Information</h2>
        <p className="text-muted-foreground">Enter your product details for analysis</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800">
          <CardHeader>
            <CardTitle className="text-green-800 dark:text-green-200">乾燥肌対応</CardTitle>
            <CardDescription>Dry Skin Care</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                吸収性
              </Badge>
              <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                保湿効果
              </Badge>
              <Badge variant="secondary" className="bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200">
                安全性
              </Badge>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300">
              高品質な成分で作られた、乾燥肌に特化したスキンケア製品の分析を行います。
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Product Features</CardTitle>
            <CardDescription>Key characteristics to analyze</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium">Absorption</div>
                <div className="text-sm text-muted-foreground">Fast-acting formula</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium">Safety</div>
                <div className="text-sm text-muted-foreground">Dermatologist tested</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium">Natural</div>
                <div className="text-sm text-muted-foreground">Organic ingredients</div>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <div className="font-medium">Brand</div>
                <div className="text-sm text-muted-foreground">Premium quality</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
