"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Send, Bot, User, MessageCircle, HelpCircle, AlertTriangle, MapPin, Phone } from "lucide-react"

export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      content: "Hello! I'm your GLOF Tracker assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const quickQuestions = [
    {
      icon: <AlertTriangle className="h-4 w-4" />,
      text: "What is GLOF?",
      category: "Information",
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: "Check my area risk level",
      category: "Risk Assessment",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: "Emergency contacts",
      category: "Emergency",
    },
    {
      icon: <HelpCircle className="h-4 w-4" />,
      text: "Evacuation procedures",
      category: "Safety",
    },
  ]

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return

    const userMessage = {
      id: messages.length + 1,
      type: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: "bot",
        content: getBotResponse(inputMessage),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)

    setInputMessage("")
  }

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("glof") || lowerMessage.includes("what is")) {
      return "GLOF stands for Glacial Lake Outburst Flood. It occurs when water dammed by a glacier or moraine is released suddenly, causing devastating floods downstream. These events are particularly dangerous in mountainous regions like the Himalayas."
    } else if (lowerMessage.includes("risk") || lowerMessage.includes("area")) {
      return "To check your area's risk level, I need your location. You can also visit our Map page to see current risk zones. Lachen and surrounding areas are currently under high risk alert."
    } else if (lowerMessage.includes("emergency") || lowerMessage.includes("contact")) {
      return "Emergency contacts: NDRF: +91-11-2671-9101, Sikkim SDMA: +91-3592-280-101. For immediate emergencies, call 112. Visit our Organizations page for more contacts."
    } else if (lowerMessage.includes("evacuation") || lowerMessage.includes("safety")) {
      return "Evacuation procedures: 1) Stay calm and follow official instructions 2) Move to higher ground immediately 3) Avoid bridges and low-lying areas 4) Take emergency supplies if time permits 5) Stay tuned to official communications."
    } else {
      return "I'm here to help with GLOF-related questions, risk assessments, emergency procedures, and safety information. You can ask me about evacuation procedures, emergency contacts, or current risk levels in your area."
    }
  }

  const handleQuickQuestion = (question) => {
    setInputMessage(question)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">GLOF Assistant</h1>
          <p className="text-muted-foreground">Get instant help with disaster preparedness and safety information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Quick Questions Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto p-3 bg-transparent"
                    onClick={() => handleQuickQuestion(question.text)}
                  >
                    <div className="flex items-start space-x-2">
                      {question.icon}
                      <div>
                        <div className="text-sm font-medium">{question.text}</div>
                        <Badge variant="secondary" className="text-xs mt-1">
                          {question.category}
                        </Badge>
                      </div>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <Card className="h-[600px] flex flex-col">
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <Bot className="h-5 w-5 mr-2 text-blue-500" />
                  GLOF Assistant
                  <Badge variant="secondary" className="ml-2">
                    Online
                  </Badge>
                </CardTitle>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === "bot" ? (
                          <Bot className="h-4 w-4 mt-0.5 text-blue-500" />
                        ) : (
                          <User className="h-4 w-4 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm">{message.content}</p>
                          <p className="text-xs opacity-70 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me about GLOF risks, safety procedures, or emergency contacts..."
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={handleSendMessage} size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
