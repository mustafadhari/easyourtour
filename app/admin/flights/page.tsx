import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import FlightManagement from "@/components/admin/flight-management"

export const metadata: Metadata = {
  title: "Manage Flights | Wanderlux Admin",
  description: "Create, edit, and manage flight offerings for your travel agency.",
}

export default function AdminFlightsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Flight Management</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Add New Flight</button>
        </div>

        <FlightManagement />
      </div>
    </div>
  )
}
