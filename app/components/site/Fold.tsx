import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

export function Fold({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [h, setH] = useState<number | null>(null);

  useLayoutEffect(() => {
    const fit = () => {
      if (ref.current) setH(Math.max(360, window.innerHeight - ref.current.getBoundingClientRect().top - window.scrollY));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, []);

  return (
    <div ref={ref} style={{ height: h ? h : "calc(100vh - 81px)", display: "flex", flexDirection: "column" }}>
      {children}
    </div>
  );
}
