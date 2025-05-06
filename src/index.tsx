import { root } from "@lynx-js/react";
import { MemoryRouter, Routes, Route } from "react-router";

import Layout from "./components/layout.js";
import { Home } from "./screens/Home.js";
import { Training } from "./screens/training.js";
import { Nutrition } from "./screens/nutrition.js";

root.render(
  <MemoryRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/training" element={<Training />} />
        <Route path="/nutrition" element={<Nutrition />} />
      </Routes>
    </Layout>
  </MemoryRouter>
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
