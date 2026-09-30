"use client";

import { useState } from "react";
import Image from "next/image";

// Course data lives right here in the component
const data = {
  "header": {
    "title": "Discover Your Passion, Build Your Skills",
    "description": "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
  },
  "categories": [
    {
      "id": 1,
      "name": "Featured",
      "isActive": true
    },
    {
      "id": 2,
      "name": "Music",
      "isActive": false
    },
    {
      "id": 3,
      "name": "Drawing & Painting",
      "isActive": false
    },
    {
      "id": 4,
      "name": "Marketing",
      "isActive": false
    },
    {
      "id": 5,
      "name": "Animation",
      "isActive": false
    },
    {
      "id": 6,
      "name": "Social Media",
      "isActive": false
    },
    {
      "id": 7,
      "name": "UI/UX Design",
      "isActive": false
    },
    {
      "id": 8,
      "name": "Creative Marketing",
      "isActive": false
    },
    {
      "id": 9,
      "name": "Digital Illustration",
      "isActive": false
    },
    {
      "id": 10,
      "name": "Film & Video",
      "isActive": false
    },
    {
      "id": 11,
      "name": "Crafts",
      "isActive": false
    },
    {
      "id": 12,
      "name": "Freelance & Entrepreneurship",
      "isActive": false
    },
    {
      "id": 13,
      "name": "Graphic Design",
      "isActive": false
    },
    {
      "id": 14,
      "name": "Photography",
      "isActive": false
    },
    {
      "id": 15,
      "name": "Productivity",
      "isActive": false
    },
    {
      "id": 16,
      "name": "Web Development",
      "isActive": false
    },
    {
      "id": 17,
      "name": "Data Science",
      "isActive": false
    },
    {
      "id": 18,
      "name": "Cooking",
      "isActive": false
    },
    {
      "id": 19,
      "name": "+ More",
      "isActive": false
    }
  ],
  "courses": [
    {
      "id": "course-1",
      "title": "Learn Figma from Basic",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature1.jpg"
    },
    {
      "id": "course-2",
      "title": "Build Digital Asset",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature2.jpg"
    },
    {
      "id": "course-3",
      "title": "The Power of Big Data",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature3.jpg"
    },
    {
      "id": "course-4",
      "title": "Balancing Productivity an...",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature4.jpg"
    },
    {
      "id": "course-5",
      "title": "Mastering Image...",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature5.jpg"
    },
    {
      "id": "course-6",
      "title": "From Idea to Startup Succ...",
      "author": "purepearl studio",
      "rating": 4.5,
      "level": "Beginner",
      "price": 25,
      "pricingType": "lifetime",
      "duration": "2 hours 16 mins",
      "totalLessons": 17,
      "commentsCount": 59,
      "enrolledStudentsCount": "26+",
      "thumbnailUrl": "/feature6.jpg"
    }
  ]
};

const { header, categories, courses } = data;

// The design lays the category pills out in rows of 8 / 6 / 5
const CATEGORY_ROWS = [8, 6, 5];

function splitRows(list) {
  const rows = [];
  let i = 0;
  for (const n of CATEGORY_ROWS) {
    rows.push(list.slice(i, i + n));
    i += n;
  }
  if (i < list.length) rows.push(list.slice(i));
  return rows;
}

function StarIcon() {
  return (
    <svg className="bs-s-star" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path
        d="m6 .9 1.5 3.2 3.5.4-2.6 2.4.7 3.5L6 8.6 2.9 10.4l.7-3.5L1 4.5l3.5-.4L6 .9Z"
        fill="#c9c9ce"
        stroke="#c9c9ce"
        strokeWidth=".6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg className="bs-s-level-icon" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <rect x="1" y="6" width="1.8" height="3" rx=".5" fill="#4a4a55" />
      <rect x="4.1" y="3.8" width="1.8" height="5.2" rx=".5" fill="#4a4a55" />
      <rect x="7.2" y="1.5" width="1.8" height="7.5" rx=".5" fill="#4a4a55" />
    </svg>
  );
}

function CourseCard({ course }) {
  return (
    <article className="bs-s-card">
      <div className="bs-s-thumb">
        <Image
          src={course.thumbnailUrl}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 90vw, 25vw"
          style={{ objectFit: "cover" }}
        />
        <div className="bs-s-chips">
          <span className="bs-s-chip">{course.totalLessons} Lessons</span>
          <span className="bs-s-chip">{course.duration}</span>
          <span className="bs-s-chip">{course.commentsCount} Comments</span>
        </div>
      </div>

      <div className="bs-s-title-row">
        <h3 className="bs-s-title">{course.title}</h3>
        <span className="bs-s-rating">
          {course.rating}
          <StarIcon />
        </span>
      </div>

      <p className="bs-s-author">
        by <span>{course.author}</span>
      </p>

      <div className="bs-s-meta">
        <span className="bs-s-level">
          <LevelIcon />
          {course.level}
        </span>

        <div className="bs-s-students">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className="bs-s-avatar">
              <Image src={`/image${n}.png`} alt="" width={40} height={40} />
            </span>
          ))}
          <span className="bs-s-more">{course.enrolledStudentsCount}</span>
        </div>
      </div>

      <p className="bs-s-price">
        ${course.price}
        <span>/{course.pricingType}</span>
      </p>
    </article>
  );
}

export default function Skills() {
  const [activeId, setActiveId] = useState(
    categories.find((c) => c.isActive)?.id ?? categories[0].id
  );

  const [line1, line2] = header.title.split(/(?<=,)\s/);

  return (
    <>
      <section className="bs-skills" aria-labelledby="bs-skills-title">
        <h2 id="bs-skills-title" className="bs-s-heading">
          {line1}
          {line2 && (
            <>
              <br />
              {line2}
            </>
          )}
        </h2>

        <p className="bs-s-desc">{header.description}</p>

        <div className="bs-s-cats" role="tablist" aria-label="Course categories">
          {splitRows(categories).map((row, r) => (
            <div key={r} className="bs-s-cat-row">
              {row.map((cat) =>
                cat.name.startsWith("+") ? (
                  <button key={cat.id} type="button" className="bs-s-more-link">
                    {cat.name}
                  </button>
                ) : (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={cat.id === activeId}
                    className={`bs-s-cat${cat.id === activeId ? " is-active" : ""}`}
                    onClick={() => setActiveId(cat.id)}
                  >
                    {cat.name}
                  </button>
                )
              )}
            </div>
          ))}
        </div>

        <div className="bs-s-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      <style>{`
        /* 1 unit = 1 Figma px on the 765 wide frame */
        .bs-skills {
          --bs-u: min(calc(100vw / 765), 2.5px);
          --bs-lime: #c6ff3d;
          --bs-royal: #2333d8;
          --bs-ink: #0d0d14;
          width: 100%;
          padding: calc(39 * var(--bs-u)) 0 calc(27 * var(--bs-u));
          background: #fff;
          color: var(--bs-ink);
          text-align: center;
        }

        /* ---------- Header ---------- */
        .bs-s-heading {
          margin: 0;
          font-size: calc(21 * var(--bs-u));
          line-height: calc(28 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .bs-s-desc {
          max-width: calc(495 * var(--bs-u));
          margin: calc(7 * var(--bs-u)) auto 0;
          font-size: calc(8.3 * var(--bs-u));
          line-height: calc(17 * var(--bs-u));
          font-weight: 300;
          color: #9b9ba6;
        }

        /* ---------- Category pills ---------- */
        .bs-s-cats {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: calc(12 * var(--bs-u));
          margin-top: calc(21 * var(--bs-u));
        }

        .bs-s-cat-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: calc(7.5 * var(--bs-u));
        }

        .bs-s-cat {
          height: calc(22 * var(--bs-u));
          padding: 0 calc(9.5 * var(--bs-u));
          border: 0;
          border-radius: 999px;
          background: #f3f3f5;
          color: #3f3f46;
          font: inherit;
          font-size: calc(7.5 * var(--bs-u));
          font-weight: 400;
          white-space: nowrap;
          cursor: pointer;
          transition: background 0.15s ease;
        }

        .bs-s-cat:hover {
          background: #e9e9ed;
        }

        .bs-s-cat.is-active {
          background: var(--bs-lime);
          color: var(--bs-ink);
          font-weight: 500;
        }

        .bs-s-more-link {
          padding: 0 calc(8 * var(--bs-u));
          border: 0;
          background: transparent;
          color: var(--bs-royal);
          font: inherit;
          font-size: calc(7.5 * var(--bs-u));
          cursor: pointer;
        }

        .bs-s-cat:focus-visible,
        .bs-s-more-link:focus-visible {
          outline: 2px solid var(--bs-royal);
          outline-offset: 2px;
        }

        /* ---------- Grid ---------- */
        .bs-s-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: calc(24 * var(--bs-u)) calc(22 * var(--bs-u));
          width: calc(637 * var(--bs-u));
          margin: calc(42 * var(--bs-u)) auto 0;
          text-align: left;
        }

        .bs-s-card {
          padding: calc(8 * var(--bs-u));
          border: 1px solid #e3e3e8;
          border-radius: calc(14 * var(--bs-u));
          background: #fff;
        }

        .bs-s-card p,
        .bs-s-card h3 {
          margin: 0;
        }

        /* thumbnail + glass chips */
        .bs-s-thumb {
          position: relative;
          height: calc(104 * var(--bs-u));
          border-radius: calc(8 * var(--bs-u));
          overflow: hidden;
          background: #e9e9ee;
        }

        .bs-s-chips {
          position: absolute;
          left: calc(7 * var(--bs-u));
          bottom: calc(10 * var(--bs-u));
          display: flex;
          gap: calc(5 * var(--bs-u));
        }

        .bs-s-chip {
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

        /* title / rating / author */
        .bs-s-title-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: calc(6 * var(--bs-u));
          margin-top: calc(10 * var(--bs-u));
          height: calc(14 * var(--bs-u));
        }

        .bs-s-title {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: calc(10.5 * var(--bs-u));
          line-height: calc(14 * var(--bs-u));
          font-weight: 600;
          letter-spacing: -0.005em;
        }

        .bs-s-rating {
          display: inline-flex;
          align-items: center;
          gap: calc(2 * var(--bs-u));
          flex: none;
          font-size: calc(8 * var(--bs-u));
          color: #8b8b95;
        }

        .bs-s-star {
          width: calc(8 * var(--bs-u));
          height: calc(8 * var(--bs-u));
        }

        .bs-s-card .bs-s-author {
          margin-top: calc(1 * var(--bs-u));
          font-size: calc(6 * var(--bs-u));
          line-height: calc(9 * var(--bs-u));
          color: #8b8b95;
        }

        .bs-s-author span {
          color: var(--bs-royal);
        }

        /* level + students */
        .bs-s-meta {
          display: flex;
          align-items: center;
          gap: calc(7 * var(--bs-u));
          margin-top: calc(9 * var(--bs-u));
          height: calc(18 * var(--bs-u));
        }

        .bs-s-level {
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

        .bs-s-level-icon {
          width: calc(7 * var(--bs-u));
          height: calc(7 * var(--bs-u));
        }

        .bs-s-students {
          display: flex;
          align-items: center;
        }

        .bs-s-avatar {
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

        .bs-s-avatar:first-child {
          margin-left: 0;
        }

        .bs-s-avatar img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bs-s-more {
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

        /* price */
        .bs-s-card .bs-s-price {
          margin-top: calc(7 * var(--bs-u));
          margin-bottom: calc(3 * var(--bs-u));
          font-size: calc(10 * var(--bs-u));
          line-height: calc(12 * var(--bs-u));
          font-weight: 600;
          color: var(--bs-royal);
        }

        .bs-s-price span {
          margin-left: calc(1 * var(--bs-u));
          font-size: calc(6 * var(--bs-u));
          font-weight: 400;
          color: #8b8b95;
        }

        /* ---------- Small screens: one column, readable text ---------- */
        @media (max-width: 640px) {
          .bs-skills {
            --bs-u: calc(100vw / 320);
            padding-left: 16px;
            padding-right: 16px;
          }
          .bs-s-heading { font-size: max(calc(21 * var(--bs-u)), 24px); }
          .bs-s-desc { max-width: 100%; font-size: max(calc(8.3 * var(--bs-u)), 13px); }
          .bs-s-cat-row { flex-wrap: wrap; }
          .bs-s-cat, .bs-s-more-link { font-size: max(calc(7.5 * var(--bs-u)), 12px); }
          .bs-s-grid { width: 100%; grid-template-columns: 1fr; }
          .bs-s-thumb { height: calc(120 * var(--bs-u)); }
          .bs-s-chip { font-size: max(calc(6 * var(--bs-u)), 10px); }
          .bs-s-title { font-size: max(calc(10.5 * var(--bs-u)), 16px); }
          .bs-s-rating { font-size: max(calc(8 * var(--bs-u)), 13px); }
          .bs-s-card .bs-s-author { font-size: max(calc(6 * var(--bs-u)), 11px); }
          .bs-s-level { font-size: max(calc(6.5 * var(--bs-u)), 11px); }
          .bs-s-card .bs-s-price { font-size: max(calc(10 * var(--bs-u)), 16px); }
        }
      `}</style>
    </>
  );
}