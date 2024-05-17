(function(i,l){typeof exports=="object"&&typeof module<"u"?l(exports):typeof define=="function"&&define.amd?define(["exports"],l):(i=typeof globalThis<"u"?globalThis:i||self,l(i.Select={}))})(this,function(i){"use strict";var u=Object.defineProperty;var E=(i,l,r)=>l in i?u(i,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):i[l]=r;var a=(i,l,r)=>(E(i,typeof l!="symbol"?l+"":l,r),r);function l(d,e){let t;return(...s)=>{clearTimeout(t),t=setTimeout(()=>d(...s),e)}}class r{}class h{}class o{constructor(e,t){a(this,"el");a(this,"inputEl");a(this,"listEl");a(this,"clearEl");a(this,"config",{options:[],searchable:!1,emptyMessage:"Empty Result"});a(this,"listeners",{select:[],endScroll:[],search:[]});a(this,"selectedOption",null);if(e.tagName!=="DIV")throw new r;this.setWrapper(e),this.setConfig(t),this.renderInput(),this.renderList(),this.renderClear(),this.renderOptions(),this.setEvent()}setWrapper(e){this.el=e,e.classList.add("select-wrapper")}setConfig(e){e!=null&&e.options&&(this.config.options=e.options),e!=null&&e.height&&(this.config.height=e.height),e!=null&&e.debounceSearch&&(this.config.debounceSearch=e.debounceSearch),e!=null&&e.placeholder&&(this.config.placeholder=e.placeholder),e!=null&&e.searchable&&(this.config.searchable=e.searchable),e!=null&&e.serverSearch&&(this.config.serverSearch=e.serverSearch),e!=null&&e.emptyMessage&&(this.config.emptyMessage=e.emptyMessage)}renderInput(){const e=document.createElement("input");e.classList.add("select-input"),this.config.placeholder&&e.setAttribute("placeholder",this.config.placeholder),this.config.searchable||(e.setAttribute("readonly","readonly"),e.style.cursor="default"),this.el.appendChild(e),this.inputEl=e}renderList(){const e=document.createElement("div");e.classList.add("select-list"),e.style.display="none",this.config.height&&(e.style.maxHeight=`${this.config.height}px`,e.style.overflowY="auto"),this.el.appendChild(e),this.listEl=e}renderOptions(){this.listEl.innerHTML="";const t=this.config.searchable&&!this.config.serverSearch?this.config.options.filter(s=>s.label.toLowerCase().includes(this.inputEl.value.toLowerCase())):this.config.options;this.selectedOption?this.displayClear():this.hideClear(),t.length?t.forEach(s=>{const n=document.createElement("div");n.classList.add("select-option"),this.selectedOption&&this.selectedOption.id===s.id&&n.classList.add("select-option-selected"),n.textContent=s.label,n.dataset.id=s.id.toString(),n.dataset.label=s.label,n.addEventListener("click",()=>{const c=this.setSelectedOption(s.id);this.listeners.select.forEach(p=>{p(c)})}),this.listEl.appendChild(n)}):this.renderEmpty()}renderEmpty(){const e=document.createElement("div");e.textContent=this.config.emptyMessage,e.classList.add("select-empty"),this.listEl.appendChild(e)}renderClear(){const e=document.createElement("button");e.style.display="none",e.classList.add("select-clear"),e.setAttribute("tabindex","-1"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="select-clear-icon">
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>`,e.addEventListener("click",()=>{this.removeSelectedOption()}),this.clearEl=e,this.el.appendChild(e)}setEvent(){if(this.inputEl.addEventListener("focus",()=>{this.listEl.style.display="block",this.el.classList.add("select-wrapper-focus"),this.renderOptions()}),this.config.searchable){const e=this.config.debounceSearch?l(()=>this.renderOptions(),this.config.debounceSearch):()=>this.renderOptions();this.inputEl.addEventListener("input",()=>{e()})}this.inputEl.addEventListener("keydown",e=>{e.key==="Tab"&&this.hideList()}),document.addEventListener("click",e=>{this.el.contains(e.target)||this.hideList()}),this.listEl.addEventListener("scroll",e=>{const t=e.target;t.scrollTop>=t.scrollHeight-t.clientHeight&&this.listeners.endScroll.forEach(s=>s())})}on(e,t){if(this.listeners[e].push(t),e==="search"&&this.config.searchable){const s=this.config.debounceSearch?l(n=>t(n),this.config.debounceSearch):t;this.inputEl.addEventListener("input",n=>{s(n.target.value)})}}getSelectedOption(){return this.selectedOption}setSelectedOption(e){const t=this.config.options.find(s=>s.id==e);if(!t)throw new h;return this.selectedOption=t,this.inputEl.value=t.label,this.renderOptions(),t}removeSelectedOption(){this.selectedOption&&(this.selectedOption=null,this.inputEl.value=""),this.renderOptions()}setOptions(e){this.config.options=e,this.renderOptions()}hideList(){this.inputEl.value=this.selectedOption?this.selectedOption.label:"",this.listEl.style.display="none",this.el.classList.remove("select-wrapper-focus")}displayClear(){this.clearEl.style.display="block"}hideClear(){this.clearEl.style.display="none"}}i.InvalidElement=r,i.OptionNotFound=h,i.Select=o,Object.defineProperty(i,Symbol.toStringTag,{value:"Module"})});
