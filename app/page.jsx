import { Header } from "@/components/header"
import { AlertCard } from "@/components/alert-card"
import { Sidebar } from "@/components/sidebar"
import { Footer } from "@/components/footer"
import { ChatbotButton } from "@/components/chatbot-button"
import { LatestUpdates } from "@/components/latest-updates"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-4 sm:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Alert Card - spans 2 columns on desktop */}
          <div className="lg:col-span-2 order-1 space-y-4 sm:space-y-6">
            <AlertCard />
            <LatestUpdates />
          </div>

          {/* Sidebar - spans 1 column, appears after alert on mobile */}
          <div className="lg:col-span-1 order-2">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
      <ChatbotButton />
    </div>
  )
}
