import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raia Digna Amanda",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Background global dengan dot-grid */}
        <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-amber-50">
          {/* Dot-grid texture global */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.35] mix-blend-multiply pointer-events-none"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="dot-grid-global"
                width="28"
                height="28"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.4" fill="#818cf8" fillOpacity="0.35" />
              </pattern>
              <radialGradient id="dot-fade-global" cx="50%" cy="35%" r="75%">
                <stop offset="0%" stopColor="white" stopOpacity="0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.9" />
              </radialGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#dot-grid-global)" />
            <rect width="100%" height="100%" fill="url(#dot-fade-global)" />
          </svg>

          {/* Color wash global */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_15%_10%,rgba(99,102,241,0.18),transparent),radial-gradient(ellipse_70%_60%_at_85%_20%,rgba(236,72,153,0.14),transparent),radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(251,191,36,0.16),transparent)] pointer-events-none" />

          {/* Content dengan z-index di atas background */}
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}