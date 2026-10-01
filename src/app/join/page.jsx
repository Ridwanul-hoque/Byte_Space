'use client';

import { useState } from 'react';
import Link from 'next/link';

const LOGIN_PATH = '/sign-in';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function validate(values) {
    const errors = {};
    if (values.fullName.trim().length < 2)
        errors.fullName = 'Enter your full name.';
    if (!values.email.trim())
        errors.email = 'Enter your email address.';
    else if (!EMAIL_PATTERN.test(values.email.trim()))
        errors.email = 'Enter a valid email address.';
    if (!values.password)
        errors.password = 'Create a password.';
    else if (values.password.length < MIN_PASSWORD_LENGTH)
        errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
    return errors;
}

const AVATAR_COLORS = ['#F5A524', '#7C5CFF', '#18B999', '#FF6B8B'];
const CHART_BARS = [10, 16, 26, 40, 60, 86, 112, 126, 104, 78, 54, 38, 26, 18, 12, 8];
const STAR_PATH = 'M12 2l3 6.9 7.4.6-5.6 4.9 1.7 7.3-6.5-3.9-6.5 3.9 1.7-7.3L1.6 9.5 9 8.9z';

function ByteLogo() {
    return (
        <Link href="/" aria-label="ByteSpace Home" style={{ display: 'block' }}>
            <svg className="bss-logo" viewBox="0 0 40 40" role="img" aria-label="ByteSpace">
              <rect width="40" height="40" rx="12" fill="#C8F63C"/>
              <rect x="11" y="8" width="7" height="24" rx="3.5" fill="#1D2FE0"/>
              <circle cx="22.5" cy="24" r="6.5" fill="none" stroke="#1D2FE0" strokeWidth="6.5"/>
            </svg>
        </Link>
    );
}

function PillIcon({ d }) {
    return (<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d}/>
    </svg>);
}

function LevelIcon() {
    return (<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true">
      <rect x="3" y="14" width="4" height="7" rx="1"/>
      <rect x="10" y="9" width="4" height="12" rx="1" opacity=".55"/>
      <rect x="17" y="4" width="4" height="17" rx="1" opacity=".3"/>
    </svg>);
}

function Star() {
    return (<svg viewBox="0 0 24 24" aria-hidden="true">
      <path d={STAR_PATH}/>
    </svg>);
}

function AvatarStack({ ring = '#fff' }) {
    return (<span className="bss-stack">
      {AVATAR_COLORS.map((color) => (<span key={color} className="bss-avatar" style={{ background: color, borderColor: ring }}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="9.5" r="4" fill="rgba(255,255,255,.9)"/>
            <path d="M4 24c0-4.8 3.6-8.5 8-8.5s8 3.7 8 8.5z" fill="rgba(255,255,255,.9)"/>
          </svg>
        </span>))}
      <span className="bss-count" style={{ borderColor: ring }}>26+</span>
    </span>);
}

function Illustration() {
    return (<div className="bss-illus" aria-hidden="true">
      <div className="bss-stage">
        <div className="bss-back">
          <div className="bss-backimg">
            <svg viewBox="0 0 24 24">
              <path d="M5 3l14 7-6 2-2 6z" fill="#8A8FAE"/>
            </svg>
            <span className="bss-pill bss-pill--light">
              <PillIcon d="M7 5l12 7-12 7z"/>
              7 Lessons
            </span>
          </div>
          <p className="bss-ctitle">Build Digital</p>
          <p className="bss-by">by compaint studio</p>
          <div className="bss-row">
            <span className="bss-level">
              <LevelIcon />
              Beginner
            </span>
            <AvatarStack />
          </div>
          <div className="bss-row">
            <span className="bss-price">
              $25<small>$120/mo</small>
            </span>
          </div>
        </div>

        <div className="bss-front">
          <div className="bss-media">
            <svg viewBox="0 0 342 210" preserveAspectRatio="none">
              {[50, 90, 130, 170].map((y) => (<line key={y} x1="0" x2="342" y1={y} y2={y} stroke="rgba(255,255,255,.08)"/>))}
              {CHART_BARS.map((h, i) => (<rect key={i} x={18 + i * 19} y={168 - h} width="12" height={h} rx="2" fill={i % 2 ? '#2BD9C0' : '#3D6BFF'} opacity=".9"/>))}
              <path d="M18 160 C 70 150, 100 60, 160 44 S 260 150, 324 162" fill="none" stroke="#7CF5E0" strokeWidth="2"/>
            </svg>
            <div className="bss-pills">
              <span className="bss-pill">
                <PillIcon d="M7 5l12 7-12 7z"/>
                7 Lessons
              </span>
              <span className="bss-pill">
                <PillIcon d="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                12 hrs 30 mins
              </span>
              <span className="bss-pill">
                <PillIcon d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/>
                28 Downloads
              </span>
            </div>
          </div>
          <div className="bss-head">
            <p className="bss-ftitle">the Power of Big Data</p>
            <span className="bss-rating">
              4.5 <Star />
            </span>
          </div>
          <p className="bss-by">by compaint studio</p>
          <div className="bss-row">
            <span className="bss-level">
              <LevelIcon />
              Beginner
            </span>
            <AvatarStack />
          </div>
          <div className="bss-row">
            <span className="bss-price">
              $25<small>$120/mo</small>
            </span>
          </div>
        </div>

        <div className="bss-happy">
          <p className="bss-happy-title">Happy Students</p>
          <div className="bss-happy-rate">
            4.5
            {[0, 1, 2, 3, 4].map((i) => (<Star key={i}/>))}
          </div>
          <div className="bss-row">
            <AvatarStack ring="#C8F63C"/>
          </div>
        </div>

        <span className="bss-ring"/>
        <span className="bss-tri"/>
        <svg className="bss-squig" viewBox="0 0 100 80" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 60C28 14 40 70 54 30s26 36 38-14"/>
        </svg>
      </div>
    </div>);
}

export default function SignUp({ onSubmit }) {
    const [values, setValues] = useState({ fullName: '', email: '', password: '' });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: undefined }));
        setFormError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nextErrors = validate(values);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0)
            return;

        setSubmitting(true);
        setFormError('');

        try {
            await onSubmit?.({
                fullName: values.fullName.trim(),
                email: values.email.trim(),
                password: values.password,
            });
        }
        catch {
            setFormError('We could not create your account. Try again in a moment.');
        }
        finally {
            setSubmitting(false);
        }
    };

    return (<>
      <style>{styles}</style>
      <main className="bss-page">
        <div className="bss-shell">
          <section className="bss-left">
            <ByteLogo />
            <div className="bss-intro">
              <p className="bss-intro-title">Sign up and come in</p>
              <p className="bss-intro-text">
                The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
              </p>
            </div>
            <Illustration />
          </section>

          <section className="bss-card" aria-labelledby="bss-heading">
            <p className="bss-eyebrow">Create an Account</p>
            <h1 id="bss-heading" className="bss-title">Welcome to ByteSpace</h1>

            <form className="bss-form" onSubmit={handleSubmit} noValidate>
              {formError && (<p className="bss-form-error" role="alert">{formError}</p>)}

              <div className="bss-field">
                <label className="bss-label" htmlFor="bss-fullName">Full Name</label>
                <input id="bss-fullName" className="bss-input" type="text" name="fullName" value={values.fullName} onChange={handleChange} placeholder="Jamie Davis" autoComplete="name" aria-invalid={errors.fullName ? 'true' : 'false'} aria-describedby={errors.fullName ? 'bss-fullName-error' : undefined}/>
                {errors.fullName && <p id="bss-fullName-error" className="bss-error">{errors.fullName}</p>}
              </div>

              <div className="bss-field">
                <label className="bss-label" htmlFor="bss-email">Email</label>
                <input id="bss-email" className="bss-input" type="email" name="email" value={values.email} onChange={handleChange} placeholder="designer@example.com" autoComplete="email" aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'bss-email-error' : undefined}/>
                {errors.email && <p id="bss-email-error" className="bss-error">{errors.email}</p>}
              </div>

              <div className="bss-field">
                <label className="bss-label" htmlFor="bss-password">Password</label>
                <input id="bss-password" className="bss-input" type="password" name="password" value={values.password} onChange={handleChange} placeholder="••••••••" autoComplete="new-password" aria-invalid={errors.password ? 'true' : 'false'} aria-describedby={errors.password ? 'bss-password-error' : undefined}/>
                {errors.password && <p id="bss-password-error" className="bss-error">{errors.password}</p>}
              </div>

              <button className="bss-btn" type="submit" disabled={submitting}>
                {submitting ? 'Creating…' : 'Continue'}
              </button>
            </form>

            <p className="bss-switch">
              Already have an account? <Link href={LOGIN_PATH}>Login</Link>
            </p>
          </section>
        </div>
      </main>
    </>);
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.bss-page{--s:1;position:relative;box-sizing:border-box;width:100%;min-height:100vh;padding:40px clamp(20px,4vw,64px);background-color:#1D2FE0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:72px 72px;background-position:-1px -1px;font-family:'Plus Jakarta Sans',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;overflow-x:hidden}
.bss-page *,.bss-page *::before,.bss-page *::after{box-sizing:border-box}
.bss-shell{max-width:1320px;min-height:calc(100vh - 80px);margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) clamp(340px,40vw,560px);column-gap:clamp(32px,5vw,96px);align-items:stretch}
.bss-left{display:flex;flex-direction:column;align-items:flex-start;min-width:0}
.bss-logo{display:block;width:40px;height:40px}
.bss-intro{max-width:380px;margin-top:22px}
.bss-intro-title{margin:0 0 8px;font-size:17px;font-weight:600;line-height:1.3}
.bss-intro-text{margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.72)}

.bss-card{display:flex;flex-direction:column;min-width:0;padding:clamp(28px,3.4vw,52px);background:#fff;color:#0E1030;border-radius:28px;box-shadow:0 30px 80px rgba(6,10,90,.35)}
.bss-eyebrow{margin:0 0 8px;font-size:14px;font-weight:500;color:#1D2FE0}
.bss-title{margin:0 0 clamp(24px,3vw,36px);font-size:clamp(30px,3.1vw,44px);font-weight:800;line-height:1.08;letter-spacing:-.03em}
.bss-form{display:flex;flex-direction:column}
.bss-field{margin-bottom:18px}
.bss-label{display:block;margin-bottom:8px;font-size:12px;font-weight:600;color:#1A1C3A}
.bss-input{display:block;width:100%;height:50px;padding:0 16px;font:inherit;font-size:14px;color:#0E1030;background:#F3F4FA;border:1px solid #E6E8F2;border-radius:12px;outline:none;transition:border-color .15s,box-shadow .15s,background-color .15s}
.bss-input::placeholder{color:#9A9FBC}
.bss-input:focus{background:#fff;border-color:#1D2FE0;box-shadow:0 0 0 3px rgba(29,47,224,.16)}
.bss-input[aria-invalid='true']{background:#FFF6F6;border-color:#E5484D}
.bss-input[aria-invalid='true']:focus{box-shadow:0 0 0 3px rgba(229,72,77,.18)}
.bss-error{margin:6px 2px 0;font-size:12px;line-height:1.4;color:#D13438}
.bss-form-error{margin:0 0 14px;padding:10px 12px;font-size:13px;line-height:1.4;color:#B42318;background:#FFF1F0;border-radius:10px}
.bss-btn{align-self:flex-end;min-width:104px;height:46px;margin-top:6px;padding:0 26px;font:inherit;font-size:15px;font-weight:700;color:#0E1030;background:#C8F63C;border:0;border-radius:999px;cursor:pointer;transition:filter .15s,transform .15s}
.bss-btn:hover{filter:brightness(.96)}
.bss-btn:active{transform:translateY(1px)}
.bss-btn:focus-visible{outline:3px solid #1D2FE0;outline-offset:3px}
.bss-btn:disabled{opacity:.65;cursor:not-allowed}
.bss-divider{display:flex;align-items:center;gap:16px;margin:34px 0 24px;font-size:13px;color:#8A8FAE}
.bss-divider::before,.bss-divider::after{content:'';flex:1;height:1px;background:#E6E8F2}
.bss-social{display:flex;justify-content:center;gap:14px}
.bss-social-btn{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;padding:0;background:#fff;border:1px solid #E6E8F2;border-radius:14px;cursor:pointer;transition:border-color .15s,box-shadow .15s}
.bss-social-btn:hover{border-color:#C9CDE4;box-shadow:0 4px 14px rgba(14,16,48,.08)}
.bss-social-btn:focus-visible{outline:3px solid #1D2FE0;outline-offset:2px}
.bss-switch{margin:auto 0 0;padding-top:36px;text-align:center;font-size:13px;color:#6A6F93}
.bss-switch a{color:#1D2FE0;font-weight:600;text-decoration:none}
.bss-switch a:hover{text-decoration:underline}
.bss-switch a:focus-visible{outline:2px solid #1D2FE0;outline-offset:2px;border-radius:4px}

.bss-illus{flex:none;width:calc(500px * var(--s));height:calc(560px * var(--s));margin-top:48px}
.bss-stage{position:relative;width:500px;height:560px;transform:scale(var(--s));transform-origin:top left}
.bss-back{position:absolute;left:0;top:160px;width:230px;height:350px;padding:14px;color:#0E1030;background:#EDEEF4;border-radius:26px}
.bss-backimg{position:relative;display:flex;align-items:center;justify-content:center;height:150px;background:#DCDEE8;border-radius:18px}
.bss-backimg > svg{width:64px;height:64px}
.bss-backimg .bss-pill{position:absolute;left:10px;bottom:10px}
.bss-ctitle{margin:12px 0 0;font-size:26px;font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#0E1030;white-space:nowrap}
.bss-by{margin:2px 0 0;font-size:12px;color:#2433E6;white-space:nowrap}
.bss-row{display:flex;align-items:center;justify-content:space-between;margin-top:14px}
.bss-level{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:600;color:#3A3D5C;background:rgba(14,16,48,.07);border-radius:999px}
.bss-price{font-size:24px;font-weight:800;letter-spacing:-.02em;color:#1D2FE0}
.bss-price small{margin-left:6px;font-size:11px;font-weight:600;letter-spacing:0;color:#8A8FAE}
.bss-front{position:absolute;left:130px;top:0;width:370px;height:400px;padding:14px;color:#0E1030;background:#fff;border-radius:26px;box-shadow:0 24px 60px rgba(4,8,70,.28)}
.bss-media{position:relative;height:210px;overflow:hidden;background:radial-gradient(120% 90% at 0% 0%,#1B4D4A 0%,#0A1226 55%);border-radius:18px}
.bss-media > svg{position:absolute;inset:0;width:100%;height:100%}
.bss-pills{position:absolute;left:10px;right:10px;bottom:10px;display:flex;gap:5px}
.bss-pill{display:inline-flex;align-items:center;gap:4px;padding:6px 8px;font-size:10.5px;font-weight:600;color:#D9DDF2;white-space:nowrap;background:rgba(255,255,255,.16);border-radius:999px;backdrop-filter:blur(6px)}
.bss-pill--light{color:#4A4E6E;background:rgba(255,255,255,.75)}
.bss-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-top:14px}
.bss-ftitle{margin:0;font-size:20px;font-weight:800;line-height:1.2;letter-spacing:-.02em}
.bss-rating{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:700;white-space:nowrap}
.bss-rating svg{width:15px;height:15px;fill:#BEEA25}
.bss-stack{display:inline-flex;align-items:center}
.bss-avatar{display:block;width:28px;height:28px;margin-left:-8px;overflow:hidden;border:2px solid #fff;border-radius:50%}
.bss-avatar:first-child{margin-left:0}
.bss-avatar svg{display:block;width:100%;height:100%}
.bss-count{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:28px;margin-left:-8px;padding:0 8px;font-size:11px;font-weight:700;color:#fff;background:#12163A;border:2px solid #fff;border-radius:999px}
.bss-happy{position:absolute;left:240px;top:410px;width:260px;height:120px;padding:16px 18px;background:#C8F63C;border-radius:22px;box-shadow:0 18px 40px rgba(4,8,70,.22)}
.bss-happy-title{margin:0;font-size:17px;font-weight:800;color:#0E1030}
.bss-happy-rate{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:#0E1030}
.bss-happy-rate svg{width:12px;height:12px;fill:#0E1030}
.bss-happy .bss-row{margin-top:12px}
.bss-ring{position:absolute;left:72px;top:34px;z-index:3;width:104px;height:104px;border:20px solid #C8F63C;border-radius:50%;transform:rotate(-18deg) scaleY(.92)}
.bss-tri{position:absolute;left:8px;top:432px;z-index:3;width:150px;height:128px;background:linear-gradient(145deg,#DDFF59 0%,#B4E01E 100%);clip-path:polygon(46% 0,100% 100%,0 100%);transform:rotate(-8deg)}
.bss-squig{position:absolute;left:462px;top:372px;z-index:4;width:100px;height:80px}

@media (max-width:1024px){
  .bss-page{--s:.82;padding-top:32px;padding-bottom:32px}
  .bss-shell{min-height:calc(100vh - 64px);grid-template-columns:minmax(0,1fr) clamp(320px,44vw,440px);column-gap:32px}
}
@media (max-width:940px){
  .bss-page{--s:.72}
}
@media (max-width:860px){
  .bss-page{--s:1;padding:28px 24px}
  .bss-shell{min-height:0;grid-template-columns:minmax(0,1fr);row-gap:28px}
  .bss-left{align-items:center;text-align:center}
  .bss-intro{max-width:480px}
  .bss-illus{display:none}
  .bss-card{width:100%;max-width:560px;margin:0 auto}
}
@media (max-width:640px){
  .bss-page{padding:22px 16px}
  .bss-card{padding:28px 22px;border-radius:24px}
  .bss-intro-title{font-size:16px}
  .bss-intro-text{font-size:13px}
  .bss-input{font-size:16px}
  .bss-divider{margin:28px 0 20px}
}
@media (max-width:420px){
  .bss-page{padding:18px 12px}
  .bss-card{padding:24px 18px;border-radius:20px}
  .bss-logo{width:36px;height:36px}
  .bss-title{font-size:28px}
  .bss-input{height:48px}
  .bss-btn{height:48px}
  .bss-social-btn{width:48px;height:48px}
}
@media (prefers-reduced-motion:reduce){
  .bss-page *{transition:none !important}
}
`;