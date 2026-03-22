import { Download, Github, Mail, Phone } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-primary font-medium">
          UX/UI Designer
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Apinya Kanuenghan
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
          I design and build clean, user-friendly web interfaces. I focus on usability, responsive design, and creating simple experiences that are easy to use
        </p>

        {/* Social Links */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="https://github.com/PrangApinya"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="mailto:kanuenghanapinya@gmail.com"
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="tel:+66617047791"
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>

        {/* CTA Button */}
       <div className="mt-10">
          <a
            href="/cv apinya.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
