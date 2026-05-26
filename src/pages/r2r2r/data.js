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
    volumeRange: "25 → 38 mi",
    vertRange: "3,000 → 6,000 ft",
    narrative:
      "Aerobic volume increases meaningfully. Two key sessions per week emerge: a long Z2 run on the weekend, and a mid-week Z2 run with introductory hill repeats or downhill cruising. Strength work shifts to heavy compound lifts.",
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
    name: "Specific Build",
    weeks: [13, 14, 15, 16, 17, 18],
    color: "#a8431f",
    focus: "ME · Descent · Heat",
    volumeRange: "35 → 50 mi",
    vertRange: "6,000 → 10,000 ft",
    narrative:
      "The plan begins to look like R2R2R. Long back-to-back weekends. Muscular endurance work with weighted vest/pack. First descent-focused long efforts. Trekking poles introduced. Long climbs at sub-AeT effort. Heat block begins Week 17.",
    selfCheck: [
      "Tendon: still quiet?",
      "Recovery between long days: feasible?",
      "Can you fuel 60–80 g/hour without GI issues?",
      "Sauna sessions tolerable?",
    ],
  },
  {
    id: "phase-4",
    num: 4,
    name: "Peak & Taper",
    weeks: [19, 20, 21, 22, 23, 24],
    color: "#5d6b4f",
    focus: "Specificity · Taper",
    volumeRange: "55 → taper to 25",
    vertRange: "12,000 → taper",
    narrative:
      "Two peak weeks (19, 21) bracketing one recovery week (20). The biggest single days. Heat acclimation block runs through the last 2.5 weeks. The final 10 days are taper. The tendon's voice still wins, every time.",
    selfCheck: [
      "Tendon's voice wins. Every time. The schedule is a suggestion; the tendon's response is data.",
      "Easy days are easy. Hard days are hard. Nothing lives in the middle.",
      "Resist the urge to 'test' fitness with extra hard workouts in the final two weeks.",
    ],
  },
];

export const WORKOUT_TYPES = {
  rest: { label: "Rest", icon: "○", color: "#6b5840" },
  strength: { label: "Strength", icon: "⬥", color: "#c97b4c" },
  easy: { label: "Easy Run", icon: "●", color: "#5d6b4f" },
  long: { label: "Long Z2", icon: "■", color: "#7a3214" },
  hills: { label: "Hill Repeats", icon: "▲", color: "#b8782b" },
  me_carry: { label: "ME Carry", icon: "⬢", color: "#8b5fbf" },
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
    name: "Open Base",
    totalMiles: 28,
    vert: 2200,
    note:
      "Strength shifts to Max-Strength block. First structured intensity (hill repeats) since the injury — keep honest, not max.",
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
    name: "Build",
    totalMiles: 31,
    vert: 2700,
    note: "Hill reps lengthen slightly. Long run extends.",
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
    name: "Poles Intro",
    totalMiles: 34,
    vert: 3200,
    note: "First sustained climb with trekking poles. Fueling practice on the long run starts now.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + HSR." },
      { day: "Thu", type: "hills", desc: "Hills: 6 mi, 6 × 2 min uphill Z3, downhill jog as recovery." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 14 mi, 3,000 ft vert. First time using trekking poles for sustained climb.",
      },
      { day: "Sun", type: "easy", desc: "Run 6 mi Z2." },
    ],
  },
  {
    week: 10,
    phaseId: "phase-2",
    name: "Recovery",
    totalMiles: 22,
    vert: 1500,
    note: "⟳ RECOVERY week. Light strength. No hills.",
    deload: true,
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (light) + HSR." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (light) + HSR." },
      { day: "Thu", type: "easy", desc: "Run 4 mi Z2 (no hills)." },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 9 mi, 1,500 ft vert." },
      { day: "Sun", type: "rest", desc: "Rest or 45 min easy walk." },
    ],
  },
  {
    week: 11,
    phaseId: "phase-2",
    name: "Build",
    totalMiles: 35,
    vert: 3500,
    note: "First deliberate descent on the long run. Controlled, not fast.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + 8 × strides." },
      { day: "Thu", type: "hills", desc: "Hills: 7 mi, 5 × 3 min uphill Z3." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 15 mi, 3,500 ft vert. Introduce a deliberate 1-mile descent at controlled (not fast) pace.",
      },
      { day: "Sun", type: "easy", desc: "Run 6 mi Z2." },
    ],
  },
  {
    week: 12,
    phaseId: "phase-2",
    name: "Top of Base",
    totalMiles: 38,
    vert: 4000,
    note: "End-of-base test. AeT drift, tendon, recovery, strength loads.",
    callout:
      "End of Phase 2 self-check: AeT drift <5%, tendon quiet, long run recovery within 2 days, hit projected strength loads.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + strides." },
      { day: "Thu", type: "hills", desc: "Hills: 7 mi, 4 × 4 min uphill Z3." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 17 mi, 4,000 ft vert. TP for ups. 2 miles of focused downhill cruising in the middle/end.",
      },
      { day: "Sun", type: "easy", desc: "Run 7 mi Z2." },
    ],
  },
  // ─── PHASE 3 — SPECIFIC BUILD ───
  {
    week: 13,
    phaseId: "phase-3",
    name: "First ME · First B2B",
    totalMiles: 40,
    vert: 5000,
    note: "Strength shifts to ME block. First weighted ME carry. First Sunday B2B on tired legs.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength shifts to ME block + HSR maintenance." },
      { day: "Tue", type: "easy", desc: "Run 7 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (ME) + 8 × strides." },
      {
        day: "Thu",
        type: "me_carry",
        desc:
          "ME session 1: 7 mi total. 4 × 8 min uphill at Z2 with 15 lb pack/vest. Walk fast on steep, jog mild. Goal: legs work, breathing comfortable. Easy jog down.",
      },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 16 mi, 4,000 ft. TP for ups." },
      { day: "Sun", type: "b2b", desc: "B2B: 6 mi Z2 on tired legs, 1,000 ft. First B2B. Walk if needed." },
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
      { day: "Thu", type: "me_carry", desc: "ME session 2: 8 mi. 5 × 8 min uphill Z2 with 15 lb pack." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 18 mi, 4,500 ft. Include 3 miles of sustained downhill at controlled pace.",
      },
      { day: "Sun", type: "b2b", desc: "B2B: 7 mi Z2 / 1,500 ft." },
    ],
  },
  {
    week: 15,
    phaseId: "phase-3",
    name: "First Canyon-Equivalent Day",
    totalMiles: 48,
    vert: 7000,
    note: "Heavier pack (18 lb). Saturday is your first canyon-equivalent vertical day.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (ME) + HSR." },
      { day: "Tue", type: "easy", desc: "Run 8 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (ME) + strides." },
      { day: "Thu", type: "me_carry", desc: "ME: 8 mi. 4 × 12 min uphill Z2 with 18 lb pack." },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 20 mi, 5,000 ft vert. First canyon-equivalent vertical day. TP." },
      { day: "Sun", type: "b2b", desc: "B2B: 8 mi Z2 / 1,500 ft." },
    ],
  },
  {
    week: 16,
    phaseId: "phase-3",
    name: "Recovery",
    totalMiles: 28,
    vert: 2500,
    note: "⟳ RECOVERY week before heat block begins.",
    deload: true,
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (light) + HSR." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (light)." },
      { day: "Thu", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest." },
      { day: "Sat", type: "long", desc: "Long Z2: 12 mi, 2,500 ft." },
      { day: "Sun", type: "easy", desc: "Run 5 mi Z2." },
    ],
  },
  {
    week: 17,
    phaseId: "phase-3",
    name: "Heat Block Begins",
    totalMiles: 50,
    vert: 7500,
    note:
      "Heat acclimation begins: 4 sauna sessions/week, 20–30 min post-exercise. Race-day fueling rehearsal on the long run.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (ME) + HSR + sauna 1." },
      { day: "Tue", type: "easy", desc: "Run 8 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + sauna 2." },
      { day: "Thu", type: "me_carry", desc: "ME: 9 mi. 5 × 10 min uphill Z2 with 20 lb pack + sauna 3 if time." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 22 mi, 5,500 ft. TP. Practice race-day fueling: 60–80 g carbs/hour.",
      },
      { day: "Sun", type: "b2b", desc: "B2B: 8 mi Z2 / 2,000 ft + sauna 4." },
    ],
  },
  {
    week: 18,
    phaseId: "phase-3",
    name: "Top of Specific Build",
    totalMiles: 52,
    vert: 8500,
    note: "Race-day gear simulation. Bring everything you'd carry on race day.",
    callout:
      "End of Phase 3 self-check: tendon quiet, recovery between long days feasible, fueling 60–80 g/hour without GI issues, sauna sessions tolerable.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (ME) + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 9 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + sauna." },
      { day: "Thu", type: "me_carry", desc: "ME: 9 mi. 4 × 15 min uphill Z2 with 20 lb pack." },
      { day: "Fri", type: "rest", desc: "Rest." },
      {
        day: "Sat",
        type: "long",
        desc: "Long Z2: 24 mi, 6,000 ft. TP. Race-day fueling rehearsal. Bring all the gear you'd carry race day.",
      },
      { day: "Sun", type: "b2b", desc: "B2B: 10 mi Z2 / 2,000 ft + sauna." },
    ],
  },
  // ─── PHASE 4 — PEAK & TAPER ───
  {
    week: 19,
    phaseId: "phase-4",
    name: "First Peak",
    totalMiles: 55,
    vert: 9500,
    note:
      "Biggest single training day so far. Full fueling + gear simulation. Pre-dawn start to simulate cold/heat transitions.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (ME) + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 8 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + sauna." },
      { day: "Thu", type: "me_carry", desc: "ME: 8 mi. 3 × 20 min uphill Z2 with 20 lb pack." },
      { day: "Fri", type: "rest", desc: "Rest. Sauna." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Big day: 26 mi, 7,000 ft. Biggest single training day. TP. Full fueling and gear simulation. Pre-dawn start for cold/heat transitions.",
      },
      {
        day: "Sun",
        type: "b2b",
        desc: "B2B: 12 mi Z2, 2,500 ft. Walk if needed; the goal is time on feet on damaged legs.",
      },
    ],
  },
  {
    week: 20,
    phaseId: "phase-4",
    name: "Recovery Week",
    totalMiles: 30,
    vert: 3000,
    note: "⟳ RECOVERY week between peaks. Easy long run, gear-free OK.",
    deload: true,
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (light, low volume) + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (light) + sauna." },
      { day: "Thu", type: "easy", desc: "Run 6 mi Z2." },
      { day: "Fri", type: "rest", desc: "Rest + sauna." },
      { day: "Sat", type: "long", desc: "Long Z2: 14 mi, 3,000 ft. Easy pace, gear-free if you want." },
      { day: "Sun", type: "easy", desc: "Run 5 mi Z2 + sauna." },
    ],
  },
  {
    week: 21,
    phaseId: "phase-4",
    name: "Peak Week",
    totalMiles: 60,
    vert: 11000,
    note: "The summit. Demands more than race day in distance × vertical × specificity. Last full R2R2R rehearsal.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 8 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B + sauna." },
      { day: "Thu", type: "me_carry", desc: "ME: 8 mi. 4 × 15 min uphill Z2 with 20 lb pack." },
      { day: "Fri", type: "rest", desc: "Rest + sauna." },
      {
        day: "Sat",
        type: "long",
        desc:
          "Peak day: 28 mi, 8,000 ft. Last full R2R2R rehearsal. TP. All race-day gear, fueling, hydration. Try to run on hottest part of the day if safe.",
      },
      { day: "Sun", type: "b2b", desc: "B2B: 12 mi Z2, 2,500 ft. Last hard B2B before race." },
    ],
  },
  {
    week: 22,
    phaseId: "phase-4",
    name: "Begin Taper",
    totalMiles: 40,
    vert: 5000,
    note: "Volume drops ~33%. Intensity briefly maintained to preserve fitness.",
    days: [
      { day: "Mon", type: "strength", desc: "Strength A (light, maintenance) + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 6 mi Z2." },
      { day: "Wed", type: "strength", desc: "Strength B (light) + sauna." },
      { day: "Thu", type: "me_carry", desc: "Light ME: 6 mi. 3 × 8 min uphill Z2 with 15 lb pack. Sauna." },
      { day: "Fri", type: "rest", desc: "Rest + sauna." },
      { day: "Sat", type: "long", desc: "Long Z2: 18 mi, 4,000 ft. Comfortable, not stressful." },
      { day: "Sun", type: "easy", desc: "Run 6 mi Z2 + sauna." },
    ],
  },
  {
    week: 23,
    phaseId: "phase-4",
    name: "Deep Taper",
    totalMiles: 25,
    vert: 2000,
    note: "Significant volume cut. Maintain feel, not fitness. Strength is movement-quality only.",
    deload: true,
    days: [
      { day: "Mon", type: "strength", desc: "Strength (very light, 50% load, movement quality) + HSR + sauna." },
      { day: "Tue", type: "easy", desc: "Run 5 mi Z2 + 4 × strides." },
      { day: "Wed", type: "rest", desc: "Rest + sauna." },
      { day: "Thu", type: "easy", desc: "Run 4 mi Z2 + 4 × strides." },
      { day: "Fri", type: "rest", desc: "Rest + sauna." },
      { day: "Sat", type: "long", desc: "Long Z2: 10 mi, 2,000 ft. Easy." },
      { day: "Sun", type: "easy", desc: "Run 4 mi Z2 + sauna." },
    ],
  },
  {
    week: 24,
    phaseId: "phase-4",
    name: "Race Week",
    totalMiles: 13,
    vert: 0,
    note: "Race week. Nothing new. Trust the work.",
    callout:
      "Two rules that should never be broken: (1) The tendon's voice wins. (2) Easy days are easy, hard days are hard, nothing lives in the middle.",
    days: [
      { day: "Mon", type: "race_taper", desc: "Run 4 mi Z2 + strides + sauna." },
      { day: "Tue", type: "race_taper", desc: "Run 3 mi Z2 (very easy) + sauna." },
      {
        day: "Wed",
        type: "travel",
        desc: "Travel to Grand Canyon. Run 2 mi shakeout at trailhead elevation. Hydrate.",
      },
      { day: "Thu", type: "travel", desc: "2 mi shakeout. Final gear check. Hike rim 30 min. Eat 8–10 g/kg carbs." },
      { day: "Fri", type: "rest", desc: "Rest. Sleep early. Lay out everything." },
      {
        day: "Sat",
        type: "race",
        desc: "R2R2R. South Kaibab → North Kaibab → South Kaibab. ~42 mi, ~11k ft up / ~11k ft down.",
      },
      { day: "Sun", type: "rest", desc: "Rest. Walk only." },
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
          notes: "Bilateral heel raise on step (3s up, 3s down). Straight knee + bent knee. Single-leg when cleared.",
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
          notes: "Same as Session A. 48+ hours between HSR sessions.",
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
        { name: "HSR Calf", sets: "3×8 (heavy)", rest: "60s", notes: "Progress load. 3s eccentric." },
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
    title: "Block 3 · Muscular Endurance (Weeks 13–18)",
    subtitle:
      "Specific to canyon demands. Reps go up, loads stay moderate-heavy, tempo controlled. Sessions feel like the strength version of an ultra: long, sustained, eventually grinding.",
    sessionA: {
      name: "Session A — Heavy Compound + ME Circuit",
      exercises: [
        {
          name: "Back Squat",
          sets: "3×6 @75% 1RM",
          rest: "2 min",
          notes: "Maintenance heavy. Preserve strength built in Phase 2.",
        },
        { name: "Romanian Deadlift", sets: "3×6", rest: "2 min", notes: "Moderate-heavy. Posterior chain." },
        {
          name: "ME Circuit · 3 rounds",
          sets: "Loaded continuous",
          rest: "90s between rounds",
          notes:
            "Walking lunge ×20 (15–20 lb) · Step-up ×12/side · SL calf raise ×15/side · Plank with reach ×10/side.",
        },
      ],
    },
    sessionB: {
      name: "Session B — Single-Leg ME Emphasis",
      exercises: [
        { name: "Front Squat", sets: "3×6", rest: "2 min", notes: "Maintain quad strength." },
        { name: "Trap Bar Deadlift", sets: "3×6", rest: "2 min", notes: "Heavy. Total-body pull." },
        {
          name: "ME Circuit · 3 rounds",
          sets: "Loaded continuous",
          rest: "90s between rounds",
          notes:
            "Bulgarian split squat ×12/side (weighted) · Backward lunge ×12/side (weighted — protects quads for downhill) · SL Romanian deadlift ×10/side · SL pogo hops ×15/side.",
        },
        { name: "Hollow Body or Side Plank Rotations", sets: "3×30s", rest: "45s", notes: "Core finisher." },
      ],
    },
  },
  "phase-4": {
    title: "Block 4 · Maintenance (Weeks 19–24)",
    subtitle:
      "Reduce volume ~30%; preserve neural patterns. Drop heaviest sets, keep one heavy and one ME session weekly. By week 23, sessions are 30 min, light, movement-quality. Week 24: no strength.",
    sessionA: {
      name: "Session A — Heavy Maintenance",
      exercises: [
        {
          name: "Back Squat",
          sets: "3×4 (peak load)",
          rest: "2–3 min",
          notes: "Maintain Phase 2 loads. Fewer sets to manage fatigue.",
        },
        { name: "Romanian Deadlift", sets: "3×5", rest: "2 min", notes: "Maintain. Don't push new PRs." },
        {
          name: "Bulgarian Split Squat (weighted)",
          sets: "2×6/side",
          rest: "90s",
          notes: "Reduced volume from Phase 3.",
        },
        { name: "SL Calf Raise (weighted)", sets: "3×8/side", rest: "60s", notes: "Tendon protection through race." },
        { name: "Pallof Press", sets: "2×10/side", rest: "45s", notes: "Core maintenance." },
      ],
    },
    sessionB: {
      name: "Session B — ME Maintenance",
      exercises: [
        { name: "Front Squat or Trap Bar DL", sets: "3×5", rest: "2 min", notes: "Maintain. Moderate load." },
        {
          name: "ME Circuit · 2 rounds",
          sets: "Loaded continuous",
          rest: "90s between rounds",
          notes: "Walking lunge ×15 · Backward lunge ×10/side · SL RDL ×8/side. Reduced from Phase 3.",
        },
        { name: "Hollow Body Hold", sets: "2×30s", rest: "45s", notes: "Core." },
        { name: "Foot Intrinsic Work", sets: "5 min", rest: "—", notes: "Daily through race week. Keep arch active." },
        {
          name: "Week 23 note",
          sets: "—",
          rest: "—",
          notes: "Sessions drop to 30 min, light, movement-quality only. Week 24: no strength.",
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
    { code: "ME", desc: "Muscular endurance session" },
    { code: "B2B", desc: "Back-to-back (Saturday long + Sunday on tired legs)" },
    { code: "Miles", desc: "Equivalent-flat miles. Respect time on feet and the tendon over mile targets." },
  ],
  zoneTable: [
    { zone: "Z1 · Recovery", hr: "<90% of AeT HR", feel: "Conversational, restorative", use: "Recovery days, warmups" },
    {
      zone: "Z2 · Aerobic Base",
      hr: "90–100% of AeT HR",
      feel: "Full sentences, nose-breathable",
      use: "The bulk of your running",
    },
    {
      zone: "Z3 · Tempo / No Man's Land",
      hr: "AeT to LT",
      feel: "Choppy sentences, comfortably hard",
      use: "Used sparingly — sub-threshold long efforts only",
    },
    {
      zone: "Z4 · Threshold and Above",
      hr: "≥LT",
      feel: "Short answers, hard breathing",
      use: "Hill repeats, intervals in late phases",
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
      "Heavy Slow Resistance, 3×/week with ≥48 hours between sessions. Tempo: 3s up, 3s down. Start at ~12RM, progress to 6RM over weeks 1–14.",
    progression:
      "12RM (wks 1–2) → 10RM (wks 3–4) → 8RM (wks 5–8) → 6RM (wks 9–14). Add load when reps feel controlled.",
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
  raceDayPacing: {
    intro: "Conserve aggressively in segments 1 and 2; finish strong in segments 3 and 4.",
    segments: [
      {
        name: "Segment 1 — SK Descent",
        stats: "~7 mi · −4,800 ft · 1:15–1:45 hr",
        bullets: [
          "Slowest sustainable downhill technique. Quad savings here = quad reserves at the end.",
          "Heart rate well below AeT — should feel like a warmup.",
          "Trekking poles deployed.",
          "Fuel: 80 g carbs, 0.5 L fluid.",
        ],
      },
      {
        name: "Segment 2 — Box + N Rim Climb",
        stats: "~14 mi · +5,800 ft · 4–5 hr",
        bullets: [
          "Steady Z2 effort. Run flats and gentle ups; hike anything over ~8% grade.",
          "Fuel: 80–100 g carbs/hr, 0.5–0.75 L/hr.",
          "Long, sustained section. Rhythm and patience. Don't surge.",
          "At N Rim turnaround: top off fluids, eat real food, briefly stretch, restart.",
        ],
      },
      {
        name: "Segment 3 — N Rim Descent",
        stats: "~14 mi · −5,800 ft · 2:30–3:30 hr",
        bullets: [
          "Most dangerous segment. Quads warmed up but not yet destroyed. Tempting to fly down.",
          "Cruise. Use poles defensively. Land with bent knees, short stride.",
          "Heart rate moderate (Z2). Effort relaxed even though pace is fast.",
          "Eating may feel harder; force it.",
        ],
      },
      {
        name: "Segment 4 — SK Climb to S Rim",
        stats: "~7 mi · +4,800 ft · 2:30–3:30 hr",
        bullets: [
          "The crux. Hottest, hardest, most fatigued.",
          "Hike all of it except briefly runnable trailhead flats. Plant poles aggressively.",
          "Fuel: continue 80 g/hr even with no appetite. Switch from gels to fruit, soda, salted nuts, real food.",
          "Manage heat: dunk shirt and hat at every water source, eat ice if available, slow down before overheating, not after.",
          "Mantra: short steps, steady breathing, don't stop unless you need to.",
        ],
      },
    ],
    heat: [
      "Start before sunrise (3–5 AM) if temperatures will exceed 80°F at the bottom by midday.",
      "Goal: be on the climb up SK before noon if possible.",
      "Carry a buff or light cap that can be soaked.",
      "Dunk every shirt/hat opportunity in every water source.",
      "Chills, stop sweating, or nausea → heat illness warning. Stop and cool down.",
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
  return Math.min(Math.max(Math.floor(days / 7) + 1, 1), 24);
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
