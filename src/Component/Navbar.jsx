"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
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

function MenuIcon({ open }) {
  return (
    <svg className="bs-nav-menu-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M5 5l14 14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M19 5 5 19" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M4 7h16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 12h16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 17h16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bs-nav">
        <div className="bs-nav-inner">
          <Link href="/" className="bs-nav-logo" aria-label="ByteSpace home" onClick={() => setMenuOpen(false)}>
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

            <button
              type="button"
              className="bs-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="bs-nav-mobile-menu">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`bs-nav-mobile-link${active ? " is-active" : ""}`}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              );
            })}

            <Link href="/sign-in" className="bs-nav-mobile-link" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>

            <Link href="/join" className="bs-nav-mobile-link" onClick={() => setMenuOpen(false)}>
              Join Us
            </Link>

            <button
              type="button"
              className="bs-nav-mobile-cart"
              onClick={() => setMenuOpen(false)}
            >
              <BagIcon />
              <span>Cart</span>
            </button>
          </div>
        )}
      </header>

      <style>{`
        .bs-nav {
          --bs-u: min(calc(100vw / 765), 2.5px);
          --bs-lime: #bfff37;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          max-width: 100vw;
          z-index: 30;
          background: transparent;
        }

        .bs-nav-inner {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
          align-items: center;
          width: 100%;
          max-width: 100%;
          height: clamp(52px, calc(62 * var(--bs-u)), 62px);
          padding: 0 clamp(16px, calc(64 * var(--bs-u)), 64px);
        }

        .bs-nav-logo {
          display: inline-flex;
          align-items: center;
          justify-self: start;
          min-width: 0;
          max-width: 100%;
          gap: clamp(5px, calc(6 * var(--bs-u)), 6px);
          color: #fff;
          font-weight: 600;
          font-size: clamp(16px, calc(13 * var(--bs-u)), 18px);
          line-height: 1;
          letter-spacing: -0.01em;
          text-decoration: none;
          white-space: nowrap;
        }

        .bs-nav-logo-mark {
          width: clamp(14px, calc(15 * var(--bs-u)), 18px);
          height: clamp(16px, calc(17 * var(--bs-u)), 20px);
          min-width: 14px;
          flex: none;
        }

        .bs-nav-links {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(12px, calc(13 * var(--bs-u)), 18px);
          min-width: 0;
        }

        .bs-nav-actions {
          display: flex;
          align-items: center;
          justify-self: end;
          min-width: 0;
          gap: clamp(8px, calc(13 * var(--bs-u)), 18px);
        }

        .bs-nav-link {
          display: inline-flex;
          align-items: center;
          min-width: 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(11px, calc(8.5 * var(--bs-u)), 14px);
          font-weight: 300;
          line-height: 1;
          text-decoration: none;
          white-space: nowrap;
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
        .bs-nav-cart:focus-visible,
        .bs-nav-menu:focus-visible {
          outline: 2px solid var(--bs-lime);
          outline-offset: 3px;
          border-radius: 4px;
        }

        .bs-nav-cart {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: none;
          width: 18px;
          height: 20px;
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .bs-nav-bag {
          display: block;
          width: 11px;
          height: 13px;
        }

        .bs-nav-menu {
          display: none;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          margin: 0;
          padding: 0;
          border: 0;
          background: transparent;
          cursor: pointer;
        }

        .bs-nav-menu-icon {
          display: block;
          width: 24px;
          height: 24px;
        }

        .bs-nav-mobile-menu {
          display: none;
        }

        @media (max-width: 900px) {
          .bs-nav-inner {
            grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
            padding: 0 24px;
          }

          .bs-nav-links {
            gap: 10px;
          }

          .bs-nav-actions {
            gap: 10px;
          }
        }

        @media (max-width: 700px) {
          .bs-nav {
            --bs-u: calc(100vw / 480);
          }

          .bs-nav-inner {
            grid-template-columns: minmax(0, 1fr) auto;
            height: 62px;
            padding: 0 16px;
          }

          .bs-nav-links {
            display: none;
          }

          .bs-nav-actions {
            justify-self: end;
            gap: 8px;
          }

          .bs-nav-actions > .bs-nav-link,
          .bs-nav-actions > .bs-nav-cart {
            display: none;
          }

          .bs-nav-menu {
            display: inline-flex;
          }

          .bs-nav-mobile-menu {
            position: absolute;
            top: 62px;
            left: 16px;
            right: 16px;
            display: flex;
            flex-direction: column;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            background: rgba(20, 31, 180, 0.97);
            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
          }

          .bs-nav-mobile-link,
          .bs-nav-mobile-cart {
            display: flex;
            align-items: center;
            width: 100%;
            min-height: 46px;
            padding: 0 14px;
            border: 0;
            border-radius: 10px;
            background: transparent;
            color: rgba(255, 255, 255, 0.9);
            font-size: 14px;
            font-weight: 400;
            line-height: 1;
            text-decoration: none;
            text-align: left;
            cursor: pointer;
          }

          .bs-nav-mobile-link:hover,
          .bs-nav-mobile-link.is-active,
          .bs-nav-mobile-cart:hover {
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
          }

          .bs-nav-mobile-cart {
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .bs-nav-inner {
            height: 58px;
            padding: 0 14px;
          }

          .bs-nav-logo {
            gap: 5px;
            font-size: 15px;
          }

          .bs-nav-menu {
            width: 36px;
            height: 36px;
          }

          .bs-nav-mobile-menu {
            top: 58px;
            left: 12px;
            right: 12px;
          }
        }

        @media (max-width: 360px) {
          .bs-nav-inner {
            padding: 0 10px;
          }

          .bs-nav-logo {
            font-size: 14px;
          }

          .bs-nav-menu {
            width: 34px;
            height: 34px;
          }

          .bs-nav-mobile-menu {
            left: 10px;
            right: 10px;
          }
        }
      `}</style>
    </>
  );
}