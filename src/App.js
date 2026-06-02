import { Route, Routes } from "react-router-dom";
import "./App.css";
import CustomerRoutes from "./Routers/CustomerRoutes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<CustomerRoutes />} />
      {/* Admin route added here once auth + admin panel are built */}
    </Routes>
  );
}

export default App;
