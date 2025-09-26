import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t mt-8">
      <div className="container mx-auto px-4 py-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-start space-x-4">
              <MessageSquare className="h-5 w-5 text-primary mt-1" />
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-semibold text-sm">Send us your feedback</h3>
                  <p className="text-xs text-muted-foreground">Help us improve GLOF Tracker with your suggestions</p>
                </div>
                <div className="flex space-x-2">
                  <Textarea
                    placeholder="Share your thoughts, report issues, or suggest improvements..."
                    className="flex-1 min-h-[60px] text-sm"
                  />
                  <Button size="sm" className="self-end">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          <p>© 2025 GLOF Tracker. Built for disaster preparedness and community safety.</p>
        </div>
      </div>
    </footer>
  )
}
