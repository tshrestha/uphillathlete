export const PHASES = [
  {
    id: "phase-1",
    num: 1,
    name: "Reintroduction",
    weeks: [1, 2, 3, 4, 5, 6],
    color: "#c97b4c",
    focus: "Tendon · Aerobic",
    volumeRange: "15 → 25 mi",
    vertRange: "1,500 → 3,000 ft",
    narrative:
      "The goal is not to build fitness. The goal is to rebuild the infrastructure that lets you build fitness. Most of the work is tendon loading and movement quality. Running is all Z2, kept short. By week 6 you should be running 4×/week comfortably with no tendon flare.",
    selfCheck: [
      "Right ankle: morning pain at baseline, no symptoms during running",
      "Single-leg heel raise: pain-free, can do 15+ reps",
      "Energy: training feels sustainable, not survival mode",
      "Sleep: not disrupted",
    ],
    selfCheckNote:
      "If any 'no' → repeat Week 6 before moving to Phase 2. The cost of an extra week is small. The cost of pushing into Phase 2 with a still-irritable tendon is your race.",
  },
  {
    id: "phase-2",
    num: 2,
    name: "Base",
    weeks: [7, 8, 9, 10, 11, 12],
    color: "#b8782b",
    focus: "Aerobic · Strength",
    volumeRange: "20 → 34 mi",
    vertRange: "1,500 → 3,600 ft",
    narrative:
      "Aerobic volume increases meaningfully. Two key sessions per week emerge: a long Z2 run on the weekend, and a mid-week Z2 run with introductory hill repeats or downhill cruising. Strength work shifts to heavy compound lifts. Revised after illness in weeks 7–8: week 9 is an easy re-entry, then rebuild so the end-of-base test still lands in week 12.",
    selfCheck: [
      "AeT drift test (Tuesday 60-min flat Z2 run): drift <5%? Aerobic base is responding.",
      "Tendon: still quiet?",
      "Long run recovery: feeling normal within 2 days?",
      "Strength: hit your projected loads in Strength sessions?",
    ],
  },
  {
    id: "phase-3",
    num: 3,
    name: "ME + Plyo Block 1",
    weeks: [13, 14, 15, 16, 17, 18, 19, 20],
    color: "#a8431f",
    focus: "ME · Plyo · Descent",
    volumeRange: "30 → 50 mi",
    vertRange: "3,000 → 8,000 ft",
    narrative:
      "R2R2R is off (North Rim closure) — this block opens the year-round cycle: a structured plyometric ladder (L2 → L4), heavy lifting in every gym session, tendon work permanent. Revised Aug 2026 after evidence review: gym ME circuits and weighted carries removed; Thursday quality rotates three CTS-structure uphill interval sessions — SteadyState (RPE 7, 2×20–25 min sub-LT) → Tempo (RPE 8–9, 3×10 min at LT) → VO2 (RPE 10, 5×3 min). The gym builds what running can't: max strength, elasticity, tendon capacity.",
    selfCheck: [
      "Tendon: at baseline the morning after every plyo session?",
      "Plyo ladder: earned L3 by ~Sep 7 and L4 by ~Sep 21, with crisp landings?",
      "Easy runs: HR capped at 145 (raised after the Aug 18 drift test), cadence 175+?",
      "Recovery between long days: feasible?",
    ],
  },
  {
    id: "phase-4",
    num: 4,
    name: "Max Strength Block",
    weeks: [21, 22, 23, 24, 25, 26, 27],
    color: "#5d6b4f",
    focus: "Force Ceiling · Base",
    volumeRange: "30 → 50 mi",
    vertRange: "3,000 → 6,200 ft",
    narrative:
      "Transition deload, then the first real 1RM push since the injury: squat and trap-bar build 80% → 90% over six weeks (deload in week 4). Plyos hold at primer dose — the ladder level is banked, not lost. Run volume HOLDS at 50 mpw — the interference cost of concurrent training lands on strength gains, not running (Wilson 2012), and running is the priority. Expect the bar to move a little slower; that's the accepted trade.",
    selfCheck: [
      "Bar speed: crisp at every prescribed load, no grinding reps?",
      "Tendon: quiet under heavy loading (HSR never deloads)?",
      "Easy runs staying genuinely easy (HR ≤140)?",
      "Week 27: re-estimated 1RM logged for the next cycle?",
    ],
  },
  {
    id: "phase-5",
    num: 5,
    name: "ME + Plyo Block 2",
    weeks: [28, 29, 30, 31, 32, 33, 34, 35],
    color: "#3d8b8a",
    focus: "ME · Plyo L5 · 50k Base",
    volumeRange: "30 → 50 mi",
    vertRange: "3,200 → 8,000 ft",
    narrative:
      "Convert the new strength into fatigue resistance and elastic descent capacity. The plyo ladder resumes at the banked level and works toward L5: downhill strides on real terrain. Holiday deload built in (Dec 21–27). This block ends Jan 10 — reassess, pick the 50k (target: ~10,000 ft gain), and anchor the next cycle to it. Winter rule: protect the vertical — treadmill weeks silently zero it out.",
    selfCheck: [
      "Tendon: still quiet through winter volume?",
      "Plyo ladder: at L4–L5 with downhill strides tolerated?",
      "Session B single-leg lifts: loads still progressing at 2 reps in reserve (RPE 8)?",
      "Next cycle: 50k race picked and calendar anchored?",
    ],
    selfCheckNote:
      "When the race is chosen: schedule so an ME block ends 10 days out, run the taper-week session once, then race. That's the whole conversion back to a race plan.",
  },
];

export const WORKOUT_TYPES = {
  rest: { label: "Rest", icon: "○", color: "#6b5840" },
  strength: { label: "Strength", icon: "⬥", color: "#c97b4c" },
  easy: { label: "Easy Run", icon: "●", color: "#5d6b4f" },
  long: { label: "Long Z2", icon: "■", color: "#7a3214" },
  hills: { label: "Hill Repeats", icon: "▲", color: "#b8782b" },
  me_carry: { label: "ME Carry", icon: "⬢", color: "#8b5fbf" },
  climb: { label: "SteadyState", icon: "⛰", color: "#4f7fbf" },
  b2b: { label: "B2B Long", icon: "◑", color: "#3d8b8a" },
  recovery: { label: "Recovery", icon: "·", color: "#8a7860" },
  race_taper: { label: "Race Taper", icon: "◆", color: "#a8431f" },
  race: { label: "Race Day", icon: "★", color: "#a8431f" },
  travel: { label: "Travel / Shakeout", icon: "→", color: "#6b5840" },
};

export const PLAN = [
  // ─── PHASE 1 — REINTRODUCTION ───
  {
    week: 1,
    phaseId: "phase-1",
    name: "Establish Baseline",
    totalMiles: 15,
    vert: 800,
    note: "Settle into the protocol. Find your Z2 ceiling. Learn the strength patterns.",
    callout: "End-of-week check: Did the tendon stay quiet? Morning pain at baseline? If yes → proceed to Week 2.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (45 min). Tendon HSR session 1." },
      { day: "Tue", type: "easy", desc: "Run 3 mi Z2 + 10-min mobility." },
      { day: "Wed", type: "strength", desc: "Strength B (45 min). Tendon HSR session 2." },
      { day: "Thu", type: "easy", desc: "Run 3 mi Z2 + 10-min mobility." },
      { day: "Fri", type: "rest", desc: "Rest or 20-min easy walk + foot/ankle prehab." },
      { day: "Sat", type: "long", desc: "Long Z2: 5 mi rolling terrain, comfortable. Tendon HSR session 3." },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2 — or cross-train (bike/swim) 45 min if tendon talking." },
    ],
  },
  {
    week: 2,
    phaseId: "phase-1",
    name: "Confirm Capacity",
    totalMiles: 17,
    vert: 900,
    note: "Small bump in volume. Add 1 set or 5% HSR load if Week 1 felt good.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR 1. Add 1 set or 5% load if Week 1 felt good." },
      { day: "Tue", type: "easy", desc: "Run 4 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR 2." },
      { day: "Thu", type: "easy", desc: "Run 4 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest or 30-min walk." },
      { day: "Sat", type: "long", desc: "Long Z2: 5 mi rolling. HSR 3 in evening (or AM if not running)." },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2." },
    ],
  },
  {
    week: 3,
    phaseId: "phase-1",
    name: "First Build Peak",
    totalMiles: 20,
    vert: 1200,
    note: "Strides arrive on Wednesday. First small vertical day Saturday.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR 1 (progress to 10RM if comfortable)." },
      { day: "Tue", type: "easy", desc: "Run 4 mi Z2." },
      {
        day: "Wed",
        type: "strength",
        desc: "Strength B + HSR 2 + add 8 × strides at end (4 × 20 sec on flat, easy effort, focus on form).",
      },
      { day: "Thu", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest or walk + mobility." },
      { day: "Sat", type: "long", desc: "Long Z2: 7 mi, can include up to 800 ft vert (TP optional for downhills)." },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2." },
    ],
  },
  {
    week: 4,
    phaseId: "phase-1",
    name: "Recovery",
    totalMiles: 13,
    vert: 500,
    note:
      "⟳ RECOVERY week. Reduce running ~35%. Strength loads light (70%); HSR keeps loading — the tendon isn't the joint deload.",
    deload: true,
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (light, 70% load) + HSR (keep loading)." },
      { day: "Tue", type: "easy", desc: "Run 3 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (light) + HSR." },
      { day: "Thu", type: "rest", desc: "Rest." },
      { day: "Fri", type: "easy", desc: "Run 4 mi Z2." },
      { day: "Sat", type: "long", desc: "Long Z2: 5 mi." },
      { day: "Sun", type: "rest", desc: "Rest or 30-min easy walk." },
    ],
  },
  {
    week: 5,
    phaseId: "phase-1",
    name: "Second Build",
    totalMiles: 22,
    vert: 1800,
    note: "Resume building. First sustained vert on Saturday.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR (progress to 8RM if comfortable)." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR + 6 × strides." },
      { day: "Thu", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 8 mi, 1,500 ft vert. Walk steep ups. Practice running easy downhills.",
      },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2." },
    ],
  },
  {
    week: 6,
    phaseId: "phase-1",
    name: "End of Reintroduction",
    totalMiles: 25,
    vert: 2200,
    note: "Test week. The longer descent is the gate to Phase 2.",
    callout:
      "End of Phase 1 self-check: tendon quiet, single-leg heel raise 15+ reps pain-free, energy sustainable, sleep undisturbed.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR + 6 × strides." },
      { day: "Thu", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 10 mi, 2,000 ft vert. This is your test: did the longer descent stay quiet?",
      },
      { day: "Sun", type: "easy", desc: "Run 5 mi Z2." },
    ],
  },
  // ─── PHASE 2 — BASE ───
  {
    week: 7,
    phaseId: "phase-2",
    name: "Open Base · Sick",
    totalMiles: 28,
    vert: 2200,
    note:
      "Strength shifts to Max-Strength block. First structured intensity (hill repeats) since the injury — keep honest, not max.",
    callout: "⚠ Actual: sick this week — ran 11.6 mi of the planned 28. Plan revised from Week 9 onward.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (now Max-Strength block) + HSR maintenance." },
      { day: "Tue", type: "easy", desc: "Run 6 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR + 8 × strides." },
      {
        day: "Thu",
        type: "hills",
        desc:
          "Hill workout intro: 5 mi total. Warm up 20 min, then 4 × 90 sec uphill at Z3, jog or walk down. Cool down.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 11 mi, 2,000 ft vert." },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2 (recovery shake-out)." },
    ],
  },
  {
    week: 8,
    phaseId: "phase-2",
    name: "Build · Sick",
    totalMiles: 31,
    vert: 2700,
    note: "Hill reps lengthen slightly. Long run extends.",
    callout:
      "⚠ Actual: still sick — ran 7.4 mi of the planned 31, but finished with a 50 mi / 2,800 ft bike on Sunday. The aerobic engine is fine; the impact tissues lost two weeks.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 6 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR + strides." },
      { day: "Thu", type: "hills", desc: "Hills: 6 mi total, 5 × 90 sec uphill Z3." },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 13 mi, 2,500 ft vert." },
      { day: "Sun", type: "easy", desc: "Run 5 mi Z2." },
    ],
  },
  {
    week: 9,
    phaseId: "phase-2",
    name: "Re-Entry",
    totalMiles: 20,
    vert: 1500,
    note:
      "Revised after illness. All Z2, no hill workout, strength at ~80% loads. The 50-mi bike says the engine is fine — this week is for the tendon and impact tissues, which lost two weeks.",
    callout:
      "End-of-week check: tendon at baseline, energy back to normal, sleep undisturbed? If yes → rebuild in Week 10. If not → repeat this week. The race is 16 weeks out; there is room.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (~80% loads — first week back) + HSR." },
      {
        day: "Tue",
        type: "easy",
        desc:
          "Run 4 mi Z2 — full sentences, nose-breathable. Smooth soft surfaces; cadence ~5% above default to spare the tendon.",
      },
      { day: "Wed", type: "strength", desc: "Strength B (~80%) + HSR." },
      { day: "Thu", type: "easy", desc: "Run 5 mi Z2. No hills this week." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Long Z2: 8 mi, 1,200 ft. Comfortable; walk grades over ~8%. Restart gut training: 60 g carbs + 500 mL fluid per hour.",
      },
      { day: "Sun", type: "easy", desc: "Run 3 mi Z2 — or bike 90 min Z2 if legs feel beat." },
    ],
  },
  {
    week: 10,
    phaseId: "phase-2",
    name: "Rebuild",
    totalMiles: 26,
    vert: 2200,
    note: "Hills return, short and honest. Strength back to full loads if Week 9 stayed quiet.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR (full loads if Week 9 stayed quiet)." },
      { day: "Tue", type: "easy", desc: "Run 6 mi Z2." },
      {
        day: "Wed",
        type: "strength",
        desc:
          "Strength B + HSR + 8 × strides: 15–20 sec at ~5K effort — fast but relaxed, never a sprint — on a gentle 4–6% uphill. Walk/jog 1–2 min between; start each one fully recovered.",
      },
      {
        day: "Thu",
        type: "hills",
        desc:
          "Hills return: 5 mi total. Warm up 15–20 min easy Z1–Z2. 4 × 90 sec uphill Z3 (RPE 7–8, 3–4 words per breath) on a smooth 4–8% grade. Recovery = easy jog/walk back down, ~2–3 min. Cool down 10 min Z1.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 11 mi, 2,000 ft vert. Hike grades over 8%. Fuel: 60 g carbs + 500–750 mL fluid per hour.",
      },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2 (recovery shake-out)." },
    ],
  },
  {
    week: 11,
    phaseId: "phase-2",
    name: "Build · Poles Intro",
    totalMiles: 31,
    vert: 3000,
    note: "First sustained climb with trekking poles. Fueling practice on the long run starts now.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 6 mi Z2." },
      {
        day: "Wed",
        type: "strength",
        desc:
          "Strength B + HSR + 8 × strides (15–20 sec, ~5K effort, relaxed; walk/jog 1–2 min full recovery between).",
      },
      {
        day: "Thu",
        type: "hills",
        desc:
          "Hills: 6 mi. Warm up 15–20 min easy. 5 × 2 min uphill Z3 on a 4–8% grade; recovery = easy jog down, ~2–3 min — if that feels too short, you're going too hard. Cool down 10–15 min Z1.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Long Z2: 13 mi, 2,800 ft vert. First sustained trekking-pole climb: plant every other step, push through the arms. Hike grades over 8%. Fueling starts for real: 60–80 g carbs, 500–750 mL fluid, 500–1,000 mg sodium per hour.",
      },
      { day: "Sun", type: "easy", desc: "Run 6 mi Z2." },
    ],
  },
  {
    week: 12,
    phaseId: "phase-2",
    name: "Top of Base",
    totalMiles: 34,
    vert: 3600,
    note: "End-of-base test at revised targets. AeT drift, tendon, recovery, strength loads.",
    callout:
      "End of Phase 2 self-check: AeT drift <5%, tendon quiet, long run recovery within 2 days, hit projected strength loads.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      {
        day: "Wed",
        type: "strength",
        desc: "Strength B + 8 × strides (15–20 sec, ~5K effort, relaxed; full recovery between).",
      },
      {
        day: "Thu",
        type: "hills",
        desc:
          "Hills: 6 mi. Warm up 20 min easy. 5 × 3 min uphill Z3 — settle in, don't peg the first rep. Easy jog down between. Cool down 10–15 min.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Long Z2: 15 mi, 3,400 ft vert. TP for ups. 1–2 mi of controlled downhill cruising on ~8–10% grade: short quick strides, cadence up ~10 spm, land under your hips, lean from the ankles — flow, don't brake. Fuel 60–80 g carbs/hr.",
      },
      { day: "Sun", type: "easy", desc: "Run 6 mi Z2." },
    ],
  },
  // ─── PHASE 3 — SPECIFIC BUILD ───
  {
    week: 13,
    phaseId: "phase-3",
    name: "First ME · First B2B",
    totalMiles: 38,
    vert: 4500,
    note:
      "Strength shifts to ME block. First weighted ME carry. First Sunday B2B on tired legs. Slightly trimmed from the original 40 mi to keep the post-illness ramp under ~15%/week.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength shifts to ME block + HSR maintenance." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (ME) + 8 × strides (15–20 sec, relaxed; full recovery)." },
      {
        day: "Thu",
        type: "me_carry",
        desc:
          "ME session 1: 7 mi total. Warm up 15 min easy. 4 × 8 min uphill with 15 lb (~10% bodyweight) of water in the pack, on the steepest smooth hill available (15%+ grade ideal). Cue: low-level leg burn the whole rep, breathing conversational — ignore HR. Recover 2–3 min easy walking. Dump the water at the top; descend light and easy.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 15 mi, 3,500 ft. TP for ups. Hike grades over 8%. Fuel 60–80 g carbs/hr.",
      },
      {
        day: "Sun",
        type: "b2b",
        desc:
          "B2B: 6 mi Z2 on tired legs, 1,000 ft. First B2B — the goal is time on feet on pre-fatigued legs, not pace. Honest Z2 cap; walk anything steep.",
      },
    ],
  },
  {
    week: 14,
    phaseId: "phase-3",
    name: "ME Build",
    totalMiles: 44,
    vert: 6000,
    note: "Extend ME carry. Add a 3-mile sustained descent at controlled pace on the long run.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (ME) + HSR." },
      { day: "Tue", type: "easy", desc: "Run 8 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (ME) + strides." },
      {
        day: "Thu",
        type: "me_carry",
        desc:
          "ME session 2: 8 mi. 5 × 8 min uphill with 15 lb of water — steady leg burn, easy breathing. 2–3 min walk recoveries; dump the water at the top, jog down light.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Long Z2: 18 mi, 4,500 ft. Include 3 mi of sustained controlled downhill (~8–12% grade): short strides, quick cadence, no braking; poles in front with a light touch. Fuel 60–80 g carbs/hr.",
      },
      { day: "Sun", type: "b2b", desc: "B2B: 7 mi Z2 / 1,500 ft." },
    ],
  },
  {
    week: 15,
    phaseId: "phase-3",
    name: "ME Block Opens · Plyo L2",
    totalMiles: 45,
    vert: 7000,
    note:
      "Race is off — training isn't. Gym is heavy-only now (no fatigue circuits); Thursday quality rotates uphill intervals: SteadyState → Tempo → VO2. Plyo ladder at L2. Volume policy: resume at 45, build ≤10% per build week to 50 mpw (wk 18), then hold; deloads ~30. Wednesdays add an easy 6-mi AM run — lift PM, ≥6 h later.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L2", "~65 min"],
        steps: [
          {
            name: "Warm-up 8 min + activation primers",
            subs: ["Lateral band walk 2×12 each way — 30s rests", "Foot doming 1×10 — 5s holds"],
          },
          {
            name: "Plyometrics — L2",
            subs: ["SL pogos 3×10/leg — 2-min rests", "Box jump w/ step-down 4×5 — 90s rests", "Lateral bound to stick 3×5/side — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "Order: plyos fresh, heavy bilateral, heavy single-leg, tendon last. Nothing to failure.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"], notes: "Cadence 175+." },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          {
            name: "Warm-up + plyo primer",
            subs: ["Pogo hops 2×15 — 60s rests", "A-skip 2×30 m — walk back"],
          },
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        stats: ["2 × 20 min", "RPE 7 · sub-LT", "4–8% grade"],
        notes:
          "SteadyState uphill intervals: above endurance pace, below threshold. Warm up 15–20 min; 4–5 min jog-down recovery between reps. Harder than a Z2 climb — but RPE 7, not 8. Don't let the grade drag it to threshold.",
      },
      { day: "Fri", type: "rest", notes: "Full rest. Keep the 5-min tendon micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["16 mi", "4,500 ft", "RPE 5–6"],
        notes: "TP for ups; hike grades over 8%. Fuel 60–80 g carbs/hr.",
      },
      { day: "Sun", type: "b2b", stats: ["7 mi", "1,500 ft", "RPE 5–6"], notes: "Time on feet on tired legs — honest Z2." },
    ],
  },
  {
    week: 16,
    phaseId: "phase-3",
    name: "Recovery",
    totalMiles: 30,
    vert: 3000,
    note:
      "⟳ RECOVERY week — gym and runs deload together. Plyos drop to L2-light; tendon HSR keeps full load (the tendon is never the deload).",
    deload: true,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Light",
        stats: ["Deload", "Plyo L2 light"],
        steps: [
          "Warm-up + primers",
          {
            name: "Plyometrics — L2 reduced",
            subs: ["SL pogos 2×10/leg — 2-min rests", "Box jump 3×5 — 90s rests"],
          },
          "Back squat 3×5 @ 70% — 3 min",
          "Split squat 2×6/leg — 2 min",
          "Tendon at full load: weighted SL heel raise 4×6/leg (2 min)",
        ],
      },
      { day: "Tue", type: "easy", stats: ["6 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Light",
        stats: ["Deload"],
        steps: [
          "Warm-up + plyo primer",
          "Anchor lift 3×5, easy — 3 min",
          "SL RDL 2×6/leg, moderate — 2-min rests",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      { day: "Thu", type: "easy", stats: ["6 mi", "RPE 5–6"], notes: "No carry this week." },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["12 mi", "2,500 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["6 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 17,
    phaseId: "phase-3",
    name: "Build · Drift Test",
    totalMiles: 48,
    vert: 7500,
    note: "Second full week at plyo L2 — earn L3 with quiet mornings and crisp landings. Thursday rotation lands on uphill tempo.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L2", "~65 min"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L2",
            subs: ["SL pogos 3×10/leg — 2-min rests", "Box jump w/ step-down 4×5 — 90s rests", "Lateral bound to stick 3×5/side — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Romanian deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "Second week at L2 — earn L3 with quiet mornings and crisp landings.",
      },
      {
        day: "Tue",
        type: "easy",
        title: "AeT Drift Test",
        stats: ["60 min", "HR 148–150", "flat"],
        steps: [
          "Warm up 10 min easy",
          "60 min continuous at HR 148–150 — constant effort, no stops, flat course",
          "Cool down 5–10 min easy",
        ],
        notes:
          "The probe test: Aug 18 proved AeT ≥145 (drift +3.1%). Pa:HR <5% here confirms AeT ≥150 and the easy cap rises again; >5% and 145 stands. Same loop conditions as the Aug 18 run if possible.",
      },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          {
            name: "Warm-up + plyo primer",
            subs: ["Pogo hops 2×15 — 60s rests", "A-skip 2×30 m — walk back"],
          },
          "Weighted step-up 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill Tempo",
        stats: ["3 × 10 min", "LT · RPE 8–9", "6–10% grade"],
        notes: "Lactate threshold. Warm up 15–20 min easy; 2:1 work:rest — ~5-min jog-down recoveries. Short answers, hard breathing. Cool down 10 min.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["16 mi", "4,500 ft", "3 mi descent", "RPE 5–6"],
        notes: "Sustained controlled downhill at ~8–12%: short quick strides, no braking. Fuel 60–80 g carbs/hr.",
      },
      { day: "Sun", type: "b2b", stats: ["10 mi", "1,800 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 18,
    phaseId: "phase-3",
    name: "Plyo L3 · Depth Intro",
    totalMiles: 50,
    vert: 8000,
    note: "Ladder advances to L3: depth drops from 30 cm — the gym rehearsal for descent impact. Watch the 24-h tendon response closely this week.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L3", "~65 min"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L3",
            subs: ["SL pogos 3×12/leg — 2-min rests", "Depth drop to stick, 30 cm 4×5 — 2-min rests", "Lateral bounds 3×6/side — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "First depth-drop week — watch the 24-h tendon response closely.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill VO2",
        stats: ["5 × 3 min", "VO2 · RPE 10", "10–15% grade"],
        notes: "VO2max. Warm up 20 min; 1:1 work:rest — 3-min recoveries. 2–4 min reps are the VO2 sweet spot (Seiler & Sjursen 2004; Barnes 2013). Pace to finish rep 5, not to win rep 1.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["18 mi", "5,000 ft", "RPE 5–6"], notes: "TP for ups. Fuel 60–80 g carbs/hr." },
      { day: "Sun", type: "b2b", stats: ["9 mi", "1,700 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 19,
    phaseId: "phase-3",
    name: "Descent Focus",
    totalMiles: 50,
    vert: 8000,
    note: "Second week at L3. Saturday carries the block's biggest sustained-descent dose — the repeated-bout effect is the cheapest quad insurance there is.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L3", "~65 min"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L3",
            subs: ["SL pogos 3×12/leg — 2-min rests", "Depth drop to stick, 30 cm 4×5 — 2-min rests", "Lateral bounds 3×6/side — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Romanian deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        stats: ["2 × 25 min", "RPE 7 · sub-LT", "4–8% grade"],
        notes: "Longest SteadyState reps of the block — 50 min at intensity. 5-min jog-down recovery between reps; warm up 15–20 min.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["18 mi", "5,000 ft", "4 mi descent", "RPE 5–6"],
        notes: "Sustained controlled descent: short quick strides, cadence up, land under the hips, poles defensive. Fuel 60–80 g/hr.",
      },
      { day: "Sun", type: "b2b", stats: ["10 mi", "1,800 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 20,
    phaseId: "phase-3",
    name: "Plyo L4 · Block Close",
    totalMiles: 50,
    vert: 7500,
    note: "Ladder tops out at L4: 40 cm depth drops and bounding. Volume eases slightly into the block turn.",
    callout:
      "End of ME Block 1 — run the phase self-check. Next week is a full transition deload, then six weeks of max strength.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L4", "~65 min"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L4",
            subs: ["Depth drops 40 cm 4×5 — 2-min rests", "SL lateral hops 3×8/leg — 2-min rests", "Bounding 3×20 m — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "The ladder tops out — this L4 level gets banked through the MAX block.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill Tempo",
        stats: ["3 × 10 min", "LT · RPE 8–9", "6–10% grade"],
        notes: "Lactate threshold. 2:1 work:rest — ~5-min recoveries. Time-at-intensity capped at 30 min — keep the week pyramidal.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,500 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  // ─── PHASE 4 — MAX STRENGTH BLOCK ───
  {
    week: 21,
    phaseId: "phase-4",
    name: "Transition Deload",
    totalMiles: 30,
    vert: 3000,
    note: "⟳ Full deload between blocks. Absorb the ME block; arrive at the barbell fresh. Tendon HSR keeps full load.",
    deload: true,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Light",
        stats: ["Deload"],
        steps: [
          "Warm-up + plyo primer only — pogos 2×12 (60s)",
          "Back squat 3×5 @ 70% — 3 min",
          "Tendon at full load: weighted SL heel raise 4×6/leg (2 min)",
        ],
      },
      { day: "Tue", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Light",
        stats: ["Deload"],
        steps: ["Warm-up", "SL RDL 2×6/leg, moderate — 2 min", { name: "Tendon accessory", subs: ["Band inversion 3×12/foot — 60s", "Bodyweight SL heel raise 2×15/leg — 60s"] }],
      },
      { day: "Thu", type: "easy", stats: ["6 mi", "RPE 5–6"], notes: "No carry, no hills." },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["12 mi", "2,500 ft", "RPE 5–6"], notes: "Easy." },
      { day: "Sun", type: "easy", stats: ["6 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 22,
    phaseId: "phase-4",
    name: "MAX Week 1 · 4×5 @ 80%",
    totalMiles: 50,
    vert: 6000,
    note: "First real 1RM push since the injury. Plyos hold at primer dose — the L4 level is banked, not lost. Bar speed honest, nothing grinding.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Primary Lifts",
        stats: ["4×5 @ 80%", "~60 min"],
        steps: [
          {
            name: "Warm-up 8 min + plyo primer",
            subs: ["Pogo hops 2×15 — 90s rests", "Box jump w/ step-down 3×5 — 90s rests"],
          },
          "Back squat 4×5 @ 80% — 3-min rests",
          "Trap-bar deadlift 4×5 @ 80% — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "Every rep fast and crisp — grinding = too heavy.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 4×5 — 3-min rests",
          "SL RDL 3×6/leg — 2 min",
          "Lateral step-down 3×8/leg, 5-s lower — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill VO2",
        stats: ["5 × 3 min", "VO2 · RPE 10", "10–15% grade"],
        notes: "VO2max. Warm up 20 min; 1:1 work:rest — 3-min recoveries. The best-evidenced session for the engine (Barnes 2013, Ferley 2013).",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,200 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 23,
    phaseId: "phase-4",
    name: "MAX Week 2 · 4×4 @ 82.5%",
    totalMiles: 50,
    vert: 6000,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Primary Lifts",
        stats: ["4×4 @ 82.5%"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 4×4 @ 82.5% — 3-min rests",
          "Trap-bar deadlift 4×4 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 4×5 — 3-min rests",
          "SL RDL 3×6/leg — 2 min",
          "Lateral step-down 3×8/leg, 5-s lower — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        stats: ["2 × 20 min", "RPE 7 · sub-LT", "4–8% grade"],
        notes: "SteadyState uphill intervals — 4–5 min jog-down recovery between reps. RPE 7: strong but sustainable, not threshold.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,200 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 24,
    phaseId: "phase-4",
    name: "MAX Week 3 · 5×3 @ 85%",
    totalMiles: 50,
    vert: 6200,
    callout:
      "This would have been race week. The canyon isn't going anywhere — the ceiling you're building here is what you'll carry back to it.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Primary Lifts",
        stats: ["5×3 @ 85%"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 5×3 @ 85% — 3-min rests",
          "Trap-bar deadlift 5×3 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 4×5 — 3-min rests",
          "SL RDL 3×6/leg — 2 min",
          "Lateral step-down 3×8/leg, 5-s lower — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill Tempo",
        stats: ["3 × 10 min", "LT · RPE 8–9", "6–10% grade"],
        notes: "Lactate threshold. 2:1 work:rest — ~5-min recoveries. Raises fractional utilization — dosed once per rotation, no more.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,300 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 25,
    phaseId: "phase-4",
    name: "MAX Week 4 · Deload",
    totalMiles: 30,
    vert: 3000,
    note: "⟳ Block-internal deload: 3×5 @ 70%. Tendon HSR keeps full load.",
    deload: true,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Deload",
        stats: ["3×5 @ 70%"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 3×5 @ 70% — 3 min",
          "Bulgarian split squat 2×6/leg — 2 min",
          "Tendon at full load: weighted SL heel raise 4×6/leg",
        ],
      },
      { day: "Tue", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Deload",
        steps: ["Warm-up", "Anchor lift 3×5, easy", "SL RDL 2×6/leg, light — 2 min", { name: "Tendon accessory", subs: ["Band inversion 3×12/foot — 60s", "Bodyweight SL heel raise 2×15/leg — 60s"] }],
      },
      { day: "Thu", type: "easy", stats: ["6 mi", "RPE 5–6"], notes: "No hills." },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["12 mi", "2,600 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["6 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 26,
    phaseId: "phase-4",
    name: "MAX Week 5 · 4×3 @ 87.5%",
    totalMiles: 50,
    vert: 6200,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Primary Lifts",
        stats: ["4×3 @ 87.5%"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 4×3 @ 87.5% — 3-min rests",
          "Trap-bar deadlift 4×3 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 4×5 — 3-min rests",
          "SL RDL 3×6/leg — 2 min",
          "Lateral step-down 3×8/leg, 5-s lower — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill VO2",
        stats: ["5 × 3 min", "VO2 · RPE 10", "10–15% grade"],
        notes: "VO2max. Warm up 20 min; 1:1 work:rest — 3-min recoveries. Max repeatable effort.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,300 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 27,
    phaseId: "phase-4",
    name: "MAX Week 6 · 3×2 @ 90%",
    totalMiles: 50,
    vert: 6200,
    callout:
      "Crisp doubles at 90%, then re-estimate your 1RM — next cycle's percentages come from this number. Log it.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "MAX Session A — Test Week",
        stats: ["3×2 @ 90%"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 3×2 @ 90% — 3-min rests, every rep fast",
          "Trap-bar deadlift 3×2 — 3 min",
          "Bulgarian split squat 2×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "Crisp doubles, then re-estimate the 1RM — log it for the next cycle.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "MAX Session B — Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 4×5 — 3-min rests",
          "SL RDL 3×6/leg — 2 min",
          "Lateral step-down 3×8/leg, 5-s lower — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        stats: ["2 × 20 min", "RPE 7 · sub-LT", "4–8% grade"],
        notes: "SteadyState — the least costly quality session, placed in the 90% test week deliberately. RPE 7, no hero reps.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,300 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
  // ─── PHASE 5 — ME + PLYO BLOCK 2 ───
  {
    week: 28,
    phaseId: "phase-5",
    name: "Deload · Block Turn",
    totalMiles: 30,
    vert: 3200,
    note: "⟳ Deload between blocks. The new 1RM is banked; next week starts converting it into fatigue resistance.",
    deload: true,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Light",
        stats: ["Deload", "new 1RM"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 3×5 @ 70% of the NEW 1RM — 3 min",
          "Tendon at full load: weighted SL heel raise 4×6/leg (2 min)",
        ],
      },
      { day: "Tue", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Light",
        steps: ["Warm-up", "SL RDL 2×6/leg, moderate — 2 min", { name: "Tendon accessory", subs: ["Band inversion 3×12/foot — 60s", "Bodyweight SL heel raise 2×15/leg — 60s"] }],
      },
      { day: "Thu", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["12 mi", "2,800 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["6 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 29,
    phaseId: "phase-5",
    name: "ME Block 2 Opens",
    totalMiles: 50,
    vert: 7500,
    note: "Plyo ladder resumes at the banked L4. All percentages now run off the week-27 1RM — the same 80% is a heavier bar.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L4", "new 1RM"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L4 (resume banked level)",
            subs: ["Depth drops 40 cm 4×5 — 2-min rests", "SL lateral hops 3×8/leg — 2-min rests", "Bounding 3×20 m — 2-min rests"],
          },
          "Back squat 3×4 @ 80% of the new 1RM — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "Same 80% — heavier bar.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"], notes: "Cadence 175+." },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill Tempo",
        stats: ["3 × 10 min", "LT · RPE 8–9", "6–10% grade"],
        notes: "Lactate threshold. 2:1 work:rest — ~5-min recoveries. Short answers, hard breathing — not VO2 effort.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["17 mi", "4,800 ft", "RPE 5–6"],
        notes: "Protect the vertical — no treadmill substitutions for the mountain day.",
      },
      { day: "Sun", type: "b2b", stats: ["10 mi", "1,700 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 30,
    phaseId: "phase-5",
    name: "ME Build",
    totalMiles: 50,
    vert: 7800,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L4"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L4",
            subs: ["Depth drops 40 cm 4×5 — 2-min rests", "SL lateral hops 3×8/leg — 2-min rests", "Bounding 3×20 m — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Romanian deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill VO2",
        stats: ["5 × 3 min", "VO2 · RPE 10", "10–15% grade"],
        notes: "VO2max. Warm up 20 min; 1:1 work:rest — 3-min recoveries. Last rep as strong as the first.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["17 mi", "4,800 ft", "RPE 5–6"],
        notes: "TP for ups; 2–3 mi controlled descent work.",
      },
      { day: "Sun", type: "b2b", stats: ["11 mi", "1,800 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 31,
    phaseId: "phase-5",
    name: "Plyo L5 · Downhill Strides",
    totalMiles: 50,
    vert: 7800,
    note:
      "The ladder's destination: gym elasticity expressed at running speed on real descents. Highest tendon demand in the program — the 24-h rule gates every session.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L5", "gym dose"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L5 gym dose",
            subs: ["Depth drops 40 cm 3×5 — 2-min rests", "SL lateral hops 2×8/leg — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
        notes: "The rest of the L5 stimulus moves to Thursday's downhill strides.",
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        title: "SteadyState + L5 Strides",
        stats: ["2 × 20 min", "RPE 7 · sub-LT", "L5"],
        steps: [
          "Uphill SteadyState 2 × 20 min @ RPE 7 on 4–8% grade — 4–5 min jog-down recovery; warm up 15–20 min",
          "L5: downhill strides 5 × 25 s on a smooth −5 to −8% grade — jog-up recoveries (~2 min)",
        ],
        notes: "Strides crisp, quick, no braking. Highest tendon demand in the program — 24-h rule gates the next session.",
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,800 ft", "RPE 5–6"] },
      { day: "Sun", type: "b2b", stats: ["11 mi", "1,800 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 32,
    phaseId: "phase-5",
    name: "ME Peak",
    totalMiles: 50,
    vert: 8000,
    note: "Biggest week of the block, then the holiday deload.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L5"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L5 gym dose",
            subs: ["Depth drops 40 cm 3×5 — 2-min rests", "SL lateral hops 2×8/leg — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Romanian deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill Tempo + L5 Strides",
        stats: ["3 × 10 min", "LT · RPE 8–9", "L5"],
        steps: [
          "Uphill Tempo 3 × 10 min @ RPE 8–9 (LT) on 6–10% grade — ~5-min recoveries (2:1); warm up 15–20 min",
          "L5: downhill strides 5 × 25 s on −5 to −8% smooth grade — jog-up recoveries",
        ],
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      {
        day: "Sat",
        type: "long",
        stats: ["18 mi", "5,000 ft", "RPE 5–6"],
        notes: "The block's big mountain day — fuel 60–80 g carbs/hr.",
      },
      { day: "Sun", type: "b2b", stats: ["10 mi", "2,000 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 33,
    phaseId: "phase-5",
    name: "Holiday Deload",
    totalMiles: 30,
    vert: 3400,
    note: "⟳ Deload lands on the holidays by design. Enjoy them; keep the micro-dose daily and the tendon HSR at full load.",
    deload: true,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Light",
        stats: ["Deload"],
        steps: [
          "Warm-up + plyo primer",
          "Back squat 3×5 @ 70% — 3 min",
          "Tendon at full load: weighted SL heel raise 4×6/leg",
        ],
      },
      { day: "Tue", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Light",
        steps: ["Warm-up", "SL RDL 2×6/leg, moderate — 2 min", { name: "Tendon accessory", subs: ["Band inversion 3×12/foot — 60s", "Bodyweight SL heel raise 2×15/leg — 60s"] }],
      },
      { day: "Thu", type: "easy", stats: ["6 mi", "RPE 5–6"] },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["12 mi", "3,000 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["6 mi", "RPE 5–6"] },
    ],
  },
  {
    week: 34,
    phaseId: "phase-5",
    name: "ME Consolidate",
    totalMiles: 50,
    vert: 7800,
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L5"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L5 gym dose",
            subs: ["Depth drops 40 cm 3×5 — 2-min rests", "SL lateral hops 2×8/leg — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Trap-bar deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Front squat 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          "Step-off stick landings 3×6 — 90s",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "hills",
        title: "Uphill VO2 + L5 Strides",
        stats: ["5 × 3 min", "VO2 · RPE 10", "L5"],
        steps: [
          "Uphill VO2 5 × 3 min @ RPE 10 on 10–15% grade — 3-min recoveries (1:1); warm up 20 min",
          "L5: downhill strides 5 × 25 s — jog-up recoveries",
        ],
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,800 ft", "RPE 5–6"] },
      { day: "Sun", type: "b2b", stats: ["11 mi", "1,800 ft", "RPE 5–6"] },
    ],
  },
  {
    week: 35,
    phaseId: "phase-5",
    name: "Block Close · Reassess",
    totalMiles: 50,
    vert: 7500,
    callout:
      "End of the cycle. Run the phase self-check, pick the 50k (~10,000 ft), and anchor the next cycle: MAX block Jan–Feb, then a race-specific ME block ending 10 days before race day.",
    days: [
      {
        day: "Mon",
        type: "strength",
        title: "Session A — Plyo + Heavy",
        stats: ["Plyo L5"],
        steps: [
          "Warm-up 8 min + primers",
          {
            name: "Plyometrics — L5 gym dose",
            subs: ["Depth drops 40 cm 3×5 — 2-min rests", "SL lateral hops 2×8/leg — 2-min rests"],
          },
          "Back squat 3×4 @ 80% — 3-min rests",
          "Romanian deadlift 3×5 — 3 min",
          "Bulgarian split squat 3×6/leg — 2 min",
          {
            name: "Tendon finisher",
            subs: ["Weighted SL heel raise 4×6/leg — 3s/3s — 2-min rests", "Seated calf raise 3×8 — 3s/3s — 90s rests"],
          },
        ],
      },
      { day: "Tue", type: "easy", stats: ["8 mi", "HR ≤145", "RPE 5–6"] },
      {
        day: "Wed",
        type: "strength",
        title: "Session B — Heavy Single-Leg",
        stats: ["Heavy SL", "AM 6 mi easy"],
        steps: [
          "Warm-up + plyo primer",
          "Weighted step-up 3×5 — 3-min rests",
          "SL RDL 3×6/leg, heavy — 2-min rests",
          {
            name: "Tendon accessory",
            subs: ["Band inversion 3×12/foot — 60s rests", "Bodyweight SL heel raise 2×15/leg — 60s rests", "Toe yoga 2×10/foot"],
          },
        ],
      },
      {
        day: "Thu",
        type: "climb",
        title: "SteadyState + L5 Strides",
        stats: ["2 × 25 min", "RPE 7 · sub-LT", "L5"],
        steps: [
          "Uphill SteadyState 2 × 25 min @ RPE 7 on 4–8% grade — 5-min jog-down recovery",
          "L5: downhill strides 5 × 25 s — jog-up recoveries",
        ],
      },
      { day: "Fri", type: "rest", notes: "Rest + micro-dose." },
      { day: "Sat", type: "long", stats: ["17 mi", "4,600 ft", "RPE 5–6"] },
      { day: "Sun", type: "easy", stats: ["11 mi", "RPE 5–6"] },
    ],
  },
];

export const STRENGTH_PROGRAMS = {
  "phase-1": {
    title: "Block 1 · Foundation (Weeks 1–6)",
    subtitle:
      "Tissue prep, movement quality. Loads light to moderate. Groove patterns, tolerate basic loading. Always preceded by 5-min dynamic warm-up + prehab routine.",
    sessionA: {
      name: "Session A — Lower Body · Posterior Chain",
      exercises: [
        { name: "Goblet Squat", sets: "3×8", rest: "60s", notes: "Moderate load. Full depth, controlled tempo." },
        {
          name: "Romanian Deadlift",
          sets: "3×8",
          rest: "60s",
          notes: "Moderate. Hinge at hips, slight knee bend. Feel hamstrings stretch.",
        },
        {
          name: "Bulgarian Split Squat",
          sets: "3×8/side",
          rest: "60s",
          notes: "Bodyweight if needed first 2 weeks, then load. Controlled descent.",
        },
        { name: "Single-Leg Glute Bridge", sets: "3×12/side", rest: "45s", notes: "Squeeze glute at top. 2s hold." },
        { name: "Side Plank", sets: "3×30s/side", rest: "30s", notes: "Stack hips. Hold steady, breathe normally." },
        {
          name: "HSR Calf Circuit",
          sets: "3×12",
          rest: "60s",
          notes: "Bilateral heel raise on step (3s up, 3s down). Straight knee + bent knee. Single-leg when cleared. Full protocol in the Tendon tab.",
        },
      ],
    },
    sessionB: {
      name: "Session B — Anterior Chain · Core",
      exercises: [
        {
          name: "Reverse Lunge",
          sets: "3×8/side",
          rest: "60s",
          notes: "Bodyweight first, then load. Knee tracks over toes.",
        },
        {
          name: "Step-Up (knee-height box)",
          sets: "3×8/side",
          rest: "60s",
          notes: "Drive through full hip extension. No bounce off back foot.",
        },
        {
          name: "Dead Bug",
          sets: "3×10/side",
          rest: "45s",
          notes: "Lower back pressed to floor. Breathe out on extension.",
        },
        {
          name: "Pallof Press",
          sets: "3×10/side",
          rest: "45s",
          notes: "Band or cable. Anti-rotation. Resist the pull.",
        },
        {
          name: "Single-Leg Balance Series",
          sets: "3×30s/side",
          rest: "30s",
          notes: "Eyes open, then eyes closed, then with ball toss. Progress when steady.",
        },
        {
          name: "HSR Calf Circuit",
          sets: "3×12",
          rest: "60s",
          notes: "Same as Session A. 48+ hours between tendon sessions. Full protocol in the Tendon tab.",
        },
      ],
    },
  },
  "phase-2": {
    title: "Block 2 · Max Strength (Weeks 7–12)",
    subtitle:
      "Drive force production. Heavy compound lifts produce the running-economy benefits documented in Blagrove's work. Build to ~80–85% 1RM by week 12. Lower reps, longer rest, controlled tempo.",
    sessionA: {
      name: "Session A — Heavy Compounds",
      exercises: [
        {
          name: "Back Squat (or Goblet Squat)",
          sets: "4×5",
          rest: "2–3 min",
          notes: "Build to 80% 1RM by week 12. Full depth. Priority lift.",
        },
        { name: "Romanian Deadlift", sets: "4×5", rest: "2 min", notes: "Heavy. Hamstring/posterior chain emphasis." },
        {
          name: "Bulgarian Split Squat (weighted)",
          sets: "3×6/side",
          rest: "90s",
          notes: "DB or BB. Key single-leg strength builder.",
        },
        {
          name: "Single-Leg Deadlift",
          sets: "3×6/side",
          rest: "60s",
          notes: "Balance + posterior chain. Essential for descents.",
        },
        {
          name: "Side Plank with Hip Abduction",
          sets: "3×10/side",
          rest: "45s",
          notes: "Lift top leg slowly. Glute med activation.",
        },
        { name: "HSR Calf", sets: "3×8 (heavy)", rest: "60s", notes: "Progress load, 3s eccentric. Full protocol in the Tendon tab." },
      ],
    },
    sessionB: {
      name: "Session B — Power & Tib-Post",
      exercises: [
        {
          name: "Front Squat or Trap-Bar Deadlift",
          sets: "4×5",
          rest: "2–3 min",
          notes: "Alternate weeks. Both train uphill drive.",
        },
        { name: "Weighted Step-Up", sets: "4×5/side", rest: "90s", notes: "Drive through hip extension. No bounce." },
        {
          name: "Single-Leg Calf Raise off Step (weighted)",
          sets: "4×8/side",
          rest: "60s",
          notes: "Heavy. Also tib-post-specific. 3s eccentric.",
        },
        { name: "Cable Pull-Through or KB Swing", sets: "3×8", rest: "60s", notes: "Hip hinge power." },
        { name: "Hollow-Body Hold", sets: "3×30s", rest: "45s", notes: "Anti-extension core." },
        {
          name: "Foot Intrinsic Work",
          sets: "5 min",
          rest: "—",
          notes: "Toe yoga, doming, short foot. Foundation for arch control.",
        },
        {
          name: "Plyometric Primer (1×/week)",
          sets: "—",
          rest: "—",
          notes: "Pogo hops 3×20 · Box jumps (low, soft) 3×6 · Skipping for height 3×30m.",
        },
      ],
    },
  },
  "phase-3": {
    title: "ME + Plyo Block 1 (Weeks 13–20)",
    subtitle:
      "Revised Aug 2026 after evidence review: gym ME circuits removed — load-matched trials (Li 2020) and meta-analysis (Llanos-Lagos 2024) show heavy (>80% 1RM) and plyometric work beat high-rep circuits, which mostly duplicate run stress. Muscular endurance now lives on the hill (Thursday rotation); the gym stays heavy and crisp. Order: warm-up → primers → plyos fresh → heavy bilateral → heavy single-leg → tendon HSR.",
    sessionA: {
      name: "Session A (Mon) — Plyo + Heavy",
      exercises: [
        {
          name: "Plyometrics — ladder level",
          sets: "110–140 contacts",
          rest: "90s · 2 min SL/depth",
          items: [
            {
              label: "L2 (wks 15–17)",
              subs: ["SL pogos 3×10/leg — 2 min", "Box jump w/ step-down 4×5 — 90s", "Lateral bound to stick 3×5/side — 2 min"],
            },
            {
              label: "L3 (wks 18–19)",
              subs: ["SL pogos 3×12/leg — 2 min", "Depth drop to stick, 30 cm 4×5 — 2 min", "Lateral bounds 3×6/side — 2 min"],
            },
            {
              label: "L4 (wk 20)",
              subs: ["Depth drops 40 cm 4×5 — 2 min", "SL lateral hops 3×8/leg — 2 min", "Bounding 3×20 m — 2 min"],
            },
          ],
          notes: "Advance only on quiet mornings + crisp landings. Stop any set that gets loud or slow.",
        },
        {
          name: "Back Squat",
          sets: "3×4 @ 80%",
          rest: "3 min",
          notes: "Maintenance heavy — protects running economy under fatigue. No grinding reps.",
        },
        { name: "Trap-Bar DL or RDL (alternate wks)", sets: "3×5", rest: "3 min", notes: "Heavy — 2 reps in reserve (RPE 8)." },
        { name: "Bulgarian Split Squat", sets: "3×6/leg", rest: "2 min", notes: "Heavy DBs. Both legs, then rest." },
        {
          name: "SL Heel Raise, weighted — tendon",
          sets: "4×6/leg",
          rest: "2 min",
          notes: "3s up / 3s down, full range into dorsiflexion. Never deloaded.",
        },
        { name: "Seated Calf Raise, weighted — tendon", sets: "3×8", rest: "90s", notes: "Soleus. Same 3s/3s tempo." },
        { name: "Side Plank + Hip Abduction", sets: "3×10/side", rest: "45s", notes: "Glute med finisher." },
      ],
    },
    sessionB: {
      name: "Session B (Wed) — Heavy Single-Leg",
      exercises: [
        {
          name: "Plyo Primer",
          sets: "~60 contacts",
          rest: "60s",
          items: ["Pogo hops 2×15", "A-skip 2×30 m"],
          notes: "Stiffness priming, not development.",
        },
        {
          name: "Front Squat or Weighted Step-Up (alternate wks)",
          sets: "4×5",
          rest: "3 min",
          notes: "Heavy — 2 reps in reserve (RPE 8). Nothing taken to failure, nothing chased for burn.",
        },
        {
          name: "Single-Leg RDL",
          sets: "3×6/leg",
          rest: "2 min",
          notes: "Heavy DB. Balance + posterior chain — the descent stabilizer.",
        },
        { name: "Box Step-Off Stick Landing (30 cm)", sets: "3×6", rest: "90s", notes: "Stick 2s, step back up. Descent eccentric." },
        { name: "Resisted Ankle Inversion (band) — tendon", sets: "3×12/foot", rest: "60s", notes: "2s out / 2s back." },
        { name: "SL Heel Raise, bodyweight — tendon", sets: "2×15/leg", rest: "60s", notes: "Volume counterpart to Monday's heavy dose." },
        { name: "Toe Yoga", sets: "2×10/foot", notes: "Foot intrinsics." },
      ],
    },
  },
  "phase-4": {
    title: "Max Strength Block (Weeks 21–27)",
    subtitle:
      "Raise the force ceiling: squat and trap-bar build 80% → 90% over six weeks. Plyos hold at primer dose — the ladder level is banked, not lost.",
    sessionA: {
      name: "MAX Session A (Mon) — Primary Lifts",
      exercises: [
        {
          name: "Plyo Primer",
          sets: "~60 contacts",
          rest: "90s",
          items: ["Pogo hops 2×15", "Box jump w/ step-down 3×5"],
          notes: "Neural priming only.",
        },
        {
          name: "Back Squat — weekly ladder",
          sets: "80% → 90%",
          rest: "3 min",
          items: [
            "Wk 22 — 4×5 @ 80%",
            "Wk 23 — 4×4 @ 82.5%",
            "Wk 24 — 5×3 @ 85%",
            "Wk 25 — deload: 3×5 @ 70%",
            "Wk 26 — 4×3 @ 87.5%",
            "Wk 27 — 3×2 @ 90%, then re-estimate 1RM",
          ],
          notes: "The priority lift. Every rep fast and crisp — grinding = too heavy.",
        },
        { name: "Trap-Bar Deadlift", sets: "mirrors squat", rest: "3 min", notes: "Same weekly ladder as the squat." },
        { name: "Bulgarian Split Squat", sets: "3×6/leg", rest: "2 min", notes: "Heavy DBs — 2 reps in reserve (RPE 8)." },
        {
          name: "SL Heel Raise, weighted — tendon",
          sets: "4×6/leg",
          rest: "2 min",
          notes: "3s/3s. Full load every week, including deloads.",
        },
        { name: "Seated Calf Raise, weighted — tendon", sets: "3×8", rest: "90s", notes: "Soleus, 3s/3s." },
        { name: "Side Plank + Hip Abduction", sets: "3×10/side", rest: "45s", notes: "Core." },
      ],
    },
    sessionB: {
      name: "MAX Session B (Wed) — Single-Leg + Pattern",
      exercises: [
        {
          name: "Plyo Primer",
          sets: "~50 contacts",
          rest: "60s",
          items: ["Pogo hops 2×12", "A-skip 2×30 m"],
        },
        {
          name: "Front Squat or Weighted Step-Up (alternate wks)",
          sets: "4×5",
          rest: "3 min",
          notes: "Heavy — 2 reps in reserve (RPE 8).",
        },
        { name: "Single-Leg RDL", sets: "3×6/leg", rest: "2 min", notes: "Moderate-heavy DB. Balance + posterior chain." },
        {
          name: "Lateral Step-Down",
          sets: "3×8/leg",
          rest: "90s",
          notes: "5-second lower. Keeps descent eccentrics alive through the block.",
        },
        { name: "Resisted Ankle Inversion (band) — tendon", sets: "3×12/foot", rest: "60s", notes: "2s out / 2s back." },
        { name: "SL Heel Raise, bodyweight — tendon", sets: "2×15/leg", rest: "60s", notes: "Wednesday tendon volume." },
        { name: "Toe Yoga", sets: "2×10/foot", notes: "Foot intrinsics." },
      ],
    },
  },
  "phase-5": {
    title: "ME + Plyo Block 2 (Weeks 28–35)",
    subtitle:
      "Same sessions as Block 1, run off the NEW week-27 1RM — the same 80% is now a heavier bar. The plyo ladder resumes at banked L4 and graduates to L5.",
    sessionA: {
      name: "Session A (Mon) — Plyo + Heavy",
      exercises: [
        {
          name: "Plyometrics — L4 → L5",
          sets: "90–140 contacts",
          rest: "2 min",
          items: [
            {
              label: "L4 (wks 29–30)",
              subs: ["Depth drops 40 cm 4×5 — 2 min", "SL lateral hops 3×8/leg — 2 min", "Bounding 3×20 m — 2 min"],
            },
            {
              label: "L5 gym dose (wks 31+)",
              subs: ["Depth drops 40 cm 3×5 — 2 min", "SL lateral hops 2×8/leg — 2 min"],
            },
            {
              label: "L5 run dose (Thu)",
              subs: ["Downhill strides 5×25 s on −5 to −8% smooth grade — jog-up recovery"],
            },
          ],
          notes: "L5 is the destination: gym elasticity expressed at running speed on real descents.",
        },
        { name: "Back Squat", sets: "3×4 @ 80% new 1RM", rest: "3 min", notes: "Maintenance heavy at the new ceiling." },
        { name: "Trap-Bar DL or RDL (alternate wks)", sets: "3×5", rest: "3 min", notes: "Heavy — 2 reps in reserve (RPE 8)." },
        { name: "Bulgarian Split Squat", sets: "3×6/leg", rest: "2 min", notes: "Heavy DBs." },
        { name: "SL Heel Raise, weighted — tendon", sets: "4×6/leg", rest: "2 min", notes: "3s/3s. Permanent." },
        { name: "Seated Calf Raise, weighted — tendon", sets: "3×8", rest: "90s", notes: "Soleus." },
        { name: "Side Plank + Hip Abduction", sets: "3×10/side", rest: "45s", notes: "Core." },
      ],
    },
    sessionB: {
      name: "Session B (Wed) — Heavy Single-Leg",
      exercises: [
        {
          name: "Plyo Primer",
          sets: "~60 contacts",
          rest: "60s",
          items: ["Pogo hops 2×15", "A-skip 2×30 m"],
          notes: "Stiffness priming.",
        },
        {
          name: "Front Squat or Weighted Step-Up (alternate wks)",
          sets: "4×5",
          rest: "3 min",
          notes: "Heavy — 2 reps in reserve (RPE 8). Nothing taken to failure.",
        },
        {
          name: "Single-Leg RDL",
          sets: "3×6/leg",
          rest: "2 min",
          notes: "Heavy DB. Balance + posterior chain — the descent stabilizer.",
        },
        { name: "Box Step-Off Stick Landing (30 cm)", sets: "3×6", rest: "90s", notes: "Stick 2s. Descent eccentric." },
        { name: "Resisted Ankle Inversion (band) — tendon", sets: "3×12/foot", rest: "60s", notes: "2s out / 2s back." },
        { name: "SL Heel Raise, bodyweight — tendon", sets: "2×15/leg", rest: "60s", notes: "Wednesday tendon volume." },
        { name: "Toe Yoga", sets: "2×10/foot", notes: "Foot intrinsics." },
      ],
    },
  },
};

export const HSR_PROGRAMS = {
  "phase-1": {
    title: "HSR Block · Tendon Reintroduction (Weeks 1–6)",
    subtitle:
      "3×/week, ≥48 hours apart. Tempo: 3s up, 3s down. Loading progression: 12RM (wks 1–2) → 10RM (wks 3–4) → 8RM (wks 5–6). Each session does the three core lifts; adjuncts rotate.",
    sessionA: {
      name: "HSR 1 (Mon) — Core + Foot Intrinsics",
      exercises: [
        {
          name: "Bilateral heel raise (knee straight)",
          sets: "3×12",
          rest: "60s",
          notes:
            "Step or floor. Gastroc/Achilles emphasis. Slow lower into dorsiflexion. Load with dumbbells, pack, or vest.",
        },
        {
          name: "Bilateral heel raise (knee bent ~30°)",
          sets: "3×12",
          rest: "60s",
          notes: "Soleus emphasis. Same tempo. Progress load when reps feel controlled at top of range.",
        },
        {
          name: "Single-leg heel raise on step",
          sets: "3×10/side",
          rest: "60s",
          notes:
            "Only once cleared without pain. Bodyweight first 2 weeks, then load. Most tib-post-specific movement.",
        },
        {
          name: "Foot doming / short foot",
          sets: "2×30s hold",
          rest: "30s",
          notes: "Foot intrinsics. Pair with eyes-closed balance if comfortable.",
        },
      ],
    },
    sessionB: {
      name: "HSR 2 (Wed) — Core + Inversion",
      exercises: [
        {
          name: "Bilateral heel raise (knee straight)",
          sets: "3×12",
          rest: "60s",
          notes: "Same as Session 1. Maintain tempo discipline — no bounce at the bottom.",
        },
        {
          name: "Bilateral heel raise (knee bent ~30°)",
          sets: "3×12",
          rest: "60s",
          notes: "Soleus emphasis. Add ~5% load if last session felt easy at top of range.",
        },
        {
          name: "Single-leg heel raise on step",
          sets: "3×10/side",
          rest: "60s",
          notes: "Mirror Session 1. Match the weaker side first to preserve symmetry.",
        },
        {
          name: "Resisted ankle inversion (band)",
          sets: "3×15/side",
          rest: "45s",
          notes: "Slow controlled reps. Build toward 3×8 with heavier band as tendon tolerates.",
        },
      ],
    },
  },
  "phase-2": {
    title: "HSR Block · Heavy Loading (Weeks 7–12)",
    subtitle:
      "Same 3×/week pattern. Loading: 8RM (wks 7–10) → 6RM (wks 11–12). Tendon should tolerate heavy slow loading without next-morning flare. Plyometric primer introduces late.",
    sessionA: {
      name: "HSR 1 (Mon) — Heavy Bilateral",
      exercises: [
        {
          name: "Bilateral heel raise (knee straight)",
          sets: "4×8 → 4×6",
          rest: "90s",
          notes: "Progress 8RM → 6RM over the block. Heavy. Full range, slow tempo.",
        },
        {
          name: "Bilateral heel raise (knee bent ~30°)",
          sets: "4×8 → 4×6",
          rest: "90s",
          notes: "Soleus. Match load progression with straight-knee version.",
        },
        {
          name: "Single-leg heel raise on step (weighted)",
          sets: "3×8/side",
          rest: "60s",
          notes: "Loaded now. Protect form over load — the tib-post is the throughline.",
        },
        {
          name: "Foot doming / short foot",
          sets: "2×30s hold",
          rest: "30s",
          notes: "Daily-level work — maintain even on heavy weeks.",
        },
      ],
    },
    sessionB: {
      name: "HSR 2 (Wed) — Heavy + Inversion",
      exercises: [
        {
          name: "Bilateral heel raise (knee straight)",
          sets: "4×8 → 4×6",
          rest: "90s",
          notes: "Match Session 1 loads.",
        },
        {
          name: "Bilateral heel raise (knee bent ~30°)",
          sets: "4×8 → 4×6",
          rest: "90s",
          notes: "Soleus. Heavy.",
        },
        {
          name: "Single-leg heel raise on step (weighted)",
          sets: "3×8/side",
          rest: "60s",
          notes: "Force production for the downhill demand.",
        },
        {
          name: "Resisted ankle inversion (band)",
          sets: "3×10/side",
          rest: "60s",
          notes: "Heavier band. Anti-pronation strength.",
        },
        {
          name: "Pogo hops primer (wks 11–12 only)",
          sets: "3×20",
          rest: "60s",
          notes: "Soft landing, minimal contact time. Only if tendon stayed quiet through Phase 2.",
        },
      ],
    },
  },
  "phase-3": {
    title: "Tendon Care — Outside the Gym",
    subtitle:
      "The loaded tendon lifts live in the Strength tab, inside Sessions A and B, where they're performed. This tab is everything else: the daily routine, running cues, and what to do if the tendon talks.",
    sessionA: {
      name: "Every Day — Micro-Dose & Pre-Run",
      exercises: [
        {
          name: "Morning micro-dose",
          sets: "5 min",
          items: [
            "Foot doming — 10 reps, 5s holds",
            "Toe yoga — 10 per pattern, each foot",
            "Band inversion — 15 slow, each foot",
            "SL balance — 30s/leg, eyes closed",
            "Calf stretch, straight + bent knee — 30s each side",
          ],
          notes: "Non-negotiable, every day including rest days. Pair it with morning coffee.",
        },
        {
          name: "Pre-run activation",
          sets: "2 min",
          items: ["Ankle circles — 10 each way", "Band inversion — 1×15", "BW heel raises — 1×10"],
          notes: "Before every run.",
        },
        {
          name: "Running cues",
          items: [
            "Cadence 175+ on easy runs (it drifted to 171 — set a watch alert)",
            "Half-shoe-width wider stance on technical descents",
            "Poles on descents over ~2,000 ft",
          ],
        },
      ],
    },
    sessionB: {
      name: "Gym Doses & Flare Protocol",
      exercises: [
        {
          name: "In-gym tendon doses — performed inside the strength sessions",
          items: [
            {
              label: "Mon — end of Session A",
              subs: ["Weighted SL heel raise 4×6/leg — 2-min rests", "Seated calf raise 3×8 — 90s rests"],
            },
            {
              label: "Wed — end of Session B",
              subs: ["Band inversion 3×12/foot", "Bodyweight SL heel raise 2×15/leg", "Toe yoga 2×10/foot"],
            },
          ],
          notes: "Full detail in the Strength tab. Never deloaded — the tendon is never the recovery week.",
        },
        {
          name: "Flare protocol — morning pain above baseline for >24h",
          items: [
            "1 — Drop plyometrics for 7 days; keep everything else",
            "2 — Still elevated after 3 days: reduce heel-raise load 20–30%, keep frequency",
            "3 — Still elevated: replace calf work with isometric holds 5×30s @ 80% effort, 60s rest, 1–2×/day",
            "4 — Sharp pain, gait change, swelling, or pop/snap: PT before the next session",
          ],
          notes: "Running is never the first thing cut while symptoms are ≤2/10 and settling within 24h.",
        },
      ],
    },
  },
  "phase-4": {
    title: "Tendon Care — Outside the Gym",
    subtitle:
      "The loaded tendon lifts live in the Strength tab, inside the MAX sessions. Full load even in deload weeks 21 and 25 — the tendon is never the deload. This tab: daily routine, cues, and the flare protocol.",
    sessionA: {
      name: "Every Day — Micro-Dose & Pre-Run",
      exercises: [
        {
          name: "Morning micro-dose",
          sets: "5 min",
          items: [
            "Foot doming — 10 reps, 5s holds",
            "Toe yoga — 10 per pattern, each foot",
            "Band inversion — 15 slow, each foot",
            "SL balance — 30s/leg, eyes closed",
            "Calf stretch, straight + bent knee — 30s each side",
          ],
          notes: "Non-negotiable, every day including rest days.",
        },
        {
          name: "Pre-run activation",
          sets: "2 min",
          items: ["Ankle circles — 10 each way", "Band inversion — 1×15", "BW heel raises — 1×10"],
          notes: "Before every run.",
        },
        {
          name: "Running cues",
          items: ["Cadence 175+ on easy runs", "HR ≤145 on easy days — heavy legs make sloppy strides", "Poles on descents over ~2,000 ft"],
        },
      ],
    },
    sessionB: {
      name: "Gym Doses & Flare Protocol",
      exercises: [
        {
          name: "In-gym tendon doses — performed inside the MAX sessions",
          items: [
            {
              label: "Mon — end of MAX Session A",
              subs: ["Weighted SL heel raise 4×6/leg — 2-min rests", "Seated calf raise 3×8 — 90s rests"],
            },
            {
              label: "Wed — end of MAX Session B",
              subs: ["Band inversion 3×12/foot", "Bodyweight SL heel raise 2×15/leg", "Toe yoga 2×10/foot"],
            },
          ],
          notes: "Full detail in the Strength tab. Full load every week of the block.",
        },
        {
          name: "Flare protocol — morning pain above baseline for >24h",
          items: [
            "1 — Drop plyo primers for 7 days; keep everything else",
            "2 — Still elevated after 3 days: reduce heel-raise load 20–30%, keep frequency",
            "3 — Still elevated: replace calf work with isometric holds 5×30s @ 80% effort, 60s rest, 1–2×/day",
            "4 — Sharp pain, gait change, swelling, or pop/snap: PT before the next session",
          ],
        },
      ],
    },
  },
  "phase-5": {
    title: "Tendon Care — Outside the Gym",
    subtitle:
      "Same permanent scheme, with one caution: L5 downhill strides are the highest tendon demand in the program — the 24-h rule gates every session. Loaded lifts live in the Strength tab.",
    sessionA: {
      name: "Every Day — Micro-Dose & Pre-Run",
      exercises: [
        {
          name: "Morning micro-dose",
          sets: "5 min",
          items: [
            "Foot doming — 10 reps, 5s holds",
            "Toe yoga — 10 per pattern, each foot",
            "Band inversion — 15 slow, each foot",
            "SL balance — 30s/leg, eyes closed",
            "Calf stretch, straight + bent knee — 30s each side",
          ],
          notes: "Non-negotiable, every day including rest days.",
        },
        {
          name: "Pre-run activation",
          sets: "2 min",
          items: ["Ankle circles — 10 each way", "Band inversion — 1×15", "BW heel raises — 1×10"],
          notes: "Before every run — especially any run with downhill strides.",
        },
        {
          name: "Running cues",
          items: [
            "Cadence 175+ on easy runs",
            "Half-shoe-width wider stance on technical descents",
            "Winter rule: protect the vertical — treadmill weeks silently zero it out",
          ],
        },
      ],
    },
    sessionB: {
      name: "Gym Doses & Flare Protocol",
      exercises: [
        {
          name: "In-gym tendon doses — performed inside Sessions A & B",
          items: [
            {
              label: "Mon — end of Session A",
              subs: ["Weighted SL heel raise 4×6/leg — 2-min rests", "Seated calf raise 3×8 — 90s rests"],
            },
            {
              label: "Wed — end of Session B",
              subs: ["Band inversion 3×12/foot", "Bodyweight SL heel raise 2×15/leg", "Toe yoga 2×10/foot"],
            },
          ],
          notes:
            "Full detail in the Strength tab. After 6 consecutive symptom-free months, Wednesday's volume dose may drop — Monday's heavy dose never does.",
        },
        {
          name: "Flare protocol — morning pain above baseline for >24h",
          items: [
            "1 — Drop plyometrics and downhill strides for 7 days; keep everything else",
            "2 — Still elevated after 3 days: reduce heel-raise load 20–30%, keep frequency",
            "3 — Still elevated: replace calf work with isometric holds 5×30s @ 80% effort, 60s rest, 1–2×/day",
            "4 — Sharp pain, gait change, swelling, or pop/snap: PT before the next session",
          ],
        },
      ],
    },
  },
};

export const REFERENCE = {
  notation: [
    { code: "Z1 / Z2 / Z3 / Z4", desc: "Intensity zones (see zone table below)" },
    { code: "TP", desc: "Trekking poles" },
    { code: "SL", desc: "Single leg" },
    { code: "HSR", desc: "Heavy slow resistance (tendon loading protocol)" },
    {
      code: "RPE",
      desc: "Rate of perceived exertion, 1–10 (CTS/Koop run scale): 4–5 recovery · 5–6 endurance ('all day') · 7 SteadyState (sub-LT) · 8–9 Tempo (LT) · 10 VO2 intervals. Lifting uses its own RPE: gym RPE 8 = 2 reps in reserve.",
    },
    { code: "ME", desc: "Muscular endurance session" },
    { code: "B2B", desc: "Back-to-back (Saturday long + Sunday on tired legs)" },
    { code: "Miles", desc: "Equivalent-flat miles. Respect time on feet and the tendon over mile targets." },
  ],
  zoneTable: [
    {
      zone: "Z1 · Recovery (RecoveryRun)",
      hr: "<90% of AeT HR · RPE 4–5",
      feel: "Conversational, restorative",
      use: "Recovery days, warmups",
    },
    {
      zone: "Z2 · Endurance (EnduranceRun)",
      hr: "90–100% of AeT HR · RPE 5–6",
      feel: "Full sentences, nose-breathable — the 'all day' pace",
      use: "The bulk of your running — easy runs, long mountain days",
    },
    {
      zone: "Z3 · High-End Aerobic (SteadyState)",
      hr: "AeT to LT · RPE 7",
      feel: "Strong but sustainable — above endurance, below threshold",
      use: "SteadyState uphill intervals: 20–60 min reps, 5–8:1 work:rest",
    },
    {
      zone: "Z4 · Threshold & Above (Tempo · VO2)",
      hr: "≥LT · Tempo RPE 8–9 · VO2 RPE 10",
      feel: "Tempo: short answers, hard breathing. VO2: max repeatable",
      use: "Tempo: 8–20 min reps, 2:1 rest · VO2: 2–4 min reps, 1:1 rest",
    },
  ],
  trafficLight: [
    { if: "Tendon at baseline, energy good, sleep good", then: "Proceed with planned session." },
    {
      if: "Tendon mildly above baseline (≤1/10), energy reduced",
      then: "Reduce planned session by 25%, drop intensity.",
    },
    {
      if: "Tendon symptomatic (2–4/10), or 2+ poor sleep nights",
      then: "Skip the hard session, replace with easy Z1 or rest.",
    },
    {
      if: "Tendon painful (>4/10) or any sharp pain",
      then: "Stop. Re-read tendon framework. See PT before next session.",
    },
  ],
  hsrProtocol: {
    summary:
      "Tendon work is permanent maintenance (Phase D). Tempo is always 3s up / 3s down, and it is never deloaded.",
    rules: [
      "Heavy dose — Monday, in Session A: weighted SL heel raise 4×6/leg, 2-min rests",
      "Volume dose — Wednesday, in Session B: bodyweight SL heel raise 2×15/leg, 60s rests",
      "Daily micro-dose — 5 min: doming, toe yoga, band inversion, SL balance, calf stretches",
      "Hold at ~6RM. After 6 symptom-free months, Wednesday's dose may drop — Monday's never does",
      "Historical rehab ramp (wks 1–14): 12RM → 10RM → 8RM → 6RM",
    ],
    exercises: [
      {
        name: "Bilateral heel raise on step (knee straight)",
        notes: "Slow lower into dorsiflexion. Load with dumbbells, weighted pack, or vest.",
      },
      { name: "Bilateral heel raise on step (knee bent ~30°)", notes: "Soleus emphasis. Same loading principle." },
      {
        name: "Single-leg heel raise on step",
        notes: "Once cleared without pain. Start bodyweight, progress to weighted. Most tib-post-specific movement.",
      },
      {
        name: "Resisted ankle inversion (band)",
        notes: "3×15 slow reps, building to 3×8 with heavier band. Rotate in 1–2 per session.",
      },
      {
        name: "Foot doming / short foot exercise",
        notes: "2×30 with hold. Trains foot intrinsics, especially tib post's partners.",
      },
    ],
  },
};

export function getPhaseById(id) {
  return PHASES.find((p) => p.id === id);
}

export function getPhaseForWeek(weekNum) {
  return PHASES.find((p) => p.weeks.includes(weekNum));
}

export function getWeeksForPhase(id) {
  return PLAN.filter((w) => w.phaseId === id);
}

export function getPhaseIndex(id) {
  return PHASES.findIndex((p) => p.id === id);
}

// Anchor: Week 1 Day 1 (Monday). Change this if the plan moves.
export const PLAN_START_DATE = new Date(2026, 4, 11);

const MS_PER_DAY = 24 * 60 * 60 * 1000;

function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}

export function getDayDate(weekNum, dayIndex) {
  const d = new Date(PLAN_START_DATE);
  d.setDate(d.getDate() + (weekNum - 1) * 7 + dayIndex);
  return d;
}

export function getCurrentWeek(today = new Date()) {
  const days = Math.floor((startOfDay(today) - startOfDay(PLAN_START_DATE)) / MS_PER_DAY);
  return Math.min(Math.max(Math.floor(days / 7) + 1, 1), PLAN.length);
}

export function getCurrentDayIndex(today = new Date()) {
  return (today.getDay() + 6) % 7;
}

export function isCurrentDay(weekNum, dayIndex, today = new Date()) {
  return getCurrentWeek(today) === weekNum && getCurrentDayIndex(today) === dayIndex;
}

export function formatDayDate(weekNum, dayIndex) {
  return getDayDate(weekNum, dayIndex).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function formatWeekRange(weekNum) {
  const start = getDayDate(weekNum, 0);
  const end = getDayDate(weekNum, 6);
  const sameMonth = start.getMonth() === end.getMonth();
  const startStr = start.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  const endStr = end.toLocaleDateString("en-US", sameMonth ? { day: "numeric" } : { month: "short", day: "numeric" });
  return `${startStr} – ${endStr}`;
}

export function formatPhaseDateRange(phase) {
  const firstWeek = phase.weeks[0];
  const lastWeek = phase.weeks[phase.weeks.length - 1];
  const start = getDayDate(firstWeek, 0);
  const end = getDayDate(lastWeek, 6);
  const sameYear = start.getFullYear() === end.getFullYear();
  const startStr = start.toLocaleDateString(
    "en-US",
    sameYear ? { month: "short", day: "numeric" } : { month: "short", day: "numeric", year: "numeric" },
  );
  const endStr = end.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  return `${startStr} – ${endStr}`;
}
