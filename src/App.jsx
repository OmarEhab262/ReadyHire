import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//pages
import NotFound from "./pages/ErrorPages/NotFound";
import Login from "./pages/Auth/login/Login";
import Signup from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import SelectUser from "./pages/Auth/signup/SelectUser";
import OwnerStageTow from "./pages/Auth/signup/OwnerStageTow";
import Policies from "./pages/Auth/policies/Policies";
import VerifyEmail from "./components/ui/signup/VerifyEmail";

// Initialize the QueryClient for React Query
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/select-user" element={<SelectUser />} />
          <Route path="/owner-stage-tow" element={<OwnerStageTow />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <h2>Protected Route</h2>
              </ProtectedRoute>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
