"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Poppins, Urbanist } from "next/font/google";
import coursesData from "@/data/courses.json";

const headingFont = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const PER_PAGE = 6;

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Cooking",
];

const CATEGORY_RULES = {
  Music: /music|audio|sound|podcast/,
  "Drawing & Painting": /drawing|painting|illustrat|digital asset|logo|vector/,
  Marketing: /marketing|seo|growth|startup|go-to-market|product management/,
  Animation: /animation|3d|three\.js|webgl|motion|micro-interaction/,
  "Social Media": /social media|content strategy|content distribution|creators/,
  "UI/UX Design": /ui\/ux|figma|design system|wireframing|prototyp|user experience/,
  "Creative Marketing": /creative|brand identity|content strategy|brand strategy/,
  Cooking: /cook|recipe|culinary|food/,
};

function courseCategories(course) {
  const text = [course.title, course.subtitle, ...(course.about?.keyPoints || [])]
    .join(" ")
    .toLowerCase();
  return Object.keys(CATEGORY_RULES).filter((c) => CATEGORY_RULES[c].test(text));
}

const LEVELS = ["All levels", "Beginner", "Intermediate", "Advanced"];
const PRICES = ["All prices", "Under $25", "$25 – $30", "Over $30"];
const SORTS = ["Most relevant", "Highest rated", "Most students", "Price: low to high", "Price: high to low"];

function priceMatch(price, label) {
  if (label === "Under $25") return price < 25;
  if (label === "$25 – $30") return price >= 25 && price <= 30;
  if (label === "Over $30") return price > 30;
  return true;
}

const STUDENT_AVATARS = [
  { src: "/images/avatars/student-1.jpg", bg: "#f4a6b8" },
  { src: "/images/avatars/student-2.jpg", bg: "#8a6f5a" },
  { src: "/images/avatars/student-3.jpg", bg: "#f2a93b" },
  { src: "/images/avatars/student-4.jpg", bg: "#9ab6d6" },
];

const css = `
.bs-list{display:block;width:100%;max-width:100vw;overflow-x:hidden;background:#fff;padding:70px 0 40px;box-sizing:border-box;color:#111}
.bs-list *,.bs-list *::before,.bs-list *::after{box-sizing:border-box}
.bs-list .bs-l-wrap{width:100%;max-width:1200px;margin:0 auto}

.bs-list .bs-l-bar{display:flex;align-items:center;justify-content:space-between;gap:16px}
.bs-list .bs-l-bar-left{display:flex;align-items:center;gap:16px}
.bs-list .bs-l-drop{position:relative}
.bs-list .bs-l-pill{display:inline-flex;align-items:center;gap:8px;height:48px;padding:0 19px;border:1px solid #e3e3e3;border-radius:999px;background:#fff;color:#222;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap}
.bs-list .bs-l-pill svg{display:block;width:16px;height:16px;flex:none}
.bs-list .bs-l-menu{position:absolute;top:calc(100% + 8px);left:0;z-index:30;min-width:200px;padding:8px;background:#fff;border:1px solid #e5e5e5;border-radius:16px;box-shadow:0 12px 32px rgba(0,0,0,.08)}
.bs-list .bs-l-menu.right{left:auto;right:0}
.bs-list .bs-l-opt{display:block;width:100%;padding:10px 14px;border:0;border-radius:10px;background:transparent;text-align:left;font-size:14px;color:#222;cursor:pointer;white-space:nowrap}
.bs-list .bs-l-opt:hover{background:#f4f4f4}
.bs-list .bs-l-opt.on{background:#f2fbc8;font-weight:600}

.bs-list .bs-l-chips{display:flex;gap:16px;margin-top:31px;overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}
.bs-list .bs-l-chips::-webkit-scrollbar{display:none}
.bs-list .bs-l-chip{flex:none;height:44px;padding:0 20px;border:0;border-radius:999px;background:#f2f2f2;color:#222;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap}
.bs-list .bs-l-chip.on{background:#d2f53b;color:#111}

.bs-list .bs-l-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));justify-content:space-between;gap:39px;margin-top:77px;align-items:start}
.bs-list .bs-l-card{display:block;padding:16px 16px 20px;background:#fff;border:1px solid #e6e6e6;border-radius:24px;text-decoration:none;color:inherit}
.bs-list .bs-l-img{position:relative;height:194px;border-radius:16px;overflow:hidden;background:#e9e9e9}
.bs-list .bs-l-img img{display:block;width:100%;height:100%;object-fit:cover}
.bs-list .bs-l-badges{position:absolute;left:13px;bottom:17px;display:flex;gap:14px;white-space:nowrap}
.bs-list .bs-l-badge{height:26px;padding:0 12px;border-radius:999px;background:rgba(255,255,255,.78);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);font-size:12px;line-height:26px;font-weight:500;color:#333}
.bs-list .bs-l-row{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px}
.bs-list .bs-l-title{flex:1;min-width:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:20px;line-height:28px;font-weight:600;color:#000}
.bs-list .bs-l-rating{flex:none;display:inline-flex;align-items:center;gap:4px;font-size:16px;line-height:24px;font-weight:500;color:#666}
.bs-list .bs-l-rating svg{display:block;width:18px;height:18px}
.bs-list .bs-l-by{margin:2px 0 0;font-size:12px;line-height:18px;color:#666;text-transform:lowercase}
.bs-list .bs-l-by b{font-weight:500;color:#1d3fd9}
.bs-list .bs-l-meta{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:16px}
.bs-list .bs-l-level{display:inline-flex;align-items:center;gap:7px;height:31px;padding:0 13px;border-radius:999px;background:#f2f2f2;font-size:12px;font-weight:500;color:#222;white-space:nowrap}
.bs-list .bs-l-level svg{display:block;width:14px;height:14px}
.bs-list .bs-l-stack{display:flex;align-items:center}
.bs-list .bs-l-av{position:relative;width:32px;height:32px;margin-left:-9px;border:2px solid #fff;border-radius:50%;overflow:hidden;flex:none}
.bs-list .bs-l-av:first-child{margin-left:0}
.bs-list .bs-l-av img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.bs-list .bs-l-count{background:#d2f53b;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;color:#111}
.bs-list .bs-l-price{display:flex;align-items:baseline;gap:2px;margin-top:12px;line-height:28px}
.bs-list .bs-l-price b{font-size:20px;font-weight:600;color:#1d3fd9}
.bs-list .bs-l-price span{font-size:11px;color:#777}
.bs-list .bs-l-empty{margin:80px 0;text-align:center;font-size:16px;color:#666}

.bs-list .bs-l-pager{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:72px}
.bs-list .bs-l-arrow{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border:1px solid #ddd;border-radius:50%;background:#fff;color:#111;cursor:pointer}
.bs-list .bs-l-arrow:disabled{opacity:.4;cursor:default}
.bs-list .bs-l-arrow svg{display:block;width:20px;height:20px}
.bs-list .bs-l-nums{display:flex;align-items:center}
.bs-list .bs-l-num{width:36px;height:36px;border:0;background:transparent;font-size:16px;font-weight:600;color:#111;cursor:pointer}
.bs-list .bs-l-num.on{color:#b8b8b8;cursor:default}

@media (max-width:1280px){
  .bs-list .bs-l-wrap{padding:0 40px}
  .bs-list .bs-l-grid{grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}
}

@media (max-width:1050px){
  .bs-list .bs-l-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
  .bs-list .bs-l-wrap{padding:0 32px}
}

@media (max-width:800px){
  .bs-list{padding:50px 0 35px}
  .bs-list .bs-l-wrap{padding:0 24px}
  .bs-list .bs-l-bar{align-items:stretch;flex-wrap:wrap}
  .bs-list .bs-l-bar-left{flex:1;min-width:0;flex-wrap:wrap}
  .bs-list .bs-l-bar>.bs-l-drop{margin-left:auto}
  .bs-list .bs-l-grid{margin-top:50px}
  .bs-list .bs-l-img{height:auto;aspect-ratio:1.9/1}
  .bs-list .bs-l-badges{gap:8px;left:10px;bottom:12px;max-width:calc(100% - 20px);overflow:hidden}
  .bs-list .bs-l-badge{font-size:10px;padding:0 9px}
}

@media (max-width:600px){
  .bs-list{padding:40px 0 30px}
  .bs-list .bs-l-wrap{padding:0 16px}
  .bs-list .bs-l-bar{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .bs-list .bs-l-bar-left{display:contents}
  .bs-list .bs-l-drop{width:100%}
  .bs-list .bs-l-bar>.bs-l-drop{margin:0}
  .bs-list .bs-l-pill{width:100%;justify-content:center;height:44px;padding:0 12px;font-size:13px}
  .bs-list .bs-l-menu{min-width:180px;max-width:calc(100vw - 32px)}
  .bs-list .bs-l-menu.right{left:0;right:auto}
  .bs-list .bs-l-chips{gap:10px;margin-top:24px}
  .bs-list .bs-l-chip{height:40px;padding:0 16px;font-size:13px}
  .bs-list .bs-l-grid{grid-template-columns:1fr;margin-top:40px;gap:20px}
  .bs-list .bs-l-card{padding:12px 12px 18px;border-radius:20px}
  .bs-list .bs-l-img{border-radius:14px;aspect-ratio:1.8/1}
  .bs-list .bs-l-badges{gap:6px;left:8px;bottom:9px}
  .bs-list .bs-l-badge{height:23px;line-height:23px;font-size:9px;padding:0 8px}
  .bs-list .bs-l-row{gap:8px;margin-top:14px}
  .bs-list .bs-l-title{font-size:17px;line-height:24px}
  .bs-list .bs-l-rating{font-size:14px}
  .bs-list .bs-l-rating svg{width:16px;height:16px}
  .bs-list .bs-l-meta{flex-wrap:wrap;margin-top:13px;gap:8px}
  .bs-list .bs-l-level{height:29px;padding:0 10px;font-size:11px}
  .bs-list .bs-l-av{width:29px;height:29px}
  .bs-list .bs-l-price{margin-top:10px}
  .bs-list .bs-l-price b{font-size:19px}
  .bs-list .bs-l-pager{margin-top:45px;gap:8px}
  .bs-list .bs-l-arrow{width:42px;height:42px}
  .bs-list .bs-l-num{width:32px;height:32px;font-size:14px}
}

@media (max-width:380px){
  .bs-list .bs-l-wrap{padding:0 12px}
  .bs-list .bs-l-bar{grid-template-columns:1fr 1fr}
  .bs-list .bs-l-pill{font-size:12px}
  .bs-list .bs-l-grid{gap:16px}
  .bs-list .bs-l-badges{display:grid;grid-template-columns:1fr 1fr;gap:5px}
  .bs-list .bs-l-badge{width:max-content;max-width:100%;overflow:hidden;text-overflow:ellipsis}
  .bs-list .bs-l-badge:last-child{grid-column:1/-1}
  .bs-list .bs-l-pager{gap:4px}
}
`;

const I = {
  filter: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#111" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M2 3h12l-4.6 5.4V13l-2.8-1.4V8.4L2 3Z" />
    </svg>
  ),
  level: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round">
      <path d="M4 13V9M8 13V3M12 13V7" />
    </svg>
  ),
  category: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#111" strokeWidth="1.4" strokeLinejoin="round">
      <circle cx="8" cy="3.6" r="1.8" />
      <circle cx="3.6" cy="12" r="1.8" />
      <circle cx="12.4" cy="12" r="1.8" />
      <path d="M7 5.4 4.4 10.4M9 5.4l2.6 5" />
    </svg>
  ),
  sort: (
    <svg viewBox="0 0 16 16" fill="none" stroke="#111" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2.5 4h11M2.5 8h7M2.5 12h4" />
    </svg>
  ),
  bars: (
    <svg viewBox="0 0 14 14" fill="none" stroke="#333" strokeWidth="1.6" strokeLinecap="round">
      <path d="M3 12V8M7 12V2M11 12V6" />
    </svg>
  ),
  star: (
    <svg viewBox="0 0 20 20" fill="#c9c9c9">
      <path d="M10 1.8l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L10 14.2 5 17l1.2-5.6L2 7.6l5.6-.6L10 1.8Z" />
    </svg>
  ),
  left: (
    <svg viewBox="0 0 20 20" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12.5 4.5 7 10l5.5 5.5" />
    </svg>
  ),
  right: (
    <svg viewBox="0 0 20 20" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7.5 4.5 13 10l-5.5 5.5" />
    </svg>
  ),
};

function Avatar({ src, bg }) {
  return (
    <span className="bs-l-av" style={{ background: bg }}>
      <img src={src} alt="" onError={(e) => (e.currentTarget.style.display = "none")} />
    </span>
  );
}

function formatStudents(n) {
  return n >= 1000 ? `${Math.floor(n / 1000)}k+` : `${n}+`;
}

function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course.id}`} className="bs-l-card">
      <div className="bs-l-img">
        <img src={course.thumbnail} alt={course.title} />
        <div className="bs-l-badges">
          <span className="bs-l-badge">{course.totalLessons} Lessons</span>
          <span className="bs-l-badge">{course.totalDuration}</span>
          <span className="bs-l-badge">{course.reviewCount} Comments</span>
        </div>
      </div>

      <div className="bs-l-row">
        <h3 className={`bs-l-title ${headingFont.className}`}>{course.title}</h3>
        <span className="bs-l-rating">
          {course.rating}
          {I.star}
        </span>
      </div>

      <p className="bs-l-by">
        by <b>{course.creator.name}</b>
      </p>

      <div className="bs-l-meta">
        <span className="bs-l-level">
          {I.bars}
          {course.level}
        </span>
        <span className="bs-l-stack">
          {STUDENT_AVATARS.map((a) => (
            <Avatar key={a.src} {...a} />
          ))}
          <span className="bs-l-av bs-l-count">{formatStudents(course.studentsEnrolled)}</span>
        </span>
      </div>

      <div className="bs-l-price">
        <b className={headingFont.className}>${course.price}</b>
        <span>/{course.pricingModel}</span>
      </div>
    </Link>
  );
}

export default function CourseList({ courses = coursesData }) {
  const [category, setCategory] = useState("Featured");
  const [level, setLevel] = useState("All levels");
  const [price, setPrice] = useState("All prices");
  const [sort, setSort] = useState("Most relevant");
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(null);
  const barRef = useRef(null);

  useEffect(() => {
    const onDown = (e) => {
      if (barRef.current && !barRef.current.contains(e.target)) setOpen(null);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const filtered = useMemo(() => {
    let list = courses.filter(
      (c) =>
        (category === "Featured" || courseCategories(c).includes(category)) &&
        (level === "All levels" || c.level === level) &&
        priceMatch(c.price, price)
    );
    if (sort === "Highest rated") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "Most students") list = [...list].sort((a, b) => b.studentsEnrolled - a.studentsEnrolled);
    if (sort === "Price: low to high") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "Price: high to low") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [courses, category, level, price, sort]);

  const pages = Math.ceil(filtered.length / PER_PAGE);
  const current = Math.min(page, Math.max(pages, 1));
  const visible = filtered.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const choose = (setter) => (value) => {
    setter(value);
    setPage(1);
    setOpen(null);
  };

  const Menu = ({ id, options, value, onPick, right }) =>
    open === id ? (
      <div className={`bs-l-menu${right ? " right" : ""}`}>
        {options.map((o) => (
          <button key={o} type="button" className={`bs-l-opt${o === value ? " on" : ""}`} onClick={() => onPick(o)}>
            {o}
          </button>
        ))}
      </div>
    ) : null;

  const toggle = (id) => setOpen((o) => (o === id ? null : id));

  return (
    <section className={`bs-list ${bodyFont.className}`}>
      <style>{css}</style>

      <div className="bs-l-wrap">
        <div className="bs-l-bar" ref={barRef}>
          <div className="bs-l-bar-left">
            <div className="bs-l-drop">
              <button type="button" className={`bs-l-pill ${bodyFont.className}`} aria-expanded={open === "filter"} onClick={() => toggle("filter")}>
                {I.filter}Filter
              </button>
              <Menu id="filter" options={PRICES} value={price} onPick={choose(setPrice)} />
            </div>
            <div className="bs-l-drop">
              <button type="button" className={`bs-l-pill ${bodyFont.className}`} aria-expanded={open === "level"} onClick={() => toggle("level")}>
                {I.level}Level
              </button>
              <Menu id="level" options={LEVELS} value={level} onPick={choose(setLevel)} />
            </div>
            <div className="bs-l-drop">
              <button type="button" className={`bs-l-pill ${bodyFont.className}`} aria-expanded={open === "category"} onClick={() => toggle("category")}>
                {I.category}Category
              </button>
              <Menu id="category" options={CATEGORIES} value={category} onPick={choose(setCategory)} />
            </div>
          </div>

          <div className="bs-l-drop">
            <button type="button" className={`bs-l-pill ${bodyFont.className}`} aria-expanded={open === "sort"} onClick={() => toggle("sort")}>
              {I.sort}
              {sort}
            </button>
            <Menu id="sort" options={SORTS} value={sort} onPick={choose(setSort)} right />
          </div>
        </div>

        <div className="bs-l-chips">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              className={`bs-l-chip ${bodyFont.className}${c === category ? " on" : ""}`}
              onClick={() => choose(setCategory)(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {visible.length ? (
          <div className="bs-l-grid">
            {visible.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <p className="bs-l-empty">No courses found.</p>
        )}

        {pages > 0 && (
          <div className="bs-l-pager">
            <button type="button" className="bs-l-arrow" aria-label="Previous page" disabled={current === 1} onClick={() => setPage(current - 1)}>
              {I.left}
            </button>
            <div className="bs-l-nums">
              {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`bs-l-num ${headingFont.className}${n === current ? " on" : ""}`}
                  onClick={() => setPage(n)}
                >
                  {n}
                </button>
              ))}
            </div>
            <button type="button" className="bs-l-arrow" aria-label="Next page" disabled={current === pages} onClick={() => setPage(current + 1)}>
              {I.right}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}