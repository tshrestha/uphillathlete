import { useState } from "react";

const PHASES = [
  { name: "Foundation", weeks: [1, 2, 3, 4], color: "#4a9e6e", desc: "Movement quality, bodyweight strength, easy running" },
  { name: "Build", weeks: [5, 6, 7, 8], color: "#c47d2e", desc: "Heavy compound lifts, hill sprints, extended long run" },
  { name: "Consolidation", weeks: [9, 10, 11, 12], color: "#7b5ea7", desc: "Strength + muscular endurance, steady-state, peak volume" },
];

const WORKOUT_TYPES = {
  rest: { label: "Rest", icon: "○", color: "#555" },
  easy: { label: "Easy Run", icon: "●", color: "#4a9e6e" },
  easy_strides: { label: "Easy + Strides", icon: "◆", color: "#5bb87a" },
  long: { label: "Long Run", icon: "■", color: "#2d7a4a" },
  hills: { label: "Easy + Hill Sprints", icon: "▲", color: "#c47d2e" },
  steady: { label: "Steady State", icon: "◈", color: "#7b5ea7" },
  easy_short: { label: "Recovery Run", icon: "·", color: "#6bbf8a" },
  strength_a: { label: "Strength A", icon: "⬥", color: "#d4785c" },
  strength_b: { label: "Strength B", icon: "⬥", color: "#d4785c" },
};

const PLAN = [
  // WEEK 1
  {
    week: 1, phase: "Foundation", totalMiles: 20, note: "Settle into easy effort. Find your Z2 HR ceiling. Learn strength movement patterns.",
    days: [
      { day: "Mon", type: "strength_a", time: 35, desc: "Strength A — see program below" },
      { day: "Tue", type: "easy", time: 35, miles: 3.5, desc: "Easy Z2. Find a comfortable rhythm." },
      { day: "Wed", type: "easy_strides", time: 35, miles: 3.5, desc: "Easy Z2, then 4×20s strides w/ 90s walk recovery." },
      { day: "Thu", type: "strength_b", time: 35, desc: "Strength B — see program below" },
      { day: "Fri", type: "easy", time: 35, miles: 3.5, desc: "Easy Z2. Stay conversational." },
      { day: "Sat", type: "long", time: 55, miles: 5.5, desc: "Long run Z1–2. No pace pressure." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 2
  {
    week: 2, phase: "Foundation", totalMiles: 22, note: "Small volume bump. Keep all effort easy. Progress strength loads slightly.",
    days: [
      { day: "Mon", type: "strength_a", time: 35, desc: "Strength A" },
      { day: "Tue", type: "easy", time: 40, miles: 4, desc: "Easy Z2." },
      { day: "Wed", type: "easy_strides", time: 38, miles: 3.5, desc: "Easy Z2 + 5×20s strides w/ 90s walk recovery." },
      { day: "Thu", type: "strength_b", time: 35, desc: "Strength B" },
      { day: "Fri", type: "easy", time: 35, miles: 3.5, desc: "Easy Z2." },
      { day: "Sat", type: "long", time: 60, miles: 6, desc: "Long run Z1–2. Practice fueling if >60 min." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 3
  {
    week: 3, phase: "Foundation", totalMiles: 24, note: "Building consistency. Monitor HR drift on long run.",
    days: [
      { day: "Mon", type: "strength_a", time: 35, desc: "Strength A — increase load where form allows" },
      { day: "Tue", type: "easy", time: 42, miles: 4.5, desc: "Easy Z2." },
      { day: "Wed", type: "easy_strides", time: 40, miles: 4, desc: "Easy Z2 + 6×20s strides w/ 90s walk recovery." },
      { day: "Thu", type: "strength_b", time: 35, desc: "Strength B" },
      { day: "Fri", type: "easy", time: 35, miles: 3.5, desc: "Easy Z1–2." },
      { day: "Sat", type: "long", time: 70, miles: 7, desc: "Long run Z1–2. Note pace at same HR as week 1." },
      { day: "Sun", type: "rest", desc: "Full rest or easy 20 min walk." },
    ],
  },
  // WEEK 4 - DELOAD
  {
    week: 4, phase: "Foundation", totalMiles: 16, note: "⟳ DELOAD. Reduce running ~35%, reduce strength to 1 session.",
    days: [
      { day: "Mon", type: "strength_a", time: 25, desc: "Strength A — reduce volume by 40%. Same load, fewer sets." },
      { day: "Tue", type: "easy", time: 30, miles: 3, desc: "Easy Z2. Short and relaxed." },
      { day: "Wed", type: "easy_strides", time: 30, miles: 3, desc: "Easy Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "easy", time: 25, miles: 2.5, desc: "Recovery jog Z1." },
      { day: "Sat", type: "long", time: 45, miles: 4.5, desc: "Long run Z1–2. Run AeT drift test if possible." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 5
  {
    week: 5, phase: "Build", totalMiles: 25, note: "Transition to heavier loads. Introduce hill sprints. Resume volume progression.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A — heavier compound lifts (see Build phase)" },
      { day: "Tue", type: "easy", time: 42, miles: 4.5, desc: "Easy Z2." },
      { day: "Wed", type: "hills", time: 40, miles: 4, desc: "Easy Z2 + 6×10s hill sprints w/ full walk-back recovery." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy_strides", time: 35, miles: 3.5, desc: "Easy Z2 + 5×20s strides." },
      { day: "Sat", type: "long", time: 75, miles: 7, desc: "Long run Z1–2." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 6
  {
    week: 6, phase: "Build", totalMiles: 27, note: "Extend long run. Progressive overload on strength.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A" },
      { day: "Tue", type: "easy", time: 45, miles: 4.5, desc: "Easy Z2." },
      { day: "Wed", type: "hills", time: 42, miles: 4, desc: "Easy Z2 + 8×10s hill sprints w/ full walk-back recovery." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy", time: 38, miles: 4, desc: "Easy Z2." },
      { day: "Sat", type: "long", time: 80, miles: 8, desc: "Long run Z1–2. Fuel if >75 min." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 7
  {
    week: 7, phase: "Build", totalMiles: 30, note: "Peak of Build phase. Long run approaching 90 min.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A — aim for heaviest loads this phase" },
      { day: "Tue", type: "easy", time: 45, miles: 5, desc: "Easy Z2." },
      { day: "Wed", type: "hills", time: 45, miles: 4.5, desc: "Easy Z2 + 8×10s hill sprints w/ full recovery." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy_strides", time: 38, miles: 4, desc: "Easy Z2 + 6×20s strides." },
      { day: "Sat", type: "long", time: 85, miles: 8.5, desc: "Long run Z1–2. Practice even pacing by HR." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 8 - DELOAD
  {
    week: 8, phase: "Build", totalMiles: 20, note: "⟳ DELOAD. Recover and absorb. Run AeT test. 1 strength session only.",
    days: [
      { day: "Mon", type: "strength_a", time: 30, desc: "Strength A — deload: same load, 50% volume." },
      { day: "Tue", type: "easy", time: 30, miles: 3, desc: "Easy Z2." },
      { day: "Wed", type: "easy_strides", time: 30, miles: 3, desc: "Easy Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "easy", time: 30, miles: 3, desc: "Easy Z1–2. OR run AeT drift test." },
      { day: "Sat", type: "long", time: 55, miles: 5.5, desc: "Long run Z1–2. Moderate distance." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  // WEEK 9
  {
    week: 9, phase: "Consolidation", totalMiles: 31, note: "Introduce steady-state run. Shift strength to muscular endurance emphasis.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A — muscular endurance focus (see Consolidation)" },
      { day: "Tue", type: "easy", time: 45, miles: 5, desc: "Easy Z2." },
      { day: "Wed", type: "steady", time: 50, miles: 5.5, desc: "15 min easy warmup → 20 min steady state → 15 min easy cooldown." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy_short", time: 30, miles: 3, desc: "Recovery Z1." },
      { day: "Sat", type: "long", time: 85, miles: 8.5, desc: "Long run Z1–2." },
      { day: "Sun", type: "easy", time: 40, miles: 4, desc: "Easy Z2." },
    ],
  },
  // WEEK 10
  {
    week: 10, phase: "Consolidation", totalMiles: 34, note: "Extend steady state. Approaching peak volume.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A" },
      { day: "Tue", type: "easy", time: 48, miles: 5, desc: "Easy Z2." },
      { day: "Wed", type: "steady", time: 55, miles: 6, desc: "15 min easy → 25 min steady state → 15 min easy." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy_strides", time: 42, miles: 4.5, desc: "Easy Z2 + 6×20s strides." },
      { day: "Sat", type: "long", time: 95, miles: 9.5, desc: "Long run Z1–2. Your longest run yet." },
      { day: "Sun", type: "easy", time: 45, miles: 5, desc: "Easy Z2." },
    ],
  },
  // WEEK 11
  {
    week: 11, phase: "Consolidation", totalMiles: 36, note: "Peak week. Highest volume of the plan.",
    days: [
      { day: "Mon", type: "strength_a", time: 40, desc: "Strength A" },
      { day: "Tue", type: "easy", time: 50, miles: 5.5, desc: "Easy Z2." },
      { day: "Wed", type: "steady", time: 58, miles: 6.5, desc: "15 min easy → 30 min steady state → 13 min easy." },
      { day: "Thu", type: "strength_b", time: 40, desc: "Strength B" },
      { day: "Fri", type: "easy", time: 35, miles: 3.5, desc: "Easy Z1–2." },
      { day: "Sat", type: "long", time: 100, miles: 10, desc: "Long run Z1–2. Stay disciplined on effort." },
      { day: "Sun", type: "easy", time: 45, miles: 5, desc: "Easy Z2." },
    ],
  },
  // WEEK 12 - DELOAD / TEST
  {
    week: 12, phase: "Consolidation", totalMiles: 22, note: "⟳ FINAL DELOAD. Run AeT test — compare to week 1. 1 strength session.",
    days: [
      { day: "Mon", type: "strength_a", time: 25, desc: "Strength A — deload: maintain load, 50% volume." },
      { day: "Tue", type: "easy", time: 35, miles: 3.5, desc: "Easy Z2." },
      { day: "Wed", type: "easy_strides", time: 35, miles: 3.5, desc: "Easy Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "easy", time: 35, miles: 3.5, desc: "AeT drift test: 60 min Z2, compare 1st & 2nd half avg HR." },
      { day: "Sat", type: "long", time: 60, miles: 6, desc: "Long run Z1–2. Celebrate." },
      { day: "Sun", type: "rest", desc: "Full rest. Plan what's next." },
    ],
  },
];

// STRENGTH PROGRAMS BY PHASE
const STRENGTH_PROGRAMS = {
  Foundation: {
    title: "Weeks 1–4: General Strength & Movement Quality",
    subtitle: "Build movement patterns. Bodyweight → light load. Focus on control.",
    sessionA: {
      name: "Session A — Lower Body + Core",
      exercises: [
        { name: "Goblet Squat", sets: "3×10", rest: "60s", notes: "Bodyweight wk1 → add dumbbell wk2+. Full depth, controlled tempo." },
        { name: "Romanian Deadlift (DB)", sets: "3×10", rest: "60s", notes: "Light dumbbells. Hinge at hips, slight knee bend. Feel hamstrings stretch." },
        { name: "Walking Lunge", sets: "2×8/side", rest: "60s", notes: "Bodyweight. Controlled step, knee tracks over toes." },
        { name: "Single-Leg Glute Bridge", sets: "2×12/side", rest: "45s", notes: "Squeeze glute at top. 2s hold." },
        { name: "Calf Raise (2-up, 1-down)", sets: "3×10/side", rest: "45s", notes: "Rise on both feet, lower slowly on one. 3s eccentric." },
        { name: "Dead Bug", sets: "3×8/side", rest: "45s", notes: "Keep lower back pressed to floor. Breathe out on extension." },
      ],
    },
    sessionB: {
      name: "Session B — Hip Stability + Upper Body",
      exercises: [
        { name: "Step-Up (bench height)", sets: "3×8/side", rest: "60s", notes: "Bodyweight → add dumbbells. Drive through front heel." },
        { name: "Side-Lying Clamshell", sets: "2×15/side", rest: "30s", notes: "Add band wk2+. External rotation, don't roll hips back." },
        { name: "Copenhagen Plank (short lever)", sets: "2×20s/side", rest: "45s", notes: "Top leg on bench, bottom knee on floor. Build to longer holds." },
        { name: "Push-Up", sets: "3×8–12", rest: "60s", notes: "Incline if needed. Full range of motion." },
        { name: "Band Pull-Apart", sets: "3×15", rest: "30s", notes: "Squeeze shoulder blades. Postural balance." },
        { name: "Pallof Press", sets: "2×10/side", rest: "45s", notes: "Band or cable. Anti-rotation core stability." },
      ],
    },
  },
  Build: {
    title: "Weeks 5–8: Heavy Compound Strength",
    subtitle: "Increase load to ≥75% 1RM on main lifts. 2–4 exercises, lower reps. Build maximal strength.",
    sessionA: {
      name: "Session A — Lower Body Power",
      exercises: [
        { name: "Back Squat (or Front Squat)", sets: "4×5", rest: "2–3 min", notes: "Heavy. Progress load weekly. Full depth. This is the priority lift." },
        { name: "Romanian Deadlift (Barbell)", sets: "3×6", rest: "90s", notes: "Moderate-heavy. Hamstring/posterior chain emphasis." },
        { name: "Calf Raise (weighted)", sets: "3×8", rest: "60s", notes: "Heavy. Slow eccentric (3s down). Both straight & bent knee across weeks." },
        { name: "Hanging Knee Raise", sets: "3×10", rest: "45s", notes: "Controlled. No swinging. Anti-extension core." },
      ],
    },
    sessionB: {
      name: "Session B — Single-Leg + Stability",
      exercises: [
        { name: "Bulgarian Split Squat", sets: "3×6/side", rest: "90s", notes: "Add dumbbells or barbell. Key single-leg strength builder." },
        { name: "Single-Leg RDL", sets: "3×8/side", rest: "60s", notes: "Dumbbell or kettlebell. Balance + posterior chain." },
        { name: "Copenhagen Plank (full lever)", sets: "3×20–30s/side", rest: "45s", notes: "Top leg on bench, bottom leg straight. Adductor strength." },
        { name: "Inverted Row or DB Row", sets: "3×8", rest: "60s", notes: "Upper back strength. Postural support for running." },
        { name: "Pallof Press w/ rotation", sets: "2×10/side", rest: "45s", notes: "Add a slow rotation component. Anti-rotation progression." },
      ],
    },
  },
  Consolidation: {
    title: "Weeks 9–12: Strength Maintenance + Muscular Endurance",
    subtitle: "Maintain heavy lifts (reduced volume). Add higher-rep muscular endurance work per Johnston.",
    sessionA: {
      name: "Session A — Maintain Strength + ME",
      exercises: [
        { name: "Back Squat", sets: "3×4 (heavy)", rest: "2–3 min", notes: "Maintain peak load from Build phase. Fewer sets to manage fatigue." },
        { name: "Step-Up (weighted, high box)", sets: "3×12/side", rest: "60s", notes: "Moderate weight, higher reps. Muscular endurance. Leg burn is the goal." },
        { name: "Calf Raise (weighted)", sets: "3×12", rest: "45s", notes: "Moderate load. Eccentric emphasis (3s down)." },
        { name: "Plank Walkout", sets: "3×6", rest: "45s", notes: "From standing, walk out to plank, walk back. Full body control." },
      ],
    },
    sessionB: {
      name: "Session B — ME + Stability",
      exercises: [
        { name: "Walking Lunge (weighted)", sets: "3×10/side", rest: "60s", notes: "Moderate dumbbells. Continuous movement. Simulates sustained leg load." },
        { name: "Single-Leg RDL", sets: "3×8/side", rest: "60s", notes: "Maintain load from Build. Balance + hamstring endurance." },
        { name: "Copenhagen Plank", sets: "3×30s/side", rest: "45s", notes: "Full lever. Adductor durability." },
        { name: "Push-Up or DB Press", sets: "3×10", rest: "60s", notes: "Maintain upper body. Postural support." },
        { name: "Dead Bug w/ band", sets: "3×8/side", rest: "45s", notes: "Add resistance band pulling arms overhead. Core stability under load." },
      ],
    },
  },
};

function getPhase(week) {
  return PHASES.find((p) => p.weeks.includes(week));
}

function getPhaseKey(week) {
  if (week <= 4) return "Foundation";
  if (week <= 8) return "Build";
  return "Consolidation";
}

export default function TrainingPlan() {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [activeTab, setActiveTab] = useState("schedule");
  const [expandedSession, setExpandedSession] = useState(null);

  const weekData = PLAN[selectedWeek - 1];
  const phase = getPhase(selectedWeek);
  const isDeload = [4, 8, 12].includes(selectedWeek);
  const strengthProgram = STRENGTH_PROGRAMS[getPhaseKey(selectedWeek)];

  const volumeData = PLAN.map((w) => w.totalMiles);
  const maxVol = Math.max(...volumeData);

  const renderExercise = (ex, i) => (
    <div key={i} style={{
      display: "flex", gap: "10px", padding: "10px 0",
      borderBottom: "1px solid rgba(255,255,255,0.04)",
    }}>
      <div style={{
        fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
        color: "#d4785c", width: "18px", flexShrink: 0, paddingTop: "2px",
      }}>{String(i + 1).padStart(2, "0")}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "#e8e4df" }}>{ex.name}</span>
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#d4785c", fontWeight: 600, whiteSpace: "nowrap", marginLeft: 8 }}>{ex.sets}</span>
        </div>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11.5px", color: "#888", lineHeight: 1.45 }}>
          Rest {ex.rest}. {ex.notes}
        </div>
      </div>
    </div>
  );

  const renderStrengthSession = (session, key) => {
    const isOpen = expandedSession === key;
    return (
      <div key={key} style={{ marginBottom: "12px" }}>
        <button onClick={() => setExpandedSession(isOpen ? null : key)} style={{
          width: "100%", padding: "12px 14px", background: isOpen ? "rgba(212,120,92,0.08)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${isOpen ? "rgba(212,120,92,0.2)" : "rgba(255,255,255,0.06)"}`,
          borderRadius: "10px", color: isOpen ? "#d4785c" : "#aaa",
          fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600,
          cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
          transition: "all 0.15s ease",
        }}>
          <span>{session.name}</span>
          <span style={{ fontSize: "14px", transform: isOpen ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span>
        </button>
        {isOpen && (
          <div style={{ padding: "4px 14px 8px", marginTop: "-1px",
            background: "rgba(212,120,92,0.03)", border: "1px solid rgba(212,120,92,0.1)",
            borderTop: "none", borderRadius: "0 0 10px 10px",
          }}>
            {session.exercises.map(renderExercise)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: "'Source Serif 4', 'Georgia', serif",
      background: "#0f1114", color: "#e8e4df",
      minHeight: "100vh", padding: 0, margin: 0,
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .week-btn { transition: all 0.2s ease; cursor: pointer; }
        .week-btn:hover { transform: scale(1.12); }
        .day-row { transition: all 0.15s ease; }
        .day-row:hover { background: rgba(255,255,255,0.03); }
        .tab-btn { transition: all 0.15s ease; cursor: pointer; border: none; background: none; }
        .tab-btn:hover { color: #e8e4df !important; }
        .vol-bar { transition: height 0.3s ease, background 0.3s ease; border-radius: 3px 3px 0 0; cursor: pointer; }
        .vol-bar:hover { opacity: 0.85; }
      `}</style>

      {/* Header */}
      <div style={{
        padding: "32px 24px 20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(74,158,110,0.08) 0%, transparent 100%)",
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 700,
          letterSpacing: "3px", textTransform: "uppercase", color: "#4a9e6e", marginBottom: "8px",
        }}>12-Week Program</div>
        <h1 style={{ fontSize: "26px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "8px" }}>
          Aerobic Base + Strength
        </h1>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#888", lineHeight: 1.5 }}>
          Running plan: Johnston, Seiler, Lydiard · Strength: Lauersen, Beattie, Blagrove
        </p>
      </div>

      {/* Volume Chart */}
      <div style={{ padding: "20px 24px 12px" }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600,
          letterSpacing: "2px", textTransform: "uppercase", color: "#666", marginBottom: "12px",
        }}>Weekly Running Volume (miles)</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "56px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
          {volumeData.map((v, i) => {
            const p = getPhase(i + 1);
            const isSel = i + 1 === selectedWeek;
            return (
              <div key={i} className="vol-bar" onClick={() => setSelectedWeek(i + 1)}
                style={{
                  flex: 1, height: `${(v / maxVol) * 100}%`,
                  background: isSel ? p.color : `${p.color}55`,
                  border: isSel ? `2px solid ${p.color}` : "none",
                  position: "relative",
                }}>
                {isSel && <div style={{
                  position: "absolute", top: "-18px", left: "50%", transform: "translateX(-50%)",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700,
                  color: p.color, whiteSpace: "nowrap",
                }}>{v}</div>}
              </div>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
          {volumeData.map((_, i) => (
            <div key={i} style={{
              flex: 1, textAlign: "center", fontFamily: "'DM Sans', sans-serif",
              fontSize: "9px", color: i + 1 === selectedWeek ? "#e8e4df" : "#555",
              fontWeight: i + 1 === selectedWeek ? 700 : 400,
            }}>{i + 1}</div>
          ))}
        </div>
      </div>

      {/* Week Selector */}
      <div style={{ padding: "8px 24px 12px" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {PLAN.map((w) => {
            const p = getPhase(w.week);
            const isSel = w.week === selectedWeek;
            const deload = [4, 8, 12].includes(w.week);
            return (
              <button key={w.week} className="week-btn" onClick={() => { setSelectedWeek(w.week); setExpandedSession(null); }}
                style={{
                  width: "40px", height: "36px",
                  border: isSel ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px", background: isSel ? `${p.color}22` : "transparent",
                  color: isSel ? p.color : "#888",
                  fontFamily: "'DM Sans', sans-serif", fontSize: "13px",
                  fontWeight: isSel ? 700 : 500, position: "relative",
                }}>
                {w.week}
                {deload && <div style={{
                  position: "absolute", bottom: "2px", left: "50%", transform: "translateX(-50%)",
                  width: "4px", height: "4px", borderRadius: "50%", background: p.color, opacity: 0.7,
                }} />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Week Header */}
      <div style={{ padding: "0 24px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "-0.3px" }}>Week {weekData.week}</h2>
          <span style={{
            display: "inline-block", padding: "4px 12px", borderRadius: "20px",
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.8px", textTransform: "uppercase",
            background: `${phase.color}20`, color: phase.color, border: `1px solid ${phase.color}33`,
          }}>{phase.name}</span>
          {isDeload && <span style={{
            display: "inline-block", padding: "4px 12px", borderRadius: "20px",
            fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600,
            letterSpacing: "0.8px", textTransform: "uppercase",
            background: "rgba(255,200,60,0.12)", color: "#ddb44a", border: "1px solid rgba(255,200,60,0.2)",
          }}>Deload</span>}
        </div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", lineHeight: 1.5, marginBottom: "4px" }}>
          {weekData.note}
        </p>
        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#666" }}>
          Running: <span style={{ color: phase.color, fontWeight: 600 }}>{weekData.totalMiles} mi</span>
          <span style={{ margin: "0 8px", color: "#333" }}>|</span>
          Strength: <span style={{ color: "#d4785c", fontWeight: 600 }}>{isDeload ? "1×" : "2×"}/week</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: "0 24px 12px", display: "flex", gap: "0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[["schedule", "Schedule"], ["strength", "Strength Program"], ["guide", "Reference"]].map(([key, label]) => (
          <button key={key} className="tab-btn" onClick={() => { setActiveTab(key); setExpandedSession(null); }}
            style={{
              padding: "8px 14px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
              fontWeight: activeTab === key ? 700 : 500,
              color: activeTab === key ? "#e8e4df" : "#666",
              borderBottom: activeTab === key ? "2px solid #e8e4df" : "2px solid transparent",
              marginBottom: "-1px",
            }}>{label}</button>
        ))}
      </div>

      {/* TAB: Schedule */}
      {activeTab === "schedule" && (
        <div style={{ padding: "12px 24px 20px" }}>
          {weekData.days.map((d, i) => {
            const wt = WORKOUT_TYPES[d.type];
            return (
              <div key={i} className="day-row" style={{
                display: "flex", alignItems: "flex-start", padding: "12px 0",
                borderBottom: i < 6 ? "1px solid rgba(255,255,255,0.04)" : "none", gap: "12px",
              }}>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 600,
                  color: "#666", width: "32px", flexShrink: 0, paddingTop: "2px", letterSpacing: "0.5px",
                }}>{d.day}</div>
                <div style={{ fontSize: "14px", color: wt.color, width: "16px", textAlign: "center", flexShrink: 0, paddingTop: "1px" }}>
                  {wt.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600,
                    color: d.type === "rest" ? "#666" : "#e8e4df", marginBottom: "2px",
                  }}>
                    {wt.label}
                    {d.time && <span style={{ color: "#777", fontWeight: 400, marginLeft: "8px" }}>
                      {d.time} min{d.miles ? ` · ${d.miles} mi` : ""}
                    </span>}
                  </div>
                  <div style={{
                    fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "13px",
                    color: "#888", lineHeight: 1.45,
                  }}>{d.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* TAB: Strength Program */}
      {activeTab === "strength" && (
        <div style={{ padding: "16px 24px 20px" }}>
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "15px", fontWeight: 700,
            color: "#d4785c", marginBottom: "4px",
          }}>{strengthProgram.title}</div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#888",
            lineHeight: 1.5, marginBottom: "16px",
          }}>{strengthProgram.subtitle}</p>

          {renderStrengthSession(strengthProgram.sessionA, "a")}
          {renderStrengthSession(strengthProgram.sessionB, "b")}

          <div style={{
            marginTop: "12px", padding: "12px 14px",
            background: "rgba(212,120,92,0.06)", border: "1px solid rgba(212,120,92,0.12)",
            borderRadius: "8px", fontFamily: "'DM Sans', sans-serif",
            fontSize: "11.5px", color: "#c49580", lineHeight: 1.55,
          }}>
            <strong>Timing:</strong> Do strength on non-running days or before easy runs (never before long runs or workouts). Separate running and lifting by ≥6 hours if on the same day.
          </div>
        </div>
      )}

      {/* TAB: Reference Guide */}
      {activeTab === "guide" && (
        <div style={{ padding: "16px 24px 20px" }}>
          {/* Zones */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600,
            letterSpacing: "2px", textTransform: "uppercase", color: "#666", marginBottom: "12px",
          }}>Heart Rate Zones</div>
          {[
            { name: "Zone 1 – Recovery", hr: "< 65% HRmax", feel: "Very easy, could sing", color: "#6bbf8a" },
            { name: "Zone 2 – Aerobic", hr: "65–77% HRmax", feel: "Conversational, nose-breathing", color: "#4a9e6e" },
            { name: "Steady State", hr: "77–83% HRmax", feel: "Easy-medium, comfortably hard", color: "#c47d2e" },
          ].map((z, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px", paddingBottom: "10px",
              borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <div style={{ width: "4px", height: "36px", borderRadius: "2px", background: z.color, flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: z.color, marginBottom: "2px" }}>{z.name}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888" }}>{z.hr} — {z.feel}</div>
              </div>
            </div>
          ))}

          {/* Workout Definitions */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600,
            letterSpacing: "2px", textTransform: "uppercase", color: "#666", margin: "20px 0 12px",
          }}>Workout Definitions</div>
          {[
            { title: "Strides", desc: "20-second accelerations to ~90% effort on flat ground. Smooth, relaxed form. Walk 60–90s between reps. Not sprints." },
            { title: "Hill Sprints", desc: "8–10 second maximal effort up a steep hill (8–12% grade). Walk all the way down for full recovery (2–3 min). Builds raw power and fast-twitch fibers without anaerobic debt." },
            { title: "Steady State", desc: "Continuous running between easy and tempo (~marathon effort). 'Comfortably hard' — short sentences OK. Builds lactate shuttling and fat oxidation." },
            { title: "AeT Drift Test", desc: "Run 60 min at steady Z2. Compare avg HR in first 30 min vs second 30 min. <5% drift = strong base. >10% = room to grow." },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: "12px", paddingBottom: "12px",
              borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, color: "#ccc", marginBottom: "3px" }}>{item.title}</div>
              <div style={{ fontSize: "12.5px", color: "#888", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}

          {/* Science Notes */}
          <div style={{
            fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600,
            letterSpacing: "2px", textTransform: "uppercase", color: "#666", margin: "20px 0 12px",
          }}>The Evidence for Strength</div>
          {[
            { text: "Lauersen et al. (2014, BJSM): Across 26,610 athletes, strength training reduced sports injuries to less than ⅓ (RR 0.315). Stretching showed no benefit." },
            { text: "Lauersen et al. (2018, BJSM): Confirmed dose-dependent effect — a 10% increase in strength training volume reduced injury risk by >4 percentage points. Zero serious adverse events." },
            { text: "Beattie et al. (2017, JSCR): 40 weeks of strength training significantly improved running economy and velocity at VO₂max without causing hypertrophy in competitive runners." },
            { text: "Balsalobre-Fernández et al. (2016, JSCR): Meta-analysis found a large beneficial effect of strength training on running economy when performed 2–3×/week for 8–12 weeks." },
            { text: "Meta-analysis (2024, Sports Med): High-load and combined strength methods produced the greatest running economy improvements, especially at faster speeds." },
            { text: "Running-specific caveat: While general sports evidence for injury prevention is strong, running-specific RCTs show mixed results (Toresdahl 2019, multiple reviews). Supervised, progressive programs appear more effective than self-directed ones." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#d4785c", flexShrink: 0, width: "6px" }}>•</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#888", lineHeight: 1.55 }}>{item.text}</span>
            </div>
          ))}
        </div>
      )}

      {/* Footer Principles */}
      <div style={{
        padding: "20px 24px 32px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.01)",
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "10px", fontWeight: 600,
          letterSpacing: "2px", textTransform: "uppercase", color: "#555", marginBottom: "14px",
        }}>Core Principles</div>
        {[
          { num: "01", text: "Keep 85–90% of running at conversational effort (Z1–2). If you can't talk, slow down." },
          { num: "02", text: "Strength 2×/week on non-long-run days. Progressive overload: add weight before reps." },
          { num: "03", text: "Increase running volume 5–10%/week. Deload every 4th week (both running and strength)." },
          { num: "04", text: "Heavy compound lifts (squat, RDL, split squat) improve economy. Don't fear heavy loads." },
          { num: "05", text: "Single-leg work builds stability. Calf raises protect Achilles. Copenhagen planks protect adductors." },
          { num: "06", text: "Test AeT at weeks 4, 8, 12. After this block, add race-specific intensity while maintaining strength." },
        ].map((p) => (
          <div key={p.num} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 700, color: "#4a9e6e", flexShrink: 0, width: "20px" }}>{p.num}</span>
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#888", lineHeight: 1.5 }}>{p.text}</span>
          </div>
        ))}

        <div style={{
          marginTop: "20px", padding: "12px 14px",
          background: "rgba(74,158,110,0.06)", border: "1px solid rgba(74,158,110,0.12)",
          borderRadius: "8px", fontFamily: "'DM Sans', sans-serif",
          fontSize: "11.5px", color: "#7ab894", lineHeight: 1.55,
        }}>
          <strong>Scale to you:</strong> This plan starts at ~20 mi/week and peaks at ~36. Scale all distances proportionally. For strength, start with bodyweight if new to lifting — the movement patterns matter more than the load in weeks 1–4.
        </div>
      </div>
    </div>
  );
}
