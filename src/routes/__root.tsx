import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import App from '../App';

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <App>
        <Outlet />
      </App>
      <TanStackRouterDevtools />
    </QueryClientProvider>
  ),
});