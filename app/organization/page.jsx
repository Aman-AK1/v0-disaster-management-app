import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Globe, Users, Clock } from "lucide-react"

export default function OrganizationPage() {
  const organizations = [
    {
      id: 1,
      name: "National Disaster Response Force (NDRF)",
      type: "Government",
      description: "Primary disaster response and rescue operations",
      contact: {
        phone: "+91-11-2671-9101",
        email: "ndrf@gov.in",
        website: "https://ndrf.gov.in",
      },
      location: "New Delhi, India",
      availability: "24/7",
      specialization: ["Rescue Operations", "Emergency Response", "Disaster Relief"],
    },
    {
      id: 2,
      name: "Sikkim State Disaster Management Authority",
      type: "State Government",
      description: "State-level disaster management and coordination",
      contact: {
        phone: "+91-3592-280-101",
        email: "ssdma@sikkim.gov.in",
        website: "https://ssdma.sikkim.gov.in",
      },
      location: "Gangtok, Sikkim",
      availability: "24/7",
      specialization: ["Local Coordination", "Early Warning", "Community Preparedness"],
    },
    {
      id: 3,
      name: "Indian Red Cross Society",
      type: "NGO",
      description: "Humanitarian aid and disaster relief services",
      contact: {
        phone: "+91-11-2371-6441",
        email: "info@indianredcross.org",
        website: "https://indianredcross.org",
      },
      location: "Pan India",
      availability: "24/7",
      specialization: ["Medical Aid", "Relief Distribution", "Rehabilitation"],
    },
    {
      id: 4,
      name: "Geological Survey of India",
      type: "Government",
      description: "Geological monitoring and hazard assessment",
      contact: {
        phone: "+91-33-2286-2177",
        email: "gsi@gov.in",
        website: "https://gsi.gov.in",
      },
      location: "Kolkata, India",
      availability: "Business Hours",
      specialization: ["Geological Assessment", "Risk Analysis", "Technical Support"],
    },
  ]

  const getTypeColor = (type) => {
    switch (type) {
      case "Government":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "State Government":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "NGO":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Emergency Organizations</h1>
          <p className="text-muted-foreground">Contact information for disaster response organizations</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {organizations.map((org) => (
            <Card key={org.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{org.name}</CardTitle>
                    <Badge className={getTypeColor(org.type)}>{org.type}</Badge>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {org.availability}
                  </div>
                </div>
                <CardDescription className="text-base">{org.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Contact Information */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-mono text-sm">{org.contact.phone}</span>
                    <Button size="sm" variant="outline">
                      Call
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{org.contact.email}</span>
                    <Button size="sm" variant="outline">
                      Email
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm truncate">{org.contact.website}</span>
                    <Button size="sm" variant="outline">
                      Visit
                    </Button>
                  </div>

                  <div className="flex items-center space-x-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{org.location}</span>
                  </div>
                </div>

                {/* Specializations */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium">Specializations:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {org.specialization.map((spec, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
