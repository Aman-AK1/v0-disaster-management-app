"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Share2, Languages, Phone, ThumbsUp, ThumbsDown, Info } from "lucide-react"
import { useUser } from "@/components/user-context"

export function AlertCard() {
  const { user } = useUser()
  const [feedback, setFeedback] = useState(null)

  const handleFeedback = (type) => {
    setFeedback(type)
  }

  return (
    <Card className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-800">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold text-red-800 dark:text-red-200">Hello {user.name}</CardTitle>
            <CardDescription className="text-red-700 dark:text-red-300 text-lg">{user.location}</CardDescription>
          </div>
          <Badge variant="destructive" className="text-sm">
            <AlertTriangle className="h-4 w-4 mr-1" />
            High Risk
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="bg-red-600 text-white p-4 rounded-lg">
          <p className="font-semibold text-lg mb-2">Currently You are in red zone</p>
          <Button variant="link" className="text-white underline p-0 h-auto font-normal">
            know more
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
            <Languages className="h-4 w-4 mr-2" />
            Translate
          </Button>
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none bg-transparent">
            <Phone className="h-4 w-4 mr-2" />
            Dial & Don't
          </Button>
        </div>

        {/* Feedback Section */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">Is the information Helpful?</p>
            <div className="flex space-x-2">
              <Button
                variant={feedback === "helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("helpful")}
              >
                <ThumbsUp className="h-4 w-4" />
              </Button>
              <Button
                variant={feedback === "not-helpful" ? "default" : "outline"}
                size="sm"
                onClick={() => handleFeedback("not-helpful")}
              >
                <ThumbsDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {feedback && <p className="text-sm text-muted-foreground mt-2">Thank you for your feedback!</p>}
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 dark:bg-blue-950/20 p-3 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start space-x-2">
            <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div className="text-sm">
              <p className="font-medium text-blue-800 dark:text-blue-200">Safety Tip</p>
              <p className="text-blue-700 dark:text-blue-300">
                Keep emergency supplies ready and stay tuned to official updates. Avoid low-lying areas near water
                bodies.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
