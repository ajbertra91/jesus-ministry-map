import{l as ie,m as Me,o as w,q as xt,v as _t,w as Ft,x as zt,y as F,z as D,A as et,B as Le,C as u,D as Mt,E as d,F as _,M as Qe,G as Pe,H as s,I as Ut,J as Bt,K as gt,N as Et,O as Ot,P as Dt,Q as bt,T as tt,U as Tt,V as It,W as Gt}from"./index-CahIuepN.js";function yt(e){var t,i,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var g=e.length;for(t=0;t<g;t++)e[t]&&(i=yt(e[t]))&&(r&&(r+=" "),r+=i)}else for(i in e)e[i]&&(r&&(r+=" "),r+=i);return r}function N(){for(var e,t,i=0,r="",g=arguments.length;i<g;i++)(e=arguments[i])&&(t=yt(e))&&(r&&(r+=" "),r+=t);return r}let At={data:""},Pt=e=>{if(typeof window=="object"){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||At},Rt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Lt=/\/\*[^]*?\*\/|  +/g,pt=/\n+/g,Ce=(e,t)=>{let i="",r="",g="";for(let l in e){let a=e[l];l[0]=="@"?l[1]=="i"?i=l+" "+a+";":r+=l[1]=="f"?Ce(a,l):l+"{"+Ce(a,l[1]=="k"?"":t)+"}":typeof a=="object"?r+=Ce(a,t?t.replace(/([^,])+/g,f=>l.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,p=>/&/.test(p)?p.replace(/&/g,f):f?f+" "+p:p)):l):a!=null&&(l=/^--/.test(l)?l:l.replace(/[A-Z]/g,"-$&").toLowerCase(),g+=Ce.p?Ce.p(l,a):l+":"+a+";")}return i+(t&&g?t+"{"+g+"}":g)+r},ve={},kt=e=>{if(typeof e=="object"){let t="";for(let i in e)t+=i+kt(e[i]);return t}return e},Ht=(e,t,i,r,g)=>{let l=kt(e),a=ve[l]||(ve[l]=(p=>{let o=0,n=11;for(;o<p.length;)n=101*n+p.charCodeAt(o++)>>>0;return"go"+n})(l));if(!ve[a]){let p=l!==e?e:(o=>{let n,$,h=[{}];for(;n=Rt.exec(o.replace(Lt,""));)n[4]?h.shift():n[3]?($=n[3].replace(pt," ").trim(),h.unshift(h[0][$]=h[0][$]||{})):h[0][n[1]]=n[2].replace(pt," ").trim();return h[0]})(e);ve[a]=Ce(g?{["@keyframes "+a]:p}:p,i?"":"."+a)}let f=i&&ve.g?ve.g:null;return i&&(ve.g=ve[a]),((p,o,n,$)=>{$?o.data=o.data.replace($,p):o.data.indexOf(p)===-1&&(o.data=n?p+o.data:o.data+p)})(ve[a],t,r,f),a},jt=(e,t,i)=>e.reduce((r,g,l)=>{let a=t[l];if(a&&a.call){let f=a(i),p=f&&f.props&&f.props.className||/^go/.test(f)&&f;a=p?"."+p:f&&typeof f=="object"?f.props?"":Ce(f,""):f===!1?"":f}return r+g+(a??"")},"");function Ue(e){let t=this||{},i=e.call?e(t.p):e;return Ht(i.unshift?i.raw?jt(i,[].slice.call(arguments,1),t.p):i.reduce((r,g)=>Object.assign(r,g&&g.call?g(t.p):g),{}):i,Pt(t.target),t.g,t.o,t.k)}Ue.bind({g:1});Ue.bind({k:1});const Nt=typeof window>"u";function Xe(e){const t={pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"};return e.isFetching&&e.status==="success"?e.isFetching==="beforeLoad"?"purple":"blue":t[e.status]}function Vt(e,t){const i=e.find(r=>r.routeId===t.id);return i?Xe(i):"gray"}function Jt(){const[e,t]=ie(!1);return(Nt?Me:w)(()=>{t(!0)}),e}const Yt=e=>{const t=Object.getOwnPropertyNames(Object(e)),i=typeof e=="bigint"?`${e.toString()}n`:e;try{return JSON.stringify(i,t)}catch{return"unable to stringify"}};function qt(e,t=[i=>i]){return e.map((i,r)=>[i,r]).sort(([i,r],[g,l])=>{for(const a of t){const f=a(i),p=a(g);if(typeof f>"u"){if(typeof p>"u")continue;return 1}if(f!==p)return f>p?1:-1}return r-l}).map(([i])=>i)}const G={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{90:"e5",70:"b3",20:"33"},font:{size:{"2xs":"calc(var(--tsrd-font-size) * 0.625)",xs:"calc(var(--tsrd-font-size) * 0.75)",sm:"calc(var(--tsrd-font-size) * 0.875)",md:"var(--tsrd-font-size)"},lineHeight:{xs:"calc(var(--tsrd-font-size) * 1)",sm:"calc(var(--tsrd-font-size) * 1.25)"},weight:{normal:"400",medium:"500",semibold:"600",bold:"700"},fontFamily:{sans:"ui-sans-serif, Inter, system-ui, sans-serif, sans-serif",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"}},border:{radius:{xs:"calc(var(--tsrd-font-size) * 0.125)",sm:"calc(var(--tsrd-font-size) * 0.25)",md:"calc(var(--tsrd-font-size) * 0.375)",full:"9999px"}},size:{0:"0px",.5:"calc(var(--tsrd-font-size) * 0.125)",1:"calc(var(--tsrd-font-size) * 0.25)",1.5:"calc(var(--tsrd-font-size) * 0.375)",2:"calc(var(--tsrd-font-size) * 0.5)",2.5:"calc(var(--tsrd-font-size) * 0.625)",3:"calc(var(--tsrd-font-size) * 0.75)",3.5:"calc(var(--tsrd-font-size) * 0.875)",4:"calc(var(--tsrd-font-size) * 1)",5:"calc(var(--tsrd-font-size) * 1.25)",8:"calc(var(--tsrd-font-size) * 2)"}},Kt=e=>{const{colors:t,font:i,size:r,alpha:g,border:l}=G,{fontFamily:a,lineHeight:f,size:p}=i,o=e?Ue.bind({target:e}):Ue;return{devtoolsPanelContainer:o`
      direction: ltr;
      position: fixed;
      bottom: 0;
      right: 0;
      z-index: 99999;
      width: 100%;
      max-height: 90%;
      border-top: 1px solid ${t.gray[700]};
      transform-origin: top;
    `,devtoolsPanelContainerVisibility:n=>o`
        visibility: ${n?"visible":"hidden"};
      `,devtoolsPanelContainerResizing:n=>n()?o`
          transition: none;
        `:o`
        transition: all 0.4s ease;
      `,devtoolsPanelContainerAnimation:(n,$)=>n?o`
          pointer-events: auto;
          transform: translateY(0);
        `:o`
        pointer-events: none;
        transform: translateY(${$}px);
      `,logo:o`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      font-family: ${a.sans};
      gap: ${G.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${l.radius.xs};
        outline: 2px solid ${t.blue[800]};
      }
    `,tanstackLogo:o`
      font-size: ${i.size.md};
      font-weight: ${i.weight.bold};
      line-height: ${i.lineHeight.xs};
      white-space: nowrap;
      color: ${t.gray[300]};
    `,routerLogo:o`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #84cc16, #10b981);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,devtoolsPanel:o`
      display: flex;
      font-size: ${p.sm};
      font-family: ${a.sans};
      background-color: ${t.darkGray[700]};
      color: ${t.gray[300]};

      @media (max-width: 700px) {
        flex-direction: column;
      }
      @media (max-width: 600px) {
        font-size: ${p.xs};
      }
    `,dragHandle:o`
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 4px;
      cursor: row-resize;
      z-index: 100000;
      &:hover {
        background-color: ${t.purple[400]}${g[90]};
      }
    `,firstContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,routerExplorerContainer:o`
      overflow-y: auto;
      flex: 1;
    `,routerExplorer:o`
      padding: ${G.size[2]};
    `,row:o`
      display: flex;
      align-items: center;
      padding: ${G.size[2]} ${G.size[2.5]};
      gap: ${G.size[2.5]};
      border-bottom: ${t.darkGray[500]} 1px solid;
      align-items: center;
    `,detailsHeader:o`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${t.darkGray[600]};
      padding: 0px ${G.size[2]};
      font-weight: ${i.weight.medium};
      font-size: ${i.size.xs};
      min-height: ${G.size[8]};
      line-height: ${i.lineHeight.xs};
      text-align: left;
      display: flex;
      align-items: center;
    `,maskedBadge:o`
      background: ${t.yellow[900]}${g[70]};
      color: ${t.yellow[300]};
      display: inline-block;
      padding: ${G.size[0]} ${G.size[2.5]};
      border-radius: ${l.radius.full};
      font-size: ${i.size.xs};
      font-weight: ${i.weight.normal};
      border: 1px solid ${t.yellow[300]};
    `,maskedLocation:o`
      color: ${t.yellow[300]};
    `,detailsContent:o`
      padding: ${G.size[1.5]} ${G.size[2]};
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: ${i.size.xs};
    `,routeMatchesToggle:o`
      display: flex;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      border-radius: ${l.radius.sm};
      overflow: hidden;
    `,routeMatchesToggleBtn:(n,$)=>{const C=[o`
        appearance: none;
        border: none;
        font-size: 12px;
        padding: 4px 8px;
        background: transparent;
        cursor: pointer;
        font-family: ${a.sans};
        font-weight: ${i.weight.medium};
      `];if(n){const m=o`
          background: ${t.darkGray[400]};
          color: ${t.gray[300]};
        `;C.push(m)}else{const m=o`
          color: ${t.gray[500]};
          background: ${t.darkGray[800]}${g[20]};
        `;C.push(m)}return $&&C.push(o`
          border-right: 1px solid ${G.colors.gray[500]};
        `),C},detailsHeaderInfo:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
      align-items: center;
      font-weight: ${i.weight.normal};
      color: ${t.gray[400]};
    `,matchRow:n=>{const h=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        cursor: pointer;
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${p.xs};
        color: ${t.gray[300]};
      `];if(n){const C=o`
          background: ${t.darkGray[500]};
        `;h.push(C)}return h},matchIndicator:n=>{const h=[o`
        flex: 0 0 auto;
        width: ${r[3]};
        height: ${r[3]};
        background: ${t[n][900]};
        border: 1px solid ${t[n][500]};
        border-radius: ${l.radius.full};
        transition: all 0.25s ease-out;
        box-sizing: border-box;
      `];if(n==="gray"){const C=o`
          background: ${t.gray[700]};
          border-color: ${t.gray[400]};
        `;h.push(C)}return h},matchID:o`
      flex: 1;
      line-height: ${f.xs};
    `,ageTicker:n=>{const h=[o`
        display: flex;
        gap: ${r[1]};
        font-size: ${p.xs};
        color: ${t.gray[400]};
        font-variant-numeric: tabular-nums;
        line-height: ${f.xs};
      `];if(n){const C=o`
          color: ${t.yellow[400]};
        `;h.push(C)}return h},secondContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      border-right: 1px solid ${t.gray[700]};
      display: flex;
      flex-direction: column;
    `,thirdContainer:o`
      flex: 1 1 500px;
      overflow: auto;
      display: flex;
      flex-direction: column;
      height: 100%;
      border-right: 1px solid ${t.gray[700]};

      @media (max-width: 700px) {
        border-top: 2px solid ${t.gray[700]};
      }
    `,fourthContainer:o`
      flex: 1 1 500px;
      min-height: 40%;
      max-height: 100%;
      overflow: auto;
      display: flex;
      flex-direction: column;
    `,routesContainer:o`
      overflow-x: auto;
      overflow-y: visible;
    `,routesRowContainer:(n,$)=>{const C=[o`
        display: flex;
        border-bottom: 1px solid ${t.darkGray[400]};
        align-items: center;
        padding: ${r[1]} ${r[2]};
        gap: ${r[2]};
        font-size: ${p.xs};
        color: ${t.gray[300]};
        cursor: ${$?"pointer":"default"};
        line-height: ${f.xs};
      `];if(n){const m=o`
          background: ${t.darkGray[500]};
        `;C.push(m)}return C},routesRow:n=>{const h=[o`
        flex: 1 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: ${p.xs};
        line-height: ${f.xs};
      `];if(!n){const C=o`
          color: ${t.gray[400]};
        `;h.push(C)}return h},routesRowInner:o`
      display: 'flex';
      align-items: 'center';
      flex-grow: 1;
      min-width: 0;
    `,routeParamInfo:o`
      color: ${t.gray[400]};
      font-size: ${p.xs};
      line-height: ${f.xs};
    `,nestedRouteRow:n=>o`
        margin-left: ${n?0:r[3.5]};
        border-left: ${n?"":`solid 1px ${t.gray[700]}`};
      `,code:o`
      font-size: ${p.xs};
      line-height: ${f.xs};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,matchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
    `,cachedMatchesContainer:o`
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyContainer:o`
      display: flex;
      flex: 1 1 auto;
      overflow-y: auto;
      max-height: 50%;
    `,historyOverflowContainer:o`
      padding: ${r[1]} ${r[2]};
      font-size: ${G.font.size.xs};
    `,maskedBadgeContainer:o`
      flex: 1;
      justify-content: flex-end;
      display: flex;
    `,matchDetails:o`
      display: flex;
      flex-direction: column;
      padding: ${G.size[2]};
      font-size: ${G.font.size.xs};
      color: ${G.colors.gray[300]};
      line-height: ${G.font.lineHeight.sm};
    `,matchStatus:(n,$)=>{const C=$&&n==="success"?$==="beforeLoad"?"purple":"blue":{pending:"yellow",success:"green",error:"red",notFound:"purple",redirected:"gray"}[n];return o`
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        border-radius: ${G.border.radius.sm};
        font-weight: ${G.font.weight.normal};
        background-color: ${G.colors[C][900]}${G.alpha[90]};
        color: ${G.colors[C][300]};
        border: 1px solid ${G.colors[C][600]};
        margin-bottom: ${G.size[2]};
        transition: all 0.25s ease-out;
      `},matchDetailsInfo:o`
      display: flex;
      justify-content: flex-end;
      flex: 1;
    `,matchDetailsInfoLabel:o`
      display: flex;
    `,mainCloseBtn:o`
      background: ${t.darkGray[700]};
      padding: ${r[1]} ${r[2]} ${r[1]} ${r[1.5]};
      border-radius: ${l.radius.md};
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      gap: 8px;
      align-items: center;
      border: 1px solid ${t.gray[500]};
      font-size: ${i.size.xs};
      cursor: pointer;
      transition: all 0.25s ease-out;

      &:hover {
        background: ${t.darkGray[500]};
      }
    `,mainCloseBtnPosition:n=>o`
        ${n==="top-left"?`top: ${r[2]}; left: ${r[2]};`:""}
        ${n==="top-right"?`top: ${r[2]}; right: ${r[2]};`:""}
        ${n==="bottom-left"?`bottom: ${r[2]}; left: ${r[2]};`:""}
        ${n==="bottom-right"?`bottom: ${r[2]}; right: ${r[2]};`:""}
      `,mainCloseBtnAnimation:n=>n?o`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `:o`
          opacity: 1;
          pointer-events: auto;
          visibility: visible;
        `,routerLogoCloseButton:o`
      font-weight: ${i.weight.semibold};
      font-size: ${i.size.xs};
      background: linear-gradient(to right, #98f30c, #00f4a3);
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,mainCloseBtnDivider:o`
      width: 1px;
      background: ${G.colors.gray[600]};
      height: 100%;
      border-radius: 999999px;
      color: transparent;
    `,mainCloseBtnIconContainer:o`
      position: relative;
      width: ${r[5]};
      height: ${r[5]};
      background: pink;
      border-radius: 999999px;
      overflow: hidden;
    `,mainCloseBtnIconOuter:o`
      width: ${r[5]};
      height: ${r[5]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      filter: blur(3px) saturate(1.8) contrast(2);
    `,mainCloseBtnIconInner:o`
      width: ${r[4]};
      height: ${r[4]};
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `,panelCloseBtn:o`
      position: absolute;
      cursor: pointer;
      z-index: 100001;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${t.darkGray[700]};
      &:hover {
        background-color: ${t.darkGray[500]};
      }

      top: 0;
      right: ${r[2]};
      transform: translate(0, -100%);
      border-right: ${t.darkGray[300]} 1px solid;
      border-left: ${t.darkGray[300]} 1px solid;
      border-top: ${t.darkGray[300]} 1px solid;
      border-bottom: none;
      border-radius: ${l.radius.sm} ${l.radius.sm} 0px 0px;
      padding: ${r[1]} ${r[1.5]} ${r[.5]} ${r[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${r[2.5]};
        height: ${r[1.5]};
        width: calc(100% + ${r[5]});
      }
    `,panelCloseBtnIcon:o`
      color: ${t.gray[400]};
      width: ${r[2]};
      height: ${r[2]};
    `,navigateButton:o`
      background: none;
      border: none;
      padding: 0 0 0 4px;
      margin: 0;
      color: ${t.gray[400]};
      font-size: ${p.md};
      cursor: pointer;
      line-height: 1;
      vertical-align: middle;
      margin-right: 0.5ch;
      flex-shrink: 0;
      &:hover {
        color: ${t.blue[300]};
      }
    `}};function Be(){const e=xt(bt),[t]=ie(Kt(e));return t}const Wt=e=>{try{const t=localStorage.getItem(e);return typeof t=="string"?JSON.parse(t):void 0}catch{return}};function We(e,t){const[i,r]=ie();return Me(()=>{const l=Wt(e);r(typeof l>"u"||l===null?typeof t=="function"?t():t:l)}),[i,l=>{r(a=>{let f=l;typeof l=="function"&&(f=l(a));try{localStorage.setItem(e,JSON.stringify(f))}catch{}return f})}]}var Qt=D('<span><svg xmlns=http://www.w3.org/2000/svg width=12 height=12 fill=none viewBox="0 0 24 24"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=2 d="M9 18l6-6-6-6">'),Ve=D("<div>"),Zt=D("<button><span> "),Xt=D("<div><div><button> [<!> ... <!>]"),er=D("<button><span></span> 🔄 "),tr=D("<span>:"),rr=D("<span>");const ht=({expanded:e,style:t={}})=>{const i=Ct();return(()=>{var r=Qt(),g=r.firstChild;return w(l=>{var a=i().expander,f=N(i().expanderIcon(e));return a!==l.e&&d(r,l.e=a),f!==l.t&&s(g,"class",l.t=f),l},{e:void 0,t:void 0}),r})()};function ir(e,t){if(t<1)return[];let i=0;const r=[];for(;i<e.length;)r.push(e.slice(i,i+t)),i=i+t;return r}function nr(e){return Symbol.iterator in e}function ze({value:e,defaultExpanded:t,pageSize:i=100,filterSubEntries:r,...g}){const[l,a]=ie(!!t),f=()=>a(j=>!j),p=F(()=>typeof e()),o=F(()=>{let j=[];const re=z=>{const v=t===!0?{[z.label]:!0}:t?.[z.label];return{...z,value:()=>z.value,defaultExpanded:v}};return Array.isArray(e())?j=e().map((z,v)=>re({label:v.toString(),value:z})):e()!==null&&typeof e()=="object"&&nr(e())&&typeof e()[Symbol.iterator]=="function"?j=Array.from(e(),(z,v)=>re({label:v.toString(),value:z})):typeof e()=="object"&&e()!==null&&(j=Object.entries(e()).map(([z,v])=>re({label:z,value:v}))),r?r(j):j}),n=F(()=>ir(o(),i)),[$,h]=ie([]),[C,m]=ie(void 0),T=Ct(),H=()=>{m(e()())},W=j=>_(ze,Le({value:e,filterSubEntries:r},g,j));return(()=>{var j=Ve();return u(j,(()=>{var re=F(()=>!!n().length);return()=>re()?[(()=>{var z=Zt(),v=z.firstChild,k=v.firstChild;return z.$$click=()=>f(),u(z,_(ht,{get expanded(){return l()??!1}}),v),u(z,()=>g.label,v),u(v,()=>String(p).toLowerCase()==="iterable"?"(Iterable) ":"",k),u(v,()=>o().length,k),u(v,()=>o().length>1?"items":"item",null),w(X=>{var ee=T().expandButton,Z=T().info;return ee!==X.e&&d(z,X.e=ee),Z!==X.t&&d(v,X.t=Z),X},{e:void 0,t:void 0}),z})(),F(()=>F(()=>!!(l()??!1))()?F(()=>n().length===1)()?(()=>{var z=Ve();return u(z,()=>o().map((v,k)=>W(v))),w(()=>d(z,T().subEntries)),z})():(()=>{var z=Ve();return u(z,()=>n().map((v,k)=>(()=>{var X=Xt(),ee=X.firstChild,Z=ee.firstChild,ce=Z.firstChild,fe=ce.nextSibling,$e=fe.nextSibling,A=$e.nextSibling;return A.nextSibling,Z.$$click=()=>h(U=>U.includes(k)?U.filter(Y=>Y!==k):[...U,k]),u(Z,_(ht,{get expanded(){return $().includes(k)}}),ce),u(Z,k*i,fe),u(Z,k*i+i-1,A),u(ee,(()=>{var U=F(()=>!!$().includes(k));return()=>U()?(()=>{var Y=Ve();return u(Y,()=>v.map(V=>W(V))),w(()=>d(Y,T().subEntries)),Y})():null})(),null),w(U=>{var Y=T().entry,V=N(T().labelButton,"labelButton");return Y!==U.e&&d(ee,U.e=Y),V!==U.t&&d(Z,U.t=V),U},{e:void 0,t:void 0}),X})())),w(()=>d(z,T().subEntries)),z})():null)]:(()=>{var z=F(()=>p()==="function");return()=>z()?_(ze,{get label(){return(()=>{var v=er(),k=v.firstChild;return v.$$click=H,u(k,()=>g.label),w(()=>d(v,T().refreshValueBtn)),v})()},value:C,defaultExpanded:{}}):[(()=>{var v=tr(),k=v.firstChild;return u(v,()=>g.label,k),v})()," ",(()=>{var v=rr();return u(v,()=>Yt(e())),w(()=>d(v,T().value)),v})()]})()})()),w(()=>d(j,T().entry)),j})()}const or=e=>{const{colors:t,font:i,size:r}=G,{fontFamily:g,lineHeight:l,size:a}=i,f=e?Ue.bind({target:e}):Ue;return{entry:f`
      font-family: ${g.mono};
      font-size: ${a.xs};
      line-height: ${l.sm};
      outline: none;
      word-break: break-word;
    `,labelButton:f`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,expander:f`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${r[3]};
      height: ${r[3]};
      padding-left: 3px;
      box-sizing: content-box;
    `,expanderIcon:p=>p?f`
          transform: rotate(90deg);
          transition: transform 0.1s ease;
        `:f`
        transform: rotate(0deg);
        transition: transform 0.1s ease;
      `,expandButton:f`
      display: flex;
      gap: ${r[1]};
      align-items: center;
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      background: transparent;
      border: none;
      padding: 0;
    `,value:f`
      color: ${t.purple[400]};
    `,subEntries:f`
      margin-left: ${r[2]};
      padding-left: ${r[2]};
      border-left: 2px solid ${t.darkGray[400]};
    `,info:f`
      color: ${t.gray[500]};
      font-size: ${a["2xs"]};
      padding-left: ${r[1]};
    `,refreshValueBtn:f`
      appearance: none;
      border: 0;
      cursor: pointer;
      background: transparent;
      color: inherit;
      padding: 0;
      font-family: ${g.mono};
      font-size: ${a.xs};
    `}};function Ct(){const e=xt(bt),[t]=ie(or(e));return t}tt(["click"]);var lr=D("<div><div></div><div>/</div><div></div><div>/</div><div>");function Ze(e){const t=["s","min","h","d"],i=[e/1e3,e/6e4,e/36e5,e/864e5];let r=0;for(let l=1;l<i.length&&!(i[l]<1);l++)r=l;return new Intl.NumberFormat(navigator.language,{compactDisplay:"short",notation:"compact",maximumFractionDigits:0}).format(i[r])+t[r]}function Je({match:e,router:t}){const i=Be();if(!e)return null;const r=t().looseRoutesById[e.routeId];if(!r.options.loader)return null;const g=Date.now()-e.updatedAt,l=r.options.staleTime??t().options.defaultStaleTime??0,a=r.options.gcTime??t().options.defaultGcTime??1800*1e3;return(()=>{var f=lr(),p=f.firstChild,o=p.nextSibling,n=o.nextSibling,$=n.nextSibling,h=$.nextSibling;return u(p,()=>Ze(g)),u(n,()=>Ze(l)),u(h,()=>Ze(a)),w(()=>d(f,N(i().ageTicker(g>l)))),f})()}var sr=D("<button type=button>➔");function Ye({to:e,params:t,search:i,router:r}){const g=Be();return(()=>{var l=sr();return l.$$click=a=>{a.stopPropagation(),r().navigate({to:e,params:t,search:i})},s(l,"title",`Navigate to ${e}`),w(()=>d(l,g().navigateButton)),l})()}tt(["click"]);var ar=D("<button><div>TANSTACK</div><div>TanStack Router v1"),dr=D("<div><div>"),cr=D("<code> "),Re=D("<code>"),fr=D("<div><div role=button><div>"),qe=D("<div>"),ur=D("<div><ul>"),gr=D('<div><button><svg xmlns=http://www.w3.org/2000/svg width=10 height=6 fill=none viewBox="0 0 10 6"><path stroke=currentColor stroke-linecap=round stroke-linejoin=round stroke-width=1.667 d="M1 1l4 4 4-4"></path></svg></button><div><div></div><div><div></div></div></div><div><div><div><span>Pathname</span></div><div><code></code></div><div><div><button type=button>Routes</button><button type=button>Matches</button><button type=button>History</button></div><div><div>age / staleTime / gcTime</div></div></div><div>'),pr=D("<div><span>masked"),vt=D("<div role=button><div>"),hr=D("<li><div>"),vr=D("<li>This panel displays the most recent 15 navigations."),$r=D("<div><div><div>Cached Matches</div><div>age / staleTime / gcTime</div></div><div>"),mr=D("<div><div>Match Details</div><div><div><div><div></div></div><div><div>ID:</div><div><code></code></div></div><div><div>State:</div><div></div></div><div><div>Last Updated:</div><div></div></div></div></div><div>Explorer</div><div>"),xr=D("<div>Loader Data"),br=D("<div><div><span>Search Params</span></div><div>"),yr=D("<span style=margin-left:0.5rem;>"),kr=D('<button type=button style=cursor:pointer; aria-label="Copy value to clipboard">');const $t=15;function Cr(e){const{className:t,...i}=e,r=Be();return(()=>{var g=ar(),l=g.firstChild,a=l.nextSibling;return et(g,Le(i,{get class(){return N(r().logo,t?t():"")}}),!1,!0),w(f=>{var p=r().tanstackLogo,o=r().routerLogo;return p!==f.e&&d(l,f.e=p),o!==f.t&&d(a,f.t=o),f},{e:void 0,t:void 0}),g})()}function Ke(e){return(()=>{var t=dr(),i=t.firstChild;return t.style.setProperty("display","flex"),t.style.setProperty("align-items","center"),t.style.setProperty("width","100%"),u(t,()=>e.left,i),i.style.setProperty("flex-grow","1"),i.style.setProperty("min-width","0"),u(i,()=>e.children),u(t,()=>e.right,null),w(()=>d(t,e.class)),t})()}function wt({routerState:e,router:t,route:i,isRoot:r,activeId:g,setActiveId:l}){const a=Be(),f=F(()=>e().pendingMatches||e().matches),p=F(()=>e().matches.find($=>$.routeId===i.id)),o=F(()=>{try{if(p()?.params){const $=p()?.params,h=i.path||gt(i.id);if(h.startsWith("$")){const C=h.slice(1);if($[C])return`(${$[C]})`}}return""}catch{return""}}),n=F(()=>{if(r||!i.path)return;const $=Object.assign({},...f().map(C=>C.params)),h=Et({path:i.fullPath,params:$,leaveWildcards:!1,leaveParams:!1,decodeCharMap:t().pathParamsDecodeCharMap});return h.isMissingParams?void 0:h.interpolatedPath});return(()=>{var $=fr(),h=$.firstChild,C=h.firstChild;return h.$$click=()=>{p()&&l(g()===i.id?"":i.id)},u(h,_(Ke,{get class(){return N(a().routesRow(!!p()))},get left(){return _(Ot,{get when(){return n()},children:m=>_(Ye,{get to(){return m()},router:t})})},get right(){return _(Je,{get match(){return p()},router:t})},get children(){return[(()=>{var m=cr(),T=m.firstChild;return u(m,()=>r?Pe:i.path||gt(i.id),T),w(()=>d(m,a().code)),m})(),(()=>{var m=Re();return u(m,o),w(()=>d(m,a().routeParamInfo)),m})()]}}),null),u($,(()=>{var m=F(()=>!!i.children?.length);return()=>m()?(()=>{var T=qe();return u(T,()=>[...i.children].sort((H,W)=>H.rank-W.rank).map(H=>_(wt,{routerState:e,router:t,route:H,activeId:g,setActiveId:l}))),w(()=>d(T,a().nestedRouteRow(!!r))),T})():null})(),null),w(m=>{var T=`Open match details for ${i.id}`,H=N(a().routesRowContainer(i.id===g(),!!p())),W=N(a().matchIndicator(Vt(f(),i)));return T!==m.e&&s(h,"aria-label",m.e=T),H!==m.t&&d(h,m.t=H),W!==m.a&&d(C,m.a=W),m},{e:void 0,t:void 0,a:void 0}),$})()}const wr=function({...t}){const{isOpen:i=!0,setIsOpen:r,handleDragStart:g,router:l,routerState:a,shadowDOMTarget:f,...p}=t,{onCloseClick:o}=_t(),n=Be(),{className:$,style:h,...C}=p;Ft(l);const[m,T]=We("tanstackRouterDevtoolsActiveTab","routes"),[H,W]=We("tanstackRouterDevtoolsActiveRouteId",""),[j,re]=ie([]),[z,v]=ie(!1);Me(()=>{const A=a().matches,U=A[A.length-1];if(!U)return;const Y=zt(()=>j()),V=Y[0],ue=V&&V.pathname===U.pathname&&JSON.stringify(V.search??{})===JSON.stringify(U.search??{});(!V||!ue)&&(Y.length>=$t&&v(!0),re(ge=>{const O=[U,...ge];return O.splice($t),O}))});const k=F(()=>[...a().pendingMatches??[],...a().matches,...a().cachedMatches].find(U=>U.routeId===H()||U.id===H())),X=F(()=>Object.keys(a().location.search).length),ee=F(()=>({...l(),state:a()})),Z=F(()=>Object.fromEntries(qt(Object.keys(ee()),["state","routesById","routesByPath","flatRoutes","options","manifest"].map(A=>U=>U!==A)).map(A=>[A,ee()[A]]).filter(A=>typeof A[1]!="function"&&!["__store","basepath","injectedHtml","subscribers","latestLoadPromise","navigateTimeout","resetNextScroll","tempLocationKey","latestLocation","routeTree","history"].includes(A[0])))),ce=F(()=>k()?.loaderData),fe=F(()=>k()),$e=F(()=>a().location.search);return(()=>{var A=gr(),U=A.firstChild,Y=U.firstChild,V=U.nextSibling,ue=V.firstChild,ge=ue.nextSibling,O=ge.firstChild,L=V.nextSibling,q=L.firstChild,Q=q.firstChild;Q.firstChild;var te=Q.nextSibling,ye=te.firstChild,R=te.nextSibling,oe=R.firstChild,le=oe.firstChild,pe=le.nextSibling,se=pe.nextSibling,we=oe.nextSibling,Se=R.nextSibling;return et(A,Le({get class(){return N(n().devtoolsPanel,"TanStackRouterDevtoolsPanel",$?$():"")},get style(){return h?h():""}},C),!1,!0),u(A,g?(()=>{var c=qe();return Mt(c,"mousedown",g,!0),w(()=>d(c,n().dragHandle)),c})():null,U),U.$$click=c=>{r&&r(!1),o(c)},u(ue,_(Cr,{"aria-hidden":!0,onClick:c=>{r&&r(!1),o(c)}})),u(O,_(ze,{label:"Router",value:Z,defaultExpanded:{state:{},context:{},options:{}},filterSubEntries:c=>c.filter(x=>typeof x.value()!="function")})),u(Q,(()=>{var c=F(()=>!!a().location.maskedLocation);return()=>c()?(()=>{var x=pr(),E=x.firstChild;return w(B=>{var M=n().maskedBadgeContainer,S=n().maskedBadge;return M!==B.e&&d(x,B.e=M),S!==B.t&&d(E,B.t=S),B},{e:void 0,t:void 0}),x})():null})(),null),u(ye,()=>a().location.pathname),u(te,(()=>{var c=F(()=>!!a().location.maskedLocation);return()=>c()?(()=>{var x=Re();return u(x,()=>a().location.maskedLocation?.pathname),w(()=>d(x,n().maskedLocation)),x})():null})(),null),le.$$click=()=>{T("routes")},pe.$$click=()=>{T("matches")},se.$$click=()=>{T("history")},u(Se,_(Bt,{get children(){return[_(Qe,{get when(){return m()==="routes"},get children(){return _(wt,{routerState:a,router:l,get route(){return l().routeTree},isRoot:!0,activeId:H,setActiveId:W})}}),_(Qe,{get when(){return m()==="matches"},get children(){var c=qe();return u(c,()=>(a().pendingMatches?.length?a().pendingMatches:a().matches)?.map((x,E)=>(()=>{var B=vt(),M=B.firstChild;return B.$$click=()=>W(H()===x.id?"":x.id),u(B,_(Ke,{get left(){return _(Ye,{get to(){return x.pathname},get params(){return x.params},get search(){return x.search},router:l})},get right(){return _(Je,{match:x,router:l})},get children(){var S=Re();return u(S,()=>`${x.routeId===Pe?Pe:x.pathname}`),w(()=>d(S,n().matchID)),S}}),null),w(S=>{var b=`Open match details for ${x.id}`,I=N(n().matchRow(x===k())),K=N(n().matchIndicator(Xe(x)));return b!==S.e&&s(B,"aria-label",S.e=b),I!==S.t&&d(B,S.t=I),K!==S.a&&d(M,S.a=K),S},{e:void 0,t:void 0,a:void 0}),B})())),c}}),_(Qe,{get when(){return m()==="history"},get children(){var c=ur(),x=c.firstChild;return u(x,_(Ut,{get each(){return j()},children:(E,B)=>(()=>{var M=hr(),S=M.firstChild;return u(M,_(Ke,{get left(){return _(Ye,{get to(){return E.pathname},get params(){return E.params},get search(){return E.search},router:l})},get right(){return _(Je,{match:E,router:l})},get children(){var b=Re();return u(b,()=>`${E.routeId===Pe?Pe:E.pathname}`),w(()=>d(b,n().matchID)),b}}),null),w(b=>{var I=N(n().matchRow(E===k())),K=N(n().matchIndicator(B()===0?"green":"gray"));return I!==b.e&&d(M,b.e=I),K!==b.t&&d(S,b.t=K),b},{e:void 0,t:void 0}),M})()}),null),u(x,(()=>{var E=F(()=>!!z());return()=>E()?(()=>{var B=vr();return w(()=>d(B,n().historyOverflowContainer)),B})():null})(),null),c}})]}})),u(L,(()=>{var c=F(()=>!!a().cachedMatches.length);return()=>c()?(()=>{var x=$r(),E=x.firstChild,B=E.firstChild,M=B.nextSibling,S=E.nextSibling;return u(S,()=>a().cachedMatches.map(b=>(()=>{var I=vt(),K=I.firstChild;return I.$$click=()=>W(H()===b.id?"":b.id),u(I,_(Ke,{get left(){return _(Ye,{get to(){return b.pathname},get params(){return b.params},get search(){return b.search},router:l})},get right(){return _(Je,{match:b,router:l})},get children(){var P=Re();return u(P,()=>`${b.id}`),w(()=>d(P,n().matchID)),P}}),null),w(P=>{var ae=`Open match details for ${b.id}`,ne=N(n().matchRow(b===k())),de=N(n().matchIndicator(Xe(b)));return ae!==P.e&&s(I,"aria-label",P.e=ae),ne!==P.t&&d(I,P.t=ne),de!==P.a&&d(K,P.a=de),P},{e:void 0,t:void 0,a:void 0}),I})())),w(b=>{var I=n().cachedMatchesContainer,K=n().detailsHeader,P=n().detailsHeaderInfo;return I!==b.e&&d(x,b.e=I),K!==b.t&&d(E,b.t=K),P!==b.a&&d(M,b.a=P),b},{e:void 0,t:void 0,a:void 0}),x})():null})(),null),u(A,(()=>{var c=F(()=>!!(k()&&k()?.status));return()=>c()?(()=>{var x=mr(),E=x.firstChild,B=E.nextSibling,M=B.firstChild,S=M.firstChild,b=S.firstChild,I=S.nextSibling,K=I.firstChild,P=K.nextSibling,ae=P.firstChild,ne=I.nextSibling,de=ne.firstChild,ke=de.nextSibling,me=ne.nextSibling,_e=me.firstChild,he=_e.nextSibling,xe=B.nextSibling,be=xe.nextSibling;return u(b,(()=>{var y=F(()=>!!(k()?.status==="success"&&k()?.isFetching));return()=>y()?"fetching":k()?.status})()),u(ae,()=>k()?.id),u(ke,(()=>{var y=F(()=>!!a().pendingMatches?.find(J=>J.id===k()?.id));return()=>y()?"Pending":a().matches.find(J=>J.id===k()?.id)?"Active":"Cached"})()),u(he,(()=>{var y=F(()=>!!k()?.updatedAt);return()=>y()?new Date(k()?.updatedAt).toLocaleTimeString():"N/A"})()),u(x,(()=>{var y=F(()=>!!ce());return()=>y()?[(()=>{var J=xr();return w(()=>d(J,n().detailsHeader)),J})(),(()=>{var J=qe();return u(J,_(ze,{label:"loaderData",value:ce,defaultExpanded:{}})),w(()=>d(J,n().detailsContent)),J})()]:null})(),xe),u(be,_(ze,{label:"Match",value:fe,defaultExpanded:{}})),w(y=>{var J=n().thirdContainer,He=n().detailsHeader,Fe=n().matchDetails,je=n().matchStatus(k()?.status,k()?.isFetching),Ee=n().matchDetailsInfoLabel,Ne=n().matchDetailsInfo,Oe=n().matchDetailsInfoLabel,De=n().matchDetailsInfo,Te=n().matchDetailsInfoLabel,Ie=n().matchDetailsInfo,Ge=n().detailsHeader,Ae=n().detailsContent;return J!==y.e&&d(x,y.e=J),He!==y.t&&d(E,y.t=He),Fe!==y.a&&d(M,y.a=Fe),je!==y.o&&d(S,y.o=je),Ee!==y.i&&d(I,y.i=Ee),Ne!==y.n&&d(P,y.n=Ne),Oe!==y.s&&d(ne,y.s=Oe),De!==y.h&&d(ke,y.h=De),Te!==y.r&&d(me,y.r=Te),Ie!==y.d&&d(he,y.d=Ie),Ge!==y.l&&d(xe,y.l=Ge),Ae!==y.u&&d(be,y.u=Ae),y},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),x})():null})(),null),u(A,(()=>{var c=F(()=>!!X());return()=>c()?(()=>{var x=br(),E=x.firstChild;E.firstChild;var B=E.nextSibling;return u(E,typeof navigator<"u"?(()=>{var M=yr();return u(M,_(Sr,{getValue:()=>{const S=a().location.search;return JSON.stringify(S)}})),M})():null,null),u(B,_(ze,{value:$e,get defaultExpanded(){return Object.keys(a().location.search).reduce((M,S)=>(M[S]={},M),{})}})),w(M=>{var S=n().fourthContainer,b=n().detailsHeader,I=n().detailsContent;return S!==M.e&&d(x,M.e=S),b!==M.t&&d(E,M.t=b),I!==M.a&&d(B,M.a=I),M},{e:void 0,t:void 0,a:void 0}),x})():null})(),null),w(c=>{var x=n().panelCloseBtn,E=n().panelCloseBtnIcon,B=n().firstContainer,M=n().row,S=n().routerExplorerContainer,b=n().routerExplorer,I=n().secondContainer,K=n().matchesContainer,P=n().detailsHeader,ae=n().detailsContent,ne=n().detailsHeader,de=n().routeMatchesToggle,ke=m()==="routes",me=N(n().routeMatchesToggleBtn(m()==="routes",!0)),_e=m()==="matches",he=N(n().routeMatchesToggleBtn(m()==="matches",!0)),xe=m()==="history",be=N(n().routeMatchesToggleBtn(m()==="history",!1)),y=n().detailsHeaderInfo,J=N(n().routesContainer);return x!==c.e&&d(U,c.e=x),E!==c.t&&s(Y,"class",c.t=E),B!==c.a&&d(V,c.a=B),M!==c.o&&d(ue,c.o=M),S!==c.i&&d(ge,c.i=S),b!==c.n&&d(O,c.n=b),I!==c.s&&d(L,c.s=I),K!==c.h&&d(q,c.h=K),P!==c.r&&d(Q,c.r=P),ae!==c.d&&d(te,c.d=ae),ne!==c.l&&d(R,c.l=ne),de!==c.u&&d(oe,c.u=de),ke!==c.c&&(le.disabled=c.c=ke),me!==c.w&&d(le,c.w=me),_e!==c.m&&(pe.disabled=c.m=_e),he!==c.f&&d(pe,c.f=he),xe!==c.y&&(se.disabled=c.y=xe),be!==c.g&&d(se,c.g=be),y!==c.p&&d(we,c.p=y),J!==c.b&&d(Se,c.b=J),c},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),A})()};function Sr({getValue:e}){const[t,i]=ie(!1);let r=null;const g=async()=>{if(typeof navigator>"u"||!navigator.clipboard?.writeText){console.warn("TanStack Router Devtools: Clipboard API unavailable");return}try{const l=e();await navigator.clipboard.writeText(l),i(!0),r&&clearTimeout(r),r=setTimeout(()=>i(!1),2500)}catch(l){console.error("TanStack Router Devtools: Failed to copy",l)}};return Dt(()=>{r&&clearTimeout(r)}),(()=>{var l=kr();return l.$$click=g,u(l,()=>t()?"✅":"📋"),w(()=>s(l,"title",t()?"Copied!":"Copy")),l})()}tt(["click","mousedown"]);var _r=D('<svg xmlns=http://www.w3.org/2000/svg enable-background="new 0 0 634 633"viewBox="0 0 634 633"><g transform=translate(1)><linearGradient x1=-641.486 x2=-641.486 y1=856.648 y2=855.931 gradientTransform="matrix(633 0 0 -633 406377 542258)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#6bdaff></stop><stop offset=0.319 stop-color=#f9ffb5></stop><stop offset=0.706 stop-color=#ffa770></stop><stop offset=1 stop-color=#ff7373></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5 fill-rule=evenodd clip-rule=evenodd></circle><defs><filter width=454 height=396.9 x=-137.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=412 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=412 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=610.5 fill=#015064 fill-rule=evenodd stroke=#00CFE2 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=450 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=450 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=648.5 fill=#015064 fill-rule=evenodd stroke=#00A8B8 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=-137.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=-137.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=89.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=454 height=396.9 x=316.5 y=486 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=454 height=396.9 x=316.5 y=486 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><ellipse cx=543.5 cy=684.5 fill=#015064 fill-rule=evenodd stroke=#007782 stroke-width=25 clip-rule=evenodd rx=214.5 ry=186></ellipse><defs><filter width=176.9 height=129.3 x=272.2 y=308 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=176.9 height=129.3 x=272.2 y=308 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><path fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11 d="M436 403.2l-5 28.6m-140-90.3l-10.9 62m52.8-19.4l-4.3 27.1"></path><linearGradient x1=-645.656 x2=-646.499 y1=854.878 y2=854.788 gradientTransform="matrix(-184.159 -32.4722 11.4608 -64.9973 -128419.844 34938.836)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ee2700></stop><stop offset=1 stop-color=#ff008e></stop></linearGradient><path fill-rule=evenodd d="M344.1 363l97.7 17.2c5.8 2.1 8.2 6.2 7.1 12.1-1 5.9-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1.8-12.8 3.7-3.7 8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd></path><path fill=#D8D8D8 fill-rule=evenodd stroke=#FFF stroke-linecap=round stroke-linejoin=bevel stroke-width=7 d="M428.3 384.5l.9-6.5m-33.9 1.5l.9-6.5m-34 .5l.9-6.1m-38.9-16.1l4.2-3.9m-25.2-16.1l4.2-3.9"clip-rule=evenodd></path></g><defs><filter width=280.6 height=317.4 x=73.2 y=113.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=280.6 height=317.4 x=73.2 y=113.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><linearGradient x1=-646.8 x2=-646.8 y1=854.844 y2=853.844 gradientTransform="matrix(-100.1751 48.8587 -97.9753 -200.879 19124.773 203538.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#a17500></stop><stop offset=1 stop-color=#5d2100></stop></linearGradient><path fill-rule=evenodd d="M192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.2-2.9 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6-3.4-18.7-10.8-51.8-22.2-99.6l-25.3 4.6"clip-rule=evenodd></path><linearGradient x1=-635.467 x2=-635.467 y1=852.115 y2=851.115 gradientTransform="matrix(92.6873 4.8575 2.0257 -38.6535 57323.695 36176.047)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd></path><linearGradient x1=-636.573 x2=-636.573 y1=855.444 y2=854.444 gradientTransform="matrix(109.9945 5.7646 6.3597 -121.3507 64719.133 107659.336)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.3 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20 49.6-53.1 49.6-53.1z"clip-rule=evenodd></path><linearGradient x1=-632.145 x2=-632.145 y1=854.174 y2=853.174 gradientTransform="matrix(62.9558 3.2994 3.5021 -66.8246 37035.367 59284.227)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M195 183.9c-.8-21.9 6-38 20.6-48.2 14.6-10.2 29.8-15.3 45.5-15.3-6.1 21.4-14.5 35.8-25.2 43.4-10.7 7.5-24.4 14.2-40.9 20.1z"clip-rule=evenodd></path><linearGradient x1=-638.224 x2=-638.224 y1=853.801 y2=852.801 gradientTransform="matrix(152.4666 7.9904 3.0934 -59.0251 94939.86 55646.855)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c31.9-30 64.1-39.7 96.7-29 32.6 10.7 50.8 30.4 54.6 59.1-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd></path><linearGradient x1=-637.723 x2=-637.723 y1=855.103 y2=854.103 gradientTransform="matrix(136.467 7.1519 5.2165 -99.5377 82830.875 89859.578)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c35.8-7.6 65.6-.2 89.2 22 23.6 22.2 37.7 49 42.3 80.3-39.8-9.7-68.3-23.8-85.5-42.4-17.2-18.5-32.5-38.5-46-59.9z"clip-rule=evenodd></path><linearGradient x1=-631.79 x2=-631.79 y1=855.872 y2=854.872 gradientTransform="matrix(60.8683 3.19 8.7771 -167.4773 31110.818 145537.61)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#2f8a00></stop><stop offset=1 stop-color=#90ff57></stop></linearGradient><path fill-rule=evenodd stroke=#2F8A00 stroke-width=13 d="M194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6-6.5 29.9-3.6 63.1 8.7 99.6 27.4-40.3 43.2-69.6 47.4-88 4.2-18.3 5.5-44.1 4-77.2z"clip-rule=evenodd></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4-5.7 18-9.4 33-11.1 45.1"></path><path fill=none stroke=#2F8A00 stroke-linecap=round stroke-width=8 d="M194.8 185.7c-24.4 1.7-43.8 9-58.1 21.8-14.3 12.8-24.7 25.4-31.3 37.8m99.1-68.9c29.7-6.7 52-8.4 67-5 15 3.4 26.9 8.7 35.8 15.9m-110.8-5.9c20.3 9.9 38.2 20.5 53.9 31.9 15.7 11.4 27.4 22.1 35.1 32"></path></g><defs><filter width=532 height=633 x=50.5 y=399 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=532 height=633 x=50.5 y=399 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><linearGradient x1=-641.104 x2=-641.278 y1=856.577 y2=856.183 gradientTransform="matrix(532 0 0 -633 341484.5 542657)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#fff400></stop><stop offset=1 stop-color=#3c8700></stop></linearGradient><ellipse cx=316.5 cy=715.5 fill-rule=evenodd clip-rule=evenodd rx=266 ry=316.5></ellipse><defs><filter width=288 height=283 x=391 y=-24 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"></feColorMatrix></filter></defs><mask width=288 height=283 x=391 y=-24 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#FFF fill-rule=evenodd clip-rule=evenodd></circle></g></mask><g><g transform="translate(397 -24)"><linearGradient x1=-1036.672 x2=-1036.672 y1=880.018 y2=879.018 gradientTransform="matrix(227 0 0 -227 235493 199764)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffdf00></stop><stop offset=1 stop-color=#ff9d00></stop></linearGradient><circle cx=168.5 cy=113.5 r=113.5 fill-rule=evenodd clip-rule=evenodd></circle><linearGradient x1=-1017.329 x2=-1018.602 y1=658.003 y2=657.998 gradientTransform="matrix(30 0 0 -1 30558 771)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M30 113H0"></path><linearGradient x1=-1014.501 x2=-1015.774 y1=839.985 y2=839.935 gradientTransform="matrix(26.5 0 0 -5.5 26925 4696.5)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M33.5 79.5L7 74"></path><linearGradient x1=-1016.59 x2=-1017.862 y1=852.671 y2=852.595 gradientTransform="matrix(29 0 0 -8 29523 6971)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M34 146l-29 8"></path><linearGradient x1=-1011.984 x2=-1013.257 y1=863.523 y2=863.229 gradientTransform="matrix(24 0 0 -13 24339 11407)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M45 177l-24 13"></path><linearGradient x1=-1006.673 x2=-1007.946 y1=869.279 y2=868.376 gradientTransform="matrix(20 0 0 -19 20205 16720)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M67 204l-20 19"></path><linearGradient x1=-992.85 x2=-993.317 y1=871.258 y2=870.258 gradientTransform="matrix(13.8339 0 0 -22.8467 13825.796 20131.938)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M94.4 227l-13.8 22.8"></path><linearGradient x1=-953.835 x2=-953.965 y1=871.9 y2=870.9 gradientTransform="matrix(7.5 0 0 -24.5 7278 21605)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M127.5 243.5L120 268"></path><linearGradient x1=244.504 x2=244.496 y1=871.898 y2=870.898 gradientTransform="matrix(.5 0 0 -24.5 45.5 21614)"gradientUnits=userSpaceOnUse><stop offset=0 stop-color=#ffa400></stop><stop offset=1 stop-color=#ff5e00></stop></linearGradient><path fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12 d="M167.5 252.5l.5 24.5">');function mt(){const e=Gt();return(()=>{var t=_r(),i=t.firstChild,r=i.firstChild,g=r.nextSibling,l=g.nextSibling,a=l.firstChild,f=l.nextSibling,p=f.firstChild,o=f.nextSibling,n=o.nextSibling,$=n.firstChild,h=n.nextSibling,C=h.firstChild,m=h.nextSibling,T=m.nextSibling,H=T.firstChild,W=T.nextSibling,j=W.firstChild,re=W.nextSibling,z=re.nextSibling,v=z.firstChild,k=z.nextSibling,X=k.firstChild,ee=k.nextSibling,Z=ee.nextSibling,ce=Z.firstChild,fe=Z.nextSibling,$e=fe.firstChild,A=fe.nextSibling,U=A.nextSibling,Y=U.firstChild,V=U.nextSibling,ue=V.firstChild,ge=V.nextSibling,O=ge.nextSibling,L=O.firstChild,q=O.nextSibling,Q=q.firstChild,te=q.nextSibling,ye=te.firstChild,R=ye.nextSibling,oe=R.nextSibling,le=te.nextSibling,pe=le.firstChild,se=le.nextSibling,we=se.firstChild,Se=se.nextSibling,c=Se.firstChild,x=c.nextSibling,E=x.nextSibling,B=E.nextSibling,M=B.nextSibling,S=M.nextSibling,b=S.nextSibling,I=b.nextSibling,K=I.nextSibling,P=K.nextSibling,ae=P.nextSibling,ne=ae.nextSibling,de=ne.nextSibling,ke=de.nextSibling,me=Se.nextSibling,_e=me.firstChild,he=me.nextSibling,xe=he.firstChild,be=he.nextSibling,y=be.nextSibling,J=y.nextSibling,He=J.firstChild,Fe=J.nextSibling,je=Fe.firstChild,Ee=Fe.nextSibling,Ne=Ee.firstChild,Oe=Ne.firstChild,De=Oe.nextSibling,Te=De.nextSibling,Ie=Te.nextSibling,Ge=Ie.nextSibling,Ae=Ge.nextSibling,rt=Ae.nextSibling,it=rt.nextSibling,nt=it.nextSibling,ot=nt.nextSibling,lt=ot.nextSibling,st=lt.nextSibling,at=st.nextSibling,dt=at.nextSibling,ct=dt.nextSibling,ft=ct.nextSibling,ut=ft.nextSibling,St=ut.nextSibling;return s(r,"id",`a-${e}`),s(g,"fill",`url(#a-${e})`),s(a,"id",`b-${e}`),s(f,"id",`c-${e}`),s(p,"filter",`url(#b-${e})`),s(o,"mask",`url(#c-${e})`),s($,"id",`d-${e}`),s(h,"id",`e-${e}`),s(C,"filter",`url(#d-${e})`),s(m,"mask",`url(#e-${e})`),s(H,"id",`f-${e}`),s(W,"id",`g-${e}`),s(j,"filter",`url(#f-${e})`),s(re,"mask",`url(#g-${e})`),s(v,"id",`h-${e}`),s(k,"id",`i-${e}`),s(X,"filter",`url(#h-${e})`),s(ee,"mask",`url(#i-${e})`),s(ce,"id",`j-${e}`),s(fe,"id",`k-${e}`),s($e,"filter",`url(#j-${e})`),s(A,"mask",`url(#k-${e})`),s(Y,"id",`l-${e}`),s(V,"id",`m-${e}`),s(ue,"filter",`url(#l-${e})`),s(ge,"mask",`url(#m-${e})`),s(L,"id",`n-${e}`),s(q,"id",`o-${e}`),s(Q,"filter",`url(#n-${e})`),s(te,"mask",`url(#o-${e})`),s(R,"id",`p-${e}`),s(oe,"fill",`url(#p-${e})`),s(pe,"id",`q-${e}`),s(se,"id",`r-${e}`),s(we,"filter",`url(#q-${e})`),s(Se,"mask",`url(#r-${e})`),s(c,"id",`s-${e}`),s(x,"fill",`url(#s-${e})`),s(E,"id",`t-${e}`),s(B,"fill",`url(#t-${e})`),s(M,"id",`u-${e}`),s(S,"fill",`url(#u-${e})`),s(b,"id",`v-${e}`),s(I,"fill",`url(#v-${e})`),s(K,"id",`w-${e}`),s(P,"fill",`url(#w-${e})`),s(ae,"id",`x-${e}`),s(ne,"fill",`url(#x-${e})`),s(de,"id",`y-${e}`),s(ke,"fill",`url(#y-${e})`),s(_e,"id",`z-${e}`),s(he,"id",`A-${e}`),s(xe,"filter",`url(#z-${e})`),s(be,"id",`B-${e}`),s(y,"fill",`url(#B-${e})`),s(y,"mask",`url(#A-${e})`),s(He,"id",`C-${e}`),s(Fe,"id",`D-${e}`),s(je,"filter",`url(#C-${e})`),s(Ee,"mask",`url(#D-${e})`),s(Oe,"id",`E-${e}`),s(De,"fill",`url(#E-${e})`),s(Te,"id",`F-${e}`),s(Ie,"stroke",`url(#F-${e})`),s(Ge,"id",`G-${e}`),s(Ae,"stroke",`url(#G-${e})`),s(rt,"id",`H-${e}`),s(it,"stroke",`url(#H-${e})`),s(nt,"id",`I-${e}`),s(ot,"stroke",`url(#I-${e})`),s(lt,"id",`J-${e}`),s(st,"stroke",`url(#J-${e})`),s(at,"id",`K-${e}`),s(dt,"stroke",`url(#K-${e})`),s(ct,"id",`L-${e}`),s(ft,"stroke",`url(#L-${e})`),s(ut,"id",`M-${e}`),s(St,"stroke",`url(#M-${e})`),t})()}var Fr=D("<button type=button><div><div></div><div></div></div><div>-</div><div>TanStack Router");function Mr({initialIsOpen:e,panelProps:t={},closeButtonProps:i={},toggleButtonProps:r={},position:g="bottom-left",containerElement:l="footer",router:a,routerState:f,shadowDOMTarget:p}){const[o,n]=ie();let $;const[h,C]=We("tanstackRouterDevtoolsOpen",e),[m,T]=We("tanstackRouterDevtoolsHeight",null),[H,W]=ie(!1),[j,re]=ie(!1),z=Jt(),v=Be(),k=(O,L)=>{if(L.button!==0)return;re(!0);const q={originalHeight:O?.getBoundingClientRect().height??0,pageY:L.pageY},Q=ye=>{const R=q.pageY-ye.pageY,oe=q.originalHeight+R;T(oe),oe<70?C(!1):C(!0)},te=()=>{re(!1),document.removeEventListener("mousemove",Q),document.removeEventListener("mouseUp",te)};document.addEventListener("mousemove",Q),document.addEventListener("mouseup",te)};h(),Me(()=>{W(h()??!1)}),Me(()=>{if(H()){const O=o()?.parentElement?.style.paddingBottom,L=()=>{const q=$.getBoundingClientRect().height;o()?.parentElement&&n(Q=>(Q?.parentElement&&(Q.parentElement.style.paddingBottom=`${q}px`),Q))};if(L(),typeof window<"u")return window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L),o()?.parentElement&&typeof O=="string"&&n(q=>(q.parentElement.style.paddingBottom=O,q))}}else o()?.parentElement&&n(O=>(O?.parentElement&&O.parentElement.removeAttribute("style"),O))}),Me(()=>{if(o()){const O=o(),L=getComputedStyle(O).fontSize;O?.style.setProperty("--tsrd-font-size",L)}});const{style:X={},...ee}=t,{style:Z={},onClick:ce,...fe}=i,{onClick:$e,class:A,...U}=r;if(!z())return null;const Y=F(()=>m()??500),V=F(()=>N(v().devtoolsPanelContainer,v().devtoolsPanelContainerVisibility(!!h()),v().devtoolsPanelContainerResizing(j),v().devtoolsPanelContainerAnimation(H(),Y()+16))),ue=F(()=>({height:`${Y()}px`,...X||{}})),ge=F(()=>N(v().mainCloseBtn,v().mainCloseBtnPosition(g),v().mainCloseBtnAnimation(!!h()),A));return _(It,{component:l,ref:n,class:"TanStackRouterDevtools",get children(){return[_(Tt.Provider,{value:{onCloseClick:ce??(()=>{})},get children(){return _(wr,Le({ref(O){var L=$;typeof L=="function"?L(O):$=O}},ee,{router:a,routerState:f,className:V,style:ue,get isOpen(){return H()},setIsOpen:C,handleDragStart:O=>k($,O),shadowDOMTarget:p}))}}),(()=>{var O=Fr(),L=O.firstChild,q=L.firstChild,Q=q.nextSibling,te=L.nextSibling,ye=te.nextSibling;return et(O,Le(U,{"aria-label":"Open TanStack Router Devtools",onClick:R=>{C(!0),$e&&$e(R)},get class(){return ge()}}),!1,!0),u(q,_(mt,{})),u(Q,_(mt,{})),w(R=>{var oe=v().mainCloseBtnIconContainer,le=v().mainCloseBtnIconOuter,pe=v().mainCloseBtnIconInner,se=v().mainCloseBtnDivider,we=v().routerLogoCloseButton;return oe!==R.e&&d(L,R.e=oe),le!==R.t&&d(q,R.t=le),pe!==R.a&&d(Q,R.a=pe),se!==R.o&&d(te,R.o=se),we!==R.i&&d(ye,R.i=we),R},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),O})()]}})}export{Mr as FloatingTanStackRouterDevtools,Mr as default};
