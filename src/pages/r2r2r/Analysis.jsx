import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FS_10, FS_11, FS_12, FS_12_5, FS_13, FS_15, FS_22, FS_26 } from "../../styles/fontSizes";
import {
  BalanceChart,
  compact,
  DriftChart,
  Dumbbell,
  EfChart,
  Figure,
  HrDistribution,
  Meter,
  SmallMultiples,
  StatTile,
  VolumeChart,
} from "./analysisCharts";
import {
  BALANCE,
  CAT,
  CAVEATS,
  CLIMBS,
  DESCENTS,
  DRIFT,
  EF_RUNS,
  HEADLINES,
  HR_BANDS,
  HR_DISTRIBUTION,
  HR_RAMP,
  INK,
  JULY25_HOURS,
  LONG_DAYS,
  META,
  READINESS,
  RECOMMENDATIONS,
  SCORECARD,
  WEEKS,
} from "./analysisData";

const SANS = "'DM Sans', sans-serif";
const SERIF = "'Source Serif 4', 'Georgia', serif";

const VERDICT = {
  strong: { color: "#3fbf3f", label: "Strong", icon: "▲" },
  good: { color: "#3fbf3f", label: "Good", icon: "▲" },
  warning: { color: CAT.amber, label: "Stalled", icon: "■" },
  poor: { color: "#d64b4b", label: "Poor", icon: "▼" },
  unknown: { color: INK.secondary, label: "Unmeasured", icon: "—" },
};

const shortDate = (d) => new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" });

function Section({ num, eyebrow, title, lede, children }) {
  return (
    <section
      style={{
        padding: "44px 24px",
        borderTop: `1px solid ${INK.grid}`,
        maxWidth: "860px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          fontFamily: SANS,
          fontSize: FS_10,
          fontWeight: 700,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          color: CAT.rust,
          marginBottom: "12px",
          display: "flex",
          alignItems: "baseline",
          gap: "12px",
        }}
      >
        <span style={{ color: INK.muted }}>{num}</span>
        {eyebrow}
      </div>
      <h2
        style={{
          fontFamily: SERIF,
          fontSize: FS_26,
          fontWeight: 600,
          lineHeight: 1.15,
          letterSpacing: "-0.5px",
          color: INK.primary,
          marginBottom: lede ? "14px" : "22px",
        }}
      >
        {title}
      </h2>
      {lede && (
        <p
          style={{
            fontFamily: SERIF,
            fontSize: FS_15,
            lineHeight: 1.6,
            color: "#b8b3ad",
            marginBottom: "24px",
          }}
        >
          {lede}
        </p>
      )}
      {children}
    </section>
  );
}

function P({ children }) {
  return (
    <p
      style={{
        fontFamily: SERIF,
        fontSize: FS_13,
        lineHeight: 1.68,
        color: "#c9c4be",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function Callout({ tone = "rust", title, children }) {
  const color = tone === "good" ? "#3fbf3f" : tone === "warn" ? CAT.amber : CAT.rust;
  return (
    <div
      style={{
        borderLeft: `3px solid ${color}`,
        background: "rgba(255,255,255,0.025)",
        borderRadius: "0 8px 8px 0",
        padding: "16px 18px",
        margin: "26px 0",
      }}
    >
      <div
        style={{
          fontFamily: SANS,
          fontSize: FS_10,
          fontWeight: 700,
          letterSpacing: "1.6px",
          textTransform: "uppercase",
          color,
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <div style={{ fontFamily: SERIF, fontSize: FS_12_5, lineHeight: 1.62, color: "#c9c4be" }}>
        {children}
      </div>
    </div>
  );
}

function Table({ columns, align, rows, highlight }) {
  return (
    <div style={{ overflowX: "auto", margin: "22px 0" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: SANS,
          fontSize: FS_10,
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
                  textAlign: align?.[i] ?? (i === 0 ? "left" : "right"),
                  padding: "8px 12px 8px 0",
                  color: INK.secondary,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  borderBottom: `1px solid ${INK.hairline}`,
                }}
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={ri} style={highlight?.(ri) ? { background: "rgba(194,90,42,0.09)" } : undefined}>
              {r.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    textAlign: align?.[ci] ?? (ci === 0 ? "left" : "right"),
                    padding: "7px 12px 7px 0",
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

export default function Analysis() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const done = WEEKS.filter((w) => !w.partial);
  const milesDone = done.reduce((a, w) => a + w.miles, 0);
  const milesTarget = done.reduce((a, w) => a + w.target, 0);
  const vertDone = done.reduce((a, w) => a + w.vert, 0);
  const vertTarget = done.reduce((a, w) => a + w.vertTarget, 0);

  return (
    <div
      style={{
        fontFamily: SERIF,
        background: "#0f1114",
        color: INK.primary,
        minHeight: "100vh",
      }}
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        html, body { background: #0f1114; }
        html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: rgba(232,228,223,0.18); color: #fff; }

        .nav-link { transition: color 0.18s ease, transform 0.18s ease; }
        .nav-link:hover { color: #e8e4df !important; }
        .back-link:hover { transform: translateX(-3px); }

        .tbl-toggle:hover { color: #e8e4df !important; }
        .tbl-toggle:focus-visible { outline: 2px solid rgba(232,228,223,0.35); outline-offset: 3px; border-radius: 4px; }
        .chevron { display: inline-block; transition: transform 0.2s ease; }

        [tabindex="0"]:focus-visible { outline: 2px solid rgba(232,228,223,0.55); outline-offset: 2px; border-radius: 3px; }
        button:focus-visible { outline: 2px solid rgba(232,228,223,0.55); outline-offset: 2px; }

        @media (prefers-reduced-motion: reduce) {
          .nav-link, .chevron, .back-link { transition: none; }
          .back-link:hover { transform: none; }
          circle, rect, div { transition: none !important; }
        }
      `}
      </style>

      {/* ── Header ── */}
      <header
        style={{
          padding: "18px 24px 34px",
          borderBottom: `1px solid ${INK.grid}`,
          background: `linear-gradient(180deg, ${CAT.rust}1c 0%, ${CAT.rust}05 55%, transparent 100%)`,
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "22px" }}>
          <Link
            to="/r2r2r"
            className="nav-link back-link"
            style={{
              fontFamily: SANS,
              fontSize: FS_12,
              fontWeight: 500,
              color: "#888",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span aria-hidden="true" style={{ lineHeight: 1 }}>←</span>
            Plan overview
          </Link>
        </div>

        <div
          style={{
            fontFamily: SANS,
            fontSize: FS_10,
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: CAT.rust,
            marginBottom: "12px",
          }}
        >
          Fitness &amp; Performance · Week {META.planWeek} of {META.planWeeks}
        </div>

        <h1
          style={{
            fontFamily: SERIF,
            fontSize: FS_26,
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.6px",
            marginBottom: "14px",
          }}
        >
          Twelve weeks in.
        </h1>

        <p
          style={{
            fontFamily: SERIF,
            fontSize: FS_15,
            lineHeight: 1.55,
            color: "#b8b3ad",
            marginBottom: "26px",
          }}
        >
          What {META.activities}{" "}
          exported Garmin activities say about the engine, the legs and the tendon — and about the {META.daysOut}{" "}
          days left before the canyon.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(128px, 1fr))",
            gap: "10px",
          }}
        >
          <StatTile label="Distance run" value={META.totalMiles} unit="mi" footnote="41 activities" />
          <StatTile
            label="Vertical gain"
            value={(META.totalGain / 1000).toFixed(1) + "k"}
            unit="ft"
            delta={`${Math.round((vertDone / vertTarget) * 100)}% of plan`}
            deltaGood
          />
          <StatTile
            label="Time on feet"
            value={META.totalHours}
            unit="h"
            footnote={`${Math.round((milesDone / milesTarget) * 100)}% of planned miles`}
          />
          <StatTile label="To race day" value={META.daysOut} unit="days" footnote="Sat 24 Oct 2026" />
        </div>
      </header>

      {/* ── 01 Summary ── */}
      <Section
        num="01"
        eyebrow="Executive summary"
        title="Better than the mileage table suggests"
        lede={`You have hit ${Math.round((milesDone / milesTarget) * 100)}% of planned mileage but ${
          Math.round((vertDone / vertTarget) * 100)
        }% of planned vertical — and the two metrics that actually predict a canyon finish, aerobic durability and descent capacity, have both moved decisively in the right direction.`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {HEADLINES.map((h, i) => {
            const v = VERDICT[h.verdict];
            return (
              <div
                key={h.id}
                style={{
                  padding: "18px 20px",
                  border: `1px solid ${INK.hairline}`,
                  borderRadius: "10px",
                  borderLeft: `3px solid ${v.color}`,
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "10px",
                    marginBottom: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: FS_10,
                      fontWeight: 700,
                      color: INK.muted,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    style={{
                      fontFamily: SANS,
                      fontSize: FS_10,
                      fontWeight: 700,
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                      color: v.color,
                    }}
                  >
                    <span aria-hidden="true">{v.icon}</span> {v.label}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: FS_15,
                    fontWeight: 600,
                    color: INK.primary,
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {h.title}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_22,
                    fontWeight: 600,
                    color: v.color,
                    letterSpacing: "-0.5px",
                    lineHeight: 1,
                    marginBottom: "6px",
                  }}
                >
                  {h.stat}
                </div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_10,
                    color: INK.secondary,
                    marginBottom: "12px",
                  }}
                >
                  {h.statLabel}
                </div>
                <div
                  style={{ fontFamily: SERIF, fontSize: FS_12_5, lineHeight: 1.62, color: "#c9c4be" }}
                >
                  {h.body}
                </div>
              </div>
            );
          })}
        </div>

        <Callout tone="good" title="Bottom line">
          The engine and the legs are on track. The illness in weeks 7–8 cost volume, not fitness, and weeks 10–11
          recovered cleanly. The risks now are intensity discipline and the sheer size of the gap between your biggest
          day — 16 mi and 5,174 ft — and race day.
        </Callout>
      </Section>

      {/* ── 02 Volume ── */}
      <Section
        num="02"
        eyebrow="Volume"
        title="Plan versus actual"
        lede="Measured against the revised targets in the plan data. Week 1 is Mon 11 May 2026 — confirmed because weeks 7 and 8 actuals of 11.6 and 7.4 miles match the illness notes exactly."
      >
        <Figure
          title="Weekly mileage against target"
          subtitle="Bars are actual miles; the horizontal tick on each bar is that week's plan target."
          legend={[
            { label: "Actual miles", color: CAT.rust },
            { label: "Plan target", color: CAT.river, shape: "line" },
          ]}
          note="Week 12 is in progress at the time of analysis and is shown at reduced opacity."
          table={{
            columns: ["Week", "Miles", "Target", "% of plan", "Note"],
            rows: WEEKS.map((w) => [
              `Wk ${w.week}`,
              w.miles.toFixed(1),
              w.target,
              `${Math.round((w.miles / w.target) * 100)}%`,
              w.note || "—",
            ]),
          }}
        >
          <VolumeChart weeks={WEEKS} valueKey="miles" targetKey="target" unit="mi" />
        </Figure>

        <Figure
          title="Weekly vertical gain against target"
          subtitle="The same weeks, measured in feet of climbing. Note how differently this reads."
          legend={[
            { label: "Actual vertical", color: CAT.rust },
            { label: "Plan target", color: CAT.river, shape: "line" },
          ]}
          table={{
            columns: ["Week", "Vert ft", "Target", "% of plan", "Descent ft"],
            rows: WEEKS.map((w) => [
              `Wk ${w.week}`,
              w.vert.toLocaleString(),
              w.vertTarget.toLocaleString(),
              `${Math.round((w.vert / w.vertTarget) * 100)}%`,
              w.descent.toLocaleString(),
            ]),
          }}
        >
          <VolumeChart
            weeks={WEEKS}
            valueKey="vert"
            targetKey="vertTarget"
            unit="ft"
            format={compact}
          />
        </Figure>

        <P>
          <strong style={{ color: INK.primary }}>The shortfall is concentrated, not chronic.</strong>{" "}
          Weeks 7–9 — illness and re-entry — account for 48 of the 61 missing miles. Strip those out and you are at 90%
          of plan. Every non-illness week except week 6 exceeded its vertical target, several by two and a half to three
          times.
        </P>
        <P>
          <strong style={{ color: INK.primary }}>Week 6 is the anomaly worth naming:</strong>{" "}
          23.8 miles at 108 ft of vert, because three of the four runs were on a treadmill. You hit the mileage and
          missed the entire point of the week.
        </P>
        <P>
          <strong style={{ color: INK.primary }}>Week 11 was your best week by a wide margin</strong>{" "}
          — 35.6 mi, 5,456 ft, 10.3 hours, and a 16-mile day. That is a legitimate Phase 3 week arriving one week early,
          and it landed without a tendon flare.
        </P>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
            marginTop: "26px",
          }}
        >
          <StatTile
            label="Weeks 1–11 mileage"
            value={`${Math.round((milesDone / milesTarget) * 100)}%`}
            footnote={`${Math.round(milesDone)} of ${milesTarget} mi`}
          />
          <StatTile
            label="Weeks 1–11 vertical"
            value={`${Math.round((vertDone / vertTarget) * 100)}%`}
            footnote={`${vertDone.toLocaleString()} of ${vertTarget.toLocaleString()} ft`}
          />
          <StatTile label="Post-illness rebuild" value="92%" footnote="Weeks 9–11 mileage" />
        </div>
      </Section>

      {/* ── 03 Aerobic ── */}
      <Section
        num="03"
        eyebrow="Aerobic fitness"
        title="The durability signal"
        lede="Heart-rate drift — grade-adjusted pace against heart rate, first half of a run versus second. Your plan's rule: under 5% means you are at or below aerobic threshold. Only flat and treadmill runs of 35 minutes or more are valid tests, so only those appear here."
      >
        <Figure
          title="Heart-rate drift per steady run"
          subtitle="Each dot is one run. Lower is better. The shaded band is at or below aerobic threshold."
          legend={[
            { label: "Under 5% — at/below AeT", color: "#3fbf3f" },
            { label: "5–10% — marginal", color: CAT.amber },
            { label: "Over 10% — above AeT", color: "#d64b4b" },
            { label: "5% threshold", color: "#3fbf3f", shape: "line" },
          ]}
          note="Two spikes in weeks 7–8 (21.6% and 35.2%) coincide exactly with the illness. Mountain-day drift is excluded — terrain, not aerobic decoupling, drives it."
          table={{
            columns: ["Date", "Wk", "Min", "Avg HR", "Drift"],
            rows: DRIFT.map((d) => [shortDate(d.date), d.week, d.minutes, d.hr, `${d.drift}%`]),
          }}
        >
          <DriftChart sessions={DRIFT} />
        </Figure>

        <Callout tone="good" title="The single clearest finding">
          At the same heart rate — 148 to 150 bpm — drift collapsed from 11–14% in May to 0.3–2.9% in July. That is a
          large, consistent, repeatedly-replicated improvement in aerobic durability: exactly the adaptation Phase 2
          exists to produce. The 70-minute treadmill run at HR 150 with 0.3% drift is the strongest single data point.
          {" "}
          <strong style={{ color: INK.primary }}>Estimated AeT: ~150–152 bpm</strong>, up from ~143–145 in May.
        </Callout>

        <Figure
          title="Efficiency factor on matched easy runs"
          subtitle="Grade-adjusted speed ÷ heart rate, restricted to home-base runs at 1,450–1,750 m with under 120 ft of gain per mile. Higher is better."
          note="Trend line is a least-squares fit: −0.08 EF units over 68 days (r = −0.05). Statistically flat."
          table={{
            columns: ["Date", "Wk", "EF", "Avg HR", "Pace", "Cadence"],
            rows: EF_RUNS.map((r) => [
              shortDate(r.date),
              r.week,
              r.ef.toFixed(2),
              r.hr,
              `${Math.floor(r.paceSec / 60)}:${String(r.paceSec % 60).padStart(2, "0")}`,
              r.cad,
            ]),
          }}
        >
          <EfChart runs={EF_RUNS} />
        </Figure>

        <P>
          So: durability improved a lot, but steady-state economy did not. This is a normal pattern twelve weeks into a
          base block after an injury layoff — you built the ability to <em>hold</em>{" "}
          a pace, not yet the ability to hold a <em>faster</em>{" "}
          pace. It is also exactly what a training distribution stuck in Zone 3 produces.
        </P>
        <P>
          One confound is worth stating plainly: you relocated from Virginia at ~120 m to Colorado at ~1,600 m around 12
          May. Low-altitude efficiency averaged 18.22 against 16.60 for early Colorado runs. Some of what looks like no
          progress is you having absorbed a permanent ~9% altitude tax and held serve — which is itself an improvement.
        </P>
      </Section>

      {/* ── 04 Mountain ── */}
      <Section
        num="04"
        eyebrow="Mountain performance"
        title="The canyon-specific engine"
        lede="Descending is the historic destroyer of R2R2R finishers, and it is where your biggest gain sits."
      >
        <Figure
          title="Sustained descending: June 13 → July 25"
          subtitle="Comparable efforts — 86 minutes of descending steeper than −8% in both cases."
          legend={[
            { label: "Jun 13 (week 5)", color: `${CAT.rust}88` },
            { label: "Jul 25 (week 11)", color: CAT.rust },
          ]}
          note="July 25 covered 24% more vertical drop, at the end of a day nearly twice as long."
          table={{
            columns: ["Date", "Min", "Metres down", "m/s", "Cadence", "Ground contact", "HR"],
            rows: DESCENTS.map((d) => [
              d.label,
              d.minutes,
              d.metres.toLocaleString(),
              d.speed.toFixed(2),
              d.cadence,
              `${d.gct} ms`,
              d.hr,
            ]),
          }}
        >
          <Dumbbell
            rows={[
              {
                label: "Descent speed",
                from: 1.27,
                to: 1.58,
                min: 1.1,
                max: 1.75,
                fromLabel: "1.27 m/s",
                toLabel: "1.58 m/s",
                fromTag: "Jun 13",
                toTag: "Jul 25",
                delta: "+24%",
                goodUp: true,
              },
              {
                label: "Cadence",
                from: 118,
                to: 142,
                min: 110,
                max: 150,
                fromLabel: "118 spm",
                toLabel: "142 spm",
                fromTag: "Jun 13",
                toTag: "Jul 25",
                delta: "+20%",
                goodUp: true,
              },
              {
                label: "Ground contact time",
                from: 438,
                to: 361,
                min: 340,
                max: 460,
                fromLabel: "438 ms",
                toLabel: "361 ms",
                fromTag: "Jun 13",
                toTag: "Jul 25",
                delta: "−77 ms",
                hint: "lower is better",
                goodUp: true,
              },
            ]}
          />
        </Figure>

        <P>
          June 13 was <em>hiking</em> down. July 25 was <em>running</em>{" "}
          down — on more vertical drop, later into a longer day. The higher descent heart rate (120 → 141) is not a red
          flag; it is you choosing to run rather than pick your way down.
        </P>

        <Figure
          title="Within the 16-mile day: form through hours 4–6"
          subtitle="Cadence rising and ground contact falling late in a 6.5-hour outing, at stable heart rate."
          note="Some of the pace gain in the final hours is easing gradient and dropping altitude — but cadence and ground-contact trends are terrain-independent."
          table={{
            columns: ["Hour", "Miles", "Up ft", "Down ft", "HR", "Cadence", "Ground contact"],
            rows: JULY25_HOURS.map((h) => [
              h.hour,
              h.miles.toFixed(2),
              h.up.toLocaleString(),
              h.down.toLocaleString(),
              h.hr,
              h.cadence,
              `${h.gct} ms`,
            ]),
          }}
        >
          <SmallMultiples
            hours={JULY25_HOURS}
            panels={[
              { key: "cadence", label: "Cadence", unit: "steps per minute", tickStep: 10 },
              { key: "gct", label: "Ground contact time", unit: "milliseconds", tickStep: 20 },
            ]}
          />
        </Figure>

        <Callout tone="good" title="Why this matters">
          Cadence rising from 127 to 167 and ground contact falling from 405 to 283 ms in hours 4–6 of a
          six-and-a-half-hour day, at stable heart rate, is the profile of an athlete whose legs are{" "}
          <strong style={{ color: INK.primary }}>not</strong>{" "}
          failing. For an event whose classic failure mode is quads destroyed by mile 25, this is the most encouraging
          result in the dataset.
        </Callout>

        <h3
          style={{
            fontFamily: SERIF,
            fontSize: FS_15,
            fontWeight: 600,
            color: INK.primary,
            margin: "34px 0 12px",
          }}
        >
          Climbing: obscured by terrain, not clearly improved
        </h3>
        <P>
          This table <em>cannot</em>{" "}
          be read as a decline. Vertical speed falls with climb duration and with altitude, and both increased sharply
          as the block progressed. The two highest values were 8–12 minute climbs at 820 m; the lowest was 138
          continuous minutes above 3,000 m. Those are not comparable efforts.
        </P>
        <Table
          columns={["Climb", "Wk", "Min", "Metres up", "VAM m/h", "Avg HR", "Altitude"]}
          rows={CLIMBS.map((c) => [
            c.label,
            c.week,
            c.minutes,
            c.metres.toLocaleString(),
            c.vam,
            c.hr,
            `${c.alt.toLocaleString()} m`,
          ])}
          highlight={(i) => i === CLIMBS.length - 1}
        />
        <P>
          What is fair to say: on July 25 you climbed 1,333 m over 138 minutes at HR 150 — more than double the
          sustained climbing of any prior session, at a <em>lower</em> heart rate than the shorter June efforts.
        </P>
        <Callout tone="warn" title="A gap in the data">
          You have no repeated, standardised climb — same hill, same effort — anywhere in twelve weeks. Climbing fitness
          is the one major quality you genuinely cannot measure.
        </Callout>

        <h3
          style={{
            fontFamily: SERIF,
            fontSize: FS_15,
            fontWeight: 600,
            color: INK.primary,
            margin: "34px 0 12px",
          }}
        >
          Long-day progression
        </h3>
        <Table
          columns={["Day", "Wk", "Miles", "Gain ft", "Moving", "Elapsed", "Stopped"]}
          rows={LONG_DAYS.map((d) => [
            d.label,
            d.week,
            d.miles.toFixed(1),
            d.gain.toLocaleString(),
            `${d.moving.toFixed(2)} h`,
            `${d.elapsed.toFixed(2)} h`,
            `${d.stopped} min`,
          ])}
          highlight={(i) => i === LONG_DAYS.length - 1}
        />
        <P>
          Beyond the raw size of July 25, note the stopped time: 62 minutes on June 13 against 4 minutes on July 25. On
          a 14-hour canyon day, stopped time is the difference between finishing in daylight and not. That is a
          discipline and fuelling improvement, not just a fitness one.
        </P>
      </Section>

      {/* ── 05 Intensity ── */}
      <Section
        num="05"
        eyebrow="The problem"
        title="Intensity distribution"
        lede="Percentage of moving time by heart rate, across the three blocks of the plan so far."
      >
        <Figure
          title="Where your training time actually goes"
          subtitle="Darker is easier, lighter is harder. With AeT at ~150, roughly half your training sits at or above threshold."
          legend={HR_BANDS.map((b, i) => ({ label: `${b.label} · ${b.desc}`, color: HR_RAMP[i] }))}
          note="Segments under 11% are labelled in the tooltip and the data table rather than inside the bar."
          table={{
            columns: ["Block", ...HR_BANDS.map((b) => b.label), "Hours"],
            rows: HR_DISTRIBUTION.map((b) => [
              b.label,
              ...b.pct.map((p) => `${p}%`),
              b.hours.toFixed(1),
            ]),
          }}
        >
          <HrDistribution blocks={HR_DISTRIBUTION} bands={HR_BANDS} ramp={HR_RAMP} />
        </Figure>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
            margin: "26px 0",
          }}
        >
          <StatTile label="At HR 145–160" value="53%" footnote="of all training time" />
          <StatTile label="Below HR 135" value="12%" footnote="true easy volume" />
          <StatTile label="Above HR 160" value="9%" footnote="genuinely hard" />
        </div>

        <P>
          Against Seiler's 80/20 and your own plan's Principle 3 — 75–85% of volume below AeT — this is inverted. Your
          plan names the failure precisely:
        </P>
        <blockquote
          style={{
            borderLeft: `3px solid ${INK.hairline}`,
            paddingLeft: "18px",
            margin: "20px 0 22px",
            fontFamily: SERIF,
            fontSize: FS_13,
            fontStyle: "italic",
            lineHeight: 1.6,
            color: "#b8b3ad",
          }}
        >
          “Z3 trap: this is where runners ego-pace their easy runs. It's too hard to maintain volume safely and not hard
          enough to drive top-end adaptation.”
        </blockquote>
        <P>
          The 145–160 band has been 48%, 68% and 52% across the three blocks. It is not resolving on its own. This is
          very likely why efficiency factor is flat while drift improved: you are training the top of your aerobic range
          hard enough to build durability there, but never accumulating the genuinely easy volume that raises the
          ceiling — and never going hard enough, often enough, to raise it from above.
        </P>
        <Callout tone="warn" title="The fix for Phase 3">
          On easy days, cap heart rate at <strong style={{ color: INK.primary }}>140</strong>{" "}
          and accept whatever pace that produces — roughly 11:00–11:30/mi at home base, based on your 26 July run: HR
          141 at 10:41 with 3.5% drift. Put the intensity you save into the muscular endurance and hill sessions the
          plan already prescribes.
        </Callout>
      </Section>

      {/* ── 06 Form & tendon ── */}
      <Section
        num="06"
        eyebrow="Form &amp; tendon"
        title="The right ankle is accepting load"
        lede="Left/right stance-time balance is the most directly relevant marker available for a right posterior tibial tendinopathy. 50.0% is perfect symmetry; above 50 means more time on the left foot — offloading the injured side."
      >
        <Figure
          title="Stance-time balance per session"
          subtitle="Each dot is one run. Closer to the line is better."
          legend={[
            { label: "Session balance", color: CAT.rust },
            { label: "50.0 — perfect symmetry", color: "#3fbf3f", shape: "line" },
          ]}
          note="Stance-time balance is a device-derived estimate with meaningful absolute error. The 30-session trend is trustworthy; individual values are not."
          table={{
            columns: ["Date", "Wk", "Balance", "Surface"],
            rows: BALANCE.map((b) => [shortDate(b.date), b.week, `${b.balance}%`, b.type]),
          }}
        >
          <BalanceChart sessions={BALANCE} />
        </Figure>

        <P>
          Every session in weeks 2–3 sat at 51.1–51.6% left. Recent sessions run 50.0–50.9%, with the 14 July treadmill
          run at 50.04% — essentially perfect symmetry. You began the block reliably favouring the left leg, which is
          what you would expect with a symptomatic right posterior tibial tendon. That protective bias has steadily
          unwound as the HSR block progressed.
        </P>
        <P>
          Combined with the absence of any acute asymmetry spike — including on the 16-mile day — this is good evidence
          that the tendon rehab is working.
        </P>

        <Callout tone="warn" title="One thing to watch">
          Cadence on easy runs is down about 6 spm across the block (177 → 171) and ground contact up about 11 ms (281 →
          292 ms), against your plan's explicit prescription to hold cadence ~5% above default to spare the tendon.
          Recent easy runs are also slightly slower, which explains part of it. Re-establish 175+ spm and re-check in
          two weeks; if cadence stays low while pace recovers, treat it as a fatigue signal.
        </Callout>
      </Section>

      {/* ── 07 Readiness ── */}
      <Section
        num="07"
        eyebrow="Race readiness"
        title="The gap, and the scorecard"
        lede="Your biggest single day so far, measured against what race day asks. Twelve weeks and the entirety of Phases 3 and 4 remain."
      >
        <Figure
          title="Biggest day (25 July) against R2R2R demand"
          subtitle="Filled portion is what you have demonstrated in one day."
          note="The plan's peak week 21 — 60 mi and 11,000 ft — is designed to close exactly this gap. Being at roughly 47% at the halfway mark is on schedule."
          table={{
            columns: ["Metric", "Jul 25", "R2R2R", "Achieved"],
            rows: READINESS.map((r) => [
              r.metric,
              `${r.actual.toLocaleString()} ${r.unit}`,
              `${r.target.toLocaleString()} ${r.unit}`,
              `${r.pct}%`,
            ]),
          }}
        >
          {READINESS.map((r) => (
            <Meter
              key={r.metric}
              label={r.metric}
              value={r.actual}
              target={r.target}
              unit={r.unit}
              pct={r.pct}
            />
          ))}
        </Figure>

        <h3
          style={{
            fontFamily: SERIF,
            fontSize: FS_15,
            fontWeight: 600,
            color: INK.primary,
            margin: "34px 0 4px",
          }}
        >
          Scorecard
        </h3>
        <div style={{ margin: "18px 0" }}>
          {SCORECARD.map((s) => {
            const v = VERDICT[s.status];
            return (
              <div
                key={s.quality}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) auto",
                  gap: "6px 14px",
                  alignItems: "baseline",
                  padding: "12px 0",
                  borderBottom: `1px solid ${INK.grid}`,
                }}
              >
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_12,
                    fontWeight: 600,
                    color: INK.primary,
                  }}
                >
                  {s.quality}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_10,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: v.color,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span aria-hidden="true">{v.icon}</span> {v.label}
                </span>
                <span
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_10,
                    color: INK.secondary,
                    gridColumn: "1 / -1",
                    lineHeight: 1.5,
                  }}
                >
                  {s.evidence}
                </span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── 08 Recommendations ── */}
      <Section
        num="08"
        eyebrow="What to do"
        title="Recommendations, in priority order"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {RECOMMENDATIONS.map((r, i) => (
            <div
              key={r.title}
              style={{
                display: "grid",
                gridTemplateColumns: "38px minmax(0, 1fr)",
                gap: "14px",
                padding: "16px 0",
                borderBottom: `1px solid ${INK.grid}`,
              }}
            >
              <span
                style={{
                  fontFamily: SERIF,
                  fontSize: FS_22,
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: i === 0 ? CAT.rust : INK.muted,
                  lineHeight: 1,
                }}
              >
                {i + 1}
              </span>
              <div>
                <div
                  style={{
                    fontFamily: SANS,
                    fontSize: FS_12_5,
                    fontWeight: 600,
                    color: INK.primary,
                    marginBottom: "7px",
                  }}
                >
                  {r.title}
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: FS_12_5,
                    lineHeight: 1.62,
                    color: "#c9c4be",
                  }}
                >
                  {r.body}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 09 Method ── */}
      <Section
        num="09"
        eyebrow="Method &amp; caveats"
        title="Read these before acting on any of it"
        lede={`${META.activities} FIT activities from ${shortDate(META.firstActivity)} to ${
          shortDate(META.analysisDate)
        }, parsed with fitparse. Per-second records were resampled into 20-second blocks for gradient classification, because per-sample gradients misclassify slow steep hiking as flat. Grade-adjusted pace uses Minetti's metabolic-cost polynomial, clamped to ±45%. Drift compares the first half of moving time to the second, split by time. Volume totals use Garmin's barometric session ascent and descent.`}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {CAVEATS.map((c) => (
            <div key={c.title} style={{ padding: "14px 0", borderBottom: `1px solid ${INK.grid}` }}>
              <div
                style={{
                  fontFamily: SANS,
                  fontSize: FS_11,
                  fontWeight: 600,
                  color: CAT.amber,
                  marginBottom: "6px",
                }}
              >
                {c.title}
              </div>
              <div
                style={{ fontFamily: SERIF, fontSize: FS_12_5, lineHeight: 1.6, color: "#a8a39d" }}
              >
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Footer ── */}
      <footer
        style={{
          padding: "34px 24px 54px",
          borderTop: `1px solid ${INK.grid}`,
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <Link
          to="/r2r2r"
          className="nav-link"
          style={{
            fontFamily: SANS,
            fontSize: FS_12,
            fontWeight: 500,
            color: "#888",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span aria-hidden="true">←</span> Back to the plan
        </Link>
        <div
          style={{
            fontFamily: SANS,
            fontSize: FS_10,
            color: INK.muted,
            marginTop: "18px",
            lineHeight: 1.6,
          }}
        >
          Analysis generated {shortDate(META.analysisDate)} 2026 from {META.activities}{" "}
          exported Garmin activities. Symptoms in the right ankle override every number on this page.
        </div>
      </footer>
    </div>
  );
}
