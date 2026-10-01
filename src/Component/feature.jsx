function WaveLogo() {
  return (
    <svg className="bs-f-icon" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="bsFeatWaveClip">
          <circle cx="11" cy="11" r="11" />
        </clipPath>
      </defs>
      <g clipPath="url(#bsFeatWaveClip)">
        <rect width="22" height="22" fill="currentColor" />
        <g fill="none" stroke="var(--bs-f-bg)" strokeWidth="1.5" strokeLinecap="round">
          <path d="M-1 6.6 Q5.5 2.4 11 6.6 T23 6.6" />
          <path d="M-1 10.8 Q5.5 6.6 11 10.8 T23 10.8" />
          <path d="M-1 15 Q5.5 10.8 11 15 T23 15" />
        </g>
      </g>
    </svg>
  );
}

function SpinnerLogo() {
  return (
    <svg className="bs-f-icon" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="2.1" strokeLinecap="round">
        {[1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.42, 0.35].map((o, i) => (
          <line
            key={i}
            x1="11"
            y1="1.6"
            x2="11"
            y2="5.6"
            opacity={o}
            transform={`rotate(${i * 45} 11 11)`}
          />
        ))}
      </g>
      
    </svg>
  );
}

function BoltLogo() {
  return (
    <svg className="bs-f-icon" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="11" fill="currentColor" />
      <path
        d="M12.9 4.2 6.6 12.3h4L9.4 17.9l6.3-8.2h-4Z"
        fill="var(--bs-f-bg)"
        stroke="var(--bs-f-bg)"
        strokeWidth=".6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotsLogo() {
  return (
    <svg className="bs-f-icon" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="11" fill="currentColor" />
      <g fill="var(--bs-f-bg)">
        <circle cx="11" cy="5.9" r="2.3" />
        <circle cx="16.1" cy="11" r="2.3" />
        <circle cx="11" cy="16.1" r="2.3" />
        <circle cx="5.9" cy="11" r="2.3" />
        <circle cx="11" cy="11" r="1.2" />
      </g>
    </svg>
  );
}

function SphereLogo() {
  return (
    <svg className="bs-f-icon" viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="bsFeatSphereClip">
          <circle cx="11" cy="11" r="11" />
        </clipPath>
        <radialGradient id="bsFeatSphereG" cx="0.35" cy="0.3" r="0.9">
          <stop offset="0" stopColor="#A9ABB0" />
          <stop offset="1" stopColor="#7C7E83" />
        </radialGradient>
      </defs>
      <g clipPath="url(#bsFeatSphereClip)">
        <circle cx="11" cy="11" r="11" fill="url(#bsFeatSphereG)" />
        <g fill="none" stroke="#fff" strokeOpacity=".6" strokeWidth=".55">
          {[0, 22, 44, 66, 88, 110, 132, 154].map((a) => (
            <ellipse key={a} cx="11" cy="11" rx="10.5" ry="4.2" transform={`rotate(${a} 11 11)`} />
          ))}
        </g>
      </g>
    </svg>
  );
}

const LOGOS = [WaveLogo, SpinnerLogo, BoltLogo, DotsLogo, SphereLogo];

export default function Feature() {
  return (
    <>
      <section className="bs-feature" aria-label="Trusted by">
        <ul className="bs-f-list">
          {LOGOS.map((Icon, i) => (
            <li key={i} className="bs-f-logo">
              <Icon />
              <span className="bs-f-name">Logoipsum</span>
            </li>
          ))}
        </ul>
      </section>

      <style>{`
        /* 1 unit = 1 Figma px on the 765 wide frame */
        .bs-feature {
          --bs-u: min(calc(100vw / 765), 2.5px);
          --bs-f-bg: #f3f3f3;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: calc(105 * var(--bs-u));
          background: var(--bs-f-bg);
        }

        @media (max-width: 640px) {
          .bs-feature {
            --bs-u: calc(100vw / 480);
            padding: 20px 16px;
          }
        }

        .bs-f-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: calc(14 * var(--bs-u)) calc(38 * var(--bs-u));
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .bs-f-logo {
          display: inline-flex;
          align-items: center;
          gap: calc(4 * var(--bs-u));
          color: #7c7e83;
        }

        .bs-f-icon {
          flex: none;
          width: calc(22 * var(--bs-u));
          height: calc(22 * var(--bs-u));
          min-width: 20px;
          min-height: 20px;
        }

        .bs-f-name {
          font-size: max(calc(12.5 * var(--bs-u)), 14px);
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.015em;
          white-space: nowrap;
        }
      `}</style>
    </>
  );
}