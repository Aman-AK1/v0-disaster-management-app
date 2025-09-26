import { DonationCard } from "@/components/donation-card"
import { QuickLinks } from "@/components/quick-links"
import { WeatherCard } from "@/components/weather-card"

export function Sidebar() {
  return (
    <div className="space-y-4 sm:space-y-6">
      <DonationCard />
      <QuickLinks />
      <WeatherCard />
    </div>
  )
}
