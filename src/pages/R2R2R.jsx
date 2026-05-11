import { useEffect, useRef } from "react";
import rawHtml from "./r2r2r.html?raw";

const FONTS_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Newsreader:opsz,wght@6..72,300..700&family=JetBrains+Mono:wght@400;500;700&display=swap');\n";

function extractParts(html) {
  const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body =
    html
      .match(/<body>([\s\S]*?)<\/body>/)?.[1]
      .replace(/<script>[\s\S]*?<\/script>/, "")
      .trim() ?? "";
  return { css, body };
}

const { css, body } = extractParts(rawHtml);

export default function R2R2R() {
  const containerRef = useRef(null);

  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-page", "r2r2r");
    styleEl.textContent = FONTS_IMPORT + css;
    document.head.appendChild(styleEl);
    return () => {
      styleEl.remove();
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const phaseTabs = Array.from(container.querySelectorAll(".phase-tab"));
    const phaseContents = Array.from(container.querySelectorAll(".phase-content"));
    const weekHeaders = Array.from(container.querySelectorAll(".week-header"));
    const sections = Array.from(container.querySelectorAll(".section[id]"));
    const navLinks = Array.from(container.querySelectorAll(".nav-progress a"));
    const navLinksEl = container.querySelector("#navLinks");

    const onPhaseTabClick = (event) => {
      const tab = event.currentTarget;
      const phase = tab.dataset.phase;
      phaseTabs.forEach((t) => t.classList.remove("active"));
      phaseContents.forEach((c) => c.classList.remove("active"));
      tab.classList.add("active");
      const target = container.querySelector(
        `.phase-content[data-phase="${phase}"]`,
      );
      if (target) target.classList.add("active");
      const schedule = container.querySelector("#schedule");
      if (schedule) schedule.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const onWeekHeaderClick = (event) => {
      event.currentTarget.parentElement.classList.toggle("open");
    };

    const onNavLinkClick = () => {
      if (navLinksEl) navLinksEl.classList.remove("open");
    };

    const updateActiveNav = () => {
      const offset = 120;
      let current = "";
      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= offset) current = section.id;
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
          link.classList.add("active");
        }
      });
    };

    phaseTabs.forEach((tab) => tab.addEventListener("click", onPhaseTabClick));
    weekHeaders.forEach((header) =>
      header.addEventListener("click", onWeekHeaderClick),
    );
    navLinks.forEach((link) => link.addEventListener("click", onNavLinkClick));
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();

    return () => {
      phaseTabs.forEach((tab) =>
        tab.removeEventListener("click", onPhaseTabClick),
      );
      weekHeaders.forEach((header) =>
        header.removeEventListener("click", onWeekHeaderClick),
      );
      navLinks.forEach((link) =>
        link.removeEventListener("click", onNavLinkClick),
      );
      window.removeEventListener("scroll", updateActiveNav);
    };
  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: body }} />
  );
}
