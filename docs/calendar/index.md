---
title: 日历
---

<style>
.md-header, .md-tabs, .md-sidebar, .md-footer, .md-top { display: none !important; }
html, body { width: 100%; height: 100%; margin: 0; }
.md-main, .md-main__inner { display: block !important; width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; }
.md-content, .md-content__inner { width: 100% !important; max-width: none !important; }
.md-content__inner { padding: 0 !important; }

.cal-app {
  --paper:#FCFAF8; --ink:#1F1B18; --ink-2:#5C534B; --ink-3:#8A7F75;
  --accent:#E8590C; --line:rgba(138,127,117,.25);
  min-height:100vh; background:var(--paper); color:var(--ink);
  font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;
}
.cal-head {
  display:flex; align-items:center; gap:18px; flex-wrap:wrap;
  padding:34px clamp(20px,5vw,72px) 20px;
  border-bottom:1px solid var(--line);
}
.cal-head h1 { margin:0; font-size:30px; font-weight:600; letter-spacing:.16em; font-family:Georgia,"Songti SC",serif; }
.cal-head p { margin:6px 0 0; color:var(--ink-2); font-size:13px; letter-spacing:.06em; }
.cal-nav { margin-left:auto; display:flex; gap:8px; flex-wrap:wrap; }
.cal-nav a {
  border:1px solid var(--line); background:#fff; color:var(--ink-2);
  border-radius:999px; padding:8px 15px; font-size:12px; text-decoration:none; transition:.15s ease;
}
.cal-nav a:hover { color:var(--accent); border-color:var(--accent); }
.cal-nav a.primary { background:var(--accent); color:#fff; border-color:var(--accent); }
.cal-body { padding:18px clamp(20px,5vw,72px) 80px; max-width:1180px; margin:0 auto; }
.year-group { margin-top:34px; }
.year-title {
  font-size:13px; letter-spacing:.24em; color:var(--ink-3); text-transform:uppercase;
  border-bottom:1px solid var(--line); padding-bottom:10px; margin-bottom:18px;
}
.day-row { display:grid; grid-template-columns:150px 1fr; gap:24px; padding:18px 0; border-bottom:1px dashed var(--line); }
.day-date { padding-top:6px; }
.day-date .d { font-size:30px; font-weight:600; line-height:1; font-family:Georgia,"Songti SC",serif; }
.day-date .m { font-size:12px; color:var(--ink-2); letter-spacing:.12em; margin-top:6px; }
.day-date .w { font-size:11px; color:var(--ink-3); margin-top:3px; }
.day-cards { display:flex; gap:14px; flex-wrap:wrap; }
.cal-card {
  display:block; width:112px; text-decoration:none; color:var(--ink);
  border:1px solid var(--line); border-radius:16px; overflow:hidden; background:#fff;
  box-shadow:0 2px 8px rgba(80,64,48,.07); transition:transform .16s ease, box-shadow .16s ease;
}
.cal-card:hover { transform:translateY(-4px); box-shadow:0 12px 24px rgba(80,64,48,.14); }
.cal-card:focus-visible { outline:2px solid var(--accent); outline-offset:3px; }
.cal-cover { width:100%; height:150px; background-size:cover; background-position:center; position:relative; }
.cal-cover::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg,transparent 55%,rgba(31,27,24,.42) 100%); }
.cal-card .kind {
  position:absolute; left:7px; top:7px; z-index:2; font-size:9px; letter-spacing:.1em;
  padding:3px 7px; border-radius:999px; background:rgba(255,255,255,.86); color:var(--ink-2);
}
.cal-info { padding:9px 10px 11px; }
.cal-info .t { font-size:12px; font-weight:600; line-height:1.4; color:var(--ink); overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cal-info .s { font-size:10px; color:var(--ink-3); margin-top:3px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cal-card, .cal-card:hover, .cal-card:visited { color:var(--ink); }
.empty { padding:70px 20px; text-align:center; color:var(--ink-2); line-height:2; }
.empty a { color:var(--accent); }
.cover-a { background:linear-gradient(145deg,#E8D9C5,#C9B49B 60%,#A98E72); }
.cover-b { background:linear-gradient(160deg,#D9E3DC,#A8BDB2 65%,#7E9A8D); }
.cover-c { background:linear-gradient(135deg,#F1D9C9,#E3B79C 60%,#C98F6C); }
.cover-d { background:linear-gradient(150deg,#6E645C,#36302B); }
.cover-e { background:linear-gradient(160deg,#BFD3D8,#7EA3AE 60%,#4E7785); }
.cover-f { background:linear-gradient(150deg,#D7C7B0,#A98F6F 60%,#6F5942); }
.cover-g { background:linear-gradient(140deg,#C9C2D8,#8E82A8 60%,#5E5478); }
.cover-h { background:linear-gradient(165deg,#E6C9A8,#C79C6E 60%,#8E6A43); }
@media (max-width:640px){ .day-row{ grid-template-columns:1fr; gap:8px; } .day-date .d{ font-size:24px; } }
</style>

<div class="cal-app">
  <header class="cal-head">
    <div>
      <h1>日历</h1>
      <p>每一天的书、电影、旅途与游戏 · 点开封面回到光影</p>
    </div>
    <nav class="cal-nav">
      <a href="/">主页</a>
      <a href="/light/">光影桌面</a>
      <a class="primary" href="/light-admin/">＋ 上传内容</a>
    </nav>
  </header>
  <div class="cal-body" id="calBody">
    <div class="empty">正在读取日历…</div>
  </div>
</div>

<script>
(function(){
  var body=document.getElementById('calBody');
  var WEEK=['周日','周一','周二','周三','周四','周五','周六'];
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function cover(c){ return c&&c.indexOf('img:')===0?c.slice(4):null; }
  function cls(c){ return cover(c)?'':(/^cover-[a-h]$/.test(c)?c:'cover-a'); }
  function style(c){ return cover(c)?'background-image:url("'+esc(cover(c))+'")':''; }
  function boot(j){
    var items=(j&&j.items)||[];
    if(!items.length){ body.innerHTML='<div class="empty">日历还是空的。<br><a href="/light-admin/">上传一条内容</a> 吧。</div>'; return; }
    var byDate={};
    items.forEach(function(it){ var d=it.date||'未标日期'; (byDate[d]=byDate[d]||[]).push(it); });
    var dates=Object.keys(byDate).sort().reverse();
    var html='';
    var lastYear=null, openYear=false;
    dates.forEach(function(d){
      var year=d.slice(0,4);
      if(year!==lastYear){
        if(openYear) html+='</section>';
        html+='<section class="year-group"><div class="year-title">'+esc(year)+'</div>';
        lastYear=year; openYear=true;
      }
      var dt=new Date(d+'T00:00:00');
      var md=d.slice(5).split('-');
      var cards=byDate[d].map(function(it){
        return '<a class="cal-card" href="/light/?item='+encodeURIComponent(it.id)+'" title="查看《'+esc(it.title)+'》">'+
          '<div class="cal-cover '+cls(it.cover)+'" style="'+style(it.cover)+'"><span class="kind">'+esc(it.tag||it.kind)+'</span></div>'+
          '<div class="cal-info"><div class="t">'+esc(it.title)+'</div><div class="s">'+esc(it.sub||'')+'</div></div></a>';
      }).join('');
      html+='<div class="day-row"><div class="day-date"><div class="d">'+esc(md[1]||'')+'<span style="font-size:15px">日</span></div>'+
        '<div class="m">'+esc(year)+' 年 '+esc(parseInt(md[0],10))+' 月</div>'+
        '<div class="w">'+(isNaN(dt.getTime())?'':WEEK[dt.getDay()])+'</div></div>'+
        '<div class="day-cards">'+cards+'</div></div>';
    });
    if(openYear) html+='</section>';
    body.innerHTML=html;
  }
  fetch('/assets/data/light.json?ts='+Date.now()).then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(boot).catch(function(){
    body.innerHTML='<div class="empty">读取日历失败，请刷新重试。<br><a href="/">回到主页</a></div>';
  });
})();
</script>
