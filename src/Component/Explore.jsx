/* ---------- icons (16 x 16, dark shapes with lime details) ---------- */

function DesignIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      {/* pencil */}
      <rect x="6.7" y="1.2" width="2.6" height="10.6" rx=".7" fill="currentColor" transform="rotate(45 8 8)" />
      <path d="M2.2 13.8 3 10.9l2.1 2.1Z" fill="currentColor" />
      {/* ruler / brush crossing it */}
      <rect
        x="6.6"
        y="1.2"
        width="2.8"
        height="10.6"
        rx=".7"
        fill="currentColor"
        stroke="var(--bs-lime)"
        strokeWidth=".9"
        transform="rotate(-45 8 8)"
      />
    </svg>
  );
}

function DevelopmentIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="3.4" y="1" width="9.2" height="14" rx="2.2" fill="currentColor" />
      <path
        d="M6.9 5.9 5.5 8l1.4 2.1M9.1 5.9 10.5 8 9.1 10.1"
        fill="none"
        stroke="var(--bs-lime)"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SoftwareIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="10" height="7.2" rx="1.3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1.2 12h13.6l-.7 1.5H1.9Z" fill="currentColor" />
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="2.4" y="1.4" width="8.4" height="13.2" rx="1.1" fill="currentColor" />
      <rect x="10.4" y="6" width="3.2" height="8.6" rx=".9" fill="currentColor" />
      <g fill="var(--bs-lime)">
        <rect x="4.1" y="3.4" width="1.7" height="1.7" rx=".3" />
        <rect x="7.4" y="3.4" width="1.7" height="1.7" rx=".3" />
        <rect x="4.1" y="6.5" width="1.7" height="1.7" rx=".3" />
        <rect x="7.4" y="6.5" width="1.7" height="1.7" rx=".3" />
        <rect x="4.1" y="9.6" width="1.7" height="1.7" rx=".3" />
        <rect x="7.4" y="9.6" width="1.7" height="1.7" rx=".3" />
      </g>
    </svg>
  );
}

function MarketingIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M1.8 6.2 10.6 2.2v11.2L1.8 9.4Z" fill="currentColor" strokeLinejoin="round" />
      <rect x="1.6" y="5.9" width="3.2" height="3.8" rx=".9" fill="currentColor" />
      <path d="M4 9.6 4.9 14h2.2l-.9-4.1Z" fill="currentColor" />
      <path
        d="M12.4 5.2c1.3 1.5 1.3 4.1 0 5.6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhotographyIcon() {
  return (
    <svg className="bs-e-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <rect x="5.4" y="1.2" width="5.2" height="2.6" rx=".9" fill="currentColor" />
      <rect x="1.8" y="3" width="12.4" height="11" rx="2.1" fill="currentColor" />
      <circle cx="8" cy="7.7" r="1.7" fill="var(--bs-lime)" />
      <path d="M4.8 12.3c.3-2.1 1.7-2.9 3.2-2.9s2.9.8 3.2 2.9Z" fill="var(--bs-lime)" />
    </svg>
  );
}

/* ---------- content ---------- */

const TITLE = "Explore Diverse Learning Paths at Bytespace";

const DESC_LINES = [
  "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various",
  "fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
];

const CATEGORIES = [
  { name: "Design", Icon: DesignIcon },
  { name: "Development", Icon: DevelopmentIcon },
  { name: "IT & Software", Icon: SoftwareIcon },
  { name: "Business", Icon: BusinessIcon },
  { name: "Marketing", Icon: MarketingIcon },
  { name: "Photography", Icon: PhotographyIcon },
];

/* ---------- component ---------- */

export default function Explore() {
  return (
    <>
      <section className="bs-explore" aria-labelledby="bs-explore-title">
        <h2 id="bs-explore-title" className="bs-e-title">
          {TITLE}
        </h2>

        <p className="bs-e-desc">
          {DESC_LINES.map((line) => (
            <span key={line} className="bs-e-line">
              {line}
            </span>
          ))}
        </p>

        <ul className="bs-e-grid">
          {CATEGORIES.map(({ name, Icon }) => (
            <li key={name}>
              <a href={`/courses?category=${encodeURIComponent(name)}`} className="bs-e-card">
                <span className="bs-e-circle">
                  <Icon />
                </span>
                <span className="bs-e-label">{name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
        /* 1 unit = 1 Figma px on the 768 wide frame */
        .bs-explore {
          --bs-u: min(calc(100vw / 768), 2.5px);
          --bs-lime: #c6ff3d;
          --bs-ink: #0d0d14;
          position: relative;
          width: 100%;
          padding: calc(26 * var(--bs-u)) 0 calc(66 * var(--bs-u));
          background: #fbfbfc;
          color: var(--bs-ink);
          text-align: center;
        }

        /* faint lime glow along the bottom edge */
        .bs-explore::after {
          content: "";
          position: absolute;
          left: 12%;
          right: 12%;
          bottom: 0;
          height: calc(2 * var(--bs-u));
          background: linear-gradient(90deg, rgba(198, 255, 61, 0), rgba(198, 255, 61, 0.55), rgba(198, 255, 61, 0));
          pointer-events: none;
        }

        .bs-e-title {
          margin: 0;
          font-size: calc(17.5 * var(--bs-u));
          line-height: calc(24 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.005em;
        }

        .bs-e-desc {
          margin: calc(6.5 * var(--bs-u)) auto 0;
          font-size: calc(8.4 * var(--bs-u));
          line-height: calc(15 * var(--bs-u));
          font-weight: 300;
          color: #9b9ba6;
        }

        .bs-e-line {
          display: block;
          white-space: nowrap;
        }

        /* ---------- cards ---------- */
        .bs-e-grid {
          display: grid;
          grid-template-columns: repeat(6, calc(88 * var(--bs-u)));
          gap: calc(22 * var(--bs-u));
          justify-content: center;
          margin: calc(37.5 * var(--bs-u)) 0 0;
          padding: 0;
          list-style: none;
        }

        .bs-e-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          height: calc(88 * var(--bs-u));
          padding-top: calc(20 * var(--bs-u));
          border: 1px solid #dedee4;
          border-radius: calc(14 * var(--bs-u));
          background: #fff;
          color: var(--bs-ink);
          text-decoration: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease, transform 0.15s ease;
        }

        .bs-e-card:hover {
          border-color: var(--bs-lime);
          box-shadow: 0 calc(4 * var(--bs-u)) calc(14 * var(--bs-u)) rgba(20, 20, 50, 0.07);
          transform: translateY(-2px);
        }

        .bs-e-card:focus-visible {
          outline: 2px solid var(--bs-ink);
          outline-offset: 2px;
        }

        .bs-e-circle {
          display: grid;
          place-items: center;
          width: calc(28 * var(--bs-u));
          height: calc(28 * var(--bs-u));
          border-radius: 50%;
          background: var(--bs-lime);
          color: #14141c;
        }

        .bs-e-icon {
          width: calc(14 * var(--bs-u));
          height: calc(14 * var(--bs-u));
        }

        .bs-e-label {
          margin-top: calc(10 * var(--bs-u));
          font-size: calc(8.3 * var(--bs-u));
          line-height: calc(12 * var(--bs-u));
          font-weight: 500;
          white-space: nowrap;
        }

        /* ---------- small screens: 3 x 2 grid ---------- */
        @media (max-width: 640px) {
          .bs-explore {
            --bs-u: calc((100vw - 32px) / 300);
            padding: 32px 16px 48px;
          }
          .bs-e-title { font-size: max(calc(17.5 * var(--bs-u)), 22px); line-height: 1.3; }
          .bs-e-desc { font-size: 13px; line-height: 1.6; }
          .bs-e-line { display: inline; white-space: normal; }
          .bs-e-line::after { content: " "; }
          .bs-e-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: calc(12 * var(--bs-u));
            margin-top: 28px;
          }
          .bs-e-label { font-size: max(calc(8.3 * var(--bs-u)), 11px); white-space: normal; text-align: center; }
        }
      `}</style>
    </>
  );
}