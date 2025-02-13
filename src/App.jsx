import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ScrollTop from "./components/scrollTop/ScrollTop";
//pages
import NotFound from "./pages/ErrorPages/NotFound";
import Login from "./pages/Auth/login/Login";
import Signup from "./pages/Auth/signup/Signup";
import Home from "./pages/home/Home";
import SelectUser from "./pages/Auth/signup/SelectUser";
import OwnerStageTow from "./pages/Auth/signup/OwnerStageTow";
import Policies from "./pages/Auth/policies/Policies";
import VerifyEmail from "./components/signup/VerifyEmail";
import VerificationSuccess from "./components/signup/VerificationSuccess";

// Initialize the QueryClient for React Query
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/select-user" element={<SelectUser />} />
          <Route path="/owner-stage-tow" element={<OwnerStageTow />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route
            path="/verification-success"
            element={<VerificationSuccess />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}
