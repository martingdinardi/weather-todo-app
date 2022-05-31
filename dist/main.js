(()=>{var e={891:()=>{const e=document.querySelector(".city"),t=document.querySelector(".select-city");e.addEventListener("click",(()=>{e.setAttribute("hidden",""),t.removeAttribute("hidden",""),t.children[0].focus()})),console.log(t.children[0])}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,o),d.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var n={};(()=>{"use strict";o.d(n,{L:()=>$});class e{constructor(e,t,o){this.tarea_titulo=e,this.tarea_description=t,this.tarea_icono=o,this.id=(new Date).getTime(),this.completado=!1}}const t=document.querySelector(".todo-container"),i=document.querySelector(".add-activity"),d=(document.querySelector(".app-container"),document.querySelector(".create-todo-container")),r=document.querySelector(".arrow-icon"),s=document.querySelector(".icons-to-select"),c=document.querySelectorAll(".icon-to-select"),l=document.querySelector(".icon-selected"),a=document.querySelector(".create-todo-title"),m=document.querySelector(".create-todo-description"),u=document.querySelector(".create-todo-confirm"),h=document.querySelector(".no-todo-container"),p=document.querySelector(".complete-button"),g=document.querySelector(".pending"),v=document.querySelector(".delete-all-todos-container"),b=document.querySelector(".time"),L=document.querySelector(".date");let A=new Date,S=!1,y=0,f=0;const E=e=>{const o=`\n    <div class="todo-item ${e.completado?"todo-completed":""}" data-id=${e.id}>\n    <div class="todo-item-content">\n      <div class="todo-label"></div>\n      <div class="todo-icon">\n        <img src=${e.tarea_icono} class="todo-svg" />\n      </div>\n      <div class="todo-description-container">\n        <p class="todo-title">${e.tarea_titulo}</p>\n        <p class="todo-description">\n          ${e.tarea_description}\n        </p>\n      </div>\n      <div class="todo-time-container">\n        <p class="todo-time"><input type="checkbox" class="check" ${e.completado?"checked":""}></p>\n        <img src="./assets/img/trash.svg" class="todo-svg trash-ico" />\n      </div>\n    </div>\n  </div>\n    `,n=document.createElement("div");return e.completado?(y++,n.setAttribute("hidden","")):0==e.completado?f++:f>0&&h.setAttribute("hidden",""),n.innerHTML=o,t.prepend(n),n};window.addEventListener("load",(()=>{console.log(f),f>0&&h.setAttribute("hidden","");const e=A.toUTCString().split(" "),t=()=>{A=new Date;let e=A.toUTCString().split(" ")[4].split(":");b.innerHTML=`${A.getHours()}:${e[1]}`,setTimeout(t,1e3)};t(),L.innerHTML=`${e[0]} ${e[1]} ${e[2]} ${e[3]}`})),i.addEventListener("click",(()=>{d.removeAttribute("hidden")})),r.addEventListener("click",(()=>{r.classList.toggle("rotate"),s.removeAttribute("hidden")})),c.forEach((e=>{e.addEventListener("click",(e=>{s.setAttribute("hidden",""),r.classList.remove("rotate"),l.innerHTML=`<img src=${e.target.src} class="icon selected-ico"> `}))})),u.addEventListener("click",(t=>{if(a.value.length>0&&m.value.length>0){const t=new e(a.value,m.value,l.children[0].src);$.nuevoTodo(t);const o=E(t);h.setAttribute("hidden",""),1==S&&(o.setAttribute("hidden",""),0==y&&h.removeAttribute("hidden")),d.setAttribute("hidden","")}console.log(`elementosPendientes = ${f}`)})),t.addEventListener("click",(e=>{const o=e.target.classList[1],n=e.target.parentElement.parentElement.parentElement.parentElement,i=n.getAttribute("data-id");if(null!=i)n.classList.toggle("todo-completed"),n.parentElement.setAttribute("hidden",""),$.marcarCompletado(i),1==S?(y--,f++,0==y&&h.removeAttribute("hidden")):0==S&&(y++,f--,0==f&&h.removeAttribute("hidden")),console.log(`elementosCompletados = ${y}`),console.log(`elementosPendientes = ${f}`);else if("trash-ico"==o){const o=e.target.parentElement.parentElement.parentElement.getAttribute("data-id");$.eliminarTodo(o),t.removeChild(n),1==S?(y--,console.log(y),0==y&&h.removeAttribute("hidden")):0==S&&(f--,console.log(f),0==f&&h.removeAttribute("hidden"))}})),p.addEventListener("click",(()=>{if(S=!0,console.log(`elementos completados = ${y}`),console.log(`elementos pendientes = ${f}`),v.removeAttribute("hidden"),y>0&&h.setAttribute("hidden",""),"complete-button"==p.classList[0]){for(let e=t.children.length-1;e>=0;e--){const o=t.children[e],n=o.children;"todo-item"==n[0].classList[0]&&o.setAttribute("hidden",""),"todo-completed"==n[0].classList[1]?o.removeAttribute("hidden"):0==y?h.removeAttribute("hidden"):1==y&&h.setAttribute("hidden","")}p.classList.remove("complete-button"),p.classList.add("pending-button"),g.classList.remove("pending-button"),g.classList.add("complete-button")}})),g.addEventListener("click",(e=>{S=!1,console.log(`elementos completados = ${y}`),console.log(`elementos pendientes = ${f}`),f>0&&h.setAttribute("hidden",""),0==f&&h.removeAttribute("hidden");for(let e=t.children.length-1;e>=0;e--){const o=t.children[e],n=o.children;"todo-completed"!=n[0].classList[1]&&"no-todo"!=n[0].classList?o.removeAttribute("hidden",""):"todo-completed"==n[0].classList[1]&&o.setAttribute("hidden","")}"complete-button"==g.classList[1]&&(v.setAttribute("hidden",""),p.classList.add("complete-button"),p.classList.remove("pending-button"),g.classList.add("pending-button"),g.classList.remove("complete-button"))})),v.addEventListener("click",(()=>{$.eliminarCompletados(),y=0,console.log(y),h.removeAttribute("hidden");for(let e=t.children.length-1;e>=0;e--){const o=t.children[e];o.children[0].classList.contains("todo-completed")&&(t.removeChild(o),0===$.todos.length&&h.removeAttribute("hidden"))}})),o(891);const $=new class{constructor(){this.cargarLocalStorage()}nuevoTodo(e){this.todos.push(e),this.guardarLocalStorage()}eliminarTodo(e){this.todos=this.todos.filter((t=>t.id!=e)),this.guardarLocalStorage()}marcarCompletado(e){for(const t of this.todos)if(t.id==e){t.completado=!t.completado,this.guardarLocalStorage();break}}eliminarCompletados(){this.todos=this.todos.filter((e=>!e.completado)),this.guardarLocalStorage()}guardarLocalStorage(){localStorage.setItem("todo",JSON.stringify(this.todos))}cargarLocalStorage(){localStorage.getItem("todo")?(this.todos=JSON.parse(localStorage.getItem("todo")),console.log(this.todos)):this.todos=[]}};$.todos.forEach((e=>E(e)))})()})();