"use client";

export function MissionAnimation() {
  return (
    <div className="mission-anim">
      {/* SVG image — rings + dots + button */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/mission-svg.svg"
        alt=""
        className="mission-anim-full-img"
      />

      {/* Animated orbit dots overlaid on the static SVG rings */}
      <div className="mission-orbit mission-orbit--1">
        <div className="mission-dot mission-dot--amber" />
      </div>
      <div className="mission-orbit mission-orbit--2">
        <div className="mission-dot mission-dot--blue" />
      </div>
      <div className="mission-orbit mission-orbit--3">
        <div className="mission-dot mission-dot--amber-sm" />
      </div>
    </div>
  );
}
