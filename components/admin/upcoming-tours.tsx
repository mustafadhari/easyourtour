import { Button } from "@/components/ui/button"

export default function UpcomingTours() {
  const tours = [
    {
      id: "TOUR-2023-001",
      name: "Enchanting Bali Private Retreat",
      startDate: "2025-05-15",
      endDate: "2025-05-22",
      participants: 4,
      status: "Confirmed",
    },
    {
      id: "TOUR-2023-002",
      name: "Mystical Japan Adventure",
      startDate: "2025-05-20",
      endDate: "2025-05-30",
      participants: 8,
      status: "Confirmed",
    },
    {
      id: "TOUR-2023-003",
      name: "Greek Islands Luxury Cruise",
      startDate: "2025-06-05",
      endDate: "2025-06-12",
      participants: 6,
      status: "Pending",
    },
    {
      id: "TOUR-2023-004",
      name: "Majestic Swiss Alps Expedition",
      startDate: "2025-06-10",
      endDate: "2025-06-19",
      participants: 12,
      status: "Pending",
    },
    {
      id: "TOUR-2023-005",
      name: "Serengeti Safari Adventure",
      startDate: "2025-06-15",
      endDate: "2025-06-25",
      participants: 6,
      status: "Pending",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-amber-100 text-amber-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
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
            <th className="text-left py-2">Tour Name</th>
            <th className="text-left py-2">Start Date</th>
            <th className="text-left py-2">Status</th>
            <th className="text-left py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id} className="border-b hover:bg-gray-50">
              <td className="py-2">{tour.id}</td>
              <td className="py-2">{tour.name}</td>
              <td className="py-2">{tour.startDate}</td>
              <td className="py-2">
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tour.status)}`}>{tour.status}</span>
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
          View All Tours
        </Button>
      </div>
    </div>
  )
}
