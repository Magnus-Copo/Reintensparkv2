export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Hardware", href: "/hardware" },
  { label: "Software / IOT", href: "/software-iot" },
  { label: "EdTech", href: "/courses" },
  { label: "R&D", href: "/rd" },
  { label: "Careers", href: "/careers" },
];

// Footer Navigation Links
export const footerNavLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

export const quickLinks = [
  { label: "Hardware", href: "/hardware" },
  { label: "Software", href: "/software-iot" },
  { label: "R&D", href: "/rd" },
  { label: "EdTech", href: "/courses" },
];

export const contactChannels = {
  phones: ["+91 8296969260", "+91 8762719260"],
  emails: ["info@reintenspark.com", "support@reintenspark.com"],
  address:
    "Unispace 4th floor, Krishna Tech Park, near Kaverappa Layout, Kadubeesanahalli, Bengaluru, Karnataka 560103",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/reintenspark_technology" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/reintenspark" },
  { label: "Facebook", href: "https://www.facebook.com/reintenspark" },
];
