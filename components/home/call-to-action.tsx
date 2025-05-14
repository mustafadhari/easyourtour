import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-16 bg-amber-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Let us help you create memories that will last a lifetime. Our travel experts are ready to craft your perfect
          getaway.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/tours">
            <Button size="lg" className="bg-white text-amber-600 hover:bg-gray-100">
              Explore Tours
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-amber-700">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
