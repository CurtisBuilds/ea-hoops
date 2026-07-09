import { CURRICULUM } from "@/lib/curriculum";
import Link from "next/link";

export default function CoachHomePage() {
  const levelColors: Record<string, { accent: string; bg: string; badge: string }> = {
    rookie:  { accent: "#E8A838", bg: "#FEF3E2", badge: "#7A5200" },
    starter: { accent: "#2FA36B", bg: "#E8F5E9", badge: "#155C38" },
    allstar: { accent: "#0092DB", bg: "#E3F2FD", badge: "#004878" },
    mvp:     { accent: "#9C27B0", bg: "#F3E5F5", badge: "#4A0060" },
  };

  return (
    <main style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--space-6) var(--space-5)" }}>
      <div style={{ marginBottom: "var(--space-6)" }}>
        <h1 style={{
          fontFamily: "var(--font-display)", fontSize: "var(--fs-display-sm)",
          color: "var(--ea-navy)", textTransform: "uppercase",
          letterSpacing: "var(--ls-display)", lineHeight: "var(--lh-display)",
          marginBottom: "var(--space-2)",
        }}>
          Jr Basketball Curriculum
        </h1>
        <p style={{ color: "var(--ea-slate)", fontSize: "var(--fs-body-sm)" }}>
          4 levels · 12 sessions each · Tap a level to get started
        </p>
      </div>

      <div style={{ display: "grid", gap: "var(--space-4)", gridTemplateColumns: "1fr" }}>
        {CURRICULUM.map((level) => {
          const c = levelColors[level.id] ?? levelColors.rookie;
          return (
            <Link
              key={level.id}
              href={`/coach/${level.id}`}
              style={{ textDecoration: "none" }}
            >
              <div style={{
                background: "var(--ea-white)",
                border: `2px solid ${c.accent}`,
                borderRadius: "var(--radius-button)",
                padding: "var(--space-5) var(--space-6)",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                alignItems: "center",
                gap: "var(--space-5)",
                transition: "box-shadow 0.15s",
              }}>
                {/* Level badge */}
                <div style={{
                  background: c.accent,
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  padding: "6px 14px",
                  borderRadius: "var(--radius-badge)",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}>
                  {level.name}
                </div>

                {/* Description */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: "var(--font-display)", fontSize: 18,
                    color: "var(--ea-navy)", textTransform: "uppercase",
                    letterSpacing: "0.04em", marginBottom: 4,
                  }}>
                    {level.name}
                  </div>
                  <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--ea-slate)", lineHeight: 1.4 }}>
                    {level.description}
                  </div>
                </div>

                {/* Session count */}
                <div style={{
                  textAlign: "right", flexShrink: 0,
                  fontFamily: "var(--font-display)", fontSize: 28,
                  color: c.accent, lineHeight: 1,
                }}>
                  {level.sessions.length}
                  <div style={{ fontSize: 11, color: "var(--ea-slate)", fontFamily: "var(--font-body)", letterSpacing: "0.06em" }}>
                    SESSIONS
                  </div>
                </div>

                {/* Arrow */}
                <div style={{ color: c.accent, fontSize: 20, flexShrink: 0 }}>›</div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Skills checklist links */}
      <div style={{ marginTop: "var(--space-7)", padding: "var(--space-5)", background: "var(--ea-white)", borderRadius: "var(--radius-button)", boxShadow: "var(--shadow-card)" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 14, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ea-navy)", marginBottom: "var(--space-3)" }}>
          Skills Checklists (PDF)
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
          {CURRICULUM.map((level) => (
            <a key={level.id} href={level.skillsPdfUrl} target="_blank" rel="noopener noreferrer" style={{
              padding: "6px 16px", background: "var(--ea-mist)",
              borderRadius: "var(--radius-badge)", fontSize: "var(--fs-label)",
              color: "var(--ea-ink)", textDecoration: "none",
              fontFamily: "var(--font-body)",
            }}>
              {level.name} ↗
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
