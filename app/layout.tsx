import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, OG_IMAGE, CONTACT_EMAIL, CONTACT_PHONES, ADDRESS, LINKEDIN_URL } from "@/lib/seo";
import { SERVICES } from "@/lib/offerings";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0a1630",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "ZyraTec Solutions | AI & Software Development Company",
    template: "%s",
  },

  description:
    "ZyraTec builds AI-powered applications, custom software and digital solutions for businesses. Based in Trichy, Tamil Nadu, India, turning ideas into technology.",

  keywords: [
    "ZyraTec",
    "zyratec",
    "ZyraTec Solutions",
    "zryatec",
    "zyratec solutions trichy",
    "software company Trichy",
    "software company India",
    "software development company Tamil Nadu",
    "AI development company India",
    "AI development",
    "software development",
    "custom software development",
    "data analytics",
    "cloud solutions",
    "cybersecurity",
    "digital products",
    "ZELDA women safety app",
    "women safety app India",
    "women safety",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "ZyraTec Solutions | AI & Software Development Company",
    description:
      "ZyraTec builds AI-powered applications, custom software and digital solutions for businesses. Based in Trichy, Tamil Nadu, India.",
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ZyraTec — AI and software development company in Trichy, India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZyraTec Solutions | AI & Software Development Company",
    description:
      "AI-powered applications, custom software and digital solutions for businesses. Based in Trichy, Tamil Nadu, India.",
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },

  manifest: "/manifest.webmanifest",

  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Tiruchirappalli (Trichy), Tamil Nadu, India",
    "geo.position": "10.7905;78.7047",
    ICBM: "10.7905, 78.7047",
  },

  verification: {
    google: "google31b0da4419ec65c5",
    // other: { "msvalidate.01": "your-bing-verification-code" },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: [
        "ZyraTec Solutions",
        "ZyraTec AI",
        "ZyraTec Trichy",
        "ZyraTec Technologies",
      ],
      slogan: "Engineering intelligence. Building what's next.",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 320,
        height: 228,
      },
      founder: { "@id": `${SITE_URL}/#founder` },
      description:
        "ZyraTec is a software company in Trichy, Tamil Nadu, India building AI systems, enterprise software, data platforms, cloud solutions, cybersecurity and the ZELDA women safety app.",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONES[0],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT_PHONES[0],
        email: CONTACT_EMAIL,
        contactType: "sales",
        areaServed: ["IN", "Worldwide"],
        availableLanguage: ["English", "Tamil"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      areaServed: ["Tiruchirappalli", "Tamil Nadu", "India", "Worldwide"],
      sameAs: LINKEDIN_URL ? [LINKEDIN_URL] : undefined,
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#org-service`,
      name: SITE_NAME,
      alternateName: ["ZyraTec Solutions", "ZyraTec AI", "ZyraTec Trichy"],
      url: SITE_URL,
      image: OG_IMAGE,
      priceRange: "₹₹",
      telephone: CONTACT_PHONES[0],
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "22:00",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "ZyraTec services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.tagline,
            url: `${SITE_URL}/services/${s.slug}`,
          },
        })),
      },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#founder`,
      name: "Bragatheesh V",
      alternateName: "Bragatheesh",
      jobTitle: "Founder & CEO",
      description:
        "Bragatheesh V is the Founder and Chief Executive Officer of ZyraTec, a software and AI company in Trichy, Tamil Nadu, India. He sets the company's direction, markets and partnerships, and leads the team behind the ZELDA women safety app.",
      image: `${SITE_URL}/team/bragatheesh-v.webp`,
      url: `${SITE_URL}/leadership/bragatheesh-v`,
      worksFor: { "@id": `${SITE_URL}/#organization` },
      knowsAbout: [
        "Artificial Intelligence",
        "Generative AI",
        "Software Engineering",
        "Women Safety Technology",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: ["ZyraTec Solutions", "ZyraTec AI", "ZyraTec Trichy"],
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-IN"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <JsonLd data={organizationSchema} />
        <Navbar />

        <div className="flex-1">{children}</div>

        <Footer />
      </body>
    </html>
  );
}
