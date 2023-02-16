"use strict";
const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");

const trim = function (value) {
  return value.replace(/^\s+|\s+$/g, "");
};

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};
DomElement.prototype.createElement = function (selector) {
  const div = document.createElement("div");
  div.style.display = `flex`;
  div.style.justifyContent = `center`;
  div.style.alignItems = `center`;
  div.style.borderRadius = `50px`;
  this.selector = selector.substring(1);
  if (selector[0] == ".") {
    div.classList.add(this.selector);
    div.style.height = `40px`;
    div.style.width = `90%`;
    div.style.background = `#333333`;
    div.style.fontSize = `18px`;
    div.style.color = `#fefefe`;
    div.style.margin = `15px auto`;
    div.innerHTML = `Этот блок с классом ${this.selector}`;
  } else if (selector[0] == "#") {
    div.setAttribute("id", this.selector);
    div.style.height = `80px`;
    div.style.width = `80%`;
    div.style.background = `#D65DB1`;
    div.style.fontSize = `28px`;
    div.style.color = `#FBEAFF`;
    div.style.margin = `55px auto`;
    div.innerHTML = `<p>Этот блок с идентификатором ${this.selector}</p>`;
  }
  document.body.append(div);
};
todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  let valueInput = trim(headerInput.value);
  if (
    (valueInput !== "" && !Number(valueInput) && valueInput[0] === ".") ||
    valueInput[0] === "#"
  ) {
    const newDomElement = new DomElement(valueInput);
    newDomElement.createElement(valueInput);
  }
  headerInput.value = "";
});
