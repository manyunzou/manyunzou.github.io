import{S as Y,i as Z,s as X,l as v,u as H,a as C,m as w,p as y,v as U,h as d,c as D,K as O,q as f,r as we,b as k,J as g,n as x,L as ee,N as K,x as V,y as G,z,f as A,g as te,d as ae,t as I,C as T,e as B,D as ye,O as he,A as be,P as ke,Q as Ce,j as ue}from"../chunks/index-6108c67f.js";import{H as De,F as Ae,M as Ee,c as fe}from"../chunks/copy-656ac0fd.js";function pe(i,e,a){const t=i.slice();return t[1]=e[a].no,t[2]=e[a].name,t[3]=e[a].date,t[4]=e[a].process,t[5]=e[a].url,t[6]=e[a].language,t[8]=a,t}function Pe(i){let e,a;return{c(){e=v("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,width:!0,class:!0}),this.h()},h(){O(e.src,a="/assets/icons/chinese.png")||f(e,"src",a),f(e,"alt","chinese-icon"),f(e,"width","15px"),f(e,"class","svelte-1qsestr")},m(t,n){k(t,e,n)},d(t){t&&d(e)}}}function Ie(i){let e,a;return{c(){e=v("img"),this.h()},l(t){e=w(t,"IMG",{src:!0,alt:!0,width:!0,class:!0}),this.h()},h(){O(e.src,a="/assets/icons/english.png")||f(e,"src",a),f(e,"alt","english-icon"),f(e,"width","15px"),f(e,"class","svelte-1qsestr")},m(t,n){k(t,e,n)},d(t){t&&d(e)}}}function me(i){let e,a,t,n,l,h,o,s,c,r=i[2]+"",u,p,b,R,$,m,E=i[3]+"",_,W,M,N,q,ne=i[4]+"",Q,j;function $e(F,S){return F[6]=="eng"?Ie:Pe}let L=$e(i)(i);return{c(){e=v("div"),a=v("div"),t=v("a"),n=v("img"),h=C(),o=v("div"),s=v("span"),c=v("a"),u=H(r),p=C(),L.c(),b=C(),R=v("br"),$=C(),m=v("span"),_=H(E),W=C(),M=v("br"),N=C(),q=v("span"),Q=H(ne),j=C(),this.h()},l(F){e=w(F,"DIV",{class:!0});var S=y(e);a=w(S,"DIV",{class:!0});var se=y(a);t=w(se,"A",{href:!0,target:!0});var le=y(t);n=w(le,"IMG",{class:!0,src:!0,alt:!0,width:!0}),le.forEach(d),se.forEach(d),h=D(S),o=w(S,"DIV",{class:!0});var re=y(o);s=w(re,"SPAN",{style:!0,class:!0});var P=y(s);c=w(P,"A",{class:!0,href:!0,target:!0});var ie=y(c);u=U(ie,r),ie.forEach(d),p=D(P),L.l(P),b=D(P),R=w(P,"BR",{}),$=D(P),m=w(P,"SPAN",{class:!0});var oe=y(m);_=U(oe,E),oe.forEach(d),W=D(P),M=w(P,"BR",{}),N=D(P),q=w(P,"SPAN",{class:!0});var ce=y(q);Q=U(ce,ne),ce.forEach(d),P.forEach(d),re.forEach(d),j=D(S),S.forEach(d),this.h()},h(){f(n,"class","img-fluid svelte-1qsestr"),O(n.src,l="/assets/features/"+i[1]+".png")||f(n,"src",l),f(n,"alt","image"),f(n,"width","300"),f(t,"href",i[5]),f(t,"target","_blank"),f(a,"class","col-md-"),f(c,"class","feature-title svelte-1qsestr"),f(c,"href",i[5]),f(c,"target","_blank"),f(m,"class","feature-text svelte-1qsestr"),f(q,"class","feature-text svelte-1qsestr"),we(s,"margin-bottom","20px"),f(s,"class","svelte-1qsestr"),f(o,"class","col feature-wrap svelte-1qsestr"),f(e,"class","row featureRow svelte-1qsestr")},m(F,S){k(F,e,S),g(e,a),g(a,t),g(t,n),g(e,h),g(e,o),g(o,s),g(s,c),g(c,u),g(s,p),L.m(s,null),g(s,b),g(s,R),g(s,$),g(s,m),g(m,_),g(s,W),g(s,M),g(s,N),g(s,q),g(q,Q),g(e,j)},p:x,d(F){F&&d(e),L.d()}}}function Re(i){let e,a,t,n,l,h,o,s,c,r,u,p,b,R=i[0],$=[];for(let m=0;m<R.length;m+=1)$[m]=me(pe(i,R,m));return{c(){e=v("div"),a=v("div"),t=v("span"),n=v("img"),h=H("English"),o=C(),s=v("span"),c=v("img"),u=H("Chinese"),p=C(),b=v("div");for(let m=0;m<$.length;m+=1)$[m].c();this.h()},l(m){e=w(m,"DIV",{class:!0});var E=y(e);a=w(E,"DIV",{class:!0});var _=y(a);t=w(_,"SPAN",{class:!0});var W=y(t);n=w(W,"IMG",{src:!0,width:!0}),h=U(W,"English"),W.forEach(d),o=D(_),s=w(_,"SPAN",{class:!0});var M=y(s);c=w(M,"IMG",{src:!0,width:!0,style:!0}),u=U(M,"Chinese"),M.forEach(d),_.forEach(d),E.forEach(d),p=D(m),b=w(m,"DIV",{class:!0});var N=y(b);for(let q=0;q<$.length;q+=1)$[q].l(N);N.forEach(d),this.h()},h(){O(n.src,l="/assets/icons/english.png")||f(n,"src",l),f(n,"width","15px"),f(t,"class","col-6 col-sm-2"),O(c.src,r="/assets/icons/chinese.png")||f(c,"src",r),f(c,"width","15px"),we(c,"margin-left","15px"),f(s,"class","col-6 col-sm-2 legend02 svelte-1qsestr"),f(a,"class","row"),f(e,"class","container legend-box svelte-1qsestr"),f(b,"class","container featureBody svelte-1qsestr")},m(m,E){k(m,e,E),g(e,a),g(a,t),g(t,n),g(t,h),g(a,o),g(a,s),g(s,c),g(s,u),k(m,p,E),k(m,b,E);for(let _=0;_<$.length;_+=1)$[_].m(b,null)},p(m,[E]){if(E&1){R=m[0];let _;for(_=0;_<R.length;_+=1){const W=pe(m,R,_);$[_]?$[_].p(W,E):($[_]=me(W),$[_].c(),$[_].m(b,null))}for(;_<$.length;_+=1)$[_].d(1);$.length=R.length}},i:x,o:x,d(m){m&&d(e),m&&d(p),m&&d(b),ee($,m)}}}function We(i){return[K("data")]}class qe extends Y{constructor(e){super(),Z(this,e,We,Re,X,{})}}function ge(i,e,a){const t=i.slice();return t[3]=e[a].id,t[4]=e[a].chunks,t}function de(i,e,a){const t=i.slice();return t[7]=e[a].type,t[8]=e[a].text,t[9]=e[a].component,t}function Se(i){let e,a,t;var n=i[1][i[9]];function l(h){return{}}return n&&(e=new n(l())),{c(){e&&V(e.$$.fragment),a=B()},l(h){e&&G(e.$$.fragment,h),a=B()},m(h,o){e&&z(e,h,o),k(h,a,o),t=!0},p(h,o){if(n!==(n=h[1][h[9]])){if(e){te();const s=e;I(s.$$.fragment,1,0,()=>{T(s,1)}),ae()}n?(e=new n(l()),V(e.$$.fragment),A(e.$$.fragment,1),z(e,a.parentNode,a)):e=null}},i(h){t||(e&&A(e.$$.fragment,h),t=!0)},o(h){e&&I(e.$$.fragment,h),t=!1},d(h){h&&d(a),e&&T(e,h)}}}function xe(i){let e,a=i[8]+"",t;return{c(){e=new ke(!1),t=B(),this.h()},l(n){e=Ce(n,!1),t=B(),this.h()},h(){e.a=t},m(n,l){e.m(a,n,l),k(n,t,l)},p:x,i:x,o:x,d(n){n&&d(t),n&&e.d()}}}function J(i){let e,a,t,n;const l=[xe,Se],h=[];function o(r,u){return r[8]?0:1}a=o(i),t=h[a]=l[a](i);let s=[],c={};for(let r=0;r<s.length;r+=1)c=ye(c,s[r]);return{c(){e=v(i[7]),t.c(),this.h()},l(r){e=w(r,(i[7]||"null").toUpperCase(),{});var u=y(e);t.l(u),u.forEach(d),this.h()},h(){he(e,c)},m(r,u){k(r,e,u),h[a].m(e,null),n=!0},p(r,u){t.p(r,u),he(e,c=be(s,[]))},i(r){n||(A(t),n=!0)},o(r){I(t),n=!1},d(r){r&&d(e),h[a].d()}}}function _e(i){let e=i[7],a,t=i[7]&&J(i);return{c(){t&&t.c(),a=B()},l(n){t&&t.l(n),a=B()},m(n,l){t&&t.m(n,l),k(n,a,l)},p(n,l){n[7]?e?X(e,n[7])?(t.d(1),t=J(n),t.c(),t.m(a.parentNode,a)):t.p(n,l):(t=J(n),t.c(),t.m(a.parentNode,a)):e&&(t.d(1),t=null),e=n[7]},i:x,o(n){I(t)},d(n){n&&d(a),t&&t.d(n)}}}function ve(i){let e,a,t,n=i[4],l=[];for(let o=0;o<n.length;o+=1)l[o]=_e(de(i,n,o));const h=o=>I(l[o],1,1,()=>{l[o]=null});return{c(){e=v("section");for(let o=0;o<l.length;o+=1)l[o].c();a=C(),this.h()},l(o){e=w(o,"SECTION",{id:!0,class:!0});var s=y(e);for(let c=0;c<l.length;c+=1)l[c].l(s);a=D(s),s.forEach(d),this.h()},h(){f(e,"id",i[3]),f(e,"class","svelte-110g6pk")},m(o,s){k(o,e,s);for(let c=0;c<l.length;c+=1)l[c].m(e,null);g(e,a),t=!0},p(o,s){if(s&3){n=o[4];let c;for(c=0;c<n.length;c+=1){const r=de(o,n,c);l[c]?(l[c].p(r,s),A(l[c],1)):(l[c]=_e(r),l[c].c(),A(l[c],1),l[c].m(e,a))}for(te(),c=n.length;c<l.length;c+=1)h(c);ae()}},i(o){if(!t){for(let s=0;s<n.length;s+=1)A(l[s]);t=!0}},o(o){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)I(l[s]);t=!1},d(o){o&&d(e),ee(l,o)}}}function Me(i){let e,a,t,n,l,h;a=new De({});let o=i[0].sections,s=[];for(let r=0;r<o.length;r+=1)s[r]=ve(ge(i,o,r));const c=r=>I(s[r],1,1,()=>{s[r]=null});return l=new Ae({}),{c(){e=v("article"),V(a.$$.fragment),t=C();for(let r=0;r<s.length;r+=1)s[r].c();n=C(),V(l.$$.fragment),this.h()},l(r){e=w(r,"ARTICLE",{class:!0});var u=y(e);G(a.$$.fragment,u),t=D(u);for(let p=0;p<s.length;p+=1)s[p].l(u);u.forEach(d),n=D(r),G(l.$$.fragment,r),this.h()},h(){f(e,"class","svelte-110g6pk")},m(r,u){k(r,e,u),z(a,e,null),g(e,t);for(let p=0;p<s.length;p+=1)s[p].m(e,null);k(r,n,u),z(l,r,u),h=!0},p(r,[u]){if(u&3){o=r[0].sections;let p;for(p=0;p<o.length;p+=1){const b=ge(r,o,p);s[p]?(s[p].p(b,u),A(s[p],1)):(s[p]=ve(b),s[p].c(),A(s[p],1),s[p].m(e,null))}for(te(),p=o.length;p<s.length;p+=1)c(p);ae()}},i(r){if(!h){A(a.$$.fragment,r);for(let u=0;u<o.length;u+=1)A(s[u]);A(l.$$.fragment,r),h=!0}},o(r){I(a.$$.fragment,r),s=s.filter(Boolean);for(let u=0;u<s.length;u+=1)I(s[u]);I(l.$$.fragment,r),h=!1},d(r){r&&d(e),T(a),ee(s,r),r&&d(n),T(l,r)}}}function Fe(i){const e=K("copy");return K("data"),[e,{Quote:qe}]}class Ne extends Y{constructor(e){super(),Z(this,e,Fe,Me,X,{})}}const Ve=[{no:"0",name:"The Big [Censored] Theory",date:"Aug 2022",process:"Pitch - Research - Data Collection and Analysis - Writing - UX Design",url:"https://pudding.cool/2022/08/censorship/",language:"eng"},{no:"1",name:"How Chinese FOIA failed the citizens' requests",date:"April 2019",process:"Pitch - Research - Interview - Data Clean and Analysis - Writing",url:"https://www.thepaper.cn/newsDetail_forward_3248133",language:"chn"},{no:"2",name:"How the coronavirus spread in China, explained",date:"Feb 2020",process:"Pitch - Research - Data Collection, Clean and Analysis - Writing",url:"https://www.sixthtone.com/news/1005173/four-charts-that-help-explain-how-the-coronavirus-spread",language:"eng"},{no:"3",name:"Landmark Trial In China\u2019s #MeToo Evolution Reaches Settlement, Chinese Newspapers Fail to Pay Attention",date:"Oct 2022",process:"Pitch - Research - Data Clean and Analysis - Data Visualization - Writing",url:"https://gobserver.net/5334/commentary/landmark-trial-in-chinas-metoo-evolution-reaches-settlement-chinese-newspapers-fail-to-pay-attention/",language:"eng"},{no:"4",name:"China\u2019s female civil service applicants ask: where are our seats at the table?",date:"Nov 2020",process:"Pitch - Research - Interviewing - Data Clean and Analysis - Data Visualization - Writing",url:"https://www.sixthtone.com/news/1006477/chinas-female-civil-service-applicants-ask-where-are-our-seats-at-the-table%3F",language:"eng"},{no:"5",name:"How I Matched Your Mother in the Market",date:"Aug 2018",process:"Interview - Research - Data Collection and Analysis - UX Design - Project Management - Writing",url:"https://h5.thepaper.cn/html/zt/2018/08/seekinglove/index.html",language:"chn"},{no:"6",name:"What we need to know about the personal income tax reform",date:"Jan 2019",process:"Pitch - Research - Interview - Data Analysis - UX/UI Design - Front-End Development - Writing",url:"https://h5.thepaper.cn/html/zt/2019/01/tax/index.html",language:"chn"},{no:"7",name:"Chinese Apps are Removing Search Function for Teenagers",date:"Aug 2021",process:"Pitch - Research - Web Scraping - Data Clean and Analysis - Writing",url:"https://www.thepaper.cn/newsDetail_forward_13798568",language:"chn"},{no:"8",name:"New-Energy Billionaires Race Up China\u2019s Rich List",date:"Oct 2021",process:"Pitch - Data Clean and Analysis - Data Visualization - Writing",url:"https://www.caixinglobal.com/2021-10-28/new-energy-billionaires-race-up-chinas-rich-list-101793059.html",language:"eng"},{no:"9",name:"China\u2019s 3,500-Post Edit War Over Feminism",date:"March 2021",process:"Pitch - Research - Web Scraping - Data Clean and Analysis - Writing",url:"https://www.sixthtone.com/news/1007168/chinas-3%2C500-post-edit-war-over-feminism",language:"eng"},{no:"10",name:"China's Coal Miners Pile Up Record $111 Billion in Profit",date:"Feb 2022",process:"Pitch - Data Clean and Analysis - Data Visualization - Writing",url:"https://www.caixinglobal.com/2022-02-23/chart-of-the-day-chinas-coal-miners-pile-up-record-111-billion-in-profit-101845944.html",language:"eng"},{no:"11",name:"Movie Ticket Sales Suffer Second-Worst Qingming Holiday Performance in a Decade",date:"April 2022",process:"Pitch - Data Clean and Analysis - Data Visualization - Front-end Development - Writing",url:"https://www.caixinglobal.com/2022-04-06/movie-ticket-sales-suffer-second-worst-qingming-holiday-performance-in-a-decade-101866455.html",language:"eng"},{no:"12",name:"Internet, What is Love?",date:"Aug 2019",process:"Pitch - Research - Web Scraping - Data Clean and Analysis - UX Design - Writing",url:"https://h5.thepaper.cn/html/zt/2019/08/love/index.html",language:"chn"}];function ze(i){let e,a,t,n;return e=new Ee({props:{title:i[1],description:i[2],url:i[3],preloadFont:i[0],keywords:i[4]}}),t=new Ne({}),{c(){V(e.$$.fragment),a=C(),V(t.$$.fragment)},l(l){G(e.$$.fragment,l),a=D(l),G(t.$$.fragment,l)},m(l,h){z(e,l,h),k(l,a,h),z(t,l,h),n=!0},p:x,i(l){n||(A(e.$$.fragment,l),A(t.$$.fragment,l),n=!0)},o(l){I(e.$$.fragment,l),I(t.$$.fragment,l),n=!1},d(l){T(e,l),l&&d(a),T(t,l)}}}function Te(i){const e=[],{title:a,description:t,url:n,keywords:l}=fe;return ue("copy",fe),ue("data",Ve),[e,a,t,n,l]}class Oe extends Y{constructor(e){super(),Z(this,e,Te,ze,X,{})}}export{Oe as default};