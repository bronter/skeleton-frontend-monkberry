import "../styles/main.scss";

import Monkberry from "monkberry";
import Home from "./pages/js/home";

let view;

document.addEventListener("DOMContentLoaded", (event) => {
  view = Monkberry.render(Home, document.getElementById("monkberry-root"));
  view.update({htns: "htns"});
});
