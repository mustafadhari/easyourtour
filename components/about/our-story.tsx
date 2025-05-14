import Image from "next/image"

export default function OurStory() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">Our Story</h2>
        <div className="space-y-4">
          <p>
            Founded in 2010, Wanderlux began with a simple mission: to create extraordinary travel experiences that
            transform the way people see the world. What started as a small team of passionate travelers has grown into
            a leading luxury travel agency with a global presence.
          </p>
          <p>
            Our journey began when our founder, after years of working in the traditional travel industry, recognized a
            gap in the market for truly personalized, high-end travel experiences. Frustrated by the one-size-fits-all
            approach of many agencies, she assembled a team of like-minded travel enthusiasts who shared her vision of
            crafting journeys as unique as the travelers themselves.
          </p>
          <p>
            Over the years, we've expanded our offerings from a handful of destinations to a comprehensive portfolio of
            experiences spanning all seven continents. What hasn't changed is our commitment to excellence, attention to
            detail, and passion for creating unforgettable memories for our clients.
          </p>
          <p>
            Today, Wanderlux stands as a testament to the power of following your passion. Our team of expert travel
            consultants, many of whom have lived or worked in our featured destinations, bring unparalleled knowledge
            and insight to every itinerary we create.
          </p>
        </div>
      </div>
      <div className="relative h-[400px] rounded-lg overflow-hidden">
        <Image src="/placeholder.svg?height=800&width=600" alt="Wanderlux team" fill className="object-cover" />
      </div>
    </div>
  )
}
