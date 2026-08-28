import React,{useState} from "react";
import {createRoot} from "react-dom/client";
import {Search,Heart,LockKeyhole,MapPin,Mail,Phone,Menu,X,ArrowUpRight,BookOpen,Users,GraduationCap,Stethoscope,ChevronDown} from "lucide-react";
import "./styles.css";

const API=import.meta.env.VITE_API_URL||"http://localhost:5000/api";
const nav=["HOME","ABOUT US","PROGRAMS","OUR TEAM","NEWS & UPDATES","EVENTS","GALLERY","CONTACT"];

function App(){
 const [menu,setMenu]=useState(false),[search,setSearch]=useState(false),[lang,setLang]=useState("EN"),[donate,setDonate]=useState(false);
 const scroll=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 const labels=lang==="EN"?{home:"HOME",about:"ABOUT US",programs:"PROGRAMS",team:"OUR TEAM",news:"NEWS & UPDATES",events:"EVENTS",gallery:"GALLERY",contact:"CONTACT"}:{home:"गृहपृष्ठ",about:"हाम्रो बारेमा",programs:"कार्यक्रमहरू",team:"हाम्रो टोली",news:"समाचार",events:"कार्यक्रम",gallery:"ग्यालरी",contact:"सम्पर्क"};
 return <div className="site">
  <div className="utility"><div className="utility-inner">
   <div className="utility-title">BBPF - Bimala Binishma Panta Foundation</div>
   <div className="utility-tools"><button>↗ Remix</button><button>▣ Device</button><button>◔</button><button>⛶</button></div>
  </div></div>
  <div className="contactbar"><div className="contact-inner">
   <div className="contact-items"><span><MapPin/> Palungtar-4, Gorkha, Nepal</span><span><Mail/> info@bbpf.org</span><span><Phone/> +977-64-540123</span></div>
   <div className="bar-actions"><button className="search-pill" onClick={()=>setSearch(true)}><Search/> Search</button><div className="lang"><button className={lang==="EN"?"chosen":""} onClick={()=>setLang("EN")}>EN</button><button className={lang==="NP"?"chosen":""} onClick={()=>setLang("NP")}>नेपाली</button></div><button className="admin"><LockKeyhole/> ADMIN PORTAL</button></div>
  </div></div>
  <header className="navbar"><div className="nav-inner">
   <button className="mobile-menu" onClick={()=>setMenu(true)}><Menu/></button>
   <div className="brand" onClick={()=>scroll("home")}><img src="/bbpf-logo.png"/><div><strong>Bimala Binishma Panta Foundation</strong><small>Together Towards Education • Estd. 2020</small></div></div>
   <nav>{nav.map((n,i)=><button key={n} className={i===0?"active":""} onClick={()=>scroll(n==="HOME"?"home":n.toLowerCase().replaceAll(" ","-"))}>{labels[n.toLowerCase().replaceAll(" ","")]||n}</button>)}</nav>
   <div className="nav-cta"><button className="round-search" onClick={()=>setSearch(true)}><Search/></button><button className="donate" onClick={()=>setDonate(true)}><Heart fill="currentColor"/> Donate Now</button></div>
  </div></header>

  {menu&&<><div className="mobile-overlay" onClick={()=>setMenu(false)}/><aside className="drawer"><div className="drawer-head"><div className="brand mini"><img src="/bbpf-logo.png"/><strong>BBPF</strong></div><button onClick={()=>setMenu(false)}><X/></button></div>{nav.map((n,i)=><button className={i===0?"active":""} key={n} onClick={()=>scroll(n==="HOME"?"home":n.toLowerCase().replaceAll(" ","-"))}>{labels[n.toLowerCase().replaceAll(" ","")]||n}<ArrowUpRight size={15}/></button>)}<button className="drawer-donate" onClick={()=>setDonate(true)}><Heart fill="currentColor"/> Donate Now</button></aside></>}

  <main id="home" className="hero"><div className="hero-bg"></div><div className="hero-inner">
   <div className="hero-badge"><span></span><span className="spark">✣</span> TOGETHER TOWARDS THE LIGHT OF EDUCATION</div>
   <h1>Bimala Binishma Panta<br/><b>Foundation</b></h1>
   <h2>Together Towards the Light of Education</h2>
   <p>Dedicated to uplifting rural communities in Palungtar and across Gorkha through quality education, student scholarships, youth empowerment, and healthcare support.</p>
   <div className="hero-buttons"><button className="donate large" onClick={()=>setDonate(true)}><Heart fill="currentColor"/> DONATE / SUPPORT NOW</button><button className="explore" onClick={()=>scroll("programs")}><BookOpen/> Explore Programs</button></div>
  </div></main>

  <section id="about-us" className="section"><div className="section-grid"><div><span className="kicker">WHO WE ARE</span><h2>Building brighter futures through opportunity.</h2></div><p>BBPF works with communities to make education and essential support more accessible. Our programs focus on students, families and young people who can benefit from practical, sustainable assistance.</p></div></section>
  <section id="programs" className="programs"><div className="section-head"><div><span className="kicker">OUR WORK</span><h2>Programs that create opportunity</h2></div></div><div className="program-grid">
   {[["Education Support",GraduationCap,"Scholarships, learning resources and school support for students."],["Youth Empowerment",Users,"Skills, leadership and community opportunities for young people."],["Healthcare Support",Stethoscope,"Support that helps rural families access essential healthcare."]].map(([t,I,d])=><article className="program-card" key={t}><div className="program-icon"><I/></div><h3>{t}</h3><p>{d}</p><button onClick={()=>scroll("contact")}>Learn more <ArrowUpRight/></button></article>)}
  </div></section>
  <section id="our-team" className="band"><span className="kicker">OUR TEAM</span><h2>People committed to the community.</h2><p>Our team and volunteers work together with local communities, schools and partners to turn support into meaningful results.</p></section>
  <section id="news-&-updates" className="section"><div className="section-head"><div><span className="kicker">NEWS & UPDATES</span><h2>Latest from BBPF</h2></div><button className="text-btn">View all <ArrowUpRight/></button></div><div className="news-grid"><article><div className="news-image"></div><span>Community</span><h3>Supporting education in rural Gorkha</h3><p>Updates from our education and community support activities.</p></article><article><div className="news-image second"></div><span>Programs</span><h3>Growing opportunities for students</h3><p>Learn more about our continuing scholarship initiatives.</p></article></div></section>
  <section id="events" className="section light"><span className="kicker">EVENTS</span><h2>Upcoming community activities</h2><p>Follow BBPF for events, outreach activities and opportunities to participate.</p></section>
  <section id="gallery" className="gallery"><div className="gallery-tile a"></div><div className="gallery-tile b"></div><div className="gallery-tile c"></div><div className="gallery-copy"><span className="kicker">GALLERY</span><h2>Moments from our work.</h2><button className="explore">View Gallery <ArrowUpRight/></button></div></section>
  <section id="contact" className="contact-section"><div><span className="kicker">CONTACT</span><h2>Let's work together.</h2><p>Have a question, want to volunteer, or would like to support our programs?</p></div><form onSubmit={async e=>{e.preventDefault();const f=new FormData(e.currentTarget);try{await fetch(API+"/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(f))});alert("Thank you. Your message has been received.");e.currentTarget.reset()}catch{alert("Please make sure the backend is running.")}}}><input name="name" placeholder="Your name" required/><input name="email" type="email" placeholder="Email address" required/><textarea name="message" placeholder="Your message" required></textarea><button className="donate">Send message <ArrowUpRight/></button></form></section>
  <footer><div className="footer-brand"><img src="/bbpf-logo.png"/><div><strong>Bimala Binishma Panta Foundation</strong><span>Together Towards Education • Estd. 2020</span></div></div><p>Palungtar-4, Gorkha, Nepal · info@bbpf.org · +977-64-540123</p><small>© 2026 BBPF. Together towards the light of education.</small></footer>

  {search&&<div className="modal" onClick={()=>setSearch(false)}><div className="search-box" onClick={e=>e.stopPropagation()}><button onClick={()=>setSearch(false)}><X/></button><Search/><input autoFocus placeholder="Search BBPF..." /></div></div>}
  {donate&&<div className="modal" onClick={()=>setDonate(false)}><div className="donate-box" onClick={e=>e.stopPropagation()}><button className="close" onClick={()=>setDonate(false)}><X/></button><Heart fill="currentColor"/><h2>Support BBPF</h2><p>Your support helps us expand education, youth empowerment and healthcare initiatives.</p><div className="amounts"><button>Rs. 500</button><button>Rs. 1,000</button><button>Rs. 2,500</button><button>Other</button></div><button className="donate wide">Continue <ArrowUpRight/></button></div></div>}
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);
