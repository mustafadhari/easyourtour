import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import VisaManagement from "@/components/admin/visa-management"

export const metadata: Metadata = {
  title: "Manage Visa Services | Wanderlux Admin",
  description: "Create, edit, and manage visa services for your travel agency.",
}

export default function AdminVisaPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Visa Services Management</h1>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Add New Service</button>
        </div>

        <VisaManagement />
      </div>
    </div>
  )
}
