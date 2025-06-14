"use client"

import { useEffect, useMemo, useRef } from "react"
import * as echarts from "echarts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTheme } from "next-themes"

export function Step4() {
  const { theme } = useTheme()
  const isDark = useMemo(() => theme === "dark", [theme])
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current || !theme) return
    echarts.dispose(chartRef.current)

    const chart = echarts.init(chartRef.current)

    // Data with some negative values
    const data = [
      { name: "肌への適合性・安全性​", value: 90 },
      { name: "保湿力・潤い​", value: 80 },
      { name: "香り", value: 75 },
      { name: "成分・品質", value: 70 },
      { name: "使用感・テクスチャー", value: 85 },
      { name: "パッケージ・容器​", value: 60 },
      { name: "価格・コストパフォーマンス​", value: 50 },
      { name: "真正性・正規品​", value: 30 },
      { name: "配送・サービス", value: 80 },
      { name: "季節・気候への適合性​", value: 10 },
      { name: "肌の色・トーンへの影響​", value: 0 },
      { name: "他製品との比較​", value: -10 },
      { name: "年齢適合性​", value: 60 },
      { name: "衛生面・安全管理​", value: 60 },
      { name: "ブランド・製品情報​", value: 5 },
      { name: "購入の利便性​", value: 75 },
      { name: "環境・倫理面​", value: -50 },
      { name: "使用方法・利便性​", value: 75 },
      { name: "ギフト・贈答用​", value: 20 },
    ]

    const option = {
      title: {
        text: "Comprehensive Performance Analysis",
        left: "center",
        textStyle: {
          color: "#333",
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: (params: any) => {
          const value = params[0].value
          const name = params[0].name
          return `${name}: ${value > 0 ? "+" : ""}${value}%`
        },
      },
      grid: {
        left: "20%",
        right: "10%",
        top: "15%",
        bottom: "5%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}%",
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: isDark ? "#fafafa" : "#f0f0f0",
            type: "dashed",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: isDark ? "#fafafa" : "#666",
          },
        },
      },
      yAxis: {
        type: "category",
        data: data.map((item) => item.name),
        axisLabel: {
          fontSize: 11,
          color: isDark ? "#fafafa" : "#666",
          width: 120,
          overflow: "truncate",
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
          },
        },
      },
      series: [
        {
          type: "bar",
          data: data.map((item) => ({
            value: item.value,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: "#166534" },
                { offset: 0.5, color: "#15803d" },
                { offset: 1, color: "#16a34a" },
              ]),
              borderRadius: item.value >= 0 ? [0, 4, 4, 0] : [4, 0, 0, 4],
            },
          })),
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              { offset: 0, color: "#15803d" },
              { offset: 0.5, color: "#16a34a" },
              { offset: 1, color: "#22c55e" },
            ]),
            borderRadius: [0, 4, 4, 0],
          },
          label: {
            show: true,
            position: "right",
            formatter: "{c}%",
            color: "#22c55e",
            fontWeight: "bold",
            fontSize: 12,
          },
          barWidth: "60%",
        },
      ],
      animationDuration: 2000,
      animationEasing: "cubicOut",
    }

    chart.setOption(option)

    const handleResize = () => {
      chart.resize()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      chart.dispose()
    }
  }, [isDark, theme])

  // Calculate summary metrics
  const positiveCount = 14
  const negativeCount = 5
  const averageScore = 65.8
  const highestScore = 95
  const lowestScore = -22

  const summaryMetrics = [
    { label: "Positive Metrics", value: positiveCount, change: "74%", color: "text-blue-600" },
    { label: "Negative Metrics", value: negativeCount, change: "26%", color: "text-red-600" },
    { label: "Average Score", value: `${averageScore}%`, change: "+3.2%", color: "text-purple-600" },
    { label: "Best Performance", value: `${highestScore}%`, change: "Innovation", color: "text-green-600" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
        <p className="text-white">Comprehensive performance metrics across 19 key indicators</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={chartRef} className="w-full h-[600px]" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {summaryMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
              <div className={`text-sm font-medium ${metric.color}`}>{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
