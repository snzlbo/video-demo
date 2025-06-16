"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

interface Step1Props {
  selectedCompany: string | null;
  onSelect: (company: string) => void;
}

export function Step1({ selectedCompany, onSelect }: Step1Props) {
  const companies = [
    {
      id: "1",
      name: "Chicco",
      image: "/companies/company1.png",
    },
    {
      id: "2",
      name: "Sebamed",
      image: "/companies/company2.png",
    },
    {
      id: "3",
      name: "Cetaphil",
      image: "/companies/company3.png",
    },
    {
      id: "4",
      name: "Kodomo",
      image: "/companies/company4.png",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">ブランドを選択</h2>
        <p className="text-muted-foreground">分析対象のブランドを選択</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {companies.map((company) => (
          <Card
            key={company.id}
            className={cn(
              "relative cursor-pointer overflow-auto transition-all duration-300 hover:shadow-xl group p-0",
              selectedCompany === company.id
                ? "ring-2 ring-primary shadow-lg shadow-primary/25"
                : "hover:shadow-lg"
            )}
            onClick={() => onSelect(company.id)}
          >
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br dark:from-gray-900 dark:to-black from-gray-100 to-white">
                <div className="aspect-square flex items-center justify-center p-8">
                  <div
                    className={cn("relative transition-all duration-300", {
                      "group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]":
                        selectedCompany !== company.id,
                    })}
                  >
                    <Image
                      height={100}
                      width={100}
                      src={company.image || "/placeholder.svg"}
                      alt={company.name}
                      className="w-full h-full object-contain filter brightness-110"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white">
                  {company.name}
                </h3>
              </div>
              {selectedCompany === company.id && (
                <div className="z-100 absolute top-2 right-2 size-8 bg-primary rounded-full p-2 flex items-center justify-center text-white">
                  <Check />
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
