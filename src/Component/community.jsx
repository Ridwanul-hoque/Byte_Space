"use client";

import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";

const headingFont = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["500", "600", "700"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500"] });

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/sarah.png",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "james.png",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "alex.png",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

// Plain CSS string injected through a <style> tag (no styled-jsx, no extra file).
const css = `
.bs-community{position:relative;display:block;width:100%;overflow:hidden;background:#f8f8f7;padding:68px 0 56px;box-sizing:border-box;opacity:1;visibility:visible}
.bs-community *,.bs-community *::before,.bs-community *::after{box-sizing:border-box}

.bs-community .bs-glows{position:absolute;top:0;bottom:0;left:50%;width:1440px;margin-left:-720px;pointer-events:none;z-index:0}
.bs-community .bs-glow{position:absolute;display:block;border-radius:50%}
.bs-community .bs-g-wide{left:520px;top:-130px;width:900px;height:480px;background:rgba(224,247,118,.7);filter:blur(100px)}
.bs-community .bs-g-core{left:560px;top:105px;width:250px;height:250px;background:#cff03a;opacity:.85;filter:blur(55px)}
.bs-community .bs-g-topright{left:1180px;top:-220px;width:520px;height:520px;background:#e4f78c;opacity:.75;filter:blur(90px)}
.bs-community .bs-g-right{left:1240px;top:250px;width:380px;height:380px;background:#e2f596;opacity:.5;filter:blur(100px)}
.bs-community .bs-g-blue{left:-220px;top:500px;width:520px;height:520px;background:#b1bdf2;opacity:.85;filter:blur(100px)}

.bs-community .bs-container{position:relative;z-index:1;width:100%;max-width:1200px;margin:0 auto}
.bs-community .bs-head{display:flex;flex-direction:row;align-items:flex-end;justify-content:space-between;gap:48px;margin:0 0 75px}
.bs-community .bs-title{margin:0;padding:0;flex:none;font-size:48px;line-height:52px;font-weight:700;letter-spacing:-.02em;color:#000;opacity:1}
.bs-community .bs-desc{margin:0;padding:0;width:100%;max-width:561px;font-size:16px;line-height:30px;font-weight:300;color:#3d3d3d;opacity:1}

.bs-community .bs-cards{display:grid;grid-template-columns:repeat(3,374px);gap:39px;align-items:start;justify-content:space-between}
.bs-community .bs-card{width:374px;padding:24px;background:#fff;border-radius:24px;opacity:1}
.bs-community .bs-avatar{display:block;width:80px;height:80px;border-radius:50%;object-fit:cover}
.bs-community .bs-name{margin:21px 0 0;padding:0;font-size:20px;line-height:28px;font-weight:600;color:#000;opacity:1}
.bs-community .bs-role{display:block;margin:4px 0 0;padding:0;font-size:16px;line-height:24px;font-weight:400;color:#1d3fd9;opacity:1}
.bs-community .bs-quote{margin:22px 0 0;padding:0;font-size:16px;line-height:30px;font-weight:300;color:#2f2f2f;opacity:1}

@media (max-width:1280px){
  .bs-community .bs-container{padding:0 40px}
  .bs-community .bs-cards{grid-template-columns:repeat(3,1fr);gap:24px}
  .bs-community .bs-card{width:auto}
}
@media (max-width:960px){
  .bs-community .bs-head{flex-direction:column;align-items:flex-start;gap:24px;margin-bottom:48px}
  .bs-community .bs-cards{grid-template-columns:1fr}
}
@media (max-width:560px){
  .bs-community .bs-container{padding:0 16px}
  .bs-community .bs-title{font-size:34px;line-height:38px}
}
`;

export default function CommunityTestimonials() {
  return (
    <section className="bs-community">
      <style>{css}</style>

      <div className="bs-glows" aria-hidden="true">
        <span className="bs-glow bs-g-wide" />
        <span className="bs-glow bs-g-core" />
        <span className="bs-glow bs-g-topright" />
        <span className="bs-glow bs-g-right" />
        <span className="bs-glow bs-g-blue" />
      </div>

      <div className="bs-container">
        <div className="bs-head">
          <h2 className={`bs-title ${headingFont.className}`}>
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className={`bs-desc ${bodyFont.className}`}>
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform.
            Explore testimonials that reflect the diverse perspectives of
            enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="bs-cards">
          {testimonials.map((t) => (
            <article className="bs-card" key={t.name}>
              <img className="bs-avatar" src={t.avatar} alt={t.name} width={80} height={80} />
              <h3 className={`bs-name ${headingFont.className}`}>{t.name}</h3>
              <span className={`bs-role ${headingFont.className}`}>{t.role}</span>
              <p className={`bs-quote ${bodyFont.className}`}>{t.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}