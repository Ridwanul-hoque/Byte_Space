"use client";

import { useEffect, useRef, useState } from "react";
import { Poppins, Urbanist } from "next/font/google";

const headingFont = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const bodyFont = Urbanist({ subsets: ["latin"], weight: ["300", "400", "500", "600"] });

const NAV_SPACE = "calc(62 * min(calc(100vw / 765), 2.5px))";

const TABS = ["About", "Lessons", "Reviews"];
const SIDEBAR_BLURB = "Ready to Dive In? Enroll Now and Start Building Your Digital Future!";

const css = `
.bs-c{
  position:relative;
  display:block;
  width:100%;
  max-width:100%;
  background:#fff;
  color:#1a1a1a;
  overflow-x:hidden;
  padding-bottom:80px;
  --bs-nav:${NAV_SPACE}
}

.bs-c *,.bs-c *::before,.bs-c *::after{
  box-sizing:border-box
}

.bs-c .bs-c-wrap{
  position:relative;
  width:100%;
  max-width:1200px;
  min-height:calc(1316px + var(--bs-nav));
  margin:0 auto
}

.bs-c .bs-c-hero{
  position:relative;
  isolation:isolate;
  padding:calc(48px + var(--bs-nav)) 0 64px
}

.bs-c .bs-c-hero::before{
  content:"";
  position:absolute;
  z-index:-1;
  top:0;
  bottom:0;
  left:50%;
  width:100vw;
  margin-left:-50vw;
  background-color:#1c2ed8;
  background-image:
    linear-gradient(to right,rgba(255,255,255,.12) 1px,transparent 1px),
    linear-gradient(to bottom,rgba(255,255,255,.12) 1px,transparent 1px);
  background-size:240px 240px;
  background-position:calc(50vw - 600px) 100%
}

.bs-c .bs-c-title{
  margin:0;
  font-size:32px;
  line-height:44px;
  font-weight:600;
  color:#fff;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis
}

.bs-c .bs-c-sub{
  margin:7px 0 0;
  font-size:16px;
  line-height:24px;
  font-weight:500;
  color:#fff
}

.bs-c .bs-c-by{
  margin:26px 0 0;
  font-size:14px;
  line-height:22px;
  font-weight:400;
  color:#fff
}

.bs-c .bs-c-by b{
  font-weight:400;
  color:#d2f53b;
  text-transform:lowercase
}

.bs-c .bs-c-badges{
  display:flex;
  flex-wrap:wrap;
  gap:16px;
  margin-top:22px
}

.bs-c .bs-c-badge{
  display:inline-flex;
  align-items:center;
  gap:11px;
  height:40px;
  padding:0 26px;
  border-radius:999px;
  background:#fff;
  font-size:14px;
  font-weight:500;
  color:#111;
  white-space:nowrap
}

.bs-c .bs-c-badge svg{
  display:block;
  width:20px;
  height:20px;
  flex:none
}

.bs-c .bs-c-share{
  position:absolute;
  z-index:20;
  top:calc(48px + var(--bs-nav));
  right:max(31px,calc((100vw - 1200px) / 2 + 31px));
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  height:40px;
  width:122px;
  border:0;
  border-radius:999px;
  background:#d2f53b;
  color:#111;
  font-size:14px;
  font-weight:500;
  cursor:pointer
}

.bs-c .bs-c-share svg{
  display:block;
  width:16px;
  height:16px
}

.bs-c .bs-c-video{
  position:relative;
  width:calc(100% - 476px);
  height:478px;
  margin-top:60px;
  border-radius:24px;
  overflow:hidden;
  background:#dcdcdc
}

.bs-c .bs-c-video img.poster,
.bs-c .bs-c-video video{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  display:block
}

.bs-c .bs-c-play{
  position:absolute;
  left:50%;
  top:50%;
  width:60px;
  height:60px;
  margin:-30px 0 0 -30px;
  display:flex;
  align-items:center;
  justify-content:center;
  border:0;
  border-radius:50%;
  background:rgba(255,255,255,.9);
  cursor:pointer
}

.bs-c .bs-c-play svg{
  display:block;
  width:22px;
  height:22px;
  margin-left:3px
}

.bs-c .bs-c-side{
  position:absolute;
  z-index:2;
  top:calc(292px + var(--bs-nav));
  right:0;
  width:412px;
  padding:40px;
  background:#fff;
  border:1px solid #e8e8e8;
  border-radius:24px
}

.bs-c .bs-c-side-h{
  margin:0;
  font-size:17px;
  line-height:24px;
  font-weight:600;
  color:#111
}

.bs-c .bs-c-lessons{
  margin:24px 0 0;
  padding:0;
  list-style:none
}

.bs-c .bs-c-lesson{
  display:grid;
  grid-template-columns:32px 170px 1fr;
  align-items:start;
  margin:0 0 14px;
  padding:0;
  font-size:13px;
  line-height:18px;
  color:#111
}

.bs-c .bs-c-lesson .n{
  color:#333
}

.bs-c .bs-c-lesson .d{
  text-align:right;
  padding-right:8px;
  color:#1d3fd9
}

.bs-c .bs-c-more{
  margin:0;
  font-size:13px;
  line-height:18px;
  color:#555
}

.bs-c .bs-c-blurb{
  margin:27px 0 0;
  font-size:14px;
  line-height:25px;
  font-weight:400;
  color:#444
}

.bs-c .bs-c-price{
  display:flex;
  align-items:baseline;
  gap:2px;
  margin-top:24px;
  line-height:40px
}

.bs-c .bs-c-price b{
  font-size:32px;
  font-weight:600;
  color:#1d3fd9
}

.bs-c .bs-c-price span{
  font-size:12px;
  color:#777
}

.bs-c .bs-c-enroll{
  display:block;
  width:100%;
  height:48px;
  margin-top:16px;
  border:0;
  border-radius:999px;
  background:#d2f53b;
  color:#111;
  font-size:16px;
  font-weight:500;
  cursor:pointer
}

.bs-c .bs-c-incl-h{
  margin:22px 0 0;
  font-size:16px;
  line-height:24px;
  font-weight:600;
  color:#111
}

.bs-c .bs-c-incl{
  margin:14px 0 0;
  padding:0;
  list-style:none
}

.bs-c .bs-c-incl li{
  display:flex;
  align-items:center;
  gap:12px;
  height:38px;
  margin:0;
  padding:0;
  font-size:14px;
  color:#333
}

.bs-c .bs-c-incl svg{
  display:block;
  width:20px;
  height:20px;
  flex:none
}

.bs-c .bs-c-hr{
  height:1px;
  margin:18px 0 0;
  border:0;
  background:#e3e3e3
}

.bs-c .bs-c-creator{
  display:flex;
  align-items:center;
  gap:12px;
  margin-top:25px
}

.bs-c .bs-c-cav{
  position:relative;
  width:52px;
  height:52px;
  border-radius:50%;
  overflow:hidden;
  background:#cfcfcf;
  flex:none
}

.bs-c .bs-c-cav img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover
}

.bs-c .bs-c-cname{
  margin:0;
  font-size:15px;
  line-height:22px;
  font-weight:500;
  color:#111
}

.bs-c .bs-c-crole{
  margin:0;
  font-size:13px;
  line-height:20px;
  font-weight:300;
  color:#555
}

.bs-c .bs-c-profile{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  height:36px;
  padding:0 16px;
  margin-top:24px;
  border:1px solid #ddd;
  border-radius:999px;
  background:#fff;
  font-size:13px;
  font-weight:500;
  color:#111;
  cursor:pointer
}

.bs-c .bs-c-main{
  width:calc(100% - 476px);
  margin-top:62px
}

.bs-c .bs-c-tabs{
  display:flex;
  gap:16px
}

.bs-c .bs-c-tab{
  height:44px;
  padding:0 24px;
  border:0;
  border-radius:999px;
  background:#f2f2f2;
  font-size:14px;
  font-weight:500;
  color:#222;
  cursor:pointer
}

.bs-c .bs-c-tab.on{
  background:#d2f53b;
  color:#111
}

.bs-c .bs-c-h{
  margin:24px 0 0;
  font-size:18px;
  line-height:28px;
  font-weight:600;
  color:#111
}

.bs-c .bs-c-tabs + .bs-c-h{
  margin-top:38px
}

.bs-c .bs-c-p{
  margin:24px 0 0;
  font-size:15px;
  line-height:26px;
  font-weight:400;
  color:#333
}

.bs-c .bs-c-p + .bs-c-p{
  margin-top:26px
}

.bs-c .bs-c-h + .bs-c-p{
  margin-top:24px
}

.bs-c .bs-c-peek{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  margin-top:20px
}

.bs-c .bs-c-peek div{
  aspect-ratio:171/125;
  border-radius:16px;
  overflow:hidden;
  background:#e9e9e9
}

.bs-c .bs-c-peek img{
  display:block;
  width:100%;
  height:100%;
  object-fit:cover
}

.bs-c .bs-c-keys{
  margin:16px 0 0;
  padding:0;
  list-style:none
}

.bs-c .bs-c-keys li{
  display:flex;
  align-items:center;
  gap:12px;
  min-height:38px;
  margin:0;
  padding:0;
  font-size:15px;
  color:#333
}

.bs-c .bs-c-keys svg{
  display:block;
  width:20px;
  height:20px;
  flex:none
}

.bs-c .bs-c-mods{
  margin:24px 0 0;
  padding:0;
  list-style:none
}

.bs-c .bs-c-mod{
  display:flex;
  align-items:flex-start;
  gap:14px;
  margin:0 0 25px;
  padding:0
}

.bs-c .bs-c-mod:last-child{
  margin-bottom:0
}

.bs-c .bs-c-mod-ic{
  display:flex;
  align-items:center;
  justify-content:center;
  width:72px;
  height:72px;
  border-radius:20px;
  background:#d2f53b;
  flex:none
}

.bs-c .bs-c-mod-ic svg{
  display:block;
  width:30px;
  height:30px
}

.bs-c .bs-c-mod-t{
  margin:0;
  font-size:14px;
  line-height:22px;
  font-weight:600;
  color:#111
}

.bs-c .bs-c-mod-d{
  margin:0;
  font-size:14px;
  line-height:26px;
  font-weight:400;
  color:#333
}

.bs-c .bs-c-prog{
  margin-top:24px;
  min-height:117px;
  padding:18px 16px 16px;
  border:1px solid #e5e5e5;
  border-radius:20px
}

.bs-c .bs-c-prog-l{
  margin:0;
  font-size:12px;
  line-height:16px;
  color:#333
}

.bs-c .bs-c-prog-v{
  margin:10px 0 0;
  font-size:32px;
  line-height:36px;
  font-weight:600;
  color:#111
}

.bs-c .bs-c-bar{
  height:8px;
  margin-top:13px;
  border-radius:999px;
  background:#e8e8e8;
  overflow:hidden
}

.bs-c .bs-c-bar i{
  display:block;
  height:100%;
  border-radius:999px;
  background:#d2f53b
}

.bs-c .bs-c-sum{
  display:flex;
  align-items:center;
  gap:24px;
  margin-top:24px;
  padding:43px 40px;
  border:1px solid #e5e5e5;
  border-radius:24px
}

.bs-c .bs-c-score{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width:126px;
  height:138px;
  border-radius:6px;
  background:#d2f53b;
  flex:none
}

.bs-c .bs-c-score small{
  font-size:12px;
  line-height:16px;
  color:#222
}

.bs-c .bs-c-score b{
  font-size:32px;
  line-height:40px;
  font-weight:700;
  color:#111
}

.bs-c .bs-c-dist{
  flex:1;
  min-width:0;
  height:138px;
  display:flex;
  flex-direction:column;
  justify-content:space-between
}

.bs-c .bs-c-dist-r{
  display:flex;
  align-items:center;
  gap:16px;
  height:20px
}

.bs-c .bs-c-track{
  flex:1;
  min-width:0;
  height:8px;
  border-radius:999px;
  background:#e4e4e4;
  overflow:hidden
}

.bs-c .bs-c-track i{
  display:block;
  height:100%;
  border-radius:999px;
  background:#d2f53b
}

.bs-c .bs-c-stars{
  display:inline-flex;
  gap:8px;
  flex:none
}

.bs-c .bs-c-stars svg{
  display:block;
  width:20px;
  height:20px
}

.bs-c .bs-c-cnt{
  width:32px;
  text-align:right;
  font-size:12px;
  color:#555;
  flex:none
}

.bs-c .bs-c-fchips{
  display:flex;
  flex-wrap:wrap;
  gap:16px;
  margin-top:20px
}

.bs-c .bs-c-fchip{
  display:inline-flex;
  align-items:center;
  gap:6px;
  height:44px;
  padding:0 22px;
  border:0;
  border-radius:999px;
  background:#f2f2f2;
  font-size:14px;
  font-weight:500;
  color:#222;
  cursor:pointer
}

.bs-c .bs-c-fchip svg{
  display:block;
  width:16px;
  height:16px
}

.bs-c .bs-c-fchip.on{
  background:#d2f53b;
  color:#111
}

.bs-c .bs-c-revs{
  margin:24px 0 0;
  padding:0;
  list-style:none
}

.bs-c .bs-c-rev{
  margin:0 0 24px;
  padding:40px;
  border:1px solid #e5e5e5;
  border-radius:24px;
  background:#fff
}

.bs-c .bs-c-rev:last-child{
  margin-bottom:0
}

.bs-c .bs-c-rev-top{
  display:flex;
  align-items:center;
  gap:12px
}

.bs-c .bs-c-rev-av{
  position:relative;
  width:52px;
  height:52px;
  border-radius:50%;
  overflow:hidden;
  background:#cfcfcf;
  flex:none
}

.bs-c .bs-c-rev-av img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover
}

.bs-c .bs-c-rev-n{
  margin:0;
  font-size:15px;
  line-height:22px;
  font-weight:500;
  color:#111
}

.bs-c .bs-c-rev-r{
  margin:0;
  font-size:14px;
  line-height:22px;
  font-weight:300;
  color:#555
}

.bs-c .bs-c-rev-d{
  margin-left:auto;
  align-self:flex-start;
  font-size:13px;
  line-height:22px;
  font-weight:500;
  color:#111
}

.bs-c .bs-c-rev-s{
  margin-top:24px
}

.bs-c .bs-c-rev-c{
  margin:24px 0 0;
  font-size:15px;
  line-height:26px;
  font-weight:400;
  color:#333
}

.bs-c .bs-c-none{
  margin:24px 0 0;
  font-size:15px;
  color:#666
}

@media (max-width:1280px){
  .bs-c .bs-c-wrap{
    padding:0 32px
  }

  .bs-c .bs-c-side{
    right:32px
  }

  .bs-c .bs-c-video{
    width:calc(100% - 430px)
  }

  .bs-c .bs-c-main{
    width:calc(100% - 430px)
  }

  .bs-c .bs-c-side{
    width:390px
  }

  .bs-c .bs-c-share{
    right:32px
  }
}

@media (max-width:1100px){
  .bs-c .bs-c-wrap{
    padding:0 24px
  }

  .bs-c .bs-c-video{
    width:calc(100% - 360px)
  }

  .bs-c .bs-c-main{
    width:calc(100% - 360px)
  }

  .bs-c .bs-c-side{
    width:340px;
    right:24px;
    padding:28px
  }

  .bs-c .bs-c-lesson{
    grid-template-columns:28px 1fr auto;
    gap:8px
  }

  .bs-c .bs-c-lesson .d{
    padding-right:0
  }

  .bs-c .bs-c-title{
    font-size:30px;
    line-height:40px
  }

  .bs-c .bs-c-share{
    right:24px
  }
}

@media (max-width:1000px){
  .bs-c .bs-c-wrap{
    display:flex;
    flex-direction:column;
    min-height:0;
    padding:0 20px
  }

  .bs-c .bs-c-hero{
    order:1;
    padding-bottom:48px
  }

  .bs-c .bs-c-side{
    order:2;
    position:relative;
    top:auto;
    right:auto;
    width:100%;
    margin-top:0;
    padding:28px
  }

  .bs-c .bs-c-main{
    order:3;
    width:100%;
    margin-top:40px
  }

  .bs-c .bs-c-video{
    width:100%;
    height:auto;
    aspect-ratio:724/478;
    margin-top:48px
  }

  .bs-c .bs-c-title{
    white-space:normal;
    font-size:28px;
    line-height:36px;
    padding-right:150px
  }

  .bs-c .bs-c-sub{
    font-size:15px;
    line-height:23px;
    padding-right:150px
  }

  .bs-c .bs-c-share{
    top:calc(48px + var(--bs-nav));
    right:20px
  }

  .bs-c .bs-c-hero::before{
    background-position:0 100%;
    background-size:180px 180px
  }

  .bs-c .bs-c-peek{
    grid-template-columns:repeat(2,1fr)
  }

  .bs-c .bs-c-sum{
    flex-direction:column;
    align-items:stretch;
    padding:24px
  }

  .bs-c .bs-c-rev{
    padding:24px
  }
}

@media (max-width:700px){
  .bs-c{
    padding-bottom:48px;
    overflow-x:hidden
  }

  .bs-c .bs-c-wrap{
    padding:0 16px
  }

  .bs-c .bs-c-hero{
    padding:calc(32px + var(--bs-nav)) 0 40px
  }

  .bs-c .bs-c-title{
    font-size:24px;
    line-height:32px;
    padding-right:125px
  }

  .bs-c .bs-c-sub{
    padding-right:125px
  }

  .bs-c .bs-c-by{
    margin-top:20px
  }

  .bs-c .bs-c-badges{
    gap:10px;
    margin-top:18px
  }

  .bs-c .bs-c-badge{
    height:36px;
    padding:0 16px;
    gap:8px;
    font-size:13px
  }

  .bs-c .bs-c-badge svg{
    width:18px;
    height:18px
  }

  .bs-c .bs-c-share{
    position:absolute;
    top:calc(var(--bs-nav) + 12px);
    right:16px;
    width:105px;
    height:38px;
    z-index:30
  }

  .bs-c .bs-c-video{
    margin-top:32px;
    border-radius:18px
  }

  .bs-c .bs-c-play{
    width:52px;
    height:52px;
    margin:-26px 0 0 -26px
  }

  .bs-c .bs-c-side{
    padding:22px;
    border-radius:18px
  }

  .bs-c .bs-c-lesson{
    grid-template-columns:28px 1fr;
    row-gap:4px
  }

  .bs-c .bs-c-lesson .d{
    grid-column:2;
    text-align:left;
    color:#1d3fd9
  }

  .bs-c .bs-c-main{
    margin-top:32px
  }

  .bs-c .bs-c-tabs{
    gap:8px;
    overflow-x:auto;
    padding-bottom:4px;
    scrollbar-width:none
  }

  .bs-c .bs-c-tabs::-webkit-scrollbar{
    display:none
  }

  .bs-c .bs-c-tab{
    height:40px;
    padding:0 18px;
    font-size:13px;
    flex:none
  }

  .bs-c .bs-c-h{
    font-size:17px;
    line-height:25px
  }

  .bs-c .bs-c-p{
    font-size:14px;
    line-height:24px;
    margin-top:18px
  }

  .bs-c .bs-c-tabs + .bs-c-h{
    margin-top:30px
  }

  .bs-c .bs-c-peek{
    grid-template-columns:repeat(2,1fr);
    gap:10px
  }

  .bs-c .bs-c-peek div{
    border-radius:12px
  }

  .bs-c .bs-c-keys li{
    font-size:14px;
    line-height:22px;
    height:auto;
    min-height:38px
  }

  .bs-c .bs-c-mod{
    gap:10px;
    margin-bottom:20px
  }

  .bs-c .bs-c-mod-ic{
    width:56px;
    height:56px;
    border-radius:16px
  }

  .bs-c .bs-c-mod-ic svg{
    width:24px;
    height:24px
  }

  .bs-c .bs-c-mod-d{
    font-size:13px;
    line-height:23px;
    margin-top:3px
  }

  .bs-c .bs-c-prog{
    height:auto;
    min-height:117px
  }

  .bs-c .bs-c-sum{
    padding:20px;
    border-radius:18px;
    gap:20px
  }

  .bs-c .bs-c-score{
    width:100%;
    height:100px
  }

  .bs-c .bs-c-dist{
    height:130px
  }

  .bs-c .bs-c-dist-r{
    gap:8px
  }

  .bs-c .bs-c-stars{
    gap:4px
  }

  .bs-c .bs-c-stars svg{
    width:17px;
    height:17px
  }

  .bs-c .bs-c-cnt{
    width:26px
  }

  .bs-c .bs-c-fchips{
    gap:8px
  }

  .bs-c .bs-c-fchip{
    height:40px;
    padding:0 16px;
    font-size:13px
  }

  .bs-c .bs-c-rev{
    padding:20px;
    border-radius:18px
  }

  .bs-c .bs-c-rev-top{
    align-items:flex-start
  }

  .bs-c .bs-c-rev-d{
    font-size:12px
  }

  .bs-c .bs-c-rev-c{
    font-size:14px;
    line-height:24px
  }
}

@media (max-width:480px){
  .bs-c{
    --bs-nav:calc(62 * (100vw / 480))
  }

  .bs-c .bs-c-wrap{
    padding:0 12px
  }

  .bs-c .bs-c-hero{
    padding-top:calc(24px + var(--bs-nav))
  }

  .bs-c .bs-c-share{
    top:calc(var(--bs-nav) + 10px);
    right:12px;
    width:100px;
    height:36px;
    font-size:13px
  }

  .bs-c .bs-c-title{
    font-size:22px;
    line-height:30px;
    padding-right:115px
  }

  .bs-c .bs-c-sub{
    font-size:14px;
    line-height:21px;
    padding-right:115px
  }

  .bs-c .bs-c-badges{
    gap:8px
  }

  .bs-c .bs-c-badge{
    max-width:100%;
    padding:0 13px;
    font-size:12px
  }

  .bs-c .bs-c-badge svg{
    width:16px;
    height:16px
  }

  .bs-c .bs-c-video{
    margin-top:24px;
    border-radius:14px
  }

  .bs-c .bs-c-side{
    padding:18px;
    border-radius:16px
  }

  .bs-c .bs-c-side-h{
    font-size:16px;
    line-height:22px
  }

  .bs-c .bs-c-lesson{
    font-size:12px;
    line-height:17px
  }

  .bs-c .bs-c-blurb{
    font-size:13px;
    line-height:22px
  }

  .bs-c .bs-c-price b{
    font-size:28px
  }

  .bs-c .bs-c-enroll{
    height:46px;
    font-size:15px
  }

  .bs-c .bs-c-incl li{
    font-size:13px;
    gap:9px
  }

  .bs-c .bs-c-creator{
    gap:10px
  }

  .bs-c .bs-c-cav{
    width:46px;
    height:46px
  }

  .bs-c .bs-c-cname{
    font-size:14px
  }

  .bs-c .bs-c-crole{
    font-size:12px
  }

  .bs-c .bs-c-profile{
    height:34px;
    font-size:12px;
    padding:0 14px
  }

  .bs-c .bs-c-tabs{
    gap:6px
  }

  .bs-c .bs-c-tab{
    padding:0 15px
  }

  .bs-c .bs-c-sum{
    padding:16px
  }

  .bs-c .bs-c-rev{
    padding:16px
  }

  .bs-c .bs-c-rev-av{
    width:44px;
    height:44px
  }

  .bs-c .bs-c-rev-n{
    font-size:14px
  }

  .bs-c .bs-c-rev-r{
    font-size:12px
  }

  .bs-c .bs-c-rev-d{
    font-size:11px
  }
}

@media (max-width:360px){
  .bs-c .bs-c-wrap{
    padding:0 10px
  }

  .bs-c .bs-c-share{
    right:10px;
    width:94px;
    height:34px
  }

  .bs-c .bs-c-title{
    padding-right:105px
  }

  .bs-c .bs-c-sub{
    padding-right:105px
  }

  .bs-c .bs-c-badges{
    display:grid;
    grid-template-columns:1fr 1fr
  }

  .bs-c .bs-c-badge{
    justify-content:center;
    width:100%;
    padding:0 8px
  }

  .bs-c .bs-c-badge:last-child{
    grid-column:1/-1
  }

  .bs-c .bs-c-side{
    padding:15px
  }

  .bs-c .bs-c-lesson{
    grid-template-columns:25px 1fr
  }

  .bs-c .bs-c-stars svg{
    width:15px;
    height:15px
  }

  .bs-c .bs-c-rev-d{
    font-size:10px
  }
}
`;

const Svg = ({ children, ...p }) => (
  <svg viewBox="0 0 20 20" fill="none" {...p}>
    {children}
  </svg>
);

const BLUE = "#1d3fd9";

const iconBars = (
  <Svg stroke={BLUE} strokeWidth="2" strokeLinecap="round">
    <path d="M5 16v-5M10 16V4M15 16V9" />
  </Svg>
);

const iconStarBlue = (
  <Svg fill={BLUE}>
    <path d="M10 1.8l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L10 14.2 5 17l1.2-5.6L2 7.6l5.6-.6L10 1.8Z" />
  </Svg>
);

const iconUsers = (
  <Svg stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7.5" cy="7" r="2.6" />
    <path d="M2.5 16c.4-2.8 2.4-4.2 5-4.2s4.6 1.4 5 4.2" />
    <circle cx="14" cy="7.6" r="2.1" />
    <path d="M13.6 11.8c2.2.1 3.6 1.3 4 3.6" />
  </Svg>
);

const iconShare = (
  <svg viewBox="0 0 16 16" fill="#111">
    <circle cx="12.5" cy="3.2" r="2.2" />
    <circle cx="3.5" cy="8" r="2.2" />
    <circle cx="12.5" cy="12.8" r="2.2" />
    <path d="M5.2 7l5.6-3M5.2 9l5.6 3" stroke="#111" strokeWidth="1.2" />
  </svg>
);

const iconPlay = (
  <svg viewBox="0 0 22 22" fill="#6a5a50">
    <path d="M5 2.8v16.4a1 1 0 0 0 1.5.9l13-8.2a1 1 0 0 0 0-1.7L6.5 1.9A1 1 0 0 0 5 2.8Z" />
  </svg>
);

const iconCamera = (
  <svg viewBox="0 0 30 30" fill="none" stroke="#111" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
    <rect x="3.5" y="7.5" width="16" height="15" rx="3.2" />
    <path d="M19.5 13.2 26 9.5v11l-6.5-3.7" />
  </svg>
);

const iconCheck = (
  <Svg>
    <circle cx="10" cy="10" r="9" fill={BLUE} />
    <path d="m6 10.2 2.6 2.6L14 7.4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const Star = () => (
  <svg viewBox="0 0 20 20" fill="#3a3a3a">
    <path d="M10 1.8l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L10 14.2 5 17l1.2-5.6L2 7.6l5.6-.6L10 1.8Z" />
  </svg>
);

const Stars = () => (
  <span className="bs-c-stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star key={i} />
    ))}
  </span>
);

const featureIcons = {
  "learning resources": (
    <Svg stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="3.5" width="15" height="13" rx="2.5" />
      <path d="M6 8h8M6 12h5" />
    </Svg>
  ),
  "quality lesson videos": (
    <Svg stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="5" width="11" height="10" rx="2.5" />
      <path d="M13 8.6 18 6v8l-5-2.6" />
    </Svg>
  ),
  "certificate of completion": (
    <Svg stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="3.5" width="15" height="10.5" rx="2" />
      <circle cx="10" cy="8.7" r="2" />
      <path d="M8 14l-.6 3 2.6-1.4 2.6 1.4-.6-3" />
    </Svg>
  ),
  "private consultation": (
    <Svg stroke={BLUE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="5.5" r="2.4" />
      <path d="M2.5 15c.3-2.6 1.8-4 4-4" />
      <path d="M11 11l6 5M11 16l6-5" />
    </Svg>
  ),
};

function Img({ src, className, alt = "" }) {
  return <img className={className} src={src} alt={alt} onError={(e) => (e.currentTarget.style.display = "none")} />;
}

const stripModule = (t) => t.replace(/^Module\s*\d+:\s*/i, "");

function AboutTab({ course }) {
  const paragraphs = (course.about?.description || "").split(/\n\s*\n/).filter(Boolean);
  return (
    <>
      <h2 className={`bs-c-h ${headingFont.className}`}>Description</h2>
      {paragraphs.map((p, i) => (
        <p className="bs-c-p" key={i}>
          {p}
        </p>
      ))}

      <h2 className={`bs-c-h ${headingFont.className}`}>Sneak Peak</h2>
      <div className="bs-c-peek">
        {(course.about?.sneakPeekImages || []).map((src) => (
          <div key={src}>
            <Img src={src} />
          </div>
        ))}
      </div>

      <h2 className={`bs-c-h ${headingFont.className}`}>Key Points</h2>
      <ul className="bs-c-keys">
        {(course.about?.keyPoints || []).map((k) => (
          <li key={k}>
            {iconCheck}
            {k}
          </li>
        ))}
      </ul>
    </>
  );
}

function LessonsTab({ course }) {
  const modules = course.modules || [];
  return (
    <>
      <h2 className={`bs-c-h ${headingFont.className}`}>Explore the Modules</h2>
      <p className="bs-c-p">
        Immerse yourself in the course content as we break down each module into comprehensive lessons, providing
        practical insights and hands-on experiences.
      </p>

      <h2 className={`bs-c-h ${headingFont.className}`}>Lesson List</h2>
      {modules.length ? (
        <ul className="bs-c-mods">
          {modules.map((m) => (
            <li className="bs-c-mod" key={m.id}>
              <span className="bs-c-mod-ic">{iconCamera}</span>
              <div>
                <h3 className={`bs-c-mod-t ${headingFont.className}`}>{m.title}</h3>
                <p className="bs-c-mod-d">{m.description}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="bs-c-none">Lessons will be available soon.</p>
      )}

      <h2 className={`bs-c-h ${headingFont.className}`}>Lesson Content</h2>
      <p className="bs-c-p">
        Engage with each lesson through captivating video content, detailed textual explanations, and interactive
        elements. Download resources, complete assignments, and test your understanding with quizzes.
      </p>

      <h2 className={`bs-c-h ${headingFont.className}`}>Lesson Progress Tracking</h2>
      <p className="bs-c-p">
        Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through
        your learning journey.
      </p>

      <div className="bs-c-prog">
        <p className="bs-c-prog-l">Learning Progress</p>
        <p className={`bs-c-prog-v ${headingFont.className}`}>55%</p>
        <div className="bs-c-bar">
          <i style={{ width: "55%" }} />
        </div>
      </div>
    </>
  );
}

function ReviewsTab({ course }) {
  const [filter, setFilter] = useState("all");
  const reviews = course.reviews || {};
  const dist = reviews.ratingDistribution || {};
  const total = [5, 4, 3, 2, 1].reduce((s, n) => s + (dist[n] || 0), 0) || 1;
  const list = (reviews.list || []).filter((r) => filter === "all" || r.rating === filter);

  return (
    <>
      <h2 className={`bs-c-h ${headingFont.className}`}>What Learners Are Saying</h2>
      <p className="bs-c-p">
        Discover what our learners have to say about their experience with &lsquo;{course.title}.&rsquo; Read reviews
        and ratings from individuals who have embarked on the transformative journey of mastering digital asset
        creation.
      </p>

      <div className="bs-c-sum">
        <div className="bs-c-score">
          <small>Ratings</small>
          <b className={headingFont.className}>{reviews.averageRating ?? course.rating}</b>
        </div>
        <div className="bs-c-dist">
          {[5, 4, 3, 2, 1].map((n) => {
            const pct = Math.max(Math.sqrt((dist[n] || 0) / total) * 100, dist[n] ? 3 : 0);
            return (
              <div className="bs-c-dist-r" key={n}>
                <div className="bs-c-track">
                  <i style={{ width: `${Math.min(pct, 100)}%` }} />
                </div>
                <Stars />
                <span className="bs-c-cnt">{dist[n] || 0}</span>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className={`bs-c-h ${headingFont.className}`}>Individual Reviews:</h2>
      <div className="bs-c-fchips">
        <button
          type="button"
          className={`bs-c-fchip ${bodyFont.className}${filter === "all" ? " on" : ""}`}
          onClick={() => setFilter("all")}
        >
          All rating
        </button>
        {[5, 4, 3, 2, 1].map((n) => (
          <button
            key={n}
            type="button"
            className={`bs-c-fchip ${bodyFont.className}${filter === n ? " on" : ""}`}
            onClick={() => setFilter(n)}
          >
            <Star />
            {n}
          </button>
        ))}
      </div>

      {list.length ? (
        <ul className="bs-c-revs">
          {list.map((r) => (
            <li className="bs-c-rev" key={r.id}>
              <div className="bs-c-rev-top">
                <span className="bs-c-rev-av">
                  <Img src={r.userAvatar} alt={r.userName} />
                </span>
                <div>
                  <p className={`bs-c-rev-n ${headingFont.className}`}>{r.userName}</p>
                  <p className="bs-c-rev-r">{r.userRole}</p>
                </div>
                <span className={`bs-c-rev-d ${headingFont.className}`}>{r.date}</span>
              </div>
              <div className="bs-c-rev-s">
                <span className="bs-c-stars">
                  {Array.from({ length: r.rating }, (_, i) => (
                    <Star key={i} />
                  ))}
                </span>
              </div>
              <p className="bs-c-rev-c">{r.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="bs-c-none">No reviews yet.</p>
      )}
    </>
  );
}

export default function CourseDetails({ course }) {
  const [tab, setTab] = useState("About");
  const [playing, setPlaying] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const nav = document.querySelector(".bs-nav") || document.querySelector("header");
    if (!nav) return;

    const apply = () => {
      const pos = getComputedStyle(nav).position;
      const overlay = pos === "absolute" || pos === "fixed";

      root.style.setProperty(
        "--bs-nav",
        overlay ? `${Math.round(nav.getBoundingClientRect().height)}px` : "0px"
      );
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

  if (!course) return null;

  const modules = course.modules || [];
  const shown = modules.slice(0, 3);
  const remaining = Math.max((course.totalLessons || 0) - shown.length, 0);

  const share = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "";

    try {
      if (navigator.share) {
        await navigator.share({ title: course.title, url });
      } else {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      }
    } catch (e) {}
  };

  return (
    <main ref={rootRef} className={`bs-c ${bodyFont.className}`}>
      <style>{css}</style>

      <button type="button" className={`bs-c-share ${bodyFont.className}`} onClick={share}>
        {iconShare}
        {copied ? "Copied" : "Share"}
      </button>

      <div className="bs-c-wrap">
        <section className={`bs-c-hero ${headingFont.className}`}>
          <h1 className={`bs-c-title ${headingFont.className}`}>{course.title}</h1>

          <p className={`bs-c-sub ${headingFont.className}`}>{course.subtitle}</p>

          <p className={`bs-c-by ${headingFont.className}`}>
            by <b>{course.creator?.name}</b>
          </p>

          <div className={`bs-c-badges ${bodyFont.className}`}>
            <span className="bs-c-badge">
              {iconBars}
              {course.level}
            </span>

            <span className="bs-c-badge">
              {iconStarBlue}
              {course.rating} ({course.reviewCount} reviews)
            </span>

            <span className="bs-c-badge">
              {iconUsers}
              {course.studentsEnrolled} Students
            </span>
          </div>

          <div className="bs-c-video">
            {playing && course.previewVideoUrl ? (
              <video src={course.previewVideoUrl} controls autoPlay />
            ) : (
              <>
                <Img className="poster" src={course.posterImage || course.thumbnail} alt={course.title} />

                <button
                  type="button"
                  className="bs-c-play"
                  aria-label="Play preview"
                  onClick={() => setPlaying(true)}
                >
                  {iconPlay}
                </button>
              </>
            )}
          </div>
        </section>

        <aside className="bs-c-side">
          <h2 className={`bs-c-side-h ${headingFont.className}`}>
            {course.totalLessons} Lessons ({course.totalDuration})
          </h2>

          <ul className="bs-c-lessons">
            {shown.map((m, i) => (
              <li className="bs-c-lesson" key={m.id}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span>{stripModule(m.title)}</span>
                <span className="d">{m.duration}</span>
              </li>
            ))}

            <li className="bs-c-more" style={{ listStyle: "none" }}>
              {remaining} {shown.length ? "more videos" : "videos"}
            </li>
          </ul>

          <p className="bs-c-blurb">{SIDEBAR_BLURB}</p>

          <div className="bs-c-price">
            <b className={headingFont.className}>${course.price}</b>
            <span>/{course.pricingModel}</span>
          </div>

          <button type="button" className={`bs-c-enroll ${bodyFont.className}`}>
            Enroll Now
          </button>

          <h3 className={`bs-c-incl-h ${headingFont.className}`}>This course include</h3>

          <ul className="bs-c-incl">
            {(course.features || []).map((f) => (
              <li key={f}>
                {featureIcons[f.toLowerCase()] || iconCheck}
                {f}
              </li>
            ))}
          </ul>

          <hr className="bs-c-hr" />

          <div className="bs-c-creator">
            <span className="bs-c-cav">
              <Img src={course.creator?.avatar} alt={course.creator?.name} />
            </span>

            <div>
              <p className={`bs-c-cname ${headingFont.className}`}>{course.creator?.name}</p>
              <p className="bs-c-crole">{course.creator?.role}</p>
            </div>
          </div>

          <p className="bs-c-blurb" style={{ marginTop: 24 }}>
            {SIDEBAR_BLURB}
          </p>

          <button type="button" className={`bs-c-profile ${bodyFont.className}`}>
            See Full Profile
          </button>
        </aside>

        <div className="bs-c-main">
          <div className="bs-c-tabs">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                className={`bs-c-tab ${bodyFont.className}${t === tab ? " on" : ""}`}
                onClick={() => setTab(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {tab === "About" && <AboutTab course={course} />}
          {tab === "Lessons" && <LessonsTab course={course} />}
          {tab === "Reviews" && <ReviewsTab course={course} />}
        </div>
      </div>
    </main>
  );
}