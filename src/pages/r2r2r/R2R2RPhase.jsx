import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  formatDayDate,
  formatPhaseDateRange,
  formatWeekRange,
  getCurrentDayIndex,
  getCurrentWeek,
  getPhaseById,
  getPhaseForWeek,
  getPhaseIndex,
  getWeeksForPhase,
  HSR_PROGRAMS,
  isCurrentDay,
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
  const { phaseId: routePhaseId } = useParams();
  const navigate = useNavigate();
  const isScheduleMode = routePhaseId === undefined;

  const currentWeek = getCurrentWeek();
  const currentDayIndex = getCurrentDayIndex();
  const effectivePhaseId = isScheduleMode ? getPhaseForWeek(currentWeek).id : routePhaseId;

  if (!isScheduleMode && !VALID_IDS.includes(routePhaseId)) {
    return <Navigate to="/r2r2r" replace />;
  }

  const phase = getPhaseById(effectivePhaseId);
  const phaseWeeks = getWeeksForPhase(effectivePhaseId);
  const phaseIndex = getPhaseIndex(effectivePhaseId);
  const prevPhase = phaseIndex > 0 ? PHASES[phaseIndex - 1] : null;
  const nextPhase = phaseIndex < PHASES.length - 1 ? PHASES[phaseIndex + 1] : null;

  const initialWeek = isScheduleMode ? currentWeek : phase.weeks[0];
  const [selectedWeek, setSelectedWeek] = useState(initialWeek);
  const [activeTab, setActiveTab] = useState("schedule");
  const [expandedSession, setExpandedSession] = useState(null);

  useEffect(() => {
    setSelectedWeek(isScheduleMode ? currentWeek : phase.weeks[0]);
    setActiveTab("schedule");
    setExpandedSession(null);
    window.scrollTo(0, 0);
  }, [routePhaseId]);

  const weekData = PLAN.find((w) => w.week === selectedWeek);
  const strengthProgram = STRENGTH_PROGRAMS[effectivePhaseId];
  const hsrProgram = HSR_PROGRAMS[effectivePhaseId];
  const volumeData = PLAN.map((w) => w.totalMiles);
  const maxVol = Math.max(...volumeData);

  const handleBarClick = (weekNum) => {
    const targetPhase = getPhaseForWeek(weekNum);
    if (targetPhase.id === effectivePhaseId) {
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
          className="strength-toggle"
          onClick={() => setExpandedSession(isOpen ? null : key)}
          style={{
            width: "100%",
            padding: "13px 15px",
            background: isOpen ? `${phase.color}1a` : "rgba(255,255,255,0.025)",
            border: `1px solid ${isOpen ? `${phase.color}44` : "rgba(255,255,255,0.06)"}`,
            borderRadius: isOpen ? "10px 10px 0 0" : "10px",
            color: isOpen ? phase.color : "#aaa",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_13,
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
          }}
        >
          <span>{session.name}</span>
          <span
            className="chevron"
            style={{
              fontSize: FS_14,
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              opacity: 0.8,
            }}
          >
            ▾
          </span>
        </button>
        {isOpen && (
          <div
            style={{
              padding: "4px 15px 10px",
              marginTop: "-1px",
              background: `${phase.color}0a`,
              border: `1px solid ${phase.color}24`,
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
        html { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-rendering: optimizeLegibility; }
        a { text-decoration: none; color: inherit; }
        ::selection { background: rgba(232,228,223,0.18); color: #fff; }

        .week-btn {
          transition: transform 0.18s ease, background 0.18s ease, border-color 0.18s ease, color 0.18s ease, box-shadow 0.18s ease;
          cursor: pointer;
        }
        .week-btn:hover {
          transform: translateY(-1px);
          background: rgba(255,255,255,0.04);
          border-color: rgba(255,255,255,0.2);
        }
        .week-btn:active { transform: translateY(0); }
        .week-btn:focus-visible { outline: 2px solid rgba(232,228,223,0.4); outline-offset: 2px; }

        .day-row { transition: background 0.18s ease; }
        .day-row:not(.today-row):hover { background: rgba(255,255,255,0.025); }

        .tab-btn {
          transition: color 0.18s ease, background 0.18s ease, border-color 0.18s ease;
          cursor: pointer; border: none; background: none;
        }
        .tab-btn:hover { color: #e8e4df !important; }
        .tab-btn:focus-visible { outline: 2px solid rgba(232,228,223,0.3); outline-offset: 2px; border-radius: 4px; }

        .vol-bar {
          transition: height 0.3s ease, background 0.3s ease, opacity 0.18s ease, transform 0.18s ease;
          border-radius: 4px 4px 0 0;
          cursor: pointer;
        }
        .vol-bar:hover { opacity: 0.92; transform: translateY(-1px); }

        .nav-link { transition: color 0.18s ease, transform 0.18s ease; }
        .nav-link:hover { color: #e8e4df !important; }
        .back-link:hover { transform: translateX(-3px); }
        .phase-nav-prev:hover { transform: translateX(-3px); }
        .phase-nav-next:hover { transform: translateX(3px); }

        .strength-toggle { transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease; }
        .strength-toggle:focus-visible { outline: 2px solid rgba(232,228,223,0.3); outline-offset: 2px; }
        .chevron { display: inline-block; transition: transform 0.24s cubic-bezier(0.4, 0, 0.2, 1); }

        .today-pill { box-shadow: 0 1px 3px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.06); }
      `}
      </style>

      {/* Back link */}
      <div style={{ padding: "18px 24px 0" }}>
        <Link
          to="/r2r2r"
          className="nav-link back-link"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_12,
            fontWeight: 500,
            color: "#888",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            letterSpacing: "0.2px",
          }}
        >
          ← Plan overview
        </Link>
      </div>

      {/* Header */}
      <div
        style={{
          padding: "20px 24px 22px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: `linear-gradient(180deg, ${phase.color}1c 0%, ${phase.color}05 55%, transparent 100%)`,
        }}
      >
        {isScheduleMode && (
          <div
            style={{
              display: "inline-block",
              padding: "5px 12px",
              borderRadius: "999px",
              background: `${phase.color}1f`,
              border: `1px solid ${phase.color}4d`,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_10,
              fontWeight: 700,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: phase.color,
              marginBottom: "14px",
            }}
          >
            {formatPhaseDateRange(phase)}
          </div>
        )}
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 700,
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: phase.color,
            marginBottom: "10px",
          }}
        >
          Phase {phase.num} · Weeks {phase.weeks[0]}–{phase.weeks[phase.weeks.length - 1]}
        </div>
        <h1
          style={{ fontSize: FS_26, fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.6px", marginBottom: "12px" }}
        >
          {phase.name}
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_13, color: "#9a9a9a", lineHeight: 1.6 }}>
          {phase.narrative}
        </p>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_11,
            color: "#666",
            marginTop: "14px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span>
            Focus: <span style={{ color: phase.color, fontWeight: 600 }}>{phase.focus}</span>
          </span>
          <span style={{ color: "#3a3a3a" }}>·</span>
          <span>
            Volume: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{phase.volumeRange}</span>
          </span>
          <span style={{ color: "#3a3a3a" }}>·</span>
          <span>
            Vert: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{phase.vertRange}</span>
          </span>
        </div>
      </div>

      {/* Volume Chart — all 24 weeks */}
      <div style={{ padding: "22px 24px 12px" }}>
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 600,
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#666",
            marginBottom: "14px",
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
            const inCurrentPhase = barPhase.id === effectivePhaseId;
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
                  boxShadow: isSel ? `0 0 0 2px ${barPhase.color}, 0 2px 8px ${barPhase.color}40` : "none",
                  position: "relative",
                }}
              >
                {isSel && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-20px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_11,
                      fontWeight: 700,
                      color: barPhase.color,
                      whiteSpace: "nowrap",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {v}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "3px", marginTop: "6px" }}>
          {volumeData.map((_, i) => {
            const weekNum = i + 1;
            const inCurrent = getPhaseForWeek(weekNum).id === effectivePhaseId;
            return (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_9,
                  color: weekNum === selectedWeek ? "#e8e4df" : inCurrent ? "#8a8a8a" : "#444",
                  fontWeight: weekNum === selectedWeek ? 700 : 400,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {weekNum}
              </div>
            );
          })}
        </div>
      </div>

      {/* Week Selector — only current phase */}
      <div style={{ padding: "10px 24px 14px" }}>
        <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
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
                  width: "46px",
                  height: "42px",
                  border: isSel ? `2px solid ${phase.color}` : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9px",
                  background: isSel ? `${phase.color}24` : "transparent",
                  color: isSel ? phase.color : "#8a8a8a",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: FS_13,
                  fontWeight: isSel ? 700 : 500,
                  position: "relative",
                  boxShadow: isSel ? `0 2px 10px ${phase.color}26` : "none",
                }}
              >
                {w.week}
                {w.deload && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "4px",
                      height: "4px",
                      borderRadius: "50%",
                      background: phase.color,
                      opacity: isSel ? 0.9 : 0.65,
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Week Header */}
      <div style={{ padding: "2px 24px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: FS_22, fontWeight: 700, letterSpacing: "-0.4px", lineHeight: 1.15 }}>
            Week {weekData.week} · {weekData.name}
          </h2>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11,
              fontWeight: 600,
              color: "#8a8a8a",
              letterSpacing: "0.3px",
              padding: "3px 9px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {formatWeekRange(weekData.week)}
          </span>
          {weekData.deload && (
            <span
              style={{
                display: "inline-block",
                padding: "4px 11px",
                borderRadius: "999px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_10,
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                background: "rgba(255,200,60,0.12)",
                color: "#ddb44a",
                border: "1px solid rgba(255,200,60,0.22)",
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
            color: "#9a9a9a",
            lineHeight: 1.55,
            marginBottom: "10px",
          }}
        >
          {weekData.note}
        </p>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: FS_12, color: "#666" }}>
          Running: <span style={{ color: phase.color, fontWeight: 600 }}>{weekData.totalMiles} mi</span>
          {weekData.vert > 0 && (
            <>
              <span style={{ margin: "0 8px", color: "#3a3a3a" }}>·</span>
              Vert: <span style={{ color: "#e8e4df", fontWeight: 600 }}>{weekData.vert.toLocaleString()} ft</span>
            </>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div
        style={{
          padding: "0 24px",
          display: "flex",
          gap: "2px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {[["schedule", "Schedule"], ["strength", "Strength"], ["hsr", "HSR"], ["reference", "Reference"]].map(([key, label]) => (
          <button
            key={key}
            className="tab-btn"
            onClick={() => {
              setActiveTab(key);
              setExpandedSession(null);
            }}
            style={{
              padding: "10px 14px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_12,
              fontWeight: activeTab === key ? 700 : 500,
              color: activeTab === key ? "#e8e4df" : "#666",
              borderBottom: activeTab === key ? "2px solid #e8e4df" : "2px solid transparent",
              marginBottom: "-1px",
              letterSpacing: "0.2px",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Schedule tab */}
      {activeTab === "schedule" && (
        <div style={{ padding: "14px 24px 20px" }}>
          {weekData.days.map((d, i) => {
            const wt = WORKOUT_TYPES[d.type];
            const isToday = isCurrentDay(weekData.week, i);
            return (
              <div
                key={i}
                className={`day-row${isToday ? " today-row" : ""}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  padding: isToday ? "14px 14px" : "13px 0",
                  borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  gap: "12px",
                  ...(isToday && {
                    background:
                      `linear-gradient(90deg, ${phase.color}26 0%, ${phase.color}0d 55%, transparent 100%)`,
                    borderLeft: `3px solid ${phase.color}`,
                    marginLeft: "-15px",
                    marginRight: "-12px",
                    borderRadius: "0 10px 10px 0",
                  }),
                }}
              >
                <div
                  style={{
                    width: "54px",
                    flexShrink: 0,
                    paddingTop: "2px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_11,
                      fontWeight: 700,
                      color: isToday ? phase.color : "#666",
                      letterSpacing: "1.2px",
                      textTransform: "uppercase",
                    }}
                  >
                    {d.day}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: FS_10,
                      fontWeight: isToday ? 600 : 400,
                      color: isToday ? "#e8e4df" : "#555",
                      marginTop: "3px",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {formatDayDate(weekData.week, i)}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: FS_14,
                    color: wt.color,
                    width: "16px",
                    textAlign: "center",
                    flexShrink: 0,
                    paddingTop: "1px",
                    lineHeight: 1,
                  }}
                >
                  {wt.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "4px",
                      flexWrap: "wrap",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: FS_13,
                        fontWeight: 600,
                        color: d.type === "rest" ? "#666" : "#e8e4df",
                        letterSpacing: "0.1px",
                      }}
                    >
                      {wt.label}
                    </span>
                    {isToday && (
                      <span
                        className="today-pill"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: FS_9,
                          fontWeight: 700,
                          letterSpacing: "1.8px",
                          textTransform: "uppercase",
                          padding: "3px 9px",
                          borderRadius: "999px",
                          background: phase.color,
                          color: "#0f1114",
                        }}
                      >
                        Today
                      </span>
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Source Serif 4', Georgia, serif",
                      fontSize: FS_13,
                      color: isToday ? "#d8d4cf" : "#aaa",
                      lineHeight: 1.55,
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
                marginTop: "18px",
                padding: "13px 15px",
                background: `${phase.color}0d`,
                border: `1px solid ${phase.color}26`,
                borderRadius: "10px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                fontStyle: "italic",
                color: "#c9b8a8",
                lineHeight: 1.6,
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
              marginTop: "14px",
              padding: "13px 15px",
              background: `${phase.color}0d`,
              border: `1px solid ${phase.color}26`,
              borderRadius: "10px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11_5,
              color: "#c9b8a8",
              lineHeight: 1.6,
            }}
          >
            <strong>Timing:</strong>{" "}
            Two sessions per week, separated by ≥48 hours. Always preceded by 5–10 min dynamic warm-up and the prehab
            routine. Strength on non-running days, or before easy runs — never before long runs or workouts.
          </div>
        </div>
      )}

      {/* HSR tab */}
      {activeTab === "hsr" && (
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
            {hsrProgram.title}
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
            {hsrProgram.subtitle}
          </p>

          {renderStrengthSession(hsrProgram.sessionA, "hsr-a")}
          {renderStrengthSession(hsrProgram.sessionB, "hsr-b")}

          <div
            style={{
              marginTop: "14px",
              padding: "13px 15px",
              background: `${phase.color}0d`,
              border: `1px solid ${phase.color}26`,
              borderRadius: "10px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11_5,
              color: "#c9b8a8",
              lineHeight: 1.6,
            }}
          >
            <strong>Pain rule:</strong>{" "}
            Up to 3/10 during loading is acceptable; symptoms must settle within 24 hours and not raise morning
            baseline. If they don't, regress one loading step and re-test in 48 hours. The tendon's voice wins —
            every time.
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
                  letterSpacing: "-0.2px",
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

          {effectivePhaseId === "phase-4" && (
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
                    padding: "14px 15px",
                    background: "rgba(255,255,255,0.02)",
                    border: `1px solid ${phase.color}26`,
                    borderRadius: "10px",
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
          padding: "22px 24px 26px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.01)",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: FS_10,
            fontWeight: 600,
            letterSpacing: "2.4px",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "14px",
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
              marginTop: "14px",
              padding: "12px 14px",
              background: `${phase.color}0d`,
              border: `1px solid ${phase.color}26`,
              borderRadius: "10px",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: FS_11_5,
              fontStyle: "italic",
              color: "#c9b8a8",
              lineHeight: 1.6,
            }}
          >
            {phase.selfCheckNote}
          </div>
        )}
      </div>

      {/* Footer phase nav */}
      <div
        style={{
          padding: "22px 24px 36px",
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
              className="nav-link phase-nav-prev"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2.4px", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>
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
              className="nav-link phase-nav-prev"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2.4px", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>
                ←
              </span>
              <span>Plan overview</span>
            </Link>
          )}
        {nextPhase
          ? (
            <Link
              to={`/r2r2r/${nextPhase.id}`}
              className="nav-link phase-nav-next"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                textAlign: "right",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2.4px", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>
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
              className="nav-link phase-nav-next"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: FS_12,
                color: "#888",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                textAlign: "right",
              }}
            >
              <span style={{ fontSize: FS_10, letterSpacing: "2.4px", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>
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
        letterSpacing: "2.4px",
        textTransform: "uppercase",
        color: "#666",
        marginTop: mt ? "26px" : 0,
        marginBottom: "14px",
      }}
    >
      {children}
    </div>
  );
}
