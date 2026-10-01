/* ---------- content ---------- */

const TITLE_LINES = ["Unlock Your Potential as a", "Creator with ByteSpace"];

const DESC_LINES = [
  "Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a",
  "part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your",
  "expertise by publishing your finest course on the ByteSpace Course Library.",
];

/* ---------- 3D shapes (SVG approximations of the Figma renders) ---------- */

const LIME = ["#E9FF83", "#BFFF37", "#7FB814"];
const WHITE = ["#FFFFFF", "#F1F3FF", "#B7BFE6"];

function Spring({ id, colors, turns, r = 30, ry = 10, sw, rotate, className }) {
  const [top, base, deep] = colors;
  const pitch = 62 / turns;
  const pts = [];
  for (let t = 0; t <= turns * 2 * Math.PI + 1e-6; t += 0.18) {
    pts.push({
      x: 50 + r * Math.cos(t),
      y: 20 + (pitch * t) / (2 * Math.PI) + ry * Math.sin(t),
      front: Math.sin(t) >= 0,
    });
  }
  const runs = [];
  pts.forEach((p) => {
    const last = runs[runs.length - 1];
    if (last && last.front === p.front) {
      last.pts.push(p);
    } else {
      const run = { front: p.front, pts: [] };
      if (last) run.pts.push(last.pts[last.pts.length - 1]);
      run.pts.push(p);
      runs.push(run);
    }
  });
  const toPath = (run) =>
    run.pts.map((p, i) => `${i ? "L" : "M"}${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(" ");

  return (
    <svg className={`bs-c-shape ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="0.5" stopColor={base} />
          <stop offset="1" stopColor={deep} />
        </linearGradient>
      </defs>
      <g
        transform={`rotate(${rotate} 50 50)`}
        fill="none"
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {runs.filter((run) => !run.front).map((run, i) => (
          <path key={`b${i}`} d={toPath(run)} stroke={deep} />
        ))}
        {runs.filter((run) => run.front).map((run, i) => (
          <path key={`f${i}`} d={toPath(run)} stroke={`url(#${id})`} />
        ))}
      </g>
    </svg>
  );
}

function Ring({ id, colors, className }) {
  const [top, base, deep] = colors;
  return (
    <svg className={`bs-c-shape ${className}`} viewBox="0 0 122 96" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={top} />
          <stop offset="0.5" stopColor={base} />
          <stop offset="1" stopColor={deep} />
        </linearGradient>
      </defs>
      <g transform="rotate(-14 61 48)" fill="none">
        <ellipse cx="61" cy="48" rx="46" ry="33" stroke={`url(#${id})`} strokeWidth="27" />
        <ellipse cx="61" cy="48" rx="33" ry="20" stroke="rgba(20,40,0,.18)" strokeWidth="3" />
      </g>
    </svg>
  );
}

function Cone({ id, colors, className }) {
  const [light, mid, dark] = colors;
  return (
    <svg className={`bs-c-shape ${className}`} viewBox="0 0 72 78" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={light} />
          <stop offset="1" stopColor={mid} />
        </linearGradient>
      </defs>
      <g strokeLinejoin="round" strokeWidth="8">
        <polygon points="38,10 10,58 46,70" fill={`url(#${id})`} stroke={`url(#${id})`} />
        <polygon points="38,10 46,70 64,50" fill={dark} stroke={dark} />
      </g>
    </svg>
  );
}

function Cylinder({ id, colors, className }) {
  const [top, base, deep] = colors;
  return (
    <svg className={`bs-c-shape ${className}`} viewBox="0 0 100 168" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={base} />
          <stop offset="1" stopColor={deep} />
        </linearGradient>
      </defs>
      <g transform="rotate(-18 50 84)">
        <path d="M22 28 V140 C22 156 108 156 108 140 V28 Z" fill={`url(#${id})`} />
        <ellipse cx="65" cy="28" rx="43" ry="14" fill={top} />
      </g>
    </svg>
  );
}

/* ---------- component ---------- */

export default function Creator() {
  return (
    <>
      <section className="bs-creator" aria-labelledby="bs-creator-title">
        {/* shapes */}
        <div className="bs-c-stage" aria-hidden="true">
          <Spring id="bsCrSpringLime1" colors={LIME} turns={3} r={30} ry={11} sw={15} rotate={-40} className="bs-c-lime-spring-tl" />
          <Spring id="bsCrSpringWhite" colors={WHITE} turns={3} r={30} ry={10} sw={13} rotate={-15} className="bs-c-white-spring" />
          <Cone id="bsCrConeWhite" colors={["#FFFFFF", "#E3E7F7", "#C5CCEB"]} className="bs-c-white-cone" />
          <Ring id="bsCrRingLime" colors={["#E4FF7A", "#BFFF37", "#8CCB1A"]} className="bs-c-lime-ring" />
          <Cone id="bsCrConeLime" colors={["#E9FF83", "#BFFF37", "#8CCB1A"]} className="bs-c-lime-cone" />
          <Cylinder id="bsCrCylWhite" colors={["#FFFFFF", "#FFFFFF", "#D5DBF3"]} className="bs-c-white-cylinder" />
          <Spring id="bsCrSpringLime2" colors={LIME} turns={3} r={30} ry={11} sw={15} rotate={-30} className="bs-c-lime-spring-br" />
        </div>

        {/* text */}
        <div className="bs-c-content">
          <h2 id="bs-creator-title" className="bs-c-title">
            {TITLE_LINES.map((line) => (
              <span key={line} className="bs-c-title-line">
                {line}
              </span>
            ))}
          </h2>

          <p className="bs-c-desc">
            {DESC_LINES.map((line) => (
              <span key={line} className="bs-c-line">
                {line}
              </span>
            ))}
          </p>

          <a href="/join" className="bs-c-btn">
            Join as Creator
          </a>
        </div>
      </section>

      <style>{`
        /* 1 unit = 1 Figma px on the 766 wide frame */
        .bs-creator {
          --bs-u: min(calc(100vw / 766), 2.5px);
          --bs-blue: #1d34d8;
          --bs-lime: #bfff37;
          --bs-ink: #0f1226;
          position: relative;
          width: 100%;
          height: calc(258 * var(--bs-u));
          overflow: hidden;
          isolation: isolate;
          color: #fff;
          background-color: var(--bs-blue);
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.09) 1px, transparent 1px);
          background-size: calc(61 * var(--bs-u)) calc(61 * var(--bs-u));
          background-position: calc(2 * var(--bs-u)) calc(1 * var(--bs-u));
          text-align: center;
        }

        .bs-c-stage {
          position: absolute;
          top: 0;
          left: 50%;
          width: calc(766 * var(--bs-u));
          height: calc(258 * var(--bs-u));
          transform: translateX(-50%);
          z-index: 1;
        }

        /* ---------- text ---------- */
        .bs-c-content {
          position: absolute;
          z-index: 5;
          inset: 0 0 auto 0;
          padding-top: calc(45.5 * var(--bs-u));
        }

        .bs-c-title {
          margin: 0;
          font-size: calc(22 * var(--bs-u));
          line-height: calc(29 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.005em;
        }

        .bs-c-title-line {
          display: block;
          white-space: nowrap;
        }

        .bs-c-desc {
          margin: calc(20.5 * var(--bs-u)) 0 0;
          font-size: calc(8.5 * var(--bs-u));
          line-height: calc(15.5 * var(--bs-u));
          font-weight: 300;
          color: rgba(255, 255, 255, 0.88);
        }

        .bs-c-line {
          display: block;
          white-space: nowrap;
        }

        .bs-c-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: calc(93 * var(--bs-u));
          height: calc(24 * var(--bs-u));
          margin-top: calc(21.5 * var(--bs-u));
          border-radius: 999px;
          background: var(--bs-lime);
          color: var(--bs-ink);
          font-size: calc(8.5 * var(--bs-u));
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: transform 0.15s ease;
        }

        .bs-c-btn:hover {
          transform: translateY(-1px);
        }

        .bs-c-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* ---------- shapes ---------- */
        .bs-c-shape {
          position: absolute;
          overflow: visible;
          pointer-events: none;
        }

        .bs-c-lime-spring-tl {
          left: calc(-14 * var(--bs-u));
          top: calc(-22 * var(--bs-u));
          width: calc(118 * var(--bs-u));
          height: calc(118 * var(--bs-u));
        }

        .bs-c-white-spring {
          left: calc(106 * var(--bs-u));
          top: calc(12 * var(--bs-u));
          width: calc(72 * var(--bs-u));
          height: calc(84 * var(--bs-u));
        }

        .bs-c-white-cone {
          left: calc(-10 * var(--bs-u));
          top: calc(126 * var(--bs-u));
          width: calc(74 * var(--bs-u));
          height: calc(80 * var(--bs-u));
        }

        .bs-c-lime-ring {
          left: calc(40 * var(--bs-u));
          top: calc(192 * var(--bs-u));
          width: calc(124 * var(--bs-u));
          height: calc(98 * var(--bs-u));
        }

        .bs-c-lime-cone {
          left: calc(585 * var(--bs-u));
          top: calc(22 * var(--bs-u));
          width: calc(80 * var(--bs-u));
          height: calc(74 * var(--bs-u));
        }

        .bs-c-white-cylinder {
          left: calc(672 * var(--bs-u));
          top: calc(40 * var(--bs-u));
          width: calc(100 * var(--bs-u));
          height: calc(150 * var(--bs-u));
        }

        .bs-c-lime-spring-br {
          left: calc(632 * var(--bs-u));
          top: calc(160 * var(--bs-u));
          width: calc(120 * var(--bs-u));
          height: calc(110 * var(--bs-u));
        }

        /* ---------- small screens: text flows, shapes fade back ---------- */
        @media (max-width: 640px) {
          .bs-creator {
            --bs-u: calc(100vw / 480);
            height: auto;
            padding: 40px 20px 48px;
          }
          .bs-c-stage { opacity: 0.3; }
          .bs-c-content { position: relative; padding-top: 0; }
          .bs-c-title { font-size: 24px; line-height: 1.3; }
          .bs-c-title-line { display: inline; white-space: normal; }
          .bs-c-title-line::after { content: " "; }
          .bs-c-desc { margin-top: 16px; font-size: 13px; line-height: 1.6; }
          .bs-c-line { display: inline; white-space: normal; }
          .bs-c-line::after { content: " "; }
          .bs-c-btn { width: 140px; height: 38px; margin-top: 20px; font-size: 14px; }
        }
      `}</style>
    </>
  );
}