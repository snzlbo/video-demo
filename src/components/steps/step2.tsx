"use client";
import WordCloud from "react-d3-cloud";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memo, useCallback, useEffect, useMemo, useRef } from "react";
import { useTheme } from "next-themes";

interface Step2Props {
  selectedWord: string | null;
  onSelect: (word: string) => void;
}

const MemoizedWordCloud = memo(WordCloud);

interface WordData {
  text: string;
  value: number;
}

export function Step2({ onSelect, selectedWord }: Step2Props) {
  const { theme } = useTheme();
  const wordCloudRef = useRef<HTMLDivElement>(null);

  const words: WordData[] = useMemo(
    () => [
      { text: "肌への適合性・安全性", value: 12 },
      { text: "保湿力・潤い", value: 34 },
      { text: "香り", value: 20 },
      { text: "成分・品質", value: 4 },
      { text: "使用感・テクスチャー", value: 50 },
      { text: "パッケージ・容器", value: 6 },
      { text: "価格・コストパフォーマンス", value: 7 },
      { text: "真正性・正規品", value: 8 },
      { text: "配送・サービス", value: 9 },
      { text: "季節・気候への適合性", value: 10 },
      { text: "肌の色・トーンへの影響", value: 4 },
      { text: "他製品との比較", value: 12 },
      { text: "年齢適合性", value: 13 },
      { text: "衛生面・安全管理", value: 6 },
      { text: "ブランド・製品情報", value: 15 },
      { text: "購入の利便性", value: 16 },
      { text: "環境・倫理面", value: 8 },
      { text: "使用方法・利便性", value: 18 },
      { text: "ギフト・贈答用", value: 22 },
    ],
    []
  );
  const colors = useMemo(
    () => [
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
    ],
    []
  );

  const fontSize = useCallback(
    (word: WordData) => Math.log2(word.value) * 8,
    []
  );

  // const rotate = useCallback((word: WordData) => {
  //   let hash = 0;
  //   for (let i = 0; i < word.text.length; i++) {
  //     const char = word.text.charCodeAt(i);
  //     hash = (hash << 5) - hash + char;
  //     hash = hash & hash;
  //   }
  //   return (hash % 60) - 30;
  // }, []);

  const stableRandom = useCallback(() => 0.5, []);

  const fill = useCallback(
    (word: WordData, i: number) => {
      const isSelected = selectedWord === word.text;
      return isSelected ? "#22c55e" : colors[i % colors.length];
    },
    [colors, selectedWord]
  );

  const onWordClick = useCallback(
    (event: React.MouseEvent<SVGTextElement>, word: WordData) => {
      onSelect(word.text);
    },
    [onSelect]
  );

  const onWordMouseEnter = useCallback(
    (event: React.MouseEvent<SVGTextElement>) => {
      const target = event.target as SVGTextElement;

      target.style.filter = "brightness(1.3)";
      target.style.cursor = "pointer";
      target.style.transition = "all 0.2s ease-in-out";
    },
    []
  );

  const onWordMouseLeave = useCallback(
    (event: React.MouseEvent<SVGTextElement>) => {
      const target = event.target as SVGTextElement;
      target.style.filter = "brightness(1)";
    },
    []
  );

  useEffect(() => {
    if (selectedWord && wordCloudRef.current) {
      const timer = setTimeout(() => {
        const allTexts = wordCloudRef.current?.querySelectorAll("text");
        allTexts?.forEach((text) => {
          text.style.stroke = "none";
          text.style.strokeWidth = "0";

          if (text.textContent === selectedWord) {
            text.style.stroke = theme === "dark" ? "white" : "black";
            text.style.strokeWidth = "4px";
            text.style.padding = "5px";
            text.style.border = `1px solid ${
              theme === "dark" ? "white" : "black"
            }`;
            text.style.paintOrder = "stroke fill";
          }
        });
      }, 10);

      return () => clearTimeout(timer);
    }
  }, [selectedWord, theme]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">ワードクラウド分析</h2>
        <p className="text-muted-foreground">分析対象のキーワードを選択</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Terms & Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          {/* <div className="h-96 w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg"> */}
          <div ref={wordCloudRef} style={{ cursor: "default" }}>
            <MemoizedWordCloud
              data={words}
              width={800}
              height={400}
              font="Impact"
              fontStyle="normal"
              fontWeight="normal"
              fontSize={fontSize}
              spiral="archimedean"
              rotate={0}
              padding={5}
              random={stableRandom}
              fill={fill}
              onWordClick={onWordClick}
              onWordMouseOver={onWordMouseEnter}
              onWordMouseOut={onWordMouseLeave}
            />
          </div>
        </CardContent>
      </Card>

      {selectedWord && (
        <div className="text-center p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-blue-800 dark:text-blue-200">
            ✓ 選択中のキーワード： <strong>{selectedWord}</strong>
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">15</div>
            <div className="text-sm text-muted-foreground">キーワード合計</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">640</div>
            <div className="text-sm text-muted-foreground">最高出現頻度</div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-muted-foreground">最低出現頻度</div>
          </div>
        </Card>
      </div>

      {/* <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Word Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedWord ? (
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Selected Word:</span>
                  <span className="text-green-600 font-semibold">
                    {selectedWord}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Frequency:</span>
                  <span>
                    {words.find((w) => w.text === selectedWord)?.value || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Rank:</span>
                  <span>
                    #{words.findIndex((w) => w.text === selectedWord) + 1}
                  </span>
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
                  <span className="text-sm text-muted-foreground">
                    {word.value}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
