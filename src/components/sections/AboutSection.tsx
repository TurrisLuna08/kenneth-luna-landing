import { cn } from "@/lib/utils"

const techStack = [
  "Next.js",
  "TypeScript",
  "React",
  "Tailwind CSS",
  "Python",
  "TensorFlow",
  "PyTorch",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
]

const techColors: Record<string, string> = {
  "Next.js": "bg-zinc-800 text-zinc-100",
  "TypeScript": "bg-zinc-800 text-zinc-100",
  "React": "bg-zinc-800 text-zinc-100",
  "Python": "bg-zinc-800 text-zinc-100",
  "TensorFlow": "bg-zinc-800 text-zinc-100",
  "PyTorch": "bg-zinc-800 text-zinc-100",
  "FastAPI": "bg-zinc-800 text-zinc-100",
  "Docker": "bg-zinc-800 text-zinc-100",
  "AWS": "bg-zinc-800 text-zinc-100",
  "Figma": "bg-zinc-800 text-zinc-100",
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-center"
    >
      {/* Placeholder photo */}
      <div className="shrink-0">
        <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-border bg-muted">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-700 to-zinc-900">
            <span className="text-6xl font-semibold text-zinc-400">KL</span>
          </div>
        </div>
      </div>

      {/* Bio + badges */}
      <div className="flex flex-col gap-6 flex-1">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight mb-3">Sobre mí</h2>
          <p className="text-foreground-muted leading-relaxed max-w-xl">
            Soy Kenneth, un desarrollador y consultor enfocado en construir productos
            digitales robustos. Trabajo en el ecosistema React/Next.js, diseño
            soluciones de inteligencia artificial, y ayudo a empresas a transformar
            ideas en software de producción. Si buscas algo bien hecho, estás en el
            lugar correcto.
          </p>
        </div>

        {/* Tech stack badges */}
        <div>
          <p className="text-xs uppercase tracking-wider text-foreground-muted mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className={cn(
                  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
                  techColors[tech] ?? "bg-zinc-800 text-zinc-100"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}