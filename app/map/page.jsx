import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, AlertTriangle, Shield, Info } from "lucide-react"

export default function MapPage() {
  const riskZones = [
    {
      id: 1,
      name: "Lachen Valley",
      location: "Sikkim",
      riskLevel: "High",
      status: "Active Alert",
      coordinates: "27.7°N, 88.5°E",
      population: "2,500",
      lastUpdate: "2 hours ago",
    },
    {
      id: 2,
      name: "Thangu Valley",
      location: "Sikkim",
      riskLevel: "Medium",
      status: "Watch",
      coordinates: "27.8°N, 88.6°E",
      population: "1,200",
      lastUpdate: "4 hours ago",
    },
    {
      id: 3,
      name: "Yumthang Valley",
      location: "Sikkim",
      riskLevel: "Low",
      status: "Normal",
      coordinates: "27.9°N, 88.7°E",
      population: "800",
      lastUpdate: "6 hours ago",
    },
  ]

  const getRiskColor = (level) => {
    switch (level) {
      case "High":
        return "bg-red-500 text-white"
      case "Medium":
        return "bg-yellow-500 text-black"
      case "Low":
        return "bg-green-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "Active Alert":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "Watch":
        return <Info className="h-4 w-4 text-yellow-500" />
      case "Normal":
        return <Shield className="h-4 w-4 text-green-500" />
      default:
        return <MapPin className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Risk Zone Map</h1>
          <p className="text-muted-foreground">Monitor disaster risk zones and current threat levels</p>
        </div>

        {/* Map Placeholder */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                <p className="text-sm text-muted-foreground mt-2">Real-time GLOF risk zone visualization</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Zones List */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {riskZones.map((zone) => (
            <Card key={zone.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{zone.name}</CardTitle>
                  {getStatusIcon(zone.status)}
                </div>
                <CardDescription>{zone.location}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Risk Level:</span>
                  <Badge className={getRiskColor(zone.riskLevel)}>{zone.riskLevel}</Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="font-medium">{zone.status}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Coordinates:</span>
                    <span className="font-mono text-xs">{zone.coordinates}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population:</span>
                    <span className="font-medium">{zone.population}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Update:</span>
                    <span className="text-xs">{zone.lastUpdate}</span>
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
