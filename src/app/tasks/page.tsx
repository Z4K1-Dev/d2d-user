"use client"

import * as React from "react"
import { Plus, Filter, Calendar, User as UserIcon, CheckCircle, Clock, AlertCircle, MoreHorizontal, ClipboardList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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

export default function TasksPage() {
  const tasks = [
    {
      id: 1,
      title: "Follow up with John Doe",
      customer: "John Doe",
      status: "completed",
      priority: "high",
      dueDate: "2024-01-15",
      assignee: "You",
      description: "Discuss new project requirements and timeline"
    },
    {
      id: 2,
      title: "Send proposal to ABC Corp",
      customer: "ABC Corp",
      status: "in-progress",
      priority: "high",
      dueDate: "2024-01-20",
      assignee: "Sarah",
      description: "Prepare and send comprehensive proposal for web development"
    },
    {
      id: 3,
      title: "Schedule product demo",
      customer: "XYZ Inc",
      status: "pending",
      priority: "medium",
      dueDate: "2024-01-25",
      assignee: "Mike",
      description: "Schedule and prepare product demonstration for potential client"
    },
    {
      id: 4,
      title: "Update CRM documentation",
      customer: "Internal",
      status: "in-progress",
      priority: "low",
      dueDate: "2024-01-30",
      assignee: "You",
      description: "Update internal CRM documentation and user guides"
    },
    {
      id: 5,
      title: "Review Q4 sales report",
      customer: "Management",
      status: "pending",
      priority: "medium",
      dueDate: "2024-02-01",
      assignee: "Lisa",
      description: "Analyze and review Q4 sales performance report"
    },
    {
      id: 6,
      title: "Client onboarding call",
      customer: "New Client LLC",
      status: "pending",
      priority: "high",
      dueDate: "2024-01-18",
      assignee: "You",
      description: "Conduct onboarding call for new client setup"
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

  const stats = {
    totalTasks: 156,
    completedTasks: 89,
    inProgressTasks: 42,
    pendingTasks: 25
  }

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status)
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
                  <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
                  <p className="text-muted-foreground">
                    Manage your tasks and track progress across all projects.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
              
              {/* Task Stats */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Tasks</CardTitle>
                    <ClipboardList className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.totalTasks}</div>
                    <p className="text-xs text-muted-foreground">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.completedTasks}</div>
                    <p className="text-xs text-muted-foreground">
                      +18% from last month
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">In Progress</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.inProgressTasks}</div>
                    <p className="text-xs text-muted-foreground">
                      -5% from last week
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Pending</CardTitle>
                    <AlertCircle className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stats.pendingTasks}</div>
                    <p className="text-xs text-muted-foreground">
                      +8% from last week
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Task Tabs */}
              <Tabs defaultValue="all" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <Card>
                    <CardHeader>
                      <CardTitle>All Tasks</CardTitle>
                      <CardDescription>
                        View and manage all your tasks in one place.
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
                              <TableHead>Due Date</TableHead>
                              <TableHead>Assignee</TableHead>
                              <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {tasks.map((task) => (
                              <TableRow key={task.id}>
                                <TableCell className="font-medium">
                                  <div>
                                    <div className="font-medium">{task.title}</div>
                                    <div className="text-sm text-muted-foreground">{task.description}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{task.customer}</TableCell>
                                <TableCell>{getStatusBadge(task.status)}</TableCell>
                                <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{task.dueDate}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                      <AvatarFallback className="text-xs">{task.assignee[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{task.assignee}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                      <DropdownMenuItem>Change Status</DropdownMenuItem>
                                      <DropdownMenuItem>Reassign</DropdownMenuItem>
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
                </TabsContent>
                
                <TabsContent value="pending">
                  <Card>
                    <CardHeader>
                      <CardTitle>Pending Tasks</CardTitle>
                      <CardDescription>
                        Tasks that are waiting to be started.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Task</TableHead>
                              <TableHead>Customer</TableHead>
                              <TableHead>Priority</TableHead>
                              <TableHead>Due Date</TableHead>
                              <TableHead>Assignee</TableHead>
                              <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getTasksByStatus("pending").map((task) => (
                              <TableRow key={task.id}>
                                <TableCell className="font-medium">
                                  <div>
                                    <div className="font-medium">{task.title}</div>
                                    <div className="text-sm text-muted-foreground">{task.description}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{task.customer}</TableCell>
                                <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{task.dueDate}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                      <AvatarFallback className="text-xs">{task.assignee[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{task.assignee}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                      <DropdownMenuItem>Start Task</DropdownMenuItem>
                                      <DropdownMenuItem>Reassign</DropdownMenuItem>
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
                </TabsContent>
                
                <TabsContent value="in-progress">
                  <Card>
                    <CardHeader>
                      <CardTitle>In Progress Tasks</CardTitle>
                      <CardDescription>
                        Tasks that are currently being worked on.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Task</TableHead>
                              <TableHead>Customer</TableHead>
                              <TableHead>Priority</TableHead>
                              <TableHead>Due Date</TableHead>
                              <TableHead>Assignee</TableHead>
                              <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getTasksByStatus("in-progress").map((task) => (
                              <TableRow key={task.id}>
                                <TableCell className="font-medium">
                                  <div>
                                    <div className="font-medium">{task.title}</div>
                                    <div className="text-sm text-muted-foreground">{task.description}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{task.customer}</TableCell>
                                <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{task.dueDate}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                      <AvatarFallback className="text-xs">{task.assignee[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{task.assignee}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>Edit Task</DropdownMenuItem>
                                      <DropdownMenuItem>Mark Complete</DropdownMenuItem>
                                      <DropdownMenuItem>Reassign</DropdownMenuItem>
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
                </TabsContent>
                
                <TabsContent value="completed">
                  <Card>
                    <CardHeader>
                      <CardTitle>Completed Tasks</CardTitle>
                      <CardDescription>
                        Tasks that have been successfully completed.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="rounded-md border">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Task</TableHead>
                              <TableHead>Customer</TableHead>
                              <TableHead>Priority</TableHead>
                              <TableHead>Completed Date</TableHead>
                              <TableHead>Assignee</TableHead>
                              <TableHead className="w-[50px]"></TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {getTasksByStatus("completed").map((task) => (
                              <TableRow key={task.id}>
                                <TableCell className="font-medium">
                                  <div>
                                    <div className="font-medium">{task.title}</div>
                                    <div className="text-sm text-muted-foreground">{task.description}</div>
                                  </div>
                                </TableCell>
                                <TableCell>{task.customer}</TableCell>
                                <TableCell>{getPriorityBadge(task.priority)}</TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-muted-foreground" />
                                    <span>{task.dueDate}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <Avatar className="h-6 w-6">
                                      <AvatarFallback className="text-xs">{task.assignee[0]}</AvatarFallback>
                                    </Avatar>
                                    <span>{task.assignee}</span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" className="h-8 w-8 p-0">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                      <DropdownMenuItem>View Details</DropdownMenuItem>
                                      <DropdownMenuItem>Reopen Task</DropdownMenuItem>
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
                </TabsContent>
              </Tabs>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}