import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import AdminSettings from "@/components/admin/admin-settings"

export const metadata: Metadata = {
  title: "Admin Settings | Wanderlux Admin",
  description: "Configure settings for your travel agency website.",
}

export default function AdminSettingsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>
        <AdminSettings />
      </div>
    </div>
  )
}
