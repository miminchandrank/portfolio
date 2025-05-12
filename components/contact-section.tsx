"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin } from "lucide-react"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">Contact Me</h2>

      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl text-purple-700">Get in Touch</CardTitle>
          <CardDescription>Feel free to reach out to me for any inquiries or opportunities.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Mail className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <a href="mailto:miminchandrankalari@gmail.com" className="text-gray-800 hover:text-purple-700">
                miminchandrankalari@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Phone className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <a href="tel:+916282546402" className="text-gray-800 hover:text-purple-700">
                +91 6282546402
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Linkedin className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/miminchandrank"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-purple-700"
              >
                linkedin.com/in/miminchandrank
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default ContactSection
