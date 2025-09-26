import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Heart, Users, Target } from "lucide-react"

export function DonationCard() {
  const donationData = {
    title: "Funds For Disaster Relief",
    raised: 75000,
    goal: 100000,
    donors: 234,
    daysLeft: 15,
  }

  const progressPercentage = (donationData.raised / donationData.goal) * 100

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Heart className="h-5 w-5 mr-2 text-green-600" />
          {donationData.title}
        </CardTitle>
        <CardDescription className="text-green-700 dark:text-green-300">
          Support disaster relief efforts in affected areas
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">₹{donationData.raised.toLocaleString()}</span>
            <span className="text-muted-foreground">₹{donationData.goal.toLocaleString()}</span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
          <p className="text-xs text-muted-foreground">{progressPercentage.toFixed(0)}% of goal reached</p>
        </div>

        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Users className="h-4 w-4 mr-1 text-blue-600" />
              <span className="font-semibold">{donationData.donors}</span>
            </div>
            <p className="text-xs text-muted-foreground">Donors</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-center">
              <Target className="h-4 w-4 mr-1 text-orange-600" />
              <span className="font-semibold">{donationData.daysLeft}</span>
            </div>
            <p className="text-xs text-muted-foreground">Days Left</p>
          </div>
        </div>

        <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Donate Now</Button>
      </CardContent>
    </Card>
  )
}
