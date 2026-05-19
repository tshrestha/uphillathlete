import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import rawHtml from "./r2r2r.html?raw";

const FONTS_IMPORT =
  "@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,300..900,0..100,0..1&family=Newsreader:opsz,wght@6..72,300..700&family=JetBrains+Mono:wght@400;500;700&display=swap');\n";

function extractParts(html) {
  const css = html.match(/<style>([\s\S]*?)<\/style>/)?.[1] ?? "";
  const body = html
    .match(/<body>([\s\S]*?)<\/body>/)?.[1]
    .replace(/<script>[\s\S]*?<\/script>/, "")
    .trim() ?? "";
  return { css, body };
}

const { css, body } = extractParts(rawHtml);

export default function R2R2R() {
  const containerRef = useRef(null);
  const navigate = useNavigate();

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

    const sections = Array.from(container.querySelectorAll(".section[id]"));
    const navLinks = Array.from(container.querySelectorAll(".nav-progress a"));
    const navLinksEl = container.querySelector("#navLinks");

    const onNavLinkClick = () => {
      if (navLinksEl) navLinksEl.classList.remove("open");
    };

    const onAnchorClick = (event) => {
      const anchor = event.target.closest("a[href^=\"/\"]");
      if (!anchor || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
      event.preventDefault();
      navigate(anchor.getAttribute("href"));
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

    navLinks.forEach((link) => link.addEventListener("click", onNavLinkClick));
    container.addEventListener("click", onAnchorClick);
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    updateActiveNav();

    return () => {
      navLinks.forEach((link) => link.removeEventListener("click", onNavLinkClick));
      container.removeEventListener("click", onAnchorClick);
      window.removeEventListener("scroll", updateActiveNav);
    };
  }, [navigate]);

  return <div ref={containerRef} dangerouslySetInnerHTML={{ __html: body }} />;
}
