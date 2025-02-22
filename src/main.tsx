import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Tab from "./tab-form/Tab.tsx";
import Pagination from "./pagination/Pagination.tsx";
import DND from "./drag-and-drop/DND.tsx";
import PokemonCard from "./pokemon-card-game/PokemonCard.tsx";

const PAGE_SIZE: number = 10;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab-form" element={<Tab />} />
      <Route path="/pagination" element={<Pagination pageSize={PAGE_SIZE} />} />
      <Route path="/dnd" element={<DND />} />
      <Route path="/pokemon" element={<PokemonCard />} />
    </Routes>
  </BrowserRouter>
);
