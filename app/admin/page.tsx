import type { Metadata } from "next"
import { redirect } from "next/navigation"
import AdminLogin from "@/components/admin/admin-login"

export const metadata: Metadata = {
  title: "Admin Login | Wanderlux",
  description: "Secure login for Wanderlux administrators.",
}

export default function AdminPage() {
  // In a real app, you would check if the user is already authenticated
  const isAuthenticated = false

  if (isAuthenticated) {
    redirect("/admin/dashboard")
  }

  return (
    <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">Admin Login</h1>
        <AdminLogin />
      </div>
    </div>
  )
}
