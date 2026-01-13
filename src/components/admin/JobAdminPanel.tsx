"use client";

import { useState } from "react";

import { jobs } from "@/data/jobs";

export function JobAdminPanel() {
  const [draft, setDraft] = useState({ role: "", location: "", type: "" });
  const [message, setMessage] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!draft.role || !draft.location || !draft.type) {
      setMessage("Fill in role, location and type to queue a posting.");
      return;
    }
    setMessage(
      "Draft stored locally. Connect this form to your CMS or API to enable publishing."
    );
    setDraft({ role: "", location: "", type: "" });
  }

  return (
    <section className="rounded-[30px] border border-dashed border-primary/50 bg-black/40 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-primary">
            Admin Console
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            Job Posting Controls
          </h3>
        </div>
        <span className="rounded-full border border-primary/40 px-4 py-2 text-xs uppercase tracking-[0.4em] text-primary">
          {jobs.length} Live
        </span>
      </div>
      <p className="mt-4 text-sm text-white/60">
        Use this lightweight panel as a placeholder for future CRUD flows. Hook it
        to a CMS, Supabase, or internal API when ready.
      </p>
      <form className="mt-6 grid gap-4 md:grid-cols-3" onSubmit={handleSubmit}>
        <input
          placeholder="Role"
          className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
          value={draft.role}
          onChange={(event) => setDraft((prev) => ({ ...prev, role: event.target.value }))}
        />
        <input
          placeholder="Location"
          className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
          value={draft.location}
          onChange={(event) => setDraft((prev) => ({ ...prev, location: event.target.value }))}
        />
        <input
          placeholder="Type"
          className="rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-white"
          value={draft.type}
          onChange={(event) => setDraft((prev) => ({ ...prev, type: event.target.value }))}
        />
        <button
          type="submit"
          className="md:col-span-3 rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black"
        >
          Save Draft
        </button>
      </form>
      {message ? <p className="mt-3 text-sm text-primary">{message}</p> : null}
    </section>
  );
}
