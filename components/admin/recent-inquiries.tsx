import { Button } from "@/components/ui/button"

export default function RecentInquiries() {
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
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-2">ID</th>
            <th className="text-left py-2">Name</th>
            <th className="text-left py-2">Subject</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{inquiry.id}</td>
              <td className="py-2">{inquiry.name}</td>
              <td className="py-2">{inquiry.subject}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(inquiry.status)}`}>
                  {inquiry.status}
                </span>
              </td>
              <td className="py-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <Button variant="link" className="text-amber-600">
          View All Inquiries
        </Button>
      </div>
    </div>
  )
}
