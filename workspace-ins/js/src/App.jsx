import { RouterProvider } from 'react-router-dom';
import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import Spinner from '@/components/Spinner';


// react-query 사용
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <React.Suspense fallback={ <Spinner.FullScreen /> }>
        <RouterProvider router={ router } />
      </React.Suspense>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App;