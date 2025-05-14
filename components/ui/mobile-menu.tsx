"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { usePathname } from "next/navigation"

interface MenuItem {
  label: string
  href: string
  submenu?: MenuItem[]
}

interface MobileMenuProps {
  items: MenuItem[]
  className?: string
  logo?: React.ReactNode
}

const MobileMenu: React.FC<MobileMenuProps> = ({ items, className = "", logo }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <div className={className}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-primary focus:outline-none"
        aria-label="Toggle menu"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />}

      {/* Mobile menu panel */}
      <div
        className={`fixed top-0 right-0 w-[280px] h-full bg-white dark:bg-gray-900 z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          {logo && <div>{logo}</div>}
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {items.map((item) => (
              <li key={item.label} className="py-1">
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-md ${
                        isActive(item.href)
                          ? "bg-primary/10 text-primary font-medium"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span>{item.label}</span>
                      {openSubmenu === item.label ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {openSubmenu === item.label && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {item.submenu.map((subitem) => (
                          <li key={subitem.label}>
                            <Link
                              href={subitem.href}
                              className={`block px-3 py-2 rounded-md ${
                                isActive(subitem.href)
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
                              }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subitem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md ${
                      isActive(item.href)
                        ? "bg-primary/10 text-primary font-medium"
                        : "hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
