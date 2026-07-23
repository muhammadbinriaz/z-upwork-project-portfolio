import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      content:
        "Outstanding work on the B2B lead generation project. The prospects matched our target audience perfectly, and the final list was CRM-ready.",
      name: "Sarah Johnson",
      role: "Sales Director",
      company: "TechFlow SaaS",
    },
    {
      content:
        "Working with Muhammad on contact list building was a great experience. He's detail-oriented, reliable, and actually cares about quality. The contact information was accurate and well-targeted.",
      name: "Michael Chen",
      role: "Founder",
      company: "Growth Agency",
    },
    {
      content:
        "Excellent work on email research and lead generation tasks. The contact information was accurate, well-targeted, and delivered in a clean format. Highly recommend.",
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      company: "Real Estate Pro",
    },
  ];

  return (
    <section
      className="section--tight"
      style={{
        borderTop: "1px solid var(--color-rule)",
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      <div className="container-page">
        <h2
          style={{
            color: "var(--color-ink)",
            marginBottom: "var(--space-2xl)",
          }}
        >
          Client Feedback
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "var(--space-2xl)",
          }}
          className="testimonial-grid"
        >
          {testimonials.map((testimonial, i) => (
            <div key={testimonial.name} className="pull-quote">
              <p
                style={{
                  fontSize: "var(--text-lg)",
                  color: "var(--color-ink-2)",
                  lineHeight: 1.6,
                  marginBottom: "var(--space-md)",
                }}
              >
                {testimonial.content}
              </p>
              <span className="attribution">
                {testimonial.name}
                <br />
                <span style={{ color: "var(--color-muted)" }}>
                  {testimonial.role}, {testimonial.company}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 60rem) {
          .testimonial-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
