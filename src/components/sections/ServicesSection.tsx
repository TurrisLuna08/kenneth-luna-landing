const services = [
  {
    title: "Desarrollo Web",
    description:
      "Construyo landing pages, dashboards, y aplicaciones web completas con Next.js, React, y TypeScript. Diseño limpio, performance óptima, deploy listo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <rect width="24" height="24" rx="0" ry="0" />
        <path d="M12 8 8 12l4 4" />
        <path d="m16 12-4 4-4-4" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
  {
    title: "AI / ML",
    description:
      "Diseño y despliego pipelines de machine learning, fine-tuning de modelos, RAG systems, y automatización inteligente. De la idea al modelo en producción.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M12 2a4 4 0 0 1 4 4v1h1a3 3 0 0 1 0 6h-1v1a4 4 0 0 1-8 0v-1H7a3 3 0 0 1 0-6h1V6a4 4 0 0 1 4-4z" />
        <circle cx="9" cy="13" r="1" fill="currentColor" />
        <circle cx="15" cy="13" r="1" fill="currentColor" />
        <path d="M9 17h6" />
      </svg>
    ),
  },
  {
    title: "Consultoría",
    description:
      "Auditorías técnicas, arquitectura de sistemas, code review, y estrategia de ingeniería. Ayudo a equipos a tomar mejores decisiones técnicas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8"
      >
        <path d="M8 24h8" />
        <path d="M12 24v-8" />
        <path d="m12 16 4-4-4-4-4 4 4 4Z" />
        <circle cx="12" cy="5" r="3" />
      </svg>
    ),
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
        Servicios
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative flex flex-col gap-4 rounded-[20px] border border-border bg-card p-6 transition-all duration-300 hover:border-foreground-muted hover:bg-muted/40 cursor-default"
          >
            {/* Icon */}
            <div className="text-foreground-muted transition-colors duration-300 group-hover:text-foreground">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold tracking-tight">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground-muted leading-relaxed flex-1">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}