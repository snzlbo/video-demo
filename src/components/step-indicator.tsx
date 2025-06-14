import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface StepIndicatorProps {
  currentStep: number
  totalSteps: number
}

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center space-x-4">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1
        const isCompleted = stepNumber < currentStep
        const isCurrent = stepNumber === currentStep

        return (
          <div key={stepNumber} className="flex items-center">
            <div
              className={cn("flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors", {
                "bg-primary border-primary text-primary-foreground": isCompleted,
                "border-primary text-primary": isCurrent,
                "border-muted-foreground text-muted-foreground": !isCompleted && !isCurrent,
              })}
            >
              {isCompleted ? <Check className="w-5 h-5" /> : <span className="text-sm font-medium">{stepNumber}</span>}
            </div>

            {stepNumber < totalSteps && (
              <div
                className={cn("w-16 h-0.5 mx-2 transition-colors", {
                  "bg-primary": isCompleted,
                  "bg-muted-foreground": !isCompleted,
                })}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}
