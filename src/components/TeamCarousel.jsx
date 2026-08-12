import React, { useState, useId, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  A11y,
  Mousewheel,
} from "swiper/modules";
import gsap from "gsap";
import { teamMembers } from "../data/team";
import TeamIllustration from "./TeamIllustration";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const illustrationMap = {
  mint: "mint",
  cyan: "cyan",
  coral: "coral",
  pear: "pear",
  lavender: "lavender",
};

const TeamCarousel = () => {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const navId = useId().replace(/:/g, "");

  const stageRef = useRef(null);
  const cursorRef = useRef(null);
  const swiperRef = useRef(null);
  const detailRef = useRef(null);
  const userPickedRef = useRef(false);

  const member = teamMembers[active];

  const selectMember = useCallback((index, fromUser = false) => {
    setActive(index);
    swiperRef.current?.slideTo(index);
    if (fromUser) userPickedRef.current = true;
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const cursor = cursorRef.current;
    if (!stage || !cursor) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!finePointer) return;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, force3D: true });

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.28, ease: "power2.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.28, ease: "power2.out" });

    const setPosition = (clientX, clientY) => {
      const rect = stage.getBoundingClientRect();
      xTo(clientX - rect.left);
      yTo(clientY - rect.top);
    };

    const onMove = (e) => setPosition(e.clientX, e.clientY);
    const onEnter = (e) => {
      setPosition(e.clientX, e.clientY);
      cursor.classList.add("is-visible");
    };
    const onLeave = () => {
      cursor.classList.remove("is-visible");
      setIsDragging(false);
    };

    stage.addEventListener("mousemove", onMove);
    stage.addEventListener("mouseenter", onEnter);
    stage.addEventListener("mouseleave", onLeave);

    return () => {
      stage.removeEventListener("mousemove", onMove);
      stage.removeEventListener("mouseenter", onEnter);
      stage.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(cursor);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 960px)").matches) return;

    const detail = detailRef.current;
    if (!detail || !userPickedRef.current) return;

    userPickedRef.current = false;
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [active]);

  const renderPortrait = (person, className, isPhoto = Boolean(person.photo)) => {
    const photoStyle = person.photoPosition
      ? { objectPosition: person.photoPosition }
      : undefined;

    if (person.photo) {
      return (
        <img
          src={person.photo}
          alt=""
          className={`${className}${isPhoto ? " is-photo" : ""}`}
          style={photoStyle}
          loading="lazy"
        />
      );
    }
    return (
      <TeamIllustration
        variant={illustrationMap[person.accent] ?? "mint"}
        className={className}
      />
    );
  };

  const detailPanel = (
    <article
      ref={detailRef}
      className={`team-detail premium-card team-detail--${member.accent}`}
      key={member.id}
      aria-live="polite"
    >
      <div className="team-detail__hero">
        <div className="team-detail__avatar team-detail__avatar--large">
          {renderPortrait(member, "team-detail__avatar-img")}
        </div>
        <div className="team-detail__intro">
          <p className="team-detail__role">{member.role}</p>
          <h3 className="team-detail__name">{member.name}</h3>
          {member.bioLead && (
            <p className="team-detail__lead">{member.bioLead}</p>
          )}
          <span className="team-detail__index" aria-hidden="true">
            {String(active + 1).padStart(2, "0")} / {String(teamMembers.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {member.facts?.length > 0 && (
        <dl className="team-detail__facts">
          {member.facts.map((fact) => (
            <div key={fact.label} className="team-detail__fact">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="team-detail__story">
        <div className="team-detail__copy">
          <p className="team-detail__bio">{member.bio}</p>
          {member.bioExtra && (
            <p className="team-detail__bio team-detail__bio--extra">{member.bioExtra}</p>
          )}
        </div>
        {member.highlights?.length > 0 && (
          <ul className="team-detail__highlights">
            {member.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <ul className="team-detail__skills">
        {member.skills.map((skill) => (
          <li key={skill} className={`team-chip team-chip--${member.accent}`}>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );

  return (
    <section className="section team-section" aria-labelledby={`${navId}-title`}>
      <div className="container-page">
        <div className="section__head section__head--center">
          <span className="eyebrow">
            <span className="eyebrow__dot eyebrow__dot--mint"></span>
            The team
          </span>
          <h2 id={`${navId}-title`} className="section__title">
            Six specialists. One pipeline engine.
          </h2>
          <p className="section__lede">
            Pick someone below — their full profile updates instantly beside
            the carousel.
          </p>
        </div>

        <div className="team-carousel">
          <div className="team-carousel__toolbar">
            <p className="team-carousel__toolbar-label">Quick select</p>
            <div className="team-picker" role="tablist" aria-label="Team members">
              {teamMembers.map((person, i) => (
                <button
                  key={person.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  className={`team-picker__chip${active === i ? " is-active" : ""} team-picker__chip--${person.accent}`}
                  onClick={() => selectMember(i, true)}
                >
                  <span className="team-picker__thumb">
                    {renderPortrait(person, "team-picker__photo")}
                  </span>
                  <span className="team-picker__name">{person.name.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="team-carousel__workspace">
            <div className="team-carousel__picker">
              <div
                ref={stageRef}
                className={`team-carousel__stage${isDragging ? " is-grabbing" : ""}`}
              >
                <div ref={cursorRef} className="team-carousel__cursor" aria-hidden="true">
                  <span className="team-carousel__cursor-bubble">
                    <span className="team-carousel__cursor-label">Swipe</span>
                  </span>
                </div>

                <Swiper
                  className="team-carousel__swiper"
                  modules={[Navigation, Pagination, Keyboard, A11y, Mousewheel]}
                  slidesPerView={1.1}
                  centeredSlides
                  spaceBetween={16}
                  grabCursor={false}
                  simulateTouch
                  threshold={3}
                  touchRatio={1}
                  longSwipesRatio={0.2}
                  passiveListeners={false}
                  mousewheel={{
                    forceToAxis: true,
                    sensitivity: 1,
                    thresholdDelta: 4,
                    releaseOnEdges: true,
                  }}
                  keyboard={{ enabled: true }}
                  pagination={{
                    clickable: true,
                    el: `.team-carousel__dots-${navId}`,
                  }}
                  navigation={{
                    prevEl: `.team-carousel__prev-${navId}`,
                    nextEl: `.team-carousel__next-${navId}`,
                  }}
                  breakpoints={{
                    960: { slidesPerView: 1.15, spaceBetween: 20 },
                  }}
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    setActive(swiper.realIndex);
                  }}
                  onSlideChange={(swiper) => {
                    setActive(swiper.realIndex);
                    setIsDragging(false);
                  }}
                  onSliderFirstMove={() => setIsDragging(true)}
                  onTouchEnd={() => setIsDragging(false)}
                  onTouchCancel={() => setIsDragging(false)}
                >
                  {teamMembers.map((person, i) => (
                    <SwiperSlide key={person.id}>
                      <div
                        role="button"
                        tabIndex={0}
                        className={`team-card premium-card team-card--${person.accent}${active === i ? " is-active" : ""}`}
                        onClick={() => selectMember(i, true)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            selectMember(i, true);
                          }
                        }}
                        aria-pressed={active === i}
                        aria-label={`View ${person.name}, ${person.role}`}
                      >
                        <div className="team-card__visual">
                          {renderPortrait(person, "team-card__photo")}
                          <span className="team-card__stat">
                            <span className="team-card__stat-value">{person.stat.value}</span>
                            <span className="team-card__stat-label">{person.stat.label}</span>
                          </span>
                        </div>
                        <div className="team-card__body">
                          <p className="team-card__role">{person.role}</p>
                          <h3 className="team-card__name">{person.name}</h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="team-carousel__controls">
                <button
                  type="button"
                  className={`team-carousel__nav team-carousel__prev-${navId}`}
                  aria-label="Previous team member"
                >
                  ←
                </button>
                <div
                  className={`team-carousel__dots team-carousel__dots-${navId}`}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className={`team-carousel__nav team-carousel__next-${navId}`}
                  aria-label="Next team member"
                >
                  →
                </button>
              </div>
            </div>

            <div className="team-carousel__detail">{detailPanel}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarousel;
