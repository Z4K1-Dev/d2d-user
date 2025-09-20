"use client"

import * as React from "react"
import { Plus, Filter, Download, Users, Activity, TrendingUp, DollarSign, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CustomersPage() {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      company: "Tech Corp",
      status: "active",
      totalSpent: 15420,
      lastContact: "2 days ago",
      phone: "+1 234 567 8900"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      company: "Design Studio",
      status: "active",
      totalSpent: 8750,
      lastContact: "1 week ago",
      phone: "+1 234 567 8901"
    },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob.johnson@example.com",
      company: "Marketing Pro",
      status: "inactive",
      totalSpent: 3200,
      lastContact: "1 month ago",
      phone: "+1 234 567 8902"
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice.brown@example.com",
      company: "E-commerce Plus",
      status: "active",
      totalSpent: 22100,
      lastContact: "3 days ago",
      phone: "+1 234 567 8903"
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie.wilson@example.com",
      company: "Startup Inc",
      status: "prospect",
      totalSpent: 0,
      lastContact: "Yesterday",
      phone: "+1 234 567 8904"
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge variant="default" className="bg-green-100 text-green-800">Active</Badge>
      case "inactive":
        return <Badge variant="default" className="bg-red-100 text-red-800">Inactive</Badge>
      case "prospect":
        return <Badge variant="default" className="bg-blue-100 text-blue-800">Prospect</Badge>
      default:
        return <Badge variant="default">{status}</Badge>
    }
  }

  const stats = {
    totalCustomers: 1234,
    activeCustomers: 856,
    newCustomers: 45,
    totalRevenue: 1250000
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        
        <SidebarInset>
          <AppHeader />
          
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
                  <p className="text-muted-foreground">
                    Manage your customer relationships and track interactions.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Customer
                  </Button>
                </div>
              </div>
              
              {/* Customer Stats */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalCustomers.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.activeCustomers.toLocaleString()}</div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">New Customers</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.newCustomers}</div>
                    <p className="text-xs text-muted-foreground">
                      +15% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${(stats.totalRevenue / 1000).toFixed(0)}K</div>
                    <p className="text-xs text-muted-foreground">
                      +23% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Customer Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer List</CardTitle>
                  <CardDescription>
                    A list of all your customers and their details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Company</TableHead>
                          <TableHead>Email</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Total Spent</TableHead>
                          <TableHead>Last Contact</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {customers.map((customer) => (
                          <TableRow key={customer.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <div className="font-medium">{customer.name}</div>
                                  <div className="text-sm text-muted-foreground">{customer.phone}</div>
                                </div>
                              </div>
                            </TableCell>
                            <TableCell>{customer.company}</TableCell>
                            <TableCell>{customer.email}</TableCell>
                            <TableCell>{getStatusBadge(customer.status)}</TableCell>
                            <TableCell>${customer.totalSpent.toLocaleString()}</TableCell>
                            <TableCell className="text-muted-foreground">{customer.lastContact}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                                  <DropdownMenuItem>Contact History</DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}