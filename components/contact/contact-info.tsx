import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-5 w-5 text-amber-600 mt-1 mr-3" />
        <div>
          <h3 className="font-semibold mb-1">Our Address</h3>
          <p className="text-muted-foreground">
            123 Travel Street, Suite 100
            <br />
            New York, NY 10001
            <br />
            United States
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Phone className="h-5 w-5 text-amber-600 mt-1 mr-3" />
        <div>
          <h3 className="font-semibold mb-1">Phone Numbers</h3>
          <p className="text-muted-foreground">
            Main: +1 (888) 123-4567
            <br />
            Customer Support: +1 (888) 765-4321
            <br />
            Emergency Travel Assistance: +1 (888) 999-8888
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className="h-5 w-5 text-amber-600 mt-1 mr-3" />
        <div>
          <h3 className="font-semibold mb-1">Email Addresses</h3>
          <p className="text-muted-foreground">
            General Inquiries: info@wanderlux.com
            <br />
            Bookings: bookings@wanderlux.com
            <br />
            Customer Support: support@wanderlux.com
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <Clock className="h-5 w-5 text-amber-600 mt-1 mr-3" />
        <div>
          <h3 className="font-semibold mb-1">Business Hours</h3>
          <p className="text-muted-foreground">
            Monday - Friday: 9:00 AM - 6:00 PM EST
            <br />
            Saturday: 10:00 AM - 4:00 PM EST
            <br />
            Sunday: Closed
            <br />
            <span className="text-amber-600 font-medium">24/7 Emergency Travel Support Available</span>
          </p>
        </div>
      </div>
    </div>
  )
}
