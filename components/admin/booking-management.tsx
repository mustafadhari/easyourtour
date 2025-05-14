"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter, Eye, MoreHorizontal, Calendar, Plane, Building, FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BookingManagement() {
  const [viewBooking, setViewBooking] = useState<any | null>(null)

  const bookings = [
    {
      id: "BK-2023-001",
      customer: {
        name: "Sarah Johnson",
        email: "sarah.j@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Tour",
      destination: "Bali, Indonesia",
      startDate: "2025-05-15",
      endDate: "2025-05-22",
      amount: 2499,
      status: "Confirmed",
      paymentStatus: "Paid",
    },
    {
      id: "BK-2023-002",
      customer: {
        name: "Michael Brown",
        email: "m.brown@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Flight",
      destination: "Tokyo, Japan",
      startDate: "2025-05-20",
      endDate: "2025-05-20",
      amount: 899,
      status: "Pending",
      paymentStatus: "Paid",
    },
    {
      id: "BK-2023-003",
      customer: {
        name: "Emma Thompson",
        email: "emma.t@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Hotel",
      destination: "Paris, France",
      startDate: "2025-06-05",
      endDate: "2025-06-12",
      amount: 1250,
      status: "Confirmed",
      paymentStatus: "Pending",
    },
    {
      id: "BK-2023-004",
      customer: {
        name: "David Wilson",
        email: "d.wilson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Tour",
      destination: "Swiss Alps",
      startDate: "2025-06-10",
      endDate: "2025-06-19",
      amount: 3799,
      status: "Pending",
      paymentStatus: "Pending",
    },
    {
      id: "BK-2023-005",
      customer: {
        name: "Sophia Garcia",
        email: "sophia.g@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      type: "Visa",
      destination: "Japan",
      startDate: "2025-06-15",
      endDate: "2025-06-15",
      amount: 250,
      status: "Cancelled",
      paymentStatus: "Refunded",
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

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Pending":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
      case "Refunded":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Tour":
        return <Calendar className="h-4 w-4 text-amber-600" />
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
    <div className="space-y-4">
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search bookings..." className="pl-8 w-full sm:w-[300px]" />
              </div>
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm" className="bg-amber-600 hover:bg-amber-700 w-full sm:w-auto">
                Create Booking
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src={booking.customer.avatar || "/placeholder.svg"}
                            alt={booking.customer.name}
                          />
                          <AvatarFallback>{booking.customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span>{booking.customer.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        {getTypeIcon(booking.type)}
                        <span className="ml-1">{booking.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{booking.destination}</TableCell>
                    <TableCell>
                      {new Date(booking.startDate).toLocaleDateString()}
                      {booking.startDate !== booking.endDate && (
                        <span> - {new Date(booking.endDate).toLocaleDateString()}</span>
                      )}
                    </TableCell>
                    <TableCell>${booking.amount.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex flex-col gap-1">
                        <Badge variant="outline" className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                        <Badge variant="outline" className={getPaymentStatusColor(booking.paymentStatus)}>
                          {booking.paymentStatus}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setViewBooking(booking)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Booking Details</DialogTitle>
                              <DialogDescription>View detailed information about this booking.</DialogDescription>
                            </DialogHeader>
                            {viewBooking && (
                              <Tabs defaultValue="details" className="mt-4">
                                <TabsList className="grid w-full grid-cols-3">
                                  <TabsTrigger value="details">Booking Details</TabsTrigger>
                                  <TabsTrigger value="customer">Customer Info</TabsTrigger>
                                  <TabsTrigger value="payment">Payment Details</TabsTrigger>
                                </TabsList>
                                <TabsContent value="details" className="space-y-4 pt-4">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="text-xl font-bold">{viewBooking.id}</h3>
                                      <div className="flex items-center mt-1">
                                        {getTypeIcon(viewBooking.type)}
                                        <span className="ml-1">{viewBooking.type} Booking</span>
                                      </div>
                                    </div>
                                    <div className="flex gap-2">
                                      <Badge variant="outline" className={getStatusColor(viewBooking.status)}>
                                        {viewBooking.status}
                                      </Badge>
                                      <Badge
                                        variant="outline"
                                        className={getPaymentStatusColor(viewBooking.paymentStatus)}
                                      >
                                        {viewBooking.paymentStatus}
                                      </Badge>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium">Booking Information</h4>
                                      <div className="space-y-1">
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Destination:</span>
                                          <span>{viewBooking.destination}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Start Date:</span>
                                          <span>{new Date(viewBooking.startDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">End Date:</span>
                                          <span>{new Date(viewBooking.endDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Duration:</span>
                                          <span>
                                            {Math.ceil(
                                              (new Date(viewBooking.endDate).getTime() -
                                                new Date(viewBooking.startDate).getTime()) /
                                                (1000 * 60 * 60 * 24),
                                            )}{" "}
                                            days
                                          </span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <h4 className="font-medium">Pricing Details</h4>
                                      <div className="space-y-1">
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Base Price:</span>
                                          <span>${viewBooking.amount.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Taxes & Fees:</span>
                                          <span>Included</span>
                                        </div>
                                        <div className="flex justify-between font-medium">
                                          <span>Total Amount:</span>
                                          <span>${viewBooking.amount.toLocaleString()}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>

                                <TabsContent value="customer" className="pt-4">
                                  <div className="flex items-center gap-4 mb-4">
                                    <Avatar className="h-16 w-16">
                                      <AvatarImage
                                        src={viewBooking.customer.avatar || "/placeholder.svg"}
                                        alt={viewBooking.customer.name}
                                      />
                                      <AvatarFallback>{viewBooking.customer.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h3 className="text-xl font-bold">{viewBooking.customer.name}</h3>
                                      <p className="text-muted-foreground">{viewBooking.customer.email}</p>
                                    </div>
                                  </div>

                                  <div className="text-center py-4">
                                    <p>Additional customer information will be displayed here.</p>
                                  </div>
                                </TabsContent>

                                <TabsContent value="payment" className="pt-4">
                                  <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                      <h3 className="text-lg font-medium">Payment Status</h3>
                                      <Badge
                                        variant="outline"
                                        className={getPaymentStatusColor(viewBooking.paymentStatus)}
                                      >
                                        {viewBooking.paymentStatus}
                                      </Badge>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                        <h4 className="font-medium">Payment Details</h4>
                                        <div className="space-y-1">
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Payment ID:</span>
                                            <span>PAY-{viewBooking.id.split("-")[1]}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Payment Method:</span>
                                            <span>Credit Card</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Payment Date:</span>
                                            <span>{new Date(viewBooking.startDate).toLocaleDateString()}</span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="space-y-2">
                                        <h4 className="font-medium">Amount Breakdown</h4>
                                        <div className="space-y-1">
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Subtotal:</span>
                                            <span>${(viewBooking.amount * 0.9).toFixed(2)}</span>
                                          </div>
                                          <div className="flex justify-between">
                                            <span className="text-muted-foreground">Taxes & Fees (10%):</span>
                                            <span>${(viewBooking.amount * 0.1).toFixed(2)}</span>
                                          </div>
                                          <div className="flex justify-between font-medium pt-1 border-t">
                                            <span>Total:</span>
                                            <span>${viewBooking.amount.toLocaleString()}</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            )}
                            <DialogFooter>
                              <Button variant="outline">Edit Booking</Button>
                              <Button className="bg-amber-600 hover:bg-amber-700">Send Confirmation</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Edit Booking</DropdownMenuItem>
                            <DropdownMenuItem>Send Confirmation</DropdownMenuItem>
                            <DropdownMenuItem>View Payment</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            {booking.status !== "Cancelled" ? (
                              <DropdownMenuItem className="text-red-600">Cancel Booking</DropdownMenuItem>
                            ) : (
                              <DropdownMenuItem className="text-amber-600">Reactivate Booking</DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-muted-foreground">
              Showing <strong>5</strong> of <strong>25</strong> bookings
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" className="bg-amber-600 text-white border-amber-600">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
