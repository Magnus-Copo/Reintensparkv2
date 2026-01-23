import Link from "next/link";

import {
  contactChannels,
  footerNavLinks,
  quickLinks,
  socialLinks,
} from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-white/5 bg-black/70">
      <div className="mx-auto max-w-7xl py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          {/* Social Media Section - Left aligned */}
          <div className="space-y-4 lg:max-w-xs">
            <p className="text-xs uppercase tracking-[0.6em] text-primary">
              Reinternspark Technology
            </p>
            <div className="flex gap-4">
            {socialLinks.map((link) => {
              const isInstagram = link.label === "Instagram";
              const isLinkedIn = link.label === "LinkedIn";
              const isFacebook = link.label === "Facebook";
              
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-white/70 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/10 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  {isInstagram && (
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  )}
                  {isLinkedIn && (
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )}
                  {isFacebook && (
                    <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  )}
                </Link>
              );
            })}
            </div>
          </div>

          {/* Navigation Links - Middle section */}
          <div className="grid grid-cols-1 gap-8 text-base text-white sm:grid-cols-2 sm:gap-24 lg:gap-32">
          <div>
            <h4 className="text-base uppercase tracking-[0.5em] text-white mb-4 font-semibold">
              Navigation
            </h4>
            <ul className="space-y-3">
              {footerNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-primary text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base uppercase tracking-[0.5em] text-white mb-4 font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-primary text-[15px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section - Right aligned */}
        <div className="text-base text-white lg:max-w-xs lg:ml-auto">
          <h4 className="text-base uppercase tracking-[0.5em] text-white mb-4 font-semibold">
            Contact
          </h4>
          <div className="space-y-3">
            <p className="text-white">
              {contactChannels.address}
            </p>
            <div>
              <p className="text-white">Phone</p>
              <div className="space-y-1">
                {contactChannels.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone.replaceAll(/\s+/g, "")}`}
                    className="block text-white transition hover:text-primary"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white">Email</p>
              <div className="space-y-1">
                {contactChannels.emails.map((mail) => (
                  <a
                    key={mail}
                    href={`mailto:${mail}`}
                    className="block text-white transition hover:text-primary"
                  >
                    {mail}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center gap-4 text-base uppercase tracking-[0.4em] text-white">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} Reinternspark Technology
          </div>
          <div className="text-center sm:text-right">
            Powered by{" "}
            <Link
              href="https://magnuscopo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors duration-200 hover:underline"
            >
              Magnus Copo
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
