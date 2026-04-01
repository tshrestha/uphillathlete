import { Link } from "react-router-dom";

const PLANS = [
  {
    title: "Aerobic Base + Strength",
    subtitle: "12-Week Program",
    desc: "Running plan: Johnston, Seiler, Lydiard · Strength: Lauersen, Beattie, Blagrove",
    color: "#4a9e6e",
    path: "/aerobic-base-plan",
  },
  {
    title: "Uphill Skimo Base",
    subtitle: "12-Week Program",
    desc: "Mountain endurance with vert progression, pole striding, and skimo-specific strength",
    color: "#3d8b8a",
    path: "/uphill-skimo-base-plan",
  },
];

export default function Home() {
  return (
    <div style={{
      fontFamily: "'Source Serif 4', 'Georgia', serif",
      background: "#0f1114",
      color: "#e8e4df",
      minHeight: "100vh",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600;8..60,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        a { text-decoration: none; color: inherit; }
        .plan-card { transition: all 0.2s ease; cursor: pointer; }
        .plan-card:hover { transform: translateY(-2px); }
      `}</style>

      <div style={{
        padding: "48px 24px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, transparent 100%)",
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: "3px",
          textTransform: "uppercase",
          color: "#888",
          marginBottom: "10px",
        }}>Training Plans</div>
        <h1 style={{
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.5px",
          marginBottom: "8px",
        }}>Uphill Athlete</h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "14px",
          color: "#888",
          lineHeight: 1.5,
        }}>Evidence-based training plans for mountain athletes.</p>
      </div>

      <div style={{ padding: "24px" }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "16px",
        }}>Select a Plan</div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {PLANS.map((plan) => (
            <Link key={plan.path} to={plan.path} className="plan-card" style={{
              display: "block",
              padding: "20px",
              borderRadius: "12px",
              border: `1px solid ${plan.color}33`,
              background: `linear-gradient(135deg, ${plan.color}12 0%, transparent 100%)`,
            }}>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: plan.color,
                marginBottom: "8px",
              }}>{plan.subtitle}</div>
              <div style={{
                fontSize: "20px",
                fontWeight: 700,
                letterSpacing: "-0.3px",
                marginBottom: "6px",
              }}>{plan.title}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12.5px",
                color: "#888",
                lineHeight: 1.5,
              }}>{plan.desc}</div>
              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                color: plan.color,
                marginTop: "12px",
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}>
                View Plan <span style={{ fontSize: "14px" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
