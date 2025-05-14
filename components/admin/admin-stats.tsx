import { Card, CardContent } from "@/components/ui/card"
import { Users, CreditCard, Map, MessageSquare } from "lucide-react"

export default function AdminStats() {
  const stats = [
    {
      title: "Total Bookings",
      value: "1,248",
      change: "+12.5%",
      icon: <CreditCard className="h-8 w-8 text-amber-600" />,
    },
    {
      title: "Active Tours",
      value: "42",
      change: "+4.3%",
      icon: <Map className="h-8 w-8 text-amber-600" />,
    },
    {
      title: "New Customers",
      value: "358",
      change: "+18.2%",
      icon: <Users className="h-8 w-8 text-amber-600" />,
    },
    {
      title: "Pending Inquiries",
      value: "27",
      change: "-3.1%",
      icon: <MessageSquare className="h-8 w-8 text-amber-600" />,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <p className={`text-xs ${stat.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                  {stat.change} from last month
                </p>
              </div>
              <div>{stat.icon}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
