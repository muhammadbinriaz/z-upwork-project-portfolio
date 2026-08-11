import React from "react";

const ACCENTS = ["mint", "cyan", "pear", "mint", "cyan"];
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
        {children}
      </div>
    </div>
  );
};

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

const Testimonials = () => {
  return (
    <section className="section" style={{ borderTop: "1px solid var(--color-rule)" }}>
      <div className="container-page">
        <div className="section__head">
          <span className="eyebrow">
            <span className="eyebrow__dot eyebrow__dot--cyan"></span>
            Client feedback
          </span>
          <h2 className="section__title">
            What They Say
          </h2>
        </div>

        {/* Infinite loop carousel */}
        <div
          className="testimonial-carousel"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-md)",
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
                  className="premium-card voice"
                  data-accent={ACCENTS[j % ACCENTS.length]}
                  style={{
                    flexShrink: 0,
                    width: "clamp(300px, 28vw, 380px)",
                    padding: "var(--space-lg)",
                    marginRight: "var(--space-md)",
                  }}
                >
                  <p className="voice__text">
                    "{testimonial.content}"
                  </p>
                  <p className="voice__by">
                    <span className="voice__chip" aria-hidden="true"></span>
                    <span>
                      <b>{testimonial.name}</b> · {testimonial.role}, {testimonial.company}
                    </span>
                  </p>
                </div>
              ))}
            </InfiniteLoopSlider>
          ))}
        </div>
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .loop-slider__inner {
            animation-duration: 0ms !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;