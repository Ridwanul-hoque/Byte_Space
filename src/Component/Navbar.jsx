"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/Courses" },
  { label: "Creators", href: "/creators" },
];

function LogoMark() {
  return (
    <svg className="bs-nav-logo-mark" viewBox="0 0 18 20" aria-hidden="true" focusable="false">
      <path
        fill="var(--bs-lime)"
        fillRule="evenodd"
        d="M2 2.2C2 1 2.9 0 4 0s2 1 2 2.2V5h3.6C13.7 5 17 8 17 12.2S13.7 19.4 9.6 19.4H4.4C3 19.4 2 18.4 2 17V2.2Zm7.4 6.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z"
      />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="bs-nav-bag" viewBox="0 0 12 14" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M1.5 4.2h9l.7 8.3a.8.8 0 0 1-.8.9H1.6a.8.8 0 0 1-.8-.9l.7-8.3Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path d="M4 4.2V3.4a2 2 0 0 1 4 0v.8" stroke="#fff" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="bs-nav">
        <div className="bs-nav-inner">
          <Link href="/" className="bs-nav-logo" aria-label="ByteSpace home">
            <LogoMark />
            <span>ByteSpace</span>
          </Link>

          <nav className="bs-nav-links" aria-label="Primary">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`bs-nav-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="bs-nav-actions">
            <Link href="/sign-in" className="bs-nav-link">
              Sign In
            </Link>
            <Link href="/join" className="bs-nav-link">
              Join Us
            </Link>
            <button type="button" className="bs-nav-cart" aria-label="Cart">
              <BagIcon />
            </button>
          </div>
        </div>
      </header>

      <style>{`
        /* --bs-u: 1 Figma px on the 765 x 545 frame */
        .bs-nav {
          --bs-u: min(calc(100vw / 765), 2.5px);
          --bs-lime: #bfff37;
          position: absolute;
          inset: 0 0 auto 0;
          z-index: 30;
          background: transparent; /* banner bg shows through */
        }

        .bs-nav-inner {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          height: calc(62 * var(--bs-u));
          padding: 0 calc(64 * var(--bs-u));
        }

        .bs-nav-logo {
          display: inline-flex;
          align-items: center;
          gap: calc(6 * var(--bs-u));
          justify-self: start;
          font-weight: 600;
          font-size: max(calc(13 * var(--bs-u)), 16px);
          color: #fff;
          letter-spacing: -0.01em;
        }

        .bs-nav-logo-mark {
          width: calc(15 * var(--bs-u));
          height: calc(17 * var(--bs-u));
          min-width: 14px;
          flex: none;
        }

        .bs-nav-links {
          display: flex;
          align-items: center;
          gap: calc(13 * var(--bs-u));
        }

        .bs-nav-actions {
          display: flex;
          align-items: center;
          gap: calc(13 * var(--bs-u));
          justify-self: end;
        }

        .bs-nav-link {
          font-size: max(calc(8.5 * var(--bs-u)), 11px);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.85);
          transition: color 0.15s ease;
        }

        .bs-nav-link:hover,
        .bs-nav-link.is-active {
          color: #fff;
        }

        .bs-nav-link.is-active {
          font-weight: 400;
        }

        .bs-nav-link:focus-visible,
        .bs-nav-logo:focus-visible,
        .bs-nav-cart:focus-visible {
          outline: 2px solid var(--bs-lime);
          outline-offset: 3px;
          border-radius: 4px;
        }

        .bs-nav-cart {
          display: inline-flex;
          align-items: center;
          margin-left: calc(3 * var(--bs-u));
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .bs-nav-bag {
          width: calc(9 * var(--bs-u));
          height: calc(10.5 * var(--bs-u));
          min-width: 11px;
          min-height: 13px;
        }

        @media (max-width: 640px) {
          .bs-nav {
            --bs-u: calc(100vw / 480);
          }
          .bs-nav-inner {
            grid-template-columns: 1fr auto;
            padding: 0 16px;
          }
          .bs-nav-links {
            display: none;
          }
        }
      `}</style>
    </>
  );
}