(()=>{"use strict";var e={d:(t,o)=>{for(var c in o)e.o(o,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:o[c]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{L:()=>p});class t{constructor(e,t,o){this.tarea_titulo=e,this.tarea_description=t,this.tarea_icono=o,this.id=(new Date).getTime(),this.completado=!1}}const o=document.querySelector(".todo-container"),c=document.querySelector(".add-activity"),n=(document.querySelector(".app-container"),document.querySelector(".create-todo-container")),r=document.querySelector(".arrow-icon"),d=document.querySelector(".icons-to-select"),i=document.querySelectorAll(".icon-to-select"),a=document.querySelector(".icon-selected"),s=document.querySelector(".create-todo-title"),l=document.querySelector(".create-todo-description"),u=document.querySelector(".create-todo-confirm"),m=(document.querySelector(".selected-ico"),e=>{const t=`\n    <div class="todo-item ${e.completado?"todo-completed":""}" data-id=${e.id}>\n    <div class="todo-item-content">\n      <div class="todo-label"></div>\n      <div class="todo-icon">\n        <img src=${e.tarea_icono} class="todo-svg" />\n      </div>\n      <div class="todo-description-container">\n        <p class="todo-title">${e.tarea_titulo}</p>\n        <p class="todo-description">\n          ${e.tarea_description}\n        </p>\n      </div>\n      <div class="todo-time-container">\n        <p class="todo-time"><input type="checkbox" class="check"></p>\n      </div>\n    </div>\n  </div>\n    `,c=document.createElement("div");return c.innerHTML=t,o.append(c),c});c.addEventListener("click",(()=>{n.removeAttribute("hidden")})),r.addEventListener("click",(()=>{r.classList.toggle("rotate"),d.removeAttribute("hidden")})),i.forEach((e=>{e.addEventListener("click",(e=>{d.setAttribute("hidden",""),r.classList.remove("rotate"),a.innerHTML=`<img src=${e.target.src} class="icon selected-ico"> `}))})),u.addEventListener("click",(e=>{if(s.value.length>0&&l.value.length>0){const e=new t(s.value,l.value,a.children[0].src);p.nuevoTodo(e),console.log(p),m(e),n.setAttribute("hidden","")}})),o.addEventListener("click",(e=>{e.target.localName;const t=e.target.parentElement.parentElement.parentElement.parentElement,o=t.getAttribute("data-id");null!=o&&(p.marcarCompletado(o),t.classList.toggle("todo-completed"))}));const p=new class{constructor(){this.todos=[]}nuevoTodo(e){this.todos.push(e)}eliminarTodo(e){}marcarCompletado(e){for(const t of this.todos)if(t.id==e){t.completado=!t.completado;break}}},v=new t("Enviando una tarea desde JavaScript","Enviando una descripcion de tarea desde JavaScript","./assets/img/grocery-ico.svg");p.nuevoTodo(v),console.log(p),m(v)})();