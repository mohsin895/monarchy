"use client"

import { useEffect, useState } from "react";

import { fetchApi } from "@/lib/api";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { Shield, Loader2 } from "lucide-react"
import Image from "next/image"
import profile from "../../public/profile.jpg"

const goals = [
  "Emergency Fund",
  "College or Private School",
  "Paying off Debt",
  "New Car",
  "Marriage",
  "Vacation",
  "Family Support",
  "Charity",
  "Buying a Home",
  "Becoming an entrepreneur",
  "Savings for Retirement",
  "Something Out of the Box",
]

interface MultiStepFormModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MultiStepFormModal({ open, onOpenChange }: MultiStepFormModalProps) {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  
  })
  const [setting, setSetting] = useState<any>(null);

  useEffect(() => {
    async function getSettings() {
      const res = await fetchApi("setting");
      if (res?.data) setSetting(res.data);
    }
    getSettings();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
      
      // Log the data being sent for debugging
      console.log("Submitting form data:", formData)

      const response = await fetch(`${API_BASE_URL}/monarch/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      })

      // Check if response is JSON
      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Server returned non-JSON response. The API endpoint might not exist or is misconfigured.")
      }

      const data = await response.json()

      if (response.ok) {
        toast({
          title: "✅ Success!",
          description: "Your information has been submitted successfully.",
        })

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
      
        })
     
        onOpenChange(false)
      } else {
        toast({
          title: "❌ Error",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      
      let errorMessage = "Please check your connection or try again later."
      
      if (error instanceof Error) {
        if (error.message.includes("non-JSON response")) {
          errorMessage = "The server endpoint is not properly configured. Please contact support."
        } else if (error.message.includes("Failed to fetch")) {
          errorMessage = "Network error. Please check your internet connection."
        }
      }

      toast({
        title: "⚠️ Submission Failed",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isStepValid = () => {
    // Check all required fields
    const hasFullName = formData.name.trim() !== ""
    const hasPhoneNumber = formData.phone.trim() !== ""
    const hasValidEmail = formData.email.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    
    return hasFullName && hasPhoneNumber && hasValidEmail
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="!max-w-[95%] sm:!max-w-[600px] lg:!max-w-[900px] bg-black border-zinc-800 p-0 rounded-xl overflow-hidden">
        <DialogTitle className="sr-only">Investment Expert Consultation Form</DialogTitle>
        <div className="flex flex-col lg:flex-row h-full">
         
          {/* Right Form Section */}
          <div className="flex-1 bg-black p-6 sm:p-8 overflow-y-auto max-h-[90vh]">
            <div className="max-w-xl mx-auto">
              {/* Form Steps */}
              <div className="space-y-6">
                <div className="space-y-6">
                  <h2 className="text-white text-2xl font-semibold">What is your full name?</h2>
                  <p className="text-zinc-400 text-sm">Enter your full name below.</p>
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-white text-sm">
                      Your full name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                    />
                  </div>
                </div>

                {/* Step 2 */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber" className="text-white text-sm">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white text-sm">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 h-12 rounded-lg focus:border-emerald-400 focus:ring-emerald-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Navigation Button */}
                <div className="pt-4">
                  <Button
                    onClick={handleSubmit}
                    disabled={!isStepValid() || isSubmitting}
                    className="w-full h-12 bg-emerald-400 hover:bg-emerald-500 text-black font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>

                {/* Privacy Notice */}
                <div className="flex items-start gap-2 pt-4 border-t border-zinc-800">
                  <Shield className="w-4 h-4 text-zinc-500 mt-0.5 flex-shrink-0" />
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Your data is fully encrypted and only you have access. Privacy guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}