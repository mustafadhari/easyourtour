import { Card, CardContent } from "@/components/ui/card"
import { Heart, Globe, Sparkles, Users, ShieldCheck, Leaf } from "lucide-react"

export default function CompanyValues() {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-amber-600" />,
      title: "Passion",
      description: "We're passionate about travel and dedicated to sharing the world's wonders with our clients.",
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: "Global Perspective",
      description: "We embrace diversity and celebrate the unique cultures, traditions, and landscapes of our world.",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-amber-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, from the first inquiry to the journey home.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Personalization",
      description:
        "We believe that every traveler is unique, and every journey should reflect their individual preferences.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-amber-600" />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical practices in all our business dealings.",
    },
    {
      icon: <Leaf className="h-8 w-8 text-amber-600" />,
      title: "Sustainability",
      description:
        "We're committed to responsible travel practices that respect and preserve the environments and communities we visit.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {values.map((value, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="mb-4">{value.icon}</div>
            <h3 className="text-lg font-bold mb-2">{value.title}</h3>
            <p className="text-muted-foreground">{value.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
