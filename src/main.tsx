import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import './index.css';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

async function enableMocking() {
  let baseUrl = '';
  if (process.env.NODE_ENV !== 'development') {
    baseUrl = 'jesus-ministry-map';
  }

  const { worker } = await import('./api/mocks/browser');
  return worker.start({
    serviceWorker: {
      url: baseUrl ? `${baseUrl}/mockServiceWorker.js` : 'mockServiceWorker.js',
    },
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
})
