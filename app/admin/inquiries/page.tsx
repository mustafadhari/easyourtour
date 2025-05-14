import type { Metadata } from "next"
import AdminSidebar from "@/components/admin/admin-sidebar"
import InquiryManagement from "@/components/admin/inquiry-management"

export const metadata: Metadata = {
  title: "Manage Inquiries | Wanderlux Admin",
  description: "View and respond to customer inquiries for your travel agency.",
}

export default function AdminInquiriesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Inquiry Management</h1>
          <div className="flex gap-2">
            <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option>All Inquiries</option>
              <option>New</option>
              <option>In Progress</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>

        <InquiryManagement />
      </div>
    </div>
  )
}
