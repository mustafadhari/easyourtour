import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import DashboardOverview from "@/components/admin/dashboard-overview"

export const metadata: Metadata = {
  title: "Admin Dashboard | Wanderlux",
  description: "Manage your travel agency website content and bookings.",
}

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <select className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 12 months</option>
            </select>
          </div>
        </div>
        <DashboardOverview />
      </div>
    </AdminLayout>
  )
}
