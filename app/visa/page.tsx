import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import VisaCountryList from "@/components/visa/visa-country-list"
import VisaServices from "@/components/visa/visa-services"
import VisaInquiryForm from "@/components/visa/visa-inquiry-form"

export const metadata: Metadata = {
  title: "Visa Assistance | Wanderlux",
  description: "Professional visa assistance services for hassle-free travel planning.",
}

export default function VisaPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="Visa Assistance Services" description="Expert guidance for all your visa requirements" />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <VisaServices />
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Countries We Provide Visa Services For</h2>
            <VisaCountryList />
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-xl shadow-lg p-6 border sticky top-24">
            <h3 className="text-xl font-bold mb-4">Visa Assistance Inquiry</h3>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and our visa experts will get back to you within 24 hours.
            </p>
            <VisaInquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
