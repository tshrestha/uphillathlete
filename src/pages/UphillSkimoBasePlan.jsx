import { useState } from "react";

const PHASES = [
  { name: "Foundation", weeks: [1, 2, 3, 4], color: "#3d8b8a", desc: "Aerobic base, vert consistency, movement patterns" },
  { name: "Build", weeks: [5, 6, 7, 8], color: "#c47d2e", desc: "Max strength, hill sprints w/ poles, vert progression" },
  { name: "Specific", weeks: [9, 10, 11, 12], color: "#8b5fbf", desc: "Muscular endurance carries, steady climbs, peak vert" },
];

const WT = {
  rest: { label: "Rest", icon: "○", color: "#555" },
  uphill_easy: { label: "Uphill Run/Hike Z2", icon: "▲", color: "#3d8b8a" },
  easy: { label: "Easy Run", icon: "●", color: "#4a9e6e" },
  easy_strides: { label: "Easy + Strides", icon: "◆", color: "#5bb87a" },
  long_vert: { label: "Long Vert Day", icon: "■", color: "#2d7a4a" },
  pole_stride: { label: "Pole Striding", icon: "⧫", color: "#c47d2e" },
  hill_sprint: { label: "Hill Sprints w/ Poles", icon: "⬆", color: "#e0833a" },
  me_carry: { label: "ME Weighted Carry", icon: "⬥", color: "#8b5fbf" },
  steady_climb: { label: "Steady Climb", icon: "◈", color: "#7b5ea7" },
  strength: { label: "Strength", icon: "⬥", color: "#d4785c" },
  easy_short: { label: "Recovery", icon: "·", color: "#6bbf8a" },
};

const PLAN = [
  { week: 1, phase: "Foundation", hours: 6, vert: "5,500", note: "Establish AeT with drift test on a sustained 2,000 ft climb. All uphill work conversational.",
    days: [
      { day: "Mon", type: "strength", time: 35, desc: "General Strength A — see program" },
      { day: "Tue", type: "uphill_easy", time: 60, vert: 1500, desc: "Mountain run/hike Z2. Use poles on steep sections. Nose-breathing pace." },
      { day: "Wed", type: "easy_strides", time: 35, desc: "Flat/rolling easy run Z2 + 5×20s strides. Leg speed maintenance." },
      { day: "Thu", type: "strength", time: 35, desc: "General Strength B" },
      { day: "Fri", type: "pole_stride", time: 50, vert: 1000, desc: "Pole striding on moderate-to-steep grade (15–25%). Z2. Push through poles, exaggerated stride." },
      { day: "Sat", type: "long_vert", time: 120, vert: 3000, desc: "Long mountain day Z1–2. Stride the ups, run flats/downs. 3,000 ft vert target." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 2, phase: "Foundation", hours: 6.5, vert: "6,000", note: "Add bounding drills. Build vert gradually. Focus on uphill economy.",
    days: [
      { day: "Mon", type: "strength", time: 35, desc: "General Strength A" },
      { day: "Tue", type: "uphill_easy", time: 65, vert: 1600, desc: "Mountain run/hike Z2. Seek sustained climbs >1,000 ft. Poles on steeps." },
      { day: "Wed", type: "easy", time: 35, desc: "Easy flat run Z2. Recover legs." },
      { day: "Thu", type: "strength", time: 35, desc: "General Strength B" },
      { day: "Fri", type: "pole_stride", time: 55, vert: 1100, desc: "Pole striding Z2 + 4×30s bounding drills on steep hill. Full walk-down recovery." },
      { day: "Sat", type: "long_vert", time: 130, vert: 3300, desc: "Long mountain day Z1–2. Practice pacing by HR on the big climb." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 3, phase: "Foundation", hours: 7, vert: "6,800", note: "Peak Foundation vert. Push long day. Monitor HR drift on sustained climb.",
    days: [
      { day: "Mon", type: "strength", time: 35, desc: "General Strength A — progress loads" },
      { day: "Tue", type: "uphill_easy", time: 65, vert: 1700, desc: "Mountain run/hike Z2. Include a 2,000 ft climb if possible." },
      { day: "Wed", type: "easy_strides", time: 40, desc: "Easy run Z2 + 6×20s strides." },
      { day: "Thu", type: "strength", time: 35, desc: "General Strength B" },
      { day: "Fri", type: "pole_stride", time: 55, vert: 1100, desc: "Pole striding Z2 + 5×30s bounding drills. Explosive push through poles." },
      { day: "Sat", type: "long_vert", time: 140, vert: 3800, desc: "Big mountain day Z1–2. Note vert rate at same HR as week 1. Fuel every 45 min." },
      { day: "Sun", type: "rest", desc: "Full rest or easy walk." },
    ],
  },
  { week: 4, phase: "Foundation", hours: 4.5, vert: "3,500", note: "⟳ DELOAD. Reduce volume ~40%. AeT drift test on a 2,000 ft climb. 1 strength session.",
    days: [
      { day: "Mon", type: "strength", time: 25, desc: "General Strength A — deload: same load, 50% sets." },
      { day: "Tue", type: "uphill_easy", time: 50, vert: 1000, desc: "Easy mountain run/hike Z2." },
      { day: "Wed", type: "easy_strides", time: 30, desc: "Easy run Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "uphill_easy", time: 60, vert: 1500, desc: "AeT drift test: sustained Z2 climb. Compare 1st/2nd half avg HR." },
      { day: "Sat", type: "long_vert", time: 70, vert: 1500, desc: "Moderate mountain outing Z1–2. Enjoy feeling fresh." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 5, phase: "Build", hours: 7, vert: "7,000", note: "Transition to heavy compound lifts. Hill sprints with poles. Resume vert build.",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Max Strength A — heavy compounds (see Build program)" },
      { day: "Tue", type: "uphill_easy", time: 65, vert: 1700, desc: "Mountain run/hike Z2 with poles." },
      { day: "Wed", type: "hill_sprint", time: 50, vert: 500, desc: "Warmup 15 min → 6×10s max hill sprints w/ poles on very steep grade (>20%). Full walk-down recovery. Then 4×30s bounds." },
      { day: "Thu", type: "strength", time: 40, desc: "Max Strength B" },
      { day: "Fri", type: "pole_stride", time: 55, vert: 1100, desc: "Pole striding Z2. Sustained rhythm on grade." },
      { day: "Sat", type: "long_vert", time: 140, vert: 3700, desc: "Long mountain day Z1–2. Stride ups, run flats/downs." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 6, phase: "Build", hours: 7.5, vert: "7,800", note: "Extend hill sprints. Push heavier in the gym. Big vert on Saturday.",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Max Strength A" },
      { day: "Tue", type: "uphill_easy", time: 70, vert: 1800, desc: "Mountain run/hike Z2. Varied terrain — steep trail, ridgeline, off-trail." },
      { day: "Wed", type: "hill_sprint", time: 55, vert: 600, desc: "Warmup → 8×10s max hill sprints w/ poles + 5×30s bounds. Full recovery between all efforts." },
      { day: "Thu", type: "strength", time: 40, desc: "Max Strength B" },
      { day: "Fri", type: "easy", time: 35, desc: "Easy flat run Z2. Let legs recover for big Saturday." },
      { day: "Sat", type: "long_vert", time: 150, vert: 4200, desc: "Big mountain day Z1–2. Target a 4,000+ ft route. Poles for all major climbs." },
      { day: "Sun", type: "easy_short", time: 25, desc: "Recovery jog Z1." },
    ],
  },
  { week: 7, phase: "Build", hours: 8, vert: "8,500", note: "Peak Build week. Heaviest strength loads. Biggest vert before deload.",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Max Strength A — aim for peak loads this phase" },
      { day: "Tue", type: "uphill_easy", time: 70, vert: 2000, desc: "Mountain run/hike Z2. Include a sustained 2,000 ft climb." },
      { day: "Wed", type: "hill_sprint", time: 55, vert: 600, desc: "Warmup → 8×10s hill sprints + 6×30s bounds w/ poles. Full recovery." },
      { day: "Thu", type: "strength", time: 40, desc: "Max Strength B" },
      { day: "Fri", type: "pole_stride", time: 55, vert: 1200, desc: "Pole striding on steep terrain Z2." },
      { day: "Sat", type: "long_vert", time: 160, vert: 4700, desc: "Biggest mountain day yet. Z1–2. Link multiple climbs. Fuel well. Practice race-day pacing." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 8, phase: "Build", hours: 4.5, vert: "3,800", note: "⟳ DELOAD. Recover. AeT test on sustained climb. Compare to week 4. 1 strength session.",
    days: [
      { day: "Mon", type: "strength", time: 30, desc: "Max Strength A — deload: same load, 50% volume." },
      { day: "Tue", type: "uphill_easy", time: 50, vert: 1000, desc: "Easy mountain run/hike Z2." },
      { day: "Wed", type: "easy_strides", time: 30, desc: "Easy run Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "uphill_easy", time: 60, vert: 1500, desc: "AeT drift test on 2,000 ft climb. Compare to week 4." },
      { day: "Sat", type: "long_vert", time: 80, vert: 1800, desc: "Moderate mountain outing Z1–2." },
      { day: "Sun", type: "rest", desc: "Full rest." },
    ],
  },
  { week: 9, phase: "Specific", hours: 7.5, vert: "8,500", note: "Sport-specific phase. Introduce ME weighted carries. Maintain gym strength (1×/wk).",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Maintenance Strength — fewer sets at Build loads (see Specific)" },
      { day: "Tue", type: "uphill_easy", time: 65, vert: 1700, desc: "Mountain run/hike Z2 with poles." },
      { day: "Wed", type: "me_carry", time: 70, vert: 1800, desc: "Weighted uphill carry: 5–10% BW in pack (water jugs). Steep grade (>20%). Z3 legs, Z2 lungs. Dump water at top, easy descent. 40–50 min climbing." },
      { day: "Thu", type: "easy", time: 35, desc: "Easy flat recovery Z1–2." },
      { day: "Fri", type: "pole_stride", time: 55, vert: 1200, desc: "Pole striding Z2 + 6×30s bounding drills." },
      { day: "Sat", type: "long_vert", time: 140, vert: 4000, desc: "Long mountain day Z1–2. Include pole striding on all major climbs." },
      { day: "Sun", type: "rest", desc: "Full rest. Allow 2–3 easy days after ME carry." },
    ],
  },
  { week: 10, phase: "Specific", hours: 8, vert: "9,500", note: "Progress ME carry weight. Add steady climb efforts. Approaching peak vert.",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Maintenance Strength" },
      { day: "Tue", type: "steady_climb", time: 70, vert: 2000, desc: "15 min warmup → 30 min steady climb Z3 (no weight, steep sustained grade, poles optional) → 15 min cooldown." },
      { day: "Wed", type: "easy", time: 35, desc: "Easy flat recovery Z2." },
      { day: "Thu", type: "me_carry", time: 75, vert: 2000, desc: "Weighted carry: 10% BW. Steep grade. Z3 legs, Z2 lungs. 45–55 min climbing. Water jugs — dump at top." },
      { day: "Fri", type: "easy_short", time: 25, desc: "Recovery jog Z1." },
      { day: "Sat", type: "long_vert", time: 160, vert: 4500, desc: "Big mountain day Z1–2. Start with a 20 min high Z2/low Z3 push on the first major climb, then settle." },
      { day: "Sun", type: "easy", time: 35, vert: 500, desc: "Easy short hilly run Z2." },
    ],
  },
  { week: 11, phase: "Specific", hours: 8, vert: "10,500", note: "Peak week. Highest vert + heaviest ME carry of the plan. The summit.",
    days: [
      { day: "Mon", type: "strength", time: 40, desc: "Maintenance Strength" },
      { day: "Tue", type: "steady_climb", time: 75, vert: 2200, desc: "15 min warmup → 35 min steady climb Z3 → 15 min cooldown. Poles." },
      { day: "Wed", type: "easy", time: 35, desc: "Easy flat run Z2." },
      { day: "Thu", type: "me_carry", time: 80, vert: 2300, desc: "Weighted carry: 10–15% BW. Steep grade. 50–60 min of climbing. Leg burn is the limiter, not breathing." },
      { day: "Fri", type: "easy_short", time: 25, desc: "Recovery Z1." },
      { day: "Sat", type: "long_vert", time: 170, vert: 5000, desc: "Biggest mountain day. Z1–2. 5,000 ft vert. Link climbs. Fuel and pace like race simulation." },
      { day: "Sun", type: "easy", time: 30, vert: 500, desc: "Easy short hilly Z2." },
    ],
  },
  { week: 12, phase: "Specific", hours: 5, vert: "4,500", note: "⟳ FINAL DELOAD. AeT test. Compare vert rate and HR to week 1. Ready for snow.",
    days: [
      { day: "Mon", type: "strength", time: 25, desc: "Maintenance Strength — deload." },
      { day: "Tue", type: "uphill_easy", time: 55, vert: 1200, desc: "Easy mountain run/hike Z2." },
      { day: "Wed", type: "easy_strides", time: 30, desc: "Easy run Z2 + 4×20s strides." },
      { day: "Thu", type: "rest", desc: "Full rest." },
      { day: "Fri", type: "uphill_easy", time: 60, vert: 1500, desc: "AeT drift test on sustained 2,000 ft climb. Compare vert rate at same HR to week 1." },
      { day: "Sat", type: "long_vert", time: 90, vert: 2500, desc: "Mountain outing Z1–2. Enjoy the base you've built." },
      { day: "Sun", type: "rest", desc: "Full rest. Transition to on-snow." },
    ],
  },
];

const STRENGTH = {
  Foundation: {
    title: "Weeks 1–4: General Strength",
    subtitle: "Build patterns. Prepare tendons/joints for heavy loading ahead.",
    a: { name: "Session A — Lower Body + Core",
      exercises: [
        { name: "Goblet Squat → Front Squat", sets: "3×10", rest: "60s", notes: "Goblet wk1, front squat wk2+. Full depth, controlled." },
        { name: "Romanian Deadlift (DB/BB)", sets: "3×10", rest: "60s", notes: "Hinge pattern. Hamstring/glute emphasis." },
        { name: "Box Step-Up (bench height)", sets: "3×8/side", rest: "60s", notes: "Drive through front heel. Core uphill exercise." },
        { name: "Single-Leg Calf Raise (eccentric)", sets: "3×10/side", rest: "45s", notes: "2-up, 1-down. 3s eccentric. Achilles protection." },
        { name: "Walking Lunge", sets: "2×8/side", rest: "60s", notes: "Controlled. Add DBs by wk3." },
        { name: "Dead Bug", sets: "3×8/side", rest: "45s", notes: "Anti-extension core. Lower back pressed to floor." },
      ],
    },
    b: { name: "Session B — Stability + Upper Body",
      exercises: [
        { name: "Single-Leg Glute Bridge", sets: "3×12/side", rest: "45s", notes: "2s squeeze at top. Hip stability." },
        { name: "Copenhagen Plank (short lever)", sets: "2×25s/side", rest: "45s", notes: "Adductor strength. Progress to full lever." },
        { name: "Push-Up", sets: "3×10–12", rest: "60s", notes: "Full ROM." },
        { name: "Bent-Over Row (DB)", sets: "3×10", rest: "60s", notes: "Upper back. Foundation for pole power." },
        { name: "Pallof Press", sets: "2×10/side", rest: "45s", notes: "Anti-rotation core." },
        { name: "Turkish Get-Up", sets: "2×3/side", rest: "60s", notes: "Light KB/DB. Full-body coordination." },
      ],
    },
  },
  Build: {
    title: "Weeks 5–8: Max Strength",
    subtitle: "Heavy compounds. Low reps, high load, full recovery. Build force production.",
    a: { name: "Session A — Lower Body Power",
      exercises: [
        { name: "Back Squat", sets: "4×5 @75–85% 1RM", rest: "2–3 min", notes: "Primary lift. Progress load weekly. Full depth." },
        { name: "Romanian Deadlift (BB)", sets: "3×6", rest: "90s", notes: "Heavy. Posterior chain for steep climbing." },
        { name: "Weighted Step-Up (high box)", sets: "3×6/side", rest: "90s", notes: "DB or BB. Unilateral power. Mimics skinning stride." },
        { name: "Weighted Calf Raise", sets: "3×8", rest: "60s", notes: "Heavy. Alternate straight/bent knee." },
      ],
    },
    b: { name: "Session B — Single-Leg + Upper",
      exercises: [
        { name: "Bulgarian Split Squat", sets: "3×6/side", rest: "90s", notes: "DB or BB. Single-leg strength for variable terrain." },
        { name: "Single-Leg RDL", sets: "3×8/side", rest: "60s", notes: "Balance + posterior chain. Essential for descents." },
        { name: "Bent-Over Barbell Row", sets: "3×8", rest: "60s", notes: "Upper back. Pole power and pack carry support." },
        { name: "Copenhagen Plank (full lever)", sets: "3×25s/side", rest: "45s", notes: "Adductor durability for lateral ski movements." },
        { name: "Hanging Knee Raise", sets: "3×10", rest: "45s", notes: "Core anti-extension." },
      ],
    },
  },
  Specific: {
    title: "Weeks 9–12: Maintain Strength + Mountain ME",
    subtitle: "1 gym session/week to maintain. ME work moves to the mountain: weighted carries and bounding.",
    a: { name: "Gym Session — Maintain",
      exercises: [
        { name: "Back Squat", sets: "3×4 (peak load)", rest: "2–3 min", notes: "Maintain Build phase loads. Fewer sets to manage total load." },
        { name: "Single-Leg RDL", sets: "3×8/side", rest: "60s", notes: "Maintain. Balance emphasis." },
        { name: "Weighted Calf Raise", sets: "3×10", rest: "45s", notes: "Moderate-heavy. 3s eccentric." },
        { name: "Pallof Press w/ rotation", sets: "2×10/side", rest: "45s", notes: "Core maintenance." },
      ],
    },
    b: { name: "Mountain ME (replaces gym session B)",
      exercises: [
        { name: "Weighted Uphill Carry", sets: "1×/week", rest: "—", notes: "5–15% BW in pack (water jugs). Steep grade >20%. Z3 effort — legs burn, lungs manageable. 40–60 min climbing. Dump water at top. 2–3 easy recovery days after." },
        { name: "Bounding w/ Poles", sets: "Built into pole stride days", rest: "—", notes: "6×30s explosive bounds uphill with poles. Full walk-down recovery. High load on ski muscles." },
        { name: "Why this shift", sets: "—", rest: "—", notes: "Johnston's philosophy: in the Specific phase, sport-specific overload replaces the gym. Weighted carries and bounds are the most direct preparation for skinning — sustained high leg force on steep terrain." },
      ],
    },
  },
};

function getPhase(w) { return PHASES.find(p => p.weeks.includes(w)); }
function getPhaseKey(w) { return w <= 4 ? "Foundation" : w <= 8 ? "Build" : "Specific"; }

export default function UphillPlan() {
  const [week, setWeek] = useState(1);
  const [tab, setTab] = useState("schedule");
  const [openSess, setOpenSess] = useState(null);

  const wd = PLAN[week - 1];
  const ph = getPhase(week);
  const deload = [4, 8, 12].includes(week);
  const sp = STRENGTH[getPhaseKey(week)];
  const vertData = PLAN.map(w => parseInt(w.vert.replace(/,/g, "")));
  const maxV = Math.max(...vertData);

  const renderEx = (ex, i) => (
    <div key={i} style={{ display: "flex", gap: "10px", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, color: "#d4785c", width: "18px", flexShrink: 0, paddingTop: "2px" }}>{String(i+1).padStart(2,"0")}</div>
      <div style={{ flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2px" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: "#e8e4df" }}>{ex.name}</span>
          {ex.sets !== "—" && <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#d4785c", fontWeight: 600, whiteSpace: "nowrap", marginLeft: 8 }}>{ex.sets}</span>}
        </div>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", color: "#888", lineHeight: 1.45 }}>
          {ex.rest !== "—" ? `Rest ${ex.rest}. ` : ""}{ex.notes}
        </div>
      </div>
    </div>
  );

  const renderSess = (s, key) => {
    const open = openSess === key;
    return (
      <div key={key} style={{ marginBottom: "12px" }}>
        <button onClick={() => setOpenSess(open ? null : key)} style={{
          width: "100%", padding: "12px 14px", background: open ? "rgba(212,120,92,0.08)" : "rgba(255,255,255,0.02)",
          border: `1px solid ${open ? "rgba(212,120,92,0.2)" : "rgba(255,255,255,0.06)"}`, borderRadius: "10px",
          color: open ? "#d4785c" : "#aaa", fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600,
          cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center",
        }}><span>{s.name}</span><span style={{ fontSize: "14px", transform: open ? "rotate(180deg)" : "none", transition: "0.2s" }}>▾</span></button>
        {open && <div style={{ padding: "4px 14px 8px", marginTop: "-1px", background: "rgba(212,120,92,0.03)", border: "1px solid rgba(212,120,92,0.1)", borderTop: "none", borderRadius: "0 0 10px 10px" }}>
          {s.exercises.map(renderEx)}
        </div>}
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "'Source Serif 4','Georgia',serif", background: "#0f1114", color: "#e8e4df", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .wb{transition:all .2s ease;cursor:pointer} .wb:hover{transform:scale(1.12)}
        .dr{transition:all .15s ease} .dr:hover{background:rgba(255,255,255,0.03)}
        .tb{transition:all .15s ease;cursor:pointer;border:none;background:none} .tb:hover{color:#e8e4df!important}
        .vb{transition:height .3s ease;border-radius:3px 3px 0 0;cursor:pointer} .vb:hover{opacity:.85}
      `}</style>

      <div style={{ padding: "32px 24px 20px", borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(61,139,138,0.1) 0%, rgba(139,95,191,0.04) 100%)" }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#3d8b8a", marginBottom: "8px" }}>
          12-Week Off-Season · 6–8 hrs/wk
        </div>
        <h1 style={{ fontSize: "25px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px", marginBottom: "6px" }}>
          Uphill Base for Skimo
        </h1>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "#888", lineHeight: 1.5 }}>
          Johnston / Uphill Athlete methodology · 5,500→10,500 ft/wk · ME carries · Pole work
        </p>
      </div>

      <div style={{ padding: "20px 24px 12px" }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#666", marginBottom: "12px" }}>
          Weekly Vertical Gain (ft)
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4px", height: "56px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {vertData.map((v, i) => {
            const p = getPhase(i+1); const sel = i+1 === week;
            return <div key={i} className="vb" onClick={() => setWeek(i+1)} style={{
              flex: 1, height: `${(v/maxV)*100}%`, background: sel ? p.color : `${p.color}55`,
              border: sel ? `2px solid ${p.color}` : "none", position: "relative",
            }}>{sel && <div style={{ position: "absolute", top: "-18px", left: "50%", transform: "translateX(-50%)",
              fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 700, color: p.color, whiteSpace: "nowrap" }}>{v.toLocaleString()}</div>}</div>;
          })}
        </div>
        <div style={{ display: "flex", gap: "4px", marginTop: "4px" }}>
          {vertData.map((_, i) => <div key={i} style={{ flex: 1, textAlign: "center", fontFamily: "'DM Sans',sans-serif", fontSize: "9px", color: i+1===week?"#e8e4df":"#555", fontWeight: i+1===week?700:400 }}>{i+1}</div>)}
        </div>
      </div>

      <div style={{ padding: "8px 24px 12px" }}>
        <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
          {PLAN.map(w => { const p = getPhase(w.week); const sel = w.week===week; const dl = [4,8,12].includes(w.week);
            return <button key={w.week} className="wb" onClick={() => { setWeek(w.week); setOpenSess(null); }} style={{
              width: "40px", height: "36px", border: sel?`2px solid ${p.color}`:"1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px", background: sel?`${p.color}22`:"transparent", color: sel?p.color:"#888",
              fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: sel?700:500, position: "relative",
            }}>{w.week}{dl && <div style={{ position: "absolute", bottom: "2px", left: "50%", transform: "translateX(-50%)", width: "4px", height: "4px", borderRadius: "50%", background: p.color, opacity: .7 }} />}</button>;
          })}
        </div>
      </div>

      <div style={{ padding: "0 24px 12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
          <h2 style={{ fontSize: "22px", fontWeight: 700 }}>Week {wd.week}</h2>
          <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", background: `${ph.color}20`, color: ph.color, border: `1px solid ${ph.color}33` }}>{ph.name}</span>
          {deload && <span style={{ display: "inline-block", padding: "4px 12px", borderRadius: "20px", fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.8px", textTransform: "uppercase", background: "rgba(255,200,60,0.12)", color: "#ddb44a", border: "1px solid rgba(255,200,60,0.2)" }}>Deload</span>}
        </div>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", color: "#999", lineHeight: 1.5, marginBottom: "4px" }}>{wd.note}</p>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#666" }}>
          <span style={{ color: ph.color, fontWeight: 600 }}>~{wd.hours} hrs</span>
          <span style={{ margin: "0 8px", color: "#333" }}>|</span>
          Vert: <span style={{ color: "#8b5fbf", fontWeight: 600 }}>{wd.vert} ft</span>
          <span style={{ margin: "0 8px", color: "#333" }}>|</span>
          Strength: <span style={{ color: "#d4785c", fontWeight: 600 }}>{deload ? "1×" : getPhaseKey(week)==="Specific" ? "1× gym + 1× ME" : "2×"}/wk</span>
        </div>
      </div>

      <div style={{ padding: "0 24px 12px", display: "flex", gap: 0, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {[["schedule","Schedule"],["strength","Strength & ME"],["guide","Reference"]].map(([k,l]) =>
          <button key={k} className="tb" onClick={() => { setTab(k); setOpenSess(null); }} style={{
            padding: "8px 14px", fontFamily: "'DM Sans',sans-serif", fontSize: "12px",
            fontWeight: tab===k?700:500, color: tab===k?"#e8e4df":"#666",
            borderBottom: tab===k?"2px solid #e8e4df":"2px solid transparent", marginBottom: "-1px",
          }}>{l}</button>
        )}
      </div>

      {tab === "schedule" && <div style={{ padding: "12px 24px 20px" }}>
        {wd.days.map((d, i) => { const wt = WT[d.type]; return (
          <div key={i} className="dr" style={{ display: "flex", alignItems: "flex-start", padding: "12px 0", borderBottom: i<6?"1px solid rgba(255,255,255,0.04)":"none", gap: "12px" }}>
            <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 600, color: "#666", width: "32px", flexShrink: 0, paddingTop: "2px", letterSpacing: "0.5px" }}>{d.day}</div>
            <div style={{ fontSize: "14px", color: wt.color, width: "16px", textAlign: "center", flexShrink: 0, paddingTop: "1px" }}>{wt.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: d.type==="rest"?"#666":"#e8e4df", marginBottom: "2px" }}>
                {wt.label}
                {d.time && <span style={{ color: "#777", fontWeight: 400, marginLeft: "8px" }}>{d.time} min{d.vert ? ` · ${d.vert.toLocaleString()} ft` : ""}</span>}
              </div>
              <div style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontSize: "13px", color: "#888", lineHeight: 1.45 }}>{d.desc}</div>
            </div>
          </div>
        );})}
      </div>}

      {tab === "strength" && <div style={{ padding: "16px 24px 20px" }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px", fontWeight: 700, color: "#d4785c", marginBottom: "4px" }}>{sp.title}</div>
        <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", color: "#888", lineHeight: 1.5, marginBottom: "16px" }}>{sp.subtitle}</p>
        {renderSess(sp.a, "a")}
        {renderSess(sp.b, "b")}
        <div style={{ marginTop: "12px", padding: "12px 14px", background: "rgba(139,95,191,0.06)", border: "1px solid rgba(139,95,191,0.12)", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", color: "#b094d0", lineHeight: 1.55 }}>
          <strong>Periodization logic:</strong> General → Max Strength → Maintain + ME mirrors Johnston's 16-week skimo plans. The gym builds raw force that ME carries then convert into sport-specific endurance. You can't have high muscular endurance without first having strength to draw from.
        </div>
      </div>}

      {tab === "guide" && <div style={{ padding: "16px 24px 20px" }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#666", marginBottom: "12px" }}>Skimo-Specific Workouts</div>
        {[
          { title: "Pole Striding", desc: "Simulate skinning motion uphill with trekking/ski poles. Moderate-to-steep grade (15–25%). Exaggerated stride, push hard through poles. Z2 effort. Johnston recommends ≥30% of off-season training in ski-specific simulation for economy transfer.", color: "#c47d2e" },
          { title: "Bounding w/ Poles", desc: "Explosive uphill bounds with poles on steep terrain. 30s efforts with full walk-down recovery (2–3 min). High load on ski-specific leg muscles. Borrowed from Nordic ski training. Power, not economy.", color: "#e0833a" },
          { title: "ME Weighted Carry", desc: "Pack with water jugs (5–15% BW). Steep grade (>20%). Hike up at Z3 effort — legs burn while breathing stays manageable. Dump water at top, easy descent. 40–60 min climbing. 1×/week with 2–3 easy days after. The most sport-specific strength workout for going uphill faster, longer.", color: "#8b5fbf" },
          { title: "Hill Sprints w/ Poles", desc: "8–10s maximal effort uphill with poles on very steep grade (>20%). Full walk-back recovery. HR won't reflect the effort — go by perceived exertion. Raw uphill power development.", color: "#e0833a" },
          { title: "Steady Climb", desc: "Sustained Z3 on a long climb (20–35 min). No weight. Poles optional. Builds lactate shuttling and sustained climbing pace. Between easy Z2 vert and the ME carry.", color: "#7b5ea7" },
          { title: "AeT Drift Test (uphill)", desc: "60 min sustained Z2 on a 2,000+ ft climb. Compare avg HR first 30 min vs second 30 min. <5% drift = strong base. >10% = more Z2 volume needed. Test at weeks 4, 8, 12.", color: "#3d8b8a" },
        ].map((w, i) => (
          <div key={i} style={{ marginBottom: "14px", paddingBottom: "14px", borderBottom: i<5?"1px solid rgba(255,255,255,0.04)":"none" }}>
            <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "4px" }}>
              <div style={{ width: "4px", height: "16px", borderRadius: "2px", background: w.color }} />
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px", fontWeight: 600, color: w.color }}>{w.title}</span>
            </div>
            <div style={{ fontSize: "12.5px", color: "#888", lineHeight: 1.55, paddingLeft: "12px" }}>{w.desc}</div>
          </div>
        ))}

        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#666", margin: "20px 0 12px" }}>Why This Works</div>
        {[
          "Skimo races are won on the uphills. This plan nearly doubles weekly vert over 12 weeks (5,500 → 10,500 ft) within your 6–8 hr/wk window.",
          "With access to 2,000+ ft climbs, AeT tests, ME carries, pole striding, and steady climbs all happen on real sustained mountain terrain — ideal specificity.",
          "Running is the primary off-season modality because it's weight-bearing. Cycling counts as roughly ⅓ its value for ski transfer (per Johnston).",
          "≥30% of training in ski-specific simulation (pole striding, bounding) builds skinning economy alongside aerobic fitness.",
          "ME carries train fatigue resistance: the ability to maintain uphill pace when legs are tired. Johnston considers this the biggest determinant of skimo and ultra performance.",
          "AeT heart rate is the primary metric, not anaerobic threshold. At altitude, your AeT determines your sustainable skinning pace.",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, color: "#3d8b8a", flexShrink: 0 }}>•</span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12px", color: "#888", lineHeight: 1.55 }}>{t}</span>
          </div>
        ))}
      </div>}

      <div style={{ padding: "20px 24px 32px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.01)" }}>
        <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#555", marginBottom: "14px" }}>Core Principles</div>
        {[
          { n: "01", t: "Track weekly vert as your primary volume metric, not flat mileage." },
          { n: "02", t: "Train with poles on steep terrain. ≥30% of training should simulate skinning." },
          { n: "03", t: "Keep 85–90% of training at conversational Z2. On steep climbs, control effort by breathing." },
          { n: "04", t: "ME carries 1×/week in Specific phase. Start 5% BW, progress to 10–15%. Dump water at top." },
          { n: "05", t: "Deload every 4th week. Test AeT on a sustained 2,000 ft climb at weeks 4, 8, 12." },
          { n: "06", t: "After this block, transition to on-snow. Your aerobic base and ME capacity carry directly to skinning." },
        ].map(p => (
          <div key={p.n} style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11px", fontWeight: 700, color: "#3d8b8a", flexShrink: 0, width: "20px" }}>{p.n}</span>
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px", color: "#888", lineHeight: 1.5 }}>{p.t}</span>
          </div>
        ))}
        <div style={{ marginTop: "20px", padding: "12px 14px", background: "rgba(61,139,138,0.06)", border: "1px solid rgba(61,139,138,0.12)", borderRadius: "8px", fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px", color: "#6db8b6", lineHeight: 1.55 }}>
          <strong>Calibrated for you:</strong> Starting at 5,500 ft/wk (your comfortable lower range), peaking at 10,500 ft/wk. Long days hit 3,000–5,000 ft single-outing vert. With 2,000+ ft climbs at your doorstep, every key workout — AeT tests, ME carries, pole striding — happens on real sustained mountain terrain.
        </div>
      </div>
    </div>
  );
}
