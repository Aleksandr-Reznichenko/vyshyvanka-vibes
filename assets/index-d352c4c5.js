(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=c(t);fetch(t.href,e)}})();(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]"),mobileMenuLinks:document.querySelectorAll(".anchor-link")};n.openModalBtn.addEventListener("click",o),n.closeModalBtn.addEventListener("click",o);function o(){document.body.classList.toggle("modal-open"),n.modal.classList.toggle("is-hidden")}n.mobileMenuLinks.forEach(r=>{r.addEventListener("click",c)});function c(r){r.preventDefault();const t=r.currentTarget.getAttribute("href").substring(1),e=document.getElementById(t);e&&(n.modal.classList.add("is-hidden"),document.body.classList.remove("modal-open"),e.scrollIntoView({behavior:"smooth"}))}})();(()=>{const n=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),r=document.querySelectorAll(".anchor-link"),t=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),n.classList.toggle("is-open"),e?bodyScrollLock.enableBodyScroll(document.body):bodyScrollLock.disableBodyScroll(document.body)};o.addEventListener("click",t),c.addEventListener("click",t),r.forEach(e=>{e.addEventListener("click",l=>{l.preventDefault();const s=e.getAttribute("href").substring(1),i=document.getElementById(s);i&&(t(),i.scrollIntoView({behavior:"smooth"}))})}),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(n.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();