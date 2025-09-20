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
    { month: "Jan", revenue: 40000, customers: 15000 },
    { month: "Feb", revenue: 42000, customers: 16500 },
    { month: "Mar", revenue: 38000, customers: 17200 },
    { month: "Apr", revenue: 45000, customers: 18900 },
    { month: "May", revenue: 48000, customers: 20100 },
    { month: "Jun", revenue: 52000, customers: 21500 },
    { month: "Jul", revenue: 55000, customers: 22800 },
    { month: "Aug", revenue: 58000, customers: 24200 },
    { month: "Sep", revenue: 62000, customers: 25600 },
    { month: "Oct", revenue: 65000, customers: 26500 },
    { month: "Nov", revenue: 68000, customers: 27300 },
    { month: "Dec", revenue: 72000, customers: 28000 },
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
    <div className="flex h-screen w-full">
      <AppSidebar />
      
      <div className="flex-1 overflow-auto">
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
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 p-4">
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium text-white">Total Customers</CardTitle>
                        <Badge variant="outline" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">LIVE</Badge>
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
                          <div className="text-2xl font-bold text-white">{liveData.totalCustomers.toLocaleString()}</div>
                          <p className="text-xs text-green-300">
                            +12% from last month
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium text-white">Active Tasks</CardTitle>
                        <Badge variant="outline" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">LIVE</Badge>
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
                          <div className="text-2xl font-bold text-white">{liveData.activeTasks}</div>
                          <p className="text-xs text-red-300">
                            -5% from last week
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium text-white">Revenue</CardTitle>
                        <Badge variant="outline" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">LIVE</Badge>
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
                          <div className="text-2xl font-bold text-white">${liveData.revenue.toLocaleString()}</div>
                          <p className="text-xs text-green-300">
                            +23% from last month
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <CardTitle className="text-sm font-medium text-white">Conversion Rate</CardTitle>
                        <Badge variant="outline" className="text-xs bg-green-500/20 text-green-300 border-green-500/30">LIVE</Badge>
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
                          <div className="text-2xl font-bold text-white">{liveData.conversionRate.toFixed(1)}%</div>
                          <p className="text-xs text-green-300">
                            +0.5% from last month
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                </div>
                
                {/* Area Chart */}
                <Card className="border-0 shadow-lg">
                  <div className="space-y-4 p-6">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-white">Revenue Overview</h3>
                      <p className="text-muted-foreground">
                        Monthly revenue and customer growth for the current year
                      </p>
                    </div>
                    <div className="h-[300px]">
                      <ChartContainer config={chartConfig}>
                        <AreaChart
                          accessibilityLayer
                          data={chartData}
                          margin={{
                            left: 12,
                            right: 12,
                            top: 12,
                            bottom: 12,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                          <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fill: '#9CA3AF' }}
                          />
                          <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tick={{ fill: '#9CA3AF' }}
                          />
                          <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                          />
                          <defs>
                            <linearGradient id="fillRevenue" x1="0" y1="0" x2="0" y2="1">
                              <stop
                                offset="5%"
                                stopColor="var(--color-revenue)"
                                stopOpacity={0.8}
                              />
                              <stop
                                offset="95%"
                                stopColor="var(--color-revenue)"
                                stopOpacity={0.1}
                              />
                            </linearGradient>
                          </defs>
                          <Area
                            dataKey="revenue"
                            type="monotone"
                            fill="url(#fillRevenue)"
                            fillOpacity={0.4}
                            stroke="var(--color-revenue)"
                            strokeWidth={3}
                            dot={{ fill: 'var(--color-revenue)', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, stroke: 'var(--color-revenue)', strokeWidth: 2 }}
                          />
                        </AreaChart>
                      </ChartContainer>
                    </div>
                  </div>
                </Card>
                
                {/* Tasks Table */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-white">Recent Tasks</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          Your latest task updates and activities
                        </CardDescription>
                      </div>
                      <Button variant="outline" size="sm" className="border-white/10 text-white hover:bg-white/10">
                        View All Tasks
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-white/10">
                          <TableHead className="text-white">Task</TableHead>
                          <TableHead className="text-white">Customer</TableHead>
                          <TableHead className="text-white">Status</TableHead>
                          <TableHead className="text-white">Priority</TableHead>
                          <TableHead className="text-white">Last Updated</TableHead>
                          <TableHead className="text-white">Assignee</TableHead>
                          <TableHead className="w-[50px]"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {tasks.map((task) => (
                          <TableRow key={task.id} className="border-white/10 hover:bg-white/5">
                            <TableCell className="font-medium text-white">{task.title}</TableCell>
                            <TableCell className="text-muted-foreground">{task.customer}</TableCell>
                            <TableCell>{getStatusBadge(task.status)}</TableCell>
                            <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                            <TableCell className="text-muted-foreground">{task.lastStatusChange}</TableCell>
                            <TableCell className="text-muted-foreground">{task.assignee}</TableCell>
                            <TableCell>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" className="h-8 w-8 p-0 hover:bg-white/10">
                                    <MoreHorizontal className="h-4 w-4 text-white" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end" className="bg-white/10 backdrop-blur-sm border-white/20">
                                  <DropdownMenuItem className="text-white hover:bg-white/10">Edit</DropdownMenuItem>
                                  <DropdownMenuItem className="text-white hover:bg-white/10">View Details</DropdownMenuItem>
                                  <DropdownMenuItem className="text-white hover:bg-white/10">Mark Complete</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </main>
          </div>
        </div>
      </div>
    )
  }