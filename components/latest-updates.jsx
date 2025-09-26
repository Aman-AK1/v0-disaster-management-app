import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, Info, CheckCircle } from "lucide-react"

export function LatestUpdates() {
  const updates = [
    {
      id: 1,
      title: "GLOF Risk Assessment Updated",
      description: "Latest satellite imagery shows increased water levels in Lachen glacial lake",
      time: "2 hours ago",
      type: "alert",
      priority: "high",
    },
    {
      id: 2,
      title: "Weather Advisory Issued",
      description: "Heavy rainfall expected in the next 48 hours, increasing flood risk",
      time: "4 hours ago",
      type: "weather",
      priority: "medium",
    },
    {
      id: 3,
      title: "Evacuation Route Cleared",
      description: "Alternative evacuation route via Thangu valley is now accessible",
      time: "6 hours ago",
      type: "info",
      priority: "low",
    },
    {
      id: 4,
      title: "Emergency Supplies Distributed",
      description: "Relief materials distributed to 150 families in high-risk areas",
      time: "8 hours ago",
      type: "success",
      priority: "low",
    },
  ]

  const getIcon = (type) => {
    switch (type) {
      case "alert":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "weather":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      case "info":
        return <Info className="h-4 w-4 text-blue-500" />
      case "success":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Info className="h-4 w-4" />
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="h-5 w-5 mr-2" />
          Latest Updates
        </CardTitle>
        <CardDescription>Recent developments and alerts in your area</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {updates.map((update) => (
            <div
              key={update.id}
              className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-accent/50 transition-colors"
            >
              <div className="mt-0.5">{getIcon(update.type)}</div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium">{update.title}</h4>
                  <Badge className={getPriorityColor(update.priority)} variant="secondary">
                    {update.priority}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{update.description}</p>
                <p className="text-xs text-muted-foreground flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  {update.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
