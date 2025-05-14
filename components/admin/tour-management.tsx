import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash2, Eye } from "lucide-react"

export default function TourManagement() {
  const tours = [
    {
      id: "TOUR-001",
      name: "Enchanting Bali Private Retreat",
      destination: "Bali, Indonesia",
      duration: "8 Days",
      price: 2499,
      status: "Active",
    },
    {
      id: "TOUR-002",
      name: "Mystical Japan Adventure",
      destination: "Tokyo, Kyoto, Osaka",
      duration: "10 Days",
      price: 3299,
      status: "Active",
    },
    {
      id: "TOUR-003",
      name: "Greek Islands Luxury Cruise",
      destination: "Santorini, Mykonos, Crete",
      duration: "7 Days",
      price: 4199,
      status: "Active",
    },
    {
      id: "TOUR-004",
      name: "Majestic Swiss Alps Expedition",
      destination: "Zurich, Lucerne, Zermatt",
      duration: "9 Days",
      price: 3799,
      status: "Active",
    },
    {
      id: "TOUR-005",
      name: "Serengeti Safari Adventure",
      destination: "Tanzania",
      duration: "10 Days",
      price: 5299,
      status: "Draft",
    },
    {
      id: "TOUR-006",
      name: "Amalfi Coast Romantic Getaway",
      destination: "Italy",
      duration: "6 Days",
      price: 3599,
      status: "Draft",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Draft":
        return "bg-amber-100 text-amber-800"
      case "Inactive":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-6 flex justify-between">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search tours..." className="pl-8" />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Inactive</option>
          </select>

          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Destinations</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Africa</option>
            <option>North America</option>
            <option>South America</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Tour Name</th>
              <th className="text-left py-3 px-4">Destination</th>
              <th className="text-left py-3 px-4">Duration</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tours.map((tour) => (
              <tr key={tour.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{tour.id}</td>
                <td className="py-3 px-4">{tour.name}</td>
                <td className="py-3 px-4">{tour.destination}</td>
                <td className="py-3 px-4">{tour.duration}</td>
                <td className="py-3 px-4">${tour.price}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(tour.status)}`}>{tour.status}</span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="py-4 px-6 flex items-center justify-between bg-gray-50">
          <p className="text-sm text-muted-foreground">
            Showing <strong>1-6</strong> of <strong>6</strong> tours
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
