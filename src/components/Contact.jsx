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
      className={`section${embedded ? "" : " section--tight"}`}
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
          <aside className="contact-aside">
            <div className="premium-card contact-aside__card">
              <div className="contact-aside__head">
                <span className="eyebrow">
                  <span className="eyebrow__dot eyebrow__dot--mint"></span>
                  Direct line
                </span>
                <p className="contact-aside__lede">
                  {embedded
                    ? "Reach out directly — I reply within 24 hours."
                    : "Prefer email or Upwork? Either works."}
                </p>
              </div>

              <div className="contact-aside__links">
                <a
                  href="mailto:zaryabmuhammad@goleadfinder.com"
                  className="contact-aside__link contact-aside__link--mint"
                >
                  <span className="contact-aside__link-label">Email</span>
                  <span className="contact-aside__link-value">zaryabmuhammad@goleadfinder.com</span>
                </a>
                <a
                  href="https://www.upwork.com/freelancers/muhammadz67"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-aside__link contact-aside__link--cyan"
                >
                  <span className="contact-aside__link-label">Upwork</span>
                  <span className="contact-aside__link-value">Top Rated Plus · View profile →</span>
                </a>
              </div>

              <dl className="contact-aside__meta">
                <div className="contact-aside__meta-item">
                  <dt>Availability</dt>
                  <dd>Mon–Fri · 9 AM – 6 PM PST</dd>
                </div>
                <div className="contact-aside__meta-item">
                  <dt>Response</dt>
                  <dd>Within 24h · avg. 0–4h on Upwork</dd>
                </div>
              </dl>

              {!embedded && (
                <>
                  <div className="contact-aside__rates">
                    <div className="contact-aside__rate contact-aside__rate--mint">
                      <span className="contact-aside__rate-value">$5</span>
                      <span className="contact-aside__rate-label">/hr lead gen &amp; research</span>
                    </div>
                    <div className="contact-aside__rate contact-aside__rate--pear">
                      <span className="contact-aside__rate-value">$20</span>
                      <span className="contact-aside__rate-label">30-min consultation</span>
                    </div>
                  </div>

                  <div className="contact-aside__services">
                    <p className="contact-aside__services-label">Services</p>
                    <ul className="contact-aside__chips">
                      {services.map((service) => (
                        <li key={service} className="contact-aside__chip">{service}</li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://www.upwork.com/freelancers/muhammadz67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline btn--mint btn--block contact-aside__cta"
                  >
                    Hire Me on Upwork
                  </a>
                </>
              )}
            </div>
          </aside>

          <form onSubmit={handleSubmit} className="premium-card contact-form">
            {!embedded && (
              <div className="contact-form__head">
                <h2 className="contact-form__title">Send a message</h2>
                <p className="contact-form__lede">
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

            <div className="contact-form__submit">
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
