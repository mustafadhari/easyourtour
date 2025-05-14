import { Card, CardContent } from "@/components/ui/card"
import { FileText, Clock, CheckCircle, Users, Globe, ShieldCheck } from "lucide-react"

export default function VisaServices() {
  const services = [
    {
      icon: <FileText className="h-8 w-8 text-amber-600" />,
      title: "Document Preparation",
      description:
        "We help you prepare all necessary documents according to the specific requirements of each country.",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-600" />,
      title: "Expedited Processing",
      description:
        "Need your visa quickly? Our expedited service ensures you get your visa in the shortest possible time.",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-amber-600" />,
      title: "Application Review",
      description: "Our experts thoroughly review your application to minimize the risk of rejection.",
    },
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Group Visa Processing",
      description: "Special handling for family or group applications to ensure everyone travels together.",
    },
    {
      icon: <Globe className="h-8 w-8 text-amber-600" />,
      title: "Multiple Country Visas",
      description:
        "Planning to visit multiple countries? We can help coordinate visa applications for your entire itinerary.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-amber-600" />,
      title: "Visa Consultation",
      description:
        "Not sure which visa you need? Our consultants provide personalized advice based on your travel plans.",
    },
  ]

  return (
    <div>
      <p className="text-lg mb-8">
        Our professional visa assistance services take the stress out of travel planning. Whether you need a tourist
        visa, business visa, or work permit, our experienced team will guide you through the entire process.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
