import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  languages: ["Python", "SQL (PostgreSQL, MySQL)"],
  frameworks: [
    "YOLO",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Scikit-learn",
    "XGBoost",
    "Pandas",
    "NumPy",
    "OpenCV",
    "Matplotlib",
    "Seaborn",
  ],
  devops: ["Docker", "Git", "GitHub Actions", "Flask", "FastAPI", "Airflow"],
  tools: ["Jupyter", "Streamlit", "Power BI", "Tableau", "Excel", "DVC"],
  techniques: [
    "Supervised Learning",
    "Unsupervised Learning",
    "CNNs",
    "Time Series",
    "Feature Engineering",
    "Model Tuning",
    "Model Monitoring",
  ],
  soft: ["Agile Development", "Communication", "Stakeholder Collaboration", "Rapid Prototyping"],
}

const experiences = [
  {
    title: "Data Science and Analytics Intern",
    company: "Bridgeon Solutions",
    period: "Jul 2024 – Present",
    responsibilities: [
      "Designed and deployed machine learning models for sales forecasting, increasing prediction accuracy by 20% and reducing latency by 30%.",
      "Automated ETL workflows using Python, SQL, and Apache Airflow; improved data pipeline efficiency and delivery time by 40%.",
      "Implemented CI/CD pipelines using Docker and GitHub Actions, cutting model release cycles by 60%.",
      "Delivered real-time data dashboards via Power BI, enabling faster decision-making with 25% improvement in insights.",
      "Integrated ML APIs into production apps with FastAPI and Flask, maintaining 98% service uptime for real-time inference.",
    ],
  },
]

const education = [
  {
    degree: "B.Tech in Artificial Intelligence and Machine Learning",
    institution: "Hindusthan College of Engineering and Technology, Anna University",
    period: "2020 – 2024",
    gpa: "GPA: 8.34 / 10",
  },
]

const certifications = [
  "Generative AI – LinkedIn Learning",
  "Predictive Modeling I – Cognitive Class",
  "BI & Predictive Analytics – Udemy",
  "Python Development & Data Science – MTF Institute",
  "Signal Processing Onramp – MathWorks",
  "SQL & Relational Databases – Cognitive Class",
  "SQL for Data Analysis – Great Learning",
  "Data Analysis with Python – IBM",
  "Data Analysis Foundations – IBM",
  "Career Essentials in Data Analysis – Microsoft",
  "Image Processing Onramp – MathWorks",
]

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 md:text-4xl">Skills & Experience</h2>

      {/* Skills */}
      <div className="mb-16">
        <h3 className="mb-6 text-2xl font-semibold text-gray-800">Technical Skills</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Languages" skills={skills.languages} />
          <SkillCard title="Frameworks & Libraries" skills={skills.frameworks} />
          <SkillCard title="MLOps & DevOps" skills={skills.devops} />
          <SkillCard title="Tools" skills={skills.tools} />
          <SkillCard title="Techniques" skills={skills.techniques} />
          <SkillCard title="Soft Skills" skills={skills.soft} />
        </div>
      </div>

      {/* Experience */}
      <div className="mb-16">
        <h3 className="mb-6 text-2xl font-semibold text-gray-800">Professional Experience</h3>
        {experiences.map((exp, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <CardTitle className="text-xl text-purple-700">
                  {exp.title} at {exp.company}
                </CardTitle>
                <span className="text-sm font-medium text-gray-500">{exp.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="ml-6 list-disc space-y-2 text-gray-600">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Education */}
      <div className="mb-16">
        <h3 className="mb-6 text-2xl font-semibold text-gray-800">Education</h3>
        {education.map((edu, index) => (
          <Card key={index} className="mb-6">
            <CardHeader>
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <CardTitle className="text-xl text-purple-700">{edu.degree}</CardTitle>
                <span className="text-sm font-medium text-gray-500">{edu.period}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="mt-2 font-medium text-gray-700">{edu.gpa}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certifications */}
      <div>
        <h3 className="mb-6 text-2xl font-semibold text-gray-800">Certifications</h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <Badge key={index} variant="outline" className="bg-purple-50 text-purple-700">
              {cert}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-lg text-purple-700">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-700">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default SkillsSection
