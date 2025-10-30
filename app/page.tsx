import Link from "next/link";

const services = [
  {
    title: "Custom Web Applications",
    description:
      "Scalable, secure, and performance-optimized applications built with modern frameworks tailored to your business workflows.",
    highlights: ["Next.js & React specialists", "API-first development", "Robust authentication & security"]
  },
  {
    title: "Marketing Websites",
    description:
      "High-converting marketing sites designed with UX best practices, SEO foundations, and seamless CMS integrations.",
    highlights: ["Conversion-focused UX", "Headless CMS expertise", "Analytics & automation"]
  },
  {
    title: "E-commerce Platforms",
    description:
      "End-to-end e-commerce solutions with intuitive product management, secure checkout, and growth-ready architecture.",
    highlights: ["Headless commerce", "Payment integrations", "Retention strategy tooling"]
  }
];

const differentiators = [
  {
    title: "Full-Stack Craftsmanship",
    text: "We own the entire stack, from infrastructure and APIs to pixel-perfect UI."
  },
  {
    title: "Transparent Delivery",
    text: "Weekly demos, shared roadmaps, and nimble iterations keep every stakeholder aligned."
  },
  {
    title: "Performance Obsessed",
    text: "Every build ships with rigorous Lighthouse audits, accessibility checks, and automated QA."
  }
];

const processSteps = [
  {
    title: "Discover & Strategize",
    text: "We align on goals, target audience, and product vision to create a prioritized roadmap."
  },
  {
    title: "Design & Prototype",
    text: "Rapid prototyping and design systems translate strategy into intuitive user journeys."
  },
  {
    title: "Build & Integrate",
    text: "Composable architecture, clean code, and automated tests ensure long-term maintainability."
  },
  {
    title: "Launch & Optimize",
    text: "We deploy, monitor, and iterate with data-driven enhancements post-launch."
  }
];

const caseStudies = [
  {
    name: "Aurora SaaS Platform",
    outcome: "Increased product-qualified leads by 64% and reduced onboarding time by 32%.",
    stack: "Next.js, Supabase, Stripe, Segment"
  },
  {
    name: "LiftCommerce",
    outcome: "Improved conversion rate by 21% with a headless commerce approach and optimized checkout.",
    stack: "Next.js, Shopify Hydrogen, Algolia"
  },
  {
    name: "Atlas Ventures",
    outcome: "Delivered a content-rich, CMS-powered site with 95+ Lighthouse scores across the board.",
    stack: "Next.js, Sanity CMS, Vercel"
  }
];

const faqs = [
  {
    question: "How quickly can you start a new project?",
    answer:
      "We can typically kick off within two weeks after aligning on scope. For urgent engagements, we offer accelerated onboarding."
  },
  {
    question: "Do you support existing codebases?",
    answer:
      "Yes. We often modernize legacy stacks, optimize performance, or extend existing platforms with new capabilities."
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "Most partnerships run 8-16 weeks with agile delivery, dedicated product management, and a fixed weekly cadence of strategy sessions."
  }
];

const navigation = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 -z-10" />
      <header className="noise border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-2 text-lg font-semibold text-slate-900">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 text-white">
              N
            </span>
            NovaForge Digital
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-brand-500">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
          >
            Start a project
          </Link>
        </div>
      </header>

      <section className="noise relative mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pt-28" id="hero">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center rounded-full border border-brand-100 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Web Development Services
            </span>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build high-performing websites that convert and scale with your roadmap.
            </h1>
            <p className="max-w-xl text-lg text-slate-600">
              We design, build, and launch web experiences that move business metrics. From marketing
              sites to complex SaaS platforms, we deliver clean architecture, thoughtful UX, and fast
              performance.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/30 transition hover:bg-brand-600"
              >
                Book a discovery call
              </Link>
              <Link
                href="#work"
                className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-200 hover:text-brand-600"
              >
                View our work
              </Link>
            </div>
            <div className="flex flex-wrap gap-10 pt-6 text-sm text-slate-500">
              <div>
                <p className="text-3xl font-semibold text-slate-900">120+</p>
                <p>Web products launched</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">98%</p>
                <p>Client retention rate</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-slate-900">4.9/5</p>
                <p>Average engagement rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-12 -top-12 hidden h-24 w-24 rounded-full border border-brand-200/70 md:block" />
            <div className="absolute -right-16 bottom-0 hidden h-32 w-32 rounded-full border border-brand-200/70 lg:block" />
            <div className="relative rounded-3xl border border-white/60 bg-white/70 p-6 shadow-xl backdrop-blur">
              <div className="space-y-6 rounded-3xl bg-slate-900 px-6 py-10 text-white">
                <p className="text-xs uppercase tracking-[0.35em] text-brand-200">Trusted By</p>
                <div className="grid gap-6 md:grid-cols-2">
                  {["Growth-stage SaaS", "Enterprise Marketing", "VC-backed Startups", "Boutique Agencies"].map(
                    (item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
                        {item}
                      </div>
                    )
                  )}
                </div>
                <p className="text-sm text-brand-100/80">
                  “They ship polished experiences faster than any partner we’ve worked with.”
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
                  — Director of Product, Atlas Ventures
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Tailored web development for modern teams
            </h2>
          </div>
          <p className="max-w-xl text-slate-600">
            From strategy and UX to deployment and optimization, we partner with your team to launch
            future-proof products that drive measurable outcomes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:border-brand-200 hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition group-hover:opacity-100">
                <div className="h-full w-full bg-gradient-to-br from-brand-50 via-white to-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10" id="process">
        <div className="rounded-3xl bg-slate-900/95 p-8 text-white md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">Process</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Reliable delivery, from discovery to launch
              </h2>
            </div>
            <p className="max-w-xl text-sm text-slate-200/80">
              Our product-minded engineers embed with your team, aligning every sprint with growth metrics
              and launch milestones.
            </p>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-200/50 text-lg font-semibold text-brand-100">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-200/80">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Proven results across industries
            </h2>
          </div>
          <p className="max-w-xl text-slate-600">
            We collaborate with startups, scaleups, and enterprise teams to design and build digital
            products that grow revenue and strengthen brand perception.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <div key={item.name} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Case Study</p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.name}</h3>
              <p className="mt-4 text-sm text-slate-600">{item.outcome}</p>
              <div className="mt-6 rounded-2xl bg-brand-50/70 px-4 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-brand-600">
                {item.stack}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-slate-200/80 bg-white px-8 py-12 shadow-md md:px-12">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Testimonials</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                “Our product velocity doubled within the first month.”
              </h2>
            </div>
            <div className="space-y-6 text-sm text-slate-600">
              <p>
                “NovaForge Digital was the partner we needed to tackle an ambitious roadmap. Their team is
                proactive, deeply technical, and cares about business outcomes. They brought the same level
                of care to design as they did to infrastructure.”
              </p>
              <div>
                <p className="text-sm font-semibold text-slate-900">Mia Chen</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  VP Product, Elevate Analytics
                </p>
              </div>
              <div className="flex items-center gap-6 pt-4 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span>Product Strategy</span>
                <span>UX Engineering</span>
                <span>Platform Scaling</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {differentiators.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">
                Differentiator
              </p>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl border border-slate-200/80 bg-white p-10 shadow-sm md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Insights</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                Expert guidance to accelerate your roadmap
              </h2>
            </div>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                Quarterly strategy workshops and stack audits
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                Performance, accessibility, and SEO enhancements backed by analytics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-500" />
                Embedded product, design, and engineering specialists
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="rounded-3xl bg-slate-900/95 px-10 py-12 text-white shadow-lg md:px-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-200">FAQs</p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Working with NovaForge Digital
              </h2>
              <p className="mt-6 text-sm text-slate-200">
                We provide flexible engagement models including fixed-scope builds, dedicated squads, and
                continuous improvement retainers.
              </p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <h3 className="text-sm font-semibold text-white">{faq.question}</h3>
                  <p className="mt-3 text-sm text-slate-200/90">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 pb-24 pt-20 md:px-10 md:pb-28 md:pt-24"
      >
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-500">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Let’s build what’s next
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              Share your product vision, timeline, and budget. We’ll reply within one business day with a
              tailored next step.
            </p>
            <div className="mt-8 grid gap-6 text-sm text-slate-600 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Email</p>
                <Link href="mailto:hello@novaforgedigital.com" className="mt-2 block text-slate-900">
                  hello@novaforgedigital.com
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Phone</p>
                <Link href="tel:+14153381234" className="mt-2 block text-slate-900">
                  +1 (415) 338-1234
                </Link>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">HQ</p>
                <p className="mt-2 text-slate-900">San Francisco, CA</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-500">Availability</p>
                <p className="mt-2 text-slate-900">Limited Q3 openings</p>
              </div>
            </div>
          </div>
          <form className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Jane Doe"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
              >
                Company
              </label>
              <input
                id="company"
                name="company"
                placeholder="Acme Inc."
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
              >
                Project Snapshot
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your goals, requirements, and timeline..."
                className="mt-2 h-32 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm transition focus:border-brand-200 focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-600"
            >
              Request proposal
            </button>
            <p className="text-xs text-slate-400">
              By submitting this form you confirm that you have read and agree to our privacy policy.
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-slate-500 md:flex-row md:items-center md:justify-between md:px-10">
          <div className="flex items-center gap-2 text-slate-700">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-semibold text-white">
              N
            </span>
            © {new Date().getFullYear()} NovaForge Digital. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-brand-500">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-brand-500">
              Terms
            </Link>
            <Link href="https://cal.com" target="_blank" className="transition hover:text-brand-500">
              Book a call
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
