"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { PlusCircle, Save, Trash2, Upload, Edit, Eye } from "lucide-react"

export default function ContentManagement() {
  const [activeTab, setActiveTab] = useState("pages")
  const [selectedPage, setSelectedPage] = useState<string | null>(null)
  const [selectedSection, setSelectedSection] = useState<string | null>(null)

  // Mock data for pages
  const pages = [
    { id: "home", name: "Home Page" },
    { id: "about", name: "About Us" },
    { id: "tours", name: "Tours" },
    { id: "destinations", name: "Destinations" },
    { id: "contact", name: "Contact" },
  ]

  // Mock data for sections
  const sections = [
    { id: "hero", name: "Hero Section", page: "home" },
    { id: "popular-tours", name: "Popular Tours", page: "home" },
    { id: "testimonials", name: "Testimonials", page: "home" },
    { id: "about-intro", name: "Introduction", page: "about" },
    { id: "team", name: "Our Team", page: "about" },
  ]

  // Mock data for media
  const media = [
    { id: "img1", name: "Hero Background.jpg", type: "image", size: "1.2 MB", date: "2023-05-15" },
    { id: "img2", name: "Destination Paris.jpg", type: "image", size: "0.8 MB", date: "2023-05-10" },
    { id: "vid1", name: "Promo Video.mp4", type: "video", size: "15.6 MB", date: "2023-04-28" },
    { id: "doc1", name: "Travel Guide.pdf", type: "document", size: "2.3 MB", date: "2023-05-02" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Content Management</h2>
          <p className="text-muted-foreground">Manage website content, pages, and media files</p>
        </div>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New Content
        </Button>
      </div>

      <Tabs defaultValue="pages" className="space-y-4" onValueChange={(value) => setActiveTab(value)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pages">Pages & Sections</TabsTrigger>
          <TabsTrigger value="media">Media Library</TabsTrigger>
          <TabsTrigger value="seo">SEO Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-1">
              <CardHeader>
                <CardTitle>Website Pages</CardTitle>
                <CardDescription>Select a page to edit its content</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pages.map((page) => (
                    <div
                      key={page.id}
                      className={`p-3 rounded-md cursor-pointer flex justify-between items-center ${selectedPage === page.id ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"}`}
                      onClick={() => setSelectedPage(page.id)}
                    >
                      <span>{page.name}</span>
                      <Edit className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add New Page
                  </Button>
                </div>
              </CardContent>
            </Card>

            {selectedPage && (
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Page Sections</CardTitle>
                  <CardDescription>
                    Manage sections for {pages.find((p) => p.id === selectedPage)?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {sections
                      .filter((section) => section.page === selectedPage)
                      .map((section) => (
                        <div
                          key={section.id}
                          className={`p-3 rounded-md cursor-pointer flex justify-between items-center ${selectedSection === section.id ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"}`}
                          onClick={() => setSelectedSection(section.id)}
                        >
                          <span>{section.name}</span>
                          <div className="flex space-x-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            <Edit className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    <Button variant="outline" className="w-full mt-4">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      Add New Section
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedSection && (
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Edit Section Content</CardTitle>
                  <CardDescription>
                    {sections.find((s) => s.id === selectedSection)?.name} on{" "}
                    {pages.find((p) => p.id === selectedPage)?.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="section-title">Section Title</Label>
                      <Input id="section-title" defaultValue={sections.find((s) => s.id === selectedSection)?.name} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="section-content">Content</Label>
                      <Textarea
                        id="section-content"
                        rows={5}
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="section-image">Section Image</Label>
                      <div className="flex items-center space-x-2">
                        <div className="h-16 w-24 bg-muted rounded-md flex items-center justify-center">
                          <Upload className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <Button variant="outline" size="sm">
                          <Upload className="mr-2 h-4 w-4" />
                          Upload
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Switch id="section-active" defaultChecked />
                      <Label htmlFor="section-active">Active</Label>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button variant="outline">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                      <Button>
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="media" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Media Library</CardTitle>
                  <CardDescription>Manage images, videos, and documents</CardDescription>
                </div>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Files
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <div className="flex-1">
                    <Input placeholder="Search media files..." />
                  </div>
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="File type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Files</SelectItem>
                      <SelectItem value="image">Images</SelectItem>
                      <SelectItem value="video">Videos</SelectItem>
                      <SelectItem value="document">Documents</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {media.map((item) => (
                    <div key={item.id} className="border rounded-md p-2 hover:border-primary/50 cursor-pointer">
                      <div className="aspect-video bg-muted rounded-md mb-2 flex items-center justify-center">
                        {item.type === "image" && (
                          <img
                            src="/placeholder.svg?height=100&width=200"
                            alt={item.name}
                            className="h-full w-full object-cover rounded-md"
                          />
                        )}
                        {item.type === "video" && <div className="text-muted-foreground">Video</div>}
                        {item.type === "document" && <div className="text-muted-foreground">PDF</div>}
                      </div>
                      <div className="text-sm font-medium truncate">{item.name}</div>
                      <div className="text-xs text-muted-foreground flex justify-between">
                        <span>{item.size}</span>
                        <span>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="site-title">Website Title</Label>
                  <Input id="site-title" defaultValue="EasyOurTour - Premium Travel Experiences" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="meta-description">Meta Description</Label>
                  <Textarea
                    id="meta-description"
                    rows={3}
                    defaultValue="EasyOurTour offers premium travel experiences, tour packages, flight bookings, and visa services. Discover the world with our expert travel planning."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="keywords">Keywords</Label>
                  <Input
                    id="keywords"
                    defaultValue="travel, tours, flights, hotels, visa, vacation, holiday packages"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="og-title">Open Graph Title</Label>
                    <Input id="og-title" defaultValue="EasyOurTour - Travel in Style" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter-title">Twitter Title</Label>
                    <Input id="twitter-title" defaultValue="EasyOurTour - Travel in Style" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="og-description">Social Media Description</Label>
                  <Textarea
                    id="og-description"
                    rows={2}
                    defaultValue="Discover premium travel experiences with EasyOurTour. Book your dream vacation today!"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Social Media Image</Label>
                  <div className="flex items-center space-x-2">
                    <div className="h-20 w-36 bg-muted rounded-md flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=80&width=144"
                        alt="Social media preview"
                        className="h-full w-full object-cover rounded-md"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  </div>
                </div>

                <div className="pt-4">
                  <Button>
                    <Save className="mr-2 h-4 w-4" />
                    Save SEO Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
