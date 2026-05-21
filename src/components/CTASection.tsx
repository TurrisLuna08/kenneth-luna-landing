import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative w-full bg-surface border-y border-border/10">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32 flex flex-col items-center text-center gap-8">
        <h2 className="font-heading text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          ¿Trabajamos juntos?
        </h2>
        <p className="max-w-xl text-base text-foreground-muted leading-relaxed">
          Tengo disponibilidad para nuevos proyectos y colaboraciones. Si buscas
          alguien que conecte visión de negocio con ejecución técnica, hablemos.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-sm sm:flex-row sm:max-w-none sm:w-auto sm:gap-4">
          <a
            href="mailto:kenneth@kennethluna.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-cta-primary-bg text-cta-primary-text border-cta-primary-border hover:bg-zinc-200 active:translate-y-px transition-all px-8 h-9 text-sm font-medium gap-1.5"
          >
            Contactar
          </a>
          <a
            href="https://linkedin.com/in/kennethluna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-transparent hover:bg-muted/50 text-foreground active:translate-y-px transition-all px-8 h-9 text-sm font-medium gap-1.5 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
          >
            Ver LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}