"use client"

import { Send } from "lucide-react"
import { useState } from "react"

export default function FeedbackPage() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ subject, message })
    // Reset form
    setSubject("")
    setMessage("")
    // Show success message
    alert("Thank you for your feedback!")
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Share Your Feedback</h2>
      <p className="text-muted-foreground">
        We value your input to help us improve our platform.
      </p>
      <div className="rounded-lg bg-card p-6">
        <h3 className="mb-4 text-lg font-medium">Feedback Form</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <input 
              id="subject" 
              type="text" 
              className="rounded-md border border-input bg-background px-3 py-2"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="rounded-md border border-input bg-background px-3 py-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button 
            type="submit"
            className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  )
} 