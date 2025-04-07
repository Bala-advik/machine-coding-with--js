import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Tab from "./tab-form/Tab.tsx";
import Pagination from "./pagination/Pagination.tsx";
import DND from "./drag-and-drop/DND.tsx";
import AutoCompleteSearch from "./auto-complete-search/AutoCompleteSearch.tsx";
import TicTacToe from "./tic-tac-toe/TicTacToe.tsx";
import OTP from "./input-otp/OTP.tsx";
import NestedCheckbox from "./nested-checkboxes/NestedCheckbox.tsx";

const PAGE_SIZE: number = 10;

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab-form" element={<Tab />} />
      <Route path="/pagination" element={<Pagination pageSize={PAGE_SIZE} />} />
      <Route path="/dnd" element={<DND />} />
      <Route path="/nested-checkboxes" element={<NestedCheckbox />} />
      <Route path="/tic-tac-toe" element={<TicTacToe />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/autocompletesearch" element={<AutoCompleteSearch />} />
    </Routes>
  </BrowserRouter>
);
