import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash2, Eye } from "lucide-react"

export default function VisaManagement() {
  const visaServices = [
    {
      id: "VISA-001",
      country: "Australia",
      type: "Tourist Visa",
      processingTime: "15-20 days",
      price: 150,
      status: "Active",
    },
    {
      id: "VISA-002",
      country: "Canada",
      type: "Tourist Visa",
      processingTime: "20-25 days",
      price: 180,
      status: "Active",
    },
    {
      id: "VISA-003",
      country: "United Kingdom",
      type: "Tourist Visa",
      processingTime: "15-20 days",
      price: 200,
      status: "Active",
    },
    {
      id: "VISA-004",
      country: "United States",
      type: "Tourist Visa",
      processingTime: "30-90 days",
      price: 250,
      status: "Active",
    },
    {
      id: "VISA-005",
      country: "Japan",
      type: "Tourist Visa",
      processingTime: "5-7 days",
      price: 120,
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
          <Input placeholder="Search visa services..." className="pl-8" />
        </div>

        <div className="flex gap-2">
          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Inactive</option>
          </select>

          <select className="h-10 rounded-md border border-input bg-background px-3 py-2 text-sm">
            <option>All Countries</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>United Kingdom</option>
            <option>United States</option>
            <option>Japan</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 border-b">
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Country</th>
              <th className="text-left py-3 px-4">Visa Type</th>
              <th className="text-left py-3 px-4">Processing Time</th>
              <th className="text-left py-3 px-4">Price</th>
              <th className="text-left py-3 px-4">Status</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {visaServices.map((service) => (
              <tr key={service.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{service.id}</td>
                <td className="py-3 px-4">{service.country}</td>
                <td className="py-3 px-4">{service.type}</td>
                <td className="py-3 px-4">{service.processingTime}</td>
                <td className="py-3 px-4">${service.price}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(service.status)}`}>
                    {service.status}
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
            Showing <strong>1-5</strong> of <strong>5</strong> visa services
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
