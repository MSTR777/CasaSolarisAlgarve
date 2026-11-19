(function(){
  if (window.__csCookie) return; window.__csCookie = true;
  var KEY = 'cs-consent';
  var pt = (document.documentElement.lang || '').toLowerCase().indexOf('pt') === 0;
  var T = pt ? {
    label: 'Definições de cookies', title: 'Cookies',
    text: 'Usamos cookies necessários para o site funcionar e, com a sua autorização, cookies de análise e marketing da Google. Pode mudar a sua escolha aqui a qualquer momento.',
    nec: 'Necessários', necSub: 'Sempre ativos', ana: 'Análise', anaSub: 'Google Analytics: que páginas são lidas', mkt: 'Marketing', mktSub: 'Medição de anúncios da Google',
    all: 'Aceitar todos', none: 'Rejeitar todos', saved: 'Escolha guardada'
  } : {
    label: 'Cookie settings', title: 'Cookies',
    text: 'We use necessary cookies to keep the site working and, with your permission, Google analytics and marketing cookies. You can change your choice here at any time.',
    nec: 'Necessary', necSub: 'Always on', ana: 'Analytics', anaSub: 'Google Analytics: which pages are read', mkt: 'Marketing', mktSub: 'Google ad measurement',
    all: 'Accept all', none: 'Reject all', saved: 'Choice saved'
  };
  function read(){ try { return JSON.parse(localStorage.getItem(KEY)); } catch(e){ return null; } }
  function gtagSafe(){ window.dataLayer = window.dataLayer || []; window.dataLayer.push(arguments); }
  function apply(c){
    var a = c.analytics ? 'granted' : 'denied', m = c.marketing ? 'granted' : 'denied';
    gtagSafe('consent', 'update', { analytics_storage: a, ad_storage: m, ad_user_data: m, ad_personalization: m });
    window.dataLayer.push({ event: 'cs_consent_update', analytics: !!c.analytics, marketing: !!c.marketing });
  }
  function save(c){ c.ts = new Date().toISOString(); try { localStorage.setItem(KEY, JSON.stringify(c)); } catch(e){} apply(c); }

  var css = '.csck{position:fixed;left:16px;bottom:calc(16px + env(safe-area-inset-bottom));z-index:60;font-family:inherit}'+
  '.csck-btn{position:relative;width:44px;height:44px;display:flex;align-items:center;justify-content:center;border:0;border-radius:6px;background:#4A1B0C;color:#FAF6EE;cursor:pointer;box-shadow:0 2px 8px rgba(74,27,12,0.18);transition:background 180ms cubic-bezier(0.22,0.61,0.36,1),transform 140ms}'+
  '.csck-btn:hover,.csck.open .csck-btn{background:#993C1D}.csck-btn:active{transform:scale(0.96)}.csck-btn:focus-visible{outline:2px solid #E8A33D;outline-offset:2px}'+
  '.csck-dot{position:absolute;top:7px;right:7px;width:7px;height:7px;border-radius:50%;background:#E8A33D;box-shadow:0 0 0 2px #4A1B0C}'+
  '.csck-panel{position:absolute;left:0;bottom:56px;width:330px;max-width:calc(100vw - 32px);background:#FFFDF8;border:0.5px solid rgba(153,60,29,0.18);border-radius:6px;box-shadow:0 3px 12px rgba(74,27,12,0.18);padding:24px 22px 20px;overflow:hidden;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity 200ms cubic-bezier(0.22,0.61,0.36,1),transform 240ms cubic-bezier(0.22,0.61,0.36,1),visibility 0s linear 240ms;color:#4A1B0C}'+
  '.csck-panel:before{content:"";position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#993C1D,#D85A30,#E8A33D)}'+
  '.csck.open .csck-panel{opacity:1;visibility:visible;transform:none;transition-delay:0s}'+
  '.csck-ey{font-family:"Trebuchet MS",sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.22em;text-transform:uppercase;color:#993C1D;margin:0 0 10px}'+
  '.csck-tx{font-size:14px;line-height:1.6;margin:0 0 14px;color:rgba(74,27,12,0.85)}'+
  '.csck-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:10px 0;border-top:0.5px solid rgba(153,60,29,0.18);cursor:pointer}'+
  '.csck-row b{display:block;font-family:"Trebuchet MS",sans-serif;font-size:13px;color:#4A1B0C}.csck-row small{display:block;font-size:12px;line-height:1.4;color:rgba(74,27,12,0.65);margin-top:2px}'+
  '.csck-sw{position:relative;flex:none;width:38px;height:22px}.csck-sw input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer}'+
  '.csck-sw span{position:absolute;inset:0;border-radius:100px;background:#C8C2B8;transition:background 180ms}.csck-sw span:after{content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#FFFDF8;box-shadow:0 1px 2px rgba(74,27,12,0.25);transition:transform 180ms cubic-bezier(0.22,0.61,0.36,1)}'+
  '.csck-sw input:checked+span{background:#993C1D}.csck-sw input:checked+span:after{transform:translateX(16px)}.csck-sw input:disabled+span{opacity:0.55}.csck-sw input:focus-visible+span{outline:2px solid #E8A33D;outline-offset:2px}'+
  '.csck-acts{display:flex;gap:8px;margin-top:14px}.csck-acts button{flex:1;min-height:40px;font-family:"Trebuchet MS",sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.14em;text-transform:uppercase;border-radius:3px;cursor:pointer;transition:background 180ms,color 180ms,border-color 180ms}'+
  '.csck-acc{background:#993C1D;color:#FAF6EE;border:1px solid #993C1D}.csck-acc:hover{background:#D85A30;border-color:#D85A30}'+
  '.csck-rej{background:transparent;color:#4A1B0C;border:1px solid rgba(74,27,12,0.22)}.csck-rej:hover{border-color:#993C1D;color:#993C1D}'+
  '.csck-ok{font-size:12px;color:#993C1D;margin:10px 0 0;min-height:16px;opacity:0;transition:opacity 200ms}.csck-ok.on{opacity:1}'+
  '@media (prefers-reduced-motion:reduce){.csck-panel,.csck-btn,.csck-sw span,.csck-sw span:after{transition:none!important}}@media print{.csck{display:none!important}}';

  function build(){
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var c = read();
    var w = document.createElement('div'); w.className = 'csck';
    w.innerHTML =
      '<div class="csck-panel" id="csck-panel" role="dialog" aria-label="'+T.label+'">'+
        '<p class="csck-ey">'+T.title+'</p><p class="csck-tx">'+T.text+'</p>'+
        '<label class="csck-row"><span><b>'+T.nec+'</b><small>'+T.necSub+'</small></span><span class="csck-sw"><input type="checkbox" checked disabled><span></span></span></label>'+
        '<label class="csck-row"><span><b>'+T.ana+'</b><small>'+T.anaSub+'</small></span><span class="csck-sw"><input type="checkbox" data-k="analytics"><span></span></span></label>'+
        '<label class="csck-row"><span><b>'+T.mkt+'</b><small>'+T.mktSub+'</small></span><span class="csck-sw"><input type="checkbox" data-k="marketing"><span></span></span></label>'+
        '<div class="csck-acts"><button type="button" class="csck-rej">'+T.none+'</button><button type="button" class="csck-acc">'+T.all+'</button></div>'+
        '<p class="csck-ok" aria-live="polite"></p>'+
      '</div>'+
      '<button type="button" class="csck-btn" aria-label="'+T.label+'" aria-expanded="false" aria-controls="csck-panel">'+
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>'+
        (c ? '' : '<span class="csck-dot"></span>')+
      '</button>';
    document.body.appendChild(w);
    var btn = w.querySelector('.csck-btn'), ok = w.querySelector('.csck-ok');
    var boxes = w.querySelectorAll('input[data-k]');
    function sync(v){ boxes.forEach(function(b){ b.checked = !!(v && v[b.dataset.k]); }); }
    sync(c);
    var t, okT;
    function setOpen(o){ clearTimeout(t); w.classList.toggle('open', o); btn.setAttribute('aria-expanded', o ? 'true' : 'false'); }
    function commit(v){ save(v); var d = btn.querySelector('.csck-dot'); if (d) d.remove(); ok.textContent = T.saved; ok.classList.add('on'); clearTimeout(okT); okT = setTimeout(function(){ ok.classList.remove('on'); }, 1800); }
    function current(){ var v = {}; boxes.forEach(function(b){ v[b.dataset.k] = b.checked; }); return v; }
    var hover = window.matchMedia('(hover: hover)').matches;
    if (hover) {
      w.addEventListener('mouseenter', function(){ setOpen(true); });
      w.addEventListener('mouseleave', function(){ t = setTimeout(function(){ if (!w.contains(document.activeElement)) setOpen(false); }, 350); });
    }
    btn.addEventListener('click', function(){ setOpen(hover ? true : !w.classList.contains('open')); });
    w.addEventListener('focusout', function(e){ if (!w.contains(e.relatedTarget)) setOpen(false); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && w.classList.contains('open')) { setOpen(false); btn.focus(); } });
    document.addEventListener('click', function(e){ if (!w.contains(e.target)) setOpen(false); });
    boxes.forEach(function(b){ b.addEventListener('change', function(){ commit(current()); }); });
    w.querySelector('.csck-acc').addEventListener('click', function(){ var v = { analytics: true, marketing: true }; sync(v); commit(v); });
    w.querySelector('.csck-rej').addEventListener('click', function(){ var v = { analytics: false, marketing: false }; sync(v); commit(v); });
    function lift(){
      var bar = document.querySelector('.cs-mbar, .cs-mobile-book, [data-sticky-book]'), h = 0;
      if (bar) { var cs = getComputedStyle(bar); if (cs.display !== 'none' && cs.position === 'fixed') h = bar.getBoundingClientRect().height; }
      w.style.bottom = h ? 'calc(' + (h + 12) + 'px + env(safe-area-inset-bottom))' : '';
    }
    lift(); window.addEventListener('resize', lift); setTimeout(lift, 800); setTimeout(lift, 2500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
})();
