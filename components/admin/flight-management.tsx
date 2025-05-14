import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash2, Eye } from "lucide-react"

export default function FlightManagement() {
  const flights = [
    {
      id: "FLT-001",
      airline: "Emirates",
      route: "New York to Paris",
      price: 599,
      departureDate: "2025-09-15",
      status: "Active",
    },
    {
      id: "FLT-002",
      airline: "Singapore Airlines",
      route: "London to Tokyo",
      price: 899,
      departureDate: "2025-10-20",
      status: "Active",
    },
    {
      id: "FLT-003",
      airline: "Qatar Airways",
      route: "Los Angeles to Dubai",
      price: 799,
      departureDate: "2025-11-05",
      status: "Active",
    },
    {
      id: "FLT-004",
      airline: "Cathay Pacific",
      route: "Hong Kong to Sydney",
      price: 699,
      departureDate: "2025-09-25",
      status: "Draft",
    },
    {
      id: "FLT-005",
      airline: "Lufthansa",
      route: "Frankfurt to New York",
      price: 549,
      departureDate: "2025-10-10",
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
          <Input placeholder="Search flights..." className="pl-8" />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Inactive</option>
          </select>

          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Airlines</option>
            <option>Emirates</option>
            <option>Singapore Airlines</option>
            <option>Qatar Airways</option>
            <option>Cathay Pacific</option>
            <option>Lufthansa</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Airline</th>
              <th className="text-left py-3 px-4">Route</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Departure Date</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flights.map((flight) => (
              <tr key={flight.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{flight.id}</td>
                <td className="py-3 px-4">{flight.airline}</td>
                <td className="py-3 px-4">{flight.route}</td>
                <td className="py-3 px-4">${flight.price}</td>
                <td className="py-3 px-4">{flight.departureDate}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(flight.status)}`}>
                    {flight.status}
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
            Showing <strong>1-5</strong> of <strong>5</strong> flights
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
