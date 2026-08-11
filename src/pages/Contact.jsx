import React from "react";
import PageHero from "../components/PageHero";
import SectionIntro from "../components/SectionIntro";
import ContactForm from "../components/Contact";

const steps = [
  {
    num: "01",
    title: "You reach out",
    text: "Send the form or book a consultation. Include your ICP, industry, and list size.",
  },
  {
    num: "02",
    title: "We align on scope",
    text: "We confirm targeting criteria, tools, deliverable format, and timeline within 24 hours.",
  },
  {
    num: "03",
    title: "We build your list",
    text: "Research, verify emails, enrich data, and format everything CRM-ready.",
  },
  {
    num: "04",
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
    a: "Yes. We work with SaaS companies, marketing agencies, sales teams, and solo founders. Recurring monthly lists and one-off projects both welcome.",
  },
];

const Contact = () => {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        lede="Ready for accurate B2B leads your sales team can actually use? Send a message — we reply within 24 hours."
      >
        <div className="contact-stats">
          <div className="premium-card contact-stat">
            <div className="contact-stat__num">128+</div>
            <p className="contact-stat__label">Projects on Upwork</p>
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
      </PageHero>

      <ContactForm embedded={false} />

      <section className="section section--band">
        <div className="container-page">
          <SectionIntro
            eyebrow="Process"
            title="From first message to CRM-ready list."
            lede="A straightforward workflow — no endless back-and-forth, no mystery deliverables."
            centered
          />
          <div className="contact-steps">
            {steps.map((step) => (
              <article key={step.num} className="premium-card contact-step">
                <p className="contact-step__num">
                  <span className="contact-step__dot" aria-hidden="true"></span>
                  {step.num}
                </p>
                <h3 className="contact-step__title">{step.title}</h3>
                <p className="contact-step__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionIntro
            eyebrow="FAQ"
            title="Before you reach out."
            lede="Common questions about scope, timeline, and deliverables."
          />
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
