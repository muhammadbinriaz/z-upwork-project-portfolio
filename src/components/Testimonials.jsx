import React from "react";
import SectionIntro from "./SectionIntro";

const ROWS = 2;
const DURATION_BASE = 40000;
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => (
  <div
    className="loop-slider"
    style={{
      "--duration": `${duration}ms`,
      "--direction": reverse ? "reverse" : "normal",
    }}
  >
    <div className="loop-slider__inner">{children}{children}</div>
  </div>
);

const stats = [
  { value: "5.0", label: "Average rating" },
  { value: "128+", label: "Projects delivered" },
  { value: "<4h", label: "Response time" },
];

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
    <section className="section section--band" id="testimonials">
      <div className="container-page">
        <SectionIntro
          eyebrow="Client feedback"
          title="Trusted by teams who need accurate data."
          lede="Real reviews from SaaS, agency, and enterprise clients on Upwork."
          centered
        />

        <div className="stats-band">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-band__item">
              <span className="stats-band__value">{stat.value}</span>
              <span className="stats-band__label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="testimonial-carousel">
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
                  style={{
                    flexShrink: 0,
                    width: "clamp(300px, 28vw, 380px)",
                    padding: "var(--space-lg)",
                    marginRight: "var(--space-md)",
                  }}
                >
                  <p className="voice__text">&ldquo;{testimonial.content}&rdquo;</p>
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
    </section>
  );
};

export default Testimonials;
