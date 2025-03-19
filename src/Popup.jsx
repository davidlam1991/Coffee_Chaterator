import React from "react";
import { createRoot } from "react-dom/client";
import Menu from "./Menu.jsx";

import "./styles.css";

function Popup() {
  return (
    <div>
      <Menu />
    </div>
  );
}

const root = document.getElementById("react-target");
if (root) {
  createRoot(root).render(<Popup />);
}
