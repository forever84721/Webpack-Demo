//@ts-check
// import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import testfun from "./index";
// import Vue from "vue";
// import Icon from "./z.jpg";
function component() {
  const element = document.createElement("div");

  element.innerHTML = ["Hello", "webpack"].join(" ");
  element.classList.add("hello");

  //   const myIcon = new Image();
  //   myIcon.src = Icon;
  //   element.appendChild(myIcon);

  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.appendChild(btn);
  testfun();
  a();
  return element;
}
async function a() {
  console.log("async");
}
document.body.appendChild(component());
// new Vue({});
