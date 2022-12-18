import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import App from "../pages/App";

export default function RoutesComponentes() {
  return (
      <Routes>
        <Route  path="/login" element={<Login/>} />
        <Route  path="/" element={<App/>} />
      </Routes>
  );
}
