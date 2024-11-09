import { data } from "./data.js";
const dessertContainer = document.getElementById("dessert-container");
const emptyCart = document.getElementById("emptyCart");
console.log(emptyCart);
console.log(dessertContainer);
console.log(data);
let cart = [];
document.addEventListener("DOMContentLoaded", () => {
  dessertContainer.innerHTML = data
    .map((dessert, index) => {
      return `<div class="flex flex-col items-start">
          <div class="relative w-full">
            <img
              class="rounded-2xl"
              src=${dessert.image.mobile}
              alt=${dessert.name}
            />
            <button
              id="add-to-cart-button-${index}"
              class="add-to-cart-button absolute bg-white left-0 right-0 mx-auto w-fit rounded-2xl px-5 py-1.5 text-sm font-semibold text-[#3b2520] border border-[#5d2418] bottom-[-14px] z-10"
            >
              Add to Cart
            </button>
          </div>

          <div class="flex flex-col items-start mt-5">
            <p class="text-xs text-[#5d2418]">${dessert.category}</p>
            <p class="text-[#2e1813] font-semibold">${dessert.name}</p>
            <p class="text-[#b85c06] font-semibold">$${dessert.price}</p>
          </div>
        </div>`;
    })
    .join("");
  dessertContainer.addEventListener("click", (event) => {
    if (event.target && event.target.classList.contains("add-to-cart-button")) {
      if (event.target.innerHTML === "Add to Cart" || cart.length === 0) {
        emptyCart.style.display = "none";
        event.target.innerHTML = "Added to Cart";
        event.target.style.color = "#ffffff";
        event.target.style.backgroundColor = "#5d2418";
        const index = event.target.id.split("-")[4];
        cart.push(data[index]);
        updateCart();
        console.log(cart);
      } else {
        event.target.innerHTML = "Add to Cart";
        event.target.style.backgroundColor = "#ffffff";
        event.target.style.color = "#3b2520";
      }
    }
  });
});
const updateCart = () => {
  const cartContainer = document.getElementById("cartItems");
  cartContainer.innerHTML = cart
    .map((item) => {
      return;`<div class="flex flex-col">
          <p>${item.name}</p>
          <p>&${item.price}</p>
        </div>);`;       
    })
    .join("");
};
