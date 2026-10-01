import Image from "next/image";


const AVATARS = [1, 2, 3, 4, 5, 6];

function SearchIcon() {
  return (
    <svg className="bs-b-search-icon" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
      <circle cx="5" cy="5" r="3.6" stroke="#5b5f73" strokeWidth="1.2" />
      <path d="m7.8 7.8 2.9 2.9" stroke="#5b5f73" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="bs-b-star" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        d="m6 .9 1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.6 2.9 10.4l.7-3.5L1 4.5l3.5-.4L6 .9Z"
        fill="var(--bs-lime)"
        stroke="#8CCB1A"
        strokeWidth=".6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Coil({ id, turns, r, ry, sw, top, base, deep, rotate, className }) {

  const pitch = 62 / turns;
  const y0 = 20;
  const pts = [];
  for (let t = 0; t <= turns * 2 * Math.PI + 1e-6; t += 0.18) {
    pts.push({
      x: 50 + r * Math.cos(t),
      y: y0 + (pitch * t) / (2 * Math.PI) + ry * Math.sin(t),
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
    <svg className={`bs-b-shape ${className}`} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
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

function Shapes() {
  return (
    <>

      <Coil id="bsCoilLime" turns={3} r={30} ry={11} sw={15} top="#E9FF83" base="#BFFF37" deep="#7FB814" rotate={-35} className="bs-b-coil-lime" />

      <Coil id="bsCoilWhiteL" turns={3} r={30} ry={10} sw={13} top="#FFFFFF" base="#F1F3FF" deep="#B7BFE6" rotate={-20} className="bs-b-coil-white-l" />

      <Coil id="bsCoilWhiteR" turns={4} r={30} ry={10} sw={12} top="#FFFFFF" base="#F1F3FF" deep="#B7BFE6" rotate={-22} className="bs-b-coil-white-r" />


      <svg className="bs-b-shape bs-b-ring" viewBox="0 0 122 96" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="bsRingG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#CDD3F0" />
          </linearGradient>
        </defs>
        <g transform="rotate(-14 61 48)" fill="none">
          <ellipse cx="61" cy="48" rx="46" ry="33" stroke="url(#bsRingG)" strokeWidth="27" />
          <ellipse cx="61" cy="48" rx="33" ry="20" stroke="rgba(120,130,200,.35)" strokeWidth="3" />
        </g>
      </svg>


      <svg className="bs-b-shape bs-b-cone" viewBox="0 0 72 78" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="bsConeL" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#E3E7F7" />
          </linearGradient>
        </defs>
        <g strokeLinejoin="round" strokeWidth="8">
          <polygon points="38,10 10,58 46,70" fill="url(#bsConeL)" stroke="url(#bsConeL)" />
          <polygon points="38,10 46,70 64,50" fill="#C5CCEB" stroke="#C5CCEB" />
        </g>
      </svg>


      <svg className="bs-b-shape bs-b-cylinder" viewBox="0 0 100 168" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="bsCylB" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#BFFF37" />
            <stop offset="1" stopColor="#94D31C" />
          </linearGradient>
        </defs>
        <g transform="rotate(-18 50 84)">
          <path d="M22 28 V140 C22 156 108 156 108 140 V28 Z" fill="url(#bsCylB)" />
          <ellipse cx="65" cy="28" rx="43" ry="14" fill="#DDFF7A" />
        </g>
      </svg>
    </>
  );
}

export default function Banner() {
  return (
    <>
      <section className="bs-banner" aria-labelledby="bs-banner-title">
        <div className="bs-b-stage">

          <div className="bs-b-circle" aria-hidden="true" />

          <Shapes />


          <h1 id="bs-banner-title" className="bs-b-title">
            <span className="bs-b-line bs-b-line-wide">Get Access to Hundreds</span>
            <br />
            <span className="bs-b-line">Courses Available</span>
          </h1>

          <p className="bs-b-sub">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>

          <form className="bs-b-search" action="/courses" method="get" role="search">
            <label className="bs-b-field">
              <SearchIcon />
              <input
                type="search"
                name="q"
                placeholder="Course, topic, creator"
                aria-label="Search courses, topics or creators"
              />
            </label>
            <button type="submit" className="bs-b-search-btn">
              Search
            </button>
          </form>

          
          <div className="bs-b-person">
            <Image
              src="/banner.png"
              alt="Smiling student with headphones holding a laptop"
              fill
              priority
              sizes="(max-width: 640px) 60vw, 30vw"
              style={{ objectFit: "contain", objectPosition: "center bottom" }}
            />
          </div>

          <div className="bs-b-card bs-b-card-course">
            <p className="bs-b-card-title">UI/UX Design</p>
            <p className="bs-b-card-meta">200 Courses &bull; 1000+ Students</p>
          </div>

          <div className="bs-b-card bs-b-card-progress">
            <p className="bs-b-progress-label">Learning Progress</p>
            <p className="bs-b-progress-value">55%</p>
            <div
              className="bs-b-track"
              role="progressbar"
              aria-valuenow={55}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Learning progress"
            >
              <span className="bs-b-fill" style={{ width: "55%" }} />
            </div>
          </div>

          <div className="bs-b-card bs-b-card-students">
            <p className="bs-b-card-title">Happy Students</p>
            <p className="bs-b-rating">
              <span className="bs-b-rating-num">4.5</span>
              <span className="bs-b-rating-count">(240)</span>
              <StarIcon />
            </p>
            <div className="bs-b-avatars">
              {AVATARS.map((n) => (
                <span key={n} className="bs-b-avatar">

                  <Image src={`/image${n}.png`} alt="" width={44} height={44} />
                </span>
              ))}
              <span className="bs-b-more">2K+</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* All numbers are Figma px on a 765 x 545 frame, scaled by --bs-u */
        .bs-banner {
          --bs-u: min(calc(100vw / 765), 2.5px);
          --bs-blue: #1d34d8;
          --bs-lime: #bfff37;
          --bs-ink: #0f1226;
          position: relative;
          width: 100%;
          height: calc(545 * var(--bs-u));
          overflow: hidden;
          isolation: isolate;
          background-color: var(--bs-blue);
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.09) 1px, transparent 1px);
          background-size: calc(61 * var(--bs-u)) calc(61 * var(--bs-u));
          background-position: calc(2 * var(--bs-u)) calc(1 * var(--bs-u));
        }

        @media (max-width: 640px) {
          .bs-banner {
            --bs-u: calc(100vw / 480);
          }
        }

        /* 765u-wide frame, centred so the design never stretches */
        .bs-b-stage {
          position: absolute;
          top: 0;
          left: 50%;
          width: calc(765 * var(--bs-u));
          height: 100%;
          transform: translateX(-50%);
        }

        /* ---------- Headline ---------- */
        .bs-b-title {
          position: absolute;
          z-index: 5;
          top: calc(89 * var(--bs-u));
          left: 0;
          right: 0;
          margin: 0;
          text-align: center;
          font-weight: 600;
          font-size: calc(35 * var(--bs-u));
          line-height: calc(46 * var(--bs-u));
          letter-spacing: -0.005em;
          color: #fff;
        }

     

        .bs-b-sub {
          position: absolute;
          z-index: 5;
          top: calc(199 * var(--bs-u));
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
          max-width: calc(560 * var(--bs-u));
          margin: 0;
          text-align: center;
          font-weight: 300;
          font-size: max(calc(9.5 * var(--bs-u)), 11px);
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.88);
        }

        /* ---------- Search ---------- */
        .bs-b-search {
          position: absolute;
          z-index: 5;
          top: calc(246 * var(--bs-u));
          left: calc(228 * var(--bs-u));
          width: calc(309 * var(--bs-u));
          display: flex;
          align-items: flex-start;
          gap: calc(9 * var(--bs-u));
        }

        .bs-b-field {
          flex: 1;
          display: flex;
          align-items: center;
          gap: calc(6 * var(--bs-u));
          height: calc(27 * var(--bs-u));
          padding: 0 calc(11 * var(--bs-u)) 0 calc(16 * var(--bs-u));
          background: #fff;
          border-radius: 999px;
        }

        .bs-b-field:focus-within {
          box-shadow: 0 0 0 2px var(--bs-lime);
        }

        .bs-b-search-icon {
          flex: none;
          width: calc(9 * var(--bs-u));
          height: calc(9 * var(--bs-u));
          min-width: 11px;
          min-height: 11px;
        }

        .bs-b-field input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          font: inherit;
          font-size: max(calc(8.5 * var(--bs-u)), 11px);
          font-weight: 300;
          color: var(--bs-ink);
        }

        .bs-b-field input::placeholder {
          color: #7b7f8f;
        }

        .bs-b-search-btn {
          flex: 0 0 calc(55 * var(--bs-u));
          height: calc(25 * var(--bs-u));
          border: 0;
          border-radius: 999px;
          background: var(--bs-lime);
          color: var(--bs-ink);
          font: inherit;
          font-size: max(calc(8.5 * var(--bs-u)), 11px);
          font-weight: 500;
          cursor: pointer;
        }

        .bs-b-search-btn:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 2px;
        }

        /* ---------- Lime circle + student ---------- */
        .bs-b-circle {
          position: absolute;
          z-index: 1;
          left: calc(75.5 * var(--bs-u));
          top: calc(313 * var(--bs-u));
          width: calc(613 * var(--bs-u));
          aspect-ratio: 1;
          border-radius: 50%;
          background: var(--bs-lime);
        }

        .bs-b-person {
          position: absolute;
          z-index: 3;
          left: calc(316 * var(--bs-u));
          top: calc(293 * var(--bs-u));
          width: calc(224 * var(--bs-u));
          height: calc(252 * var(--bs-u));
        }

        /* ---------- Floating cards ---------- */
        .bs-b-card {
          position: absolute;
          z-index: 4;
          background: #fff;
          color: var(--bs-ink);
          box-shadow: 0 calc(2 * var(--bs-u)) calc(8 * var(--bs-u)) rgba(15, 18, 38, 0.08);
        }

        .bs-b-card p {
          margin: 0;
        }

        .bs-b-card-title {
          font-size: calc(8 * var(--bs-u));
          line-height: calc(11 * var(--bs-u));
          font-weight: 500;
        }

        .bs-b-card-course {
          left: calc(214 * var(--bs-u));
          top: calc(339 * var(--bs-u));
          width: calc(111 * var(--bs-u));
          height: calc(38 * var(--bs-u));
          padding: calc(9 * var(--bs-u)) calc(8 * var(--bs-u));
          border-radius: calc(5 * var(--bs-u));
        }

        .bs-b-card .bs-b-card-meta {
          margin-top: calc(2 * var(--bs-u));
          font-size: calc(6 * var(--bs-u));
          line-height: calc(8 * var(--bs-u));
          color: #8b8fa0;
        }

        .bs-b-card-progress {
          left: calc(478 * var(--bs-u));
          top: calc(346 * var(--bs-u));
          width: calc(122 * var(--bs-u));
          height: calc(69 * var(--bs-u));
          padding: calc(9 * var(--bs-u)) calc(8 * var(--bs-u));
          border-radius: calc(6 * var(--bs-u));
        }

        .bs-b-card .bs-b-progress-label {
          font-size: calc(7 * var(--bs-u));
          line-height: calc(10 * var(--bs-u));
          color: #3a3d52;
        }

        .bs-b-card .bs-b-progress-value {
          margin-top: calc(4 * var(--bs-u));
          font-size: calc(24 * var(--bs-u));
          line-height: calc(30 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .bs-b-track {
          margin-top: calc(4 * var(--bs-u));
          height: calc(4 * var(--bs-u));
          border-radius: 999px;
          background: #e6e8ef;
          overflow: hidden;
        }

        .bs-b-fill {
          display: block;
          height: 100%;
          border-radius: 999px;
          background: var(--bs-lime);
        }

        .bs-b-card-students {
          left: calc(174 * var(--bs-u));
          top: calc(445 * var(--bs-u));
          width: calc(137 * var(--bs-u));
          height: calc(64 * var(--bs-u));
          padding: calc(8 * var(--bs-u)) calc(9 * var(--bs-u));
          border-radius: calc(6 * var(--bs-u));
        }

        .bs-b-card .bs-b-rating {
          display: flex;
          align-items: center;
          gap: calc(2 * var(--bs-u));
          margin-top: calc(1 * var(--bs-u));
          height: calc(9 * var(--bs-u));
          font-size: calc(7 * var(--bs-u));
        }

        .bs-b-rating-num {
          font-weight: 500;
        }

        .bs-b-rating-count {
          color: #8b8fa0;
        }

        .bs-b-star {
          width: calc(7.5 * var(--bs-u));
          height: calc(7.5 * var(--bs-u));
        }

        .bs-b-avatars {
          display: flex;
          align-items: center;
          margin-top: calc(4 * var(--bs-u));
        }

        .bs-b-avatar {
          position: relative;
          flex: none;
          width: calc(22 * var(--bs-u));
          height: calc(22 * var(--bs-u));
          margin-left: calc(-5 * var(--bs-u));
          border: calc(1.5 * var(--bs-u)) solid #fff;
          border-radius: 50%;
          overflow: hidden;
          background: linear-gradient(135deg, #c9cdea, #9aa2d6);
        }

        .bs-b-avatar:first-child {
          margin-left: 0;
        }

        .bs-b-avatar img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bs-b-more {
          flex: none;
          display: grid;
          place-items: center;
          width: calc(24 * var(--bs-u));
          height: calc(24 * var(--bs-u));
          margin-left: calc(-4 * var(--bs-u));
          border-radius: 50%;
          background: var(--bs-lime);
          color: var(--bs-ink);
          font-size: calc(7 * var(--bs-u));
          font-weight: 600;
        }

        /* ---------- 3D shapes ---------- */
        .bs-b-shape {
          position: absolute;
          z-index: 2;
          overflow: visible;
          pointer-events: none;
        }

        .bs-b-coil-lime {
          left: calc(-8 * var(--bs-u));
          top: calc(150 * var(--bs-u));
          width: calc(125 * var(--bs-u));
          height: calc(150 * var(--bs-u));
        }

        .bs-b-coil-white-l {
          left: calc(108 * var(--bs-u));
          top: calc(264 * var(--bs-u));
          width: calc(70 * var(--bs-u));
          height: calc(70 * var(--bs-u));
        }

        .bs-b-coil-white-r {
          left: calc(624 * var(--bs-u));
          top: calc(380 * var(--bs-u));
          width: calc(118 * var(--bs-u));
          height: calc(132 * var(--bs-u));
        }

        .bs-b-ring {
          left: calc(43 * var(--bs-u));
          top: calc(418 * var(--bs-u));
          width: calc(122 * var(--bs-u));
          height: calc(96 * var(--bs-u));
        }

        .bs-b-cone {
          left: calc(598 * var(--bs-u));
          top: calc(256 * var(--bs-u));
          width: calc(72 * var(--bs-u));
          height: calc(78 * var(--bs-u));
        }

        .bs-b-cylinder {
          left: calc(676 * var(--bs-u));
          top: calc(133 * var(--bs-u));
          width: calc(100 * var(--bs-u));
          height: calc(168 * var(--bs-u));
        }
      `}</style>
    </>
  );
}