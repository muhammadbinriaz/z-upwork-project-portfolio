import React from "react";
import ContactComponent from "../components/Contact";

const Contact = () => {
  return (
    <>
      <section
        className="section--hero section--gradient"
        style={{
          paddingBlockEnd: "var(--space-2xl)",
          borderBottom: "1px solid var(--color-rule)",
        }}
      >
        <div
          className="gradient-orb gradient-orb--top-right"
          aria-hidden="true"
        />
        <div
          className="container-page"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h1 style={{ color: "var(--color-ink)" }}>Get In Touch</h1>
          <p
            style={{
              fontSize: "var(--text-lg)",
              color: "var(--color-muted)",
              maxWidth: "55ch",
              marginTop: "var(--space-sm)",
            }}
          >
            Ready to get accurate B2B leads that your sales team can actually
            use? Send me a message or book a consultation.
          </p>
        </div>
      </section>
      <ContactComponent />
    </>
  );
};

export default Contact;
