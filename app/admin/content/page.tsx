import type { Metadata } from "next"
import AdminLayout from "@/components/admin/admin-layout"
import ContentManagement from "@/components/admin/content-management"

export const metadata: Metadata = {
  title: "Content Management | Wanderlux Admin",
  description: "Manage website content including blog posts, pages, and media.",
}

export default function AdminContentPage() {
  return (
    <AdminLayout>
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Content Management</h1>
          <div className="flex items-center gap-2">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">
              Create New Content
            </button>
          </div>
        </div>
        <ContentManagement />
      </div>
    </AdminLayout>
  )
}
