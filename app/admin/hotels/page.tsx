import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import HotelManagement from "@/components/admin/hotel-management"

export const metadata: Metadata = {
  title: "Manage Hotels | Wanderlux Admin",
  description: "Create, edit, and manage hotel listings for your travel agency.",
}

export default function AdminHotelsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Hotel Management</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Add New Hotel</button>
        </div>

        <HotelManagement />
      </div>
    </div>
  )
}
