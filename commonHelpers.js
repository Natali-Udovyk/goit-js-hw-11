import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function a(s){const o="https://pixabay.com",t="44464847-e125504310873b884f25bab7c",n="/api/",e=new URLSearchParams({key:t,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${o}${n}?${e}`).then(r=>r.json()).then(r=>(r.hits.length===0?l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):console.log(r.hits),r.hits)).catch(r=>{console.error("Error:",r)})}const u=new c(".gallery a");function f(s){const o=document.querySelector(".gallery");if(o.innerHTML="",!Array.isArray(s)||s.length===0){console.error("Масив images порожній або не є масивом");return}o.innerHTML=s.map(t=>`
        <a class= "gallery-link" href="${t.largeImageURL}">
            <img src="${t.webformatURL}" class="gallery-image" alt="${t.tags}" />
            <div class="info">
                <p>Likes: ${t.likes}</p>
                <p>Views: ${t.views}</p>
                <p>Comments: ${t.comments}</p>
                <p>Downloads: ${t.downloads}</p>
            </div>
        </a>
    `).join(""),u.refresh()}document.querySelector(".form").addEventListener("submit",function(s){s.preventDefault();const o=document.querySelector(".search-input"),t=o.value,n=document.querySelector(".loader");n.style.display="block",a(t).then(e=>f(e)).then(()=>{setTimeout(()=>{n.style.display="none",o.value=""},3e3)}).catch(e=>{console.error("Error loading images:",e),setTimeout(()=>{n.style.display="none",o.value=""},3e3)})});
//# sourceMappingURL=commonHelpers.js.map
