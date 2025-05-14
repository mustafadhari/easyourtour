import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import TourManagement from "@/components/admin/tour-management"

export const metadata: Metadata = {
  title: "Manage Tours | Wanderlux Admin",
  description: "Create, edit, and manage tour packages for your travel agency.",
}

export default function AdminToursPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tour Management</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Add New Tour</button>
        </div>

        <TourManagement />
      </div>
    </div>
  )
}
