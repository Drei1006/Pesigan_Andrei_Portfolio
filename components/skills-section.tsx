"use client"

const programmingSkills = [
  { name: "C++", level: 80 },
  { name: "Java", level: 75 },
  { name: "JavaScript", level: 80 },
  { name: "HTML/CSS", level: 85 },
]

const technicalSkills = [
  { name: "React.js", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "Bootstrap", level: 80 },
  { name: "Networking", level: 75 },
  { name: "CISCO", level: 70 },
  { name: "Database", level: 75 },
]

const tools = [
  "Git",
  "MS Office",
  "Canva",
  "Confluence",
  "VS Code",
  "Hardware Troubleshooting",
]

function SkillTag({ name }: { name: string }) {
  return (
    <span className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
      {name}
    </span>
  )
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="w-16 h-[2px] bg-primary" />
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">
              Skills
            </h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground font-serif">
            Technical Expertise
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Programming Languages */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground border-l-2 border-primary pl-4">
              Programming Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {programmingSkills.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Frameworks & Technical */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground border-l-2 border-primary pl-4">
              Frameworks & Technical
            </h4>
            <div className="flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <SkillTag key={skill.name} name={skill.name} />
              ))}
            </div>
          </div>

          {/* Tools & Others */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-foreground border-l-2 border-primary pl-4">
              Tools & Others
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-medium text-muted-foreground mb-3">
                Soft Skills
              </h5>
              <div className="flex flex-wrap gap-2">
                {["Communication", "Critical Thinking", "Team Collaboration", "Problem Solving"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 border border-border text-muted-foreground rounded-lg text-sm hover:border-primary hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
