function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,m=!1;function p(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:p(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function y(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function N(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function P(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:N(e,r,t[r])}function R(e){return Array.from(e.childNodes)}function I(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function L(e,t,n,r,s=!1){I(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,r){return L(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function H(e,t,n){return k(e,t,n,y)}function O(e,t,n){return k(e,t,n,w)}function C(e,t){return L(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function M(e){return C(e," ")}function U(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function j(e,t){const n=U(e,"HTML_TAG_START",0),r=U(e,"HTML_TAG_END",n);if(n===r)return new J(void 0,t);I(e);const s=e.splice(n,r-n+1);_(s[0]),_(s[s.length-1]);const o=s.slice(1,s.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new J(o,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function z(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function q(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=y("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),_(n)}}function W(e,t){const n=[];let r=0;for(const s of t.childNodes)if(8===s.nodeType){const t=s.textContent.trim();t===`HEAD_${e}_END`?(r-=1,n.push(s)):t===`HEAD_${e}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class K{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=w(t.nodeName):this.e=y(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}class J extends K{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function V(e,t){return new e(t)}function F(e){h=e}function Y(){if(!h)throw new Error("Function called outside component initialization");return h}function X(e){Y().$$.on_mount.push(e)}function Q(e){Y().$$.after_update.push(e)}function Z(e){Y().$$.on_destroy.push(e)}const ee=[],te=[],ne=[],re=[],se=Promise.resolve();let oe=!1;function ie(e){ne.push(e)}const ae=new Set;let ce=0;function le(){if(0!==ce)return;const e=h;do{try{for(;ce<ee.length;){const e=ee[ce];ce++,F(e),ue(e.$$)}}catch(e){throw ee.length=0,ce=0,e}for(F(null),ee.length=0,ce=0;te.length;)te.pop()();for(let e=0;e<ne.length;e+=1){const t=ne[e];ae.has(t)||(ae.add(t),t())}ne.length=0}while(ee.length);for(;re.length;)re.pop()();oe=!1,ae.clear(),F(e)}function ue(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ie)}}const fe=new Set;let de;function he(){de={r:0,c:[],p:de}}function me(){de.r||s(de.c),de=de.p}function pe(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function ge(e,t,n,r){if(e&&e.o){if(fe.has(e))return;fe.add(e),de.c.push((()=>{fe.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function be(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ve(e){return"object"==typeof e&&null!==e?e:{}}function _e(e){e&&e.c()}function $e(e,t){e&&e.l(t)}function ye(e,t,r,i){const{fragment:a,after_update:c}=e.$$;a&&a.m(t,r),i||ie((()=>{const t=e.$$.on_mount.map(n).filter(o);e.$$.on_destroy?e.$$.on_destroy.push(...t):s(t),e.$$.on_mount=[]})),c.forEach(ie)}function we(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){-1===e.$$.dirty[0]&&(ee.push(e),oe||(oe=!0,se.then(le)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(t,n,o,i,a,c,l,u=[-1]){const f=h;F(t);const d=t.$$={fragment:null,ctx:[],props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&Ee(t,e)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=R(n.target);d.fragment&&d.fragment.l(e),e.forEach(_)}else d.fragment&&d.fragment.c();n.intro&&pe(t.$$.fragment),ye(t,n.target,n.anchor,n.customElement),m=!1,le()}F(f)}class Se{$destroy(){we(this,1),this.$destroy=e}$on(t,n){if(!o(n))return e;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const e=r.indexOf(n);-1!==e&&r.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Te=[];function Ae(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!Te.length;for(const e of s)e[1](),Te.push(e,t);if(e){for(let e=0;e<Te.length;e+=2)Te[e][0](Te[e+1]);Te.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Ne={};var Pe={owner:"MohamedElashri",repo:"monitor",sites:[{name:"ME Wiki",url:"https://wiki.melashri.me"},{name:"CERN",url:"https://home.cern"},{name:"LHCb",url:"https://lhcb.web.cern.ch"},{name:"Fermilab",url:"https://www.fnal.gov"},{name:"Hacker News",url:"https://news.ycombinator.com"},{name:"Mohamed Elashri",url:"https://melashri.net"},{name:"Snibox",url:"https://snip.elashri.xyz"},{name:"UC",url:"https://uc.edu"},{name:"Adguard Home",url:"https://adguard.elashri.xyz"},{name:"Nextcloud",url:"https://nextcloud.elashri.xyz"},{name:"My blog",url:"https://blog.melashri.net"},{name:"change-log",url:"https://change.elashri.xyz"},{name:"Archive",url:"https://archive.melashri.eu.org"},{name:"SearxNG",url:"https://searx.elashri.xyz"}],assignees:["MohamedElashri"],"status-website":{baseUrl:"/monitor",logoUrl:"https://raw.githubusercontent.com/upptime/upptime.js.org/master/static/img/icon.svg",name:"ME Status Page",introTitle:"**Upptime** is the open-source uptime monitor and status page for my personal use.",introMessage:"Welcome to ME Status Page",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},path:"https://MohamedElashri.github.io/monitor",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Re(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ie(t){let n,r,s,o=Pe["status-website"]&&!Pe["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=y("img"),this.h()},l(e){n=H(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){N(n,"alt",""),c(n.src,r=Pe["status-website"].logoUrl)||N(n,"src",r),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}(),i=Pe["status-website"]&&!Pe["status-website"].hideNavTitle&&function(t){let n,r,s=Pe["status-website"].name+"";return{c(){n=y("div"),r=E(s)},l(e){n=H(e,"DIV",{});var t=R(n);r=C(t,s),t.forEach(_)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=y("div"),r=y("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(e){n=H(e,"DIV",{});var t=R(n);r=H(t,"A",{href:!0,class:!0});var a=R(r);o&&o.l(a),s=M(a),i&&i.l(a),a.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",Pe["status-website"].logoHref||Pe.path),N(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Pe["status-website"]&&!Pe["status-website"].hideNavLogo&&o.p(e,t),Pe["status-website"]&&!Pe["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&_(n),o&&o.d(),i&&i.d()}}}function Le(e){let t,n,r,s,o,i=e[1].title+"";return{c(){t=y("li"),n=y("a"),r=E(i),o=x(),this.h()},l(e){t=H(e,"LI",{});var s=R(t);n=H(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=R(n);r=C(a,i),a.forEach(_),o=M(s),s.forEach(_),this.h()},h(){N(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),N(n,"href",e[1].href.replace("$OWNER",Pe.owner).replace("$REPO",Pe.repo)),N(n,"target",e[1].target||"_self"),N(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,o)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&N(n,"aria-current",s)},d(e){e&&_(t)}}}function ke(t){let n,r,s,o,i,a=Pe["status-website"]&&Pe["status-website"].logoUrl&&Ie(),c=Pe["status-website"]&&Pe["status-website"].navbar&&function(e){let t,n=Pe["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Le(Re(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Pe["status-website"].navbar,o=0;o<n.length;o+=1){const i=Re(e,n,o);r[o]?r[o].p(i,s):(r[o]=Le(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),l=Pe["status-website"]&&Pe["status-website"].navbarGitHub&&!Pe["status-website"].navbar&&function(t){let n,r,s,o=Pe.i18n.navGitHub+"";return{c(){n=y("li"),r=y("a"),s=E(o),this.h()},l(e){n=H(e,"LI",{});var t=R(n);r=H(t,"A",{href:!0,class:!0});var i=R(r);s=C(i,o),i.forEach(_),t.forEach(_),this.h()},h(){N(r,"href",`https://github.com/${Pe.owner}/${Pe.repo}`),N(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=y("nav"),r=y("div"),a&&a.c(),s=x(),o=y("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=H(e,"NAV",{class:!0});var t=R(n);r=H(t,"DIV",{class:!0});var u=R(r);a&&a.l(u),s=M(u),o=H(u,"UL",{class:!0});var f=R(o);c&&c.l(f),i=M(f),l&&l.l(f),f.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){N(o,"class","svelte-a08hsz"),N(r,"class","container svelte-a08hsz"),N(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Pe["status-website"]&&Pe["status-website"].logoUrl&&a.p(e,t),Pe["status-website"]&&Pe["status-website"].navbar&&c.p(e,t),Pe["status-website"]&&Pe["status-website"].navbarGitHub&&!Pe["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&_(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function He(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class Oe extends Se{constructor(e){super(),xe(this,e,He,ke,i,{segment:0})}}var Ce={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Me(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ue(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function je(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Ce[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Me(Ue(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=je(Me(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ue(s[8])+'" alt="'+Ue(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ue(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+je(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ue(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function De(e,t,n){const r=e.slice();return r[3]=t[n],r}function Ge(e,t,n){const r=e.slice();return r[3]=t[n],r}function ze(e,t,n){const r=e.slice();return r[8]=t[n],r}function Be(t){let n;return{c(){n=y("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",`${Pe.path}/themes/${(Pe["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n;return{c(){n=y("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0}),this.h()},h(){N(n,"rel","stylesheet"),N(n,"href",(Pe["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function We(t){let n,r;return{c(){n=y("script"),this.h()},l(e){n=H(e,"SCRIPT",{src:!0}),R(n).forEach(_),this.h()},h(){c(n.src,r=t[8].src)||N(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n;return{c(){n=y("link"),this.h()},l(e){n=H(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){N(n,"rel",t[3].rel),N(n,"href",t[3].href),N(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Je(t){let n;return{c(){n=y("meta"),this.h()},l(e){n=H(e,"META",{name:!0,content:!0}),this.h()},h(){N(n,"name",t[3].name),N(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&_(n)}}}function Ve(t){let n,r,s,o,i,a,c,u,f,d,h,m,p,b,w,E,T,A,P=je(Pe.i18n.footer.replace(/\$REPO/,`https://github.com/${Pe.owner}/${Pe.repo}`))+"",I=(Pe["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Pe["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(e){n=j(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();let L=((Pe["status-website"]||{}).themeUrl?qe:Be)(t),k=(Pe["status-website"]||{}).scripts&&function(e){let t,n=(Pe["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=We(ze(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=ze(e,n,o);r[o]?r[o].p(i,s):(r[o]=We(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),O=(Pe["status-website"]||{}).links&&function(e){let t,n=(Pe["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ke(Ge(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Ge(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ke(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),C=(Pe["status-website"]||{}).metaTags&&function(e){let t,n=(Pe["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Je(De(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Pe["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=De(e,n,o);r[o]?r[o].p(i,s):(r[o]=Je(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){$(r,e),e&&_(t)}}}(t),U=Pe["status-website"].css&&function(t){let n,r,s=`<style>${Pe["status-website"].css}</style>`;return{c(){n=new J(!1),r=S(),this.h()},l(e){n=j(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),D=Pe["status-website"].js&&function(t){let n,r,s=`<script>${Pe["status-website"].js}<\/script>`;return{c(){n=new J(!1),r=S(),this.h()},l(e){n=j(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}(),G=(Pe["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Pe["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(e){n=j(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&_(r),e&&n.d()}}}();m=new Oe({props:{segment:t[0]}});const z=t[2].default,B=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(z,t,t[1],null);return{c(){I&&I.c(),n=S(),L.c(),r=y("link"),s=y("link"),o=y("link"),k&&k.c(),i=S(),O&&O.c(),a=S(),C&&C.c(),c=S(),U&&U.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),_e(m.$$.fragment),p=x(),b=y("main"),B&&B.c(),w=x(),E=y("footer"),T=y("p"),this.h()},l(e){const t=W("svelte-fmspuk",document.head);I&&I.l(t),n=S(),L.l(t),r=H(t,"LINK",{rel:!0,href:!0}),s=H(t,"LINK",{rel:!0,type:!0,href:!0}),o=H(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),O&&O.l(t),a=S(),C&&C.l(t),c=S(),U&&U.l(t),u=S(),D&&D.l(t),f=S(),t.forEach(_),d=M(e),G&&G.l(e),h=M(e),$e(m.$$.fragment,e),p=M(e),b=H(e,"MAIN",{class:!0});var l=R(b);B&&B.l(l),l.forEach(_),w=M(e),E=H(e,"FOOTER",{class:!0});var g=R(E);T=H(g,"P",{}),R(T).forEach(_),g.forEach(_),this.h()},h(){N(r,"rel","stylesheet"),N(r,"href",`${Pe.path}/global.css`),N(s,"rel","icon"),N(s,"type","image/svg"),N(s,"href",(Pe["status-website"]||{}).faviconSvg||(Pe["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),N(o,"rel","icon"),N(o,"type","image/png"),N(o,"href",(Pe["status-website"]||{}).favicon||"/logo-192.png"),N(b,"class","container"),N(E,"class","svelte-jbr799")},m(e,t){I&&I.m(document.head,null),g(document.head,n),L.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),ye(m,e,t),v(e,p,t),v(e,b,t),B&&B.m(b,null),v(e,w,t),v(e,E,t),g(E,T),T.innerHTML=P,A=!0},p(e,[t]){(Pe["status-website"]||{}).customHeadHtml&&I.p(e,t),L.p(e,t),(Pe["status-website"]||{}).scripts&&k.p(e,t),(Pe["status-website"]||{}).links&&O.p(e,t),(Pe["status-website"]||{}).metaTags&&C.p(e,t),Pe["status-website"].css&&U.p(e,t),Pe["status-website"].js&&D.p(e,t),(Pe["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(B,z,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(z,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(pe(m.$$.fragment,e),pe(B,e),A=!0)},o(e){ge(m.$$.fragment,e),ge(B,e),A=!1},d(e){I&&I.d(e),_(n),L.d(e),_(r),_(s),_(o),k&&k.d(e),_(i),O&&O.d(e),_(a),C&&C.d(e),_(c),U&&U.d(e),_(u),D&&D.d(e),_(f),e&&_(d),G&&G.d(e),e&&_(h),we(m,e),e&&_(p),e&&_(b),B&&B.d(e),e&&_(w),e&&_(E)}}}function Fe(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class Ye extends Se{constructor(e){super(),xe(this,e,Fe,Ve,i,{segment:0})}}function Xe(e){let t,n,r=e[1].stack+"";return{c(){t=y("pre"),n=E(r)},l(e){t=H(e,"PRE",{});var s=R(t);n=C(s,r),s.forEach(_)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&_(t)}}}function Qe(t){let n,r,s,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Xe(t);return{c(){r=x(),s=y("h1"),o=E(t[0]),i=x(),a=y("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(e){W("svelte-1moakz",document.head).forEach(_),r=M(e),s=H(e,"H1",{class:!0});var n=R(s);o=C(n,t[0]),n.forEach(_),i=M(e),a=H(e,"P",{class:!0});var h=R(a);c=C(h,f),h.forEach(_),l=M(e),d&&d.l(e),u=S(),this.h()},h(){N(s,"class","svelte-17w3omn"),N(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Xe(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&_(r),e&&_(s),e&&_(i),e&&_(a),e&&_(l),d&&d.d(e),e&&_(u)}}}function Ze(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class et extends Se{constructor(e){super(),xe(this,e,Ze,Qe,i,{status:0,error:1})}}function tt(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=V(i,a())),{c(){n&&_e(n.$$.fragment),r=S()},l(e){n&&$e(n.$$.fragment,e),r=S()},m(e,t){n&&ye(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?be(o,[ve(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){he();const e=n;ge(e.$$.fragment,1,0,(()=>{we(e,1)})),me()}i?(n=V(i,a()),_e(n.$$.fragment),pe(n.$$.fragment,1),ye(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&pe(n.$$.fragment,e),s=!0)},o(e){n&&ge(n.$$.fragment,e),s=!1},d(e){e&&_(r),n&&we(n,e)}}}function nt(e){let t,n;return t=new et({props:{error:e[0],status:e[1]}}),{c(){_e(t.$$.fragment)},l(e){$e(t.$$.fragment,e)},m(e,r){ye(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(pe(t.$$.fragment,e),n=!0)},o(e){ge(t.$$.fragment,e),n=!1},d(e){we(t,e)}}}function rt(e){let t,n,r,s;const o=[nt,tt],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(he(),ge(i[c],1,1,(()=>{i[c]=null})),me(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),pe(n,1),n.m(r.parentNode,r))},i(e){s||(pe(n),s=!0)},o(e){ge(n),s=!1},d(e){i[t].d(e),e&&_(r)}}}function st(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[rt]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new Ye({props:o}),{c(){_e(n.$$.fragment)},l(e){$e(n.$$.fragment,e)},m(e,t){ye(n,e,t),r=!0},p(e,[t]){const r=12&t?be(s,[4&t&&{segment:e[2][0]},8&t&&ve(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(pe(n.$$.fragment,e),r=!0)},o(e){ge(n.$$.fragment,e),r=!1},d(e){we(n,e)}}}function ot(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return Q(l),u=Ne,f=r,Y().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class it extends Se{constructor(e){super(),xe(this,e,ot,st,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const at=[],ct=[{js:()=>Promise.all([import("./index.30061c9d.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.80bfce1a.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.ee11786c.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.a6fc8d8d.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.b5b9e6e8.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],lt=(ut=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ut(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ut(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ut;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function ft(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function dt(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ht,mt=1;const pt="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},gt={};let bt,vt;function _t(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function $t(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(bt))return null;let t=e.pathname.slice(bt.length);if(""===t&&(t="/"),!at.some((e=>e.test(t))))for(let n=0;n<lt.length;n+=1){const r=lt[n],s=r.pattern.exec(t);if(s){const n=_t(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function yt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=dt(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=$t(s);if(o){xt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),pt.pushState({id:ht},"",s.href)}}function wt(){return{x:pageXOffset,y:pageYOffset}}function Et(e){if(gt[ht]=wt(),e.state){const t=$t(new URL(location.href));t?xt(t,e.state.id):location.href=location.href}else!function(e){mt=e}(mt+1),function(e){ht=e}(mt),pt.replaceState({id:ht},"",location.href)}function xt(e,t,n,r){return ft(this,void 0,void 0,(function*(){const s=!!t;if(s)ht=t;else{const e=wt();gt[ht]=e,ht=t=++mt,gt[ht]=n?e:{x:0,y:0}}if(yield vt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=gt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),gt[ht]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function St(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Tt,At=null;function Nt(e){const t=dt(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=$t(new URL(e,St(document)));if(t)At&&e===At.href||(At={href:e,promise:Wt(t)}),At.promise}(t.href)}function Pt(e){clearTimeout(Tt),Tt=setTimeout((()=>{Nt(e)}),20)}function Rt(e,t={noscroll:!1,replaceState:!1}){const n=$t(new URL(e,St(document)));if(n){const r=xt(n,null,t.noscroll);return pt[t.replaceState?"replaceState":"pushState"]({id:ht},"",e),r}return location.href=e,new Promise((()=>{}))}const It="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,kt,Ht,Ot=!1,Ct=[],Mt="{}";const Ut={page:function(e){const t=Ae(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Ae(null),session:Ae(It&&It.session)};let jt,Dt,Gt;function zt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Bt(e){return ft(this,void 0,void 0,(function*(){Lt&&Ut.preloading.set(!0);const t=function(e){return At&&At.href===e.href?At.promise:Wt(e)}(e),n=kt={},r=yield t,{redirect:s}=r;if(n===kt)if(s)yield Rt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield qt(n,t,zt(t,e.page))}}))}function qt(e,t,n){return ft(this,void 0,void 0,(function*(){Ut.page.set(n),Ut.preloading.set(!1),Lt?Lt.$set(t):(t.stores={page:{subscribe:Ut.page.subscribe},preloading:{subscribe:Ut.preloading.subscribe},session:Ut.session},t.level0={props:yield Ht},t.notify=Ut.page.notify,Lt=new it({target:Gt,props:t,hydrate:!0})),Ct=e,Mt=JSON.stringify(n.query),Ot=!0,Dt=!1}))}function Wt(e){return ft(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Ht){const e=()=>({});Ht=It.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},jt)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>ft(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==Mt)return!0;const s=Ct[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(Dt||u||!Ct[a]||Ct[a].part!==t.i){u=!1;const{default:r,preload:s}=yield ct[t.i].js();let o;o=Ot||!It.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},jt):{}:It.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Ct[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Kt,Jt,Vt;Ut.session.subscribe((e=>ft(void 0,void 0,void 0,(function*(){if(jt=e,!Ot)return;Dt=!0;const t=$t(new URL(location.href)),n=kt={},{redirect:r,props:s,branch:o}=yield Wt(t);n===kt&&(r?yield Rt(r.location,{replaceState:!0}):yield qt(o,s,zt(s,t.page)))})))),Kt={target:document.querySelector("#sapper")},Jt=Kt.target,Gt=Jt,Vt=It.baseUrl,bt=Vt,vt=Bt,"scrollRestoration"in pt&&(pt.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{pt.scrollRestoration="auto"})),addEventListener("load",(()=>{pt.scrollRestoration="manual"})),addEventListener("click",yt),addEventListener("popstate",Et),addEventListener("touchstart",Nt),addEventListener("mousemove",Pt),It.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=It;Ht||(Ht=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Ht},level1:{props:{status:o,error:i},component:et},segments:s},c=_t(n);qt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;pt.replaceState({id:mt},"",t);const n=$t(new URL(location.href));if(n)return xt(n,mt,!0,e)}));export{D as A,T as B,s as C,te as D,j as E,c as F,f as G,J as H,z as I,W as J,je as K,w as L,O as M,Rt as N,G as O,A as P,t as Q,P as R,Se as S,be as T,Q as U,Z as V,u as W,ve as X,ie as Y,q as Z,x as a,H as b,M as c,R as d,y as e,_ as f,N as g,v as h,xe as i,he as j,me as k,pe as l,E as m,C as n,X as o,g as p,e as q,Pe as r,i as s,ge as t,S as u,$ as v,_e as w,$e as x,ye as y,we as z};

import __inject_styles from './inject_styles.803b7e80.js';