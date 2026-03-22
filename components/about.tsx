import { GraduationCap, Briefcase, Code, Palette } from "lucide-react"

const hardSkills = [
  "Business Requirement Analysis",
  "Stakeholder Analysis",
  "System Architecture",
  "Wireframe & Mockup",
  "HTML/CSS/JavaScript",
  "React",
  "Bootstrap",
]

const softSkills = [
  "Communication",
  "Critical Thinking",
  "Teamwork",
  "Creativity",
  "Adaptability",
  "Time Management",
  "Problem Solving",
  "Curiosity & Lifelong Learning",
]

const tools = [
  "Figma",
  "GitHub",
  "Docker",
  "VS Code",
  "Excel",
  "Word",
]

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-medium">
            About
          </p>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Get to know me
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Introduction */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground">
              My name is <span className="text-foreground font-medium">Apinya Kanuenghan</span>, 
              a fourth-year Computer Engineering student at King Mongkut&apos;s Institute of Technology 
              Ladkrabang, Prince of Chumphon Campus.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am deeply passionate about <span className="text-primary">UX/UI design</span>, with a primary focus on 
              creating websites and applications that deliver an exceptional user experience. 
              My goal is to leverage the knowledge and professional experience gained from 
              working with a company to further refine my skills.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              With a background in computer engineering, I bridge design and development 
              to build functional and user-centered digital products.
            </p>

            {/* Education Card */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    King Mongkut&apos;s Institute of Technology Ladkrabang
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Prince of Chumphon Campus
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bachelor of Engineering in Computer Engineering
                  </p>
                  <p className="text-sm text-primary font-medium mt-2">
                    GPA: 3.23
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hard Skills */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Code className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">Hard Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground"
                  >
                    {tool}
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
