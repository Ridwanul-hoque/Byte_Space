
'use client';

import { useState } from 'react';
import Link from 'next/link';

const SIGNUP_PATH = '/join';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
    const errors = {};
    if (!values.email.trim())
        errors.email = 'Enter your email address.';
    else if (!EMAIL_PATTERN.test(values.email.trim()))
        errors.email = 'Enter a valid email address.';
    if (!values.password)
        errors.password = 'Enter your password.';
    return errors;
}

const AVATAR_COLORS = ['#F5A524', '#7C5CFF', '#18B999', '#FF6B8B'];
const CHART_BARS = [10, 16, 26, 40, 60, 86, 112, 126, 104, 78, 54, 38, 26, 18, 12, 8];
const STAR_PATH = 'M12 2l3 6.9 7.4.6-5.6 4.9 1.7 7.3-6.5-3.9-6.5 3.9 1.7-7.3L1.6 9.5 9 8.9z';

function ByteLogo() {
    return (<Link href="/" aria-label="ByteSpace Home">
            <svg className="bsl-logo" viewBox="0 0 40 40" role="img" aria-label="ByteSpace">
              <rect width="40" height="40" rx="12" fill="#C8F63C"/>
              <rect x="11" y="8" width="7" height="24" rx="3.5" fill="#1D2FE0"/>
              <circle cx="22.5" cy="24" r="6.5" fill="none" stroke="#1D2FE0" strokeWidth="6.5"/>
            </svg>
        </Link>);
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
    return (<span className="bsl-stack">
      {AVATAR_COLORS.map((color) => (<span key={color} className="bsl-avatar" style={{ background: color, borderColor: ring }}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="9.5" r="4" fill="rgba(255,255,255,.9)"/>
            <path d="M4 24c0-4.8 3.6-8.5 8-8.5s8 3.7 8 8.5z" fill="rgba(255,255,255,.9)"/>
          </svg>
        </span>))}
      <span className="bsl-count" style={{ borderColor: ring }}>26+</span>
    </span>);
}

function Illustration() {
    return (<div className="bsl-illus" aria-hidden="true">
      <div className="bsl-stage">
        <div className="bsl-back">
          <div className="bsl-backimg">
            <svg viewBox="0 0 24 24">
              <path d="M5 3l14 7-6 2-2 6z" fill="#8A8FAE"/>
            </svg>
            <span className="bsl-pill bsl-pill--light">
              <PillIcon d="M7 5l12 7-12 7z"/>
              7 Lessons
            </span>
          </div>
          <p className="bsl-ctitle">Build Digital</p>
          <p className="bsl-by">by compaint studio</p>
          <div className="bsl-row">
            <span className="bsl-level">
              <LevelIcon />
              Beginner
            </span>
            <AvatarStack />
          </div>
          <div className="bsl-row">
            <span className="bsl-price">
              $25<small>$120/mo</small>
            </span>
          </div>
        </div>

        <div className="bsl-front">
          <div className="bsl-media">
            <svg viewBox="0 0 342 210" preserveAspectRatio="none">
              {[50, 90, 130, 170].map((y) => (<line key={y} x1="0" x2="342" y1={y} y2={y} stroke="rgba(255,255,255,.08)"/>))}
              {CHART_BARS.map((h, i) => (<rect key={i} x={18 + i * 19} y={168 - h} width="12" height={h} rx="2" fill={i % 2 ? '#2BD9C0' : '#3D6BFF'} opacity=".9"/>))}
              <path d="M18 160 C 70 150, 100 60, 160 44 S 260 150, 324 162" fill="none" stroke="#7CF5E0" strokeWidth="2"/>
            </svg>
            <div className="bsl-pills">
              <span className="bsl-pill">
                <PillIcon d="M7 5l12 7-12 7z"/>
                7 Lessons
              </span>
              <span className="bsl-pill">
                <PillIcon d="M12 7v5l3 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                12 hrs 30 mins
              </span>
              <span className="bsl-pill">
                <PillIcon d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14"/>
                28 Downloads
              </span>
            </div>
          </div>
          <div className="bsl-head">
            <p className="bsl-ftitle">the Power of Big Data</p>
            <span className="bsl-rating">
              4.5 <Star />
            </span>
          </div>
          <p className="bsl-by">by compaint studio</p>
          <div className="bsl-row">
            <span className="bsl-level">
              <LevelIcon />
              Beginner
            </span>
            <AvatarStack />
          </div>
          <div className="bsl-row">
            <span className="bsl-price">
              $25<small>$120/mo</small>
            </span>
          </div>
        </div>

        <div className="bsl-happy">
          <p className="bsl-happy-title">Happy Students</p>
          <div className="bsl-happy-rate">
            4.5
            {[0, 1, 2, 3, 4].map((i) => (<Star key={i}/>))}
          </div>
          <div className="bsl-row">
            <AvatarStack ring="#C8F63C"/>
          </div>
        </div>

        <span className="bsl-ring"/>
        <span className="bsl-tri"/>
        <svg className="bsl-squig" viewBox="0 0 100 80" fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 60C28 14 40 70 54 30s26 36 38-14"/>
        </svg>
      </div>
    </div>);
}

export default function Login({ onSubmit, onSocialLogin }) {
    const [values, setValues] = useState({ email: '', password: '' });
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
            const savedUser = JSON.parse(localStorage.getItem('demoUser'));

            if (!savedUser) {
                throw new Error('No account found.');
            }

            if (
                savedUser.email !== values.email.trim() ||
                savedUser.password !== values.password
            ) {
                throw new Error('Invalid email or password.');
            }

            localStorage.setItem('isLoggedIn', 'true');

            await onSubmit?.({
                email: values.email.trim(),
                password: values.password
            });
        }
        catch {
            setFormError('We could not sign you in. Check your details and try again.');
        }
        finally {
            setSubmitting(false);
        }
    };

    return (<>
      <style>{styles}</style>
      <main className="bsl-page">
        <div className="bsl-shell">
          <section className="bsl-left">
            <ByteLogo />
            <div className="bsl-intro">
              <p className="bsl-intro-title">Sign in with ease</p>
              <p className="bsl-intro-text">
                Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
              </p>
            </div>
            <Illustration />
          </section>

          <section className="bsl-card" aria-labelledby="bsl-heading">
            <p className="bsl-eyebrow">Sign In</p>
            <h1 id="bsl-heading" className="bsl-title">Welcome Back</h1>

            <form className="bsl-form" onSubmit={handleSubmit} noValidate>
              {formError && (<p className="bsl-form-error" role="alert">{formError}</p>)}

              <div className="bsl-field">
                <label className="bsl-label" htmlFor="bsl-email">Email</label>
                <input id="bsl-email" className="bsl-input" type="email" name="email" value={values.email} onChange={handleChange} placeholder="designer@example.com" autoComplete="email" aria-invalid={errors.email ? 'true' : 'false'} aria-describedby={errors.email ? 'bsl-email-error' : undefined}/>
                {errors.email && <p id="bsl-email-error" className="bsl-error">{errors.email}</p>}
              </div>

              <div className="bsl-field">
                <label className="bsl-label" htmlFor="bsl-password">Password</label>
                <input id="bsl-password" className="bsl-input" type="password" name="password" value={values.password} onChange={handleChange} placeholder="••••••••" autoComplete="current-password" aria-invalid={errors.password ? 'true' : 'false'} aria-describedby={errors.password ? 'bsl-password-error' : undefined}/>
                {errors.password && <p id="bsl-password-error" className="bsl-error">{errors.password}</p>}
              </div>

              <button className="bsl-btn" type="submit" disabled={submitting}>
                {submitting ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            <div className="bsl-divider" role="separator">or</div>

            <p className="bsl-switch">
              New user? <Link href={SIGNUP_PATH}>Create an account</Link>
            </p>
          </section>
        </div>
      </main>
    </>);
}

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.bsl-page{--s:1;position:relative;box-sizing:border-box;width:100%;min-height:100vh;padding:40px clamp(20px,4vw,64px);background-color:#1D2FE0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:72px 72px;background-position:-1px -1px;font-family:'Plus Jakarta Sans',system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:#fff;overflow-x:hidden}
.bsl-page *,.bsl-page *::before,.bsl-page *::after{box-sizing:border-box}
.bsl-shell{max-width:1320px;min-height:calc(100vh - 80px);margin:0 auto;display:grid;grid-template-columns:minmax(0,1fr) clamp(340px,40vw,560px);column-gap:clamp(32px,5vw,96px);align-items:stretch}
.bsl-left{display:flex;flex-direction:column;align-items:flex-start;min-width:0}
.bsl-logo{display:block;width:40px;height:40px}
.bsl-intro{max-width:380px;margin-top:22px}
.bsl-intro-title{margin:0 0 8px;font-size:17px;font-weight:600;line-height:1.3}
.bsl-intro-text{margin:0;font-size:14px;line-height:1.6;color:rgba(255,255,255,.72)}

.bsl-card{display:flex;flex-direction:column;min-width:0;padding:clamp(28px,3.4vw,52px);background:#fff;color:#0E1030;border-radius:28px;box-shadow:0 30px 80px rgba(6,10,90,.35)}
.bsl-eyebrow{margin:0 0 8px;font-size:14px;font-weight:500;color:#1D2FE0}
.bsl-title{margin:0 0 clamp(24px,3vw,36px);font-size:clamp(30px,3.1vw,44px);font-weight:800;line-height:1.08;letter-spacing:-.03em}
.bsl-form{display:flex;flex-direction:column}
.bsl-field{margin-bottom:18px}
.bsl-label{display:block;margin-bottom:8px;font-size:12px;font-weight:600;color:#1A1C3A}
.bsl-input{display:block;width:100%;height:50px;padding:0 16px;font:inherit;font-size:14px;color:#0E1030;background:#F3F4FA;border:1px solid #E6E8F2;border-radius:12px;outline:none;transition:border-color .15s,box-shadow .15s,background-color .15s}
.bsl-input::placeholder{color:#9A9FBC}
.bsl-input:focus{background:#fff;border-color:#1D2FE0;box-shadow:0 0 0 3px rgba(29,47,224,.16)}
.bsl-input[aria-invalid='true']{background:#FFF6F6;border-color:#E5484D}
.bsl-input[aria-invalid='true']:focus{box-shadow:0 0 0 3px rgba(229,72,77,.18)}
.bsl-error{margin:6px 2px 0;font-size:12px;line-height:1.4;color:#D13438}
.bsl-form-error{margin:0 0 14px;padding:10px 12px;font-size:13px;line-height:1.4;color:#B42318;background:#FFF1F0;border-radius:10px}
.bsl-btn{align-self:flex-end;min-width:104px;height:46px;margin-top:6px;padding:0 26px;font:inherit;font-size:15px;font-weight:700;color:#0E1030;background:#C8F63C;border:0;border-radius:999px;cursor:pointer;transition:filter .15s,transform .15s}
.bsl-btn:hover{filter:brightness(.96)}
.bsl-btn:active{transform:translateY(1px)}
.bsl-btn:focus-visible{outline:3px solid #1D2FE0;outline-offset:3px}
.bsl-btn:disabled{opacity:.65;cursor:not-allowed}
.bsl-divider{display:flex;align-items:center;gap:16px;margin:34px 0 24px;font-size:13px;color:#8A8FAE}
.bsl-divider::before,.bsl-divider::after{content:'';flex:1;height:1px;background:#E6E8F2}
.bsl-social{display:flex;justify-content:center;gap:14px}
.bsl-social-btn{display:inline-flex;align-items:center;justify-content:center;width:52px;height:52px;padding:0;background:#fff;border:1px solid #E6E8F2;border-radius:14px;cursor:pointer;transition:border-color .15s,box-shadow .15s}
.bsl-social-btn:hover{border-color:#C9CDE4;box-shadow:0 4px 14px rgba(14,16,48,.08)}
.bsl-social-btn:focus-visible{outline:3px solid #1D2FE0;outline-offset:2px}
.bsl-switch{margin:auto 0 0;padding-top:36px;text-align:center;font-size:13px;color:#6A6F93}
.bsl-switch a{color:#1D2FE0;font-weight:600;text-decoration:none}
.bsl-switch a:hover{text-decoration:underline}
.bsl-switch a:focus-visible{outline:2px solid #1D2FE0;outline-offset:2px;border-radius:4px}

.bsl-illus{flex:none;width:calc(500px * var(--s));height:calc(560px * var(--s));margin-top:48px}
.bsl-stage{position:relative;width:500px;height:560px;transform:scale(var(--s));transform-origin:top left}
.bsl-back{position:absolute;left:0;top:160px;width:230px;height:350px;padding:14px;color:#0E1030;background:#EDEEF4;border-radius:26px}
.bsl-backimg{position:relative;display:flex;align-items:center;justify-content:center;height:150px;background:#DCDEE8;border-radius:18px}
.bsl-backimg > svg{width:64px;height:64px}
.bsl-backimg .bsl-pill{position:absolute;left:10px;bottom:10px}
.bsl-ctitle{margin:12px 0 0;font-size:26px;font-weight:800;line-height:1.15;letter-spacing:-.02em;color:#0E1030;white-space:nowrap}
.bsl-by{margin:2px 0 0;font-size:12px;color:#2433E6;white-space:nowrap}
.bsl-row{display:flex;align-items:center;justify-content:space-between;margin-top:14px}
.bsl-level{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;font-size:12px;font-weight:600;color:#3A3D5C;background:rgba(14,16,48,.07);border-radius:999px}
.bsl-price{font-size:24px;font-weight:800;letter-spacing:-.02em;color:#1D2FE0}
.bsl-price small{margin-left:6px;font-size:11px;font-weight:600;letter-spacing:0;color:#8A8FAE}
.bsl-front{position:absolute;left:130px;top:0;width:370px;height:400px;padding:14px;color:#0E1030;background:#fff;border-radius:26px;box-shadow:0 24px 60px rgba(4,8,70,.28)}
.bsl-media{position:relative;height:210px;overflow:hidden;background:radial-gradient(120% 90% at 0% 0%,#1B4D4A 0%,#0A1226 55%);border-radius:18px}
.bsl-media > svg{position:absolute;inset:0;width:100%;height:100%}
.bsl-pills{position:absolute;left:10px;right:10px;bottom:10px;display:flex;gap:5px}
.bsl-pill{display:inline-flex;align-items:center;gap:4px;padding:6px 8px;font-size:10.5px;font-weight:600;color:#D9DDF2;white-space:nowrap;background:rgba(255,255,255,.16);border-radius:999px;backdrop-filter:blur(6px)}
.bsl-pill--light{color:#4A4E6E;background:rgba(255,255,255,.75)}
.bsl-head{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;margin-top:14px}
.bsl-ftitle{margin:0;font-size:20px;font-weight:800;line-height:1.2;letter-spacing:-.02em}
.bsl-rating{display:inline-flex;align-items:center;gap:4px;font-size:14px;font-weight:700;white-space:nowrap}
.bsl-rating svg{width:15px;height:15px;fill:#BEEA25}
.bsl-stack{display:inline-flex;align-items:center}
.bsl-avatar{display:block;width:28px;height:28px;margin-left:-8px;overflow:hidden;border:2px solid #fff;border-radius:50%}
.bsl-avatar:first-child{margin-left:0}
.bsl-avatar svg{display:block;width:100%;height:100%}
.bsl-count{display:inline-flex;align-items:center;justify-content:center;min-width:34px;height:28px;margin-left:-8px;padding:0 8px;font-size:11px;font-weight:700;color:#fff;background:#12163A;border:2px solid #fff;border-radius:999px}
.bsl-happy{position:absolute;left:240px;top:410px;width:260px;height:120px;padding:16px 18px;background:#C8F63C;border-radius:22px;box-shadow:0 18px 40px rgba(4,8,70,.22)}
.bsl-happy-title{margin:0;font-size:17px;font-weight:800;color:#0E1030}
.bsl-happy-rate{display:flex;align-items:center;gap:6px;margin-top:4px;font-size:12px;font-weight:600;color:#0E1030}
.bsl-happy-rate svg{width:12px;height:12px;fill:#0E1030}
.bsl-happy .bsl-row{margin-top:12px}
.bsl-ring{position:absolute;left:72px;top:34px;z-index:3;width:104px;height:104px;border:20px solid #C8F63C;border-radius:50%;transform:rotate(-18deg) scaleY(.92)}
.bsl-tri{position:absolute;left:8px;top:432px;z-index:3;width:150px;height:128px;background:linear-gradient(145deg,#DDFF59 0%,#B4E01E 100%);clip-path:polygon(46% 0,100% 100%,0 100%);transform:rotate(-8deg)}
.bsl-squig{position:absolute;left:462px;top:372px;z-index:4;width:100px;height:80px}

@media (max-width:1024px){
  .bsl-page{--s:.82;padding-top:32px;padding-bottom:32px}
  .bsl-shell{min-height:calc(100vh - 64px);grid-template-columns:minmax(0,1fr) clamp(320px,44vw,440px);column-gap:32px}
}
@media (max-width:940px){
  .bsl-page{--s:.72}
}
@media (max-width:860px){
  .bsl-page{--s:1;padding:28px 24px}
  .bsl-shell{min-height:0;grid-template-columns:minmax(0,1fr);row-gap:28px}
  .bsl-left{align-items:center;text-align:center}
  .bsl-intro{max-width:480px}
  .bsl-illus{display:none}
  .bsl-card{width:100%;max-width:560px;margin:0 auto}
}
@media (max-width:640px){
  .bsl-page{padding:22px 16px}
  .bsl-card{padding:28px 22px;border-radius:24px}
  .bsl-intro-title{font-size:16px}
  .bsl-intro-text{font-size:13px}
  .bsl-input{font-size:16px}
  .bsl-divider{margin:28px 0 20px}
}
@media (max-width:420px){
  .bsl-page{padding:18px 12px}
  .bsl-card{padding:24px 18px;border-radius:20px}
  .bsl-logo{width:36px;height:36px}
  .bsl-title{font-size:28px}
  .bsl-input{height:48px}
  .bsl-btn{height:48px}
  .bsl-social-btn{width:48px;height:48px}
}
@media (prefers-reduced-motion:reduce){
  .bsl-page *{transition:none !important}
}
`;