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
    color: "var(--color-mint)",
    title: "You reach out",
    text: "Send the form or book a consultation. Include your ICP, industry, and list size.",
  },
  {
    num: "02",
    color: "var(--color-accent-2)",
    title: "We align on scope",
    text: "We confirm targeting criteria, tools, deliverable format, and timeline within 24 hours.",
  },
  {
    num: "03",
    color: "var(--color-accent)",
    title: "The team builds your list",
    text: "Research, verify emails, enrich data, and format everything CRM-ready.",
  },
  {
    num: "04",
    color: "var(--color-accent-3)",
    title: "You get clean data",
    text: "Delivered in Google Sheets, Excel, or direct CRM import — ready for outreach.",
  },
];

const faqs = [
  {
    accent: "mint",
    q: "What information do you need to get started?",
    a: "Your ideal customer profile (industry, company size, job titles, geography), expected list size, and preferred deliverable format (Google Sheets, Excel, HubSpot, etc.).",
  },
  {
    accent: "cyan",
    q: "How quickly can you deliver a prospect list?",
    a: "Most projects are delivered within 3–7 business days depending on list size and complexity. Rush delivery is available for smaller lists.",
  },
  {
    accent: "pear",
    q: "What tools do you use for verification?",
    a: "Apollo, LinkedIn Sales Navigator, Hunter, NeverBounce, ZeroBounce, Clay, and ContactOut — chosen based on your data requirements.",
  },
  {
    accent: "coral",
    q: "Do you work with agencies and teams?",
    a: "Yes. We work with SaaS companies, marketing agencies, sales teams, and solo founders. Recurring monthly lists and one-off projects both welcome.",
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
              Ready for a verified prospect list your sales team can import on day one?
              Tell us your ICP — we assign the right specialists and reply within 24 hours.
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

      {/* Form + contact info */}
      <ContactForm embedded={false} />

      {/* What happens next */}
      <section
        className="section section--band section--mint"
        style={{ borderBlock: "1px solid var(--color-rule)" }}
      >
        <div className="container-page">
          <div className="section__head section__head--center">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--mint"></span>
              What happens next
            </span>
            <h2 className="section__title" style={{ maxWidth: "none" }}>
              From first message to CRM-ready list.
            </h2>
            <p className="section__lede">
              A straightforward process — no endless back-and-forth, no mystery deliverables.
            </p>
          </div>

          <div className="contact-steps">
            {steps.map((step) => (
              <article key={step.num} className="premium-card contact-step process-step-card">
                <span
                  className="process-step__bg"
                  style={{ "--step-accent": step.color }}
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div className="process-step__body">
                  <h3 className="contact-step__title">
                    <span
                      className="contact-step__dot"
                      style={{ background: step.color }}
                      aria-hidden="true"
                    />
                    {step.title}
                  </h3>
                  <p className="contact-step__text">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
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
    </>
  );
};

export default Contact;
