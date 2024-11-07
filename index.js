import { data } from "./data.js";
const dessertContainer = document.getElementById("dessert-container");
console.log(dessertContainer);

console.log(data);
document.addEventListener("DOMContentLoaded", () => {
  dessertContainer.innerHTML = data.map((dessert) => {
    return `<div class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              src=${dessert.image.mobile}
              class="rounded-2xl"
              alt=${dessert.name}
            />
            <button
              class="absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10 flex flex-row gap-2"
            ><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
              Add to Cart
            </button>
          </div>
          <div class="flex flex-col mt-5 items-start">
            <p class="text-xs text-[#5d2418]">${dessert.category}</p>
            <p class="font-semibold">${dessert.name}</p>
            <p class="font-semibold">${"$" + dessert.price}</p>
          </div>
        </div>`;
  }).join("")
  
});
