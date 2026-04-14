"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = [
  "Define issuer admission and authorization requirements",
  "Approve and maintain standardized token templates",
  "Enforce scheduled proof submissions",
  "Record standing changes and enforcement outcomes",
  "Execute governance decisions within defined limits",
  "Support ecosystem programs aligned with protocol standards",
];

export default function FoundationScroller() {
  // wrapperRef = tall outer div that consumes scroll space (CSS sticky approach)
  const wrapperRef    = useRef<HTMLDivElement>(null);
  const sectionRef    = useRef<HTMLElement>(null);
  const innerRef      = useRef<HTMLDivElement>(null);
  const trackFillRef  = useRef<HTMLDivElement>(null);
  const circleRefs    = useRef<(HTMLDivElement     | null)[]>([]);
  const dotRefs       = useRef<(HTMLSpanElement    | null)[]>([]);
  const checkRefs     = useRef<(SVGSVGElement      | null)[]>([]);
  const labelRefs     = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const wrapper = wrapperRef.current;
    const inner   = innerRef.current;
    if (!wrapper || !inner) return;

    const N        = STEPS.length;      // 6
    const managed  = N - 1;            // 5 scroll steps
    const stepDur  = 1.5;
    const totalDur = managed * stepDur;

    const maxTranslate = Math.max(0, inner.offsetWidth - window.innerWidth + 80);

    // ── Initial states ──────────────────────────────────────────────────
    gsap.set(circleRefs.current.slice(1).filter(Boolean), {
      backgroundColor: "#ffffff",
      borderColor: "#bcbcbc",
      scale: 1,
      boxShadow: "none",
    });
    gsap.set(dotRefs.current.slice(1).filter(Boolean),   { opacity: 1 });
    gsap.set(checkRefs.current.slice(1).filter(Boolean), { opacity: 0 });
    gsap.set(labelRefs.current.slice(1).filter(Boolean), { opacity: 0.3 });
    gsap.set(trackFillRef.current, { width: "0px" });

    // ── Timeline ────────────────────────────────────────────────────────
    const tl = gsap.timeline();
    tl.to(inner, { x: -maxTranslate, ease: "none", duration: totalDur }, 0);

    const STEP_SPAN = 360;
    for (let i = 1; i < N; i++) {
      const t      = (i - 1) * stepDur;
      const fillPx = i * STEP_SPAN;

      tl.to(trackFillRef.current, { width: `${fillPx}px`, ease: "none", duration: stepDur * 0.55 }, t);
      tl.to(circleRefs.current[i], {
        backgroundColor: "#ffb01e",
        borderColor:     "#ffb01e",
        scale:           1.25,
        boxShadow:       "0 0 0 6px rgba(255,176,30,0.18), 0 0 20px rgba(255,176,30,0.25)",
        ease:            "power2.out",
        duration:        stepDur * 0.38,
      }, t);
      tl.to(dotRefs.current[i],   { opacity: 0, duration: 0.2 }, t);
      tl.to(checkRefs.current[i], { opacity: 1, duration: 0.3 }, t + 0.12);
      tl.to(labelRefs.current[i], { opacity: 1, ease: "power2.out", duration: stepDur * 0.45 }, t);
      const prev = circleRefs.current[i - 1];
      if (prev) {
        tl.to(prev, { scale: 1, boxShadow: "none", ease: "power2.in", duration: stepDur * 0.28 }, t);
      }
    }

    // ── ScrollTrigger — NO pin: true. CSS sticky handles the pinning.
    // This means GSAP never moves DOM nodes, so React can unmount safely.
    const st = ScrollTrigger.create({
      trigger:   wrapper,          // the tall outer div
      start:     "top top",
      end:       "bottom bottom",
      scrub:     1.2,
      animation: tl,
    });

    return () => {
      st.kill();
      tl.kill();
    };
  }, []);

  const N       = STEPS.length;
  const managed = N - 1;
  // The wrapper height controls how much scroll distance the sticky section occupies
  const wrapperHeight = `${(managed + 1.2) * 100}vh`;

  return (
    // Tall wrapper — consumes scroll space so the sticky section pins naturally
    <div ref={wrapperRef} style={{ height: wrapperHeight }}>
      {/* CSS sticky — stays at top:0 while wrapper is in viewport */}
      <section
        ref={sectionRef}
        className="foundation-scroller"
        style={{ position: "sticky", top: 0, height: "100vh", overflow: "hidden" }}
      >
        {/* ── Centered header ─────────────────────────────────────── */}
        <div className="foundation-header-wrap">
          <div className="foundation-header">
            <h2 className="section-heading">
              The Blockmaze{" "}
              <span className="text-primary">Foundation</span>
            </h2>
            <p className="foundation-desc">
              The Blockmaze foundation is an independent, non-profit entity
              responsible for overseeing governance and issuer accountability at
              the Layer-0 level. It defines issuer eligibility, manages
              registries, enforces proof requirements, and administers governance
              actions within clearly defined authority boundaries. It also
              supports research, grants, and ecosystem initiatives that strengthen
              validator participation and developer engagement within the
              network&apos;s governance framework.
            </p>
          </div>
        </div>

        {/* ── Horizontal timeline ──────────────────────────────────── */}
        <div className="foundation-timeline-outer">
          <div className="foundation-timeline-inner" ref={innerRef}>
            <div className="foundation-track">
              <div className="foundation-track-fill" ref={trackFillRef} />
            </div>
            <div className="foundation-steps">
              {STEPS.map((label, i) => (
                <div key={i} className="foundation-step">
                  <div
                    className="foundation-step-node"
                    ref={(el) => { circleRefs.current[i] = el; }}
                  >
                    <span
                      className="foundation-step-dot"
                      ref={(el) => { dotRefs.current[i] = el; }}
                    />
                    <svg
                      ref={(el) => { checkRefs.current[i] = el; }}
                      className="foundation-step-check"
                      viewBox="0 0 13 10"
                      fill="none"
                      width="13"
                      height="10"
                      aria-hidden="true"
                    >
                      <path
                        d="M1.5 5L5 8.5L11.5 1.5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p
                    className="foundation-step-label"
                    ref={(el) => { labelRefs.current[i] = el; }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
