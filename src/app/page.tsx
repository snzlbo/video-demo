"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { StepIndicator } from "@/components/step-indicator";
import { Step1 } from "@/components/steps/step1";
import { Step2 } from "@/components/steps/step2";
import { Step3 } from "@/components/steps/step3";
import { Step4 } from "@/components/steps/step4";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selections, setSelections] = useState({
    step1: null as string | null,
    step2: null as string | null,
    step3: null as string | null,
  });
  const totalSteps = 4;

  const nextStep = async () => {
    if (currentStep < totalSteps) {
      setIsLoading(true);
      // 3 second loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentStep(currentStep + 1);
      setIsLoading(false);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateSelection = (step: keyof typeof selections, value: string) => {
    setSelections((prev) => ({
      ...prev,
      [step]: value,
    }));
  };

  const isNextDisabled = () => {
    if (currentStep === 1) return !selections.step1;
    if (currentStep === 2) return !selections.step2;
    if (currentStep === 3) return !selections.step3;
    return false;
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1
            selectedCompany={selections.step1}
            onSelect={(value) => updateSelection("step1", value)}
          />
        );
      case 2:
        return (
          <Step2
            selectedWord={selections.step2}
            onSelect={(value) => updateSelection("step2", value)}
          />
        );
      case 3:
        return (
          <Step3
            selectedVideo={selections.step3}
            onSelect={(value) => updateSelection("step3", value)}
          />
        );
      case 4:
        return <Step4 />;
      default:
        return (
          <Step1
            selectedCompany={selections.step1}
            onSelect={(value) => updateSelection("step1", value)}
          />
        );
    }
  };

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
              前へ
            </Button>

            <Button
              onClick={nextStep}
              disabled={isNextDisabled() || isLoading}
              className="flex items-center gap-2"
            >
              {isLoading ? (
                <Loader2 className="w-12 h-12 animate-spin mx-auto " />
              ) : null}
              次へ
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
