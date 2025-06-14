"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface Step1Props {
  selectedCompany: string | null
  onSelect: (company: string) => void
}

export function Step1({ selectedCompany, onSelect }: Step1Props) {
  const companies = [
    {
      id: "apple",
      name: "Apple",
      logo: "🍎",
      description: "Technology Innovation",
    },
    {
      id: "google",
      name: "Google",
      logo: "🔍",
      description: "Search & AI Solutions",
    },
    {
      id: "microsoft",
      name: "Microsoft",
      logo: "🪟",
      description: "Cloud & Productivity",
    },
    {
      id: "amazon",
      name: "Amazon",
      logo: "📦",
      description: "E-commerce & AWS",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Select Company</h2>
        <p className="text-muted-foreground">Choose one company to analyze</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Card
            key={company.id}
            className={cn(
              "cursor-pointer transition-all duration-200 hover:shadow-lg",
              selectedCompany === company.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50",
            )}
            onClick={() => onSelect(company.id)}
          >
            <CardContent className="p-6 text-center space-y-4">
              <div className="text-6xl">{company.logo}</div>
              <div>
                <h3 className="text-xl font-semibold">{company.name}</h3>
                <p className="text-sm text-muted-foreground">{company.description}</p>
              </div>
              {selectedCompany === company.id && (
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {selectedCompany && (
        <div className="text-center p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
          <p className="text-green-800 dark:text-green-200">
            ✓ {companies.find((c) => c.id === selectedCompany)?.name} selected for analysis
          </p>
        </div>
      )}
    </div>
  )
}
