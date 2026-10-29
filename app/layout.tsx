import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, SITE_NAME, OG_IMAGE, CONTACT_EMAIL, CONTACT_PHONES, ADDRESS, LINKEDIN_URL } from "@/lib/seo";

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
    default:
      "ZyraTec | Software, AI & Women Safety App Company in India",
    template: "%s",
  },

  description:
    "ZyraTec is a software company in Trichy, India building AI development, enterprise software, data, cloud, cybersecurity solutions and ZELDA women safety app.",

  keywords: [
    "ZyraTec",
    "zyratec",
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
    title: "ZyraTec | Software, AI & Women Safety App Company in India",
    description:
      "AI · Software · Data · Cloud · Cybersecurity · Digital Products · ZELDA women safety app. A software company in Trichy, India building intelligent systems.",
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "ZyraTec — Engineering Intelligence. Building What's Next.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ZyraTec | Software, AI & Women Safety App Company in India",
    description:
      "Software company in Trichy, India — AI development, enterprise software, data, cloud, cybersecurity and ZELDA women safety app.",
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
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
      },
      description:
        "ZyraTec is a software company in Trichy, Tamil Nadu, India building AI systems, enterprise software, data platforms, cloud solutions, cybersecurity and the ZELDA women safety app.",
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONES[0],
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.region,
        postalCode: ADDRESS.postalCode,
        addressCountry: ADDRESS.country,
      },
      areaServed: ["Tiruchirappalli", "Tamil Nadu", "India", "Worldwide"],
      sameAs: [LINKEDIN_URL],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: SITE_NAME,
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
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: "ZyraTec AI",
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
