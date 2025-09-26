import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Droplets, Wind, Thermometer, Eye, Gauge } from "lucide-react"

export function WeatherCard() {
  const weatherData = {
    location: "Lachen, Sikkim",
    temperature: 30,
    condition: "Mostly Cloudy",
    high: 33,
    low: 26,
    humidity: 78,
    windSpeed: 12,
    visibility: 8,
    pressure: 1013,
    uvIndex: 6,
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center">
          <Cloud className="h-5 w-5 mr-2" />
          Weather Info
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Main Weather Display */}
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-4xl font-bold">{weatherData.temperature}°</span>
            <div className="text-left">
              <p className="text-sm font-medium">{weatherData.location}</p>
              <p className="text-xs text-muted-foreground">{weatherData.condition}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            H:{weatherData.high}° L:{weatherData.low}°
          </p>
        </div>

        {/* Weather Details Grid */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <p className="font-medium">{weatherData.humidity}%</p>
              <p className="text-xs text-muted-foreground">Humidity</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Wind className="h-4 w-4 text-gray-500" />
            <div>
              <p className="font-medium">{weatherData.windSpeed} km/h</p>
              <p className="text-xs text-muted-foreground">Wind</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Eye className="h-4 w-4 text-green-500" />
            <div>
              <p className="font-medium">{weatherData.visibility} km</p>
              <p className="text-xs text-muted-foreground">Visibility</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-purple-500" />
            <div>
              <p className="font-medium">{weatherData.pressure} mb</p>
              <p className="text-xs text-muted-foreground">Pressure</p>
            </div>
          </div>
        </div>

        {/* Weather Alert */}
        <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center space-x-2">
            <Thermometer className="h-4 w-4 text-yellow-600" />
            <div>
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Weather Advisory</p>
              <p className="text-xs text-yellow-700 dark:text-yellow-300">
                High humidity may increase GLOF risk. Monitor conditions closely.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
