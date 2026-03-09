<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<meta name="description" content="Sattar Ahmed - Medical Billing & Revenue Cycle Specialist Portfolio"/>
<title>Sattar Ahmed | Medical Billing & Revenue Cycle Specialist</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Nunito+Sans:wght@200;300;400;600;700&family=Fira+Code:wght@300;400;500&display=swap" rel="stylesheet"/>
<style>
/* ═══════════════════════════════════════
   DESIGN SYSTEM — Deep Jade & Champagne
   ═══════════════════════════════════════ */
:root{
  --jade:#0B3D2E; --jade-mid:#0F4D3A; --jade-light:#145240;
  --jade-card:#0D4535; --jade-glass:rgba(11,61,46,.7);
  --champagne:#E8C97A; --champ-light:#F5E0A8; --champ-dim:#8C7240;
  --emerald:#2ECC71; --teal:#1ABC9C; --gold:#F0B429;
  --white:#F7F3EC; --off:#E2DDD4; --muted:#8FA99A; --muted-dark:#5A7A6A;
  --ink:#040F0A;
}
*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--jade);color:var(--white);font-family:'Nunito Sans',sans-serif;font-weight:300;overflow-x:hidden;line-height:1.7;cursor:default}
::selection{background:var(--champagne);color:var(--ink)}
::-webkit-scrollbar{width:3px}
::-webkit-scrollbar-track{background:var(--jade)}
::-webkit-scrollbar-thumb{background:var(--champ-dim)}
/* ── SHIMMER PATTERN ── */
body::before{
  content:'';position:fixed;inset:0;
  background-image:radial-gradient(ellipse at 20% 50%,rgba(46,204,113,.06) 0%,transparent 60%),
    radial-gradient(ellipse at 80% 20%,rgba(232,201,122,.05) 0%,transparent 50%),
    radial-gradient(ellipse at 60% 90%,rgba(26,188,156,.04) 0%,transparent 50%);
  pointer-events:none;z-index:0;
}
/* ── GRID ── */
.grid-bg{position:fixed;inset:0;z-index:0;pointer-events:none;
  background-image:linear-gradient(rgba(232,201,122,.03) 1px,transparent 1px),
    linear-gradient(90deg,rgba(232,201,122,.03) 1px,transparent 1px);
  background-size:60px 60px}
/* ══════════════════ NAV ══════════════════ */
nav{position:fixed;top:0;left:0;right:0;z-index:999;height:70px;
  display:flex;align-items:center;justify-content:space-between;padding:0 60px;
  background:rgba(4,15,10,.92);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);
  border-bottom:1px solid rgba(232,201,122,.1)}
nav::after{content:'';position:absolute;bottom:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,var(--champagne),var(--champ-light),var(--champagne),transparent);opacity:.6}
.nav-brand{font-family:'Playfair Display',serif;font-size:20px;font-weight:600;
  color:var(--champagne);text-decoration:none;letter-spacing:.5px}
.nav-links{display:flex;gap:30px;list-style:none}
.nav-links a{font-family:'Fira Code',monospace;font-size:9.5px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--muted);text-decoration:none;transition:color .25s;white-space:nowrap;position:relative;padding-bottom:3px}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:1px;
  background:var(--champagne);transition:width .3s}
.nav-links a:hover{color:var(--champagne)}.nav-links a:hover::after{width:100%}
.nav-cta{padding:9px 22px;background:linear-gradient(135deg,var(--champagne),var(--champ-light));
  color:var(--ink);font-family:'Fira Code',monospace;font-size:9px;letter-spacing:1.5px;
  text-transform:uppercase;font-weight:500;text-decoration:none;transition:all .3s;
  clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))}
.nav-cta:hover{filter:brightness(1.15);transform:translateY(-2px);box-shadow:0 8px 24px rgba(232,201,122,.3)}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:8px;background:none;border:none;z-index:1001}
.hamburger span{display:block;width:22px;height:1.5px;background:var(--champagne);transition:all .3s;transform-origin:center}
.hamburger.open span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}
.hamburger.open span:nth-child(2){opacity:0;transform:scaleX(0)}
.hamburger.open span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}
.mobile-nav{display:none;position:fixed;top:70px;left:0;right:0;z-index:998;
  background:rgba(4,15,10,.98);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
  border-bottom:1px solid rgba(232,201,122,.12);max-height:0;overflow:hidden;transition:max-height .4s ease}
.mobile-nav.open{max-height:500px}
.mobile-nav ul{list-style:none;padding:16px 0 28px}
.mobile-nav ul li a{display:block;padding:13px 28px;font-family:'Fira Code',monospace;font-size:10px;
  letter-spacing:2px;text-transform:uppercase;color:var(--muted);text-decoration:none;
  border-bottom:1px solid rgba(232,201,122,.05);transition:all .3s}
.mobile-nav ul li a:hover{color:var(--champagne);background:rgba(232,201,122,.04);padding-left:38px}
/* ══════════════════ HERO ══════════════════ */
#home{min-height:100vh;display:flex;align-items:center;padding:120px 60px 80px;
  position:relative;overflow:hidden;z-index:1}
.hero-orb1{position:absolute;top:-100px;right:-100px;width:600px;height:600px;
  background:radial-gradient(circle,rgba(46,204,113,.08) 0%,transparent 65%);pointer-events:none}
.hero-orb2{position:absolute;bottom:-80px;left:-80px;width:450px;height:450px;
  background:radial-gradient(circle,rgba(232,201,122,.06) 0%,transparent 65%);pointer-events:none}
.hero-watermark{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);
  font-family:'Playfair Display',serif;font-size:clamp(60px,10vw,160px);font-weight:700;
  font-style:italic;color:rgba(232,201,122,.025);white-space:nowrap;pointer-events:none;user-select:none;letter-spacing:8px}
.hero-inner{max-width:1200px;margin:0 auto;width:100%;position:relative;z-index:2}
.hero-grid{display:grid;grid-template-columns:1fr 380px;gap:80px;align-items:center}
/* Hero left */
.hero-tag-row{display:flex;align-items:center;gap:12px;margin-bottom:24px}
.live-dot{width:7px;height:7px;background:var(--emerald);border-radius:50%;
  box-shadow:0 0 10px var(--emerald);animation:pulse-dot 2s ease-in-out infinite;flex-shrink:0}
@keyframes pulse-dot{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.4;transform:scale(.7)}}
.hero-tag{font-family:'Fira Code',monospace;font-size:10px;letter-spacing:3px;
  text-transform:uppercase;color:var(--champagne);border:1px solid rgba(232,201,122,.3);
  padding:5px 14px;background:rgba(232,201,122,.06)}
.hero-eyebrow{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:5px;
  text-transform:uppercase;color:var(--champ-dim);margin-bottom:14px}
.hero-name{font-family:'Playfair Display',serif;font-size:clamp(52px,7vw,92px);
  font-weight:600;line-height:.93;margin-bottom:16px;letter-spacing:-1px}
.hero-name .fn{color:var(--white);display:block}
.hero-name .ln{color:var(--champagne);font-style:italic;display:block}
.hero-rule{display:flex;align-items:center;gap:16px;margin:18px 0}
.hero-rule-line{width:60px;height:1px;background:linear-gradient(90deg,var(--champagne),transparent)}
.hero-subtitle{font-family:'Fira Code',monospace;font-size:10px;letter-spacing:2.5px;
  text-transform:uppercase;color:var(--teal)}
.hero-bio{font-size:15px;color:var(--muted);line-height:1.85;max-width:500px;margin-bottom:36px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:48px}
.btn-shine{padding:14px 32px;background:linear-gradient(135deg,var(--champagne),var(--champ-light),var(--champagne));
  background-size:200% 100%;color:var(--ink);font-family:'Fira Code',monospace;font-size:9.5px;
  letter-spacing:2px;text-transform:uppercase;font-weight:600;text-decoration:none;border:none;cursor:pointer;
  transition:all .4s;display:inline-flex;align-items:center;gap:9px;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
  animation:shimmer-btn 3s ease-in-out infinite}
@keyframes shimmer-btn{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
.btn-shine:hover{transform:translateY(-3px);box-shadow:0 16px 40px rgba(232,201,122,.35);filter:brightness(1.1)}
.btn-ghost{padding:14px 32px;background:transparent;color:var(--white);
  font-family:'Fira Code',monospace;font-size:9.5px;letter-spacing:2px;text-transform:uppercase;
  text-decoration:none;border:1px solid rgba(255,255,255,.15);transition:all .3s;display:inline-block;
  clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))}
.btn-ghost:hover{border-color:var(--champagne);color:var(--champagne);transform:translateY(-3px)}
.hero-stats{display:flex;gap:28px;flex-wrap:wrap}
.hstat{display:flex;flex-direction:column;gap:3px}
.hstat-n{font-family:'Playfair Display',serif;font-size:36px;font-style:italic;color:var(--champagne);line-height:1}
.hstat-l{font-family:'Fira Code',monospace;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--muted-dark)}
.hstat-div{width:1px;background:rgba(255,255,255,.08);align-self:stretch;margin:4px 0}
/* Hero profile card */
.profile-card{background:var(--jade-glass);border:1px solid rgba(232,201,122,.15);
  padding:36px 28px;position:relative;overflow:hidden;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);
  text-align:center}
.profile-card::before{content:'';position:absolute;top:-1px;left:20%;right:20%;height:2px;
  background:linear-gradient(90deg,transparent,var(--champagne),var(--champ-light),var(--champagne),transparent)}
.profile-card::after{content:'';position:absolute;inset:0;
  background:linear-gradient(135deg,rgba(232,201,122,.04) 0%,transparent 50%,rgba(46,204,113,.03) 100%);
  pointer-events:none}
.profile-img-wrap{width:110px;height:110px;margin:0 auto 20px;position:relative}
.profile-img-wrap::before{content:'';position:absolute;inset:-3px;
  background:conic-gradient(var(--champagne),var(--champ-light),var(--emerald),var(--champagne));
  border-radius:50%;animation:spin-border 4s linear infinite}
.profile-img{width:100%;height:100%;border-radius:50%;object-fit:cover;position:relative;z-index:1;
  border:3px solid var(--jade)}
.profile-img-placeholder{width:100%;height:100%;border-radius:50%;background:var(--jade-card);
  position:relative;z-index:1;border:3px solid var(--jade);display:flex;align-items:center;justify-content:center;
  font-family:'Playfair Display',serif;font-size:36px;font-style:italic;color:var(--champagne)}
@keyframes spin-border{to{transform:rotate(360deg)}}
.pc-name{font-family:'Playfair Display',serif;font-size:20px;font-weight:600;margin-bottom:4px}
.pc-title{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:2px;
  text-transform:uppercase;color:var(--teal);margin-bottom:20px}
.pc-chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-bottom:20px}
.pc-chip{padding:4px 11px;background:rgba(232,201,122,.07);border:1px solid rgba(232,201,122,.22);
  font-family:'Fira Code',monospace;font-size:8px;letter-spacing:1px;text-transform:uppercase;color:var(--champagne)}
.pc-avail{display:flex;align-items:center;justify-content:center;gap:8px;padding:10px;
  background:rgba(46,204,113,.07);border:1px solid rgba(46,204,113,.2)}
.pc-avail-dot{width:6px;height:6px;background:var(--emerald);border-radius:50%;
  box-shadow:0 0 8px var(--emerald);animation:pulse-dot 2s ease-in-out infinite}
.pc-avail-text{font-family:'Fira Code',monospace;font-size:8px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--emerald)}
/* ══════════════════ SECTIONS ══════════════════ */
.sec{padding:110px 60px;position:relative;z-index:1}
.sec-jade{background:var(--jade-mid)}.sec-card{background:var(--jade-card)}
.sec-inner{max-width:1200px;margin:0 auto}
.sec-eyebrow{display:flex;align-items:center;gap:14px;margin-bottom:12px;
  font-family:'Fira Code',monospace;font-size:9px;letter-spacing:4px;text-transform:uppercase;color:var(--champagne)}
.sec-eyebrow::before{content:'';display:block;width:30px;height:1px;background:var(--champagne);flex-shrink:0}
.sec-title{font-family:'Playfair Display',serif;font-size:clamp(32px,4.5vw,52px);font-weight:600;line-height:1.05;margin-bottom:56px}
.sec-title em{color:var(--champagne);font-style:italic}
.divider{width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(232,201,122,.15),transparent);z-index:1;position:relative}
/* GLASS CARD BASE */
.gcard{background:var(--jade-glass);border:1px solid rgba(232,201,122,.12);
  backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);
  position:relative;overflow:hidden;transition:all .4s}
.gcard::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;
  background:linear-gradient(90deg,transparent,rgba(232,201,122,.4),transparent);
  transform:scaleX(0);transition:transform .4s;transform-origin:left}
.gcard:hover::before{transform:scaleX(1)}
.gcard:hover{border-color:rgba(232,201,122,.3);transform:translateY(-5px);
  box-shadow:0 24px 60px rgba(0,0,0,.4),0 0 40px rgba(232,201,122,.06)}
/* ── ABOUT ── */
.about-grid{display:grid;grid-template-columns:1.4fr 1fr;gap:60px;align-items:start}
.about-text{font-size:15.5px;color:var(--off);line-height:1.9;margin-bottom:24px}
.about-quote{padding:20px 28px;border-left:3px solid var(--champagne);background:rgba(232,201,122,.04);
  font-family:'Playfair Display',serif;font-size:18px;font-style:italic;color:var(--champ-light);line-height:1.6;margin-bottom:24px}
.expertise-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.expertise-list li{display:flex;align-items:center;gap:12px;padding:10px 16px;
  background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);
  font-size:13.5px;color:var(--off);transition:all .3s;cursor:default}
.expertise-list li::before{content:'▸';color:var(--champagne);font-size:10px;flex-shrink:0}
.expertise-list li:hover{border-color:rgba(232,201,122,.25);background:rgba(232,201,122,.04);color:var(--champagne);padding-left:22px}
/* ── SKILLS CARDS ── */
.skills-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(232,201,122,.07)}
.skill-card{background:var(--jade-mid);padding:36px 28px;position:relative;overflow:hidden;transition:background .35s}
.skill-card:hover{background:rgba(232,201,122,.05)}
.skill-num{position:absolute;top:12px;right:18px;font-family:'Playfair Display',serif;
  font-size:56px;font-style:italic;color:rgba(232,201,122,.05);line-height:1;pointer-events:none}
.skill-icon{font-size:32px;display:block;margin-bottom:16px}
.skill-h{font-family:'Playfair Display',serif;font-size:20px;font-weight:600;margin-bottom:10px}
.skill-p{font-size:13.5px;color:var(--muted);line-height:1.7}
.skill-bar-wrap{margin-top:16px}
.skill-bar-track{height:2px;background:rgba(255,255,255,.07);overflow:hidden;border-radius:1px}
.skill-bar-fill{height:100%;background:linear-gradient(90deg,var(--champ-dim),var(--champagne));
  width:0;transition:width 1.8s cubic-bezier(.16,1,.3,1)}
.skill-pct{font-family:'Fira Code',monospace;font-size:9px;color:var(--champagne);margin-top:6px}
/* ── KNOWLEDGE HUB ── */
.kb-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
.kb-card{padding:34px 30px}
.kb-card-ico{font-size:28px;margin-bottom:14px;display:block}
.kb-card-h{font-family:'Playfair Display',serif;font-size:20px;font-weight:600;margin-bottom:10px}
.kb-card p{font-size:13.5px;color:var(--muted);line-height:1.75}
/* ── SEARCH TOOL ── */
.search-wrap{padding:40px 36px;max-width:680px;margin:0 auto}
.search-label{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:2px;
  text-transform:uppercase;color:var(--champagne);display:block;margin-bottom:14px}
.search-controls{display:flex;gap:0}
.search-input{flex:1;background:rgba(255,255,255,.03);border:1px solid rgba(232,201,122,.2);
  border-right:none;color:var(--white);font-family:'Nunito Sans',sans-serif;font-size:14px;
  padding:14px 20px;outline:none;transition:border-color .3s;-webkit-appearance:none;border-radius:0}
.search-input:focus{border-color:rgba(232,201,122,.5);background:rgba(232,201,122,.03)}
.search-input::placeholder{color:rgba(143,169,154,.5);font-size:13px}
.search-btn{padding:14px 28px;background:linear-gradient(135deg,var(--champagne),var(--champ-light));
  color:var(--ink);font-family:'Fira Code',monospace;font-size:9px;letter-spacing:1.5px;
  text-transform:uppercase;font-weight:600;border:none;cursor:pointer;transition:all .3s;white-space:nowrap}
.search-btn:hover{filter:brightness(1.1);box-shadow:0 6px 20px rgba(232,201,122,.3)}
.search-results{margin-top:24px;display:flex;flex-direction:column;gap:10px;min-height:20px}
.result-item{padding:14px 18px;background:rgba(255,255,255,.03);border:1px solid rgba(232,201,122,.15);
  border-left:3px solid var(--champagne);transition:background .3s}
.result-item:hover{background:rgba(232,201,122,.04)}
.result-code{font-family:'Fira Code',monospace;font-size:11px;color:var(--champagne);letter-spacing:1px;margin-bottom:4px}
.result-desc{font-size:13px;color:var(--off);line-height:1.55}
.result-empty{font-family:'Fira Code',monospace;font-size:11px;color:var(--muted);letter-spacing:1px;
  text-align:center;padding:20px;border:1px dashed rgba(232,201,122,.15)}
/* ── FAQ ── */
.faq-list{display:flex;flex-direction:column;gap:8px;max-width:800px}
.faq-item{border:1px solid rgba(232,201,122,.12);background:var(--jade-glass);
  backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);overflow:hidden;transition:border-color .3s}
.faq-item.open{border-color:rgba(232,201,122,.3)}
.faq-q{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;cursor:pointer;
  font-family:'Playfair Display',serif;font-size:17px;font-weight:600;color:var(--white);
  list-style:none;transition:color .3s;gap:16px}
.faq-q:hover{color:var(--champagne)}
.faq-q::after{content:'+';font-size:22px;color:var(--champagne);flex-shrink:0;
  transition:transform .3s;font-family:'Fira Code',monospace;font-weight:300;line-height:1}
.faq-item.open .faq-q::after{transform:rotate(45deg)}
.faq-a{max-height:0;overflow:hidden;transition:max-height .4s ease,padding .4s ease}
.faq-item.open .faq-a{max-height:200px}
.faq-a-inner{padding:0 24px 20px;font-size:14px;color:var(--muted);line-height:1.8;
  border-top:1px solid rgba(232,201,122,.08)}
/* ── PORTFOLIO ── */
.portfolio-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.port-card{padding:36px 28px}
.port-num{font-family:'Playfair Display',serif;font-size:48px;font-style:italic;
  color:rgba(232,201,122,.12);line-height:1;margin-bottom:16px}
.port-h{font-family:'Playfair Display',serif;font-size:20px;font-weight:600;margin-bottom:10px}
.port-p{font-size:13.5px;color:var(--muted);line-height:1.7;margin-bottom:14px}
.port-tech{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:1px;
  color:var(--champ-dim);border-top:1px solid rgba(232,201,122,.1);padding-top:12px;margin-top:12px}
/* ── CONTACT ── */
.contact-layout{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start}
.contact-hl{font-family:'Playfair Display',serif;font-size:clamp(28px,3.5vw,44px);line-height:1.15;margin-bottom:14px}
.contact-hl em{color:var(--champagne);font-style:italic}
.contact-sub{font-size:14.5px;color:var(--muted);line-height:1.85;margin-bottom:32px}
.c-list{display:flex;flex-direction:column;gap:12px}
.c-row{display:flex;align-items:center;gap:14px;padding:13px 16px;
  background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);transition:border-color .3s}
.c-row:hover{border-color:rgba(232,201,122,.25)}
.c-ico{width:38px;height:38px;flex-shrink:0;background:rgba(232,201,122,.08);
  border:1px solid rgba(232,201,122,.2);display:flex;align-items:center;justify-content:center;font-size:15px}
.c-lbl{font-family:'Fira Code',monospace;font-size:8px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--champ-dim);margin-bottom:2px}
.c-val{font-size:14px;color:var(--white)}
.c-val a{color:var(--white);text-decoration:none;transition:color .3s}
.c-val a:hover{color:var(--champagne)}
.contact-form-wrap{background:var(--jade-glass);border:1px solid rgba(232,201,122,.12);
  padding:36px 30px;position:relative;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px)}
.contact-form-wrap::before{content:'';position:absolute;top:-1px;left:24px;right:24px;height:2px;
  background:linear-gradient(90deg,transparent,var(--champagne),transparent)}
.cf-label{font-family:'Fira Code',monospace;font-size:8px;letter-spacing:2px;
  text-transform:uppercase;color:var(--champ-dim);display:block;margin-bottom:6px}
.cf-in,.cf-ta{width:100%;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);
  color:var(--white);font-family:'Nunito Sans',sans-serif;font-size:14px;font-weight:300;
  padding:14px 18px;outline:none;transition:all .3s;-webkit-appearance:none;border-radius:0;margin-bottom:12px}
.cf-in:focus,.cf-ta:focus{border-color:rgba(232,201,122,.4);background:rgba(232,201,122,.025)}
.cf-in::placeholder,.cf-ta::placeholder{color:rgba(90,122,106,.7);font-size:13px}
.cf-ta{resize:vertical;min-height:110px;margin-bottom:0}
.cf-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
.cf-row .cf-in{margin-bottom:0}
.btn-contact{width:100%;padding:15px;margin-top:12px;
  background:linear-gradient(135deg,var(--champagne),var(--champ-light),var(--champagne));
  background-size:200%;color:var(--ink);font-family:'Fira Code',monospace;font-size:10px;
  letter-spacing:2px;text-transform:uppercase;font-weight:700;border:none;cursor:pointer;
  transition:all .4s;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));
  display:flex;align-items:center;justify-content:center;gap:10px}
.btn-contact:hover{filter:brightness(1.12);transform:translateY(-2px);
  box-shadow:0 12px 30px rgba(232,201,122,.3);background-position:right}
.btn-contact:disabled{opacity:.6;cursor:not-allowed;transform:none;box-shadow:none}
/* TOAST */
.toast{position:fixed;bottom:28px;right:28px;z-index:9999;padding:14px 24px;
  font-family:'Fira Code',monospace;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;
  transform:translateY(16px);opacity:0;transition:all .4s ease;pointer-events:none}
.toast.show{transform:translateY(0);opacity:1}
.toast.success{background:var(--emerald);color:#051a0a}
.toast.error{background:#e05050;color:#fff}
/* FOOTER */
footer{background:var(--ink);border-top:1px solid rgba(232,201,122,.1);padding:32px 60px;position:relative;z-index:1}
.footer-inner{max-width:1200px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap}
.footer-brand{font-family:'Playfair Display',serif;font-size:20px;font-style:italic;color:var(--champagne)}
.footer-links{display:flex;gap:22px}
.footer-links a{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:1.5px;
  text-transform:uppercase;color:var(--muted-dark);text-decoration:none;transition:color .3s}
.footer-links a:hover{color:var(--champagne)}
.footer-copy{font-family:'Fira Code',monospace;font-size:9px;letter-spacing:1px;color:var(--muted-dark)}
/* REVEAL */
.rv{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
.rv.on{opacity:1;transform:translateY(0)}
/* ═══ RESPONSIVE ═══ */
@media(max-width:1100px){
  .hero-grid{grid-template-columns:1fr;gap:50px}
  .about-grid{grid-template-columns:1fr;gap:40px}
  .kb-grid{grid-template-columns:1fr 1fr}
  .portfolio-grid{grid-template-columns:1fr 1fr}
  .contact-layout{grid-template-columns:1fr;gap:50px}
}
@media(max-width:960px){
  nav{padding:0 24px}.nav-links{display:none}.nav-cta{display:none}
  .hamburger{display:flex}.mobile-nav{display:block}
  .sec,#home{padding:80px 24px}#home{padding-top:100px}
  .skills-grid{grid-template-columns:1fr 1fr}
  footer{padding:28px 24px}.footer-inner{flex-direction:column;text-align:center}
}
@media(max-width:640px){
  nav{padding:0 18px}
  .sec,#home{padding:64px 18px}#home{padding-top:90px}
  .hero-name{font-size:clamp(46px,13vw,64px)}
  .skills-grid{grid-template-columns:1fr}
  .kb-grid{grid-template-columns:1fr}
  .portfolio-grid{grid-template-columns:1fr}
  .search-controls{flex-direction:column}
  .search-input{border-right:1px solid rgba(232,201,122,.2);border-bottom:none}
  .cf-row{grid-template-columns:1fr}
  footer{padding:24px 18px}
  .toast{bottom:14px;right:14px;left:14px;text-align:center}
}
</style>
</head>
<body>
<div class="grid-bg"></div>
<div class="toast" id="toast"></div>
<!-- NAV -->
<nav>
  <a href="#home" class="nav-brand">Sattar Ahmed</a>
  <ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#knowledge-hub">Knowledge Hub</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" class="nav-cta">Hire Me</a>
  <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
</nav>
<div class="mobile-nav" id="mobileNav">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#knowledge-hub">Knowledge Hub</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</div>

<!-- ══ HERO ══ -->
<section id="home">
  <div class="hero-orb1"></div><div class="hero-orb2"></div>
  <div class="hero-watermark">REVENUE CYCLE</div>
  <div class="hero-inner">
    <div class="hero-grid">
      <!-- Left -->
      <div>
        <div class="hero-tag-row">
          <span class="live-dot"></span>
          <span class="hero-tag">Revenue Focused. Detail Driven.</span>
        </div>
        <p class="hero-eyebrow">&#8212; Medical Billing Professional &#8212;</p>
        <h1 class="hero-name">
          <span class="fn">Sattar</span>
          <span class="ln">Ahmed</span>
        </h1>
        <div class="hero-rule">
          <div class="hero-rule-line"></div>
          <span class="hero-subtitle">Medical Billing &amp; Revenue Cycle Specialist</span>
        </div>
        <p class="hero-bio">Helping healthcare providers optimize revenue cycle management and medical billing processes. Combining compliance, analytics, and patient-centric communication to keep financial operations running at peak efficiency.</p>
        <div class="hero-actions">
          <a href="assets/cv/sattar-ahmed-cv.pdf" download class="btn-shine">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
          <a href="#portfolio" class="btn-ghost">View Portfolio</a>
        </div>
        <div class="hero-stats">
          <div class="hstat"><span class="hstat-n">4+</span><span class="hstat-l">Yrs Experience</span></div>
          <div class="hstat-div"></div>
          <div class="hstat"><span class="hstat-n">98%</span><span class="hstat-l">Clean Claims</span></div>
          <div class="hstat-div"></div>
          <div class="hstat"><span class="hstat-n">$2M+</span><span class="hstat-l">AR Recovered</span></div>
          <div class="hstat-div"></div>
          <div class="hstat"><span class="hstat-n">3</span><span class="hstat-l">Specialties</span></div>
        </div>
      </div>
      <!-- Right — Profile Card -->
      <div class="profile-card rv">
        <div class="profile-img-wrap">
          <div class="profile-img-placeholder">SA</div>
        </div>
        <div class="pc-name">Sattar Ahmed</div>
        <div class="pc-title">Medical Billing &amp; RCM Specialist</div>
        <div class="pc-chips">
          <span class="pc-chip">ICD-10</span>
          <span class="pc-chip">CPT</span>
          <span class="pc-chip">HCPCS</span>
          <span class="pc-chip">HIPAA</span>
          <span class="pc-chip">AR</span>
          <span class="pc-chip">Kareo</span>
        </div>
        <div class="pc-avail">
          <span class="pc-avail-dot"></span>
          <span class="pc-avail-text">Open to Opportunities</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ ABOUT ══ -->
<section id="about" class="sec sec-jade">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">About</div>
    <h2 class="sec-title rv">Professional <em>Introduction</em></h2>
    <div class="about-grid">
      <div class="rv">
        <div class="about-quote">"Revenue Focused. Detail Driven. Results Proven."</div>
        <p class="about-text">I support healthcare organizations by building reliable medical billing workflows, reducing claim denials, and improving payment turnaround. With 4+ years in revenue cycle management, I bring a combination of technical coding expertise and strategic thinking that turns billing bottlenecks into optimized revenue streams.</p>
        <p class="about-text">My approach combines compliance rigor, real-time analytics, and patient-centric communication to keep financial operations efficient — from first patient contact to final payment reconciliation.</p>
      </div>
      <div class="rv">
        <ul class="expertise-list">
          <li>Revenue Cycle Management</li>
          <li>AR Follow-Up &amp; Aging Analysis</li>
          <li>Payment Posting &amp; Reconciliation</li>
          <li>Insurance Verification</li>
          <li>Denial Management &amp; Appeals</li>
          <li>Provider Credentialing</li>
          <li>CPT Coding (Procedural)</li>
          <li>ICD-10-CM Coding (Diagnosis)</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ SKILLS ══ -->
<section id="skills" class="sec">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">Skills Dashboard</div>
    <h2 class="sec-title rv">Core <em>Capabilities</em></h2>
    <div class="skills-grid">
      <div class="skill-card rv">
        <span class="skill-num">01</span>
        <span class="skill-icon">&#128200;</span>
        <h3 class="skill-h">Revenue Cycle Management</h3>
        <p class="skill-p">End-to-end optimization from patient intake to final reimbursement — maximizing every dollar in the cycle.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="97"></div></div><div class="skill-pct">97% Proficiency</div></div>
      </div>
      <div class="skill-card rv">
        <span class="skill-num">02</span>
        <span class="skill-icon">&#128222;</span>
        <h3 class="skill-h">AR Follow-Up</h3>
        <p class="skill-p">Focused claim tracking to reduce aging balances and accelerate collections before accounts go stale.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="96"></div></div><div class="skill-pct">96% Proficiency</div></div>
      </div>
      <div class="skill-card rv">
        <span class="skill-num">03</span>
        <span class="skill-icon">&#128737;&#65039;</span>
        <h3 class="skill-h">Denial Management</h3>
        <p class="skill-p">Root-cause analysis and systematic resubmission workflows achieving 87% denial overturn rate.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="95"></div></div><div class="skill-pct">95% Proficiency</div></div>
      </div>
      <div class="skill-card rv">
        <span class="skill-num">04</span>
        <span class="skill-icon">&#128179;</span>
        <h3 class="skill-h">Payment Posting</h3>
        <p class="skill-p">Accurate ERA/EOB posting with variance checks, reconciliation, and same-day balancing across all payers.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="98"></div></div><div class="skill-pct">98% Proficiency</div></div>
      </div>
      <div class="skill-card rv">
        <span class="skill-num">05</span>
        <span class="skill-icon">&#9989;</span>
        <h3 class="skill-h">Insurance Verification</h3>
        <p class="skill-p">Coverage and eligibility validation at scheduling to prevent avoidable billing errors and authorization gaps.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="94"></div></div><div class="skill-pct">94% Proficiency</div></div>
      </div>
      <div class="skill-card rv">
        <span class="skill-num">06</span>
        <span class="skill-icon">&#129534;</span>
        <h3 class="skill-h">Medical Coding</h3>
        <p class="skill-p">Precise CPT and ICD-10-CM coding alignment for compliant claim submission with 98%+ accuracy rate.</p>
        <div class="skill-bar-wrap"><div class="skill-bar-track"><div class="skill-bar-fill" data-w="98"></div></div><div class="skill-pct">98% Proficiency</div></div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ KNOWLEDGE HUB ══ -->
<section id="knowledge-hub" class="sec sec-jade">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">Medical Billing Knowledge Hub</div>
    <h2 class="sec-title rv">Key <em>Concepts</em></h2>
    <div class="kb-grid">
      <div class="gcard kb-card rv">
        <span class="kb-card-ico">&#128203;</span>
        <h3 class="kb-card-h">CPT Codes Overview</h3>
        <p>Current Procedural Terminology (CPT) codes describe medical services and procedures used for billing and reimbursement. Each 5-digit code precisely identifies what was done to the patient, ensuring payers reimburse correctly for every service rendered.</p>
      </div>
      <div class="gcard kb-card rv">
        <span class="kb-card-ico">&#128268;</span>
        <h3 class="kb-card-h">ICD-10 Diagnosis Coding</h3>
        <p>ICD-10-CM codes capture diagnoses and clinical conditions to justify treatment, support claims, and maintain compliance. Accurate diagnosis coding is critical for medical necessity documentation and prevents costly claim denials.</p>
      </div>
      <div class="gcard kb-card rv">
        <span class="kb-card-ico">&#128196;</span>
        <h3 class="kb-card-h">Insurance Claim Workflow</h3>
        <p>Verify eligibility at scheduling, assign accurate codes, submit clean claims via clearinghouse, monitor payer adjudication status, post payments to patient accounts, and resolve any denials with timely appeals and documentation.</p>
      </div>
      <div class="gcard kb-card rv">
        <span class="kb-card-ico">&#128260;</span>
        <h3 class="kb-card-h">Revenue Cycle Stages</h3>
        <p>Scheduling, registration, charge capture, coding, claim filing, payer adjudication, payment posting, patient statements, and AR follow-up — each stage directly impacts cash flow, days in AR, and overall practice financial health.</p>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ SEARCH TOOL ══ -->
<section id="search" class="sec sec-card">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">Search Tool</div>
    <h2 class="sec-title rv">CPT, ICD-10 &amp; Billing <em>Q&amp;A</em></h2>
    <div class="gcard search-wrap rv">
      <label class="search-label" for="searchInput">Search CPT / ICD-10 codes or billing topics</label>
      <div class="search-controls">
        <input id="searchInput" class="search-input" type="text" placeholder="Try: 99213, E11.9, denial, AR, colonoscopy&#8230;" autocomplete="off"/>
        <button id="searchBtn" class="search-btn" type="button">Search</button>
      </div>
      <div id="searchResults" class="search-results" aria-live="polite"></div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ FAQ ══ -->
<section id="faq" class="sec sec-jade">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">FAQ</div>
    <h2 class="sec-title rv">Frequently Asked <em>Questions</em></h2>
    <div class="faq-list">
      <div class="faq-item rv">
        <div class="faq-q" role="button" tabindex="0">What is Revenue Cycle Management?</div>
        <div class="faq-a"><div class="faq-a-inner">Revenue Cycle Management (RCM) covers all financial activities from patient registration and scheduling through coding, claims submission, payer adjudication, payment posting, and final payment collection. Effective RCM maximizes reimbursements, minimizes denials, and keeps cash flow healthy for healthcare providers.</div></div>
      </div>
      <div class="faq-item rv">
        <div class="faq-q" role="button" tabindex="0">What is AR Follow-Up?</div>
        <div class="faq-a"><div class="faq-a-inner">Accounts Receivable Follow-Up means actively reviewing all unpaid claims, tracking their status with payers, identifying delays or issues, and coordinating resolution to secure timely payment. Regular AR follow-up prevents revenue from aging out and ensures no claim falls through the cracks.</div></div>
      </div>
      <div class="faq-item rv">
        <div class="faq-q" role="button" tabindex="0">What causes claim denials?</div>
        <div class="faq-a"><div class="faq-a-inner">Common denial causes include coding errors (wrong CPT or ICD-10 codes), missing or incomplete documentation, eligibility and coverage issues, missing prior authorization, duplicate claim submissions, and filing deadline misses. Most denials are preventable with strong front-end verification and clean claim workflows.</div></div>
      </div>
      <div class="faq-item rv">
        <div class="faq-q" role="button" tabindex="0">What is the difference between CPT and ICD-10?</div>
        <div class="faq-a"><div class="faq-a-inner">CPT (Current Procedural Terminology) codes represent the services and procedures performed — what was done to the patient. ICD-10-CM codes represent diagnoses and clinical conditions — why the service was performed. Both must be accurate and linked correctly for a claim to be paid.</div></div>
      </div>
      <div class="faq-item rv">
        <div class="faq-q" role="button" tabindex="0">How do you reduce days in AR?</div>
        <div class="faq-a"><div class="faq-a-inner">Reducing days in AR requires pre-submission claim scrubbing, real-time eligibility verification, systematic payer follow-up cadences, denial root-cause analysis, and strong appeals workflows. Through these methods, I reduced average AR days from 52 to 28 — a 46% improvement — at a multi-physician group.</div></div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ PORTFOLIO ══ -->
<section id="portfolio" class="sec">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">Portfolio</div>
    <h2 class="sec-title rv">Featured <em>Projects</em></h2>
    <div class="portfolio-grid">
      <div class="gcard port-card rv">
        <div class="port-num">01</div>
        <h3 class="port-h">Medical Billing Knowledge Hub</h3>
        <p class="port-p">Educational resource module for explaining coding systems, claims workflows, and payer processes to billing teams and practice administrators.</p>
        <div class="port-tech">HTML5 &#183; CSS3 &#183; JavaScript</div>
      </div>
      <div class="gcard port-card rv">
        <div class="port-num">02</div>
        <h3 class="port-h">CPT Code Learning Tool</h3>
        <p class="port-p">Lightweight lookup utility to help billing staff discover, understand, and correctly apply common CPT procedure codes with instant search results.</p>
        <div class="port-tech">JSON &#183; JavaScript Search &#183; Responsive UI</div>
      </div>
      <div class="gcard port-card rv">
        <div class="port-num">03</div>
        <h3 class="port-h">ICD-10 Reference Tool</h3>
        <p class="port-p">Structured diagnosis code explorer with fast search and simplified terminology designed for quick reference during charge entry and coding review.</p>
        <div class="port-tech">JSON Data Mapping &#183; Front-End Filtering</div>
      </div>
    </div>
  </div>
</section>

<div class="divider"></div>

<!-- ══ CONTACT ══ -->
<section id="contact" class="sec sec-jade">
  <div class="sec-inner">
    <div class="sec-eyebrow rv">Contact</div>
    <h2 class="sec-title rv">Let&#39;s <em>Connect</em></h2>
    <div class="contact-layout">
      <div class="rv">
        <h3 class="contact-hl">Ready to Optimize Your <em>Revenue Cycle?</em></h3>
        <p class="contact-sub">Whether you need a billing specialist to reduce AR days, recover denied claims, or build a high-performing billing operation — I deliver measurable results. Open to remote and on-site roles globally.</p>
        <div class="c-list">
          <div class="c-row">
            <div class="c-ico">&#128231;</div>
            <div><div class="c-lbl">Email</div>
            <div class="c-val"><a href="https://mail.google.com/mail/?view=cm&fs=1&to=sattarahmedofficial1@gmail.com" target="_blank" rel="noopener noreferrer">sattarahmedofficial1@gmail.com</a></div></div>
          </div>
          <div class="c-row">
            <div class="c-ico">&#128241;</div>
            <div><div class="c-lbl">Phone</div>
            <div class="c-val"><a href="tel:+923215063059">0321-5063-059</a></div></div>
          </div>
          <div class="c-row">
            <div class="c-ico">&#128279;</div>
            <div><div class="c-lbl">LinkedIn</div>
            <div class="c-val"><a href="https://www.linkedin.com/in/sattar-ahmed-88286438a" target="_blank" rel="noopener noreferrer">linkedin.com/in/sattar-ahmed</a></div></div>
          </div>
          <div class="c-row">
            <div class="c-ico">&#128205;</div>
            <div><div class="c-lbl">Location</div>
            <div class="c-val">Pakistan &#183; Remote Available Worldwide</div></div>
          </div>
        </div>
      </div>
      <div class="contact-form-wrap rv">
        <div style="font-family:'Fira Code',monospace;font-size:8px;letter-spacing:3px;text-transform:uppercase;color:var(--champ-dim);margin-bottom:20px;display:flex;align-items:center;gap:8px"><span style="opacity:.5">//</span> Send a Message</div>
        <form id="contactForm" novalidate>
          <div class="cf-row">
            <div><label class="cf-label">Your Name</label><input type="text" id="cf_name" class="cf-in" placeholder="Full Name" required/></div>
            <div><label class="cf-label">Your Email</label><input type="email" id="cf_email" class="cf-in" placeholder="email@example.com" required/></div>
          </div>
          <label class="cf-label">Subject</label>
          <input type="text" id="cf_subject" class="cf-in" placeholder="Billing Role / Project / Inquiry" required/>
          <label class="cf-label">Message</label>
          <textarea id="cf_message" class="cf-ta" placeholder="Tell me about your practice or opportunity&#8230;" required></textarea>
          <button type="submit" class="btn-contact" id="sendBtn">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- ══ FOOTER ══ -->
<footer>
  <div class="footer-inner">
    <div class="footer-brand">Sattar Ahmed</div>
    <div class="footer-links">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </div>
    <div class="footer-copy">&#169; <span id="yr"></span> Sattar Ahmed. All rights reserved.</div>
  </div>
</footer>

<script>
// ── Year ──
document.getElementById('yr').textContent = new Date().getFullYear();

// ── Hamburger ──
const ham = document.getElementById('hamburger'), mob = document.getElementById('mobileNav');
ham.addEventListener('click',()=>{const o=mob.classList.toggle('open');ham.classList.toggle('open',o);ham.setAttribute('aria-expanded',String(o))});
mob.querySelectorAll('a').forEach(l=>l.addEventListener('click',()=>{mob.classList.remove('open');ham.classList.remove('open');ham.setAttribute('aria-expanded','false')}));
document.addEventListener('click',e=>{if(!ham.contains(e.target)&&!mob.contains(e.target)){mob.classList.remove('open');ham.classList.remove('open')}});

// ── Scroll reveal ──
const rvObs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('on'),i*70);rvObs.unobserve(e.target)}})},{threshold:0.07});
document.querySelectorAll('.rv').forEach(el=>rvObs.observe(el));

// ── Skill bars ──
const barObs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.width=e.target.dataset.w+'%';barObs.unobserve(e.target)}})},{threshold:0.3});
document.querySelectorAll('.skill-bar-fill').forEach(b=>barObs.observe(b));

// ── FAQ accordion ──
document.querySelectorAll('.faq-q').forEach(q=>{
  const handler=()=>{
    const item=q.parentElement;
    document.querySelectorAll('.faq-item.open').forEach(o=>{if(o!==item)o.classList.remove('open')});
    item.classList.toggle('open');
  };
  q.addEventListener('click',handler);
  q.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();handler()}});
});

// ── CPT / ICD-10 Search Data ──
const codeData=[
  {code:'99213',type:'CPT',desc:'Office visit – established patient, low-moderate complexity. E&M level 3. Most common outpatient visit code.'},
  {code:'99214',type:'CPT',desc:'Office visit – established patient, moderate complexity. E&M level 4. Requires detailed history and medical decision-making.'},
  {code:'99203',type:'CPT',desc:'Office visit – new patient, low-moderate complexity. Requires medically appropriate history and exam.'},
  {code:'99204',type:'CPT',desc:'Office visit – new patient, moderate complexity. Requires moderate medical decision-making or 45+ minutes total time.'},
  {code:'99232',type:'CPT',desc:'Subsequent hospital care, per day – moderate complexity. Used for daily inpatient visits after initial admit.'},
  {code:'99283',type:'CPT',desc:'Emergency department visit – moderate severity. Requires expanded problem-focused history and exam.'},
  {code:'45378',type:'CPT',desc:'Colonoscopy, diagnostic. Flexible, proximal to splenic flexure. Without biopsy, polypectomy or removal of lesion.'},
  {code:'43239',type:'CPT',desc:'Upper GI endoscopy (EGD) with biopsy. Esophagogastroduodenoscopy with single or multiple biopsies.'},
  {code:'90837',type:'CPT',desc:'Psychotherapy, 60 minutes with patient. Individual therapy session for mental health and behavioral conditions.'},
  {code:'90834',type:'CPT',desc:'Psychotherapy, 45 minutes with patient. Individual psychotherapy – most common outpatient therapy code.'},
  {code:'96413',type:'CPT',desc:'Chemotherapy administration, intravenous infusion technique – first drug/substance, up to 1 hour.'},
  {code:'96369',type:'CPT',desc:'Subcutaneous infusion for therapy, first hour. Used for biologics and hydration therapy.'},
  {code:'20610',type:'CPT',desc:'Aspiration and/or injection of major joint – shoulder, hip, knee. Common in rheumatology billing.'},
  {code:'J0135',type:'HCPCS',desc:'Adalimumab injection, 1mg. HCPCS J-code for Humira biologic used in rheumatoid arthritis treatment.'},
  {code:'J1745',type:'HCPCS',desc:'Infliximab injection, 10mg. HCPCS J-code for Remicade infusion – requires infusion center and prior auth.'},
  {code:'E11.9',type:'ICD-10',desc:'Type 2 diabetes mellitus without complications. Most common diabetes diagnosis code. Links to preventive and management services.'},
  {code:'E11.65',type:'ICD-10',desc:'Type 2 diabetes mellitus with hyperglycemia. Use when blood sugar is elevated with documented hyperglycemia.'},
  {code:'M79.3',type:'ICD-10',desc:'Panniculitis. Inflammation of subcutaneous fat tissue. Used in rheumatology and dermatology billing.'},
  {code:'M06.9',type:'ICD-10',desc:'Rheumatoid arthritis, unspecified. Primary diagnosis for RA patients without specified joint involvement.'},
  {code:'K57.30',type:'ICD-10',desc:'Diverticulosis of large intestine without perforation or abscess and without bleeding.'},
  {code:'F32.9',type:'ICD-10',desc:'Major depressive disorder, single episode, unspecified. Common mental health diagnosis for initial coding.'},
  {code:'F41.1',type:'ICD-10',desc:'Generalized anxiety disorder. Used in behavioral health billing for anxiety-related therapy and psychiatric services.'},
  {code:'Z23',type:'ICD-10',desc:'Encounter for immunization. Use as primary or secondary diagnosis for preventive vaccine administration visits.'},
  {code:'denial',type:'TOPIC',desc:'Claim denial occurs when a payer refuses to reimburse a submitted claim. Common types: CO-4 (procedure modifier mismatch), CO-97 (benefit included in primary), PR-1 (deductible), CO-29 (timely filing exceeded).'},
  {code:'ar',type:'TOPIC',desc:'Accounts Receivable (AR) represents money owed to your practice by payers and patients. AR aging tracks how long claims have been unpaid: 0-30, 31-60, 61-90, 91-120, and 120+ days. Target: 80%+ in 0-30 days bucket.'},
  {code:'eob',type:'TOPIC',desc:'Explanation of Benefits (EOB) is the payer\'s document detailing how a claim was processed — amounts billed, allowed, paid, adjusted, and patient responsibility. ERA (Electronic Remittance Advice) is the electronic version.'},
  {code:'prior auth',type:'TOPIC',desc:'Prior Authorization (PA) is advance approval from an insurer before providing certain services. Required for high-cost procedures, imaging, surgeries, and biologics. Missing PA is a top denial reason.'},
  {code:'modifier',type:'TOPIC',desc:'CPT modifiers are 2-digit codes appended to CPT codes to clarify circumstances. Common: -25 (separate E&M same day), -59 (distinct service), -GT (telehealth), -26 (professional component), -TC (technical component).'},
  {code:'rcm',type:'TOPIC',desc:'Revenue Cycle Management (RCM) is the entire financial process of healthcare — from patient scheduling through final payment. Key KPIs: clean claim rate (target 95%+), denial rate (target under 5%), days in AR (target under 30).'},
];

function doSearch(){
  const q=document.getElementById('searchInput').value.trim().toLowerCase();
  const res=document.getElementById('searchResults');
  if(!q){res.innerHTML='';return}
  const found=codeData.filter(d=>d.code.toLowerCase().includes(q)||d.desc.toLowerCase().includes(q)||d.type.toLowerCase().includes(q));
  if(!found.length){res.innerHTML='<div class="result-empty">No results for "'+q+'" — try: 99213, E11.9, denial, AR</div>';return}
  res.innerHTML=found.map(d=>`<div class="result-item"><div class="result-code">[${d.type}] ${d.code.toUpperCase()}</div><div class="result-desc">${d.desc}</div></div>`).join('');
}
document.getElementById('searchBtn').addEventListener('click',doSearch);
document.getElementById('searchInput').addEventListener('keydown',e=>{if(e.key==='Enter')doSearch()});

// ── Toast ──
function showToast(msg,type){const t=document.getElementById('toast');t.textContent=msg;t.className='toast '+type+' show';setTimeout(()=>{t.className='toast'},4500)}

// ── Contact Form ──
document.getElementById('contactForm').addEventListener('submit',function(e){
  e.preventDefault();
  const name=document.getElementById('cf_name').value.trim();
  const email=document.getElementById('cf_email').value.trim();
  const subject=document.getElementById('cf_subject').value.trim();
  const message=document.getElementById('cf_message').value.trim();
  const btn=document.getElementById('sendBtn');
  if(!name||!email||!subject||!message){showToast('Please fill in all fields.','error');return}
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){showToast('Please enter a valid email.','error');return}
  const gmailUrl='https://mail.google.com/mail/?view=cm&fs=1&to=sattarahmedofficial1@gmail.com&su='+encodeURIComponent(subject)+'&body='+encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
  window.open(gmailUrl,'_blank');
  showToast('Opening Gmail compose window...','success');
  btn.innerHTML='&#10003; Opening Gmail...';
  btn.disabled=true;
  setTimeout(()=>{btn.innerHTML='<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';btn.disabled=false},3000);
});
</script>
</body>
</html>
