"use client"

import * as React from "react"
import { Download, Calendar, Target, Users as UsersIcon, ShoppingCart, TrendingUp, TrendingDown, DollarSign, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Bar, BarChart, PieChart, Pie, Cell } from "recharts"

export default function AnalyticsPage() {
  // Revenue data for line chart
  const revenueData = [
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

  // Sales data for bar chart
  const salesData = [
    { product: "Product A", sales: 4000, revenue: 120000 },
    { product: "Product B", sales: 3000, revenue: 90000 },
    { product: "Product C", sales: 2000, revenue: 80000 },
    { product: "Product D", sales: 2780, revenue: 110000 },
    { product: "Product E", sales: 1890, revenue: 75000 },
  ]

  // Customer distribution data for pie chart
  const customerDistributionData = [
    { name: "New Customers", value: 45, color: "#8884d8" },
    { name: "Returning Customers", value: 35, color: "#82ca9d" },
    { name: "Inactive Customers", value: 20, color: "#ffc658" },
  ]

  // Top performing customers
  const topCustomers = [
    {
      id: 1,
      name: "John Doe",
      company: "Tech Corp",
      totalSpent: 15420,
      orders: 23,
      lastOrder: "2 days ago"
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "Design Studio",
      totalSpent: 8750,
      orders: 15,
      lastOrder: "1 week ago"
    },
    {
      id: 3,
      name: "Alice Brown",
      company: "E-commerce Plus",
      totalSpent: 22100,
      orders: 34,
      lastOrder: "3 days ago"
    },
    {
      id: 4,
      name: "Bob Johnson",
      company: "Marketing Pro",
      totalSpent: 3200,
      orders: 8,
      lastOrder: "1 month ago"
    },
    {
      id: 5,
      name: "Charlie Wilson",
      company: "Startup Inc",
      totalSpent: 5600,
      orders: 12,
      lastOrder: "Yesterday"
    },
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
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-3))",
    },
    revenue2: {
      label: "Revenue",
      color: "hsl(var(--chart-4))",
    },
  }

  const stats = {
    totalRevenue: 1250000,
    totalCustomers: 1234,
    conversionRate: 3.2,
    averageOrderValue: 450
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
                  <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                  <p className="text-muted-foreground">
                    Comprehensive analytics and insights for your business.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export Report
                  </Button>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                    <UsersIcon className="h-4 w-4 text-muted-foreground" />
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
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <Target className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.conversionRate}%</div>
                    <p className="text-xs text-muted-foreground">
                      +0.5% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Avg Order Value</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${stats.averageOrderValue}</div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Charts */}
              <Tabs defaultValue="revenue" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="revenue">Revenue</TabsTrigger>
                  <TabsTrigger value="sales">Sales</TabsTrigger>
                  <TabsTrigger value="customers">Customers</TabsTrigger>
                </TabsList>
                
                <TabsContent value="revenue">
                  <Card>
                    <CardHeader>
                      <CardTitle>Revenue Overview</CardTitle>
                      <CardDescription>
                        Monthly revenue and customer growth trends
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80 w-full">
                        <LineChart data={revenueData}>
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
                </TabsContent>
                
                <TabsContent value="sales">
                  <Card>
                    <CardHeader>
                      <CardTitle>Product Sales Performance</CardTitle>
                      <CardDescription>
                        Sales volume and revenue by product
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ChartContainer config={chartConfig} className="h-80 w-full">
                        <BarChart data={salesData}>
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="product" 
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
                          <Bar
                            dataKey="sales"
                            fill="var(--color-sales)"
                            radius={[4, 4, 0, 0]}
                          />
                          <Bar
                            dataKey="revenue"
                            fill="var(--color-revenue2)"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ChartContainer>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="customers">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Customer Distribution</CardTitle>
                        <CardDescription>
                          Breakdown of customer types
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer config={chartConfig} className="h-80 w-full">
                          <PieChart>
                            <Pie
                              data={customerDistributionData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                              {customerDistributionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <ChartTooltip content={<ChartTooltipContent />} />
                          </PieChart>
                        </ChartContainer>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Performing Customers</CardTitle>
                        <CardDescription>
                          Your most valuable customers
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topCustomers.map((customer) => (
                            <div key={customer.id} className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                  {customer.name.split(' ').map(n => n[0]).join('')}
                                </div>
                                <div>
                                  <p className="font-medium">{customer.name}</p>
                                  <p className="text-sm text-muted-foreground">{customer.company}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">${customer.totalSpent.toLocaleString()}</p>
                                <p className="text-sm text-muted-foreground">{customer.orders} orders</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}