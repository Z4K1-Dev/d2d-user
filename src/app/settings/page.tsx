"use client"

import * as React from "react"
import { Bell, Search, Settings, User, Home, BarChart3, Users, ClipboardList, Settings as SettingsIcon, TrendingUp, TrendingDown, DollarSign, Activity, CheckCircle, Clock, AlertCircle, MoreHorizontal, Plus, Filter, Download, Shield, Database, Palette, Bell as BellIcon, Mail, Key } from "lucide-react"
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
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
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
                    <SidebarMenuButton asChild isActive>
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
                <SidebarMenuButton asChild>
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
                  placeholder="Search settings..."
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
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                  Manage your account settings and preferences.
                </p>
              </div>
              
              <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                
                <TabsContent value="general">
                  <Card>
                    <CardHeader>
                      <CardTitle>General Settings</CardTitle>
                      <CardDescription>
                        Manage your general application preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="dark-mode">Dark Mode</Label>
                            <p className="text-sm text-muted-foreground">
                              Enable dark mode for the application.
                            </p>
                          </div>
                          <Switch id="dark-mode" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue placeholder="Select language" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                              <SelectItem value="it">Italian</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="utc">
                            <SelectTrigger>
                              <SelectValue placeholder="Select timezone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="utc">UTC</SelectItem>
                              <SelectItem value="est">Eastern Time</SelectItem>
                              <SelectItem value="cst">Central Time</SelectItem>
                              <SelectItem value="mst">Mountain Time</SelectItem>
                              <SelectItem value="pst">Pacific Time</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="date-format">Date Format</Label>
                          <Select defaultValue="mm-dd-yyyy">
                            <SelectTrigger>
                              <SelectValue placeholder="Select date format" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mm-dd-yyyy">MM/DD/YYYY</SelectItem>
                              <SelectItem value="dd-mm-yyyy">DD/MM/YYYY</SelectItem>
                              <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Changes</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="account">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>
                        Update your account information and preferences.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-20 w-20">
                            <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <Button variant="outline">Change Avatar</Button>
                            <p className="text-sm text-muted-foreground mt-2">
                              JPG, GIF or PNG. Max size of 1MB.
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First Name</Label>
                            <Input id="first-name" defaultValue="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last Name</Label>
                            <Input id="last-name" defaultValue="Doe" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" defaultValue="john.doe@example.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" type="tel" defaultValue="+1 234 567 8900" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input id="company" defaultValue="Tech Corp" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="bio">Bio</Label>
                          <Input id="bio" placeholder="Tell us about yourself..." />
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Update Profile</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notification Settings</CardTitle>
                      <CardDescription>
                        Configure how you receive notifications.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="email-notifications">Email Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications via email.
                            </p>
                          </div>
                          <Switch id="email-notifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="push-notifications">Push Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive push notifications in browser.
                            </p>
                          </div>
                          <Switch id="push-notifications" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="task-reminders">Task Reminders</Label>
                            <p className="text-sm text-muted-foreground">
                              Get reminded about upcoming tasks.
                            </p>
                          </div>
                          <Switch id="task-reminders" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="customer-updates">Customer Updates</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive updates about customer activities.
                            </p>
                          </div>
                          <Switch id="customer-updates" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="marketing-emails">Marketing Emails</Label>
                            <p className="text-sm text-muted-foreground">
                              Receive marketing and promotional emails.
                            </p>
                          </div>
                          <Switch id="marketing-emails" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="notification-frequency">Notification Frequency</Label>
                          <Select defaultValue="immediate">
                            <SelectTrigger>
                              <SelectValue placeholder="Select frequency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="daily">Daily Digest</SelectItem>
                              <SelectItem value="weekly">Weekly Digest</SelectItem>
                              <SelectItem value="monthly">Monthly Digest</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Save Preferences</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                      <CardDescription>
                        Manage your account security and password.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="current-password">Current Password</Label>
                          <Input id="current-password" type="password" />
                        </div>
                        
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm Password</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                            <p className="text-sm text-muted-foreground">
                              Add an extra layer of security to your account.
                            </p>
                          </div>
                          <Switch id="two-factor" />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="login-notifications">Login Notifications</Label>
                            <p className="text-sm text-muted-foreground">
                              Get notified when someone logs into your account.
                            </p>
                          </div>
                          <Switch id="login-notifications" defaultChecked />
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Active Sessions</Label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Chrome on Windows</p>
                                <p className="text-sm text-muted-foreground">New York, USA • Current session</p>
                              </div>
                              <Badge variant="default">Current</Badge>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Safari on iPhone</p>
                                <p className="text-sm text-muted-foreground">Los Angeles, USA • 2 hours ago</p>
                              </div>
                              <Button variant="outline" size="sm">Revoke</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Cancel</Button>
                        <Button>Update Security</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="billing">
                  <Card>
                    <CardHeader>
                      <CardTitle>Billing Settings</CardTitle>
                      <CardDescription>
                        Manage your subscription and billing information.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h3 className="font-semibold">Current Plan</h3>
                              <p className="text-sm text-muted-foreground">Professional Plan</p>
                            </div>
                            <Badge variant="default">Active</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>Monthly Price</span>
                              <span className="font-medium">$49/month</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Next Billing Date</span>
                              <span className="font-medium">March 15, 2024</span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <Button variant="outline">Change Plan</Button>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Payment Method</Label>
                          <div className="p-4 border rounded-lg">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="flex h-10 w-16 items-center justify-center rounded bg-blue-100 text-blue-800">
                                  <span className="text-xs font-medium">VISA</span>
                                </div>
                                <div>
                                  <p className="font-medium">•••• •••• •••• 4242</p>
                                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">Edit</Button>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Billing History</Label>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Professional Plan - March 2024</p>
                                <p className="text-sm text-muted-foreground">Paid on March 1, 2024</p>
                              </div>
                              <span className="font-medium">$49.00</span>
                            </div>
                            <div className="flex items-center justify-between p-3 border rounded-lg">
                              <div>
                                <p className="font-medium">Professional Plan - February 2024</p>
                                <p className="text-sm text-muted-foreground">Paid on February 1, 2024</p>
                              </div>
                              <span className="font-medium">$49.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button variant="outline">Download Invoices</Button>
                        <Button>Update Billing</Button>
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