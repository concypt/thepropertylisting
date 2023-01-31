"use strict";(()=>{window.fsAttributes=window.fsAttributes||[];window.fsAttributes.push(["cmsload",async e=>{let[t]=e;window.fsAttributes.push(["cmsfilter",r=>{let[l]=r;if(!l||!t)return;let a=H(t,"Completion");if(!a)return;let n=l.form.querySelector('[data-element="completion"]');if(!n)return;y(n,a);let o=[];for(let s=4e5;s<=15e5;s=s+1e5)o.push(s.toString());if(!o)return;let i=l.form.querySelector('[data-element="price-dropdown-min"]');if(!i)return;let c=l.form.querySelector('[data-element="price-dropdown-max"]');if(!c)return;y(i,o),y(c,o);let u=g(t,"criteria-beds","min-beds","max-beds");if(!u)return;let h=g(t,"criteria-baths","min-baths","max-baths");if(!h)return;let f=l.form.querySelector('[data-element="beds-filter"]');if(!f)return;let d=l.form.querySelector('[data-element="baths-filter"]');if(!d)return;let S=f.parentElement;if(!S)return;let L=d.parentElement;if(!L)return;f.remove(),d.remove();for(let s of u){let m=v(s,f);!m||S.append(m)}for(let s of h){let m=v(s,d);!m||L.append(m)}let b=t.items.map(s=>s.element);t.clearItems(),t.addItems(b),l.storeFiltersData();let E=document.querySelector("#min-price");if(!E)return;let T=document.querySelector("#max-price");if(!T)return;E.addEventListener("change",s=>{let m=s.target.value;!m||(document.querySelectorAll("#max-price option").forEach(p=>{p.style.display="block"}),document.querySelectorAll("#max-price option").forEach(p=>{Number(p.value)<=Number(m)&&(p.style.display="none")}),x())}),T.addEventListener("change",s=>{let m=s.target.value;!m||(document.querySelectorAll("#min-price option").forEach(p=>{p.style.display="block"}),document.querySelectorAll("#min-price option").forEach(p=>{Number(p.value)>=Number(m)&&(p.style.display="none")}),x())});let x=()=>{t.clearItems(),t.addItems(b);let s=q(t);!s||(t.clearItems(),t.addItems(s))};document.addEventListener("click",s=>{let m=s.target;!m||(m.classList.contains("checkbox-select-wrapper")?C(m):m.classList.contains("checkbox-select-text")?C(m.parentElement):M())}),document.querySelectorAll(".button-secondary.pagination").forEach(s=>{s.addEventListener("click",()=>{window.scrollTo({top:500,behavior:"smooth"})})})}])}]);var q=e=>{var a,n;let t=Number((a=document.querySelector("#min-price"))==null?void 0:a.value.replace(/,/g,""));if(!t)return;let r=Number((n=document.querySelector("#max-price"))==null?void 0:n.value.replace(/,/g,""));return r?e.items.filter(o=>{var h,f;let i=Number((h=o.element.querySelector('[data-element="min-price"]'))==null?void 0:h.innerText.replace(/,/g,""));if(!i)return;let c=Number((f=o.element.querySelector('[data-element="max-price"]'))==null?void 0:f.innerText.replace(/,/g,"")),u=!1;return c?(c>=t&&c<=r||i>=t&&i<=r)&&(u=!0):i>=t&&i<=r&&(u=!0),u}).map(o=>o.element):void 0},w=(e,t)=>{let r=t.cloneNode(!0);return r.value=e,e.charAt(0)>="0"&&e.charAt(0)<="9"&&(e="$"+A(e)),r.textContent=e,r},H=(e,t)=>{let r=[],l=e.items;if(!!e){for(let a of l){let n=a.element.querySelector('[fs-cmsfilter-field="'+t+'"]');!(n!=null&&n.innerText)||r.push(n.innerText)}if(!!r)return r}},y=(e,t)=>{let r=e.options[0];if(!r)return;let l=e.options.length-1,a;for(a=l;a>=1;a--)e.remove(a);let n=[];t.forEach(i=>{!n.includes(i)&&n.push(i)});let o=Array.from(t[0])[0];if(o==="C"||o==="Q"){let i=n.indexOf("Completed");i>-1&&n.splice(i,1),n.sort((c,u)=>u.slice(3)-c.slice(3)||u[1].localeCompare(c[1])),n.unshift("Completed")}for(let i of n){let c=w(i,r);!c||e.append(c)}},g=(e,t,r,l)=>{let a=e.items,n=[];if(!!e){for(let o of a){let i=o.element.querySelector('[data-element="'+r+'"]');if(!i)return;let c=parseInt(i.innerText),u=o.element.querySelector('[data-element="'+l+'"]');if(!u)return;let h=parseInt(u.innerText),f=[];h?(f=Array.from({length:h-c+1},(L,b)=>c+b),n.push(...f)):(f.push(c),n.push(...f));let d=o.element.querySelector('[data-element="'+t+'"]');if(!d)return;let S=d.parentElement;if(!S)return;d.remove();for(let L of f){let b=I(L,d);!b||S.append(b)}}if(n=n.filter((o,i,c)=>c.indexOf(o)===i),n=n.sort(function(o,i){return o-i}),!!n)return n}},I=(e,t)=>{let r=t.cloneNode(!0);return r.textContent=e.toString(),r},v=(e,t)=>{let r=t.cloneNode(!0),l=r.querySelector("span"),a=r.querySelector("input");if(!(!l||!a))return l.textContent=e.toString(),a.value=e.toString(),r},C=e=>{let{parentElement:t}=e,r=t==null?void 0:t.querySelector('[data-element="radio-options"]');r.classList.contains("hide")?(r.classList.remove("hide"),e.classList.add("enabled")):M()},M=()=>{document.querySelectorAll('[data-element="radio-options"]').forEach(e=>{e.classList.add("hide")}),document.querySelectorAll(".checkbox-select-wrapper").forEach(e=>{e.classList.remove("enabled")}),D()},D=async()=>{await F(100);let e=document.querySelectorAll('[data-element="radio-select-wrapper"]');!e||e.forEach(t=>{var i;let r=t.querySelector('[data-element="radio-select-text"]');if(!r)return;let l=(i=t.querySelector(".im-label strong"))==null?void 0:i.textContent;if(!l)return;let a="Any "+l,n="";t.querySelectorAll(".fs-cmsfilter_active").forEach(c=>{var u;n+=(u=c.querySelector(".w-form-label"))==null?void 0:u.textContent,n+=", "}),n=n.trim();let o=n.length;o>0?r.textContent=n.substring(0,o-1):r.textContent=a})},F=e=>new Promise(t=>setTimeout(t,e)),A=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");})();
