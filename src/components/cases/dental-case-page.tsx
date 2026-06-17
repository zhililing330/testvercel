import Image from "next/image";
import { CaseShell } from "./case-shell";
import { CaseSummary } from "./case-summary";
import {
  caseCatalog,
  dentalCaseSections,
  dentalCaseSummary,
} from "@/content/cases";

type IconName =
  | "calendar"
  | "chevron"
  | "clipboard"
  | "implant"
  | "phone"
  | "pin"
  | "shield"
  | "sparkle"
  | "tooth";

const services = [
  {
    title: "Preventive checkups",
    description:
      "Routine exams, digital imaging, and clear guidance help patients spot issues early and feel in control.",
    image: "/images/service-checkup.png",
    icon: "sparkle",
    alt: "Dentist completing a gentle oral checkup",
  },
  {
    title: "Teeth whitening",
    description:
      "A safe whitening path for patients who want a brighter smile without a harsh clinical experience.",
    image: "/images/service-whitening.png",
    icon: "tooth",
    alt: "Patient receiving teeth whitening care in a modern clinic",
  },
  {
    title: "Clear aligners",
    description:
      "Personalized aligner planning with simple explanations, comfortable routines, and progress check-ins.",
    image: "/images/service-aligner.png",
    icon: "tooth",
    alt: "Clear dental aligner closeup",
  },
  {
    title: "Implant restoration",
    description:
      "Digital implant planning and restorative treatment designed to rebuild comfort, confidence, and function.",
    image: "/images/service-implant.png",
    icon: "implant",
    alt: "Dental implant model and restoration tools",
  },
] satisfies {
  title: string;
  description: string;
  image: string;
  icon: IconName;
  alt: string;
}[];

const steps = [
  {
    title: "Book a visit",
    text: "Patients choose a time online or by phone.",
    icon: "calendar",
  },
  {
    title: "Clinical review",
    text: "The team uses imaging and chairside notes to understand the case.",
    icon: "sparkle",
  },
  {
    title: "Treatment plan",
    text: "Dentists explain options, timing, comfort, and expected outcomes.",
    icon: "clipboard",
  },
  {
    title: "Care delivery",
    text: "Treatment is delivered with a calm pace and clear next steps.",
    icon: "tooth",
  },
  {
    title: "Follow-up",
    text: "The clinic keeps patients on track with review and maintenance.",
    icon: "shield",
  },
] satisfies { title: string; text: string; icon: IconName }[];

const contactItems = [
  { label: "Phone", value: "400-800-2026", icon: "phone" },
  { label: "Address", value: "88 Chenguang Road, Jing'an, Shanghai", icon: "pin" },
  { label: "Hours", value: "Monday to Friday, 09:00-18:00", icon: "calendar" },
] satisfies { label: string; value: string; icon: IconName }[];

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const shared = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.9,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "calendar":
      return (
        <svg {...shared}>
          <path d="M7 3v3M17 3v3M4.5 9.5h15M6.5 5h11A2.5 2.5 0 0 1 20 7.5v10A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10A2.5 2.5 0 0 1 6.5 5Z" />
          <path d="M8 13h3M8 16h6" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...shared}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...shared}>
          <path d="M9 5.5A2.5 2.5 0 0 1 11.5 3h1A2.5 2.5 0 0 1 15 5.5V6H9v-.5Z" />
          <path d="M8 5H6.5A2.5 2.5 0 0 0 4 7.5v11A2.5 2.5 0 0 0 6.5 21h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 17.5 5H16" />
          <path d="M8 12h8M8 16h5" />
        </svg>
      );
    case "implant":
      return (
        <svg {...shared}>
          <path d="M12 3c2.6 0 4.6 2 4.6 4.5 0 2.1-1.3 3.3-2.4 4.5-.8.9-1.2 1.7-1.2 3.1V21h-2v-5.9c0-1.4-.4-2.2-1.2-3.1-1.1-1.2-2.4-2.4-2.4-4.5C7.4 5 9.4 3 12 3Z" />
          <path d="M10.2 17h3.6M10.2 19h3.6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M8.2 4.5 10 8.7 7.8 10c1.1 2.4 2.9 4.2 5.3 5.3l1.3-2.2 4.1 1.8c.5.2.8.8.7 1.3l-.5 2.4c-.1.7-.8 1.2-1.5 1.2C10.1 19.5 4.5 13.9 4.2 6.8c0-.7.5-1.4 1.2-1.5l2.4-.5c.2-.1.3-.1.4-.3Z" />
        </svg>
      );
    case "pin":
      return (
        <svg {...shared}>
          <path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" />
          <circle cx="12" cy="10" r="2.4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3.5 19 6v5.3c0 4.3-2.9 7.9-7 9.2-4.1-1.3-7-4.9-7-9.2V6l7-2.5Z" />
          <path d="m8.8 12.1 2.1 2.1 4.4-4.7" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...shared}>
          <path d="M12 3.8 13.8 9l5.4 1.8-5.4 1.8L12 18l-1.8-5.4-5.4-1.8L10.2 9 12 3.8Z" />
          <path d="m18.5 16 .5 1.5 1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
        </svg>
      );
    case "tooth":
      return (
        <svg {...shared}>
          <path d="M12 4.4c1.5-.9 3.1-1 4.5-.2 2.1 1.2 2.7 4.1 1.4 7-.7 1.5-.8 2.9-.8 4.2 0 2.9-1 5.1-2.5 5.1-1 0-1.3-1.3-1.6-3.4-.2-1.4-.4-2.5-1-2.5s-.8 1.1-1 2.5c-.3 2.1-.6 3.4-1.6 3.4-1.5 0-2.5-2.2-2.5-5.1 0-1.3-.1-2.7-.8-4.2-1.3-2.9-.7-5.8 1.4-7 1.4-.8 3-.7 4.5.2Z" />
          <path d="M10 6.3c1.4.6 2.6.6 4 0" />
        </svg>
      );
  }
}

export function DentalCasePage() {
  return (
    <CaseShell
      brand={caseCatalog.dental.brand}
      industry={caseCatalog.dental.industry}
      navItems={dentalCaseSections}
    >
      <section id="overview" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ffffff_0%,#f7fcfd_42%,rgba(255,255,255,0)_68%)]" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:px-10 lg:py-16">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-teal-700">
              Dental case study
            </p>
            <h1 className="mt-5 text-balance text-[2.5rem] font-semibold leading-[1.12] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              <span className="block">Dental care that feels calm,</span>
              <span className="block text-teal-700">clear, and modern.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600 sm:text-xl">
              Sunny Dental presents preventive care, cosmetic services, aligner
              treatment, and implant restoration through a warm conversion path
              for local patients.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary h-14 px-8 text-base" href="#contact">
                <Icon name="calendar" className="size-5" />
                Book a consultation
              </a>
              <a className="btn-secondary h-14 px-8 text-base" href="#services">
                View services
                <Icon name="chevron" className="size-5" />
              </a>
            </div>
          </div>

          <div className="relative z-0 h-[420px] overflow-hidden rounded-[8px] shadow-[0_28px_80px_rgba(15,118,110,0.16)] sm:h-[560px] lg:-mr-16 lg:h-[660px]">
            <Image
              src="/images/clinic-hero.png"
              alt="Bright modern dental clinic treatment room"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
        <div className="relative z-10 h-14 rounded-t-[48%] bg-white" />
      </section>

      <section
        id="services"
        aria-label="Dental services"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-title">Services shaped for trust</h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            The case page keeps the original service grid and gives each
            treatment a patient-friendly explanation.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_16px_44px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_56px_rgba(15,118,110,0.16)]"
            >
              <div className="relative h-56">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative px-6 pb-7 pt-11 text-center">
                <div className="absolute left-1/2 top-0 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-teal-600/15 bg-teal-50 text-teal-700 shadow-[0_10px_28px_rgba(15,118,110,0.16)]">
                  <Icon name={service.icon} className="size-8" />
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-[8px] bg-sky-50/90 shadow-[0_18px_60px_rgba(14,116,144,0.10)] lg:grid-cols-[1fr_380px]">
          <div className="px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="section-title">A transparent visit flow</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                The migrated page keeps the original five-step patient journey
                and makes it easy to scan before booking.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  <div className="mx-auto grid size-14 place-items-center rounded-[8px] bg-white text-teal-700 shadow-[0_10px_24px_rgba(15,118,110,0.12)]">
                    <Icon name={step.icon} className="size-8" />
                  </div>
                  <div className="mx-auto mt-5 flex size-6 items-center justify-center rounded-full bg-teal-700 text-xs font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <Image
              src="/images/clinic-reception.png"
              alt="Sunny Dental reception area"
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-20"
      >
        <div>
          <h2 className="section-title text-left">Contact the clinic</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            The route closes with practical contact information and the same
            appointment form pattern as the original page.
          </p>

          <div className="mt-8 space-y-6">
            {contactItems.map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-teal-700 text-white">
                  <Icon name={item.icon} className="size-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-10 h-52 overflow-hidden rounded-[8px]">
            <Image
              src="/images/clinic-lounge.png"
              alt="Comfortable dental clinic waiting area"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <form className="rounded-[8px] bg-sky-50/80 p-6 shadow-[0_16px_48px_rgba(14,116,144,0.10)] sm:p-10">
          <h2 className="text-3xl font-semibold text-slate-950">Book a consultation</h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Share a few details and the clinic team can follow up with the next
            best appointment time.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <label className="field-label">
              <span>Name</span>
              <input className="field-control" type="text" name="name" placeholder="Your name" />
            </label>
            <label className="field-label">
              <span>Phone</span>
              <input
                className="field-control"
                type="tel"
                name="phone"
                placeholder="Your phone number"
              />
            </label>
            <label className="field-label sm:col-span-2">
              <span>Service</span>
              <select className="field-control" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service.title} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
            <label className="field-label sm:col-span-2">
              <span>Preferred date</span>
              <input className="field-control" type="date" name="date" />
            </label>
            <label className="field-label sm:col-span-2">
              <span>Notes</span>
              <textarea
                className="field-control min-h-32 resize-y"
                name="message"
                placeholder="Share your needs or questions"
              />
            </label>
          </div>

          <button className="btn-primary mt-6 h-14 w-full text-base" type="submit">
            Submit request
          </button>
        </form>
      </section>

      <CaseSummary {...dentalCaseSummary} />
    </CaseShell>
  );
}
