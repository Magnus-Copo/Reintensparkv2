import { Metadata } from "next";

import { JobCard } from "@/components/cards/JobCard";
import { JobAdminPanel } from "@/components/admin/JobAdminPanel";
import { PageHero } from "@/components/ui/PageHero";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Careers | Reinternspark",
  description:
    "Join a future-forward team building hardware, IOT, AI and EdTech solutions for global partners.",
};

export default function CareersPage() {
  return (
    <div className="space-y-16">
      <PageHero
        kicker="Careers"
        title="Build the future with us"
        description="Admin-controlled ATS-ready postings keep hiring structured. Tell us your story, show us your builds."
        highlight="Hardware · Software · EdTech · R&D"
      />

      <section className="grid gap-8 md:grid-cols-2">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>

      <JobAdminPanel />
    </div>
  );
}
