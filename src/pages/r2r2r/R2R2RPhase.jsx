import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  getPhaseById,
  getPhaseForWeek,
  getPhaseIndex,
  getWeeksForPhase,
  PHASES,
  PLAN,
  REFERENCE,
  STRENGTH_PROGRAMS,
  WORKOUT_TYPES,
} from "./data";
import {
  FS_9,
  FS_10,
  FS_11,
  FS_11_5,
  FS_12,
  FS_12_5,
  FS_13,
  FS_14,
  FS_15,
  FS_22,
  FS_26,
} from "../../styles/fontSizes";

const VALID_IDS = PHASES.map((p) => p.id);

export default function R2R2RPhase() {
  const { phaseId } = useParams();
  const navigate = useNavigate();

  if (!VALID_IDS.includes(phaseId)) {
    return <Navigate to="/r2r2r" replace />;
  }

  const phase = getPhaseById(phaseId);
  const phaseWeeks = getWeeksForPhase(phaseId);
  const phaseIndex = getPhaseIndex(phaseId);
  const prevPhase = phaseIndex > 0 ? PHASES[phaseIndex - 1] : null;
  const nextPhase = phaseIndex < PHASES.length - 1 ? PHASES[phaseIndex + 1] : null;

  const [selectedWeek, setSelectedWeek] = useState(phase.weeks[0]);
  const [activeTab, setActiveTab] = useState("schedule");
  const [expandedSession, setExpandedSession] = useState(null);

  useEffect(() => {
    setSelectedWeek(phase.weeks[0]);
    setActiveTab("schedule");
    setExpandedSession(null);
    window.scrollTo(0, 0);
  }, [phaseId]);

  const weekData = PLAN.find((w) => w.week === selectedWeek);
  const strengthProgram = STRENGTH_PROGRAMS[phaseId];
  const volumeData = PLAN.map((w) => w.totalMiles);
  const maxVol = Math.max(...volumeData);

  const handleBarClick = (weekNum) => {
    const targetPhase = getPhaseForWeek(weekNum);
    if (targetPhase.id === phaseId) {
      setSelectedWeek(weekNum);
    } else {
      navigate(`/r2r2r/${targetPhase.id}`);
    }
  };

  const renderExercise = (ex, i) => (
    <div
      key={i}
      style={{
        display: "flex",
        gap: "10px",
        padding: "10px 0",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: FS_11,
          fontWeight: 700,
          color: phase.color,
          width: "18px",
          flexShrink: 0,
          paddingTop: "2px",
        }}
      >
        {String(i + 1).padStart(2, "0")}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_13, fontWeight: 600, color: "#e8e4df" }}>
            {ex.name}
          </span>
          {ex.sets !== "—" && (
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: phase.color,
                fontWeight: 600,
                whiteSpace: "nowrap",
                marginLeft: 8,
              }}
            >
              {ex.sets}
            </span>
          )}
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_11_5, color: "#888", lineHeight: 1.45 }}>
          {ex.rest && ex.rest !== "—" ? `Rest ${ex.rest}. ` : ""}
          {ex.notes}
        </div>
      </div>
    </div>
  );

  const renderStrengthSession = (session, key) => {
    const isOpen = expandedSession === key;
    return (
      <div key={key} style={{ marginBottom: "12px" }}>
        <button
          onClick={() => setExpandedSession(isOpen ? null : key)}
          style={{
            width: "100%",
            padding: "12px 14px",
            background: isOpen ? `${phase.color}15` : "rgba(255,255,255,0.02)",
            border: `1px solid ${isOpen ? `${phase.color}40` : "rgba(255,255,255,0.06)"}`,
            borderRadius: "10px",
            color: isOpen ? phase.color : "#aaa",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_13,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transition: "all 0.15s ease",
          }}
        >
          <span>{session.name}</span>
          <span style={{ fontSize: FS_14, transform: isOpen ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span>
        </button>
        {isOpen && (
          <div
            style={{
              padding: "4px 14px 8px",
              marginTop: "-1px",
              background: `${phase.color}08`,
              border: `1px solid ${phase.color}1f`,
              borderTop: "none",
              borderRadius: "0 0 10px 10px",
            }}
          >
            {session.exercises.map(renderExercise)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      style={{
        fontFamily: "'Source Serif 4', 'Georgia', serif",
        background: "#0f1114",
        color: "#e8e4df",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
      }}
    >
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .week-btn { transition: all 0.2s ease; cursor: pointer; }
        .week-btn:hover { transform: scale(1.12); }
        .day-row { transition: all 0.15s ease; }
        .day-row:hover { background: rgba(255,255,255,0.03); }
        .tab-btn { transition: all 0.15s ease; cursor: pointer; border: none; background: none; }
        .tab-btn:hover { color: #e8e4df !important; }
        .vol-bar { transition: height 0.3s ease, background 0.3s ease; border-radius: 3px 3px 0 0; cursor: pointer; }
        .vol-bar:hover { opacity: 0.85; }
        .nav-link { transition: color 0.15s ease; }
        .nav-link:hover { color: #e8e4df !important; }
      `}
      </style>

      {/* Back link */}
      <div style={{ padding: "18px 24px 0" }}>
        <Link
          to="/r2r2r"
          className="nav-link"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_12,
            color: "#888",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          ← Plan overview
        </Link>
      </div>

      {/* Header */}
      <div
        style={{
          padding: "18px 24px 20px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: `linear-gradient(180deg, ${phase.color}14 0%, transparent 100%)`,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: phase.color,
            marginBottom: "8px",
          }}
        >
          Phase {phase.num} · Weeks {phase.weeks[0]}–{phase.weeks[phase.weeks.length - 1]}
        </div>
        <h1
          style={{ fontSize: FS_26, fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "10px" }}
        >
          {phase.name}
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_13, color: "#999", lineHeight: 1.55 }}>
          {phase.narrative}
        </p>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_11,
            color: "#666",
            marginTop: "12px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <span>
            Focus: <span style={{ color: phase.color, fontWeight: 600 }}>{phase.focus}</span>
          </span>
          <span style={{ color: "#333" }}>|</span>
          <span>
            Volume: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{phase.volumeRange}</span>
          </span>
          <span style={{ color: "#333" }}>|</span>
          <span>
            Vert: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{phase.vertRange}</span>
          </span>
        </div>
      </div>

      {/* Volume Chart — all 24 weeks */}
      <div style={{ padding: "20px 24px 12px" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "12px",
          }}
        >
          24-Week Volume (mi) · Click any bar
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "3px",
            height: "56px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {volumeData.map((v, i) => {
            const weekNum = i + 1;
            const barPhase = getPhaseForWeek(weekNum);
            const inCurrentPhase = barPhase.id === phaseId;
            const isSel = weekNum === selectedWeek;
            return (
              <div
                key={i}
                className="vol-bar"
                onClick={() => handleBarClick(weekNum)}
                style={{
                  flex: 1,
                  height: `${(v / maxVol) * 100}%`,
                  background: isSel
                    ? barPhase.color
                    : inCurrentPhase
                    ? `${barPhase.color}88`
                    : `${barPhase.color}33`,
                  border: isSel ? `2px solid ${barPhase.color}` : "none",
                  position: "relative",
                }}
              >
                {isSel && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-18px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_11,
                      fontWeight: 700,
                      color: barPhase.color,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {v}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "3px", marginTop: "4px" }}>
          {volumeData.map((_, i) => {
            const weekNum = i + 1;
            const inCurrent = getPhaseForWeek(weekNum).id === phaseId;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_9,
                  color: weekNum === selectedWeek ? "#e8e4df" : inCurrent ? "#888" : "#444",
                  fontWeight: weekNum === selectedWeek ? 700 : 400,
                }}
              >
                {weekNum}
              </div>
            );
          })}
        </div>
      </div>

      {/* Week Selector — only current phase */}
      <div style={{ padding: "8px 24px 12px" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {phaseWeeks.map((w) => {
            const isSel = w.week === selectedWeek;
            return (
              <button
                key={w.week}
                className="week-btn"
                onClick={() => {
                  setSelectedWeek(w.week);
                  setExpandedSession(null);
                }}
                style={{
                  width: "44px",
                  height: "38px",
                  border: isSel ? `2px solid ${phase.color}` : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  background: isSel ? `${phase.color}22` : "transparent",
                  color: isSel ? phase.color : "#888",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_13,
                  fontWeight: isSel ? 700 : 500,
                  position: "relative",
                }}
              >
                {w.week}
                {w.deload && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "3px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: phase.color,
                      opacity: 0.7,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Week Header */}
      <div style={{ padding: "0 24px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: FS_22, fontWeight: 700, letterSpacing: "-0.3px" }}>
            Week {weekData.week} · {weekData.name}
          </h2>
          {weekData.deload && (
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: "20px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_11,
                fontWeight: 600,
                letterSpacing: "0.8px",
                textTransform: "uppercase",
                background: "rgba(255,200,60,0.12)",
                color: "#ddb44a",
                border: "1px solid rgba(255,200,60,0.2)",
              }}
            >
              Recovery
            </span>
          )}
        </div>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_13,
            color: "#999",
            lineHeight: 1.5,
            marginBottom: "8px",
          }}
        >
          {weekData.note}
        </p>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12, color: "#666" }}>
          Running: <span style={{ color: phase.color, fontWeight: 600 }}>{weekData.totalMiles} mi</span>
          {weekData.vert > 0 && (
            <>
              <span style={{ margin: "0 8px", color: "#333" }}>|</span>
              Vert: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{weekData.vert.toLocaleString()} ft</span>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{ padding: "0 24px 12px", display: "flex", gap: "0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        {[["schedule", "Schedule"], ["strength", "Strength"], ["reference", "Reference"]].map(([key, label]) => (
          <button
            key={key}
            className="tab-btn"
            onClick={() => {
              setActiveTab(key);
              setExpandedSession(null);
            }}
            style={{
              padding: "8px 14px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_12,
              fontWeight: activeTab === key ? 700 : 500,
              color: activeTab === key ? "#e8e4df" : "#666",
              borderBottom: activeTab === key ? "2px solid #e8e4df" : "2px solid transparent",
              marginBottom: "-1px",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Schedule tab */}
      {activeTab === "schedule" && (
        <div style={{ padding: "12px 24px 20px" }}>
          {weekData.days.map((d, i) => {
            const wt = WORKOUT_TYPES[d.type];
            return (
              <div
                key={i}
                className="day-row"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: "12px 0",
                  borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: FS_11,
                    fontWeight: 600,
                    color: "#666",
                    width: "32px",
                    flexShrink: 0,
                    paddingTop: "2px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {d.day}
                </div>
                <div
                  style={{
                    fontSize: FS_14,
                    color: wt.color,
                    width: "16px",
                    textAlign: "center",
                    flexShrink: 0,
                    paddingTop: "1px",
                  }}
                >
                  {wt.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_13,
                      fontWeight: 600,
                      color: d.type === "rest" ? "#666" : "#e8e4df",
                      marginBottom: "3px",
                    }}
                  >
                    {wt.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontSize: FS_13,
                      color: "#aaa",
                      lineHeight: 1.5,
                    }}
                  >
                    {d.desc}
                  </div>
                </div>
              </div>
            );
          })}
          {weekData.callout && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px 14px",
                background: `${phase.color}0d`,
                border: `1px solid ${phase.color}26`,
                borderRadius: "8px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                fontStyle: "italic",
                color: "#c9b8a8",
                lineHeight: 1.55,
              }}
            >
              {weekData.callout}
            </div>
          )}
        </div>
      )}

      {/* Strength tab */}
      {activeTab === "strength" && (
        <div style={{ padding: "16px 24px 20px" }}>
          <div
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_15,
              fontWeight: 700,
              color: phase.color,
              marginBottom: "4px",
            }}
          >
            {strengthProgram.title}
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_12_5,
              color: "#888",
              lineHeight: 1.5,
              marginBottom: "16px",
            }}
          >
            {strengthProgram.subtitle}
          </p>

          {renderStrengthSession(strengthProgram.sessionA, "a")}
          {renderStrengthSession(strengthProgram.sessionB, "b")}

          <div
            style={{
              marginTop: "12px",
              padding: "12px 14px",
              background: `${phase.color}0d`,
              border: `1px solid ${phase.color}26`,
              borderRadius: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11_5,
              color: "#c9b8a8",
              lineHeight: 1.55,
            }}
          >
            <strong>Timing:</strong>{" "}
            Two sessions per week, separated by ≥48 hours. Always preceded by 5–10 min dynamic warm-up and the prehab
            routine. Strength on non-running days, or before easy runs — never before long runs or workouts.
          </div>
        </div>
      )}

      {/* Reference tab */}
      {activeTab === "reference" && (
        <div style={{ padding: "16px 24px 20px" }}>
          <SectionLabel>Notation</SectionLabel>
          {REFERENCE.notation.map((n, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "12px",
                padding: "8px 0",
                borderBottom: i < REFERENCE.notation.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: FS_12,
                  fontWeight: 700,
                  color: phase.color,
                  minWidth: "130px",
                }}
              >
                {n.code}
              </span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12_5, color: "#aaa", lineHeight: 1.5 }}>
                {n.desc}
              </span>
            </div>
          ))}

          <SectionLabel mt>Heart Rate Zones</SectionLabel>
          {REFERENCE.zoneTable.map((z, i) => (
            <div
              key={i}
              style={{
                padding: "10px 0",
                borderBottom: i < REFERENCE.zoneTable.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_13,
                  fontWeight: 600,
                  color: "#e8e4df",
                  marginBottom: "2px",
                }}
              >
                {z.zone} <span style={{ color: "#666", fontWeight: 400 }}>· {z.hr}</span>
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12, color: "#888", lineHeight: 1.5 }}>
                {z.feel} — <em>{z.use}</em>
              </div>
            </div>
          ))}

          <SectionLabel mt>Four-Rule Traffic Light</SectionLabel>
          {REFERENCE.trafficLight.map((t, i) => (
            <div
              key={i}
              style={{
                padding: "10px 0",
                borderBottom: i < REFERENCE.trafficLight.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_12_5,
                  fontWeight: 600,
                  color: "#ccc",
                  marginBottom: "2px",
                }}
              >
                If: <span style={{ fontWeight: 400, color: "#aaa" }}>{t.if}</span>
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_12_5,
                  color: phase.color,
                  lineHeight: 1.5,
                }}
              >
                Then: {t.then}
              </div>
            </div>
          ))}

          <SectionLabel mt>HSR Protocol</SectionLabel>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_12_5,
              color: "#aaa",
              lineHeight: 1.55,
              marginBottom: "8px",
            }}
          >
            {REFERENCE.hsrProtocol.summary}
          </p>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_12,
              color: "#888",
              lineHeight: 1.55,
              marginBottom: "12px",
            }}
          >
            <strong style={{ color: "#ccc" }}>Progression:</strong> {REFERENCE.hsrProtocol.progression}
          </p>
          {REFERENCE.hsrProtocol.exercises.map((ex, i) => (
            <div
              key={i}
              style={{
                padding: "8px 0",
                borderBottom: i < REFERENCE.hsrProtocol.exercises.length - 1
                  ? "1px solid rgba(255,255,255,0.04)"
                  : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_12_5,
                  fontWeight: 600,
                  color: "#e8e4df",
                  marginBottom: "2px",
                }}
              >
                {ex.name}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12, color: "#888", lineHeight: 1.5 }}>
                {ex.notes}
              </div>
            </div>
          ))}

          {phaseId === "phase-4" && (
            <>
              <SectionLabel mt>Race-Day Pacing</SectionLabel>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_12_5,
                  color: "#aaa",
                  lineHeight: 1.55,
                  marginBottom: "14px",
                }}
              >
                {REFERENCE.raceDayPacing.intro}
              </p>
              {REFERENCE.raceDayPacing.segments.map((s, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: "14px",
                    padding: "12px 14px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${phase.color}26`,
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_13,
                      fontWeight: 700,
                      color: phase.color,
                      marginBottom: "2px",
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_11_5,
                      color: "#888",
                      marginBottom: "8px",
                    }}
                  >
                    {s.stats}
                  </div>
                  {s.bullets.map((b, j) => (
                    <div key={j} style={{ display: "flex", gap: "8px", marginBottom: "4px" }}>
                      <span style={{ color: phase.color, fontSize: FS_11, flexShrink: 0 }}>•</span>
                      <span
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: FS_12,
                          color: "#aaa",
                          lineHeight: 1.5,
                        }}
                      >
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              ))}

              <SectionLabel>Heat Management</SectionLabel>
              {REFERENCE.raceDayPacing.heat.map((h, i) => (
                <div key={i} style={{ display: "flex", gap: "8px", marginBottom: "6px" }}>
                  <span style={{ color: phase.color, fontSize: FS_11, flexShrink: 0 }}>•</span>
                  <span
                    style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12_5, color: "#aaa", lineHeight: 1.55 }}
                  >
                    {h}
                  </span>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {/* Phase self-check */}
      <div
        style={{
          padding: "20px 24px 24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "12px",
          }}
        >
          End of Phase Self-Check
        </div>
        {phase.selfCheck.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "8px" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_11,
                fontWeight: 700,
                color: phase.color,
                flexShrink: 0,
                width: "20px",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12_5, color: "#aaa", lineHeight: 1.55 }}>
              {c}
            </span>
          </div>
        ))}
        {phase.selfCheckNote && (
          <div
            style={{
              marginTop: "12px",
              padding: "10px 12px",
              background: `${phase.color}0d`,
              border: `1px solid ${phase.color}26`,
              borderRadius: "8px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11_5,
              fontStyle: "italic",
              color: "#c9b8a8",
              lineHeight: 1.55,
            }}
          >
            {phase.selfCheckNote}
          </div>
        )}
      </div>

      {/* Footer phase nav */}
      <div
        style={{
          padding: "20px 24px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {prevPhase
          ? (
            <Link
              to={`/r2r2r/${prevPhase.id}`}
              className="nav-link"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
                ← Previous
              </span>
              <span style={{ color: prevPhase.color, fontWeight: 600 }}>
                Phase {prevPhase.num} · {prevPhase.name}
              </span>
            </Link>
          )
          : (
            <Link
              to="/r2r2r"
              className="nav-link"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
                ←
              </span>
              <span>Plan overview</span>
            </Link>
          )}
        {nextPhase
          ? (
            <Link
              to={`/r2r2r/${nextPhase.id}`}
              className="nav-link"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                textAlign: "right",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
                Next →
              </span>
              <span style={{ color: nextPhase.color, fontWeight: 600 }}>
                Phase {nextPhase.num} · {nextPhase.name}
              </span>
            </Link>
          )
          : (
            <Link
              to="/r2r2r"
              className="nav-link"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                textAlign: "right",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2px", textTransform: "uppercase", color: "#555" }}>
                →
              </span>
              <span>Plan overview</span>
            </Link>
          )}
      </div>
    </div>
  );
}

function SectionLabel({ children, mt }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: FS_10,
        fontWeight: 600,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: "#666",
        marginTop: mt ? "24px" : 0,
        marginBottom: "12px",
      }}
    >
      {children}
    </div>
  );
}
