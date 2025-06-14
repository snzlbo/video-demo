"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { StepIndicator } from "@/components/step-indicator"
import { Step1 } from "@/components/steps/step1"
import { Step2 } from "@/components/steps/step2"
import { Step3 } from "@/components/steps/step3"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 3

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
        return <Step2 />
      case 3:
        return <Step3 />
      default:
        return <Step1 />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

          <div className="mt-8">{renderStep()}</div>

          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button onClick={nextStep} disabled={currentStep === totalSteps} className="flex items-center gap-2">
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
