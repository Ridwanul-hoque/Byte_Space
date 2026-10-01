"use client";

import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";

const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600"] });

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const legal = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

const css = `
.bs-footer{display:block;width:100%;background:#fff;padding:75px 0 24px;box-sizing:border-box;color:#1a1a1a}
.bs-footer *,.bs-footer *::before,.bs-footer *::after{box-sizing:border-box}
.bs-footer .bs-f-container{width:100%;max-width:1200px;margin:0 auto}

.bs-footer .bs-f-top{display:grid;grid-template-columns:617px 206px 206px 1fr;align-items:start}

.bs-footer .bs-f-logo{display:flex;align-items:center;gap:8px;height:38px;text-decoration:none;color:#000}
.bs-footer .bs-f-logo svg{display:block;width:26px;height:32px;flex:none}
.bs-footer .bs-f-logo-text{font-size:24px;line-height:32px;font-weight:800;letter-spacing:-.03em;color:#000}
.bs-footer .bs-f-tagline{margin:12px 0 0;padding:0;max-width:480px;font-size:14px;line-height:24px;font-weight:400;color:#222}
.bs-footer .bs-f-form{display:flex;align-items:flex-start;gap:24px;margin:45px 0 0}
.bs-footer .bs-f-input{width:374px;height:52px;padding:0 22px;border:1px solid #d9d9d9;border-radius:999px;background:#fff;outline:none;font-size:16px;font-weight:400;color:#111;transition:border-color .15s}
.bs-footer .bs-f-input::placeholder{color:#444;opacity:1}
.bs-footer .bs-f-input:focus{border-color:#111}
.bs-footer .bs-f-button{height:48px;padding:0 28px;border:0;border-radius:999px;background:#d2f53b;color:#111;font-size:16px;font-weight:500;cursor:pointer;white-space:nowrap}
.bs-footer .bs-f-note{margin:22px 0 0;padding:0;max-width:465px;font-size:12px;line-height:19px;font-weight:400;color:#333}

/* link columns */
.bs-footer .bs-f-col{margin:0;padding:0;list-style:none;padding-top:38px}
.bs-footer .bs-f-col li{margin:0;padding:0;height:38px;display:flex;align-items:center}
.bs-footer .bs-f-col a{font-size:14px;line-height:20px;font-weight:400;color:#222;text-decoration:none;white-space:nowrap}
.bs-footer .bs-f-col a:hover,.bs-footer .bs-f-legal a:hover{text-decoration:underline}

/* bottom bar */
.bs-footer .bs-f-bottom{display:flex;align-items:center;justify-content:space-between;gap:24px;margin-top:130px;padding-top:24px;border-top:1px solid #dcdcdc}
.bs-footer .bs-f-copy{margin:0;font-size:12px;line-height:20px;font-weight:400;color:#222}
.bs-footer .bs-f-legal{display:flex;gap:24px}
.bs-footer .bs-f-legal a{font-size:12px;line-height:20px;font-weight:400;color:#222;text-decoration:none;white-space:nowrap}

@media (max-width:1280px){
  .bs-footer .bs-f-container{padding:0 40px}
  .bs-footer .bs-f-top{grid-template-columns:1.6fr 1fr 1fr 1fr}
  .bs-footer .bs-f-input{width:100%;min-width:0}
  .bs-footer .bs-f-form{max-width:520px}
}
@media (max-width:960px){
  .bs-footer .bs-f-top{grid-template-columns:1fr 1fr 1fr;row-gap:32px}
  .bs-footer .bs-f-left{grid-column:1 / -1}
  .bs-footer .bs-f-col{padding-top:0}
  .bs-footer .bs-f-bottom{margin-top:56px}
}
@media (max-width:560px){
  .bs-footer .bs-f-container{padding:0 16px}
  .bs-footer .bs-f-top{grid-template-columns:1fr 1fr}
  .bs-footer .bs-f-bottom{flex-direction:column;align-items:flex-start}
  .bs-footer .bs-f-legal{flex-wrap:wrap;gap:12px 24px}
}
`;

function Logo() {
  return (
    <a href="/" className="bs-f-logo" aria-label="ByteSpace">
      <svg viewBox="0 0 26 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M0 4a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v6.6C9.6 9.6 11.6 9 13.6 9 20.5 9 26 14 26 20.5S20.5 32 13.6 32H4a4 4 0 0 1-4-4V4Z"
          fill="#d2f53b"
        />
        <path d="M10.5 15.4 18 20.5l-7.5 5.1V15.4Z" fill="#111" stroke="#111" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
      <span className={`bs-f-logo-text ${headingFont.className}`}>ByteSpace</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className={`bs-footer ${bodyFont.className}`}>
      <style>{css}</style>

      <div className="bs-f-container">
        <div className="bs-f-top">
          <div className="bs-f-left">
            <Logo />
            <p className="bs-f-tagline">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="bs-f-form" onSubmit={(e) => e.preventDefault()}>
              <input
                className={`bs-f-input ${bodyFont.className}`}
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className={`bs-f-button ${bodyFont.className}`} type="submit">
                Search
              </button>
            </form>

            <p className="bs-f-note">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {columns.map((col, i) => (
            <ul className="bs-f-col" key={i}>
              {col.map((label) => (
                <li key={label}>
                  <a href="#">{label}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="bs-f-bottom">
          <p className="bs-f-copy">@ 2023 ByteSpace. All rights reserved.</p>
          <div className="bs-f-legal">
            {legal.map((label) => (
              <a href="#" key={label}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}