import React, { useState } from "react";
import SectionIntro from "./SectionIntro";

const services = [
  "B2B Lead Generation",
  "Contact Research",
  "Data Enrichment",
  "Email List Building",
  "LinkedIn Research",
  "CRM Data Cleaning",
];

const Contact = ({ embedded = true }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message. I will get back to you within 24 hours.");
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const idPrefix = embedded ? "" : "contact-";

  return (
    <section
      className={`section${embedded ? " section--band" : " section--tight"}`}
      id={embedded ? "contact" : undefined}
      style={embedded ? undefined : { borderTop: "1px solid var(--color-rule)" }}
    >
      <div className="container-page">
        {embedded && (
          <SectionIntro
            eyebrow="Get in touch"
            title="Let's build your next prospect list."
            lede="Send a message or book a consultation — we reply within 24 hours."
            centered
          />
        )}

        <div className="grid grid--contact">
          <div className="contact-sidebar">
            <div className="premium-card contact-info-card">
              <span className="contact-info-card__label">Email</span>
              <a
                href="mailto:zaryabmuhammad@goleadfinder.com"
                className="text-link contact-info-card__value"
              >
                zaryabmuhammad@goleadfinder.com
              </a>
            </div>

            <div className="premium-card contact-info-card">
              <span className="contact-info-card__label">Upwork</span>
              <a
                href="https://www.upwork.com/freelancers/muhammadz67"
                target="_blank"
                rel="noopener noreferrer"
                className="text-link contact-info-card__value"
              >
                Top Rated Plus · View profile →
              </a>
            </div>

            <div className="premium-card contact-info-card">
              <span className="contact-info-card__label">Availability</span>
              <p className="contact-info-card__value">
                Mon–Fri, 9 AM – 6 PM PST
                <span className="contact-info-card__sub">
                  30+ hrs/week · Open to contract-to-hire
                </span>
              </p>
            </div>

            <div className="premium-card contact-info-card">
              <span className="contact-info-card__label">Response time</span>
              <p className="contact-info-card__value">
                Within 24 hours
                <span className="contact-info-card__sub">
                  Avg. reply: 0–4 hours on Upwork
                </span>
              </p>
            </div>

            {!embedded && (
              <>
                <div className="premium-card contact-info-card">
                  <span className="contact-info-card__label">Rates</span>
                  <p className="contact-info-card__value">
                    <strong>$5/hr</strong> for lead gen &amp; research
                    <br />
                    <strong>$20</strong> for a 30-min consultation
                  </p>
                </div>

                <div className="premium-card contact-info-card">
                  <span className="contact-info-card__label">Services</span>
                  <ul className="contact-info-card__list">
                    {services.map((service) => (
                      <li key={service}>{service}</li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.upwork.com/freelancers/muhammadz67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--ink btn--block"
                >
                  Hire on Upwork
                </a>
              </>
            )}
          </div>

          <form onSubmit={handleSubmit} className="premium-card contact-form">
            {!embedded && (
              <div className="contact-form__head">
                <h2 className="contact-form__title">Send a message</h2>
                <p className="contact-form__lede">
                  Tell us about your target audience, industry, and how many leads
                  you need. We&apos;ll reply with a plan and timeline.
                </p>
              </div>
            )}

            <div>
              <label className="label" htmlFor={`${idPrefix}name`}>Name</label>
              <input
                id={`${idPrefix}name`}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="label" htmlFor={`${idPrefix}email`}>Email</label>
              <input
                id={`${idPrefix}email`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="label" htmlFor={`${idPrefix}service`}>Service</label>
              <select
                id={`${idPrefix}service`}
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="input contact-form__select"
              >
                <option value="">Select a service</option>
                <option value="lead-generation">B2B Lead Generation</option>
                <option value="contact-research">Contact Research</option>
                <option value="data-enrichment">Data Enrichment</option>
                <option value="email-list">Email List Building</option>
                <option value="crm-cleanup">CRM Data Cleaning</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="label" htmlFor={`${idPrefix}message`}>Message</label>
              <textarea
                id={`${idPrefix}message`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={embedded ? 5 : 6}
                className="input"
                placeholder="Your ICP, industry, list size, and deliverable format..."
              />
            </div>

            <button type="submit" className="btn btn--ink btn--block">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
