"use strict";

const payAmountBtn = document.querySelector("#payAmount");
const decrementBtn = document.querySelectorAll("#decrement");
const quantityElem = document.querySelectorAll("#quantity");
const incrementBtn = document.querySelectorAll("#increment");
const priceElem = document.querySelectorAll("#price");
const subtotalElem = document.querySelector("#subtotal");
const taxElem = document.querySelector("#tax");
const totalElem = document.querySelector("#total");

const deleteButton1 = document.querySelector("#delete-button-1");
deleteButton1.addEventListener("click", function () {
  quantityElem[0].textContent = 0;
  totalCalc();
  this.closest(".product-card").remove();
});
const deleteButton2 = document.querySelector("#delete-button-2");
deleteButton2.addEventListener("click", function () {
  quantityElem[1].textContent = 0;
  totalCalc();
  this.closest(".product-card").remove();
});

for (let i = 0; i < incrementBtn.length; i++) {
  incrementBtn[i].addEventListener("click", function () {
    let increment = Number(this.previousElementSibling.textContent);

    increment++;

    this.previousElementSibling.textContent = increment;

    totalCalc();
  });

  decrementBtn[i].addEventListener("click", function () {
    let decrement = Number(this.nextElementSibling.textContent);

    decrement <= 0 ? 0 : decrement--;

    this.nextElementSibling.textContent = decrement;

    totalCalc();
  });
}

const totalCalc = function () {
  const tax = 0;
  let subtotal = 0;
  let totalTax = 0;
  let total = 0;

  for (let i = 0; i < quantityElem.length; i++) {
    subtotal +=
      Number(quantityElem[i].textContent) * Number(priceElem[i].textContent);
  }

  subtotalElem.textContent = subtotal;

  totalTax = subtotal * 0;

  total = subtotal + totalTax + 25;

  totalElem.textContent = total;
  payAmountBtn.textContent = total;
};
