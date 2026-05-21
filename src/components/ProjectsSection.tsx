"use client"

import { ExternalLink, Code2 } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  url?: string
  github?: string
}

const projects: Project[] = [
  {
    title: "Hermes Agent OS",
    description:
      "Multi-agent orchestration system con Kanban-style task management. Ejecuta workflows autonomos con planificacion, delegacion y memoria persistente.",
    image: "/projects/hermes-os.jpg",
    tags: ["Next.js", "TypeScript", "AI Agents", "Python"],
    url: "https://hermes-agent.nousresearch.com",
    github: "https://github.com/TurrisLuna08/HermesAgentOS",
  },
  {
    title: "FCBB Client Portal",
    description:
      "Portal de gestion de clientes para FCBB (First California Business Brokers). CRM personalizado con pipeline de deals y tracking de conversaciones.",
    image: "/projects/fcbb-portal.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    url: "https://fcbb.mx",
    github: "https://github.com/TurrisLuna08/fcbb-portal",
  },
  {
    title: "Ethena Landing Page",
    description:
      "Landing page para Ethena con tema dark glassmorphism. Diseño neo-grotesk con animaciones sutiles y enfoque en conversion.",
    image: "/projects/ethena.jpg",
    tags: ["Next.js", "Tailwind v4", "TypeScript", "Vercel"],
    url: "https://ethena.io",
    github: "https://github.com/TurrisLuna08/ethena-landing",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[20px] border border-border bg-card text-card-foreground transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
      {/* Screenshot */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
          <span className="text-4xl font-bold text-zinc-600">{project.title[0]}</span>
        </div>
        {/* Placeholder - replace with real screenshot */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-lg font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border border-border/50 bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              <ExternalLink className="size-4" />
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <Code2 className="size-4" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Proyectos
          </h2>
          <p className="mt-3 text-muted-foreground">
            Construyendo soluciones que conectan negocio con tecnologia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection