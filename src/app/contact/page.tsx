import { Metadata } from "next";

import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { contactChannels } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact | Reinternspark",
  description:
    "Reach our hardware, software and EdTech teams for partnerships, admissions and collaborations.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16">
      <PageHero
        kicker="Contact"
        title="Let's build the future together"
        description="Call, write, or drop by our innovation studio in Bengaluru."
        highlight="Response within 24 hours"
      />

      <section className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-6 rounded-[32px] border border-white/10 bg-card/70 p-8 text-white/80">
          <div>
            <h3 className="text-lg font-semibold text-white">Phone</h3>
            <div className="mt-2 space-y-1 text-sm">
              {contactChannels.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replaceAll(/\s+/g, "")}`}
                  className="block text-primary"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Email</h3>
            <div className="mt-2 space-y-1 text-sm">
              {contactChannels.emails.map((email) => (
                <a key={email} href={`mailto:${email}`} className="block text-primary">
                  {email}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Visit</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">{contactChannels.address}</p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-white/10">
            <iframe
              title="Reinternspark HQ"
              src="https://www.google.com/maps?q=Krishna%20Tech%20Park%20Bengaluru&output=embed"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
