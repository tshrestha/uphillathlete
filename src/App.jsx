import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AerobicBasePlan from "./pages/AerobicBasePlan";
import UphillSkimoBasePlan from "./pages/UphillSkimoBasePlan";
import R2R2R from "./pages/R2R2R";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerobic-base-plan" element={<AerobicBasePlan />} />
        <Route path="/uphill-skimo-base-plan" element={<UphillSkimoBasePlan />} />
        <Route path="/r2r2r" element={<R2R2R />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
