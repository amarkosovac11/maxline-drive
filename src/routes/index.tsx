import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Car,
  ShieldCheck,
  CalendarClock,
  GraduationCap,
  ClipboardList,
  BookOpen,
  Award,
  Users,
  Wind,
  Wrench,
  Star,
  ArrowRight,
  Send,
  FileText,
  Smartphone,
  Scale,
  FolderOpen,
  ExternalLink,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroImg from "@/assets/hero-driving.jpg";
import aboutImg from "@/assets/about-car.jpg";
import logoNew from "@/assets/logoNew.jpg";
import car1 from "@/assets/car-1.jpg";
import ins1 from "@/assets/instructor-1.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://sbmaxline.com/#website",
              url: "https://sbmaxline.com/",
              name: "Autoškola SB Maxline",
              alternateName: "SB Maxline",
              inLanguage: "bs",
            },
            {
              "@type": "WebPage",
              "@id": "https://sbmaxline.com/#webpage",
              url: "https://sbmaxline.com/",
              name: "Autoškola SB Maxline Sarajevo | Obuka vozača B kategorije",
              description:
                "Autoškola SB Maxline u Sarajevu pruža profesionalnu teorijsku i praktičnu obuku vozača B kategorije uz iskusnog instruktora i podršku do ispita.",
              isPartOf: { "@id": "https://sbmaxline.com/#website" },
              about: { "@id": "https://sbmaxline.com/#organization" },
              primaryImageOfPage: {
                "@id": "https://sbmaxline.com/#primaryimage",
              },
              inLanguage: "bs",
            },
            {
              "@type": "ImageObject",
              "@id": "https://sbmaxline.com/#primaryimage",
              url: "https://sbmaxline.com/og-image.jpg",
              width: 902,
              height: 561,
            },
            {
              "@type": "DrivingSchool",
              "@id": "https://sbmaxline.com/#organization",
              name: "Autoškola SB Maxline",
              alternateName: "SB Maxline",
              url: "https://sbmaxline.com/",
              logo: "https://sbmaxline.com/logo.jpg",
              image: { "@id": "https://sbmaxline.com/#primaryimage" },
              telephone: "+38733815115",
              email: "sbmaxline@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gradačačka 1, Merkur Shopping Center",
                postalCode: "71000",
                addressLocality: "Sarajevo",
                addressCountry: "BA",
              },
              areaServed: [
                { "@type": "City", name: "Sarajevo" },
                { "@type": "AdministrativeArea", name: "Novi Grad Sarajevo" },
                { "@type": "Place", name: "Otoka" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "https://schema.org/Monday",
                    "https://schema.org/Tuesday",
                    "https://schema.org/Wednesday",
                    "https://schema.org/Thursday",
                    "https://schema.org/Friday",
                  ],
                  opens: "08:30",
                  closes: "16:30",
                },
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+38733815115",
                  contactType: "customer service",
                  availableLanguage: ["bs"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+38762436001",
                  contactType: "customer service",
                  availableLanguage: ["bs"],
                },
              ],
              hasMap:
                "https://www.google.com/maps/search/?api=1&query=Grada%C4%8Da%C4%8Dka%201%2C%20Merkur%20Shopping%20Center%2C%2071000%20Sarajevo",
              sameAs: [
                "https://www.facebook.com/autoskola.maxline/",
                "https://www.instagram.com/sbmaxline/",
              ],
            },
          ],
        }),
      },
    ],
  }),
});

// -------------------------------------------------------------
// Podaci (lako izmjenjivo)
// -------------------------------------------------------------

const NAV = [
  { href: "#pocetna", label: "Početna" },
  { href: "#o-nama", label: "O nama" },
  { href: "#obuka", label: "Obuka" },
  { href: "#vozila", label: "Vozila" },
  { href: "#instruktori", label: "Instruktori" },
  { href: "#galerija", label: "Galerija" },
  { href: "#materijali", label: "Materijali" },
  { href: "#kontakt", label: "Kontakt" },
];

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Iskusni i strpljivi instruktori",
    text: "Naši instruktori posvećeni su svakom kandidatu i prilagođavaju obuku vašem tempu učenja.",
  },
  {
    icon: Car,
    title: "Moderna i sigurna vozila",
    text: "Vozni park redovno održavamo i opremljen je za ugodnu i sigurnu obuku.",
  },
  {
    icon: CalendarClock,
    title: "Fleksibilni termini vožnje",
    text: "Termine prilagođavamo vašim obavezama – jutro, popodne ili vikendom.",
  },
  {
    icon: ShieldCheck,
    title: "Podrška do položenog ispita",
    text: "Sa vama smo od prve prijave do polaganja – bez pritiska, sa punom podrškom.",
  },
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Prijava u autoškolu",
    text: "Popunite prijavu i preuzmite raspored obuke.",
  },
  {
    icon: BookOpen,
    title: "Teorijska nastava",
    text: "Naučite propise, saobraćajne znakove i sigurnu vožnju.",
  },
  {
    icon: Car,
    title: "Praktična obuka vožnje",
    text: "Individualni časovi vožnje sa iskusnim instruktorom.",
  },
  {
    icon: Award,
    title: "Polaganje vozačkog ispita",
    text: "Pripremljeni izlazite na teorijski i praktični dio ispita.",
  },
];

const SERVICES = [
  {
    title: "B kategorija",
    text: "Obuka za putničke automobile do 3.500 kg i najviše 8+1 sjedišta.",
  },
  {
    title: "Teorijska nastava",
    text: "Predavanja iz saobraćajnih propisa, sigurnosti i prve pomoći.",
  },
  {
    title: "Praktična obuka",
    text: "Individualni časovi vožnje po propisanom programu.",
  },
  {
    title: "Dodatni časovi vožnje",
    text: "Dodatna praksa za veće samopouzdanje prije ispita.",
  },
];

const VEHICLES = [
  {
    img: car1,
    name: "Vozilo za obuku – gradska vožnja",
    features: [
      "Prilagođeno kandidatima",
      "Redovno održavano",
      "Klimatizovano",
      "Sigurno i jednostavno za upravljanje",
    ],
  },
];

const INSTRUCTORS = [
  {
    img: ins1,
    name: "Safet Borčilo",
    role: "Instruktor vožnje – B kategorija",
    bio: "Iskusan instruktor posvećen sigurnoj i kvalitetnoj obuci. Strpljivim pristupom pomaže svakom kandidatu da stekne znanje i samopouzdanje za volanom.",
  },
];

const galleryImages = import.meta.glob<string>("../../images/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

const GALLERY_DIMENSIONS: Record<string, { width: number; height: number }> = {
  "viber_image_2026-07-29_11-22-55-574.jpg": { width: 1024, height: 1024 },
  "viber_image_2026-07-29_13-36-06-378.jpg": { width: 1600, height: 1205 },
  "viber_image_2026-07-29_13-36-06-561.jpg": { width: 1600, height: 1205 },
  "viber_image_2026-07-29_13-36-06-813.jpg": { width: 1205, height: 1600 },
  "viber_image_2026-07-29_13-36-06-868.jpg": { width: 1600, height: 1205 },
  "viber_image_2026-07-29_13-36-08-437.jpg": { width: 903, height: 1599 },
  "viber_image_2026-07-29_13-36-08-499.jpg": { width: 1600, height: 1600 },
  "viber_image_2026-07-29_13-36-08-605.jpg": { width: 1600, height: 1200 },
  "viber_image_2026-07-29_13-36-09-266.jpg": { width: 1600, height: 1200 },
  "viber_image_2026-07-29_13-36-09-338.jpg": { width: 1600, height: 1205 },
  "viber_image_2026-07-29_13-36-09-496.jpg": { width: 1600, height: 1200 },
  "viber_image_2026-07-29_13-36-09-605.jpg": { width: 1600, height: 1200 },
  "viber_image_2026-07-29_13-36-09-716.jpg": { width: 1600, height: 1200 },
  "viber_image_2026-07-29_13-36-10-059.jpg": { width: 1205, height: 1600 },
};

const GALLERY = Object.entries(galleryImages)
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "";
    return {
      src,
      ...GALLERY_DIMENSIONS[fileName],
    };
  });

const TESTIMONIALS = [
  {
    name: "Amina S.",
    text: "Odlična autoškola! Instruktor je bio strpljiv i profesionalan. Položila sam iz prve.",
  },
  {
    name: "Haris B.",
    text: "Termini su bili fleksibilni, vozila moderna. Preporučujem svakom mladom vozaču.",
  },
  {
    name: "Nejra M.",
    text: "Osjećala sam se sigurno tokom cijele obuke. Hvala SB timu na podršci!",
  },
];

type LearningResource = {
  title: string;
  description: string;
  buttonLabel: string;
  url: string;
  icon: LucideIcon;
};

const LEARNING_RESOURCES: LearningResource[] = [
  {
    title: "Testovna pitanja – Oblast I",
    description:
      "Katalog testovnih pitanja iz prve oblasti za pripremu teoretskog dijela vozačkog ispita.",
    buttonLabel: "Pogledaj pitanja – Oblast I",
    url: "https://mo.ks.gov.ba/sites/mo.ks.gov.ba/files/2024-07/katalog%20testovnih%20pitanja-Oblast%20I.pdf",
    icon: FileText,
  },
  {
    title: "Testovna pitanja – Oblast II",
    description:
      "Katalog testovnih pitanja iz druge oblasti za pripremu teoretskog dijela vozačkog ispita.",
    buttonLabel: "Pogledaj pitanja – Oblast II",
    url: "https://mo.ks.gov.ba/sites/mo.ks.gov.ba/files/2024-07/Katalog%20testovnih%20pitanja-Oblast%20II.pdf",
    icon: FileText,
  },
  {
    title: "Testovna pitanja – Oblast III",
    description:
      "Katalog testovnih pitanja iz treće oblasti za pripremu teoretskog dijela vozačkog ispita.",
    buttonLabel: "Pogledaj pitanja – Oblast III",
    url: "https://mo.ks.gov.ba/sites/mo.ks.gov.ba/files/2024-07/katalog%20testovnih%20pitanja-Oblast%20III.pdf",
    icon: FileText,
  },
  {
    title: "Testovna pitanja – Oblast IV",
    description:
      "Katalog testovnih pitanja iz četvrte oblasti za pripremu teoretskog dijela vozačkog ispita.",
    buttonLabel: "Pogledaj pitanja – Oblast IV",
    url: "https://mo.ks.gov.ba/sites/mo.ks.gov.ba/files/2024-07/Katalog%20testovnih%20pitanja-Oblast%20IV.pdf",
    icon: FileText,
  },
  {
    title: "Aplikacija za testove vožnje",
    description:
      "Android aplikacija za vježbanje testova i pripremu za polaganje vozačkog ispita.",
    buttonLabel: "Preuzmi Android aplikaciju",
    url: "https://play.google.com/store/apps/details?id=com.drivertestovi",
    icon: Smartphone,
  },
  {
    title: "Zakon o osnovama bezbjednosti saobraćaja",
    description:
      "Zakon o osnovama bezbjednosti saobraćaja na putevima u Bosni i Hercegovini, zajedno sa izmjenama i dopunama.",
    buttonLabel: "Otvori zakon",
    url: "https://bihamk.ba/assets/files/1767707983-zakon-o-osnovima-bezbjednosti-saobracaja-na-putevima-u-bih-sa-izmjenama-i-dopunama.pdf",
    icon: Scale,
  },
  {
    title: "Dodatni materijal",
    description:
      "Dodatni materijal koji je instruktor pripremio ili preporučio kandidatima.",
    buttonLabel: "Otvori dodatni materijal",
    url: "https://share.google/Pqm1knbOVJ2M2CXgk",
    icon: FolderOpen,
  },
];

const CONTACT = {
  phone: "033 815-115",
  phone2: "062 436 001",
  email: "sbmaxline@gmail.com",
  address: "Gradačačka 1, Merkur Shopping Center, 71000 Sarajevo",
  hours: "Pon – Pet: 08:30 – 16:30\nSubota, nedjelja i praznici: neradni",
  instagram: "https://www.instagram.com/sbmaxline/",
  facebook: "https://www.facebook.com/autoskola.maxline/",
  mapsEmbed:
    "https://www.google.com/maps?q=Grada%C4%8Da%C4%8Dka%201%2C%20Sarajevo&output=embed",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Grada%C4%8Da%C4%8Dka%201%2C%20Merkur%20Shopping%20Center%2C%2071000%20Sarajevo",
};

// -------------------------------------------------------------
// Komponente
// -------------------------------------------------------------

function Logo({ className = "h-11 w-32" }: { className?: string }) {
  return (
    <span
      className={`relative block shrink-0 overflow-hidden rounded-md bg-[#faf9f5] ${className}`}
      role="img"
      aria-label="Autoškola SB Max Line"
    >
      <img
        src={logoNew}
        alt=""
        width={1024}
        height={1024}
        decoding="async"
        className="absolute inset-0 h-full w-full scale-[1.08] object-cover"
      />
    </span>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-white/95 backdrop-blur border-b border-border shadow-[var(--shadow-soft)]"
          : "bg-white/80 backdrop-blur-sm")
      }
    >
      <div className="container-x flex h-18 items-center justify-between py-3">
        <a href="#pocetna" className="flex items-center gap-2 shrink-0">
          <Logo className="h-12 w-36 sm:h-14 sm:w-40" />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-[var(--shadow-red)]">
            <a href="#kontakt">Prijavi se</a>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meni"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container-x py-3 flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 text-base font-medium text-foreground border-b border-border/60"
              >
                {n.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-4 bg-primary hover:bg-primary-dark text-primary-foreground"
              onClick={() => setOpen(false)}
            >
              <a href="#kontakt">Prijavi se</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="pocetna" className="relative pt-28 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-blue/10 text-brand-blue px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            <ShieldCheck className="h-3.5 w-3.5" /> Autoškola u Sarajevu
          </span>
          <h1 className="mt-5 text-xl font-bold leading-tight text-brand-blue sm:text-2xl">
            Autoškola SB Maxline Sarajevo
          </h1>
          <div className="mt-3 text-4xl font-extrabold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
            <span className="block">UČI ZA ŽIVOT,</span>
            <span className="block text-primary">NE ZA ISPIT.</span>
          </div>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Profesionalna obuka, iskusni instruktori i podrška tokom svakog
            koraka do vaše vozačke dozvole.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-[var(--shadow-red)]"
            >
              <a href="#kontakt">
                Prijavi se za obuku <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground font-semibold"
            >
              <a href="#kontakt">Kontaktirajte nas</a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground italic">
            SB – mjesto gdje snovi počinju.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 lg:-inset-6 bg-gradient-to-br from-primary/20 via-brand-blue/10 to-transparent rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
            <img
              src={heroImg}
              alt="Kandidat i instruktor Autoškole SB u vozilu za obuku"
              width={902}
              height={561}
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-cover aspect-[16/10]"
            />
          </div>
          <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white rounded-2xl border border-border shadow-[var(--shadow-card)] px-5 py-4 items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
              <Award className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold">1.000+</div>
              <div className="text-xs text-muted-foreground">zadovoljnih kandidata</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={"max-w-2xl " + (center ? "mx-auto text-center" : "")}>
      {eyebrow && (
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-foreground">
        {title}
      </h2>
      {text && (
        <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
          {text}
        </p>
      )}
    </div>
  );
}

function Features() {
  return (
    <section className="py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Zašto SB"
          title="Zašto izabrati Autoškolu SB"
          text="Fokusirani smo na vašu sigurnost, samopouzdanje i pravilno ponašanje u saobraćaju."
          center
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-brand-blue group-hover:text-brand-blue-foreground transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="o-nama" className="py-20 lg:py-24">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="rounded-3xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
            <img
              src={aboutImg}
              alt="Vozilo Autoškole SB Maxline za obuku vozača u Sarajevu"
              width={902}
              height={667}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-6 bg-primary text-primary-foreground rounded-2xl px-6 py-5 shadow-[var(--shadow-red)]">
            <div className="text-3xl font-extrabold">15+</div>
            <div className="text-sm opacity-90">godina iskustva</div>
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="O nama" title="Vaš partner do vozačke dozvole" />
          <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Autoškola SB pruža kvalitetnu i profesionalnu obuku kandidata,
            sa fokusom na sigurnost, samopouzdanje i pravilno ponašanje u
            saobraćaju. Naš cilj nije samo da položite vozački ispit, već da
            postanete siguran i odgovoran vozač.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Individualni pristup svakom kandidatu",
              "Moderno opremljena učionica i vozila",
              "Priprema koja daje trajno znanje",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 h-5 w-5 rounded-full bg-brand-blue/15 text-brand-blue grid place-items-center shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary-dark text-primary-foreground font-semibold"
            >
              <a href="#kontakt">Saznajte više o nama</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="obuka" className="py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Proces obuke"
          title="Četiri koraka do vozačke dozvole"
          text="Jasan i strukturiran put od prve prijave do polaganja ispita."
          center
        />
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-border" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                className="relative rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground grid place-items-center font-bold text-lg shadow-[var(--shadow-red)]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <s.icon className="h-6 w-6 text-brand-blue" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="usluge" className="py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kategorije i usluge"
          title="Naša ponuda obuke"
          text="Sve što je potrebno da postanete siguran vozač, na jednom mjestu."
          center
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                <BookOpen className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {s.text}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-5 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground"
              >
                <a href="#kontakt">Pošaljite upit</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vehicles() {
  return (
    <section id="vozila" className="py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Vozila"
          title="Moderna i redovno održavana"
          text="Naš vozni park prilagođen je kandidatima – siguran, ugodan i jednostavan za upravljanje."
          center
        />
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VEHICLES.map((v) => (
            <div
              key={v.name}
              className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={v.img}
                  alt={v.name}
                  loading="lazy"
                  width={902}
                  height={667}
                  decoding="async"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{v.name}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {v.features.map((f) => {
                    const Icon =
                      f.toLowerCase().includes("klim") ? Wind :
                      f.toLowerCase().includes("održa") || f.toLowerCase().includes("servisi") ? Wrench :
                      f.toLowerCase().includes("sigur") ? ShieldCheck : Car;
                    return (
                      <li key={f} className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-brand-blue shrink-0" />
                        <span>{f}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Instructors() {
  return (
    <section id="instruktori" className="py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Naš tim"
          title="Iskusni instruktori"
          text="Profesionalci koji su tu za vas – strpljivo, jasno i sigurno."
          center
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTRUCTORS.map((p) => (
            <div
              key={p.name}
              className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow"
            >
              <div className="aspect-[4/5] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={`${p.name}, instruktor vožnje B kategorije`}
                  loading="lazy"
                  width={1200}
                  height={1600}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
                <div className="mt-1 text-sm text-brand-blue font-medium">{p.role}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.bio}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="mt-5 w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground"
                >
                  <a href="#kontakt">
                    <Users className="h-4 w-4 mr-2" /> Kontakt
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VehiclesAndInstructor() {
  const vehicle = VEHICLES[0];
  const instructor = INSTRUCTORS[0];

  return (
    <section
      id="vozila"
      className="relative py-20 lg:py-24 bg-secondary/50"
    >
      <span id="instruktori" className="absolute top-0" aria-hidden="true" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Vozilo i instruktor"
          title="Sigurna obuka uz iskusnog instruktora"
          text="Upoznajte instruktora koji će vas voditi kroz obuku i vozilo prilagođeno sigurnoj i ugodnoj vožnji."
          center
        />

        <div className="mt-14 mx-auto grid max-w-5xl md:grid-cols-2 gap-6 items-start">
          <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={instructor.img}
                alt={`${instructor.name}, instruktor vožnje B kategorije`}
                loading="lazy"
                width={1200}
                height={1600}
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground">
                {instructor.name}
              </h3>
              <div className="mt-1 text-sm text-brand-blue font-medium">
                {instructor.role}
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {instructor.bio}
              </p>
              <Button
                asChild
                variant="outline"
                className="mt-5 w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground"
              >
                <a href="#kontakt">
                  <Users className="h-4 w-4 mr-2" /> Kontakt
                </a>
              </Button>
            </div>
          </article>

          <article className="rounded-2xl overflow-hidden bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img
                src={vehicle.img}
                alt={vehicle.name}
                loading="lazy"
                width={902}
                height={667}
                decoding="async"
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-foreground">
                {vehicle.name}
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {vehicle.features.map((feature) => {
                  const Icon =
                    feature.toLowerCase().includes("klim") ? Wind :
                    feature.toLowerCase().includes("održa") ||
                    feature.toLowerCase().includes("servisi") ? Wrench :
                    feature.toLowerCase().includes("sigur") ? ShieldCheck : Car;
                  return (
                    <li key={feature} className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-brand-blue shrink-0" />
                      <span>{feature}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState<(typeof GALLERY)[number] | null>(null);
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? GALLERY : GALLERY.slice(0, 6);

  return (
    <section id="galerija" className="py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Galerija"
          title="Trenuci iz naše autoškole"
          center
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {visibleImages.map((image, i) => (
            <button
              key={image.src}
              onClick={() => setActive(image)}
              className={
                "group relative overflow-hidden rounded-2xl bg-muted border border-border " +
                (i === 0 ? "col-span-2 md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" : "aspect-square")
              }
            >
              <img
                src={image.src}
                alt={`Fotografija iz Autoškole SB Maxline u Sarajevu ${i + 1}`}
                width={image.width}
                height={image.height}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </button>
          ))}
        </div>
        {GALLERY.length > 6 && (
          <div className="mt-8 flex justify-center">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => setShowAll((current) => !current)}
              className="min-w-44 border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-blue-foreground font-semibold"
            >
              {showAll ? "Prikaži manje" : `Prikaži više (${GALLERY.length - 6})`}
            </Button>
          </div>
        )}
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-0 shadow-none">
          <DialogTitle className="sr-only">Fotografija galerije</DialogTitle>
          {active && (
            <img
              src={active.src}
              alt="Fotografija iz Autoškole SB Maxline u Sarajevu"
              width={active.width}
              height={active.height}
              decoding="async"
              className="w-full h-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function LearningMaterials() {
  return (
    <section id="materijali" className="scroll-mt-20 py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Priprema za ispit"
          title="Korisni materijali za kandidate"
          text="Na jednom mjestu pronađite testovna pitanja, zakonske propise, aplikacije i druge materijale koji vam mogu pomoći tokom pripreme za vozački ispit."
          center
        />

        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-12 max-w-4xl space-y-3"
        >
          {LEARNING_RESOURCES.map((resource, index) => (
            <AccordionItem
              key={resource.title}
              value={`resource-${index}`}
              className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-[var(--shadow-soft)] sm:px-6"
            >
              <AccordionTrigger className="gap-4 py-5 text-base font-bold hover:no-underline sm:text-lg">
                <span className="flex min-w-0 items-center gap-3 text-left">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <resource.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>{resource.title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pl-0 sm:pl-[3.25rem]">
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
                  {resource.description}
                </p>
                <Button
                  asChild
                  className="mt-5 h-auto min-h-11 w-full whitespace-normal bg-primary px-5 py-3 text-center font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:bg-primary-dark sm:w-auto"
                >
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.buttonLabel}
                    <ExternalLink className="ml-2 h-4 w-4 shrink-0" />
                  </a>
                </Button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Iskustva kandidata"
          title="Šta kažu naši kandidati"
          center
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-card border border-border p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex gap-1 text-primary">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-border text-sm font-semibold text-foreground">
                {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBanner() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground px-6 sm:px-10 py-14 lg:py-16 shadow-[var(--shadow-red)]">
          <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Spremni ste da započnete svoj put do vozačke dozvole?
            </h2>
            <p className="mt-4 text-lg opacity-90">
              Kontaktirajte Autoškolu SB i saznajte sve informacije o
              prijavi, terminima i obuci.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-bold"
              >
                <a href="#kontakt">
                  Prijavi se odmah <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const formRecipient = "amarkosovac11@gmail.com";
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Unesite ime i prezime";
    if (form.name.length > 100) e.name = "Ime je predugačko";
    if (!form.phone.trim() || form.phone.trim().length < 6) e.phone = "Unesite ispravan broj telefona";
    if (form.phone.length > 40) e.phone = "Broj je predugačak";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Unesite ispravan e-mail";
    if (form.email.length > 200) e.email = "E-mail je predugačak";
    if (!form.category) e.category = "Odaberite kategoriju";
    if (!form.message.trim() || form.message.trim().length < 5) e.message = "Unesite poruku";
    if (form.message.length > 1000) e.message = "Poruka je preduga";
    return e;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${formRecipient}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            "Ime i prezime": form.name.trim(),
            Telefon: form.phone.trim(),
            Email: form.email.trim(),
            Kategorija: form.category,
            Poruka: form.message.trim(),
            _replyto: form.email.trim(),
            _subject: "Novi upit sa stranice Autoškole SB Max Line",
            _template: "table",
          }),
        },
      );

      const result = await response.json();
      if (!response.ok || result.success === false) {
        throw new Error("Slanje nije uspjelo");
      }

      toast.success(
        "Hvala! Vaš upit je poslan. Kontaktiraćemo Vas uskoro.",
      );
      setForm({ name: "", phone: "", email: "", category: "", message: "" });
      setErrors({});
    } catch {
      toast.error(
        "Upit trenutno nije moguće poslati. Pokušajte ponovo ili nas kontaktirajte telefonom.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Ime i prezime *</Label>
          <Input
            id="name"
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-1.5"
            placeholder="npr. Amina Hodžić"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <Label htmlFor="phone">Broj telefona *</Label>
          <Input
            id="phone"
            maxLength={40}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-1.5"
            placeholder="+387 ..."
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            id="email"
            type="email"
            maxLength={200}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1.5"
            placeholder="ime@primjer.ba"
          />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
        <div>
          <Label>Kategorija *</Label>
          <Select
            value={form.category}
            onValueChange={(v) => setForm({ ...form, category: v })}
          >
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Odaberite kategoriju" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="B">B kategorija</SelectItem>
              <SelectItem value="teorija">Teorijska nastava</SelectItem>
              <SelectItem value="praksa">Praktična obuka</SelectItem>
              <SelectItem value="dodatni">Dodatni časovi</SelectItem>
            </SelectContent>
          </Select>
          {errors.category && <p className="mt-1 text-xs text-destructive">{errors.category}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="message">Poruka *</Label>
        <Textarea
          id="message"
          rows={5}
          maxLength={1000}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-1.5"
          placeholder="Kratko nam recite šta Vas zanima..."
        />
        {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-[var(--shadow-red)]"
      >
        <Send className="h-4 w-4 mr-2" />
        {isSubmitting ? "Šaljem..." : "Pošalji upit"}
      </Button>
    </form>
  );
}

function Contact() {
  return (
    <section id="kontakt" className="py-20 lg:py-24 bg-secondary/50">
      <div className="container-x">
        <SectionHeading
          eyebrow="Kontakt"
          title="Kontaktirajte nas"
          text="Odgovaramo brzo – pošaljite upit ili nas nazovite."
          center
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-[var(--shadow-soft)]">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, label: "Telefon", value: CONTACT.phone, href: "tel:+38733815115" },
              { icon: Phone, label: "Mobilni telefon", value: CONTACT.phone2, href: "tel:+38762436001" },
              { icon: Mail, label: "E-mail", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: MapPin, label: "Adresa", value: CONTACT.address, href: CONTACT.mapsUrl },
              { icon: Clock, label: "Radno vrijeme", value: CONTACT.hours },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl bg-card border border-border p-5 flex gap-4 items-start shadow-[var(--shadow-soft)]">
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {c.label}
                  </div>
                  {c.href ? (
                    <a href={c.href} className="mt-0.5 block font-semibold text-foreground hover:text-primary transition-colors break-words">
                      {c.value}
                    </a>
                  ) : (
                    <div className="mt-0.5 font-semibold text-foreground break-words whitespace-pre-line">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex-1 rounded-2xl bg-card border border-border p-4 flex items-center justify-center gap-2 hover:border-brand-blue hover:text-brand-blue transition-colors font-semibold"
              >
                <Instagram className="h-5 w-5" /> Instagram
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex-1 rounded-2xl bg-card border border-border p-4 flex items-center justify-center gap-2 hover:border-brand-blue hover:text-brand-blue transition-colors font-semibold"
              >
                <Facebook className="h-5 w-5" /> Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-soft)]">
          <iframe
            src={CONTACT.mapsEmbed}
            title="Google mapa – Autoškola SB"
            className="w-full h-[360px] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-foreground text-white/85">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl p-3 inline-block">
            <Logo className="h-14 w-40" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Autoškola SB – profesionalna obuka i podrška do vaše vozačke
            dozvole u Sarajevu.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">Brzi linkovi</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="text-white/70 hover:text-white transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">Kontakt</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <span>
                <a href="tel:+38733815115" className="hover:text-white">
                  {CONTACT.phone}
                </a>
                <br />
                <a href="tel:+38762436001" className="hover:text-white">
                  {CONTACT.phone2}
                </a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-white">
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {CONTACT.address}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="h-4 w-4 mt-0.5 shrink-0" />
              <span className="whitespace-pre-line">{CONTACT.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">Društvene mreže</h2>
          <div className="mt-4 flex gap-3">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-10 w-10 rounded-lg bg-white/10 hover:bg-primary grid place-items-center transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-10 w-10 rounded-lg bg-white/10 hover:bg-primary grid place-items-center transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 text-xs text-white/60 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Autoškola SB. Sva prava zadržana.</div>
          <div>Sarajevo, Bosna i Hercegovina</div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Process />
        <Services />
        <VehiclesAndInstructor />
        <Gallery />
        <LearningMaterials />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="top-center" />
    </div>
  );
}
