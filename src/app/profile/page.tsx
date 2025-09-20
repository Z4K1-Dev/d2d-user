"use client"

import * as React from "react"
import { Bell, Search, Settings, User, Home, BarChart3, Users, ClipboardList, Settings as SettingsIcon, TrendingUp, TrendingDown, DollarSign, Activity, CheckCircle, Clock, AlertCircle, MoreHorizontal, Plus, Filter, Download, Shield, Mail, Phone, MapPin, Calendar, Edit, Camera } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/theme-toggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    company: "Tech Corp",
    position: "Senior Sales Manager",
    location: "New York, USA",
    joinDate: "January 15, 2023",
    bio: "Experienced sales professional with over 8 years in B2B sales and customer relationship management. Passionate about helping businesses grow through strategic partnerships and excellent customer service.",
    stats: {
      totalDeals: 156,
      successRate: 78,
      totalRevenue: 1250000,
      customerSatisfaction: 4.8
    }
  }

  const recentActivity = [
    {
      id: 1,
      action: "Updated customer profile",
      customer: "Alice Brown",
      timestamp: "2 hours ago",
      type: "update"
    },
    {
      id: 2,
      action: "Completed task",
      customer: "John Doe",
      timestamp: "5 hours ago",
      type: "complete"
    },
    {
      id: 3,
      action: "Created new task",
      customer: "XYZ Inc",
      timestamp: "1 day ago",
      type: "create"
    },
    {
      id: 4,
      action: "Sent proposal",
      customer: "ABC Corp",
      timestamp: "2 days ago",
      type: "send"
    },
    {
      id: 5,
      action: "Added new customer",
      customer: "Startup Inc",
      timestamp: "3 days ago",
      type: "add"
    },
  ]

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "update":
        return <Edit className="h-4 w-4 text-blue-500" />
      case "complete":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "create":
        return <Plus className="h-4 w-4 text-purple-500" />
      case "send":
        return <Mail className="h-4 w-4 text-orange-500" />
      case "add":
        return <User className="h-4 w-4 text-indigo-500" />
      default:
        return <Activity className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center gap-2 px-2 py-2">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <span className="text-lg font-semibold">CRM Dashboard</span>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/">
                        <Home className="h-4 w-4" />
                        <span>Dashboard</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/customers">
                        <Users className="h-4 w-4" />
                        <span>Customers</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/tasks">
                        <ClipboardList className="h-4 w-4" />
                        <span>Tasks</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/analytics">
                        <BarChart3 className="h-4 w-4" />
                        <span>Analytics</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            
            <SidebarGroup>
              <SidebarGroupLabel>Settings</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <a href="/settings">
                        <SettingsIcon className="h-4 w-4" />
                        <span>Settings</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive>
                  <a href="/profile">
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset>
          <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger className="-ml-2" />
            
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search profile..."
                  className="w-full bg-muted/50 pl-10"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
              
              <ThemeToggle />
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          
          <main className="flex-1 overflow-auto p-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
                  <p className="text-muted-foreground">
                    Manage your personal information and account settings.
                  </p>
                </div>
                <Button>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </div>
              
              <Tabs defaultValue="overview" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid gap-6 md:grid-cols-3">
                    <Card className="md:col-span-1">
                      <CardHeader>
                        <CardTitle>Profile Information</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex flex-col items-center space-y-4">
                          <div className="relative">
                            <Avatar className="h-32 w-32">
                              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                              <AvatarFallback className="text-2xl">JD</AvatarFallback>
                            </Avatar>
                            <Button
                              size="icon"
                              className="absolute -bottom-2 -right-2 rounded-full"
                            >
                              <Camera className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-center">
                            <h3 className="text-xl font-semibold">{userProfile.name}</h3>
                            <p className="text-muted-foreground">{userProfile.position}</p>
                            <p className="text-sm text-muted-foreground">{userProfile.company}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{userProfile.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{userProfile.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">{userProfile.location}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm">Joined {userProfile.joinDate}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <div className="md:col-span-2 space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle>About</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{userProfile.bio}</p>
                        </CardContent>
                      </Card>
                      
                      <Card>
                        <CardHeader>
                          <CardTitle>Performance Stats</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-primary">{userProfile.stats.totalDeals}</div>
                              <div className="text-sm text-muted-foreground">Total Deals</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-green-600">{userProfile.stats.successRate}%</div>
                              <div className="text-sm text-muted-foreground">Success Rate</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">${(userProfile.stats.totalRevenue / 1000).toFixed(0)}K</div>
                              <div className="text-sm text-muted-foreground">Total Revenue</div>
                            </div>
                            <div className="text-center p-4 border rounded-lg">
                              <div className="text-2xl font-bold text-orange-600">{userProfile.stats.customerSatisfaction}/5</div>
                              <div className="text-sm text-muted-foreground">Satisfaction</div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>
                        Your recent actions and activities in the system.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity) => (
                          <div key={activity.id} className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="flex-shrink-0">
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="font-medium">{activity.action}</p>
                                <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
                              </div>
                              <p className="text-sm text-muted-foreground">{activity.customer}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Profile Settings</CardTitle>
                      <CardDescription>
                        Update your profile information and preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue={userProfile.name.split(' ')[0]} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue={userProfile.name.split(' ')[1]} />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={userProfile.email} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" defaultValue={userProfile.phone} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" defaultValue={userProfile.company} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="position">Position</Label>
                        <Input id="position" defaultValue={userProfile.position} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" defaultValue={userProfile.location} />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea 
                          id="bio" 
                          placeholder="Tell us about yourself..." 
                          defaultValue={userProfile.bio}
                          rows={4}
                        />
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}