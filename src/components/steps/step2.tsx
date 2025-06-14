"use client"
import WordCloud from "react-d3-cloud"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Step2Props {
  selectedWord: string | null
  onSelect: (word: string) => void
}

interface WordData {
  text: string
  value: number
}

export function Step2({ selectedWord, onSelect }: Step2Props) {
  const words: WordData[] = [
    { text: "innovation", value: 64 },
    { text: "technology", value: 58 },
    { text: "quality", value: 52 },
    { text: "customer", value: 48 },
    { text: "service", value: 44 },
    { text: "design", value: 40 },
    { text: "performance", value: 36 },
    { text: "reliability", value: 32 },
    { text: "experience", value: 28 },
    { text: "support", value: 24 },
    { text: "features", value: 20 },
    { text: "interface", value: 18 },
    { text: "security", value: 16 },
    { text: "efficiency", value: 14 },
    { text: "satisfaction", value: 12 },
  ]

  const colors = [
    "#1f77b4",
    "#ff7f0e",
    "#2ca02c",
    "#d62728",
    "#9467bd",
    "#8c564b",
    "#e377c2",
    "#7f7f7f",
    "#bcbd22",
    "#17becf",
  ]

  const fontSize = (word: WordData) => Math.log2(word.value) * 8
  const rotate = () => (Math.random() - 0.5) * 60

  const onWordClick = (event: any, word: WordData) => {
    onSelect(word.text)
  }

  const fill = (word: WordData, i: number) => {
    const isSelected = selectedWord === word.text
    return isSelected ? "#22c55e" : colors[i % colors.length]
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Word Cloud Analysis</h2>
        <p className="text-muted-foreground">Click on a word to select it for analysis</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Terms & Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-96 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
            <WordCloud
              data={words}
              width={800}
              height={400}
              font="Impact"
              fontStyle="normal"
              fontWeight="normal"
              fontSize={fontSize}
              spiral="archimedean"
              rotate={rotate}
              padding={5}
              random={Math.random}
              fill={fill}
              onWordClick={onWordClick}
            />
          </div>
        </CardContent>
      </Card>

      {selectedWord && (
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200">
            ✓ Selected word: <strong>"{selectedWord}"</strong> for detailed analysis
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">Total Keywords</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">64</div>
            <div className="text-sm text-muted-foreground">Highest Frequency</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-muted-foreground">Lowest Frequency</div>
          </div>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Word Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedWord ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Selected Word:</span>
                  <span className="text-green-600 font-semibold">{selectedWord}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Frequency:</span>
                  <span>{words.find((w) => w.text === selectedWord)?.value || 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rank:</span>
                  <span>#{words.findIndex((w) => w.text === selectedWord) + 1}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Category:</span>
                  <span className="text-blue-600">Business</span>
                </div>
              </div>
            ) : (
              <p className="text-muted-foreground text-center py-4">
                Click on a word in the cloud to see detailed analysis
              </p>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Words</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {words.slice(0, 5).map((word, index) => (
                <div
                  key={word.text}
                  className={`flex justify-between items-center p-2 rounded cursor-pointer transition-colors ${
                    selectedWord === word.text
                      ? "bg-green-100 dark:bg-green-900"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => onSelect(word.text)}
                >
                  <span className="font-medium">
                    #{index + 1} {word.text}
                  </span>
                  <span className="text-sm text-muted-foreground">{word.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
