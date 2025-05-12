"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, Github, Mail } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-120px)] flex-col items-center justify-center py-20 text-center"
    >
      <div className="mb-8 overflow-hidden rounded-full border-4 border-purple-200 shadow-lg">
        <Image
          src="/profile.png"
          alt="Mimin Chandran K"
          width={200}
          height={200}
          className="h-[200px] w-[200px] object-cover"
          priority
        />
      </div>
      <h1 className="mb-2 text-4xl font-bold text-gray-800 md:text-5xl">Mimin Chandran K</h1>
      <p className="mb-8 text-xl text-gray-600">Data Scientist | AI/ML Engineer | Data Analyst</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          className="gap-2 bg-purple-600 hover:bg-purple-700"
          onClick={() => {
            window.open("https://github.com/miminchandrank?tab=repositories", "_blank")
          }}
        >
          <Github size={18} />
          View My Projects
        </Button>
        <Button
          variant="outline"
          className="gap-2 border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700"
          onClick={() => {
            const contactSection = document.getElementById("contact")
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" })
            }
          }}
        >
          <Mail size={18} />
          Contact Me
        </Button>
        <Button
          variant="secondary"
          className="gap-2"
          onClick={() => {
            // Create a link element
            const link = document.createElement("a")
            link.href = "/resume.pdf"
            link.download = "Mimin_Chandran_K_Resume.pdf" // Set the download attribute
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }}
        >
          <Download size={18} />
          Download My Resume
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
