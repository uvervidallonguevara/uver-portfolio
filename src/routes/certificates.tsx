import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Award } from "lucide-react";

export const Route = createFileRoute("/certificates")({
  component: CertificatesPage,
  head: () => ({
    meta: [
      { title: "Certificates — Uver Guevara" },
      { name: "description", content: "Certificates page is currently under active development." },
    ],
  }),
});

function CertificatesPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full surface-card rounded-3xl p-10 text-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/15 text-primary mb-6">
          <Award className="w-6 h-6" />
        </span>
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Certificates</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-gradient">Coming Soon</span>
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          This project is currently under active development. Please check back soon for updates.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent/10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
      </div>
    </main>
  );
}
