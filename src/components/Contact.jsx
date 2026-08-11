import React, { useState } from "react";

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message. I will get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  const idPrefix = embedded ? "" : "contact-";

  return (
    <section
      className="section"
      id={embedded ? "contact" : undefined}
      style={{ borderTop: embedded ? "1px solid var(--color-rule)" : undefined }}
    >
      <div className="container-page">
        {embedded && (
          <div className="section__head">
            <span className="eyebrow">
              <span className="eyebrow__dot eyebrow__dot--coral"></span>
              Get in touch
            </span>
            <h2 className="section__title">
              Ready to get accurate B2B leads?
            </h2>
            <p className="section__lede">
              Send me a message or book a consultation to discuss your project.
            </p>
          </div>
        )}

        <div className="grid grid--contact">
          <div>
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
              <p className="contact-info-card__value" style={{ margin: 0 }}>
                Mon–Fri, 9 AM – 6 PM PST
                <br />
                <span style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>
                  30+ hrs/week · Open to contract-to-hire
                </span>
              </p>
            </div>

            <div className="premium-card contact-info-card">
              <span className="contact-info-card__label">Response time</span>
              <p className="contact-info-card__value" style={{ margin: 0 }}>
                Within 24 hours
                <br />
                <span style={{ color: "var(--color-muted)", fontSize: "var(--text-sm)" }}>
                  Avg. reply: 0–4 hours on Upwork
                </span>
              </p>
            </div>

            {!embedded && (
              <>
                <div className="premium-card contact-info-card">
                  <span className="contact-info-card__label">Rates</span>
                  <p className="contact-info-card__value" style={{ margin: 0 }}>
                    <strong style={{ fontWeight: 600 }}>$5/hr</strong> for lead gen &amp; research
                    <br />
                    <strong style={{ fontWeight: 600 }}>$20</strong> for a 30-min consultation
                  </p>
                </div>

                <div className="premium-card contact-info-card">
                  <span className="contact-info-card__label">Services</span>
                  <ul
                    style={{
                      margin: 0,
                      padding: 0,
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.4rem",
                    }}
                  >
                    {services.map((service) => (
                      <li
                        key={service}
                        style={{
                          fontSize: "var(--text-sm)",
                          color: "var(--color-ink-2)",
                          paddingLeft: "1rem",
                          position: "relative",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: 0,
                            color: "var(--color-mint-deep)",
                          }}
                        >
                          ·
                        </span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="https://www.upwork.com/freelancers/muhammadz67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--mint btn--block"
                  style={{ marginTop: "var(--space-md)" }}
                >
                  Hire Me on Upwork
                </a>
              </>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="premium-card"
            style={{
              padding: "var(--space-xl)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            {!embedded && (
              <div style={{ marginBottom: "var(--space-xs)" }}>
                <h2
                  style={{
                    fontSize: "var(--text-2xl)",
                    color: "var(--color-ink)",
                    marginBottom: "var(--space-xs)",
                    lineHeight: 1.2,
                  }}
                >
                  Send a message
                </h2>
                <p style={{ fontSize: "var(--text-sm)", color: "var(--color-muted)", margin: 0 }}>
                  Tell me about your target audience, industry, and how many leads you need.
                  I&apos;ll reply with a plan and timeline.
                </p>
              </div>
            )}

            <div>
              <label className="label" htmlFor={`${idPrefix}name`}>
                Name
              </label>
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
              <label className="label" htmlFor={`${idPrefix}email`}>
                Email
              </label>
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
              <label className="label" htmlFor={`${idPrefix}service`}>
                Service Needed
              </label>
              <select
                id={`${idPrefix}service`}
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="input"
                style={{ cursor: "pointer" }}
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
              <label className="label" htmlFor={`${idPrefix}message`}>
                Message
              </label>
              <textarea
                id={`${idPrefix}message`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={embedded ? 5 : 6}
                className="input"
                placeholder="Tell me about your project, target audience, and ideal contact criteria..."
              />
            </div>

            <div style={{ marginTop: "var(--space-xs)" }}>
              <button type="submit" className="btn btn--mint btn--block">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
