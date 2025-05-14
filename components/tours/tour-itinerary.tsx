import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function TourItinerary() {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Bali & Welcome Dinner",
      description:
        "Upon arrival at Denpasar International Airport, you'll be greeted by your private guide and transferred to your luxury villa in Seminyak. Settle in and relax before enjoying a welcome dinner at a beachfront restaurant with traditional Balinese performances.",
    },
    {
      day: 2,
      title: "Temples & Cultural Immersion",
      description:
        "After breakfast, visit the iconic Tanah Lot Temple perched on a rocky outcrop in the sea. Continue to the Royal Temple of Mengwi and the sacred Monkey Forest Sanctuary. Enjoy lunch at a local restaurant overlooking rice terraces before returning to your villa for an evening at leisure.",
    },
    {
      day: 3,
      title: "Ubud Art & Crafts",
      description:
        "Explore the cultural heart of Bali in Ubud. Visit art galleries, the traditional market, and witness local artisans at work. Participate in a private Balinese cooking class where you'll learn to prepare authentic dishes using fresh local ingredients. Enjoy your creations for lunch.",
    },
    {
      day: 4,
      title: "Mount Batur Sunrise Trek",
      description:
        "Early morning departure for a guided trek up Mount Batur to witness a spectacular sunrise from the summit. Enjoy breakfast with views of Lake Batur before descending. In the afternoon, relax with a traditional Balinese spa treatment at your villa.",
    },
    {
      day: 5,
      title: "Island Hopping & Snorkeling",
      description:
        "Board a private boat for a day of island hopping around Nusa Penida, Nusa Lembongan, and Nusa Ceningan. Snorkel in crystal clear waters teeming with marine life, visit hidden beaches, and enjoy a gourmet picnic lunch on a secluded beach.",
    },
    {
      day: 6,
      title: "Besakih Temple & Eastern Bali",
      description:
        "Visit Bali's Mother Temple, Besakih, on the slopes of Mount Agung. Continue to the water palace of Tirta Gangga and the traditional village of Tenganan to witness ancient Balinese customs. Lunch at a local restaurant with panoramic views of the rice terraces.",
    },
    {
      day: 7,
      title: "Beach Day & Sunset Cruise",
      description:
        "Enjoy a leisurely morning at your villa or the beach. In the afternoon, board a luxury catamaran for a sunset cruise along Bali's southern coast. Enjoy canapés and champagne while watching the sun set over the Indian Ocean, followed by a farewell dinner onboard.",
    },
    {
      day: 8,
      title: "Departure Day",
      description:
        "After breakfast, enjoy some free time for last-minute shopping or relaxation. Transfer to Denpasar International Airport for your departure flight, taking with you unforgettable memories of your Bali adventure.",
    },
  ]

  return (
    <Accordion type="single" collapsible className="w-full">
      {itinerary.map((day) => (
        <AccordionItem key={day.day} value={`day-${day.day}`}>
          <AccordionTrigger className="hover:text-amber-600">
            <div className="flex items-center">
              <span className="bg-amber-100 text-amber-800 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                {day.day}
              </span>
              <span>{day.title}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-11">
            <p className="text-muted-foreground">{day.description}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
