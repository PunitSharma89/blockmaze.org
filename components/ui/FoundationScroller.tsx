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
  const sectionRef   = useRef<HTMLElement>(null);
  const innerRef     = useRef<HTMLDivElement>(null);   // translated block
  const trackFillRef = useRef<HTMLDivElement>(null);
  const circleRefs   = useRef<(HTMLDivElement   | null)[]>([]);
  const dotRefs      = useRef<(HTMLSpanElement   | null)[]>([]);
  const checkRefs    = useRef<(SVGSVGElement     | null)[]>([]);
  const labelRefs    = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth < 1024) return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const inner   = innerRef.current;
    if (!section || !inner) return;

    const ctx = gsap.context(() => {
      const N        = STEPS.length;          // 6
      const managed  = N - 1;                 // 5 GSAP-managed transitions
      const stepDur  = 1.5;
      const totalDur = managed * stepDur;     // 7.5

      // How far left the inner block must travel so the last step
      // sits 80px from the right edge of the viewport.
      const maxTranslate = Math.max(
        0,
        inner.offsetWidth - window.innerWidth + 80
      );

      // ── Initial states for steps 1–5 (step 0 active via CSS) ────────
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

      // ── Timeline ──────────────────────────────────────────────────────
      const tl = gsap.timeline();

      // Horizontal slide — the entire inner block moves left continuously
      tl.to(inner, {
        x:        -maxTranslate,
        ease:     "none",
        duration: totalDur,
      }, 0);

      // Step activations — evenly distributed across the scroll range
      // 300px step + 60px gap = 360px center-to-center
      const STEP_SPAN = 360;

      for (let i = 1; i < N; i++) {
        const t      = (i - 1) * stepDur;
        const fillPx = i * STEP_SPAN;

        // Track fill grows to reach the newly-active step's center
        tl.to(trackFillRef.current, {
          width:    `${fillPx}px`,
          ease:     "none",
          duration: stepDur * 0.55,
        }, t);

        // Circle → orange + glow
        tl.to(circleRefs.current[i], {
          backgroundColor: "#ffb01e",
          borderColor:     "#ffb01e",
          scale:           1.25,
          boxShadow:       "0 0 0 6px rgba(255,176,30,0.18), 0 0 20px rgba(255,176,30,0.25)",
          ease:            "power2.out",
          duration:        stepDur * 0.38,
        }, t);

        // Dot out / check in
        tl.to(dotRefs.current[i],   { opacity: 0, duration: 0.2 }, t);
        tl.to(checkRefs.current[i], { opacity: 1, duration: 0.3 }, t + 0.12);

        // Label fade in
        tl.to(labelRefs.current[i], {
          opacity: 1, ease: "power2.out", duration: stepDur * 0.45,
        }, t);

        // Previous step: shrink back (stays orange = completed look)
        const prev = circleRefs.current[i - 1];
        if (prev) {
          tl.to(prev, {
            scale: 1, boxShadow: "none", ease: "power2.in", duration: stepDur * 0.28,
          }, t);
        }
      }

      // ── Pin ───────────────────────────────────────────────────────────
      ScrollTrigger.create({
        trigger:       section,
        start:         "top top",
        end:           `+=${window.innerHeight * (managed + 1.2)}`,
        pin:           true,
        scrub:         1.2,
        animation:     tl,
        anticipatePin: 1,
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="foundation-scroller">

      {/* ── Centered header ───────────────────────────────────────── */}
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

      {/* ── Timeline — clipping viewport ──────────────────────────── */}
      <div className="foundation-timeline-outer">

        {/* Inner block: GSAP slides this left as user scrolls */}
        <div className="foundation-timeline-inner" ref={innerRef}>

          {/* Grey base track + orange fill
              Positioned relative to the inner block.
              left = 10vw padding + 150px (half of 300px step) = step-0 center
              width = 5 × 360px = step-0 center → step-5 center            */}
          <div className="foundation-track">
            <div className="foundation-track-fill" ref={trackFillRef} />
          </div>

          {/* 6 step columns, 300px each, 60px gap */}
          <div className="foundation-steps">
            {STEPS.map((label, i) => (
              <div key={i} className="foundation-step">

                {/* Circle node */}
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

                {/* Label */}
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
  );
}
