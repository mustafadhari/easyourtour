import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import CustomerManagement from "@/components/admin/customer-management"

export const metadata: Metadata = {
  title: "Customer Management | Wanderlux Admin",
  description: "Manage customer accounts and view customer information.",
}

export default function AdminCustomersPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Customer Management</h1>
          <div className="flex items-center gap-2">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">
              Add New Customer
            </button>
          </div>
        </div>
        <CustomerManagement />
      </div>
    </AdminLayout>
  )
}
