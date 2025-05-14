import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import PaymentManagement from "@/components/admin/payment-management"

export const metadata: Metadata = {
  title: "Payment Management | Wanderlux Admin",
  description: "Manage and track payments for your travel agency.",
}

export default function AdminPaymentsPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Payment Management</h1>
          <div className="flex items-center gap-2">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Create Invoice</button>
          </div>
        </div>
        <PaymentManagement />
      </div>
    </AdminLayout>
  )
}
