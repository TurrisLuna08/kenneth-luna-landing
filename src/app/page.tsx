import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      {/* Placeholder main content area */}
      <main className="flex-1" />

      <CTASection />
      <Footer />
    </div>
  );
}