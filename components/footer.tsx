import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <div className="relative h-12 w-48 bg-white/10 backdrop-blur-sm p-2 rounded-lg">
                <Image src="/images/logo.png" alt="EasyOurTour" fill className="object-contain" />
              </div>
            </div>
            <p className="mb-6 text-gray-400 max-w-md">
              Making your travel easy and affordable since 2010. We specialize in crafting unforgettable journeys
              tailored to your preferences and budget.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-brand-teal transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/destinations" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="/experiences" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Travel Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/flights" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Flight Booking
                </Link>
              </li>
              <li>
                <Link href="/hotels" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Hotel Reservations
                </Link>
              </li>
              <li>
                <Link href="/visa" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Visa Assistance
                </Link>
              </li>
              <li>
                <Link href="/travel-insurance" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Travel Insurance
                </Link>
              </li>
              <li>
                <Link href="/transportation" className="text-gray-400 hover:text-brand-teal transition-colors">
                  Transportation
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-brand-teal mt-1" />
                <span className="text-gray-400">
                  123 Travel Street, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-brand-teal" />
                <span className="text-gray-400">+1 (888) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-brand-teal" />
                <span className="text-gray-400">info@easyourtour.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} EasyOurTour. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white text-sm">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
