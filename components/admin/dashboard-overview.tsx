"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  CreditCard,
  Map,
  MessageSquare,
  TrendingUp,
  TrendingDown,
  Plane,
  Building,
  FileText,
  Calendar,
} from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function DashboardOverview() {
  const [timeRange, setTimeRange] = useState("week")

  const stats = [
    {
      title: "Total Revenue",
      value: "$124,563.00",
      change: "+12.5%",
      trend: "up",
      icon: <CreditCard className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Active Bookings",
      value: "42",
      change: "+4.3%",
      trend: "up",
      icon: <Map className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "New Customers",
      value: "358",
      change: "+18.2%",
      trend: "up",
      icon: <Users className="h-5 w-5 text-amber-600" />,
    },
    {
      title: "Pending Inquiries",
      value: "27",
      change: "-3.1%",
      trend: "down",
      icon: <MessageSquare className="h-5 w-5 text-amber-600" />,
    },
  ]

  const revenueData = [
    { name: "Jan", tours: 4000, flights: 2400, hotels: 2400 },
    { name: "Feb", tours: 3000, flights: 1398, hotels: 2210 },
    { name: "Mar", tours: 2000, flights: 9800, hotels: 2290 },
    { name: "Apr", tours: 2780, flights: 3908, hotels: 2000 },
    { name: "May", tours: 1890, flights: 4800, hotels: 2181 },
    { name: "Jun", tours: 2390, flights: 3800, hotels: 2500 },
    { name: "Jul", tours: 3490, flights: 4300, hotels: 2100 },
  ]

  const bookingSourceData = [
    { name: "Direct Website", value: 40 },
    { name: "Online Travel Agencies", value: 30 },
    { name: "Referrals", value: 15 },
    { name: "Social Media", value: 10 },
    { name: "Other", value: 5 },
  ]

  const COLORS = ["#F59E0B", "#3B82F6", "#10B981", "#8B5CF6", "#EC4899"]

  const upcomingBookings = [
    {
      id: "BK-2023-001",
      customer: {
        name: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Tour",
      destination: "Bali, Indonesia",
      date: "May 15, 2025",
      amount: "$2,499",
      status: "Confirmed",
    },
    {
      id: "BK-2023-002",
      customer: {
        name: "Michael Brown",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Flight",
      destination: "Tokyo, Japan",
      date: "May 20, 2025",
      amount: "$899",
      status: "Pending",
    },
    {
      id: "BK-2023-003",
      customer: {
        name: "Emma Thompson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Hotel",
      destination: "Paris, France",
      date: "June 5, 2025",
      amount: "$1,250",
      status: "Confirmed",
    },
    {
      id: "BK-2023-004",
      customer: {
        name: "David Wilson",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Tour",
      destination: "Swiss Alps",
      date: "June 10, 2025",
      amount: "$3,799",
      status: "Pending",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Tour":
        return <Map className="h-4 w-4 text-amber-600" />
      case "Flight":
        return <Plane className="h-4 w-4 text-blue-600" />
      case "Hotel":
        return <Building className="h-4 w-4 text-green-600" />
      case "Visa":
        return <FileText className="h-4 w-4 text-purple-600" />
      default:
        return <Calendar className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p
                    className={`text-xs flex items-center mt-1 ${
                      stat.trend === "up" ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <TrendingUp className="h-3 w-3 mr-1" />
                    ) : (
                      <TrendingDown className="h-3 w-3 mr-1" />
                    )}
                    {stat.change} from last month
                  </p>
                </div>
                <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-full">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Revenue Overview</CardTitle>
                <CardDescription>Revenue breakdown by service type</CardDescription>
              </div>
              <Tabs defaultValue="week" onValueChange={setTimeRange}>
                <TabsList className="grid w-[200px] grid-cols-3">
                  <TabsTrigger value="week">Week</TabsTrigger>
                  <TabsTrigger value="month">Month</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={revenueData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="tours" stroke="#F59E0B" strokeWidth={2} activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="flights" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="hotels" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm">Tours</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Flights</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm">Hotels</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Booking Sources</CardTitle>
            <CardDescription>Where your bookings come from</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={bookingSourceData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {bookingSourceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Bookings</CardTitle>
            <CardDescription>Recent bookings that need attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-muted/40 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={booking.customer.avatar || "/placeholder.svg"} alt={booking.customer.name} />
                      <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{booking.customer.name}</p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        {getTypeIcon(booking.type)}
                        <span className="ml-1">{booking.destination}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{booking.amount}</p>
                    <div className="flex items-center justify-end gap-2">
                      <span className="text-sm text-muted-foreground">{booking.date}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-2">
                View All Bookings
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Performance</CardTitle>
            <CardDescription>Booking completion rates by service type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Map className="h-4 w-4 text-amber-600 mr-2" />
                    <span className="font-medium">Tours</span>
                  </div>
                  <span className="text-sm font-medium">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Plane className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="font-medium">Flights</span>
                  </div>
                  <span className="text-sm font-medium">92%</span>
                </div>
                <Progress value={92} className="h-2 bg-blue-100 dark:bg-blue-900/30" indicatorClassName="bg-blue-600" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Building className="h-4 w-4 text-green-600 mr-2" />
                    <span className="font-medium">Hotels</span>
                  </div>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress
                  value={78}
                  className="h-2 bg-green-100 dark:bg-green-900/30"
                  indicatorClassName="bg-green-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="font-medium">Visa Services</span>
                  </div>
                  <span className="text-sm font-medium">63%</span>
                </div>
                <Progress
                  value={63}
                  className="h-2 bg-purple-100 dark:bg-purple-900/30"
                  indicatorClassName="bg-purple-600"
                />
              </div>

              <div className="pt-4 border-t">
                <div className="text-sm text-muted-foreground">
                  <p className="mb-1">
                    Overall completion rate: <span className="font-medium text-foreground">79.5%</span>
                  </p>
                  <p>
                    Target: <span className="font-medium text-foreground">85%</span>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
