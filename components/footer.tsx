import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 py-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <p className="text-center text-sm text-gray-600 md:text-left">
            © {new Date().getFullYear()} Mimin Chandran K. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/miminchandrank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-purple-700"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/miminchandrank"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 transition-colors hover:text-purple-700"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            href="mailto:miminchandrankalari@gmail.com"
            className="text-gray-600 transition-colors hover:text-purple-700"
          >
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
