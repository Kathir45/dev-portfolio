"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";
import HeroImg from "../public/kathirvel_profile.png";

import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { projectsData, experienceMetrics } from "@/lib/data";

const SOCIAL_LINKS = [
  { href: "https://www.linkedin.com/in/kathirvel45", icon: <FaLinkedin size={17} />, label: "LinkedIn" },
  { href: "https://github.com/Kathir45", icon: <FaGithub size={17} />, label: "GitHub" },
  { href: "https://leetcode.com/u/Kathirs45/", icon: <SiLeetcode size={17} />, label: "LeetCode" },
];

const PERSONALITY_TAGS = ["Full Stack", "Problem Solver", "Creative", "Team Player"];

const TECH_BADGES = [
  "React.js", "Angular", "Node.js", "Express.js", "MongoDB", "Next.js",
  "React Native", "TypeScript", "Playwright", "Tailwind CSS",
];

const _projectCount = projectsData.length;

function useCountUp(target: number, durationMs: number, trigger: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let rafId: number;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(eased * target));
      if (p < 1) rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, durationMs, trigger]);
  return val;
}

const _fmtDur = (n: number) => {
  const y = Math.floor(n / 12);
  const m = n % 12;
  if (y === 0) return `${m} mo`;
  if (m === 0) return `${y} yr`;
  return `${y} yr ${m} mo`;
};

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [time, setTime] = useState("");

  const mobileStatsRef = useRef<HTMLDivElement>(null);
  const mobileStatsInView = useInView(mobileStatsRef, { once: true, amount: 0 });
  const mobileAnimProjects = useCountUp(_projectCount, 2800, mobileStatsInView);
  const mobileAnimTotal = useCountUp(experienceMetrics.totalMonths, 3500, mobileStatsInView);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      let h = now.getHours();
      const m = now.getMinutes();
      const ampm = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m < 10 ? "0" : ""}${m} ${ampm}`);
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="home" className="w-full max-w-5xl mx-auto px-4 mb-16 scroll-mt-[100rem] md:pt-8">
      {/* Mobile-only status pill */}
      <div className="anim-fade-up anim-d0 lg:hidden flex items-center justify-center gap-2 mb-5 font-mono text-xs text-gray-400 dark:text-white/30">
        <span className="flex items-center gap-2 bg-black/[0.04] dark:bg-white/[0.05] border border-black/6 dark:border-white/8 rounded-full px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Chennai, India &nbsp;·&nbsp; {time}
        </span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-6 lg:gap-16 mb-14">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="anim-fade-up anim-d0 hidden lg:flex items-center gap-2 mb-5 font-mono text-xs text-gray-400 dark:text-white/30 bg-black/[0.04] dark:bg-white/[0.05] border border-black/6 dark:border-white/8 rounded-full px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Chennai, India &nbsp;·&nbsp; {time}
          </div>

          <h1 className="anim-fade-up anim-d1 text-4xl sm:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.08] mb-3">
            Kathirvel{" "}
            <span className="text-gray-400 dark:text-white/35">S</span>
          </h1>

          <p className="anim-fade-up anim-d2 font-mono text-sm sm:text-[0.9rem] text-[#9a7d2a] dark:text-[#FFD700]/65 mb-3 tracking-wide">
            Software Developer &nbsp;·&nbsp; MERN Stack &nbsp;·&nbsp; React Native
          </p>

          <div className="anim-fade-up anim-d2 flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
            {PERSONALITY_TAGS.map((tag) => (
              <span key={tag} className="font-mono text-[10px] px-3 py-1 rounded-full tracking-[0.12em] uppercase bg-[#FFD700]/[0.08] dark:bg-[#FFD700]/10 border border-[#FFD700]/20 dark:border-[#FFD700]/25 text-[#9a7d2a] dark:text-[#FFD700]/60">
                {tag}
              </span>
            ))}
          </div>

          <div ref={mobileStatsRef} className="anim-fade-up anim-d3 lg:hidden flex items-center justify-center gap-3 mt-1 mb-5 font-mono">
            <span className="text-lg font-bold text-gray-900 dark:text-white/90 tabular-nums">{mobileAnimProjects}+</span>
            <span className="text-[0.58rem] uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">Projects</span>
            <span className="w-px h-3.5 bg-black/10 dark:bg-white/10" />
            <span className="text-lg font-bold text-gray-900 dark:text-white/90 tabular-nums">{_fmtDur(mobileAnimTotal)}</span>
            <span className="text-[0.58rem] uppercase tracking-[0.15em] text-gray-400 dark:text-white/30">Experience</span>
          </div>

          <p className="anim-fade-up anim-d3 text-base text-gray-600 dark:text-white/50 leading-relaxed max-w-xl mb-3">
            I build responsive, full-stack web applications using{" "}
            <span className="text-gray-900 dark:text-white/80 font-medium">React.js, Node.js, Express.js, and MongoDB</span>{" "}
            — and cross-platform mobile apps with React Native. Passionate about creating clean, user-friendly solutions.
          </p>

          <p className="anim-fade-up anim-d4 text-sm text-gray-500 dark:text-white/40 leading-relaxed max-w-xl mb-7">
            Currently at{" "}
            <span className="text-gray-700 dark:text-white/60 font-medium">Slanup</span>
            {" "}as a React Native Full-Stack Developer. Previously at Cognizant as an Angular Developer.
            Hackathon winner at PEC Techathon 3.0 and SIH 2024 runner-up.
          </p>

          <div className="anim-fade-up anim-d5 flex flex-row gap-2.5 w-full sm:w-auto mb-7">
            <a href="#contact" onClick={() => { setActiveSection("Contact"); setTimeOfLastClick(Date.now()); }}
              className="flex-1 sm:flex-none group flex items-center justify-between gap-3 pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-gray-900 dark:bg-[#FFD700] text-white dark:text-black text-sm font-semibold tracking-wide active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2"
              style={{ transition: "opacity 150ms ease, transform 160ms cubic-bezier(0.23,1,0.32,1)" }}>
              <span className="whitespace-nowrap">Get in touch</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white/15 dark:bg-black/15 group-hover:scale-110 group-hover:bg-white/25 dark:group-hover:bg-black/25"
                style={{ transition: "transform 150ms cubic-bezier(0.23,1,0.32,1), background-color 150ms ease" }}>
                <BsArrowRight size={13} />
              </span>
            </a>
            <a href="/Kathirvel_Resume.pdf" download
              className="flex-1 sm:flex-none group flex items-center justify-between gap-3 pl-4 sm:pl-5 pr-1.5 py-1.5 rounded-full bg-white dark:bg-white/[0.06] border border-black/10 dark:border-white/10 text-sm font-semibold tracking-wide text-gray-800 dark:text-white/75 hover:bg-gray-50 dark:hover:bg-white/10 active:scale-[0.97] outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-2"
              style={{ transition: "background-color 150ms ease, transform 160ms cubic-bezier(0.23,1,0.32,1)" }}>
              <span className="whitespace-nowrap">Download CV</span>
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black/[0.06] dark:bg-white/10 group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/15"
                style={{ transition: "transform 150ms cubic-bezier(0.23,1,0.32,1), background-color 150ms ease" }}>
                <HiDownload size={13} />
              </span>
            </a>
          </div>

          <div className="anim-fade-up anim-d6 flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map(({ href, icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black/[0.05] dark:bg-white/[0.05] border border-black/8 dark:border-white/10 text-gray-500 dark:text-white/40 hover:text-gray-900 dark:hover:text-white/85 hover:scale-110 active:scale-[0.93] outline-none focus-visible:ring-2 focus-visible:ring-[#FFD700] focus-visible:ring-offset-1"
                style={{ transition: "color 130ms ease, transform 150ms cubic-bezier(0.23,1,0.32,1)" }}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="anim-fade-in anim-d1 shrink-0">
          <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, ease: "easeInOut", repeat: Infinity }}>
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              <div className="absolute rounded-full" style={{ inset: "-2px", animation: "ring-spin 5s linear infinite", background: "conic-gradient(from 0deg, #FFD700 0deg, #FFA500 40deg, transparent 90deg, transparent 300deg, #FFD700 360deg)" }} />
              <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl">
                <Image src={HeroImg} alt="Kathirvel S — Software Developer" width={320} height={320} quality={75} priority sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 320px" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-full bg-[#FFD700]/10 blur-2xl scale-110 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="anim-fade-up anim-d8 hidden lg:flex flex-wrap justify-start gap-2 mb-4">
        <span className="font-mono text-[0.65rem] text-gray-400 dark:text-white/25 self-center mr-1 tracking-widest uppercase">Core stack</span>
        {TECH_BADGES.map((tech) => (
          <span key={tech} className="font-mono text-xs px-3 py-1 rounded-full bg-black/[0.05] dark:bg-white/[0.06] border border-black/8 dark:border-white/8 text-gray-600 dark:text-white/50">{tech}</span>
        ))}
      </div>
    </section>
  );
}
