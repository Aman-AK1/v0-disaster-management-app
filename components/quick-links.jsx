import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Shield, Phone, MapPin, Users } from "lucide-react"

export function QuickLinks() {
  const links = [
    {
      title: "Disaster Survival Guide",
      description: "Essential safety tips and procedures",
      icon: <BookOpen className="h-5 w-5" />,
      href: "/survival-guide",
    },
    {
      title: "Emergency Contacts",
      description: "Important phone numbers",
      icon: <Phone className="h-5 w-5" />,
      href: "/organization",
    },
    {
      title: "Evacuation Routes",
      description: "Safe paths and shelter locations",
      icon: <MapPin className="h-5 w-5" />,
      href: "/map",
    },
    {
      title: "Community Support",
      description: "Connect with local volunteers",
      icon: <Users className="h-5 w-5" />,
      href: "/community",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          Quick Links
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-2">
        {links.map((link, index) => (
          <Button key={index} variant="ghost" className="w-full justify-start h-auto p-3 hover:bg-accent" asChild>
            <a href={link.href}>
              <div className="flex items-start space-x-3">
                <div className="text-primary mt-0.5">{link.icon}</div>
                <div className="text-left">
                  <p className="font-medium text-sm">{link.title}</p>
                  <p className="text-xs text-muted-foreground">{link.description}</p>
                </div>
              </div>
            </a>
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
