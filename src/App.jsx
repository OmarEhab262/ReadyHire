import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/login/Login";
import NotFound from "./pages/ErrorPages/NotFound";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import Signup from "./pages/Auth/signup/Signup";

export default function FormComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <div>Welcome to the protected page!</div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
