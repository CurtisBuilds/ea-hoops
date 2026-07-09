"use client";
import { createSupabaseBrowserClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  isAdmin: boolean;
  currentLevel?: string;
  currentSession?: number;
}

export default function CoachNav({ name, isAdmin, currentLevel, currentSession }: Props) {
  const supabase = createSupabaseBrowserClient();
  const router = useRouter();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/sign-in");
  }

  const nav: React.CSSProperties = {
    position: "sticky", top: 0, zIndex: 100,
    background: "var(--ea-teal-900)",
    display: "flex", alignItems: "center",
    padding: "0 var(--space-5)",
    height: "var(--nav-height)",
    gap: "var(--space-3)",
    borderBottom: "2px solid var(--ea-orange-hot)",
  };
  const brand: React.CSSProperties = {
    fontFamily: "var(--font-display)", fontSize: 20,
    color: "var(--ea-white)", textTransform: "uppercase",
    letterSpacing: "0.08em", textDecoration: "none",
    display: "flex", alignItems: "center", gap: 8,
  };
  const crumb: React.CSSProperties = {
    color: "var(--ea-orange)", fontSize: "var(--fs-label)",
    fontFamily: "var(--font-body)", letterSpacing: "0.04em",
  };
  const spacer: React.CSSProperties = { flex: 1 };
  const nameStyle: React.CSSProperties = {
    color: "var(--ea-sky-light)", fontSize: "var(--fs-label)",
    fontFamily: "var(--font-body)",
  };
  const signOutBtn: React.CSSProperties = {
    background: "none", border: "1px solid var(--ea-teal-700)",
    color: "var(--ea-sky-light)", borderRadius: "var(--radius-button)",
    padding: "4px 12px", fontSize: 13, cursor: "pointer",
    fontFamily: "var(--font-body)",
  };

  return (
    <nav style={nav}>
      <a href="/coach" style={brand}>
        🏀 <span className="coach-nav-brand-text">EA Hoops</span>
      </a>
      {currentLevel && (
        <span style={crumb}>
          › <span className="coach-nav-brand-text">{currentLevel}</span>
          {currentSession !== undefined && (
            <> › <span className="coach-nav-name">Session {currentSession}</span></>
          )}
        </span>
      )}
      <div style={spacer} />
      {isAdmin && (
        <a href="/admin" style={{
          fontSize: 12, fontFamily: "var(--font-display)", letterSpacing: "0.08em",
          color: "var(--ea-teal-900)", background: "var(--ea-orange)",
          padding: "3px 10px", borderRadius: 4, textDecoration: "none", textTransform: "uppercase",
        }}>
          Admin
        </a>
      )}
      <span className="coach-nav-name" style={nameStyle}>{name}</span>
      <button style={signOutBtn} onClick={signOut}>Sign out</button>
    </nav>
  );
}
