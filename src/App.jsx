import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AerobicBasePlan from "./pages/AerobicBasePlan";
import Home from "./pages/Home";
import R2R2R from "./pages/R2R2R";
import UphillSkimoBasePlan from "./pages/UphillSkimoBasePlan";

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
