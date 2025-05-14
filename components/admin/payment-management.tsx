"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DownloadCloud, Eye, Filter, Plus, RefreshCw, Search, Settings } from "lucide-react"

// Mock data for payments
const payments = [
  {
    id: "PAY-1001",
    customer: "John Smith",
    amount: 1299.99,
    date: "2023-05-15",
    status: "completed",
    method: "credit_card",
    service: "Bali Adventure Tour",
    invoice: "INV-2023-1001",
  },
  {
    id: "PAY-1002",
    customer: "Emma Johnson",
    amount: 849.5,
    date: "2023-05-14",
    status: "completed",
    method: "paypal",
    service: "Paris City Break",
    invoice: "INV-2023-1002",
  },
  {
    id: "PAY-1003",
    customer: "Michael Brown",
    amount: 2450.0,
    date: "2023-05-13",
    status: "pending",
    method: "bank_transfer",
    service: "Japan Cherry Blossom Tour",
    invoice: "INV-2023-1003",
  },
  {
    id: "PAY-1004",
    customer: "Sophia Garcia",
    amount: 399.99,
    date: "2023-05-12",
    status: "failed",
    method: "credit_card",
    service: "Rome Day Tour",
    invoice: "INV-2023-1004",
  },
  {
    id: "PAY-1005",
    customer: "William Taylor",
    amount: 1899.0,
    date: "2023-05-10",
    status: "refunded",
    method: "credit_card",
    service: "Egypt Pyramids Explorer",
    invoice: "INV-2023-1005",
  },
  {
    id: "PAY-1006",
    customer: "Olivia Martinez",
    amount: 749.99,
    date: "2023-05-09",
    status: "completed",
    method: "paypal",
    service: "New York City Package",
    invoice: "INV-2023-1006",
  },
  {
    id: "PAY-1007",
    customer: "James Wilson",
    amount: 3299.5,
    date: "2023-05-08",
    status: "completed",
    method: "credit_card",
    service: "Australia Outback Adventure",
    invoice: "INV-2023-1007",
  },
]

// Mock data for payment methods
const paymentMethods = [
  { id: "method-1", name: "Visa Credit Card", type: "credit_card", default: true, last4: "4242" },
  { id: "method-2", name: "PayPal", type: "paypal", default: false, email: "accounts@easyourtour.com" },
  {
    id: "method-3",
    name: "Bank Transfer",
    type: "bank_transfer",
    default: false,
    account: "IBAN: DE89370400440532013000",
  },
]

// Mock data for reports
const reportData = [
  { month: "Jan", revenue: 12500 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 18000 },
  { month: "Apr", revenue: 22000 },
  { month: "May", revenue: 19500 },
  { month: "Jun", revenue: 25000 },
]

export default function PaymentManagement() {
  const [activeTab, setActiveTab] = useState("transactions")
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>("all")

  // Filter payments based on status
  const filteredPayments =
    filterStatus === "all" ? payments : payments.filter((payment) => payment.status === filterStatus)

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "failed":
        return "bg-red-100 text-red-800"
      case "refunded":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Payment Management</h2>
          <p className="text-muted-foreground">View and manage all payment transactions</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" />
            Payment Settings
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      <Tabs defaultValue="transactions" className="space-y-4" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="methods">Payment Methods</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle>Payment Transactions</CardTitle>
                  <CardDescription>View and manage all payment transactions</CardDescription>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search payments..."
                      className="pl-8 w-full sm:w-[200px] md:w-[260px]"
                    />
                  </div>
                  <Select defaultValue="all" onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <Filter className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Filter status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="failed">Failed</SelectItem>
                      <SelectItem value="refunded">Refunded</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Method</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.map((payment) => (
                      <TableRow key={payment.id}>
                        <TableCell className="font-medium">{payment.id}</TableCell>
                        <TableCell>{payment.customer}</TableCell>
                        <TableCell className="max-w-[200px] truncate">{payment.service}</TableCell>
                        <TableCell>{payment.date}</TableCell>
                        <TableCell>{formatCurrency(payment.amount)}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={getStatusColor(payment.status)}>
                            {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {payment.method === "credit_card" && "Credit Card"}
                          {payment.method === "paypal" && "PayPal"}
                          {payment.method === "bank_transfer" && "Bank Transfer"}
                        </TableCell>
                        <TableCell className="text-right">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="ghost" size="icon" onClick={() => setSelectedPayment(payment.id)}>
                                <Eye className="h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[525px]">
                              <DialogHeader>
                                <DialogTitle>Payment Details</DialogTitle>
                                <DialogDescription>Transaction ID: {payment.id}</DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label className="text-muted-foreground text-sm">Customer</Label>
                                    <p className="font-medium">{payment.customer}</p>
                                  </div>
                                  <div>
                                    <Label className="text-muted-foreground text-sm">Invoice</Label>
                                    <p className="font-medium">{payment.invoice}</p>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-muted-foreground text-sm">Service</Label>
                                  <p className="font-medium">{payment.service}</p>
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                  <div>
                                    <Label className="text-muted-foreground text-sm">Amount</Label>
                                    <p className="font-medium">{formatCurrency(payment.amount)}</p>
                                  </div>
                                  <div>
                                    <Label className="text-muted-foreground text-sm">Date</Label>
                                    <p className="font-medium">{payment.date}</p>
                                  </div>
                                  <div>
                                    <Label className="text-muted-foreground text-sm">Status</Label>
                                    <Badge variant="outline" className={`${getStatusColor(payment.status)} mt-1`}>
                                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>

                                <div>
                                  <Label className="text-muted-foreground text-sm">Payment Method</Label>
                                  <p className="font-medium">
                                    {payment.method === "credit_card" && "Credit Card"}
                                    {payment.method === "paypal" && "PayPal"}
                                    {payment.method === "bank_transfer" && "Bank Transfer"}
                                  </p>
                                </div>
                              </div>
                              <DialogFooter className="flex flex-col sm:flex-row gap-2">
                                <Button variant="outline" className="sm:w-auto w-full">
                                  <DownloadCloud className="mr-2 h-4 w-4" />
                                  Download Receipt
                                </Button>
                                {payment.status === "pending" && (
                                  <Button className="sm:w-auto w-full">Mark as Paid</Button>
                                )}
                                {payment.status === "completed" && (
                                  <Button variant="destructive" className="sm:w-auto w-full">
                                    Issue Refund
                                  </Button>
                                )}
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="text-sm text-muted-foreground">
                  Showing <strong>{filteredPayments.length}</strong> of <strong>{payments.length}</strong> payments
                </div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="methods" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Configure and manage payment methods</CardDescription>
                </div>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add Payment Method
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <Card key={method.id}>
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            {method.type === "credit_card" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              >
                                <rect width="20" height="14" x="2" y="5" rx="2" />
                                <line x1="2" x2="22" y1="10" y2="10" />
                              </svg>
                            )}
                            {method.type === "paypal" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              >
                                <path d="M7 11a4 4 0 0 0 4 4h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1a4 4 0 0 0-4 4v1z" />
                                <path d="M17 7v1a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4v-1" />
                                <path d="M7 7H4.5a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 19.5 7H17" />
                              </svg>
                            )}
                            {method.type === "bank_transfer" && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-primary"
                              >
                                <path d="m2 20 20-16" />
                                <path d="M5 20h14a1 1 0 0 0 1-1V5" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {method.type === "credit_card" && `**** **** **** ${method.last4}`}
                              {method.type === "paypal" && method.email}
                              {method.type === "bank_transfer" && method.account}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {method.default && (
                            <Badge variant="outline" className="bg-green-100 text-green-800">
                              Default
                            </Badge>
                          )}
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          {!method.default && (
                            <Button variant="outline" size="sm">
                              Set as Default
                            </Button>
                          )}
                          {!method.default && (
                            <Button variant="outline" size="sm" className="text-red-500 hover:text-red-600">
                              Remove
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Payment Reports</CardTitle>
                  <CardDescription>View and analyze payment data</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Select defaultValue="last6months">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select period" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="last30days">Last 30 Days</SelectItem>
                      <SelectItem value="last6months">Last 6 Months</SelectItem>
                      <SelectItem value="lastyear">Last Year</SelectItem>
                      <SelectItem value="alltime">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline">
                    <DownloadCloud className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-muted-foreground">Total Revenue</p>
                      <p className="text-3xl font-bold">{formatCurrency(112000)}</p>
                      <p className="text-sm text-green-600">+12.5% from last period</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-muted-foreground">Transactions</p>
                      <p className="text-3xl font-bold">245</p>
                      <p className="text-sm text-green-600">+8.3% from last period</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-2">
                      <p className="text-sm text-muted-foreground">Average Order Value</p>
                      <p className="text-3xl font-bold">{formatCurrency(457.14)}</p>
                      <p className="text-sm text-green-600">+3.8% from last period</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-end space-x-2">
                    {reportData.map((item) => (
                      <div key={item.month} className="flex-1 flex flex-col items-center">
                        <div
                          className="w-full bg-brand-teal rounded-t-md"
                          style={{ height: `${(item.revenue / 25000) * 200}px` }}
                        ></div>
                        <div className="mt-2 text-sm">{item.month}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-brand-teal mr-2"></div>
                          <span>Credit Card</span>
                        </div>
                        <span className="font-medium">68%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-brand-teal h-2 rounded-full" style={{ width: "68%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-brand-navy mr-2"></div>
                          <span>PayPal</span>
                        </div>
                        <span className="font-medium">22%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-brand-navy h-2 rounded-full" style={{ width: "22%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full bg-brand-light mr-2"></div>
                          <span>Bank Transfer</span>
                        </div>
                        <span className="font-medium">10%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-brand-light h-2 rounded-full" style={{ width: "10%" }}></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Top Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Bali Adventure Tour</span>
                        <span className="font-medium">{formatCurrency(28500)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Japan Cherry Blossom Tour</span>
                        <span className="font-medium">{formatCurrency(22050)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Australia Outback Adventure</span>
                        <span className="font-medium">{formatCurrency(19797)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Egypt Pyramids Explorer</span>
                        <span className="font-medium">{formatCurrency(15192)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Paris City Break</span>
                        <span className="font-medium">{formatCurrency(12742.5)}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
