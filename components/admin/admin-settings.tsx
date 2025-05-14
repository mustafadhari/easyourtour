"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

export default function AdminSettings() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Settings saved successfully!")
    }, 1500)
  }

  return (
    <Tabs defaultValue="general" className="w-full">
      <TabsList className="grid w-full grid-cols-4 mb-8">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
      </TabsList>

      <TabsContent value="general">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" defaultValue="Wanderlux Travel" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-email">Contact Email</Label>
                <Input id="contact-email" type="email" defaultValue="info@wanderlux.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-phone">Contact Phone</Label>
                <Input id="contact-phone" defaultValue="+1 (888) 123-4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea
                  id="address"
                  defaultValue="123 Travel Street, Suite 100&#10;New York, NY 10001&#10;United States"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="social-facebook">Facebook URL</Label>
                <Input id="social-facebook" defaultValue="https://facebook.com/wanderlux" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="social-instagram">Instagram URL</Label>
                <Input id="social-instagram" defaultValue="https://instagram.com/wanderlux" />
              </div>

              <Button type="submit" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="appearance">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="logo">Logo</Label>
                <div className="flex items-center gap-4">
                  <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500">Logo Preview</span>
                  </div>
                  <Input id="logo" type="file" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="favicon">Favicon</Label>
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Icon</span>
                  </div>
                  <Input id="favicon" type="file" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex items-center gap-2">
                  <Input id="primary-color" type="color" defaultValue="#F59E0B" className="w-16 h-10" />
                  <Input defaultValue="#F59E0B" className="w-32" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex items-center gap-2">
                  <Input id="secondary-color" type="color" defaultValue="#0F172A" className="w-16 h-10" />
                  <Input defaultValue="#0F172A" className="w-32" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" />
                <Label htmlFor="dark-mode">Enable Dark Mode Option</Label>
              </div>

              <Button type="submit" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Email Notifications</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Booking Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive an email when a new booking is made</p>
                  </div>
                  <Switch id="new-booking" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Inquiry Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive an email when a new inquiry is submitted</p>
                  </div>
                  <Switch id="new-inquiry" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive an email when a payment is processed</p>
                  </div>
                  <Switch id="payment" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">System Updates</p>
                    <p className="text-sm text-muted-foreground">Receive emails about system updates and maintenance</p>
                  </div>
                  <Switch id="system-updates" />
                </div>
              </div>

              <div className="space-y-2 pt-4 border-t">
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" defaultValue="admin@wanderlux.com" />
                <p className="text-sm text-muted-foreground">All notifications will be sent to this email address</p>
              </div>

              <Button type="submit" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-lg font-medium mb-4">Change Password</h3>

              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>

              <div className="pt-4 border-t space-y-4">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Enable Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account by requiring a verification code
                    </p>
                  </div>
                  <Switch id="two-factor" />
                </div>
              </div>

              <Button type="submit" className="bg-amber-600 hover:bg-amber-700" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
