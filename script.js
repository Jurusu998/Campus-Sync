var $=function(i){return document.getElementById(i)};
var R={student:{n:"Student",id:"Student ID",name:"Juan",tabs:["Schedule","Grades","Announcements","Enrollment"]},
teacher:{n:"Teacher",id:"Employee ID",name:"Ma'am Reyes",tabs:["My Classes","Attendance","Enter Grades","Announcements"]},
parent:{n:"Parent",id:"Email or phone number",name:"Juan's Mother",tabs:["Child's Progress","Attendance","Payments","Announcements"]},
admin:{n:"Admin",id:"Admin ID",name:"Admin",tabs:["Campus Overview","Enrollment","Post an Announcement"]}};
var role="student",tab=0;
var PUB=["home","portals","courses","announcements","features","support","tview"];
function go(v){["home","portals","courses","announcements","features","support","tview","admission","loginv","dashv"].forEach(function(x){$(x).classList.toggle("on",x===v)});
$("top").style.display=(v==="dashv"||v==="admission")?"none":"";$("foot").style.display=PUB.indexOf(v)>-1?"":"none";
document.querySelectorAll("#nav a").forEach(function(a){if(a.dataset.v===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});window.scrollTo(0,0)}
document.querySelectorAll("#nav a").forEach(function(a){a.onclick=function(e){e.preventDefault();go(a.dataset.v)}});
$("sf").onsubmit=function(e){e.preventDefault();$("sm").textContent="Message sent. We will reply within 1 to 2 school days.";this.reset()};
function setRole(r){role=r;$("uidl").textContent=R[r].id;document.querySelectorAll(".seg button").forEach(function(b){b.setAttribute("aria-selected",b.dataset.r===r)})}
function openLogin(r){setRole(r);$("err").textContent="";go("loginv")}
document.querySelectorAll(".seg button").forEach(function(b){b.onclick=function(){setRole(b.dataset.r)}});
$("lf").onsubmit=function(e){e.preventDefault();
if(!$("uid").value.trim()||!$("pw").value){$("err").textContent="Enter your ID and password.";return}
$("uid").value="";$("pw").value="";tab=0;$("hi").textContent="Hello, "+R[role].name+"!";$("tag").textContent=R[role].n;draw();go("dashv")};
$("out").onclick=function(){go("home")};
(function(){var g=$("sgrid"),done=false;function run(){if(done)return;done=true;
var reduce=window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches;
g.querySelectorAll("[data-n]").forEach(function(el){var n=+el.dataset.n;if(reduce)return;var t0=null;
function f(t){if(!t0)t0=t;var k=Math.min((t-t0)/1000,1);el.textContent=Math.round(n*(1-Math.pow(1-k,3))).toLocaleString("en-US");if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)})}
if("IntersectionObserver" in window){new IntersectionObserver(function(e,o){if(e[0].isIntersecting){run();o.disconnect()}},{threshold:.4}).observe(g)}})();
var PR={college:[["BSIT","BS in Information Technology"],["BSCS","BS in Computer Science"],["BSCE","BS in Computer Engineering"],["BSEE","BS in Electronics Engineering"],["BSBA","BS in Business Administration"]],
shs:[["STEM","Science, Technology, Engineering, and Mathematics"],["ABM","Accountancy, Business, and Management"],["HUMSS","Humanities and Social Sciences"],["ICT","Information and Communications Technology"],["GAS","General Academic Strand"]]};
function setLv(l){document.querySelectorAll(".lv button").forEach(function(b){b.setAttribute("aria-selected",b.dataset.l===l)});
$("plabel").textContent=l==="college"?"Preferred Program":"Preferred Strand";
$("prog").innerHTML=PR[l].map(function(x){return '<option>'+x[0]+' – '+x[1]+'</option>'}).join("")}
document.querySelectorAll(".lv button").forEach(function(b){b.onclick=function(){setLv(b.dataset.l)}});
function openAdm(){$("af").reset();$("aform").hidden=false;$("adone").hidden=true;setLv("college");go("admission")}
$("af").onsubmit=function(e){e.preventDefault();$("dn").textContent=$("fn").value.trim();$("ref").textContent="CS-2026-"+Math.floor(10000+Math.random()*90000);$("aform").hidden=true;$("adone").hidden=false;window.scrollTo(0,0)};
setLv("college");
function rows(a){return '<div class="card">'+a.map(function(r){return '<div class="row"><div>'+esc(r[0])+'<small>'+esc(r[1])+'</small></div><span class="pill'+(r[3]?' bad':'')+'">'+r[2]+'</span></div>'}).join("")+'</div>'}
var ANN=[["No classes tomorrow","Due to bad weather","New",0,"Admin"],["Quiz 4 next Monday","Chapters 3 and 4 in Mathematics 101","Quiz",0,"Admin"],["Midterm exam schedule","Oct 20 to 24, check your room","Exams",0,"Admin"],["Bring your laptops","Programming lab on Tuesday","Reminder",0,"Sir Santos"],["Essay due Friday","Topic: My campus, my community","Reminder",0,"Ma'am Garcia"],["Requirements deadline","Friday, 5:00 PM","Reminder",0,"Admin"],["Foundation Day","Next week, no classes","Event",0,"Admin"],["Library hours extended","Open until 8:00 PM this week","Update",0,"Admin"]];
var AF="All",TP="Ma'am Reyes";
function esc(t){return String(t).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]})}
function cards(a){return a.map(function(r){return '<article class="ac"><span class="at '+r[2].toLowerCase()+'">'+esc(r[2])+'</span><h3>'+esc(r[0])+'</h3><p>'+esc(r[1])+'</p><small class="by">Posted by '+esc(r[4]||"Admin")+'</small></article>'}).join("")}
function renderAnn(){$("hann").innerHTML=cards(ANN.slice(0,3));$("pann").innerHTML=cards(ANN);if(T)renderTeachers()}
renderAnn();
var T=[
{n:"Ma'am Reyes",r:"Mathematics",bg:"#dfe5f5",sk:"#e8b98f",h:"#2a1a14",c:"#8b0f14",l:1,g:0},
{n:"Sir Santos",r:"Computer Programming",bg:"#fbe3d6",sk:"#c98f64",h:"#171210",c:"#1f356a",l:0,g:1},
{n:"Ma'am Garcia",r:"English Communication",bg:"#dff3ec",sk:"#f0c9a4",h:"#4a2c1a",c:"#1d7a72",l:1,g:0},
{n:"Sir Dela Cruz",r:"Networking and Security",bg:"#e8e4f6",sk:"#b97d56",h:"#1c1511",c:"#4a5568",l:0,g:0},
{n:"Ma'am Villanueva",r:"Business Administration",bg:"#fdeccb",sk:"#e2a97e",h:"#1a1210",c:"#6b3fa0",l:1,g:1},
{n:"Sir Mendoza",r:"Electronics Engineering",bg:"#d9eef6",sk:"#d9a47a",h:"#2b1d15",c:"#2f7d4f",l:0,g:1}];
function face(t){return '<svg viewBox="0 0 100 100" role="img" aria-label="Portrait of '+esc(t.n)+'"><rect width="100" height="100" fill="'+t.bg+'"/>'+(t.l?'<path d="M25 50Q25 12 50 12Q75 12 75 50L77 86L23 86Z" fill="'+t.h+'"/>':'')+'<path d="M10 100Q14 70 50 70Q86 70 90 100Z" fill="'+t.c+'"/><rect x="44" y="58" width="12" height="16" fill="'+t.sk+'"/><path d="M41 71L50 84L59 71Z" fill="#fff"/><ellipse cx="50" cy="46" rx="17" ry="20" fill="'+t.sk+'"/><path d="M32 45Q29 21 50 21Q71 21 68 45Q61 33 50 33Q39 33 32 45Z" fill="'+t.h+'"/><circle cx="43" cy="47" r="1.9" fill="#2a1a14"/><circle cx="57" cy="47" r="1.9" fill="#2a1a14"/><path d="M44 56Q50 61 56 56" stroke="#7a3b2a" stroke-width="1.8" fill="none" stroke-linecap="round"/>'+(t.g?'<g fill="none" stroke="#1b1b1b" stroke-width="1.6"><circle cx="43" cy="47" r="6.5"/><circle cx="57" cy="47" r="6.5"/><path d="M49.500 47h1"/></g>':'')+'</svg>'}
function cnt(t){return ANN.filter(function(x){return x[4]===t.n}).length}
function renderTeachers(){$("tgrid").innerHTML=T.map(function(t,i){return '<button class="tc" data-i="'+i+'" aria-label="View announcements by '+esc(t.n)+'"><div class="av">'+face(t)+'</div><h3>'+esc(t.n)+'</h3><p>'+esc(t.r)+'</p><span class="cnt">View announcements ('+cnt(t)+')</span></button>'}).join("");
document.querySelectorAll(".tc").forEach(function(b){b.onclick=function(){openTeacher(+b.dataset.i)}})}
function renderTeacher(i){var t=T[i],l=ANN.filter(function(x){return x[4]===t.n});
$("tv").innerHTML='<div class="tprof"><div class="av big">'+face(t)+'</div><div><h1 class="ph">'+esc(t.n)+'</h1><p class="pl" style="margin:0">'+esc(t.r)+' · '+l.length+' announcement'+(l.length===1?'':'s')+'</p></div></div><h3 style="margin:0 0 14px;font-weight:600">Announcements from '+esc(t.n)+'</h3>'+(l.length?'<div class="agrid">'+cards(l)+'</div>':'<div class="card"><div class="row"><div>No announcements yet<small>Check back later for updates from this teacher.</small></div></div></div>')}
function openTeacher(i){renderTeacher(i);go("tview")}
function backT(){go("home");$("teachers").scrollIntoView()}
renderTeachers();
function annRows(l){return rows(l.map(function(r){return [r[0],r[1]+" · "+(r[4]||"Admin"),r[2]]}))}
function ann(){var names=["All","Admin"].concat(T.map(function(t){return t.n}));
var chips='<div class="chips">'+names.map(function(n){return '<button class="chip" data-f="'+esc(n)+'" aria-pressed="'+(AF===n)+'">'+esc(n)+'</button>'}).join("")+'</div>';
var l=AF==="All"?ANN:ANN.filter(function(x){return x[4]===AF});
return chips+(l.length?annRows(l):'<div class="card"><div class="row"><div>No announcements<small>Nothing posted by '+esc(AF)+' yet.</small></div></div></div>')}
function teacherAnn(){var names=T.map(function(t){return t.n});
return '<div class="card" style="padding:16px"><label for="pa" style="margin-top:0">Posting as</label><select id="pa" onchange="TP=this.value">'+names.map(function(n){return '<option'+(n===TP?' selected':'')+'>'+esc(n)+'</option>'}).join("")+'</select><label for="pt">Title</label><input id="pt" placeholder="Announcement title"><label for="pm">Message</label><input id="pm" placeholder="Short details (optional)"></div><button class="btn" style="margin-top:14px" onclick="postT()">Post to my students</button><div class="note" id="pn" role="status"></div><h3 style="margin:26px 0 12px;font-weight:600">Teacher announcements</h3>'+annRows(ANN.filter(function(x){return names.indexOf(x[4])>-1}))}
function postT(){var t=$("pt").value.trim(),d=$("pm").value.trim();if(!t){$("pn").textContent="Enter a title first.";return}
ANN.unshift([t,d||"No further details","Class",0,TP]);renderAnn();draw();$("pn").textContent="Posted. Your students can see it now."}
function postAnn(){var t=$("an").value.trim(),d=$("ad").value.trim();if(!t){$("am").textContent="Enter a title first.";return}ANN.unshift([t,d||"No further details","New",0,"Admin"]);renderAnn();draw();$("am").textContent="Announcement posted. Students, teachers, and parents can see it now."}
var ENR=null;
var SUBJ=[["IT 101","Introduction to Computing",3,"Mon/Wed 8:00 AM"],["MATH 101","Calculus for IT",3,"Tue/Thu 10:00 AM"],["ENG 101","Communication Skills",3,"Mon/Wed 1:00 PM"],["CS 102","Computer Programming 1",4,"Tue/Thu 1:00 PM"],["PE 101","Physical Fitness",2,"Fri 8:00 AM"],["NSTP 1","National Service Training",3,"Sat 8:00 AM"]];
function updU(){var u=0;document.querySelectorAll(".sj").forEach(function(c){if(c.checked)u+=SUBJ[+c.value][2]});$("tu").textContent=u}
function enrollSubmit(){var subs=[];document.querySelectorAll(".sj").forEach(function(c){if(c.checked)subs.push(SUBJ[+c.value])});
if(!subs.length){$("ee").textContent="Select at least one subject.";return}
var u=0;subs.forEach(function(x){u+=x[2]});
ENR={ref:"ENR-2026-"+Math.floor(10000+Math.random()*90000),term:$("et").value,year:$("ey").value,subs:subs,units:u,status:"Pending"};draw()}
function cancelEnr(){ENR=null;draw()}
function approveEnr(){ENR.status="Approved";ANN.unshift(["Enrollment approved","Your enrollment for "+ENR.term+" is confirmed.","New",0,"Admin"]);renderAnn();draw()}
function enrollView(){
if(ENR){return rows([["Enrollment status",ENR.ref+" · "+ENR.term+" · "+ENR.year,ENR.status]])+'<h3 style="margin:26px 0 12px;font-weight:600">Enrolled subjects</h3>'+rows(ENR.subs.map(function(x){return [x[0]+" "+x[1],x[3],x[2]+" units"]}))+'<p class="note">Total: <b>'+ENR.units+' units</b>. '+(ENR.status==="Pending"?"Waiting for admin approval.":"You are officially enrolled.")+'</p>'+(ENR.status==="Pending"?'<button class="btn ghost" style="margin-top:8px" onclick="cancelEnr()">Cancel request</button>':'')}
return '<div class="card" style="padding:18px"><div class="f2"><div class="fld"><label for="et">Term</label><select id="et"><option>1st Semester, AY 2026–2027</option><option>2nd Semester, AY 2026–2027</option></select></div><div class="fld"><label for="ey">Year level</label><select id="ey"><option>1st Year</option><option>2nd Year</option><option>3rd Year</option><option>4th Year</option></select></div></div>'+
SUBJ.map(function(x,i){return '<label class="sjl"><input type="checkbox" class="sj" value="'+i+'" checked onchange="updU()"><span style="flex:1">'+x[0]+' · '+x[1]+'<small>'+x[3]+'</small></span><span class="pill">'+x[2]+' units</span></label>'}).join("")+'</div><p class="note">Total units: <b id="tu">18</b></p><div class="err" id="ee" role="alert"></div><button class="btn" onclick="enrollSubmit()">Submit enrollment</button>'}
function reqView(){var h='<h3 style="margin:26px 0 12px;font-weight:600">Enrollment requests</h3>';
if(!ENR)return h+'<div class="card"><div class="row"><div>No requests yet<small>Student enrollment requests will appear here.</small></div></div></div>';
return h+'<div class="card"><div class="row"><div>'+R.student.name+' · '+ENR.ref+'<small>'+ENR.term+' · '+ENR.year+' · '+ENR.units+' units</small></div>'+(ENR.status==="Pending"?'<button class="btn" style="padding:8px 16px" onclick="approveEnr()">Approve</button>':'<span class="pill">Approved</span>')+'</div></div>'}
var V={
student:[function(){return rows([["Mathematics 101","8:00 AM · Room 204","Now"],["English Communication","10:00 AM · Room 108","Next"],["Computer Programming","1:00 PM · Lab 2","Later"]])},
function(){return rows([["Mathematics 101","Quiz 3","92"],["English Communication","Essay","88"],["Computer Programming","Midterm","95"]])},
function(){return ann()},enrollView],
teacher:[function(){return rows([["Math 101 – Section A","Mon and Wed, 8:00 AM","38 students"],["Math 101 – Section B","Tue and Thu, 10:00 AM","35 students"],["Statistics","Friday, 1:00 PM","30 students"]])},
function(){return rows([["Math 101 – Section A","Present today","36 / 38"],["Math 101 – Section B","Present today","35 / 35"],["Statistics","Present today","27 / 30",1]])},
function(){var s=["Juan Dela Cruz","Maria Santos","Pedro Reyes"];return '<div class="card">'+s.map(function(n){return '<div class="row"><div>'+n+'<small>Quiz 3</small></div><input type="number" min="0" max="100" aria-label="Grade for '+n+'"></div>'}).join("")+'</div><button class="btn" style="margin-top:14px" onclick="this.textContent=\'Saved\'">Save grades</button>'},teacherAnn],
parent:[function(){return rows([["Mathematics 101","Quiz 3","92"],["English Communication","Essay","88"],["Computer Programming","Midterm","95"]])},
function(){return rows([["Present","This month","18 days"],["Late","This month","1 day"],["Absent","This month","1 day",1]])},
function(){return rows([["Tuition – remaining balance","Due October 31","₱4,500",1],["Last payment","September 15","₱6,000"]])},ann],
admin:[function(){return rows([["Total students","Active enrollment","1,240"],["Teachers","Active accounts","64"],["Courses","Open this semester","8"]])},
function(){return rows([["BS Information Technology","New enrollees","142"],["BS Computer Science","New enrollees","96"],["Missing requirements","Needs follow-up","37",1]])+reqView()},
function(){return '<div class="card" style="padding:16px"><label for="an" style="margin-top:0">Title</label><input id="an" placeholder="Announcement title"><label for="ad">Message</label><input id="ad" placeholder="Short details (optional)"></div><button class="btn" style="margin-top:14px" onclick="postAnn()">Post announcement</button><div class="note" id="am" role="status"></div><h3 style="margin:26px 0 12px;font-weight:600">Recent announcements</h3>'+annRows(ANN)}]};
function draw(){$("side").innerHTML=R[role].tabs.map(function(t,i){return '<button role="tab" aria-selected="'+(i===tab)+'" data-i="'+i+'">'+t+'</button>'}).join("");
$("main").innerHTML='<h2>'+R[role].tabs[tab]+'</h2>'+V[role][tab]();
document.querySelectorAll("#side button").forEach(function(b){b.onclick=function(){tab=+b.dataset.i;draw()}});
document.querySelectorAll(".chip").forEach(function(b){b.onclick=function(){AF=b.dataset.f;draw()}})}
