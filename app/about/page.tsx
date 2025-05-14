import type { Metadata } from "next"
import PageHeader from "@/components/page-header"
import TeamMembers from "@/components/about/team-members"
import CompanyValues from "@/components/about/company-values"
import OurStory from "@/components/about/our-story"

export const metadata: Metadata = {
  title: "About Us | Wanderlux",
  description: "Learn about our company, mission, values, and the team behind Wanderlux Travel.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader title="About Wanderlux" description="Crafting unforgettable travel experiences since 2010" />

      <div className="mt-12">
        <OurStory />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Our Values</h2>
        <CompanyValues />
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Meet Our Team</h2>
        <TeamMembers />
      </div>
    </div>
  )
}
