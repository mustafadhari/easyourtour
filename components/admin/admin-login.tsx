"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false)
      router.push("/admin/dashboard")
    }, 1500)
  }

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-center mb-6">
          <div className="bg-amber-100 p-3 rounded-full">
            <Lock className="h-6 w-6 text-amber-600" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="admin@wanderlux.com" required />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <a href="#" className="text-xs text-amber-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <Input id="password" type="password" required />
          </div>

          <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
