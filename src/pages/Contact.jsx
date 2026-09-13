import React, { useState } from "react";
import ContactForm from "../components/Contact";

const agencyMetrics = [
  { value: "6", label: "Core specialists on every build", accent: "mint" },
  { value: "128+", label: "Projects delivered as a team", accent: "cyan" },
  { value: "5.0", label: "Upwork client rating", accent: "pear" },
  { value: "<4h", label: "Avg. first reply to new briefs", accent: "coral" },
];

const steps = [
  {
    num: "01",
    title: "You reach out",
    text: "Send the form or book a consultation. Share goals, ICP or stack, scope, and timeline.",
  },
  {
    num: "02",
    title: "We align on scope",
    text: "We confirm services, deliverables, tools, and timeline within 24 hours — and assign the right specialists.",
  },
  {
    num: "03",
    title: "The team executes",
    text: "Research, verify, enrich, clean CRM data, automate, or build web — owned by the lane that fits.",
  },
  {
    num: "04",
    title: "You get delivery",
    text: "CRM-ready files, verified data, automations, or shipped web work — ready to use.",
  },
];

const faqs = [
  {
    accent: "mint",
    q: "What information do you need to get started?",
    a: "Project goals, which services you need (research, enrichment, CRM cleanup, automations, web), audience or stack details, and preferred deliverable format when data is involved.",
  },
  {
    accent: "cyan",
    q: "How quickly can you deliver?",
    a: "Most research and data projects ship in 3–7 business days depending on scope. Web and automation timelines are scoped on the brief. Rush options are available for smaller builds.",
  },
  {
    accent: "pear",
    q: "What tools do you use for verification?",
    a: "Apollo, LinkedIn Sales Navigator, Hunter, NeverBounce, ZeroBounce, Clay, and ContactOut — chosen based on your data requirements.",
  },
  {
    accent: "coral",
    q: "Do you work with agencies and teams?",
    a: "Yes. We work with SaaS companies, marketing agencies, sales teams, and founders — one-off projects, recurring research retainers, and multi-service engagements.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      {/* Hero */}
      <section
        className="section section--page-hero"
        style={{ borderBottom: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--coral"></span>
              Let&apos;s talk
            </span>
            <h1 className="section__title" style={{ maxWidth: "none" }}>
              Get in <em className="hl hl--mint">touch</em>
            </h1>
            <p className="section__lede">
              Need lead research, data ops, automations, or a web build?
              Tell us the brief — we assign the right specialists and reply within 24 hours.
            </p>
          </div>

          <div className="contact-trust">
            <div className="contact-trust__head">
              <span className="contact-trust__eyebrow">
                <span className="eyebrow__dot eyebrow__dot--mint"></span>
                GoLeadFinder · Agency track record
              </span>
              <p className="contact-trust__note">
                A coordinated research crew on every project.
              </p>
            </div>
            <ul className="contact-trust__metrics">
              {agencyMetrics.map((metric) => (
                <li
                  key={metric.label}
                  className={`contact-trust__metric contact-trust__metric--${metric.accent}`}
                >
                  <span className="contact-trust__value">{metric.value}</span>
                  <span className="contact-trust__label">{metric.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section
        className="section section--band section--mint"
        style={{ borderBlock: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              What happens next
            </span>
            <h2 className="section__title" style={{ maxWidth: "none" }}>
              From first message to delivered work.
            </h2>
            <p className="section__lede">
              A straightforward process — no endless back-and-forth, no mystery deliverables.
            </p>
          </div>

          <ol className="step-rail step-rail--compact">
            {steps.map((step) => (
              <li key={step.num} className="step-rail__item">
                <span className="step-rail__num" aria-hidden="true">
                  {step.num}
                </span>
                <div className="step-rail__body">
                  <h3 className="step-rail__title">{step.title}</h3>
                  <p className="step-rail__text">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-page">
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--cyan"></span>
              Common questions
            </span>
            <h2 className="section__title" style={{ maxWidth: "none" }}>
              Before you reach out
            </h2>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              const panelId = `faq-panel-${i}`;

              return (
                <article
                  key={faq.q}
                  className={`faq-item faq-item--${faq.accent}${isOpen ? " is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="faq-item__trigger"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  >
                    <span className="faq-item__index">{String(i + 1).padStart(2, "0")}</span>
                    <span className="faq-item__q">{faq.q}</span>
                    <span className="faq-item__icon" aria-hidden="true" />
                  </button>
                  <div
                    id={panelId}
                    className="faq-item__body"
                    role="region"
                    aria-hidden={!isOpen}
                  >
                    <div className="faq-item__body-inner">
                      <p className="faq-item__a">{faq.a}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form last — page CTA after context */}
      <ContactForm embedded={false} />
    </>
  );
};

export default Contact;
