import { Award, Clock, CreditCard, HeartHandshake, ShieldCheck, Users } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="h-10 w-10 text-amber-600" />,
      title: "Award-Winning Service",
      description: "Recognized for excellence in luxury travel experiences and customer satisfaction.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-amber-600" />,
      title: "100% Financial Protection",
      description: "Your payments are secure with our comprehensive financial protection guarantee.",
    },
    {
      icon: <Users className="h-10 w-10 text-amber-600" />,
      title: "Expert Travel Consultants",
      description: "Our team of experienced travel professionals craft perfect itineraries tailored to you.",
    },
    {
      icon: <HeartHandshake className="h-10 w-10 text-amber-600" />,
      title: "Personalized Experiences",
      description: "Every journey is customized to your preferences, interests, and travel style.",
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-600" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance throughout your journey for complete peace of mind.",
    },
    {
      icon: <CreditCard className="h-10 w-10 text-amber-600" />,
      title: "Flexible Payment Options",
      description: "Convenient payment plans and options to suit your financial preferences.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Wanderlux</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to making your travel dreams a reality with unparalleled service and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
