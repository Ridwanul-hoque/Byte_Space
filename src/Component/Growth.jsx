import Image from "next/image";

const PARA_1 = [
  "Explore our curated selection of courses tailored to enhance",
  "your capabilities and accelerate your career journey.",
  "Whether you are looking to sharpen specific skills, gain",
  "industry expertise, or embark on a new career path entirely,",
  "we have the resources you need.",
];

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const CHECKLIST = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

const AVATARS = [1, 2, 3, 4, 5, 6, 1];

function StarIcon() {
  return (
    <svg className="bs-g-star" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        d="m6 .9 1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.6 2.9 10.4l.7-3.5L1 4.5l3.5-.4L6 .9Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth=".6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg className="bs-g-level-icon" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <rect x="1" y="6" width="1.8" height="3" rx=".5" fill="#4a4a55" />
      <rect x="4.1" y="3.8" width="1.8" height="5.2" rx=".5" fill="#4a4a55" />
      <rect x="7.2" y="1.5" width="1.8" height="7.5" rx=".5" fill="#4a4a55" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="bs-g-check" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <circle cx="6" cy="6" r="6" fill="var(--bs-royal)" />
      <path d="m3.4 6.2 1.8 1.8 3.5-3.7" fill="none" stroke="#fff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Spring({ id, turns = 3, rotate = -35, className }) {
  const r = 30;
  const ry = 11;
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
    <svg className={`bs-g-spring ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E9FF83" />
          <stop offset="0.5" stopColor="#BFFF37" />
          <stop offset="1" stopColor="#7FB814" />
        </linearGradient>
      </defs>
      <g
        transform={`rotate(${rotate} 50 50)`}
        fill="none"
        strokeWidth="15"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {runs.filter((run) => !run.front).map((run, i) => (
          <path key={`b${i}`} d={toPath(run)} stroke="#7FB814" />
        ))}
        {runs.filter((run) => run.front).map((run, i) => (
          <path key={`f${i}`} d={toPath(run)} stroke={`url(#${id})`} />
        ))}
      </g>
    </svg>
  );
}

function AvatarRow({ list, badge }) {
  return (
    <div className="bs-g-avatars">
      {list.map((n, i) => (
        <span key={i} className="bs-g-avatar">
          <Image src={`/image${n}.png`} alt="" width={40} height={40} />
        </span>
      ))}
      <span className="bs-g-badge">{badge}</span>
    </div>
  );
}

export default function Growth() {
  return (
    <>
      <section className="bs-growth">
        <div className="bs-g-stage">
          <div className="bs-g-block">
            <div className="bs-g-text bs-g-text-1">
              <h2 className="bs-g-heading">
                Your Path to Professional
                <br />
                Growth Starts Here!
              </h2>

              <p className="bs-g-para">
                {PARA_1.map((line) => (
                  <span key={line} className="bs-g-line">
                    {line}
                  </span>
                ))}
              </p>

              <dl className="bs-g-stats">
                {STATS.map((s) => (
                  <div key={s.label} className="bs-g-stat">
                    <dd className="bs-g-stat-value">{s.value}</dd>
                    <dt className="bs-g-stat-label">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bs-g-visual bs-g-visual-1">
              {/* course card */}
              <article className="bs-g-course">
                <div className="bs-g-thumb">
                  <Image
                    src="/feature1.jpg"
                    alt="Learn Figma from Basic"
                    fill
                    sizes="(max-width: 640px) 90vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="bs-g-chips">
                    <span className="bs-g-chip">17 Lessons</span>
                    <span className="bs-g-chip">2 hours 16 mins</span>
                    <span className="bs-g-chip">59 Comments</span>
                  </div>
                </div>
                <div className="bs-g-title-row">
                  <h3 className="bs-g-course-title">Learn Figma from Basic</h3>
                  <span className="bs-g-rating">
                    4.5
                    <StarIcon />
                  </span>
                </div>
                <p className="bs-g-author">
                  by <span>purepearl studio</span>
                </p>
                <div className="bs-g-meta">
                  <span className="bs-g-level">
                    <LevelIcon />
                    Beginner
                  </span>
                  <AvatarRow list={[1, 2, 3, 4]} badge="26+" />
                </div>
                <p className="bs-g-price">
                  $25<span>/lifetime</span>
                </p>
              </article>

              <div className="bs-g-man">
                <Image
                  src="/banner.png"
                  alt="Smiling student with headphones holding a laptop"
                  fill
                  sizes="(max-width: 640px) 80vw, 35vw"
                  style={{ objectFit: "contain", objectPosition: "center bottom" }}
                />
              </div>

              <div className="bs-g-progress">
                <p className="bs-g-progress-label">Learning Progress</p>
                <p className="bs-g-progress-value">55%</p>
                <div
                  className="bs-g-track"
                  role="progressbar"
                  aria-valuenow={55}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Learning progress"
                >
                  <span className="bs-g-fill" style={{ width: "55%" }} />
                </div>
              </div>

              <Spring id="bsGrowthSpring1" turns={3} rotate={-35} className="bs-g-spring-1" />
            </div>
          </div>

          {/* ================= Block 2: creator visual left, text right ================= */}
          <div className="bs-g-block">
            <div className="bs-g-visual bs-g-visual-2">
              {/* revenue cards */}
              <div className="bs-g-money bs-g-money-1">
                <p className="bs-g-money-title">Total Revenue</p>
                <p className="bs-g-money-sub">July 1-28</p>
                <p className="bs-g-money-value">$120.29</p>
                <div className="bs-g-money-track">
                  <span style={{ width: "52%" }} />
                </div>
              </div>

              <div className="bs-g-money bs-g-money-2">
                <p className="bs-g-money-title">Year to Date</p>
                <p className="bs-g-money-sub">2023</p>
                <p className="bs-g-money-value">$1,200.38</p>
                <span className="bs-g-money-pill">+125</span>
              </div>

              <div className="bs-g-woman">
                <Image
                  src="/girl1.png"
                  alt="Smiling creator with headphones holding a tablet"
                  fill
                  sizes="(max-width: 740px) 70vw, 35vw"
                  style={{ objectFit: "contain", objectPosition: "center bottom" }}
                />
              </div>

              <Spring id="bsGrowthSpring2" turns={3} rotate={-35} className="bs-g-spring-2" />

              {/* happy students */}
              <div className="bs-g-students">
                <p className="bs-g-students-title">Happy Students</p>
                <p className="bs-g-students-rating">
                  <b>4.5</b>
                  <em>(240)</em>
                  <span className="bs-g-students-star">
                    <StarIcon />
                  </span>
                </p>
                <AvatarRow list={AVATARS} badge="2K+" />
              </div>
            </div>

            <div className="bs-g-text bs-g-text-2">
              <h2 className="bs-g-heading">
                Create &amp; Manage
                <br />
                Courses Easily.
              </h2>

              <p className="bs-g-para">
                <span className="bs-g-line">
                  <strong>ByteSpace</strong> supports individuals or entities in the creation, publication,
                </span>
                <span className="bs-g-line">and administration of educational courses.</span>
              </p>

              <ul className="bs-g-list">
                {CHECKLIST.map((item) => (
                  <li key={item}>
                    <CheckIcon />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* 1 unit = 1 Figma px on the 769 wide frame */
        .bs-growth {
          --bs-u: min(calc(100vw / 769), 2.5px);
          --bs-royal: #1f35d6;
          --bs-lime: #c6ff3d;
          --bs-ink: #1a1a1f;
          position: relative;
          width: 100%;
          height: calc(774 * var(--bs-u));
          overflow: hidden;
          color: var(--bs-ink);
          background:
            radial-gradient(ellipse calc(210 * var(--bs-u)) calc(130 * var(--bs-u)) at 27% 4%, rgba(217, 255, 100, 0.5), rgba(217, 255, 100, 0)),
            radial-gradient(ellipse calc(130 * var(--bs-u)) calc(170 * var(--bs-u)) at 97% 15%, rgba(165, 178, 245, 0.42), rgba(165, 178, 245, 0)),
            radial-gradient(ellipse calc(100 * var(--bs-u)) calc(80 * var(--bs-u)) at 1% 50%, rgba(160, 175, 245, 0.38), rgba(160, 175, 245, 0)),
            radial-gradient(ellipse calc(170 * var(--bs-u)) calc(120 * var(--bs-u)) at 4% 89%, rgba(200, 255, 60, 0.5), rgba(200, 255, 60, 0)),
            radial-gradient(ellipse calc(130 * var(--bs-u)) calc(100 * var(--bs-u)) at 91% 93%, rgba(160, 175, 245, 0.42), rgba(160, 175, 245, 0)),
            #f8f8fa;
        }

        .bs-g-stage {
          position: absolute;
          top: 0;
          left: 50%;
          width: calc(769 * var(--bs-u));
          height: 100%;
          transform: translateX(-50%);
        }

        .bs-g-block {
          display: contents;
        }

        /* ---------- text ---------- */
        .bs-g-text {
          position: absolute;
        }

        .bs-g-text-1 {
          left: calc(66 * var(--bs-u));
          top: calc(104 * var(--bs-u));
        }

        .bs-g-text-2 {
          left: calc(396 * var(--bs-u));
          top: calc(452 * var(--bs-u));
        }

        .bs-g-heading {
          margin: 0;
          font-size: calc(21 * var(--bs-u));
          line-height: calc(28 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.01em;
          white-space: nowrap;
        }

        .bs-g-para {
          margin: calc(21.5 * var(--bs-u)) 0 0;
          font-size: calc(8.2 * var(--bs-u));
          line-height: calc(15.5 * var(--bs-u));
          font-weight: 300;
          color: #4f4f58;
        }

        .bs-g-text-2 .bs-g-para {
          margin-top: calc(22 * var(--bs-u));
          line-height: calc(15 * var(--bs-u));
        }

        .bs-g-para strong {
          font-weight: 600;
          color: var(--bs-ink);
        }

        .bs-g-line {
          display: block;
          white-space: nowrap;
        }

        /* stats */
        .bs-g-stats {
          display: flex;
          gap: calc(30 * var(--bs-u));
          margin: calc(25 * var(--bs-u)) 0 0;
        }

        .bs-g-stat {
          margin: 0;
        }

        .bs-g-stat dd,
        .bs-g-stat dt {
          margin: 0;
        }

        .bs-g-stat-value {
          font-size: calc(15 * var(--bs-u));
          line-height: calc(18 * var(--bs-u));
          font-weight: 600;
          color: var(--bs-royal);
        }

        .bs-g-stat-label {
          margin-top: calc(3 * var(--bs-u)) !important;
          font-size: calc(8 * var(--bs-u));
          line-height: calc(11 * var(--bs-u));
          font-weight: 300;
          color: #5a5a64;
        }

        /* checklist */
        .bs-g-list {
          margin: calc(18.5 * var(--bs-u)) 0 0;
          padding: 0;
          list-style: none;
        }

        .bs-g-list li {
          display: flex;
          align-items: center;
          gap: calc(5 * var(--bs-u));
          height: calc(21 * var(--bs-u));
          font-size: calc(8.3 * var(--bs-u));
          font-weight: 400;
          color: #22222a;
        }

        .bs-g-check {
          flex: none;
          width: calc(11 * var(--bs-u));
          height: calc(11 * var(--bs-u));
        }

        /* ---------- visual containers ---------- */
        .bs-g-visual {
          position: absolute;
        }

        .bs-g-visual-1 {
          left: calc(404 * var(--bs-u));
          top: calc(60 * var(--bs-u));
          width: calc(320 * var(--bs-u));
          height: calc(310 * var(--bs-u));
        }

        .bs-g-visual-2 {
          left: calc(60 * var(--bs-u));
          top: calc(410 * var(--bs-u));
          width: calc(310 * var(--bs-u));
          height: calc(315 * var(--bs-u));
        }

        .bs-g-visual p,
        .bs-g-visual h3 {
          margin: 0;
        }

        /* ---------- visual 1: course card ---------- */
        .bs-g-course {
          position: absolute;
          z-index: 1;
          left: 0;
          top: calc(6 * var(--bs-u));
          width: calc(197 * var(--bs-u));
          height: calc(204 * var(--bs-u));
          padding: calc(8 * var(--bs-u));
          border: 1px solid #e3e3e8;
          border-radius: calc(14 * var(--bs-u));
          background: #fff;
          box-shadow: 0 calc(4 * var(--bs-u)) calc(14 * var(--bs-u)) rgba(20, 20, 50, 0.05);
        }

        .bs-g-thumb {
          position: relative;
          height: calc(104 * var(--bs-u));
          border-radius: calc(8 * var(--bs-u));
          overflow: hidden;
          background: #e9e9ee;
        }

        .bs-g-chips {
          position: absolute;
          left: calc(7 * var(--bs-u));
          bottom: calc(10 * var(--bs-u));
          display: flex;
          gap: calc(5 * var(--bs-u));
        }

        .bs-g-chip {
          display: inline-flex;
          align-items: center;
          height: calc(14 * var(--bs-u));
          padding: 0 calc(6 * var(--bs-u));
          border-radius: 999px;
          background: rgba(235, 235, 238, 0.72);
          -webkit-backdrop-filter: blur(4px);
          backdrop-filter: blur(4px);
          color: #55555f;
          font-size: calc(6 * var(--bs-u));
          white-space: nowrap;
        }

        .bs-g-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: calc(10 * var(--bs-u));
          height: calc(14 * var(--bs-u));
        }

        .bs-g-course-title {
          font-size: calc(10.5 * var(--bs-u));
          line-height: calc(14 * var(--bs-u));
          font-weight: 600;
          white-space: nowrap;
        }

        .bs-g-rating {
          display: inline-flex;
          align-items: center;
          gap: calc(2 * var(--bs-u));
          font-size: calc(8 * var(--bs-u));
          color: #8b8b95;
        }

        .bs-g-star {
          width: calc(8 * var(--bs-u));
          height: calc(8 * var(--bs-u));
          color: #c9c9ce;
        }

        .bs-g-author {
          margin-top: calc(1 * var(--bs-u)) !important;
          font-size: calc(6 * var(--bs-u));
          line-height: calc(9 * var(--bs-u));
          color: #8b8b95;
        }

        .bs-g-author span {
          color: var(--bs-royal);
        }

        .bs-g-meta {
          display: flex;
          align-items: center;
          gap: calc(7 * var(--bs-u));
          margin-top: calc(9 * var(--bs-u));
          height: calc(18 * var(--bs-u));
        }

        .bs-g-level {
          display: inline-flex;
          align-items: center;
          gap: calc(4 * var(--bs-u));
          height: 100%;
          padding: 0 calc(8 * var(--bs-u));
          border-radius: 999px;
          background: #f3f3f5;
          color: #4a4a55;
          font-size: calc(6.5 * var(--bs-u));
        }

        .bs-g-level-icon {
          width: calc(7 * var(--bs-u));
          height: calc(7 * var(--bs-u));
        }

        .bs-g-price {
          margin-top: calc(7 * var(--bs-u)) !important;
          font-size: calc(10 * var(--bs-u));
          line-height: calc(12 * var(--bs-u));
          font-weight: 600;
          color: var(--bs-royal);
        }

        .bs-g-price span {
          margin-left: calc(1 * var(--bs-u));
          font-size: calc(6 * var(--bs-u));
          font-weight: 400;
          color: #8b8b95;
        }

        /* avatars (shared) */
        .bs-g-avatars {
          display: flex;
          align-items: center;
        }

        .bs-g-avatar {
          position: relative;
          flex: none;
          width: calc(17 * var(--bs-u));
          height: calc(17 * var(--bs-u));
          margin-left: calc(-5 * var(--bs-u));
          border: calc(1.2 * var(--bs-u)) solid #fff;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #c9cdea, #9aa2d6);
        }

        .bs-g-avatar:first-child {
          margin-left: 0;
        }

        .bs-g-avatar img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bs-g-badge {
          flex: none;
          display: grid;
          place-items: center;
          width: calc(17 * var(--bs-u));
          height: calc(17 * var(--bs-u));
          margin-left: calc(-4 * var(--bs-u));
          border-radius: 50%;
          background: var(--bs-lime);
          color: var(--bs-ink);
          font-size: calc(5.5 * var(--bs-u));
          font-weight: 600;
        }

        /* man + progress + spring */
        .bs-g-man {
          position: absolute;
          z-index: 2;
          left: calc(36 * var(--bs-u));
          top: calc(32 * var(--bs-u));
          width: calc(272 * var(--bs-u));
          height: calc(266 * var(--bs-u));
          filter: drop-shadow(0 calc(22 * var(--bs-u)) calc(18 * var(--bs-u)) rgba(20, 20, 45, 0.2));
        }

        .bs-g-progress {
          position: absolute;
          z-index: 4;
          left: calc(183 * var(--bs-u));
          top: calc(117 * var(--bs-u));
          width: calc(124 * var(--bs-u));
          height: calc(76 * var(--bs-u));
          padding: calc(11 * var(--bs-u)) calc(9 * var(--bs-u)) 0;
          border-radius: calc(8 * var(--bs-u));
          background: #fff;
          box-shadow: 0 calc(4 * var(--bs-u)) calc(14 * var(--bs-u)) rgba(20, 20, 50, 0.1);
        }

        .bs-g-progress-label {
          font-size: calc(7.5 * var(--bs-u));
          line-height: calc(10 * var(--bs-u));
          color: #3a3d52;
        }

        .bs-g-progress-value {
          margin-top: calc(7 * var(--bs-u)) !important;
          font-size: calc(26 * var(--bs-u));
          line-height: calc(30 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .bs-g-track {
          margin-top: calc(4 * var(--bs-u));
          height: calc(4 * var(--bs-u));
          border-radius: 999px;
          background: #e6e8ef;
          overflow: hidden;
        }

        .bs-g-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: var(--bs-lime);
        }

        .bs-g-spring {
          position: absolute;
          z-index: 5;
          overflow: visible;
          pointer-events: none;
        }

        .bs-g-spring-1 {
          left: calc(232 * var(--bs-u));
          top: calc(49 * var(--bs-u));
          width: calc(85 * var(--bs-u));
          height: calc(90 * var(--bs-u));
        }

        .bs-g-money {
          position: absolute;
          z-index: 1;
          padding: calc(8 * var(--bs-u));
          border-radius: calc(8 * var(--bs-u));
          background: var(--bs-royal);
          color: #fff;
        }

        /* Shifted revenue cards right (closer toward the image) */
        .bs-g-money-1 {
          left: calc(52 * var(--bs-u));
          top: calc(52 * var(--bs-u));
          width: calc(124 * var(--bs-u));
          height: calc(63.5 * var(--bs-u));
        }

        .bs-g-money-2 {
          left: calc(52 * var(--bs-u));
          top: calc(130 * var(--bs-u));
          width: calc(71 * var(--bs-u));
          height: calc(71 * var(--bs-u));
        }

        .bs-g-money-title {
          font-size: calc(7.5 * var(--bs-u));
          line-height: calc(10 * var(--bs-u));
          font-weight: 400;
        }

        .bs-g-money-sub {
          margin-top: calc(0.5 * var(--bs-u)) !important;
          font-size: calc(5 * var(--bs-u));
          line-height: calc(7 * var(--bs-u));
          opacity: 0.75;
        }

        .bs-g-money-value {
          margin-top: calc(3 * var(--bs-u)) !important;
          font-size: calc(11.5 * var(--bs-u));
          line-height: calc(16 * var(--bs-u));
          font-weight: 600;
        }

        .bs-g-money-2 .bs-g-money-value {
          margin-top: calc(4 * var(--bs-u)) !important;
        }

        .bs-g-money-track {
          margin-top: calc(7 * var(--bs-u));
          height: calc(4 * var(--bs-u));
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.25);
          overflow: hidden;
        }

        .bs-g-money-track span {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: var(--bs-lime);
        }

        .bs-g-money-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: calc(4 * var(--bs-u));
          width: calc(21 * var(--bs-u));
          height: calc(13 * var(--bs-u));
          border-radius: 999px;
          background: var(--bs-lime);
          color: var(--bs-ink);
          font-size: calc(5.5 * var(--bs-u));
          font-weight: 600;
        }

        .bs-g-woman {
          position: absolute;
          z-index: 2;
          left: calc(30 * var(--bs-u));
          top: calc(-15 * var(--bs-u));
          width: calc(250 * var(--bs-u));
          height: calc(340 * var(--bs-u));
          filter: drop-shadow(0 calc(14 * var(--bs-u)) calc(14 * var(--bs-u)) rgba(20, 20, 45, 0.14));
        }

        /* Shifted spring shape further right */
        .bs-g-spring-2 {
          left: calc(205 * var(--bs-u));
          top: calc(50 * var(--bs-u));
          width: calc(87 * var(--bs-u));
          height: calc(91 * var(--bs-u));
          z-index: 3;
        }

        .bs-g-students {
          position: absolute;
          z-index: 4;
          left: calc(156 * var(--bs-u));
          top: calc(207 * var(--bs-u));
          width: calc(138 * var(--bs-u));
          height: calc(63 * var(--bs-u));
          padding: calc(8 * var(--bs-u)) calc(10 * var(--bs-u));
          border-radius: calc(6 * var(--bs-u));
          background: #fff;
          box-shadow: 0 calc(2 * var(--bs-u)) calc(10 * var(--bs-u)) rgba(20, 20, 50, 0.1);
        }

        .bs-g-students-title {
          font-size: calc(8 * var(--bs-u));
          line-height: calc(11 * var(--bs-u));
          font-weight: 500;
        }

        .bs-g-students-rating {
          display: flex;
          align-items: center;
          gap: calc(2 * var(--bs-u));
          margin-top: calc(1 * var(--bs-u)) !important;
          height: calc(9 * var(--bs-u));
          font-size: calc(6.5 * var(--bs-u));
        }

        .bs-g-students-rating b {
          font-weight: 500;
        }

        .bs-g-students-rating em {
          font-style: normal;
          color: #8b8b95;
        }

        .bs-g-students-star .bs-g-star {
          width: calc(7 * var(--bs-u));
          height: calc(7 * var(--bs-u));
          color: var(--bs-lime);
        }

        .bs-g-students .bs-g-avatars {
          margin-top: calc(4 * var(--bs-u));
        }

        .bs-g-students .bs-g-avatar {
          width: calc(20 * var(--bs-u));
          height: calc(20 * var(--bs-u));
          margin-left: calc(-7 * var(--bs-u));
        }

        .bs-g-students .bs-g-avatar:first-child {
          margin-left: 0;
        }

        .bs-g-students .bs-g-badge {
          width: calc(22 * var(--bs-u));
          height: calc(22 * var(--bs-u));
          margin-left: calc(-4 * var(--bs-u));
          font-size: calc(6.5 * var(--bs-u));
        }

        /* ---------- small screens ---------- */
        @media (max-width: 640px) {
          .bs-growth {
            --bs-u: calc((100vw - 32px) / 330);
            height: auto;
            padding: 40px 16px;
          }
          .bs-g-stage {
            position: static;
            width: 100%;
            height: auto;
            transform: none;
            display: flex;
            flex-direction: column;
            gap: 48px;
          }
          .bs-g-block {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 28px;
            width: 100%;
          }
          .bs-g-text {
            position: static;
            width: 100%;
          }
          .bs-g-visual {
            position: relative;
            left: auto;
            top: auto;
            flex: none;
          }
          .bs-g-heading { font-size: max(calc(21 * var(--bs-u)), 26px); line-height: 1.3; white-space: normal; }
          .bs-g-para, .bs-g-text-2 .bs-g-para { font-size: 14px; line-height: 1.6; }
          .bs-g-line { display: inline; white-space: normal; }
          .bs-g-line::after { content: " "; }
          .bs-g-stat-value { font-size: 24px; line-height: 1.2; }
          .bs-g-stat-label { font-size: 13px; line-height: 1.3; }
          .bs-g-list li { font-size: 15px; height: 32px; }
          .bs-g-check { width: 16px; height: 16px; }
        }
      `}</style>
    </>
  );
}