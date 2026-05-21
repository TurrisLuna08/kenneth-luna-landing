import { GlassNav } from "@/components/GlassNav";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { StackSection } from "@/components/StackSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-200 flex flex-col">
      <GlassNav />
      <main className="flex-1 pt-16">
        {/* Hero */}
        <section className="relative min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#09090b] via-[#09090b] to-[#18181b] pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#bdd1f6] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {/* Accent label */}
            <span className="inline-block text-xs uppercase tracking-[1.32px] text-zinc-500 mb-6">
              Full Stack Developer & AI Engineer
            </span>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-medium text-white leading-[1.1] tracking-tight mb-6">
              Kenneth Luna
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
              Construyo productos digitales con IA y código limpio. 
              Bussiness Broker conectando oportunidades con ejecución práctica.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
              <a
                href="#proyectos"
                className="rounded-full bg-white text-black text-sm font-medium px-8 py-3.5 hover:bg-zinc-200 transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-white/20 text-white text-sm font-medium px-8 py-3.5 hover:bg-white/5 transition-colors"
              >
                Contactar
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {[
                { value: "5+", label: "Años de experiencia" },
                { value: "20+", label: "Proyectos completados" },
                { value: "Abierto", label: "A oportunidades" },
                { value: "Remoto", label: "Disponible global" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#09090b]/80 backdrop-blur-sm px-6 py-5 flex flex-col items-center gap-1"
                >
                  <span className="text-2xl font-semibold text-white">{stat.value}</span>
                  <span className="text-xs text-zinc-500">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <AboutSection />

        {/* Services */}
        <ServicesSection />

        {/* Projects */}
        <ProjectsSection />

        {/* Stack */}
        <StackSection />

        {/* CTA */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}