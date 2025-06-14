"use client"

import { useEffect, useRef } from "react"
import * as echarts from "echarts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Step4() {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!chartRef.current) return

    const chart = echarts.init(chartRef.current)

    const option = {
      title: {
        text: "Performance Analysis",
        left: "center",
        textStyle: {
          color: "#333",
          fontSize: 18,
        },
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["User Satisfaction", "Performance Score", "Market Share"],
        bottom: 10,
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "15%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}%",
        },
      },
      series: [
        {
          name: "User Satisfaction",
          type: "line",
          data: [65, 68, 72, 75, 78, 82, 85, 88, 90, 92, 94, 96],
          itemStyle: {
            color: "#22c55e",
          },
          lineStyle: {
            color: "#22c55e",
            width: 3,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(34, 197, 94, 0.3)" },
              { offset: 1, color: "rgba(34, 197, 94, 0.1)" },
            ]),
          },
          smooth: true,
        },
        {
          name: "Performance Score",
          type: "line",
          data: [70, 72, 75, 78, 80, 83, 86, 89, 91, 93, 95, 97],
          itemStyle: {
            color: "#16a34a",
          },
          lineStyle: {
            color: "#16a34a",
            width: 3,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(22, 163, 74, 0.3)" },
              { offset: 1, color: "rgba(22, 163, 74, 0.1)" },
            ]),
          },
          smooth: true,
        },
        {
          name: "Market Share",
          type: "line",
          data: [45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82],
          itemStyle: {
            color: "#15803d",
          },
          lineStyle: {
            color: "#15803d",
            width: 3,
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(21, 128, 61, 0.3)" },
              { offset: 1, color: "rgba(21, 128, 61, 0.1)" },
            ]),
          },
          smooth: true,
        },
      ],
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
  }, [])

  const metrics = [
    { label: "Overall Score", value: "94.5%", change: "+2.3%", color: "text-green-600" },
    { label: "User Retention", value: "87.2%", change: "+5.1%", color: "text-green-600" },
    { label: "Performance Index", value: "96.8%", change: "+1.8%", color: "text-green-600" },
    { label: "Market Position", value: "#2", change: "+1", color: "text-green-600" },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Analysis Results</h2>
        <p className="text-muted-foreground">Comprehensive performance metrics and trends</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Trends</CardTitle>
        </CardHeader>
        <CardContent>
          <div ref={chartRef} className="w-full h-96" />
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
              <div className={`text-sm font-medium ${metric.color}`}>{metric.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950 border-green-200 dark:border-green-800">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">Analysis Complete! 🎉</h3>
            <p className="text-green-700 dark:text-green-300 mb-4">
              Your comprehensive analysis shows excellent performance across all metrics with consistent upward trends.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="text-lg font-bold text-green-600">96.8%</div>
                <div className="text-sm text-muted-foreground">Final Score</div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <div className="text-lg font-bold text-green-600">+12.5%</div>
                <div className="text-sm text-muted-foreground">Growth</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
