import { useEffect, useState } from "react";
import { FS_10, FS_11, FS_12, FS_12_5, FS_13, FS_15, FS_22, FS_9 } from "../../styles/fontSizes";
import { CAT, INK, SURFACE } from "./analysisData";

const SANS = "'DM Sans', sans-serif";

/* Round an axis maximum up to a clean number so ticks read 0 / 20 / 40. */
const NICE_STEPS = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
function niceMax(v) {
  const mag = 10 ** Math.floor(Math.log10(v));
  const n = v / mag;
  return (NICE_STEPS.find((s) => n <= s) ?? 10) * mag;
}
const roundDown = (v, step) => Math.floor(v / step) * step;
const roundUp = (v, step) => Math.ceil(v / step) * step;

/* 6000 → "6k", 3500 → "3.5k", 40 → "40" */
export function compact(v) {
  if (Math.abs(v) < 1000) return String(Math.round(v));
  const k = v / 1000;
  return `${Number.isInteger(k) ? k : k.toFixed(1)}k`;
}

/* Charts render into a fixed viewBox and scale to the container, which shrinks
   in-SVG text on phones. Scale the type up in viewBox units to compensate so
   axis labels stay legible at any width. */
function useNarrow() {
  const [narrow, setNarrow] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(max-width: 620px)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 620px)");
    const on = (e) => setNarrow(e.matches);
    mq.addEventListener("change", on);
    setNarrow(mq.matches);
    return () => mq.removeEventListener("change", on);
  }, []);
  return narrow;
}

/* Bar with a rounded data-end and a square baseline, as one path. */
function roundedTopBar(x, y, w, h, r) {
  const rr = Math.min(r, h, w / 2);
  return `M${x},${y + h} L${x},${y + rr} Q${x},${y} ${x + rr},${y} L${x + w - rr},${y} Q${x + w},${y} ${x + w},${
    y + rr
  } L${x + w},${y + h} Z`;
}

/* ─────────────────────────── shared chrome ─────────────────────────── */

export function Figure({ title, subtitle, legend, children, table, note }) {
  const [showTable, setShowTable] = useState(false);
  return (
    <figure
      style={{
        margin: "34px 0",
        padding: "20px 18px 16px",
        border: `1px solid ${INK.hairline}`,
        borderRadius: "10px",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <figcaption style={{ marginBottom: legend ? "10px" : "18px" }}>
        <div
          style={{
            fontFamily: SANS,
            fontSize: FS_13,
            fontWeight: 600,
            color: INK.primary,
            letterSpacing: "-0.1px",
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontFamily: SANS,
              fontSize: FS_11,
              color: INK.secondary,
              lineHeight: 1.45,
              marginTop: "4px",
            }}
          >
            {subtitle}
          </div>
        )}
      </figcaption>

      {legend && <Legend items={legend} />}

      {children}

      {note && (
        <div
          style={{
            fontFamily: SANS,
            fontSize: FS_9,
            color: INK.muted,
            lineHeight: 1.5,
            marginTop: "12px",
          }}
        >
          {note}
        </div>
      )}

      {table && (
        <>
          <button
            type="button"
            className="tbl-toggle"
            aria-expanded={showTable}
            onClick={() => setShowTable((v) => !v)}
            style={{
              fontFamily: SANS,
              fontSize: FS_9,
              fontWeight: 500,
              color: INK.secondary,
              background: "none",
              border: "none",
              borderTop: `1px solid ${INK.grid}`,
              width: "100%",
              textAlign: "left",
              padding: "10px 0 0",
              marginTop: "12px",
              cursor: "pointer",
            }}
          >
            <span className="chevron" style={{ transform: showTable ? "rotate(90deg)" : "none" }}>
              ›
            </span>{" "}
            {showTable ? "Hide" : "Show"} data table
          </button>
          {showTable && <DataTable {...table} />}
        </>
      )}
    </figure>
  );
}

function Legend({ items }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px 18px",
        marginBottom: "16px",
      }}
    >
      {items.map((it) => (
        <span
          key={it.label}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "7px",
            fontFamily: SANS,
            fontSize: FS_9,
            color: INK.secondary,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: it.shape === "line" ? "14px" : "10px",
              height: it.shape === "line" ? "2px" : "10px",
              borderRadius: it.shape === "line" ? "1px" : "2px",
              background: it.hollow ? "transparent" : it.color,
              border: it.hollow ? `2px solid ${it.color}` : "none",
              flexShrink: 0,
            }}
          />
          {it.label}
        </span>
      ))}
    </div>
  );
}

function DataTable({ columns, rows }) {
  return (
    <div style={{ overflowX: "auto", marginTop: "10px" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: SANS,
          fontSize: FS_9,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c}
                scope="col"
                style={{
                  textAlign: i === 0 ? "left" : "right",
                  padding: "6px 10px 6px 0",
                  color: INK.secondary,
                  fontWeight: 600,
                  borderBottom: `1px solid ${INK.hairline}`,
                  whiteSpace: "nowrap",
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri}>
              {r.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    textAlign: ci === 0 ? "left" : "right",
                    padding: "5px 10px 5px 0",
                    color: ci === 0 ? INK.secondary : INK.primary,
                    borderBottom: `1px solid ${INK.grid}`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* Tooltip that rides above the plot, positioned by percentage. */
function Tooltip({ x, y, children, align = "center" }) {
  return (
    <div
      role="tooltip"
      style={{
        position: "absolute",
        left: `${x}%`,
        top: `${y}%`,
        transform: `translate(${
          align === "left" ? "-6px" : align === "right" ? "calc(-100% + 6px)" : "-50%"
        }, calc(-100% - 12px))`,
        background: "#1b1f24",
        border: `1px solid ${INK.hairline}`,
        borderRadius: "7px",
        padding: "8px 11px",
        fontFamily: SANS,
        fontSize: FS_9,
        color: INK.primary,
        lineHeight: 1.5,
        whiteSpace: "nowrap",
        pointerEvents: "none",
        zIndex: 5,
        boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
      }}
    >
      {children}
    </div>
  );
}

function TipRow({ label, value, color }) {
  return (
    <div style={{ display: "flex", gap: "14px", justifyContent: "space-between" }}>
      <span style={{ color: INK.secondary, display: "inline-flex", alignItems: "center", gap: "6px" }}>
        {color && (
          <span
            aria-hidden="true"
            style={{ width: "8px", height: "8px", borderRadius: "2px", background: color }}
          />
        )}
        {label}
      </span>
      <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{value}</span>
    </div>
  );
}

/* ───────────────────────── stat tiles / hero ───────────────────────── */

export function StatTile({ label, value, unit, delta, deltaGood, footnote }) {
  return (
    <div
      style={{
        padding: "14px 16px",
        border: `1px solid ${INK.hairline}`,
        borderRadius: "9px",
        background: "rgba(255,255,255,0.015)",
      }}
    >
      <div
        style={{
          fontFamily: SANS,
          fontSize: FS_9,
          color: INK.secondary,
          letterSpacing: "0.3px",
          marginBottom: "7px",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: FS_22,
          fontWeight: 600,
          color: INK.primary,
          lineHeight: 1,
          letterSpacing: "-0.5px",
        }}
      >
        {value}
        {unit && (
          <span style={{ fontSize: FS_11, color: INK.secondary, marginLeft: "4px", fontWeight: 500 }}>
            {unit}
          </span>
        )}
      </div>
      {delta && (
        <div
          style={{
            fontFamily: SANS,
            fontSize: FS_9,
            fontWeight: 600,
            color: deltaGood ? "#3fbf3f" : CAT.amber,
            marginTop: "7px",
          }}
        >
          {delta}
        </div>
      )}
      {footnote && (
        <div style={{ fontFamily: SANS, fontSize: FS_9, color: INK.muted, marginTop: "6px" }}>
          {footnote}
        </div>
      )}
    </div>
  );
}

/* ───────────── weekly volume: columns + target reference ticks ───────────── */

export function VolumeChart({ weeks, valueKey, targetKey, unit, format, max }) {
  const [hover, setHover] = useState(null);
  const narrow = useNarrow();
  const TS = narrow ? 22 : 11;
  const W = 720;
  const H = narrow ? 250 : 210;
  const padL = narrow ? 72 : 40;
  const padR = 8;
  const padT = 12;
  const padB = narrow ? 56 : 34;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const band = plotW / weeks.length;
  const barW = Math.min(24, band * 0.5);
  const top = max ?? niceMax(Math.max(...weeks.map((w) => Math.max(w[valueKey], w[targetKey]))));
  const y = (v) => padT + plotH - (v / top) * plotH;
  const ticks = [0, top / 2, top];

  return (
    <div style={{ position: "relative" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
        role="img"
        aria-label={`Weekly ${unit} against plan target, weeks 1 to ${weeks.length}`}
      >
        {ticks.map((t) => (
          <g key={t}>
            <line
              x1={padL}
              x2={W - padR}
              y1={y(t)}
              y2={y(t)}
              stroke={INK.grid}
              strokeWidth="1"
            />
            <text
              x={padL - 8}
              y={y(t) + 4}
              textAnchor="end"
              fill={INK.muted}
              fontFamily={SANS}
              fontSize={TS}
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {format ? format(t) : Math.round(t)}
            </text>
          </g>
        ))}

        {weeks.map((w, i) => {
          const cx = padL + band * i + band / 2;
          const v = w[valueKey];
          const h = Math.max(2, plotH - (y(v) - padT));
          const active = hover === i;
          return (
            <g key={w.week}>
              {
                /* rounded data-end, square at the baseline — one path, so partial
                  weeks don't stack alpha where two fills would overlap */
              }
              <path
                d={roundedTopBar(cx - barW / 2, y(v), barW, h, 4)}
                fill={CAT.rust}
                opacity={(hover === null || active ? 1 : 0.55) * (w.partial ? 0.45 : 1)}
                style={{ transition: "opacity 0.15s ease" }}
              />
              {/* target reference tick */}
              <line
                x1={cx - barW / 2 - 4}
                x2={cx + barW / 2 + 4}
                y1={y(w[targetKey])}
                y2={y(w[targetKey])}
                stroke={CAT.river}
                strokeWidth="2"
                strokeLinecap="round"
              />
              <text
                x={cx}
                y={H - padB + (narrow ? 26 : 18)}
                textAnchor="middle"
                fill={active ? INK.primary : INK.muted}
                fontFamily={SANS}
                fontSize={TS}
                fontWeight={active ? 600 : 400}
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {w.week}
              </text>
              {
                /* hit area — wider than the mark, and painted last so it sits
                  above the bar rather than behind it */
              }
              <rect
                x={padL + band * i}
                y={padT}
                width={band}
                height={plotH + padB}
                fill="transparent"
                tabIndex={0}
                role="button"
                aria-label={`Week ${w.week}: ${v} ${unit}, target ${w[targetKey]}`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                style={{ cursor: "pointer", outline: "none" }}
              />
            </g>
          );
        })}
        <text
          x={padL + plotW / 2}
          y={H - 2}
          textAnchor="middle"
          fill={INK.muted}
          fontFamily={SANS}
          fontSize={narrow ? 19 : 10}
          letterSpacing="0.6"
        >
          PLAN WEEK
        </text>
        <line x1={padL} x2={W - padR} y1={y(0)} y2={y(0)} stroke={INK.hairline} strokeWidth="1" />
      </svg>

      {hover !== null && (
        <Tooltip
          x={((padL + band * hover + band / 2) / W) * 100}
          y={(y(Math.max(weeks[hover][valueKey], weeks[hover][targetKey])) / H) * 100}
          align={hover < 2 ? "left" : hover > weeks.length - 3 ? "right" : "center"}
        >
          <div style={{ fontWeight: 600, marginBottom: "5px" }}>
            Week {weeks[hover].week}
            {weeks[hover].note ? ` · ${weeks[hover].note}` : ""}
          </div>
          <TipRow
            label="Actual"
            value={`${format ? format(weeks[hover][valueKey]) : weeks[hover][valueKey]} ${unit}`}
            color={CAT.rust}
          />
          <TipRow
            label="Target"
            value={`${format ? format(weeks[hover][targetKey]) : weeks[hover][targetKey]} ${unit}`}
            color={CAT.river}
          />
          <TipRow
            label="Of plan"
            value={`${Math.round((weeks[hover][valueKey] / weeks[hover][targetKey]) * 100)}%`}
          />
        </Tooltip>
      )}
    </div>
  );
}

/* ───────────── drift over time: status dots + threshold bands ───────────── */

export function DriftChart({ sessions }) {
  const [hover, setHover] = useState(null);
  const narrow = useNarrow();
  const TS = narrow ? 22 : 11;
  const W = 720;
  const H = narrow ? 300 : 250;
  const padL = narrow ? 74 : 40;
  const padR = 14;
  const padT = 12;
  const padB = narrow ? 66 : 40;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const top = 40;
  const t0 = new Date(sessions[0].date).getTime();
  const t1 = new Date(sessions[sessions.length - 1].date).getTime();
  const x = (d) => padL + ((new Date(d).getTime() - t0) / (t1 - t0)) * plotW;
  const y = (v) => padT + plotH - (Math.min(v, top) / top) * plotH;
  const colorFor = (d) => (d < 5 ? "#3fbf3f" : d < 10 ? CAT.amber : "#d64b4b");

  return (
    <div style={{ position: "relative" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
        role="img"
        aria-label="Heart-rate drift per steady run over time, with the 5 percent aerobic-threshold line"
      >
        {/* below-5% zone */}
        <rect x={padL} y={y(5)} width={plotW} height={plotH - (y(5) - padT)} fill="#3fbf3f" opacity="0.06" />
        {[0, 10, 20, 30, 40].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke={INK.grid} strokeWidth="1" />
            <text
              x={padL - 8}
              y={y(t) + 4}
              textAnchor="end"
              fill={INK.muted}
              fontFamily={SANS}
              fontSize={TS}
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {t}%
            </text>
          </g>
        ))}
        {
          /* 5% threshold — identified in the legend, not in-plot, so the label
            can't collide with dots at either edge */
        }
        <line x1={padL} x2={W - padR} y1={y(5)} y2={y(5)} stroke="#3fbf3f" strokeWidth="2" opacity="0.65" />

        {/* month ticks */}
        {["2026-05-15", "2026-06-15", "2026-07-15"].map((d) => (
          <text
            key={d}
            x={x(d)}
            y={H - padB + (narrow ? 36 : 20)}
            textAnchor="middle"
            fill={INK.muted}
            fontFamily={SANS}
            fontSize={TS}
          >
            {new Date(d).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}
          </text>
        ))}

        {sessions.map((s, i) => {
          const active = hover === i;
          return (
            <g key={`${s.date}-${i}`}>
              <circle
                cx={x(s.date)}
                cy={y(s.drift)}
                r={active ? 7 : 5}
                fill={colorFor(s.drift)}
                stroke={SURFACE}
                strokeWidth="2"
                opacity={hover === null || active ? 1 : 0.45}
                style={{ transition: "opacity 0.15s ease, r 0.15s ease" }}
              />
              <circle
                cx={x(s.date)}
                cy={y(s.drift)}
                r="14"
                fill="transparent"
                tabIndex={0}
                role="button"
                aria-label={`${s.date}, HR ${s.hr}, drift ${s.drift} percent`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                style={{ cursor: "pointer", outline: "none" }}
              />
            </g>
          );
        })}
        <line x1={padL} x2={W - padR} y1={y(0)} y2={y(0)} stroke={INK.hairline} strokeWidth="1" />
      </svg>

      {hover !== null && (
        <Tooltip
          x={(x(sessions[hover].date) / W) * 100}
          y={(y(sessions[hover].drift) / H) * 100}
          align={x(sessions[hover].date) < 140 ? "left" : x(sessions[hover].date) > W - 140 ? "right" : "center"}
        >
          <div style={{ fontWeight: 600, marginBottom: "5px" }}>
            {new Date(sessions[hover].date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              timeZone: "UTC",
            })} · week {sessions[hover].week}
          </div>
          <TipRow label="Drift" value={`${sessions[hover].drift}%`} color={colorFor(sessions[hover].drift)} />
          <TipRow label="Avg HR" value={`${sessions[hover].hr} bpm`} />
          <TipRow label="Duration" value={`${sessions[hover].minutes} min`} />
          <TipRow label="Surface" value={sessions[hover].terrain} />
        </Tooltip>
      )}
    </div>
  );
}

/* ───────────── efficiency factor: emphasis on "no trend" ───────────── */

export function EfChart({ runs }) {
  const [hover, setHover] = useState(null);
  const narrow = useNarrow();
  const TS = narrow ? 22 : 11;
  const W = 720;
  const H = narrow ? 262 : 200;
  const padL = narrow ? 62 : 40;
  const padR = 14;
  const padT = 14;
  const padB = narrow ? 66 : 40;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const lo = 15.5;
  const hi = 20;
  const t0 = new Date(runs[0].date).getTime();
  const t1 = new Date(runs[runs.length - 1].date).getTime();
  const x = (d) => padL + ((new Date(d).getTime() - t0) / (t1 - t0)) * plotW;
  const y = (v) => padT + plotH - ((v - lo) / (hi - lo)) * plotH;

  // least-squares fit, drawn to show the absence of a trend
  const xs = runs.map((r) => (new Date(r.date).getTime() - t0) / 86400000);
  const ys = runs.map((r) => r.ef);
  const mx = xs.reduce((a, b) => a + b, 0) / xs.length;
  const my = ys.reduce((a, b) => a + b, 0) / ys.length;
  const slope = xs.reduce((a, v, i) => a + (v - mx) * (ys[i] - my), 0)
    / xs.reduce((a, v) => a + (v - mx) ** 2, 0);
  const fit = (day) => my + slope * (day - mx);

  return (
    <div style={{ position: "relative" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
        role="img"
        aria-label="Efficiency factor per matched home-base easy run over time — essentially flat"
      >
        {[16, 17, 18, 19, 20].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke={INK.grid} strokeWidth="1" />
            <text
              x={padL - 8}
              y={y(t) + 4}
              textAnchor="end"
              fill={INK.muted}
              fontFamily={SANS}
              fontSize={TS}
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {t}
            </text>
          </g>
        ))}
        <line
          x1={x(runs[0].date)}
          x2={x(runs[runs.length - 1].date)}
          y1={y(fit(xs[0]))}
          y2={y(fit(xs[xs.length - 1]))}
          stroke={INK.secondary}
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        {runs.map((r, i) => {
          const active = hover === i;
          return (
            <g key={r.date}>
              <circle
                cx={x(r.date)}
                cy={y(r.ef)}
                r={active ? 7 : 5}
                fill={CAT.rust}
                stroke={SURFACE}
                strokeWidth="2"
                opacity={hover === null || active ? 1 : 0.45}
                style={{ transition: "opacity 0.15s ease, r 0.15s ease" }}
              />
              <circle
                cx={x(r.date)}
                cy={y(r.ef)}
                r="14"
                fill="transparent"
                tabIndex={0}
                role="button"
                aria-label={`${r.date}, efficiency factor ${r.ef}`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                style={{ cursor: "pointer", outline: "none" }}
              />
            </g>
          );
        })}
        {["2026-05-19", "2026-06-16", "2026-07-19"].map((d) => (
          <text
            key={d}
            x={x(d)}
            y={H - padB + (narrow ? 36 : 20)}
            textAnchor="middle"
            fill={INK.muted}
            fontFamily={SANS}
            fontSize={TS}
          >
            {new Date(d).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}
          </text>
        ))}
      </svg>
      {hover !== null && (
        <Tooltip
          x={(x(runs[hover].date) / W) * 100}
          y={(y(runs[hover].ef) / H) * 100}
          align={x(runs[hover].date) < 140 ? "left" : x(runs[hover].date) > W - 140 ? "right" : "center"}
        >
          <div style={{ fontWeight: 600, marginBottom: "5px" }}>
            {new Date(runs[hover].date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              timeZone: "UTC",
            })} · week {runs[hover].week}
          </div>
          <TipRow label="Efficiency factor" value={runs[hover].ef.toFixed(2)} color={CAT.rust} />
          <TipRow label="Avg HR" value={`${runs[hover].hr} bpm`} />
          <TipRow
            label="Pace"
            value={`${Math.floor(runs[hover].paceSec / 60)}:${String(runs[hover].paceSec % 60).padStart(2, "0")}/mi`}
          />
          <TipRow label="Cadence" value={`${runs[hover].cad} spm`} />
        </Tooltip>
      )}
    </div>
  );
}

/* ───────────── HR distribution: ordinal stacked bars ───────────── */

export function HrDistribution({ blocks, bands, ramp }) {
  const [hover, setHover] = useState(null);
  return (
    <div>
      {blocks.map((b, bi) => (
        <div key={b.label} style={{ marginBottom: bi === blocks.length - 1 ? 0 : "20px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              marginBottom: "7px",
              gap: "12px",
            }}
          >
            <span style={{ fontFamily: SANS, fontSize: FS_11, fontWeight: 600, color: INK.primary }}>
              {b.label}
              <span style={{ color: INK.muted, fontWeight: 400 }}>· {b.sub}</span>
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: FS_9,
                color: INK.secondary,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {b.hours} h
            </span>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ display: "flex", height: "34px", gap: "2px" }}>
              {b.pct.map((p, i) => {
                const active = hover && hover.b === bi && hover.i === i;
                const label = `${Math.round(p)}%`;
                // only place the label inside when the segment is wide enough for it
                const fits = p >= 11;
                return (
                  <button
                    key={i}
                    type="button"
                    onMouseEnter={() => setHover({ b: bi, i })}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover({ b: bi, i })}
                    onBlur={() => setHover(null)}
                    aria-label={`${b.label}, HR ${bands[i].label}: ${p}% of moving time`}
                    style={{
                      flex: `${p} 1 0`,
                      background: ramp[i],
                      border: "none",
                      padding: 0,
                      borderRadius: i === 0 ? "4px 0 0 4px" : i === b.pct.length - 1 ? "0 4px 4px 0" : 0,
                      cursor: "pointer",
                      opacity: !hover || active ? 1 : 0.55,
                      transition: "opacity 0.15s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: SANS,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      // label sits inside a colored fill: pick by fill luminance
                      color: i >= 3 ? "#231206" : "#f4e9df",
                    }}
                  >
                    {fits ? label : ""}
                  </button>
                );
              })}
            </div>
            {hover && hover.b === bi && (
              <Tooltip
                x={b.pct.slice(0, hover.i).reduce((a, v) => a + v, 0) + b.pct[hover.i] / 2}
                y={0}
                align={b.pct.slice(0, hover.i).reduce((a, v) => a + v, 0) < 18
                  ? "left"
                  : b.pct.slice(0, hover.i).reduce((a, v) => a + v, 0) > 78
                  ? "right"
                  : "center"}
              >
                <div style={{ fontWeight: 600, marginBottom: "5px" }}>
                  HR {bands[hover.i].label} bpm
                </div>
                <TipRow label={bands[hover.i].desc} value={`${b.pct[hover.i]}%`} color={ramp[hover.i]} />
                <TipRow
                  label="Time"
                  value={`${((b.pct[hover.i] / 100) * b.hours).toFixed(1)} h`}
                />
              </Tooltip>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ───────────── descent: before → after dumbbell ───────────── */

export function Dumbbell({ rows }) {
  const [hover, setHover] = useState(null);
  return (
    <div>
      {rows.map((r, i) => {
        const span = r.max - r.min;
        const fromPct = ((r.from - r.min) / span) * 100;
        const toPct = ((r.to - r.min) / span) * 100;
        const lo = Math.min(fromPct, toPct);
        const hi = Math.max(fromPct, toPct);
        return (
          <div key={r.label} style={{ marginBottom: i === rows.length - 1 ? 0 : "26px" }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: FS_11,
                fontWeight: 600,
                color: INK.primary,
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                gap: "12px",
              }}
            >
              <span>{r.label}</span>
              <span style={{ color: r.goodUp ? "#3fbf3f" : CAT.amber, fontVariantNumeric: "tabular-nums" }}>
                {r.delta}
                {r.hint && <span style={{ color: INK.muted, fontWeight: 400 }}>· {r.hint}</span>}
              </span>
            </div>
            <div
              style={{ position: "relative", height: "26px" }}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
            >
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: 0,
                  right: 0,
                  height: "1px",
                  background: INK.grid,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "11px",
                  left: `${lo}%`,
                  width: `${hi - lo}%`,
                  height: "3px",
                  borderRadius: "2px",
                  background: `${CAT.rust}55`,
                }}
              />
              {[
                { pct: fromPct, color: `${CAT.rust}88`, val: r.fromLabel, tag: r.fromTag },
                { pct: toPct, color: CAT.rust, val: r.toLabel, tag: r.toTag },
              ].map((pt, pi) => (
                <div
                  key={pi}
                  tabIndex={0}
                  role="img"
                  aria-label={`${r.label}, ${pt.tag}: ${pt.val}`}
                  style={{
                    position: "absolute",
                    top: "5px",
                    left: `${pt.pct}%`,
                    transform: "translateX(-50%)",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: pt.color,
                    border: `2px solid ${SURFACE}`,
                    outline: "none",
                  }}
                />
              ))}
              <div
                style={{
                  position: "absolute",
                  top: "26px",
                  left: `${fromPct}%`,
                  transform: "translateX(-50%)",
                  fontFamily: SANS,
                  fontSize: "0.75rem",
                  color: INK.secondary,
                  whiteSpace: "nowrap",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.fromLabel}
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "26px",
                  left: `${toPct}%`,
                  transform: "translateX(-50%)",
                  fontFamily: SANS,
                  fontSize: "0.75rem",
                  color: INK.primary,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.toLabel}
              </div>
              {hover === i && (
                <Tooltip x={(lo + hi) / 2} y={0} align="center">
                  <TipRow label={r.fromTag} value={r.fromLabel} color={`${CAT.rust}88`} />
                  <TipRow label={r.toTag} value={r.toLabel} color={CAT.rust} />
                </Tooltip>
              )}
            </div>
            <div style={{ height: "16px" }} />
          </div>
        );
      })}
    </div>
  );
}

/* ───────────── small multiples: one metric per panel, shared x ───────────── */

export function SmallMultiples({ hours, panels }) {
  const [hover, setHover] = useState(null);
  const narrow = useNarrow();
  const TS = narrow ? 22 : 11;
  const W = 720;
  const H = narrow ? 150 : 108;
  const padL = narrow ? 76 : 44;
  const padR = 14;
  const padT = 12;
  const padB = 18;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const x = (i) => padL + (i / (hours.length - 1)) * plotW;

  return (
    <div style={{ position: "relative" }}>
      {panels.map((p, pi) => {
        const vals = hours.map((h) => h[p.key]);
        const step = p.tickStep ?? 10;
        const lo = p.min ?? roundDown(Math.min(...vals), step);
        const hi = p.max ?? roundUp(Math.max(...vals), step);
        const y = (v) => padT + plotH - ((v - lo) / (hi - lo)) * plotH;
        const path = hours.map((h, i) => `${i === 0 ? "M" : "L"}${x(i)},${y(h[p.key])}`).join(" ");
        return (
          <div key={p.key} style={{ marginBottom: pi === panels.length - 1 ? 0 : "6px" }}>
            <div
              style={{
                fontFamily: SANS,
                fontSize: FS_9,
                color: INK.secondary,
                marginBottom: "2px",
                paddingLeft: "4px",
              }}
            >
              {p.label}
              <span style={{ color: INK.muted }}>· {p.unit}</span>
            </div>
            <svg
              viewBox={`0 0 ${W} ${H}`}
              style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
              role="img"
              aria-label={`${p.label} by hour of the July 25 outing`}
            >
              {[lo, hi].map((t) => (
                <g key={t}>
                  <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke={INK.grid} strokeWidth="1" />
                  <text
                    x={padL - 8}
                    y={y(t) + 4}
                    textAnchor="end"
                    fill={INK.muted}
                    fontFamily={SANS}
                    fontSize={TS}
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {t}
                  </text>
                </g>
              ))}
              <path
                d={path}
                fill="none"
                stroke={CAT.rust}
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {hours.map((h, i) => (
                <g key={i}>
                  <circle
                    cx={x(i)}
                    cy={y(h[p.key])}
                    r={hover === i ? 6 : 4.5}
                    fill={CAT.rust}
                    stroke={SURFACE}
                    strokeWidth="2"
                    style={{ transition: "r 0.15s ease" }}
                  />
                  <rect
                    x={x(i) - plotW / (hours.length - 1) / 2}
                    y={0}
                    width={plotW / (hours.length - 1)}
                    height={H}
                    fill="transparent"
                    tabIndex={pi === 0 ? 0 : -1}
                    role={pi === 0 ? "button" : undefined}
                    aria-label={pi === 0 ? `Hour ${h.hour}` : undefined}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    onFocus={() => setHover(i)}
                    onBlur={() => setHover(null)}
                    style={{ cursor: "pointer", outline: "none" }}
                  />
                </g>
              ))}
              {/* endpoint label only */}
              <text
                x={x(hours.length - 1) + 8}
                y={y(hours[hours.length - 1][p.key]) + 4}
                fill={INK.primary}
                fontFamily={SANS}
                fontSize={TS}
                fontWeight="600"
                style={{ fontVariantNumeric: "tabular-nums" }}
              >
                {hours[hours.length - 1][p.key]}
              </text>
            </svg>
          </div>
        );
      })}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: `${(padL / W) * 100}%`,
          paddingRight: `${(padR / W) * 100}%`,
          marginTop: "4px",
        }}
      >
        {hours.map((h) => (
          <span
            key={h.hour}
            style={{
              fontFamily: SANS,
              fontSize: "0.75rem",
              color: INK.muted,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {h.hour}
          </span>
        ))}
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: FS_9,
          color: INK.muted,
          textAlign: "center",
          marginTop: "4px",
          letterSpacing: "0.6px",
        }}
      >
        HOUR OF THE OUTING
      </div>
      {hover !== null && (
        <Tooltip
          x={(x(hover) / W) * 100}
          y={0}
          align={hover === 0 ? "left" : hover === hours.length - 1 ? "right" : "center"}
        >
          <div style={{ fontWeight: 600, marginBottom: "5px" }}>Hour {hours[hover].hour}</div>
          <TipRow label="Cadence" value={`${hours[hover].cadence} spm`} color={CAT.rust} />
          <TipRow label="Ground contact" value={`${hours[hover].gct} ms`} color={CAT.rust} />
          <TipRow label="Avg HR" value={`${hours[hover].hr} bpm`} />
          <TipRow label="Descent" value={`${hours[hover].down.toLocaleString()} ft`} />
        </Tooltip>
      )}
    </div>
  );
}

/* ───────────── L/R balance over time, against symmetry ───────────── */

export function BalanceChart({ sessions }) {
  const [hover, setHover] = useState(null);
  const narrow = useNarrow();
  const TS = narrow ? 22 : 11;
  const W = 720;
  const H = narrow ? 262 : 200;
  const padL = narrow ? 84 : 44;
  const padR = 14;
  const padT = 14;
  const padB = narrow ? 66 : 38;
  const plotW = W - padL - padR;
  const plotH = H - padT - padB;
  const lo = 49.9;
  const hi = 52.2;
  const t0 = new Date(sessions[0].date).getTime();
  const t1 = new Date(sessions[sessions.length - 1].date).getTime();
  const x = (d) => padL + ((new Date(d).getTime() - t0) / (t1 - t0)) * plotW;
  const y = (v) => padT + plotH - ((v - lo) / (hi - lo)) * plotH;

  return (
    <div style={{ position: "relative" }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: "100%", height: "auto", display: "block", overflow: "visible" }}
        role="img"
        aria-label="Left/right stance-time balance per session over time, against the 50 percent symmetry line"
      >
        {[50, 50.5, 51, 51.5, 52].map((t) => (
          <g key={t}>
            <line x1={padL} x2={W - padR} y1={y(t)} y2={y(t)} stroke={INK.grid} strokeWidth="1" />
            <text
              x={padL - 8}
              y={y(t) + 4}
              textAnchor="end"
              fill={INK.muted}
              fontFamily={SANS}
              fontSize={TS}
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {t.toFixed(1)}
            </text>
          </g>
        ))}
        {/* symmetry line — identified in the legend to keep clear of the month ticks */}
        <line x1={padL} x2={W - padR} y1={y(50)} y2={y(50)} stroke="#3fbf3f" strokeWidth="2" opacity="0.65" />

        {sessions.map((s, i) => {
          const active = hover === i;
          return (
            <g key={`${s.date}-${i}`}>
              <circle
                cx={x(s.date)}
                cy={y(s.balance)}
                r={active ? 7 : 5}
                fill={CAT.rust}
                stroke={SURFACE}
                strokeWidth="2"
                opacity={hover === null || active ? 1 : 0.45}
                style={{ transition: "opacity 0.15s ease, r 0.15s ease" }}
              />
              <circle
                cx={x(s.date)}
                cy={y(s.balance)}
                r="13"
                fill="transparent"
                tabIndex={0}
                role="button"
                aria-label={`${s.date}, balance ${s.balance} percent left`}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                onFocus={() => setHover(i)}
                onBlur={() => setHover(null)}
                style={{ cursor: "pointer", outline: "none" }}
              />
            </g>
          );
        })}
        {["2026-05-21", "2026-06-16", "2026-07-19"].map((d) => (
          <text
            key={d}
            x={x(d)}
            y={H - padB + (narrow ? 38 : 22)}
            textAnchor="middle"
            fill={INK.muted}
            fontFamily={SANS}
            fontSize={TS}
          >
            {new Date(d).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}
          </text>
        ))}
      </svg>
      {hover !== null && (
        <Tooltip
          x={(x(sessions[hover].date) / W) * 100}
          y={(y(sessions[hover].balance) / H) * 100}
          align={x(sessions[hover].date) < 140 ? "left" : x(sessions[hover].date) > W - 140 ? "right" : "center"}
        >
          <div style={{ fontWeight: 600, marginBottom: "5px" }}>
            {new Date(sessions[hover].date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              timeZone: "UTC",
            })} · week {sessions[hover].week}
          </div>
          <TipRow label="Balance" value={`${sessions[hover].balance}% left`} color={CAT.rust} />
          <TipRow label="Surface" value={sessions[hover].type} />
        </Tooltip>
      )}
    </div>
  );
}

/* ───────────── readiness meters ───────────── */

export function Meter({ label, value, target, unit, pct }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginBottom: "7px",
          gap: "12px",
        }}
      >
        <span style={{ fontFamily: SANS, fontSize: FS_11, fontWeight: 600, color: INK.primary }}>
          {label}
        </span>
        <span
          style={{
            fontFamily: SANS,
            fontSize: FS_9,
            color: INK.secondary,
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {value.toLocaleString()} of {target.toLocaleString()} {unit}
          <span style={{ color: INK.primary, fontWeight: 600 }}>· {pct}%</span>
        </span>
      </div>
      <div
        style={{
          height: "10px",
          borderRadius: "5px",
          background: `${CAT.rust}26`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${pct}%`,
            height: "100%",
            borderRadius: "5px",
            background: CAT.rust,
          }}
        />
      </div>
    </div>
  );
}

export { TipRow };
