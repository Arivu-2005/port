/* ============ CONFIG — edit these values ============ */
const CONFIG={
  email:"",            // e.g. "you@example.com"
  github:"",           // e.g. "https://github.com/username"
  linkedin:"",         // e.g. "https://linkedin.com/in/username"
  resume:"",           // e.g. "resume.pdf" or a full URL
  formEndpoint:"",     // e.g. a Formspree URL: "https://formspree.io/f/xxxxxxx"
  projects:{           // add repo/demo URLs per project
    glauco:{repo:"",demo:""}, krishn:{repo:"",demo:""}, nexora:{repo:"",demo:""}, pkm:{repo:"",demo:""}, mann:{repo:"",demo:""}
  }
};
/* ===================================================== */
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;

const SKILLS=[
 ["</>","Frontend Development",["HTML5","CSS3","JavaScript","React.js","Tailwind CSS","Bootstrap"]],
 ["{ }","Backend Development",["Python","Flask","Node.js","Express.js","REST APIs"]],
 ["DB","Database Management",["MySQL","MongoDB","Firebase","Firestore"]],
 ["Py","Programming Languages",["Python","JavaScript","SQL","Java (Basic)"]],
 ["⚙","Developer Tools",["Git","GitHub","VS Code","Postman","Vercel","Netlify"]],
 ["✦","Additional Expertise",["Responsive Design","CRUD Applications","Authentication","API Integration","Database Connectivity","AI-Powered Applications"]]
];
const PROJECTS=[
 ["glauco","01","GLAUCO VISION","AI-Based Glaucoma Detection System","An AI-powered web application designed to assist glaucoma detection through retinal image analysis using a Vision Transformer-based deep learning approach.",["Python","Flask","Vision Transformer (ViT)","HTML","CSS"],"GV","#0e7490,#6366F1"],
 ["krishn","02","KRISHN’S CRACKERS","E-Commerce Website with Admin Dashboard","A modern fireworks e-commerce platform featuring product management, shopping cart, checkout, user authentication, payment integration, and an admin dashboard.",["React.js","JavaScript","Tailwind CSS","Firebase","Razorpay Test Mode"],"KC","#b45309,#8B5CF6"],
 ["nexora","03","NEXORA HR","Employee Performance & HR Management System","A modern HR management platform designed to manage employee information, performance tracking, authentication, and administrative operations.",["React.js","Node.js","Express.js","MongoDB","JWT"],"NH","#4338ca,#06B6D4"],
 ["pkm","04","PKM BUS","Bus Management & Passenger Information System","A bilingual bus timetable and passenger information platform that helps users discover routes, check schedules, and access important travel information.",["HTML","CSS","JavaScript","Web Technologies"],"PB","#0f766e,#6366F1"],
 ["mann","05","MANN-VAASAM","Farm-to-Home E-Commerce Platform","An online shopping platform connecting customers with agricultural products through a user-friendly digital shopping experience.",["React.js","JavaScript","Node.js","MongoDB"],"MV","#15803d,#06B6D4"]
];
const SERVICES=[
 ["</>","Full Stack Web Development","End-to-end web applications, from interface to server and database."],
 ["◧","Frontend Development","Clean, responsive interfaces built with React.js and Tailwind CSS."],
 ["{ }","Backend Development","Reliable server-side logic with Python, Flask, Node.js and Express."],
 ["⇄","REST API Development","Well-structured APIs with authentication and clear documentation."],
 ["DB","Database Integration","MySQL, MongoDB and Firebase connected to your application."],
 ["▭","Responsive Website Development","Websites that work smoothly on phones, tablets and desktops."]
];
const FLOW=[["Discover","Understand the problem, requirements, and project goals."],["Design","Create clean, responsive, and user-friendly interfaces."],["Develop","Build frontend components and backend functionality."],["Integrate","Connect APIs, databases, and authentication systems."],["Test","Identify bugs and improve application reliability."],["Deploy","Deploy and optimize the final application."]];

const el=(h)=>{const t=document.createElement('template');t.innerHTML=h.trim();return t.content.firstChild};
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const link=(u,txt,cls='btn')=>u?`<a class="${cls}" href="${esc(u)}" target="_blank" rel="noopener noreferrer">${txt}</a>`:`<span class="${cls}" aria-disabled="true" title="Link not added yet">${txt}</span>`;

$('#skillGrid').append(...SKILLS.map(([i,t,l])=>el(`<div class="glass card rv"><h3><span class="ic">${esc(i)}</span>${t}</h3><div class="tags">${l.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div>`)));
$('#projGrid').append(...PROJECTS.map(([k,n,t,sub,d,tech,ab,col])=>{const c=CONFIG.projects[k]||{};return el(`<article class="glass card proj rv"><div class="shot" style="background:linear-gradient(135deg,${col.split(',')[0]}55,${col.split(',')[1]}55)"><span class="grad">${ab}</span><em>Screenshot placeholder</em></div><div class="pb"><small>PROJECT ${n}</small><h3>${t}</h3><b style="font-size:.9rem;font-weight:500;color:#c7d2fe">${esc(sub)}</b><p>${d}</p><div class="tags">${tech.map(x=>`<span>${esc(x)}</span>`).join('')}</div><div class="pl">${link(c.repo,'GitHub')}${c.demo?link(c.demo,'Live Demo','btn pri'):''}</div></div></article>`)}));
$('#svcGrid').append(...SERVICES.map(([i,t,d])=>el(`<div class="glass card rv"><h3><span class="ic">${esc(i)}</span>${t}</h3><p>${d}</p></div>`)));
$('#flow').append(...FLOW.map(([t,d],i)=>el(`<div class="step"><div class="n">0${i+1}</div><h3>${t}</h3><p>${d}</p></div>`)));

/* social + contact info from CONFIG */
const soc=[["GitHub",CONFIG.github],["LinkedIn",CONFIG.linkedin],["Email",CONFIG.email&&"mailto:"+CONFIG.email]];
$('#soc').innerHTML=soc.map(([n,u])=>u?`<a class="glass" style="border-radius:12px" href="${esc(u)}" aria-label="${n}" ${n!=='Email'?'target="_blank" rel="noopener noreferrer"':''}>${n.slice(0,2)}</a>`:`<span class="glass" style="border-radius:12px;opacity:.5" aria-label="${n} (not configured)" title="Add in CONFIG">${n.slice(0,2)}</span>`).join('')
$('#soc').querySelectorAll('a,span').forEach(x=>x.classList.add('soc-i'));
$('#soc').innerHTML=$('#soc').innerHTML.replace(/<(a|span) /g,'<$1 style="width:44px;height:44px;display:grid;place-items:center;font-size:.8rem;font-weight:600" ');
$('#fsoc').innerHTML=soc.map(([n,u])=>u?`<a href="${esc(u)}">${n}</a>`:`<span style="opacity:.5">${n}</span>`).join('');
$('#ci').innerHTML=`<div class="glass"><small>Location</small>Chennai, Tamil Nadu, India</div>`+
 [["Email",CONFIG.email,"mailto:"+CONFIG.email],["LinkedIn",CONFIG.linkedin,CONFIG.linkedin],["GitHub",CONFIG.github,CONFIG.github]].map(([n,v,u])=>v?`<a class="glass" href="${esc(u)}"><small>${n}</small>${esc(v)}</a>`:`<div class="glass" style="opacity:.6"><small>${n}</small>Not configured yet</div>`).join('');
const rs=$('#resume'); if(CONFIG.resume){rs.href=CONFIG.resume;rs.setAttribute('download','');}else{rs.addEventListener('click',e=>{e.preventDefault();alert('Resume not added yet. Set CONFIG.resume in the page source.')})}

/* typing roles */
const roles=["Full Stack Developer","Python Developer","React.js Developer","Backend Developer","Software Engineer"];
const rEl=$('#role');
if(!RM){let i=0,j=0,del=false;(function tick(){const w=roles[i];rEl.textContent=w.slice(0,j);if(!del&&j===w.length){del=true;return setTimeout(tick,1600)}if(del&&j===0){del=false;i=(i+1)%roles.length}j+=del?-1:1;setTimeout(tick,del?35:70)})()}

/* nav: scroll state, progress, active link, menu */
const nav=$('#nav'),prog=$('#prog'),topB=$('#top'),links=$$('.links a'),ham=$('#ham'),ul=$('#links');
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;prog.style.width=(h>0?y/h*100:0)+'%';nav.classList.toggle('sc',y>20);topB.classList.toggle('show',y>600)}
addEventListener('scroll',onScroll,{passive:true});onScroll();
topB.onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'});
ham.onclick=()=>{const o=ul.classList.toggle('open');ham.setAttribute('aria-expanded',o)};
links.forEach(a=>a.addEventListener('click',()=>{ul.classList.remove('open');ham.setAttribute('aria-expanded',false)}));
const secs=$$('main section');
new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){links.forEach(a=>a.classList.toggle('act',a.getAttribute('href')==='#'+e.target.id));}}),{rootMargin:'-45% 0px -50% 0px'}).observe&&secs.forEach(s=>new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(a=>{const on=a.getAttribute('href')==='#'+e.target.id||(e.target.id==='workflow'&&a.getAttribute('href')==='#services');a.classList.toggle('act',on)})}),{rootMargin:'-45% 0px -50% 0px'}).observe(s));

/* reveal + counters */
function count(e){const n=+e.dataset.n,s=e.dataset.s||'';if(RM){e.textContent=n+s;return}let t0;(function f(t){t0=t0||t;const p=Math.min((t-t0)/1200,1);e.textContent=Math.round(n*p)+(p===1?s:'');if(p<1)requestAnimationFrame(f)})(performance.now())}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');$$('[data-n]',e.target).forEach(count);io.unobserve(e.target)}}),{threshold:.15});
$$('.rv').forEach((e,i)=>{e.style.transitionDelay=(i%3)*90+'ms';io.observe(e)});

/* mouse glow + project tilt */
if(!RM&&matchMedia('(pointer:fine)').matches){
 const g=$('#glow');addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'});
 $$('.proj').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(800px) rotateY(${x*8}deg) rotateX(${-y*8}deg) translateY(-6px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
 const v=$('#vis');$('#home').addEventListener('mousemove',e=>{const x=(e.clientX/innerWidth-.5)*14,y=(e.clientY/innerHeight-.5)*14;v.style.transform=`translate(${x}px,${y}px)`})
}

/* contact form */
const form=$('#form'),fs=$('#fs'),sb=$('#sub');
const rules={fn:v=>v.trim().length>=2||'Please enter your name.',fe:v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)||'Enter a valid email address.',fsu:v=>v.trim().length>=3||'Please add a subject.',fm:v=>v.trim().length>=10||'Message should be at least 10 characters.'};
function validate(){let ok=true;for(const k in rules){const i=$('#'+k),r=rules[k](i.value);$('#e-'+k).textContent=r===true?'':r;i.setAttribute('aria-invalid',r!==true);if(r!==true)ok=false}return ok}
form.addEventListener('submit',async e=>{e.preventDefault();fs.className='';fs.textContent='';if(!validate())return;
 const d={name:$('#fn').value,email:$('#fe').value,subject:$('#fsu').value,message:$('#fm').value};
 if(!CONFIG.formEndpoint){
  if(CONFIG.email){location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message+'\n\n— '+d.name+' ('+d.email+')')}`;fs.className='ok';fs.textContent='Opening your email app to send the message…';}
  else{fs.className='bad';fs.textContent='The form is not connected yet. Set CONFIG.formEndpoint (e.g. a Formspree URL) or CONFIG.email in the page source.'}
  return}
 sb.disabled=true;sb.textContent='Sending…';
 try{const r=await fetch(CONFIG.formEndpoint,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(d)});if(!r.ok)throw 0;fs.className='ok';fs.textContent='Thanks! Your message was sent.';form.reset()}
 catch{fs.className='bad';fs.textContent='Something went wrong. Please try again or email directly.'}
 sb.disabled=false;sb.textContent='Send Message'});
