import React from "react";
import ContactForm from "../components/Contact";

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
    text: "I confirm targeting criteria, tools, deliverable format, and timeline within 24 hours.",
  },
  {
    num: "03",
    color: "var(--color-accent)",
    title: "I build your list",
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
    q: "What information do you need to get started?",
    a: "Your ideal customer profile (industry, company size, job titles, geography), expected list size, and preferred deliverable format (Google Sheets, Excel, HubSpot, etc.).",
  },
  {
    q: "How quickly can you deliver a prospect list?",
    a: "Most projects are delivered within 3–7 business days depending on list size and complexity. Rush delivery is available for smaller lists.",
  },
  {
    q: "What tools do you use for verification?",
    a: "Apollo, LinkedIn Sales Navigator, Hunter, NeverBounce, ZeroBounce, Clay, and ContactOut — chosen based on your data requirements.",
  },
  {
    q: "Do you work with agencies and teams?",
    a: "Yes. I work with SaaS companies, marketing agencies, sales teams, and solo founders. Recurring monthly lists and one-off projects both welcome.",
  },
];

const Contact = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="section section--hero"
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
              Ready to get accurate B2B leads that your sales team can actually
              use? Send me a message or book a consultation — I reply within 24 hours.
            </p>
          </div>

          <div className="contact-stats">
            <div className="premium-card contact-stat">
              <div className="contact-stat__num">128+</div>
              <p className="contact-stat__label">Projects completed on Upwork</p>
            </div>
            <div className="premium-card contact-stat">
              <div className="contact-stat__num">5.0</div>
              <p className="contact-stat__label">Client rating · Top Rated Plus</p>
            </div>
            <div className="premium-card contact-stat">
              <div className="contact-stat__num">&lt;4h</div>
              <p className="contact-stat__label">Average response time</p>
            </div>
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
              <article key={step.num} className="premium-card contact-step">
                <p className="contact-step__num">
                  <span className="contact-step__dot" style={{ background: step.color }}></span>
                  {step.num}
                </p>
                <h3 className="contact-step__title">{step.title}</h3>
                <p className="contact-step__text">{step.text}</p>
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

          <div className="faq-list">
            {faqs.map((faq) => (
              <article key={faq.q} className="premium-card faq-item">
                <h3 className="faq-item__q">{faq.q}</h3>
                <p className="faq-item__a">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
