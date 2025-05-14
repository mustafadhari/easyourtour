"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Edit, Eye, Download, Filter, MoreHorizontal, Mail, Phone } from "lucide-react"
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
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

export default function CustomerManagement() {
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([])
  const [viewCustomer, setViewCustomer] = useState<any | null>(null)

  const customers = [
    {
      id: "CUST-001",
      name: "Sarah Johnson",
      email: "sarah.j@example.com",
      phone: "+1 (555) 123-4567",
      location: "New York, USA",
      totalSpent: 4750,
      bookings: 3,
      status: "Active",
      joinDate: "2023-05-15",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-002",
      name: "Michael Brown",
      email: "m.brown@example.com",
      phone: "+1 (555) 234-5678",
      location: "London, UK",
      totalSpent: 6200,
      bookings: 2,
      status: "Active",
      joinDate: "2023-06-22",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-003",
      name: "Emma Thompson",
      email: "emma.t@example.com",
      phone: "+1 (555) 345-6789",
      location: "Sydney, Australia",
      totalSpent: 3800,
      bookings: 1,
      status: "Active",
      joinDate: "2023-07-10",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-004",
      name: "David Wilson",
      email: "d.wilson@example.com",
      phone: "+1 (555) 456-7890",
      location: "Toronto, Canada",
      totalSpent: 0,
      bookings: 0,
      status: "Inactive",
      joinDate: "2023-08-05",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "CUST-005",
      name: "Sophia Garcia",
      email: "sophia.g@example.com",
      phone: "+1 (555) 567-8901",
      location: "Paris, France",
      totalSpent: 8900,
      bookings: 4,
      status: "Active",
      joinDate: "2023-04-18",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
      case "Inactive":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400"
    }
  }

  const toggleSelectAll = () => {
    if (selectedCustomers.length === customers.length) {
      setSelectedCustomers([])
    } else {
      setSelectedCustomers(customers.map((customer) => customer.id))
    }
  }

  const toggleSelectCustomer = (id: string) => {
    if (selectedCustomers.includes(id)) {
      setSelectedCustomers(selectedCustomers.filter((customerId) => customerId !== id))
    } else {
      setSelectedCustomers([...selectedCustomers, id])
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
                <Input type="search" placeholder="Search customers..." className="pl-8 w-full sm:w-[300px]" />
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
                Add Customer
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedCustomers.length === customers.length && customers.length > 0}
                      onCheckedChange={toggleSelectAll}
                      aria-label="Select all"
                    />
                  </TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead className="text-right">Total Spent</TableHead>
                  <TableHead className="text-center">Bookings</TableHead>
                  <TableHead className="text-center">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>
                      <Checkbox
                        checked={selectedCustomers.includes(customer.id)}
                        onCheckedChange={() => toggleSelectCustomer(customer.id)}
                        aria-label={`Select ${customer.name}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={customer.avatar || "/placeholder.svg"} alt={customer.name} />
                          <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{customer.name}</p>
                          <p className="text-xs text-muted-foreground">{customer.id}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-sm">{customer.email}</span>
                        </div>
                        <div className="flex items-center mt-1">
                          <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-sm">{customer.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{customer.location}</TableCell>
                    <TableCell className="text-right font-medium">${customer.totalSpent.toLocaleString()}</TableCell>
                    <TableCell className="text-center">{customer.bookings}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={getStatusColor(customer.status)}>
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="ghost" size="icon" onClick={() => setViewCustomer(customer)}>
                              <Eye className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <DialogHeader>
                              <DialogTitle>Customer Details</DialogTitle>
                              <DialogDescription>View detailed information about this customer.</DialogDescription>
                            </DialogHeader>
                            {viewCustomer && (
                              <Tabs defaultValue="overview" className="mt-4">
                                <TabsList className="grid w-full grid-cols-3">
                                  <TabsTrigger value="overview">Overview</TabsTrigger>
                                  <TabsTrigger value="bookings">Bookings</TabsTrigger>
                                  <TabsTrigger value="activity">Activity</TabsTrigger>
                                </TabsList>
                                <TabsContent value="overview" className="space-y-4 pt-4">
                                  <div className="flex items-center gap-4">
                                    <Avatar className="h-16 w-16">
                                      <AvatarImage
                                        src={viewCustomer.avatar || "/placeholder.svg"}
                                        alt={viewCustomer.name}
                                      />
                                      <AvatarFallback>{viewCustomer.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h3 className="text-xl font-bold">{viewCustomer.name}</h3>
                                      <p className="text-muted-foreground">{viewCustomer.id}</p>
                                      <Badge
                                        variant="outline"
                                        className={`mt-1 ${getStatusColor(viewCustomer.status)}`}
                                      >
                                        {viewCustomer.status}
                                      </Badge>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                                    <div className="space-y-2">
                                      <h4 className="font-medium">Contact Information</h4>
                                      <div className="space-y-1">
                                        <div className="flex items-center">
                                          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                                          <span>{viewCustomer.email}</span>
                                        </div>
                                        <div className="flex items-center">
                                          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                                          <span>{viewCustomer.phone}</span>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="space-y-2">
                                      <h4 className="font-medium">Customer Details</h4>
                                      <div className="space-y-1">
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Location:</span>
                                          <span>{viewCustomer.location}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Join Date:</span>
                                          <span>{new Date(viewCustomer.joinDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Total Spent:</span>
                                          <span className="font-medium">
                                            ${viewCustomer.totalSpent.toLocaleString()}
                                          </span>
                                        </div>
                                        <div className="flex justify-between">
                                          <span className="text-muted-foreground">Total Bookings:</span>
                                          <span>{viewCustomer.bookings}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>

                                <TabsContent value="bookings" className="pt-4">
                                  <div className="text-center py-8">
                                    {viewCustomer.bookings > 0 ? (
                                      <p>Booking history will be displayed here.</p>
                                    ) : (
                                      <div className="space-y-2">
                                        <p>No bookings found for this customer.</p>
                                        <Button variant="outline" size="sm">
                                          Create a Booking
                                        </Button>
                                      </div>
                                    )}
                                  </div>
                                </TabsContent>

                                <TabsContent value="activity" className="pt-4">
                                  <div className="text-center py-8">
                                    <p>Customer activity log will be displayed here.</p>
                                  </div>
                                </TabsContent>
                              </Tabs>
                            )}
                            <DialogFooter>
                              <Button variant="outline">Edit Customer</Button>
                              <Button className="bg-amber-600 hover:bg-amber-700">Send Message</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Send Email</DropdownMenuItem>
                            <DropdownMenuItem>Create Booking</DropdownMenuItem>
                            <DropdownMenuItem>View Activity</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600">Delete Customer</DropdownMenuItem>
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
              Showing <strong>5</strong> of <strong>25</strong> customers
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
