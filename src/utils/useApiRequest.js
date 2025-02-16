import { useQuery, useMutation } from "@tanstack/react-query";
import apiRequest from "./apiRequest";

// Fetch data using React Query's useQuery
export const useFetchData = (endpoint, queryKey, options = {}) => {
  return useQuery({
    queryKey, // Unique query key
    queryFn: () => apiRequest(endpoint, "GET"), // Call the API with GET method
    ...options, // Optional: Pass additional React Query options
  });
};

// Send or mutate data using React Query's useMutation
export const useSendData = (endpoint, method = "POST", options = {}) => {
  return useMutation({
    mutationFn: (bodyData) => apiRequest(endpoint, method, bodyData),
    ...options, // Optional: Pass additional React Query options
  });
};

// Example usage:

// import React from 'react';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useFetchData, useSendData } from './useApiRequest';

// const queryClient = new QueryClient();

// const MyComponent = () => {
//     // Fetch data example
//     const { data, isLoading, error } = useFetchData('/api/resource', ['fetchResource']);

//     // Send data example
//     const mutation = useSendData('/api/resource', 'POST');

//     const handleSendData = () => {
//         mutation.mutate(
//             { name: 'John Doe', email: 'john.doe@example.com' }, // Data to send
//             {
//                 onSuccess: (response) => {
//                     console.log('Data sent successfully:', response);
//                 },
//                 onError: (err) => {
//                     console.error('Error sending data:', err.message);
//                 },
//             }
//         );
//     };

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div>
//             <h1>Fetched Data:</h1>
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//             <button onClick={handleSendData}>Send Data</button>
//         </div>
//     );
// };

// const App = () => (
//     <QueryClientProvider client={queryClient}>
//         <MyComponent />
//     </QueryClientProvider>
// );

// export default App;
