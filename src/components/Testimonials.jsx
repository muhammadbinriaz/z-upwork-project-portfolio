import React from "react";

const DURATION_BASE = 40000;
const ROWS = 2;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="loop-slider__inner">
        {children}
        {/* Duplicate for seamless loop */}
        {children}
      </div>
    </div>
  );
};

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
        "Working with Muhammad on contact list building was a great experience. He's detail-oriented, reliable, and actually cares about quality.",
      name: "Michael Chen",
      role: "Founder",
      company: "Growth Agency",
    },
    {
      content:
        "Excellent work on email research and lead generation tasks. Accurate, well-targeted, delivered in a clean format.",
      name: "Emma Rodriguez",
      role: "Marketing Manager",
      company: "Real Estate Pro",
    },
    {
      content:
        "Great working with Muhammad — highly recommend. Delivered exactly what was needed, on time and within budget.",
      name: "David Kim",
      role: "CEO",
      company: "StartupLaunch",
    },
    {
      content:
        "Muhammad cleaned 50,000+ CRM records for us. The database went from unusable to organized and error-free in under two weeks.",
      name: "James Wilson",
      role: "Operations Lead",
      company: "Enterprise SaaS",
    },
  ];

  return (
    <section
      className="section--tight"
      style={{
        borderTop: "1px solid var(--color-rule)",
        borderBottom: "1px solid var(--color-rule)",
        position: "relative",
      }}
    >
      <div
        className="container-page"
        style={{ marginBottom: "var(--space-2xl)" }}
      >
        <h2 style={{ color: "var(--color-ink)" }}>Client Feedback</h2>
      </div>

      {/* Infinite loop carousel */}
      <div
        className="testimonial-carousel"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-md)",
          position: "relative",
          overflow: "hidden",
          paddingBlock: "var(--space-md)",
        }}
      >
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION_BASE - 10000, DURATION_BASE + 10000)}
            reverse={i % 2 === 1}
          >
            {testimonials.map((testimonial, j) => (
              <div
                key={`${i}-${j}`}
                className="testimonial-card"
                style={{
                  flexShrink: 0,
                  width: "clamp(300px, 28vw, 380px)",
                  backgroundColor: "var(--color-paper-2)",
                  border: "1px solid var(--color-rule)",
                  borderRadius: "var(--radius-lg)",
                  padding: "var(--space-lg)",
                  marginRight: "var(--space-md)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-sm)",
                  transition: "border-color 220ms var(--ease-out)",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-accent)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-rule)";
                }}
              >
                <p
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-ink-2)",
                    lineHeight: 1.6,
                    flex: 1,
                  }}
                >
                  "{testimonial.content}"
                </p>
                <div>
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-ink)",
                      fontWeight: 500,
                      marginBottom: "2px",
                    }}
                  >
                    {testimonial.name}
                  </p>
                  <p
                    style={{
                      fontSize: "var(--text-xs)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </InfiniteLoopSlider>
        ))}

        {/* Edge fades */}
        <div
          className="testimonial-fade testimonial-fade--left"
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "clamp(80px, 12vw, 200px)",
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to right, var(--color-paper) 0%, transparent 100%)",
          }}
        />
        <div
          className="testimonial-fade testimonial-fade--right"
          aria-hidden="true"
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "clamp(80px, 12vw, 200px)",
            zIndex: 2,
            pointerEvents: "none",
            background:
              "linear-gradient(to left, var(--color-paper) 0%, transparent 100%)",
          }}
        />
      </div>

      <style>{`
        .loop-slider {
          flex-shrink: 0;
          width: 100%;
          overflow: hidden;
        }

        .loop-slider__inner {
          display: flex;
          width: fit-content;
          animation: testimonial-loop var(--duration) linear infinite;
          animation-direction: var(--direction);
        }

        .loop-slider:hover .loop-slider__inner {
          animation-play-state: paused;
        }

        @keyframes testimonial-loop {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .loop-slider__inner {
            animation-duration: 0ms !important;
          }
        }

        [data-theme="light"] .testimonial-fade--left {
          background: linear-gradient(to right, var(--color-paper) 0%, transparent 100%) !important;
        }
        [data-theme="light"] .testimonial-fade--right {
          background: linear-gradient(to left, var(--color-paper) 0%, transparent 100%) !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;