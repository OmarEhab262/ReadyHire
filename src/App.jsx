import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/ErrorPages/NotFound";
import ProtectedRoute from "./pages/Auth/ProtectedRoute";
import { Toaster } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/home/Home";

// Initialize the QueryClient for React Query
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
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
