(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function c(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=c(e);fetch(e.href,o)}})();const u=document.querySelector(".header__add-todo"),a=document.querySelector(".todos"),s=document.querySelector(".todo"),f=s.cloneNode(!0),p=document.querySelector(".todo__delete"),m=document.querySelector(".todo__check-box");s.id=Date.now();const y=()=>{h()},i=t=>{t.target.parentNode.remove()},l=t=>{t.target.parentNode.querySelector(".todo__content").classList.toggle("todo__content--checked")},h=()=>{const t=f.cloneNode(!0),n=t.querySelector(".todo__delete"),c=t.querySelector(".todo__check-box");t.id=Date.now(),n.addEventListener("click",i),c.addEventListener("change",l),a.appendChild(t)};u.addEventListener("click",y);p.addEventListener("click",i);m.addEventListener("change",l);
