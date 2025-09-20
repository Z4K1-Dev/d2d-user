"use client"

import * as React from "react"
import { TrendingUp, TrendingDown, DollarSign, Activity, CheckCircle, Clock, AlertCircle, MoreHorizontal } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, defs, linearGradient, stop, PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts"
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
import SpotlightCard from "@/components/ui/spotlightcard"

// Custom active shape for pie chart
const CustomActiveShape = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props
  
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(Rate ${((percent || 1) * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
}

export default function Dashboard() {
  // Live data state
  const [liveData, setLiveData] = React.useState({
    totalCustomers: 1234,
    activeTasks: 56,
    revenue: 45678,
    conversionRate: 3.2
  })

  // Pie chart data for each card
  const getCustomersPieData = () => {
    const current = liveData.totalCustomers
    const previous = Math.floor(current * 0.89) // Previous month (12% less)
    const growth = current - previous
    const other = Math.floor(current * 0.3) // Other segment
    return [
      { name: 'Current', value: current },
      { name: 'Previous', value: previous },
      { name: 'Growth', value: growth },
      { name: 'Other', value: other }
    ]
  }

  const getTasksPieData = () => {
    const current = liveData.activeTasks
    const previous = Math.floor(current * 1.05) // Previous week (5% more)
    const completed = Math.floor(current * 0.6)
    const pending = current - completed
    return [
      { name: 'Current', value: current },
      { name: 'Previous', value: previous },
      { name: 'Completed', value: completed },
      { name: 'Pending', value: pending }
    ]
  }

  const getRevenuePieData = () => {
    const current = liveData.revenue
    const previous = Math.floor(current * 0.77) // Previous month (23% less)
    const growth = current - previous
    const target = Math.floor(current * 1.2)
    return [
      { name: 'Current', value: current },
      { name: 'Previous', value: previous },
      { name: 'Growth', value: growth },
      { name: 'Target', value: target }
    ]
  }

  const getConversionPieData = () => {
    const current = liveData.conversionRate * 100 // Convert to number for display
    const previous = (current - 0.5) * 100 // Previous month (0.5% less)
    const industry = 2.5 * 100 // Industry average
    const goal = 4.0 * 100 // Goal
    return [
      { name: 'Current', value: current },
      { name: 'Previous', value: previous },
      { name: 'Industry', value: industry },
      { name: 'Goal', value: goal }
    ]
  }

  // Simulate live data updates
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        totalCustomers: prev.totalCustomers + Math.floor(Math.random() * 5) - 2,
        activeTasks: Math.max(0, prev.activeTasks + Math.floor(Math.random() * 3) - 1),
        revenue: Math.max(0, prev.revenue + Math.floor(Math.random() * 200) - 100),
        conversionRate: Math.max(0, Math.min(100, prev.conversionRate + (Math.random() * 0.2 - 0.1)))
      }))
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])
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
      color: "#3b82f6", // Blue color
    },
    customers: {
      label: "Customers",
      color: "#60a5fa", // Light blue color
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
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">LIVE</Badge>
                    </div>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="h-32 w-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={getCustomersPieData()}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              dataKey="value"
                              activeIndex={0}
                              activeShape={CustomActiveShape}
                              fill="#3b82f6"
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{liveData.totalCustomers.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                          +12% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-medium">Active Tasks</CardTitle>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">LIVE</Badge>
                    </div>
                    <Activity className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="h-32 w-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={getTasksPieData()}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              dataKey="value"
                              activeIndex={0}
                              activeShape={CustomActiveShape}
                              fill="#10b981"
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{liveData.activeTasks}</div>
                        <p className="text-xs text-muted-foreground">
                          -5% from last week
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">LIVE</Badge>
                    </div>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="h-32 w-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={getRevenuePieData()}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              dataKey="value"
                              activeIndex={0}
                              activeShape={CustomActiveShape}
                              fill="#f59e0b"
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">${liveData.revenue.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">
                          +23% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <Badge variant="outline" className="text-xs bg-green-50 text-green-700 border-green-200">LIVE</Badge>
                    </div>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <div className="h-32 w-32">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={getConversionPieData()}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              dataKey="value"
                              activeIndex={0}
                              activeShape={CustomActiveShape}
                              fill="#8b5cf6"
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold">{liveData.conversionRate.toFixed(1)}%</div>
                        <p className="text-xs text-muted-foreground">
                          +0.5% from last month
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Area Chart */}
              <SpotlightCard>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight">Revenue Overview</h3>
                    <p className="text-muted-foreground">
                      Monthly revenue and customer growth for the current year
                    </p>
                  </div>
                  <ChartContainer config={chartConfig} className="h-80 w-full">
                    <AreaChart data={chartData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="customersGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#60a5fa" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
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
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        fill="url(#revenueGradient)"
                        dot={{ r: 4 }}
                      />
                      <Area
                        type="monotone"
                        dataKey="customers"
                        stroke="#60a5fa"
                        strokeWidth={2}
                        fill="url(#customersGradient)"
                        dot={{ r: 4 }}
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </SpotlightCard>
              
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