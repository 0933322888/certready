/**
 * CertReady logo components extracted from CertReady_Logo_v3.html
 * Variants: full (hero), compact (navbar/footer), icon (favicon/small).
 * All use dark theme to match app background (#0B1120 / #111827).
 */

/** Full logo with tagline — for hero / marketing (280×60) */
export function CertReadyLogoFull({ className = '', width = 280, height = 60 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CertReady — Red Seal Exam Prep Canada"
    >
      <path
        d="M30 4 L52 12 L52 30 C52 42 42 51 30 55 C18 51 8 42 8 30 L8 12 Z"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M30 7 L49 14.5 L49 30 C49 40.5 40.5 48.8 30 52.5 C19.5 48.8 11 40.5 11 30 L11 14.5 Z"
        fill="#0EA5E9"
        fillOpacity="0.08"
      />
      <path
        d="M19 30 L25.5 37.5 L41 21"
        stroke="#0EA5E9"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="49.5" cy="11" r="7" fill="#0B1120" />
      <circle cx="49.5" cy="11" r="5.5" fill="#F59E0B" />
      <circle cx="49.5" cy="11" r="2.8" fill="#D97706" />
      <text
        x="68"
        y="35"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#F1F5F9"
        letterSpacing="-1"
      >
        Cert
      </text>
      <text
        x="138"
        y="35"
        fontFamily="'Arial Black', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="30"
        fill="#0EA5E9"
        letterSpacing="-1"
      >
        Ready
      </text>
      <text
        x="68"
        y="50"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill="#fff"
        letterSpacing="2.5"
      >
        RED SEAL EXAM PREP
      </text>
      <circle cx="217" cy="46.5" r="2" fill="#F59E0B" />
      <text
        x="225"
        y="50"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="9"
        fill="#fff"
        letterSpacing="2.5"
      >
        CANADA
      </text>
    </svg>
  );
}

/** Compact logo (wordmark only) — for navbar & footer (200×42) */
export function CertReadyLogoCompact({ className = '', width = 200, height = 42 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CertReady"
    >
      <path
        d="M21 3 L37 9 L37 21 C37 30 30 36.5 21 39.5 C12 36.5 5 30 5 21 L5 9 Z"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.5 L34.5 11 L34.5 21 C34.5 28.8 28.5 34.8 21 37.5 C13.5 34.8 7.5 28.8 7.5 21 L7.5 11 Z"
        fill="#0EA5E9"
        fillOpacity="0.08"
      />
      <path
        d="M13 21 L18.5 27.5 L29 15"
        stroke="#0EA5E9"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="35" cy="8" r="5.5" fill="#0B1120" />
      <circle cx="35" cy="8" r="4" fill="#F59E0B" />
      <circle cx="35" cy="8" r="2" fill="#D97706" />
      <text
        x="48"
        y="26"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#F1F5F9"
        letterSpacing="-0.5"
      >
        Cert
      </text>
      <text
        x="101"
        y="26"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="22"
        fill="#0EA5E9"
        letterSpacing="-0.5"
      >
        Ready
      </text>
    </svg>
  );
}

/** Icon mark only — for favicon / small uses (32×32) */
export function CertReadyLogoIcon({ className = '', size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="CertReady"
    >
      <rect width="32" height="32" rx="8" fill="#111827" />
      <path
        d="M16 4 L27 8.5 L27 16 C27 22.5 22.5 27 16 29.5 C9.5 27 5 22.5 5 16 L5 8.5 Z"
        fill="none"
        stroke="#0EA5E9"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M16 6 L25 10 L25 16 C25 21.5 21 25.8 16 28 C11 25.8 7 21.5 7 16 L7 10 Z"
        fill="#0EA5E9"
        fillOpacity="0.1"
      />
      <path
        d="M10 16 L14.5 21.5 L22 12"
        stroke="#0EA5E9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="25.5" cy="7" r="4.5" fill="#111827" />
      <circle cx="25.5" cy="7" r="3" fill="#F59E0B" />
    </svg>
  );
}
