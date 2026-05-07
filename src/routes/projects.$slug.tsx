import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectDetail,
  head: ({ params }) => ({
    meta: [
      { title: `${params.slug} — Under Development` },
      { name: "description", content: "This project is currently under active development." },
    ],
  }),
});

function ProjectDetail() {
  const { slug } = Route.useParams();
  const title = slug
    .split("-")
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full surface-card rounded-3xl p-10 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Project</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          <span className="text-gradient">{title}</span>
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
