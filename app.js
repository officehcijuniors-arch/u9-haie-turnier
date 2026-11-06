'use strict';
const config = window.TOURNAMENT;
const galleryPhotos = config.photos.concat(config.galleryPhotos || []);
const menu = document.querySelector('.menu');
const nav = document.querySelector('#navigation');
const trophy = '<svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15 8h18v13a9 9 0 0 1-18 0V8Zm9 22v10m-8 0h16M15 12H8v5a9 9 0 0 0 9 9m16-14h7v5a9 9 0 0 1-9 9"/></svg>';
function closeMenu(){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');}
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
[['.registration','registration'],['.merchandise-link','merchandise']].forEach(([selector,key])=>{document.querySelectorAll(selector).forEach(a=>a.href=config.links[key]);});
const tournifyLink = document.querySelector('.tournify-link');
if(config.links.tournify){
  tournifyLink.href=config.links.tournify;
  tournifyLink.target='_blank';tournifyLink.rel='noopener noreferrer';
  tournifyLink.removeAttribute('aria-disabled');
  tournifyLink.removeAttribute('aria-describedby');
}else{
  tournifyLink.removeAttribute('href');
  tournifyLink.addEventListener('click',event=>event.preventDefault());
}
function setLanguage(lang){
  if(!window.TRANSLATIONS[lang])lang='de';
  const t=window.TRANSLATIONS[lang]; document.documentElement.lang=lang;
  document.querySelectorAll('[data-t]').forEach(el=>{const value=t[el.dataset.t];if(value)el.textContent=value;});
  document.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
  nav.setAttribute('aria-label',lang==='de'?'Hauptnavigation':'Main navigation');
  document.querySelector('.brand').setAttribute('aria-label',lang==='de'?'U9 TIWAG HAIE TURNIER – Start':'U9 TIWAG HAIE TURNIER – Home');
  document.querySelector('.sponsors').setAttribute('aria-label',lang==='de'?'Partner':'Partners');
  const grid=document.querySelector('#fame-grid');grid.replaceChildren();
  config.winners.forEach(w=>{
    const card=document.createElement('article');card.className='fame-card'+(w.upcoming?' upcoming':'')+(w.logo?' has-logo':'');
    const year=document.createElement('div');year.className='fame-year';year.textContent=w.year;
    const visual=document.createElement('div');visual.className='trophy';
    if(w.logo){const img=document.createElement('img');img.src=w.logo;img.loading='lazy';img.decoding='async';img.width=280;img.height=320;img.alt=w.name||t.winner;visual.append(img);}else{visual.innerHTML=trophy;}
    const label=document.createElement('span');label.className='winner-label';label.textContent=w.name?t.winner:w.upcoming?'2027':t.winner;
    const name=document.createElement('h3');name.textContent=w.name||(w.upcoming?t.upcoming:t.pending);
    card.append(year,visual,label,name);grid.append(card);
  });
  if (typeof refreshPhotoLabels === 'function') refreshPhotoLabels(lang);
  closeMenu();
  try{localStorage.setItem('haie-language',lang);}catch{}
}
document.querySelectorAll('[data-lang]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.lang)));
let initial='de';try{initial=localStorage.getItem('haie-language')||'de';}catch{}


// Photo carousel: timer is stopped while paused, unfocused, hidden or off screen.
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
const stage = document.querySelector('.background-controls');
const slides = [...document.querySelectorAll('.hero-photo')];
const dots = document.querySelector('#photo-dots');
const pauseButton = document.querySelector('#photo-pause');
const dialog = document.querySelector('#photo-dialog');
let activePhoto=0, photoTimer=null, requestedPlay=!motion.matches, hovering=false, focusing=false, inView=true, openedFrom=null;
const langNow=()=>document.documentElement.lang;
const labels=()=>window.TRANSLATIONS[langNow()];
config.photos.forEach((photo,index)=>{
  const dot=document.createElement('button');dot.type='button';dot.addEventListener('click',()=>showPhoto(index));dots.append(dot);
});
galleryPhotos.forEach((photo,index)=>{
  const button=document.createElement('button');button.type='button';button.className='gallery-item';
  const img=document.createElement('img');img.src=photo.thumbnail||photo.src;img.width=photo.width||2048;img.height=photo.height||1365;img.decoding='async';img.loading='lazy';button.append(img);
  button.addEventListener('click',()=>{
    openedFrom=button;const large=document.querySelector('#large-photo');large.src=photo.src;large.alt=photo[langNow()];
    document.querySelector('#large-caption').textContent=photo[langNow()];dialog.dataset.photo=index;dialog.showModal();updatePlayback();
  });document.querySelector('#gallery-grid').append(button);
});
function refreshPhotoLabels(lang){
  const t=window.TRANSLATIONS[lang];
  stage.setAttribute('aria-label',t.photoRegion);
  document.querySelector('#photo-prev').setAttribute('aria-label',t.previousPhoto);
  document.querySelector('#photo-next').setAttribute('aria-label',t.nextPhoto);
  dialog.setAttribute('aria-label',t.photoRegion);
  config.photos.forEach((photo,i)=>{
    slides[i].alt=photo[lang];
    dots.children[i].setAttribute('aria-label',t.showPhoto+' '+(i+1));
  });
  galleryPhotos.forEach((photo,i)=>{
    const button=document.querySelector('#gallery-grid').children[i];button.setAttribute('aria-label',t.enlargePhoto+': '+photo[lang]);button.querySelector('img').alt=photo[lang];
  });
  if(dialog.open){const photo=galleryPhotos[Number(dialog.dataset.photo)];document.querySelector('#large-photo').alt=photo[lang];document.querySelector('#large-caption').textContent=photo[lang];}
  pauseButton.textContent=requestedPlay?t.pausePhotos:t.playPhotos;
  pauseButton.setAttribute('aria-pressed',String(!requestedPlay));
}
function updatePlayback(){
  clearTimeout(photoTimer);photoTimer=null;
  const playing=requestedPlay&&!hovering&&!focusing&&!document.hidden&&inView&&!dialog.open;
  stage.classList.toggle('paused',!playing);
  document.querySelector('.site-backdrop').classList.toggle('paused',!playing);
  if(playing)photoTimer=setTimeout(()=>showPhoto(activePhoto+1),10000);
}
let photoRequest=0;
async function ensurePhoto(index){
  const slide=slides[index],src=slide.dataset.bg;
  if(!src)return;
  const picture=new Image();picture.src=src;
  try{await picture.decode();}catch{return;}
  slide.style.backgroundImage='url("'+src+'")';
  delete slide.dataset.bg;
}
async function showPhoto(index){
  const request=++photoRequest;
  const next=(index+slides.length)%slides.length;
  await ensurePhoto(next);
  if(request!==photoRequest)return;
  activePhoto=next;
  slides.forEach((slide,i)=>{slide.classList.toggle('is-active',i===activePhoto);slide.setAttribute('aria-hidden',String(i!==activePhoto));dots.children[i].setAttribute('aria-current',String(i===activePhoto));});
  document.querySelector('#photo-count').textContent=String(activePhoto+1).padStart(2,'0')+' / '+String(slides.length).padStart(2,'0');updatePlayback();
}
function togglePlayback(){requestedPlay=!requestedPlay;refreshPhotoLabels(langNow());updatePlayback();}
pauseButton.addEventListener('click',togglePlayback);
document.querySelector('#photo-prev').addEventListener('click',()=>showPhoto(activePhoto-1));
document.querySelector('#photo-next').addEventListener('click',()=>showPhoto(activePhoto+1));
stage.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){hovering=true;updatePlayback();}});
stage.addEventListener('pointerleave',()=>{hovering=false;updatePlayback();});
stage.addEventListener('focusin',()=>{focusing=true;updatePlayback();});
stage.addEventListener('focusout',e=>{if(!stage.contains(e.relatedTarget)){focusing=false;updatePlayback();}});
document.addEventListener('visibilitychange',updatePlayback);
motion.addEventListener('change',e=>{if(e.matches)requestedPlay=false;refreshPhotoLabels(langNow());updatePlayback();});
document.querySelector('#photo-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{if(openedFrom)openedFrom.focus();updatePlayback();});
if('IntersectionObserver' in window){
  const heroObserver=new IntersectionObserver(entries=>{inView=entries[0].isIntersecting;updatePlayback();});heroObserver.observe(document.querySelector('.hero'));
  const enterObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('reveal-enter');enterObserver.unobserve(entry.target);}}),{threshold:.08});
  document.querySelectorAll('.info-grid,.team-card,.schedule,.fame-grid,.gallery-grid').forEach(el=>enterObserver.observe(el));
}
setLanguage(initial);showPhoto(0);
// Cosmetic 3D response; no information depends on pointer movement.
const fameGrid = document.querySelector('#fame-grid');
function resetFameTilt(){if(fameFrame!==null){cancelAnimationFrame(fameFrame);fameFrame=null;}latestFamePointer=null;fameGrid.querySelectorAll('.fame-card').forEach(card=>{card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y');card.style.removeProperty('--glare-x');card.style.removeProperty('--glare-y');});}
let fameFrame=null,latestFamePointer=null;
fameGrid.addEventListener('pointermove',event=>{
  if(motion.matches||event.pointerType!=='mouse')return;
  latestFamePointer={target:event.target,clientX:event.clientX,clientY:event.clientY};
  if(fameFrame!==null)return;
  fameFrame=requestAnimationFrame(()=>{
  fameFrame=null;
  const event=latestFamePointer;
  if(!event)return;
  const card=event.target.closest('.fame-card');if(!card||!fameGrid.contains(card))return;
  const rect=card.getBoundingClientRect();
  const x=Math.min(1,Math.max(0,(event.clientX-rect.left)/rect.width));
  const y=Math.min(1,Math.max(0,(event.clientY-rect.top)/rect.height));
  card.style.setProperty('--tilt-x',((.5-y)*12).toFixed(2)+'deg');
  card.style.setProperty('--tilt-y',((x-.5)*14).toFixed(2)+'deg');
  card.style.setProperty('--glare-x',(x*100).toFixed(1)+'%');
  card.style.setProperty('--glare-y',(y*100).toFixed(1)+'%');
  });
});
fameGrid.addEventListener('pointerout',event=>{const card=event.target.closest('.fame-card');if(card&&!card.contains(event.relatedTarget)){card.style.removeProperty('--tilt-x');card.style.removeProperty('--tilt-y');card.style.removeProperty('--glare-x');card.style.removeProperty('--glare-y');}});
fameGrid.addEventListener('pointerleave',resetFameTilt);
motion.addEventListener('change',resetFameTilt);

