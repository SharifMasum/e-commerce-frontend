import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import CustomerRoutes from "./Routers/CustomerRoutes";
import { getUser } from "./Redux/Auth/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) dispatch(getUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/*" element={<CustomerRoutes />} />
      {/* Admin route added here once auth + admin panel are built */}
    </Routes>
  );
}

export default App;
