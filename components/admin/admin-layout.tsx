"use client"

import type React from "react"

import { useState } from "react"
import AdminSidebar from "@/components/admin/admin-sidebar"
import { Button } from "@/components/ui/button"
import { Menu, Bell, Search } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-muted/30">
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      <div className="flex-1 flex flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <AdminSidebar isMobile onClose={() => setIsSidebarOpen(false)} />
            </SheetContent>
          </Sheet>

          <div className="flex-1 flex items-center justify-between">
            <div className="relative w-full max-w-md hidden md:flex">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="pl-8 w-full max-w-xs bg-muted/50" />
            </div>

            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-80">
                  <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <div className="max-h-80 overflow-y-auto">
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">New booking request</p>
                        <p className="text-xs text-muted-foreground">Sarah Johnson booked Bali Private Retreat</p>
                        <p className="text-xs text-muted-foreground">10 minutes ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Payment received</p>
                        <p className="text-xs text-muted-foreground">$2,499.00 payment for booking #BK-2023-001</p>
                        <p className="text-xs text-muted-foreground">1 hour ago</p>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="p-3 cursor-pointer">
                      <div className="space-y-1">
                        <p className="text-sm font-medium">New inquiry</p>
                        <p className="text-xs text-muted-foreground">Michael Brown inquired about Swiss Alps tour</p>
                        <p className="text-xs text-muted-foreground">3 hours ago</p>
                      </div>
                    </DropdownMenuItem>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="justify-center">View all notifications</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
