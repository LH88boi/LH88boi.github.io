---
title: 日历
---

<style>
/* 日历页：与「天网」一致的标准文档页（暖纸底 / 深灰字 / 灰线），双栏布局 */
.cal-app {
  --paper:#FCFAF8; --ink:#1F1B18; --ink-2:#555; --ink-3:#8A7F75;
  --accent:#E8590C; --line:rgba(138,127,117,.28);
  color:var(--ink); font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;
}
.cal-app .md-typeset, .cal-app.md-typeset { color: var(--ink-2); }
.cal-intro { margin-bottom: 8px; }
.cal-intro h1 { font-size: 2.2rem; letter-spacing: .14em; font-family: Georgia, "Songti SC", serif; margin: 0 0 6px; }
.cal-intro p { color: var(--ink-2); font-size: 14px; letter-spacing: .05em; margin: 0; }
.cal-nav { display:flex; gap:10px; flex-wrap:wrap; margin: 18px 0 26px; }
.cal-nav a {
  border:1px solid var(--line); background:#fff; color:var(--ink-2);
  border-radius:999px; padding:7px 15px; font-size:12px; text-decoration:none; transition:.15s ease;
}
.cal-nav a:hover { color:var(--accent); border-color:var(--accent); }
.cal-nav a.primary { background:var(--accent); color:#fff; border-color:var(--accent); }

.cal-layout { display:grid; grid-template-columns: minmax(0,1fr) 400px; gap: 44px; align-items:start; }
.cal-main { min-width:0; }
.year-title {
  font-size:13px; letter-spacing:.24em; color:var(--ink-3); text-transform:uppercase;
  border-bottom:1px solid var(--line); padding-bottom:10px; margin:30px 0 4px;
}
.day-row { display:grid; grid-template-columns:110px 1fr; gap:20px; padding:22px 0; border-bottom:1px solid var(--line); }
.day-date .d { font-size:30px; font-weight:600; line-height:1; font-family:Georgia,"Songti SC",serif; }
.day-date .d span { font-size:15px; }
.day-date .m { font-size:12px; color:var(--ink-2); letter-spacing:.1em; margin-top:8px; }
.day-date .w { font-size:11px; color:var(--ink-3); margin-top:3px; }
.day-cards { display:flex; gap:14px; flex-wrap:wrap; }
.cal-card {
  display:block; width:104px; text-decoration:none; color:var(--ink);
  border:1px solid var(--line); border-radius:14px; overflow:hidden; background:#fff;
  box-shadow:0 2px 8px rgba(80,64,48,.06); transition:transform .16s ease, box-shadow .16s ease;
}
.cal-card:hover { transform:translateY(-4px); box-shadow:0 12px 24px rgba(80,64,48,.13); }
.cal-cover { width:100%; height:140px; background-size:cover; background-position:center; position:relative; }
.cal-cover::after { content:""; position:absolute; inset:0; background:linear-gradient(180deg,transparent 58%,rgba(31,27,24,.4) 100%); }
.cal-card .kind {
  position:absolute; left:7px; top:7px; z-index:2; font-size:9px; letter-spacing:.1em;
  padding:3px 7px; border-radius:999px; background:rgba(255,255,255,.88); color:var(--ink-2);
}
.cal-info { padding:8px 10px 10px; }
.cal-info .t { font-size:12px; font-weight:600; line-height:1.4; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cal-info .s { font-size:10px; color:var(--ink-3); margin-top:3px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.cal-card, .cal-card:hover, .cal-card:visited { color:var(--ink); }

/* 右侧月历总览 */
.cal-side { position:sticky; top:16px; }
.cal-side-box { border:1px solid var(--line); border-radius:18px; background:#fff; padding:18px; box-shadow:0 4px 18px rgba(80,64,48,.05); }
.cal-side-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
.cal-side-head .ym { font-size:18px; font-weight:600; letter-spacing:.08em; font-family:Georgia,"Songti SC",serif; }
.cal-side-head .ctrls { display:flex; gap:6px; }
.cal-side-head button {
  width:28px; height:28px; border-radius:50%; border:1px solid var(--line); background:var(--paper);
  color:var(--ink-2); cursor:pointer; font-size:14px; line-height:1; padding:0;
}
.cal-side-head button:hover { color:var(--accent); border-color:var(--accent); }
.cal-week, .cal-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:5px; }
.cal-week div { text-align:center; font-size:11px; color:var(--ink-3); padding-bottom:8px; letter-spacing:.08em; }
.cal-cell {
  position:relative; aspect-ratio:3/4; min-height:62px; border:1px solid rgba(138,127,117,.16);
  border-radius:8px; padding:5px; background:var(--paper); overflow:hidden;
}
.cal-cell.out { background:transparent; border-color:transparent; }
.cal-cell.today { border-color:var(--accent); box-shadow:inset 0 0 0 1px var(--accent); }
.cal-num {
  position:absolute; top:4px; right:6px; z-index:3; font-size:22px; line-height:1;
  font-family:Georgia,"Songti SC",serif; font-weight:600; color:#C9C2D8;
  text-shadow:0 1px 2px #fff, 0 0 6px #fff;
}
.cal-cell.today .cal-num { color:var(--accent); }
.cal-cell.out .cal-num { color:#DED8D2; }
.cal-thumbs { position:absolute; left:5px; right:5px; bottom:5px; z-index:1; display:flex; gap:2px; flex-wrap:wrap; }
.cal-thumb { flex:1 1 0; min-width:0; height:26px; border-radius:3px; background-size:cover; background-position:center; display:block; box-shadow:0 1px 3px rgba(31,27,24,.18); }
.cal-thumb.movie { height:34px; }
.cal-thumb.more { display:grid; place-items:center; background:var(--surface-2,#EFE7DE); color:var(--ink-3); font-size:9px; }
.cal-side-note { font-size:11px; color:var(--ink-3); line-height:1.7; margin:12px 2px 0; }
.empty { padding:60px 20px; text-align:center; color:var(--ink-2); line-height:2; }
.empty a { color:var(--accent); }
.cover-a { background:linear-gradient(145deg,#E8D9C5,#C9B49B 60%,#A98E72); }
.cover-b { background:linear-gradient(160deg,#D9E3DC,#A8BDB2 65%,#7E9A8D); }
.cover-c { background:linear-gradient(135deg,#F1D9C9,#E3B79C 60%,#C98F6C); }
.cover-d { background:linear-gradient(150deg,#6E645C,#36302B); }
.cover-e { background:linear-gradient(160deg,#BFD3D8,#7EA3AE 60%,#4E7785); }
.cover-f { background:linear-gradient(150deg,#D7C7B0,#A98F6F 60%,#6F5942); }
.cover-g { background:linear-gradient(140deg,#C9C2D8,#8E82A8 60%,#5E5478); }
.cover-h { background:linear-gradient(165deg,#E6C9A8,#C79C6E 60%,#8E6A43); }
@media (max-width: 1100px){ .cal-layout{ grid-template-columns:1fr; } .cal-side{ position:static; max-width:460px; } }
@media (max-width:640px){ .day-row{ grid-template-columns:1fr; gap:8px; } .day-date .d{ font-size:24px; } .cal-cell{ min-height:52px; } .cal-num{ font-size:18px; } .cal-thumb{ height:20px; } .cal-thumb.movie{ height:26px; } }
</style>

<div class="cal-app">

<div class="cal-intro md-typeset">
  <h1>日历</h1>
  <p>每一天的书、电影、旅途与游戏 · 点开封面回到光影</p>
</div>
<nav class="cal-nav">
  <a href="/">主页</a>
  <a href="/light/">光影桌面</a>
  <a class="primary" href="/light-admin/">＋ 上传内容</a>
</nav>

<div class="cal-layout">
  <div class="cal-main" id="calBody"><div class="empty">正在读取日历…</div></div>
  <aside class="cal-side">
    <div class="cal-side-box">
      <div class="cal-side-head">
        <span class="ym" id="calYm">—</span>
        <span class="ctrls">
          <button id="calPrev" aria-label="上个月">‹</button>
          <button id="calToday" aria-label="回到本月">·</button>
          <button id="calNext" aria-label="下个月">›</button>
        </span>
      </div>
      <div class="cal-week"><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div><div>日</div></div>
      <div class="cal-grid" id="calGrid"></div>
      <p class="cal-side-note">封面贴在日期下方，不挡住日期。点封面可回到光影里的那条记录。</p>
    </div>
  </aside>
</div>
</div>

<script>
(function(){
  var body=document.getElementById('calBody');
  var grid=document.getElementById('calGrid');
  var ymLabel=document.getElementById('calYm');
  var WEEK=['周日','周一','周二','周三','周四','周五','周六'];
  var byDate={};
  function esc(s){ return String(s==null?'':s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];}); }
  function coverUrl(c){ return c&&c.indexOf('img:')===0?c.slice(4):null; }
  function cls(c){ var u=coverUrl(c); return u?'':(/^cover-[a-h]$/.test(c)?c:'cover-a'); }
  function style(c){ var u=coverUrl(c); return u?'background-image:url("'+esc(u)+'")':''; }
  function two(n){ return n<10?'0'+n:''+n; }
  var today=new Date();
  var curY=today.getFullYear(), curM=today.getMonth()+1;

  function boot(j){
    var items=(j&&j.items)||[];
    if(!items.length){
      body.innerHTML='<div class="empty">日历还是空的。<br><a href="/light-admin/">上传一条内容</a> 吧。</div>';
      renderGrid(); return;
    }
    items.forEach(function(it){ var d=it.date||'未标日期'; (byDate[d]=byDate[d]||[]).push(it); });
    var dates=Object.keys(byDate).sort().reverse();
    var html='', lastYear=null, openYear=false;
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
      html+='<div class="day-row"><div class="day-date"><div class="d">'+(md[1]||'')+'<span>日</span></div>'+
        '<div class="m">'+esc(year)+' 年 '+esc(parseInt(md[0],10))+' 月</div>'+
        '<div class="w">'+(isNaN(dt.getTime())?'':WEEK[dt.getDay()])+'</div></div>'+
        '<div class="day-cards">'+cards+'</div></div>';
    });
    if(openYear) html+='</section>';
    body.innerHTML=html;

    // 默认定位到有记录的最新月份，没有则用本月
    var withDate=dates.filter(function(d){ return /^\d{4}-\d{2}-\d{2}$/.test(d); });
    if(withDate.length){ curY=parseInt(withDate[0].slice(0,4),10); curM=parseInt(withDate[0].slice(5,7),10); }
    renderGrid();
  }

  function renderGrid(){
    ymLabel.textContent=curY+' 年 '+curM+' 月';
    var first=new Date(curY,curM-1,1);
    var lead=(first.getDay()+6)%7; // 周一为一周起点
    var days=new Date(curY,curM,0).getDate();
    var prevDays=new Date(curY,curM-1,0).getDate();
    var cells='';
    for(var i=0;i<lead;i++){
      cells+='<div class="cal-cell out"><div class="cal-num">'+(prevDays-lead+1+i)+'</div></div>';
    }
    for(var d=1;d<=days;d++){
      var key=curY+'-'+two(curM)+'-'+two(d);
      var list=byDate[key]||[];
      var thumbs='';
      if(list.length){
        thumbs='<div class="cal-thumbs">';
        list.slice(0,3).forEach(function(it){
          thumbs+='<a class="cal-thumb '+(it.kind==='movie'?'movie':'')+' '+cls(it.cover)+'" style="'+style(it.cover)+'" href="/light/?item='+encodeURIComponent(it.id)+'" title="'+esc(it.title)+'"></a>';
        });
        if(list.length>3) thumbs+='<span class="cal-thumb more">+'+(list.length-3)+'</span>';
        thumbs+='</div>';
      }
      var isToday=(curY===today.getFullYear()&&curM===today.getMonth()+1&&d===today.getDate());
      cells+='<div class="cal-cell'+(isToday?' today':'')+'" title="'+key+(list.length?' · '+list.length+' 条':'')+'">'+
        '<div class="cal-num">'+d+'</div>'+thumbs+'</div>';
    }
    var tail=(7-((lead+days)%7))%7;
    for(var t=1;t<=tail;t++){
      cells+='<div class="cal-cell out"><div class="cal-num">'+t+'</div></div>';
    }
    grid.innerHTML=cells;
  }

  document.getElementById('calPrev').addEventListener('click',function(){ curM--; if(curM<1){curM=12;curY--;} renderGrid(); });
  document.getElementById('calNext').addEventListener('click',function(){ curM++; if(curM>12){curM=1;curY++;} renderGrid(); });
  document.getElementById('calToday').addEventListener('click',function(){ curY=today.getFullYear(); curM=today.getMonth()+1; renderGrid(); });

  fetch('/assets/data/light.json?ts='+Date.now()).then(function(r){ if(!r.ok) throw 0; return r.json(); }).then(boot).catch(function(){
    body.innerHTML='<div class="empty">读取日历失败，请刷新重试。<br><a href="/">回到主页</a></div>';
    renderGrid();
  });
})();
</script>
