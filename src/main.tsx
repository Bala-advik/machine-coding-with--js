import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Tab from "./tab-form/Tab.tsx";
import Pagination from "./pagination/Pagination.tsx";

const PAGE_SIZE: number = 10;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab-form" element={<Tab />} />
      <Route path="/pagination" element={<Pagination pageSize={PAGE_SIZE} />} />
    </Routes>
  </BrowserRouter>
);
