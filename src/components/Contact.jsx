import React, { useState } from "react";

const Contact = () => {
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
    // Placeholder — replace with actual form handling
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your message. I will get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section className="section section--gradient" id="contact">
      {/* Atmosphere orbs */}
      <div className="gradient-orb gradient-orb--top-left" aria-hidden="true" />
      <div
        className="gradient-orb gradient-orb--bottom-left"
        aria-hidden="true"
      />

      <div
        className="container-page"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Get In Touch
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.2fr)",
            gap: "var(--space-3xl)",
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <div>
            <p
              style={{
                fontSize: "var(--text-lg)",
                color: "var(--color-muted)",
                lineHeight: 1.6,
                marginBottom: "var(--space-xl)",
              }}
            >
              Ready to get accurate B2B leads that your sales team can actually
              use? Send me a message or find me on Upwork.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-md)",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  Email
                </span>
                <a
                  href="mailto:muhammad.zaryab@example.com"
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-accent)",
                  }}
                >
                  muhammad.zaryab@example.com
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  Upwork
                </span>
                <a
                  href="https://www.upwork.com/freelancers/muhammadz67"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-accent)",
                  }}
                >
                  View my profile →
                </a>
              </div>

              <div>
                <span
                  style={{
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    display: "block",
                    marginBottom: "var(--space-2xs)",
                  }}
                >
                  Availability
                </span>
                <span
                  style={{
                    fontSize: "var(--text-base)",
                    color: "var(--color-ink-2)",
                  }}
                >
                  Mon–Fri, 9 AM – 6 PM PST
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-md)",
            }}
          >
            <div>
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                id="name"
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
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
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
              <label className="label" htmlFor="service">
                Service Needed
              </label>
              <select
                id="service"
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
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input"
                placeholder="Tell me about your project and target audience..."
              />
            </div>

            <div style={{ marginTop: "var(--space-xs)" }}>
              <button type="submit" className="chip">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <style>{`
        @media (max-width: 60rem) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
