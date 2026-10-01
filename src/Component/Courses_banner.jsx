"use client";

import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";


const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["700", "800"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["400", "500", "600"] });

const css = `
.bs-banner{
  position:relative;display:block;width:100%;height:360px;overflow:hidden;
  background-color:#1c2ed8;
  background-image:
    linear-gradient(to right, rgba(255,255,255,.13) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,.13) 1px, transparent 1px);
  background-size:120px 120px;
  background-position:0 0;
  padding:168px 24px 0; /* 120px empty navbar space + 48px */
  box-sizing:border-box;
  text-align:center;
}
.bs-banner *,.bs-banner *::before,.bs-banner *::after{box-sizing:border-box}

.bs-banner .bs-b-title{
  margin:0;padding:0;font-size:36px;line-height:40px;font-weight:700;
  letter-spacing:-.01em;color:#fff;opacity:1;
}

.bs-banner .bs-b-form{
  display:flex;align-items:flex-start;justify-content:center;gap:17px;
  margin:34px auto 0;width:100%;max-width:628px;
}
.bs-banner .bs-b-search{
  position:relative;flex:0 1 463px;width:463px;min-width:0;height:52px;
  background:#fff;border-radius:999px;display:flex;align-items:center;
  padding:0 24px 0 28px;
}
.bs-banner .bs-b-icon{display:block;flex:none;width:20px;height:20px;margin-right:9px}
.bs-banner .bs-b-input{
  flex:1;min-width:0;height:100%;border:0;outline:none;background:transparent;
  font-size:18px;font-weight:400;color:#111;padding:0;
}
.bs-banner .bs-b-input::placeholder{color:#5f5f5f;opacity:1}

.bs-banner .bs-b-select{
  flex:none;height:48px;display:inline-flex;align-items:center;gap:12px;
  padding:0 24px;border:0;border-radius:999px;background:#d2f53b;color:#111;
  font-size:18px;font-weight:500;cursor:pointer;white-space:nowrap;
}
.bs-banner .bs-b-chevron{display:block;width:16px;height:16px;flex:none}

@media (max-width:700px){
  .bs-banner{padding-left:16px;padding-right:16px}
  .bs-banner .bs-b-title{font-size:28px;line-height:34px}
  .bs-banner .bs-b-form{gap:10px}
  .bs-banner .bs-b-search{flex:1 1 auto;width:auto}
  .bs-banner .bs-b-select{padding:0 16px;font-size:16px}
}
`;

export default function CourseSearchBanner() {
  return (
    <section className={`bs-banner ${bodyFont.className}`}>
      <style>{css}</style>

      <h1 className={`bs-b-title ${headingFont.className}`}>Find Your Next Course</h1>

      <form className="bs-b-form" onSubmit={(e) => e.preventDefault()}>
        <label className="bs-b-search">
          <svg
            className="bs-b-icon"
            viewBox="0 0 20 20"
            fill="none"
            stroke="#4d4d4d"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8.5" cy="8.5" r="6" />
            <path d="M13 13l4.5 4.5" />
          </svg>
          <input
            className={`bs-b-input ${bodyFont.className}`}
            type="text"
            placeholder="Search"
            aria-label="Search courses"
          />
        </label>

        <button className={`bs-b-select ${bodyFont.className}`} type="button" aria-haspopup="listbox">
          Courses
          <svg
            className="bs-b-chevron"
            viewBox="0 0 16 16"
            fill="none"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3.5 6l4.5 4.5L12.5 6" />
          </svg>
        </button>
      </form>
    </section>
  );
}