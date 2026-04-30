import { GraduationCap, Briefcase, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Technical Support / Networking Trainee",
    organization: "Department of Information and Communications Technology Region IV-A",
    location: "Telecom Road, Capitol Site, Brgy. Kumintang Ibaba, Batangas City, 4200 Philippines",
    period: "February 2025 – June 2025",
    description: [
      "Assisted in the installation and configuration of Wi-Fi networks, including router setup and network connectivity",
      "Performed troubleshooting of network issues to ensure stable and reliable internet connections",
      "Helped diagnose connectivity problems and optimized router settings to improve network performance",
      "Developed problem-solving, teamwork, and technical communication skills",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Engineering",
    organization: "University of Batangas",
    location: "Hilltop, Kumintang Ibaba, Batangas City, 4200 Philippines",
    period: "August 2021 – August 2025",
    description: [
      "Capstone Project: Design and Implementation of Wireless Water Meter Reading System",
      "Strong foundation in software development, networking, and system integration",
      "Hands-on experience with programming languages: C++, Java, HTML/CSS",
      "Knowledge in CISCO technologies and network configuration",
    ],
  },
  {
    type: "certification",
    title: "Basic Occupational Safety and Health (BOSH)",
    organization: "Safety Officer II Certification",
    location: "Philippines",
    period: "2024",
    description: [
      "Certified Safety Officer with comprehensive knowledge of occupational safety standards",
      "Understanding of risk assessment and hazard identification",
      "Competent in implementing safety protocols in professional environments",
    ],
  },
]

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Experience
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Education & Experience
          </h3>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const Icon = typeIcons[exp.type as keyof typeof typeIcons]
              return (
                <div key={index} className="relative pl-0 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground">
                            {exp.title}
                          </h4>
                          <p className="text-primary font-medium">
                            {exp.organization}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 ml-0 md:ml-16">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
