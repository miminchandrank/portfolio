"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="sticky top-4 z-50 mx-auto my-0 max-w-4xl rounded-full bg-white/80 px-6 py-3 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-purple-800">
          My Portfolio
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-6 md:flex">
          <button onClick={() => scrollToSection("home")} className="font-medium text-gray-700 hover:text-purple-700">
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-medium text-gray-700 hover:text-purple-700"
          >
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="font-medium text-gray-700 hover:text-purple-700">
            Skills & Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium text-gray-700 hover:text-purple-700"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-4 pb-4 md:hidden">
          <button onClick={() => scrollToSection("home")} className="font-medium text-gray-700 hover:text-purple-700">
            Home
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="font-medium text-gray-700 hover:text-purple-700"
          >
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="font-medium text-gray-700 hover:text-purple-700">
            Skills & Experience
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium text-gray-700 hover:text-purple-700"
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
