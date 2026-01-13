"use client";

import { FormEvent, useState } from "react";

type StatusState =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function getFormValue(data: FormData, key: string): string {
  const value = data.get(key);
  if (typeof value === "string") {
    return value.trim();
  }
  return "";
}

function getFeedbackText(status: StatusState): string | null {
  if (status.type === "loading") {
    return "Sending your message...";
  }
  if (status.type === "success" || status.type === "error") {
    return status.message;
  }
  return null;
}

function getFeedbackTone(status: StatusState): string {
  if (status.type === "success") {
    return "text-primary";
  }
  if (status.type === "error") {
    return "text-red-400";
  }
  return "text-white/70";
}

export function ContactForm() {
  const [status, setStatus] = useState<StatusState>({ type: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: getFormValue(data, "name"),
      email: getFormValue(data, "email"),
      company: getFormValue(data, "company"),
      message: getFormValue(data, "message"),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please complete all required fields." });
      return;
    }

    try {
      setStatus({ type: "loading" });
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: null }));
        throw new Error(error.message || "Message delivery failed. Please try again.");
      }

      setStatus({
        type: "success",
        message: "Thank you. Our team will reach out within 24 hours.",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unexpected error";
      setStatus({ type: "error", message });
    }
  }

  const feedbackText = getFeedbackText(status);
  const feedbackTone = getFeedbackTone(status);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-[30px] border border-white/10 bg-card/70 p-6"
    >
      <div>
        <label className="text-sm text-white/70" htmlFor="name">
          Name*
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white"
          required
        />
      </div>
      <div>
        <label className="text-sm text-white/70" htmlFor="email">
          Email*
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white"
          required
        />
      </div>
      <div>
        <label className="text-sm text-white/70" htmlFor="company">
          Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white"
        />
      </div>
      <div>
        <label className="text-sm text-white/70" htmlFor="message">
          How can we help?*
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-[0.4em] text-black disabled:cursor-not-allowed disabled:opacity-60"
        disabled={status.type === "loading"}
      >
        {status.type === "loading" ? "Sending..." : "Send Message"}
      </button>
      {feedbackText ? (
        <p className={`text-sm ${feedbackTone}`} aria-live="polite">
          {feedbackText}
        </p>
      ) : null}
    </form>
  );
}
