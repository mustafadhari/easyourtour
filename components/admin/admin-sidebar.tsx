"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Map,
  Plane,
  Building,
  FileText,
  MessageSquare,
  Settings,
  LogOut,
  Users,
  CreditCard,
  BarChart,
  Calendar,
  Menu,
  ChevronDown,
  ChevronRight,
  Globe,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function AdminSidebar({ isMobile = false, onClose }: { isMobile?: boolean; onClose?: () => void }) {
  const pathname = usePathname()
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    bookings: true,
    content: false,
  })

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = (menu: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }))
  }

  const menuItems = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
      href: "/admin/dashboard",
    },
    {
      title: "Bookings",
      icon: <Calendar className="h-5 w-5" />,
      submenu: true,
      id: "bookings",
      items: [
        {
          title: "Tours",
          icon: <Map className="h-4 w-4" />,
          href: "/admin/tours",
        },
        {
          title: "Flights",
          icon: <Plane className="h-4 w-4" />,
          href: "/admin/flights",
        },
        {
          title: "Hotels",
          icon: <Building className="h-4 w-4" />,
          href: "/admin/hotels",
        },
        {
          title: "Visa Services",
          icon: <FileText className="h-4 w-4" />,
          href: "/admin/visa",
        },
      ],
    },
    {
      title: "Inquiries",
      icon: <MessageSquare className="h-5 w-5" />,
      href: "/admin/inquiries",
    },
    {
      title: "Customers",
      icon: <Users className="h-5 w-5" />,
      href: "/admin/customers",
    },
    {
      title: "Payments",
      icon: <CreditCard className="h-5 w-5" />,
      href: "/admin/payments",
    },
    {
      title: "Content",
      icon: <Globe className="h-5 w-5" />,
      submenu: true,
      id: "content",
      items: [
        {
          title: "Destinations",
          href: "/admin/destinations",
        },
        {
          title: "Blog Posts",
          href: "/admin/blog",
        },
        {
          title: "Reviews",
          href: "/admin/reviews",
        },
      ],
    },
    {
      title: "Reports",
      icon: <BarChart className="h-5 w-5" />,
      href: "/admin/reports",
    },
    {
      title: "Settings",
      icon: <Settings className="h-5 w-5" />,
      href: "/admin/settings",
    },
  ]

  const handleItemClick = () => {
    if (isMobile && onClose) {
      onClose()
    }
  }

  return (
    <div
      className={cn(
        "bg-white dark:bg-gray-950 border-r border-border/40 h-screen flex flex-col",
        isMobile ? "w-full" : "w-64 sticky top-0",
      )}
    >
      <div className="p-4 border-b border-border/40 flex items-center justify-between">
        <Link href="/admin/dashboard" className="flex items-center">
          <span className="text-xl font-bold text-amber-600">Wanderlux</span>
          <span className="text-xs bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 px-2 py-0.5 rounded ml-2">
            Admin
          </span>
        </Link>
        {isMobile && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Menu className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="p-4 border-b border-border/40">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin User" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@wanderlux.com</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {menuItems.map((item) =>
            item.submenu ? (
              <Collapsible
                key={item.title}
                open={openMenus[item.id]}
                onOpenChange={() => toggleMenu(item.id)}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-between font-normal",
                      item.items?.some((subitem) => isActive(subitem.href))
                        ? "bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                        : "",
                    )}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{item.icon}</span>
                      <span>{item.title}</span>
                    </div>
                    {openMenus[item.id] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-9 space-y-1 pt-1">
                  {item.items?.map((subitem) => (
                    <Link key={subitem.href} href={subitem.href} onClick={handleItemClick}>
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start font-normal text-sm h-9",
                          isActive(subitem.href)
                            ? "bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-400"
                            : "",
                        )}
                      >
                        {subitem.icon && <span className="mr-2">{subitem.icon}</span>}
                        {subitem.title}
                      </Button>
                    </Link>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Link key={item.href} href={item.href || "#"} onClick={handleItemClick}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start font-normal",
                    isActive(item.href) ? "bg-amber-50 text-amber-900 dark:bg-amber-900/20 dark:text-amber-400" : "",
                  )}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.title}</span>
                </Button>
              </Link>
            ),
          )}
        </div>
      </nav>

      <div className="p-4 border-t border-border/40">
        <Link href="/admin">
          <Button variant="outline" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-2" />
            <span>Logout</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
