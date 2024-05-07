var I=Object.defineProperty;var L=(e,t,n)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var y=(e,t,n)=>(L(e,typeof t!="symbol"?t+"":t,n),n);import{r as p,n as g,h as b,j as W,i as E,k as M,l as N,m as P,p as T,q as A,v as q,w as D,x as H}from"./scheduler.DkvDlZSL.js";let $=!1;function O(){$=!0}function R(){$=!1}function U(e,t,n,i){for(;e<t;){const s=e+(t-e>>1);n(s)<=i?e=s+1:t=s}return e}function V(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&r.push(f)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let s=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,f=(s>0&&t[n[s]].claim_order<=l?s+1:U(1,s,_=>t[n[_]].claim_order,l))-1;i[r]=n[f]+1;const u=f+1;n[u]=r,s=Math.max(u,s)}const o=[],a=[];let c=t.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(o.push(t[r-1]);c>=r;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);o.reverse(),a.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<a.length;r++){for(;l<o.length&&a[r].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;e.insertBefore(a[r],f)}}function k(e,t){e.appendChild(t)}function F(e,t){if($){for(V(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function se(e,t,n){$&&!n?F(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ae(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function j(e){return document.createElement(e)}function G(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function w(e){return document.createTextNode(e)}function le(){return w(" ")}function oe(){return w("")}function S(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function ce(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ue(e){return e.dataset.svelteH}function J(e){return Array.from(e.childNodes)}function K(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function z(e,t,n,i,s=!1){K(e);const o=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const r=n(c);return r===void 0?e.splice(a,1):e[a]=r,s?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function B(e,t,n,i){return z(e,s=>s.nodeName===t,s=>{const o=[];for(let a=0;a<s.attributes.length;a++){const c=s.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>s.removeAttribute(a))},()=>i(t))}function fe(e,t,n){return B(e,t,n,j)}function de(e,t,n){return B(e,t,n,G)}function Q(e,t){return z(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>w(t),!0)}function _e(e){return Q(e," ")}function me(e,t){t=""+t,e.data!==t&&(e.data=t)}function he(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,"")}let m;function X(){if(m===void 0){m=!1;try{typeof window<"u"&&window.parent&&window.parent.document}catch{m=!0}}return m}function pe(e,t){getComputedStyle(e).position==="static"&&(e.style.position="relative");const i=j("iframe");i.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),i.setAttribute("aria-hidden","true"),i.tabIndex=-1;const s=X();let o;return s?(i.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",o=S(window,"message",a=>{a.source===i.contentWindow&&t()})):(i.src="about:blank",i.onload=()=>{o=S(i.contentWindow,"resize",t),t()}),k(e,i),()=>{(s||o&&i.contentWindow)&&o(),C(i)}}function $e(e,t,n){e.classList.toggle(t,!!n)}function ye(e,t){return new e(t)}const h=new Set;let d;function ge(){d={r:0,c:[],p:d}}function we(){d.r||p(d.c),d=d.p}function Y(e,t){e&&e.i&&(h.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ve(e){e&&e.c()}function be(e,t){e&&e.l(t)}function Z(e,t,n){const{fragment:i,after_update:s}=e.$$;i&&i.m(t,n),N(()=>{const o=e.$$.on_mount.map(q).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...o):p(o),e.$$.on_mount=[]}),s.forEach(N)}function ee(e,t){const n=e.$$;n.fragment!==null&&(P(n.after_update),p(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function te(e,t){e.$$.dirty[0]===-1&&(D.push(e),H(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ne(e,t,n,i,s,o,a=null,c=[-1]){const r=T;A(e);const l=e.$$={fragment:null,ctx:[],props:o,update:g,not_equal:s,bound:b(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:b(),dirty:c,skip_bound:!1,root:t.target||r.$$.root};a&&a(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(u,_,...x)=>{const v=x.length?x[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=v)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](v),f&&te(e,u)),_}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){O();const u=J(t.target);l.fragment&&l.fragment.l(u),u.forEach(C)}else l.fragment&&l.fragment.c();t.intro&&Y(e.$$.fragment),Z(e,t.target,t.anchor),R(),W()}A(r)}class Ae{constructor(){y(this,"$$");y(this,"$$set")}$destroy(){ee(this,1),this.$destroy=g}$on(t,n){if(!E(n))return g;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(t){this.$$set&&!M(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ne);export{G as A,de as B,ae as C,$e as D,Ae as S,_e as a,ce as b,fe as c,se as d,j as e,C as f,ue as g,xe as h,Ne as i,w as j,J as k,Q as l,F as m,me as n,oe as o,we as p,he as q,ge as r,le as s,Y as t,ye as u,ve as v,be as w,Z as x,ee as y,pe as z};
