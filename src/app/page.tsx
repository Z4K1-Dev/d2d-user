"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, DollarSign, Activity, CheckCircle, Clock, AlertCircle, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const chartData = [
    { month: "Jan", revenue: 40000, customers: 1200 },
    { month: "Feb", revenue: 42000, customers: 1250 },
    { month: "Mar", revenue: 38000, customers: 1180 },
    { month: "Apr", revenue: 45000, customers: 1300 },
    { month: "May", revenue: 48000, customers: 1350 },
    { month: "Jun", revenue: 52000, customers: 1420 },
    { month: "Jul", revenue: 55000, customers: 1480 },
    { month: "Aug", revenue: 58000, customers: 1550 },
    { month: "Sep", revenue: 62000, customers: 1620 },
    { month: "Oct", revenue: 65000, customers: 1680 },
    { month: "Nov", revenue: 68000, customers: 1720 },
    { month: "Dec", revenue: 72000, customers: 1800 },
  ]

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "hsl(var(--chart-1))",
    },
    customers: {
      label: "Customers",
      color: "hsl(var(--chart-2))",
    },
  }

  const tasks = [
    {
      id: 1,
      title: "Follow up with John Doe",
      customer: "John Doe",
      status: "completed",
      priority: "high",
      lastStatusChange: "2 hours ago",
      assignee: "You"
    },
    {
      id: 2,
      title: "Send proposal to ABC Corp",
      customer: "ABC Corp",
      status: "in-progress",
      priority: "high",
      lastStatusChange: "4 hours ago",
      assignee: "Sarah"
    },
    {
      id: 3,
      title: "Schedule product demo",
      customer: "XYZ Inc",
      status: "pending",
      priority: "medium",
      lastStatusChange: "1 day ago",
      assignee: "Mike"
    },
    {
      id: 4,
      title: "Update CRM documentation",
      customer: "Internal",
      status: "in-progress",
      priority: "low",
      lastStatusChange: "2 days ago",
      assignee: "You"
    },
    {
      id: 5,
      title: "Review Q4 sales report",
      customer: "Management",
      status: "pending",
      priority: "medium",
      lastStatusChange: "3 days ago",
      assignee: "Lisa"
    },
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="default" className="bg-green-100 text-green-800">Completed</Badge>
      case "in-progress":
        return <Badge variant="default" className="bg-blue-100 text-blue-800">In Progress</Badge>
      case "pending":
        return <Badge variant="default" className="bg-yellow-100 text-yellow-800">Pending</Badge>
      default:
        return <Badge variant="default">{status}</Badge>
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">High</Badge>
      case "medium":
        return <Badge variant="secondary">Medium</Badge>
      case "low":
        return <Badge variant="outline">Low</Badge>
      default:
        return <Badge variant="outline">{priority}</Badge>
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        
        <SidebarInset>
          <AppHeader />
          
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome to your CRM dashboard. Here's what's happening with your business today.
                </p>
              </div>
              
              {/* 4 Card Status */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">1,234</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">56</div>
                    <p className="text-xs text-muted-foreground">
                      -5% from last week
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,678</div>
                    <p className="text-xs text-muted-foreground">
                      +23% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">3.2%</div>
                    <p className="text-xs text-muted-foreground">
                      +0.5% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Line Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Overview</CardTitle>
                  <CardDescription>
                    Monthly revenue and customer growth for the current year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-80 w-full">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="month" 
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <YAxis 
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent />}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="customers"
                        stroke="var(--color-customers)"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>
              
              {/* Task Table */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Tasks</CardTitle>
                  <CardDescription>
                    Latest task updates and status changes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Task</TableHead>
                          <TableHead>Customer</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Priority</TableHead>
                          <TableHead>Last Status Change</TableHead>
                          <TableHead>Assignee</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tasks.map((task) => (
                          <TableRow key={task.id}>
                            <TableCell className="font-medium">{task.title}</TableCell>
                            <TableCell>{task.customer}</TableCell>
                            <TableCell>{getStatusBadge(task.status)}</TableCell>
                            <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                            <TableCell className="text-muted-foreground">{task.lastStatusChange}</TableCell>
                            <TableCell>{task.assignee}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>View Details</DropdownMenuItem>
                                  <DropdownMenuItem>Change Status</DropdownMenuItem>
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