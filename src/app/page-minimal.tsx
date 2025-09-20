"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is a test card</p>
        </CardContent>
      </Card>
    </div>
  )
}