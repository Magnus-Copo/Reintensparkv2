import { Metadata } from "next";
import Image from "next/image";

import { NeonButton } from "@/components/ui/NeonButton";
import { PageHero } from "@/components/ui/PageHero";
import { rdStreams, rdCapabilities } from "@/data/practice";
import { RDApproach } from "@/components/sections/RDApproach";

export const metadata: Metadata = {
  title: "R&D Programs | Reinternspark",
  description:
    "Building intelligent systems for a smarter future. Multi-disciplinary research in drones, IOT, AI, robotics and industry collaborations for innovation and technology advancement.",
};

export default function RDPage() {
  return (
    <div className="space-y-16">
      <PageHero
        kicker="Research & Development (R&D)"
        title="Building Intelligent Systems for a Smarter Future"
        description="At IOT Lab Reinternspark, our R&D division focuses on designing, developing and deploying intelligent automation solutions that solve real-world problems. We combine embedded systems, IOT, AI-enabled control and robust hardware design to create scalable products for industry, healthcare and smart cities."
        highlight="Autonomous Systems | Smart IOT | AI-Enabled Control | Hardware Design"
      >
        <NeonButton href="/contact">Connect with Our R&D Team</NeonButton>
      </PageHero>

      {/* Featured R&D Projects */}
      <section>
        <div className="mb-12 text-center">
          <p className="section-heading mb-3">Featured R&D Projects</p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Innovative solutions designed, developed and deployed for real-world applications across multiple industries.
          </p>
        </div>

        {/* Autonomous Delivery Drones */}
        <div className="mb-16 rounded-[32px] border border-primary/30 bg-gradient-to-br from-black/60 to-primary/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Flagship Project
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Autonomous Delivery Drones
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Our Autonomous Delivery Drone System is designed for fast, secure and contactless transportation of critical goods. The platform supports autonomous navigation, real-time monitoring and intelligent decision-making, making it ideal for medical, commercial and logistics applications.
              </p>
              
              {/* Key Applications */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Key Applications</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Medical Delivery", desc: "Medicines, blood samples, vaccines, emergency supplies" },
                    { title: "Business & E-commerce", desc: "Last-mile delivery for parcels and documents" },
                    { title: "Industrial Logistics", desc: "Internal transport within campuses and warehouses" },
                    { title: "Remote Area Support", desc: "Access to hard-to-reach locations" }
                  ].map((app) => (
                    <div key={app.title} className="rounded-lg border border-white/10 bg-black/30 p-3">
                      <p className="font-semibold text-white text-sm mb-1">{app.title}</p>
                      <p className="text-xs text-white/60">{app.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative aspect-video rounded-[20px] overflow-hidden border border-white/10 bg-black/40">
              <Image
                src="/autonomous-drone.png"
                alt="Autonomous Delivery Drone System"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                quality={85}
              />
            </div>
          </div>

          {/* Core Features and Technology */}
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="rounded-[20px] border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Core Features
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-primary">▹</span> Fully autonomous flight control with GPS-based navigation</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Obstacle detection & avoidance using multi-sensor fusion</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Real-time tracking via web/mobile dashboard</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Secure payload system with controlled access</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Fail-safe mechanisms (return to home, low battery protection)</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Scalable design for different payload capacities</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                Technology Stack
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-primary">▹</span> Embedded flight controller systems</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> GPS, IMU, ultrasonic / LiDAR sensors</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Wireless communication (Wi-Fi / RF / LTE optional)</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> IOT-based monitoring and control</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Energy-efficient power management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Automated Smart Dustbin System */}
        <div className="rounded-[32px] border border-primary/30 bg-gradient-to-br from-black/60 to-primary/5 p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
              <div className="group relative aspect-square rounded-[24px] overflow-hidden border-2 border-white/20 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(57,255,20,0.25)] hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/smart-dustbin-1.jpg"
                  alt="Automated Smart Dustbin - View 1"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative aspect-square rounded-[24px] overflow-hidden border-2 border-white/20 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(57,255,20,0.25)] hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/smart-dustbin-2.jpg"
                  alt="Automated Smart Dustbin - View 2"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative aspect-square rounded-[24px] overflow-hidden border-2 border-white/20 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(57,255,20,0.25)] hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/smart-dustbin-3.jpg"
                  alt="Automated Smart Dustbin - View 3"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative aspect-square rounded-[24px] overflow-hidden border-2 border-white/20 bg-black/40 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-primary/50 hover:shadow-[0_12px_40px_rgba(57,255,20,0.25)] hover:scale-105 hover:-translate-y-2">
                <Image
                  src="/smart-dustbin-4.jpg"
                  alt="Automated Smart Dustbin - View 4"
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
                Smart City Solution
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Automated Smart Dustbin System
              </h2>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Our Automated Smart Dustbin is an intelligent waste management solution designed to improve hygiene, efficiency and cleanliness in public and private spaces. The system operates without physical contact and can be integrated into smart city infrastructure.
              </p>
              
              {/* Key Applications */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Key Applications</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Hospitals & healthcare facilities",
                    "Offices & corporate campuses",
                    "Smart homes & residential societies",
                    "Public places (malls, stations, institutions)"
                  ].map((app) => (
                    <div key={app} className="rounded-lg border border-white/10 bg-black/30 p-3">
                      <p className="text-sm text-white/70 flex gap-2">
                        <span className="text-primary">▹</span> {app}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Features and Advanced Capabilities */}
          <div className="grid gap-6 md:grid-cols-2 mt-8">
            <div className="rounded-[20px] border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Core Features
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-primary">▹</span> Hands-free operation using smart sensors</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Automatic lid control with intelligent motion detection</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Waste level monitoring with visual/remote alerts</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Energy-efficient design suitable for continuous operation</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Modular and customizable for different environments</li>
              </ul>
            </div>

            <div className="rounded-[20px] border border-white/10 bg-black/30 p-6">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Advanced Capabilities
              </h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex gap-2"><span className="text-primary">▹</span> IOT-enabled status monitoring</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Optional mobile/web dashboard integration</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Data-driven waste management insights</li>
                <li className="flex gap-2"><span className="text-primary">▹</span> Support for future AI-based waste segregation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our R&D Approach */}
      <RDApproach />

      {/* Vision Statement */}
      <section className="rounded-[32px] border border-primary/30 bg-gradient-to-r from-primary/10 via-black/50 to-primary/10 p-8 md:p-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Vision</h2>
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
          To create intelligent, autonomous and sustainable systems that improve everyday life and empower industries through innovation.
        </p>
      </section>

      {/* Research Streams */}
      <section>
        <div className="mb-12 text-center">
          <p className="section-heading mb-3">Research Focus Areas</p>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our R&D programs span multiple technology domains, driving innovation through applied research,
            prototyping and real-world deployment of advanced technology solutions.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rdStreams.map((stream, index) => (
            <article
              key={stream.title}
              className="group rounded-[24px] border border-white/10 bg-card/60 p-6 text-white transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(57,255,20,0.2)] hover:scale-105"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {stream.title}
                </h3>
              </div>
              <p className="text-white/70 leading-relaxed">{stream.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* R&D Capabilities */}
      <section className="rounded-[32px] border border-primary/30 bg-gradient-to-br from-black/60 to-primary/5 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Our R&D Capabilities</h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Research Focus */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Research Focus
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {rdCapabilities.researchFocus.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Infrastructure */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Infrastructure
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {rdCapabilities.infrastructure.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Collaboration Models */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Collaboration
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {rdCapabilities.collaborationModels.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Application Domains */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Domains
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              {rdCapabilities.domains.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-primary">▹</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[24px] border border-white/10 bg-card/70 p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Knowledge Transfer</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Bridge the gap between academic research and industry applications through collaborative projects and technology transfer programs.
          </p>
        </article>

        <article className="rounded-[24px] border border-white/10 bg-card/70 p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Innovation & IP</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Develop innovative solutions, secure patents and create intellectual property through cutting-edge research and development activities.
          </p>
        </article>

        <article className="rounded-[24px] border border-white/10 bg-card/70 p-6 text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <svg className="h-8 w-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Rapid Prototyping</h3>
          <p className="text-white/70 text-sm leading-relaxed">
            Fast-track your ideas from concept to prototype with state-of-the-art facilities and expert guidance for proof-of-concept development.
          </p>
        </article>
      </section>

      {/* Call to Action */}
      <section className="rounded-[32px] border border-primary/30 bg-black/50 p-8 md:p-12 text-center">
        <p className="section-heading mb-4">Partner With Us</p>
        <p className="text-lg text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
          Join forces with our research team to bring your innovative ideas to life. Whether you're an academic institution, startup or enterprise, we offer flexible collaboration models including sponsored research, joint IP development, research internships and pilot deployments.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <NeonButton href="/contact">Start a Research Project</NeonButton>
          <a 
            href="/contact" 
            className="rounded-full border border-primary/50 px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all duration-300 hover:bg-primary/10 hover:border-primary"
          >
            Request More Information
          </a>
        </div>
      </section>
    </div>
  );
}
