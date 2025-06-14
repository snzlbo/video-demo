
"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"

export function Header() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => (window.location.href = '/')}
          >
            <Image
              height={32}
              width={32}
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-8"
            ></Image>
            <span className="font-bold text-xl hidden sm:inline-block">
              Video Product Analysis
            </span>
          </div>
          <div className="flex items-center space-x-4">

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="w-9 h-9">
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
