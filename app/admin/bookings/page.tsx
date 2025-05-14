import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import BookingManagement from "@/components/admin/booking-management"

export const metadata: Metadata = {
  title: "Booking Management | Wanderlux Admin",
  description: "Manage and track bookings for your travel agency.",
}

export default function AdminBookingsPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Booking Management</h1>
          <div className="flex items-center gap-2">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">Create Booking</button>
          </div>
        </div>
        <BookingManagement />
      </div>
    </AdminLayout>
  )
}
