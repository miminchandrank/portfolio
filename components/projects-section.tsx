"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  link: string
  tags: string[]
}

const projects: Project[] = [
  {
    id: 2,
    title: "Document Intelligence Suite",
    description: "A RAG-based PDF chatbot using LLaMA3, FAISS, and Google GenAI for precise semantic querying.",
    link: "https://github.com/miminchandrank/Document-Intelligence-Suite",
    tags: ["RAG", "LLaMA3", "FAISS", "GenAI"],
  },
  {
    id: 3,
    title: "CSV Data Analyst (RAG)",
    description: "An AI chatbot leveraging Retrieval-Augmented Generation for querying CSV data via natural language.",
    link: "https://github.com/miminchandrank/Csv_data-analyst-",
    tags: ["RAG", "OpenAI", "Pandas"],
  },
  {
    id: 4,
    title: "Real-time Face Emotion Detection",
    description: "A live system using OpenCV and CNNs to detect facial emotions with high accuracy.",
    link: "https://github.com/miminchandrank/Real-time-Face-Emotion-Detection",
    tags: ["OpenCV", "CNN", "TensorFlow"],
  },
  {
    id: 5,
    title: "Real-time Face Mask Detection",
    description: "A surveillance system using OpenCV, Haar Cascades, and CNNs to detect face masks with 95%+ accuracy.",
    link: "https://github.com/miminchandrank/Realtime-Face-mask-Detection",
    tags: ["OpenCV", "CNN", "Computer Vision"],
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "A content-based recommendation system using cosine similarity to suggest movies to users.",
    link: "https://github.com/miminchandrank/Movie-recommender",
    tags: ["Recommendation System", "NLP", "Cosine Similarity"],
  },
  {
    id: 7,
    title: "Health Insurance Cost Prediction",
    description: "XGBoost and Linear Regression models to estimate policy costs with over 90% accuracy.",
    link: "https://github.com/miminchandrank/ml-project-premium_prediction-",
    tags: ["XGBoost", "Regression", "Machine Learning"],
  },
  {
    id: 8,
    title: "Churn Prediction AI",
    description: "A binary classifier with Scikit-learn and TensorFlow that reached an F1 score of 82%.",
    link: "https://github.com/miminchandrank/customerchurnguard",
    tags: ["Classification", "TensorFlow", "Scikit-learn"],
  },
  {
    id: 9,
    title: "FastAPI Excel Processor",
    description: "A FastAPI-based tool for processing and analyzing Excel files efficiently.",
    link: "https://github.com/miminchandrank/FastAPI-Excel-Processor",
    tags: ["FastAPI", "Excel", "Data Processing"],
  },
  {
    id: 10,
    title: "Car Sales Analysis Dashboard",
    description: "Interactive dashboard for analyzing car sales data and trends.",
    link: "https://github.com/miminchandrank/Car-Sales-Dashboard",
    tags: ["Dashboard", "Data Visualization", "Analytics"],
  },
  {
    id: 1,
    title: "Luxentrix Ventures – Interactive Business Intelligence Dashboard",
    description:
      "A dynamic and visually compelling Power BI dashboard designed to empower Luxentrix Ventures with data-driven decision-making across three key areas of their business operations.",
    link: "https://github.com/miminchandrank/Luxentrix-Ventures---Dashboard",
    tags: ["Power BI", "Business Intelligence", "Data Visualization", "Dashboard"],
  },
  {
    id: 11,
    title: "Aira Ecommerce Dashboard",
    description: "Comprehensive dashboard for ecommerce analytics and performance tracking.",
    link: "https://github.com/miminchandrank/Aira-Ecommerce-Dashboard",
    tags: ["Ecommerce", "Dashboard", "Business Intelligence"],
  },
  {
    id: 12,
    title: "Sales Performance Dashboard",
    description: "Dashboard for tracking and analyzing sales performance metrics.",
    link: "https://github.com/miminchandrank/Sales-Performance-Dashboard",
    tags: ["Sales", "Dashboard", "Performance Metrics"],
  },
  {
    id: 13,
    title: "Netflix Analytics Dashboard",
    description: "Dashboard for analyzing Netflix content and viewing patterns.",
    link: "https://github.com/miminchandrank/-Netflix-Data-Analytics",
    tags: ["Netflix", "Analytics", "Data Visualization"],
  },
]

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(6)

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, projects.length))
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">My Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, visibleProjects).map((project) => (
          <Card key={project.id} className="flex h-full flex-col transition-all duration-300 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl text-purple-700">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="rounded-full bg-purple-100 px-3 py-1 text-xs text-purple-700">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2" variant="outline" onClick={() => window.open(project.link, "_blank")}>
                <Github size={16} />
                View on GitHub
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {visibleProjects < projects.length && (
        <div className="mt-10 flex justify-center">
          <Button
            onClick={loadMoreProjects}
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50 hover:text-purple-700"
          >
            Load More Projects
          </Button>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
