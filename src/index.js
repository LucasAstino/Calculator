import React from "react";
import { createRoot } from "react-dom/client";

import Calculadora from "././components/calculadora/Calculator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function thictoc() {
  root.render(
    <>
      <Calculadora />
    </>
  );
}

setInterval(thictoc, 1000);
