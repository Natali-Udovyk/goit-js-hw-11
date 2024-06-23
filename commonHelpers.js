import{S as c,i as a}from"./assets/vendor-0fc460d7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function u(s){const r="https://pixabay.com",n="44464847-e125504310873b884f25bab7c",o="/api/",e=new URLSearchParams({key:n,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${r}${o}?${e}`).then(t=>{if(!t.ok)throw new Error("response.status");return t.json()})}const l=document.querySelector(".gallery"),d=new c(".gallery a");function f(s){l.innerHTML="",l.innerHTML=s.map(r=>`
        <a class= "gallery-link" href="${r.largeImageURL}">
            <img src="${r.webformatURL}" class="gallery-image" alt="${r.tags}" />
            <div class="info">
                <p>Likes: ${r.likes}</p>
                <p>Views: ${r.views}</p>
                <p>Comments: ${r.comments}</p>
                <p>Downloads: ${r.downloads}</p>
            </div>
        </a>
    `).join(""),d.refresh()}document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const r=document.querySelector(".search-input"),n=r.value;if(!n.trim()){a.error({title:"Error",message:"The search query cannot be empty. Please enter a valid query!"});return}const o=document.querySelector(".loader");o.style.display="block",u(n.trim()).then(e=>{if(setTimeout(()=>{o.style.display="none",r.value=""},1e3),!Array.isArray(e.hits)||e.hits.length===0){a.error({title:"Error",message:"No images found. Please try a different query!"});return}f(e.hits)}).catch(e=>{setTimeout(()=>{o.style.display="none",r.value=""},1e3),a.error({title:"Error",message:"Failed to load images. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
