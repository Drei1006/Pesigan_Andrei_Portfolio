import Image from "next/image"
import { Code, Network, Shield, Lightbulb, Github, Linkedin, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Code,
    title: "Software Development",
    description: "Experienced in Python, C++, Java, React, and Node.js",
  },
  {
    icon: Network,
    title: "Networking",
    description: "Knowledgeable in network configuration using CISCO technologies",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Understanding of security principles and best practices",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Critical thinker with strong analytical capabilities",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              About
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            About Me
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Profile Photo */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden bg-muted">
                <Image
                  src="/images/profile.jpg"
                  alt="Andrei Christopher Pesigan - Graduation Photo"
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              {/* Social Links & Resume */}
              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" size="sm" asChild className="gap-2">
                  <a href="https://drive.google.com/drive/u/1/folders/1EeawFVzya4xLBbuqddMJhVSZyK9L7Ey_" download>
                    <FileText className="h-4 w-4" />
                    Resume
                  </a>
                </Button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="mailto:pesigandrei1006@gmail.com"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-xl">
                I&apos;m a <span className="text-primary font-medium">Computer Engineering graduate</span> from 
                the University of Batangas with a passion for building innovative solutions 
                that bridge hardware and software.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My academic journey has equipped me with strong foundations in programming 
                languages including Python, C++, Java, and web technologies. I&apos;ve developed 
                hands-on experience through my capstone project—a Wireless Water Meter Reading 
                System—which involved Android development, real-time database synchronization, 
                and automated billing processes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a certified Safety Officer II (BOSH), I bring a unique perspective that 
                combines technical expertise with safety consciousness. I&apos;m a hardworking, 
                detail-oriented, and fast learner who thrives in collaborative environments.
              </p>
            </div>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
