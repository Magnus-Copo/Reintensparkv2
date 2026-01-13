import Link from "next/link";

import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <article className="rounded-[30px] border border-white/10 bg-card/70 p-6 text-white">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm uppercase tracking-[0.3em] text-white/60">
        <span>{job.location}</span>
        <span className="text-primary">{job.type}</span>
      </div>
      <h3 className="mt-4 text-2xl font-semibold">{job.role}</h3>
      <p className="mt-2 text-white/70">{job.description}</p>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {job.responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-primary">▹</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Link
          href={`mailto:info@reintenspark.com?subject=Application%20-%20${encodeURIComponent(job.role)}`}
          className="inline-flex items-center gap-2 rounded-full border border-primary/60 px-5 py-2 text-sm font-semibold text-primary"
        >
          Apply Now →
        </Link>
      </div>
    </article>
  );
}
