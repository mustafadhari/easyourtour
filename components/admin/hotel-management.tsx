import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash2, Eye } from "lucide-react"

export default function HotelManagement() {
  const hotels = [
    {
      id: "HTL-001",
      name: "The Ritz-Carlton Bali",
      location: "Nusa Dua, Bali",
      price: 450,
      rating: 5,
      status: "Active",
    },
    {
      id: "HTL-002",
      name: "Four Seasons Resort Maldives",
      location: "Baa Atoll, Maldives",
      price: 850,
      rating: 5,
      status: "Active",
    },
    {
      id: "HTL-003",
      name: "Aman Tokyo",
      location: "Tokyo, Japan",
      price: 750,
      rating: 5,
      status: "Active",
    },
    {
      id: "HTL-004",
      name: "Grand Hyatt Singapore",
      location: "Singapore",
      price: 320,
      rating: 5,
      status: "Draft",
    },
    {
      id: "HTL-005",
      name: "Mandarin Oriental Bangkok",
      location: "Bangkok, Thailand",
      price: 280,
      rating: 5,
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
          <Input placeholder="Search hotels..." className="pl-8" />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Inactive</option>
          </select>

          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Locations</option>
            <option>Bali</option>
            <option>Maldives</option>
            <option>Tokyo</option>
            <option>Singapore</option>
            <option>Bangkok</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Hotel Name</th>
              <th className="text-left py-3 px-4">Location</th>
              <th className="text-left py-3 px-4">Price/Night</th>
              <th className="text-left py-3 px-4">Rating</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr key={hotel.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{hotel.id}</td>
                <td className="py-3 px-4">{hotel.name}</td>
                <td className="py-3 px-4">{hotel.location}</td>
                <td className="py-3 px-4">${hotel.price}</td>
                <td className="py-3 px-4">{"★".repeat(hotel.rating)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(hotel.status)}`}>
                    {hotel.status}
                  </span>
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
            Showing <strong>1-5</strong> of <strong>5</strong> hotels
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
