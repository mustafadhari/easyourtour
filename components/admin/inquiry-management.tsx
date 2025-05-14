import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Eye, MessageSquare, CheckCircle } from "lucide-react"

export default function InquiryManagement() {
  const inquiries = [
    {
      id: "INQ-2023-001",
      name: "John Smith",
      email: "john.smith@example.com",
      subject: "Bali Private Tour Inquiry",
      date: "2025-04-25",
      status: "New",
    },
    {
      id: "INQ-2023-002",
      name: "Emma Johnson",
      email: "emma.j@example.com",
      subject: "Visa Requirements for Japan",
      date: "2025-04-24",
      status: "New",
    },
    {
      id: "INQ-2023-003",
      name: "Michael Brown",
      email: "m.brown@example.com",
      subject: "Group Booking for Swiss Alps Tour",
      date: "2025-04-23",
      status: "In Progress",
    },
    {
      id: "INQ-2023-004",
      name: "Sophia Garcia",
      email: "sophia.g@example.com",
      subject: "Hotel Booking in Santorini",
      date: "2025-04-22",
      status: "In Progress",
    },
    {
      id: "INQ-2023-005",
      name: "Robert Wilson",
      email: "r.wilson@example.com",
      subject: "Flight Booking to Paris",
      date: "2025-04-21",
      status: "Resolved",
    },
    {
      id: "INQ-2023-006",
      name: "Jennifer Lee",
      email: "j.lee@example.com",
      subject: "Honeymoon Package Options",
      date: "2025-04-20",
      status: "Resolved",
    },
    {
      id: "INQ-2023-007",
      name: "David Martinez",
      email: "d.martinez@example.com",
      subject: "Safari Tour Information",
      date: "2025-04-19",
      status: "Resolved",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800"
      case "In Progress":
        return "bg-amber-100 text-amber-800"
      case "Resolved":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search inquiries..." className="pl-8" />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Statuses</option>
            <option>New</option>
            <option>In Progress</option>
            <option>Resolved</option>
          </select>

          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Types</option>
            <option>Tour Inquiry</option>
            <option>Visa Inquiry</option>
            <option>Hotel Booking</option>
            <option>Flight Booking</option>
            <option>General Inquiry</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Subject</th>
              <th className="text-left py-3 px-4">Date</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{inquiry.id}</td>
                <td className="py-3 px-4">{inquiry.name}</td>
                <td className="py-3 px-4">{inquiry.subject}</td>
                <td className="py-3 px-4">{inquiry.date}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                    {inquiry.status}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-green-500">
                      <CheckCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="py-4 px-6 flex items-center justify-between bg-gray-50">
          <p className="text-sm text-muted-foreground">
            Showing <strong>1-7</strong> of <strong>7</strong> inquiries
          </p>

          <div className="flex space-x-1">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" className="bg-amber-600 text-white border-amber-600">
              1
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
