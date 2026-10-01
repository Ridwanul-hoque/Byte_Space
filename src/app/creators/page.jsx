"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Poppins, Urbanist } from "next/font/google";

const headingFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });


const profile = {
  name: "PurePearl Studio",
  badge: "Creator",
  tagline: "Passionate UI/UX, Web designer",
  avatar: "/image1.png",

  bio: [
    [
      "Welcome to the creative world of (Creator's Name). Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's",
      "explore and learn together!",
    ],
    [
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story.",
      "Explore the world of creativity with me.",
    ],
  ],
  products: 3,
  followers: 12,
};

const FILTERS = ["Filter", "Level", "Category"];
const SORT_LABEL = "Most relevant";

const data = {
  courses: [
    {
      id: "course-1",
      title: "Learn Figma from Basic",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature1.jpg",
    },
    {
      id: "course-2",
      title: "Build Digital Asset",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature2.jpg",
    },
    {
      id: "course-3",
      title: "The Power of Big Data",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature3.jpg",
    },
    {
      id: "course-4",
      title: "Balancing Productivity an...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature4.jpg",
    },
    {
      id: "course-5",
      title: "Mastering Image...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature5.jpg",
    },
    {
      id: "course-6",
      title: "From Idea to Startup Succ...",
      author: "purepearl studio",
      rating: 4.5,
      level: "Beginner",
      price: 25,
      pricingType: "lifetime",
      duration: "2 hours 16 mins",
      totalLessons: 17,
      commentsCount: 59,
      enrolledStudentsCount: "26+",
      thumbnailUrl: "/feature6.jpg",
    },
  ],
};


const css = `
.pc{--pc-nav:calc(62 * min(calc(100vw / 765), 2.5px));position:relative;display:block;width:100%;background:#fff;color:#111;overflow-x:clip}
.pc *,.pc *::before,.pc *::after{box-sizing:border-box}
.pc a{color:inherit;text-decoration:none}
.pc .pc-wrap{width:100%;max-width:1200px;margin:0 auto}

/* ---------- hero ---------- */
.pc .pc-hero{position:relative;isolation:isolate;padding:calc(56px + var(--pc-nav)) 0 81px;color:#fff}
.pc .pc-hero::before{content:"";position:absolute;z-index:-1;top:0;bottom:0;left:50%;width:100vw;margin-left:-50vw;background-color:#1c2ed8;background-image:linear-gradient(to right,rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.12) 1px,transparent 1px);background-size:240px 240px;background-position:calc(50vw - 600px) 100%}
.pc .pc-id{display:flex;align-items:flex-start;gap:26px}
.pc .pc-avatar{position:relative;width:96px;height:96px;border-radius:20px;overflow:hidden;background:#f4a3a6;flex:none}
.pc .pc-avatar img{object-fit:cover}
.pc .pc-who{padding-top:8px;min-width:0}
.pc .pc-name-row{display:flex;align-items:center;flex-wrap:wrap;gap:6px 14px}
.pc .pc-name{margin:0;font-size:34px;line-height:44px;font-weight:600;color:#fff}
.pc .pc-badge{display:inline-flex;align-items:center;height:36px;padding:0 22px;border-radius:999px;background:#d2f53b;color:#111;font-size:14px;font-weight:400;white-space:nowrap}
.pc .pc-tag{margin:6px 0 0;font-size:18px;line-height:28px;font-weight:300;color:rgba(255,255,255,.92)}
.pc .pc-bio{margin:41px 0 0}
.pc .pc-bio p{margin:0;font-size:17px;line-height:29px;font-weight:300;color:rgba(255,255,255,.92)}
.pc .pc-bio-line{display:block}
.pc .pc-bio p + p{margin-top:4px}
.pc .pc-actions{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:35px}
.pc .pc-stats{display:flex;flex-wrap:wrap;gap:20px}
.pc .pc-pill{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:46px;padding:0 32px;border:0;border-radius:999px;background:#fff;color:#111;font-size:15px;font-weight:400;white-space:nowrap}
.pc .pc-pill b{font-weight:600;color:#1d3fd9}
.pc .pc-follow{display:inline-flex;align-items:center;justify-content:center;width:100px;height:46px;padding:0;border:0;border-radius:999px;background:#d2f53b;color:#111;font-size:15px;font-weight:400;cursor:pointer;white-space:nowrap}
.pc .pc-follow:hover{filter:brightness(.97)}

/* ---------- filters ---------- */
.pc .pc-filters{display:flex;align-items:center;flex-wrap:wrap;gap:12px 20px;margin-top:64px}
.pc .pc-chip{display:inline-flex;align-items:center;gap:8px;height:46px;padding:0 17px;border:1px solid #dcdcdc;border-radius:999px;background:#fff;color:#222;font-size:14px;font-weight:500;cursor:pointer;white-space:nowrap}
.pc .pc-chip:hover{border-color:#bdbdbd}
.pc .pc-chip svg{display:block;width:16px;height:16px;flex:none}
.pc .pc-sort{margin-left:auto}

/* ---------- grid ---------- */
.pc .pc-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px;margin:43px 0 0;padding:0 0 62px;list-style:none}
.pc .pc-card-wrap{container-type:inline-size;min-width:0}

/* card: every size scales with the card width (--cu = 1 unit of the 197.7 wide design card) */
.pc .pc-card{--cu:calc(100cqw / 197.7);--pc-royal:#2333d8;--pc-lime:#c6ff3d;padding:calc(8 * var(--cu));border:1px solid #e3e3e8;border-radius:calc(14 * var(--cu));background:#fff}
.pc .pc-card p,.pc .pc-card h3{margin:0}
.pc .pc-thumb{position:relative;height:calc(104 * var(--cu));border-radius:calc(8 * var(--cu));overflow:hidden;background:#e9e9ee}
.pc .pc-thumb img{object-fit:cover}
.pc .pc-chips{position:absolute;left:calc(7 * var(--cu));bottom:calc(10 * var(--cu));display:flex;gap:calc(5 * var(--cu))}
.pc .pc-chipx{display:inline-flex;align-items:center;height:calc(14 * var(--cu));padding:0 calc(6 * var(--cu));border-radius:999px;background:rgba(235,235,238,.72);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);color:#55555f;font-size:calc(6 * var(--cu));white-space:nowrap}
.pc .pc-trow{display:flex;align-items:center;justify-content:space-between;gap:calc(6 * var(--cu));margin-top:calc(10 * var(--cu));height:calc(14 * var(--cu))}
.pc .pc-ctitle{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:calc(10.5 * var(--cu));line-height:calc(14 * var(--cu));font-weight:600;color:#0d0d14}
.pc .pc-rating{display:inline-flex;align-items:center;gap:calc(2 * var(--cu));flex:none;font-size:calc(8 * var(--cu));color:#8b8b95}
.pc .pc-star{width:calc(8 * var(--cu));height:calc(8 * var(--cu));color:#c9c9ce}
.pc .pc-card .pc-author{margin-top:calc(1 * var(--cu));font-size:calc(6 * var(--cu));line-height:calc(9 * var(--cu));color:#8b8b95}
.pc .pc-author span{color:var(--pc-royal)}
.pc .pc-meta{display:flex;align-items:center;gap:calc(7 * var(--cu));margin-top:calc(9 * var(--cu));height:calc(18 * var(--cu))}
.pc .pc-level{display:inline-flex;align-items:center;gap:calc(4 * var(--cu));height:100%;padding:0 calc(8 * var(--cu));border-radius:999px;background:#f3f3f5;color:#4a4a55;font-size:calc(6.5 * var(--cu))}
.pc .pc-level svg{width:calc(7 * var(--cu));height:calc(7 * var(--cu))}
.pc .pc-avatars{display:flex;align-items:center}
.pc .pc-av{position:relative;flex:none;width:calc(17 * var(--cu));height:calc(17 * var(--cu));margin-left:calc(-5 * var(--cu));border:calc(1.2 * var(--cu)) solid #fff;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,#c9cdea,#9aa2d6)}
.pc .pc-av:first-child{margin-left:0}
.pc .pc-av img{display:block;width:100%;height:100%;object-fit:cover}
.pc .pc-more{flex:none;display:grid;place-items:center;width:calc(17 * var(--cu));height:calc(17 * var(--cu));margin-left:calc(-4 * var(--cu));border-radius:50%;background:var(--pc-lime);color:#0d0d14;font-size:calc(5.5 * var(--cu));font-weight:600}
.pc .pc-card .pc-price{margin-top:calc(7 * var(--cu));margin-bottom:calc(3 * var(--cu));font-size:calc(10 * var(--cu));line-height:calc(12 * var(--cu));font-weight:600;color:var(--pc-royal)}
.pc .pc-price span{margin-left:calc(1 * var(--cu));font-size:calc(6 * var(--cu));font-weight:400;color:#8b8b95}

/* ---------- responsive ---------- */
@media (max-width:1280px){
  .pc .pc-wrap{padding:0 40px}
}
@media (max-width:1000px){
  .pc .pc-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}
}
@media (max-width:700px){
  .pc .pc-wrap{padding:0 16px}
  .pc .pc-hero{padding-bottom:48px}
  .pc .pc-id{gap:16px}
  .pc .pc-avatar{width:72px;height:72px;border-radius:16px}
  .pc .pc-who{padding-top:2px}
  .pc .pc-name{font-size:24px;line-height:32px}
  .pc .pc-badge{height:30px;padding:0 16px;font-size:13px}
  .pc .pc-tag{font-size:15px;line-height:22px;margin-top:2px}
  .pc .pc-bio{margin-top:24px}
  .pc .pc-bio p{font-size:15px;line-height:25px}
  .pc .pc-bio-line{display:inline}
  .pc .pc-bio-line::after{content:" "}
  .pc .pc-actions{flex-wrap:wrap;margin-top:28px}
  .pc .pc-pill,.pc .pc-follow{height:42px;padding:0 22px;font-size:14px}
  .pc .pc-follow{width:100%}
  .pc .pc-filters{margin-top:36px;gap:10px}
  .pc .pc-chip{height:40px;padding:0 14px;font-size:13px}
  .pc .pc-sort{margin-left:0}
  .pc .pc-grid{grid-template-columns:minmax(0,1fr);gap:20px;margin-top:28px}
}
/* the navbar scales differently on phones, so the space above the hero does too */
@media (max-width:640px){
  .pc{--pc-nav:calc(62 * (100vw / 480))}
}
`;


const iconFilter = (
  <svg viewBox="0 0 16 16" fill="none" stroke="#222" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M2 3.2h12l-4.6 5.4v4.2l-2.8-1.5V8.6L2 3.2Z" />
  </svg>
);
const iconLevel = (
  <svg viewBox="0 0 16 16" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
    <path d="M4 13V9.5M8 13V3.5M12 13V7" />
  </svg>
);
const iconCategory = (
  <svg viewBox="0 0 16 16" fill="none" stroke="#222" strokeWidth="1.3" strokeLinejoin="round" aria-hidden="true">
    <rect x="2.2" y="2.2" width="4.6" height="4.6" rx="1.2" />
    <rect x="9.2" y="2.2" width="4.6" height="4.6" rx="1.2" />
    <rect x="2.2" y="9.2" width="4.6" height="4.6" rx="1.2" />
    <rect x="9.2" y="9.2" width="4.6" height="4.6" rx="1.2" />
  </svg>
);
const iconSort = (
  <svg viewBox="0 0 16 16" fill="none" stroke="#222" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
    <path d="M2.5 4h11M2.5 8h7.5M2.5 12h4" />
  </svg>
);
const filterIcons = { Filter: iconFilter, Level: iconLevel, Category: iconCategory };

function StarIcon() {
  return (
    <svg className="pc-star" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
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
    <svg viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <rect x="1" y="6" width="1.8" height="3" rx=".5" fill="#4a4a55" />
      <rect x="4.1" y="3.8" width="1.8" height="5.2" rx=".5" fill="#4a4a55" />
      <rect x="7.2" y="1.5" width="1.8" height="7.5" rx=".5" fill="#4a4a55" />
    </svg>
  );
}

function CourseCard({ course }) {
  return (
    <li className="pc-card-wrap">
      <article className="pc-card">
        <div className="pc-thumb">
          <Image
            src={course.thumbnailUrl}
            alt={course.title}
            fill
            sizes="(max-width: 700px) 92vw, (max-width: 1000px) 46vw, 400px"
            style={{ objectFit: "cover" }}
          />
          <div className="pc-chips">
            <span className="pc-chipx">{course.totalLessons} Lessons</span>
            <span className="pc-chipx">{course.duration}</span>
            <span className="pc-chipx">{course.commentsCount} Comments</span>
          </div>
        </div>

        <div className="pc-trow">
          <h3 className={`pc-ctitle ${headingFont.className}`}>{course.title}</h3>
          <span className="pc-rating">
            {course.rating}
            <StarIcon />
          </span>
        </div>

        <p className="pc-author">
          by <span>{course.author}</span>
        </p>

        <div className="pc-meta">
          <span className="pc-level">
            <LevelIcon />
            {course.level}
          </span>
          <div className="pc-avatars">
            {[1, 2, 3, 4].map((n) => (
              <span key={n} className="pc-av">
   
                <Image src={`/image${n}.png`} alt="" width={40} height={40} />
              </span>
            ))}
            <span className="pc-more">{course.enrolledStudentsCount}</span>
          </div>
        </div>

        <p className={`pc-price ${headingFont.className}`}>
          ${course.price}
          <span>/{course.pricingType}</span>
        </p>
      </article>
    </li>
  );
}



export default function CreatorProfile() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nav = document.querySelector(".bs-nav") || document.querySelector("header");
    if (!nav) return;
    const apply = () => {
      const pos = getComputedStyle(nav).position;
      const overlay = pos === "absolute" || pos === "fixed";
      root.style.setProperty("--pc-nav", overlay ? `${Math.round(nav.getBoundingClientRect().height)}px` : "0px");
    };
    apply();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(apply) : null;
    if (ro) ro.observe(nav);
    window.addEventListener("resize", apply);
    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <section ref={rootRef} className={`pc ${bodyFont.className}`} aria-label={`${profile.name} profile`}>
      <style>{css}</style>

      {/* hero */}
      <div className={`pc-hero ${headingFont.className}`}>
        <div className="pc-wrap">
          <div className="pc-id">
            <div className="pc-avatar">
              <Image src={profile.avatar} alt={profile.name} fill sizes="96px" style={{ objectFit: "cover" }} />
            </div>
            <div className="pc-who">
              <div className="pc-name-row">
                <h1 className={`pc-name ${headingFont.className}`}>{profile.name}</h1>
                <span className={`pc-badge ${bodyFont.className}`}>{profile.badge}</span>
              </div>
              <p className={`pc-tag ${bodyFont.className}`}>{profile.tagline}</p>
            </div>
          </div>

          <div className={`pc-bio ${bodyFont.className}`}>
            {profile.bio.map((lines, i) => (
              <p key={i}>
                {lines.map((line) => (
                  <span key={line} className="pc-bio-line">
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>

          <div className={`pc-actions ${bodyFont.className}`}>
            <div className="pc-stats">
              <span className="pc-pill">
                <b>{profile.products}</b> Products
              </span>
              <span className="pc-pill">
                <b>{profile.followers}</b> Followers
              </span>
            </div>
            <button type="button" className="pc-follow">
              Follow
            </button>
          </div>
        </div>
      </div>


      <div className="pc-wrap">
        <div className={`pc-filters ${bodyFont.className}`}>
          {FILTERS.map((f) => (
            <button key={f} type="button" className="pc-chip">
              {filterIcons[f]}
              {f}
            </button>
          ))}
          <button type="button" className="pc-chip pc-sort">
            {iconSort}
            {SORT_LABEL}
          </button>
        </div>

        <ul className="pc-grid">
          {data.courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </ul>
      </div>
    </section>
  );
}