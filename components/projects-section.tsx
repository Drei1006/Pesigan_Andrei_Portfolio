"use client"

import { ExternalLink, Github, Wifi, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Wireless Water Meter Reading System",
    description:
      "A comprehensive system designed to automate data collection and billing processes for the Bolo Multipurpose Cooperative. Features real-time database synchronization, offline data storage, and automated billing generation.",
    technologies: ["Java", "Android", "Cloud Database", "Thermal Printing"],
    icon: Wifi,
    highlights: [
      "Real-time database synchronization",
      "Offline data storage capability",
      "Automated billing generation",
      "High reliability ratings from users",
    ],
    link: "#",
    github: "https://github.com/Drei1006/Capstone-Project-Bolo-Cooperative-Automated-Water-Reading-.git",
  },
  {
    title: "Network Configuration & Security",
    description:
      "Hands-on experience in Wi-Fi network installation and configuration, router setup, and network troubleshooting during DICT internship. Focus on ensuring stable and reliable connections.",
    technologies: ["CISCO", "Wi-Fi", "Router Configuration", "Network Security"],
    icon: Shield,
    highlights: [
      "Network troubleshooting",
      "Router optimization",
      "Security implementation",
      "Performance monitoring",
    ],
    link: "#",
    github: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Projects
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Featured Work
          </h3>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-[1fr,2fr] gap-8">
                {/* Left - Icon and Meta */}
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Description and Highlights */}
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="gap-2">
                      <a href={project.link}>
                        <ExternalLink className="h-4 w-4" />
                        Details
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
