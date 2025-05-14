import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Us | Wanderlux",
  description: "Get in touch with our travel experts for inquiries, bookings, or assistance.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Contact Us" description="We'd love to hear from you" />

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
          <ContactInfo />

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Find Us</h3>
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  )
}
