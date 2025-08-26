import { createBrowserRouter } from 'react-router-dom';
import PageShell from '../components/PageShell';
import Elements from '../pages/Elements';
import Console from '../pages/Console';
import Sources from '../pages/Sources';
import Network from '../pages/Network';
import Performance from '../pages/Performance';
import Memory from '../pages/Memory';
import Application from '../pages/Application';
import Coverage from '../pages/Coverage';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageShell />,
    children: [
      {
        index: true,
        element: <Elements />,
      },
      {
        path: 'elements',
        element: <Elements />,
      },
      {
        path: 'console',
        element: <Console />,
      },
      {
        path: 'sources',
        element: <Sources />,
      },
      {
        path: 'network',
        element: <Network />,
      },
      {
        path: 'performance',
        element: <Performance />,
      },
      {
        path: 'memory',
        element: <Memory />,
      },
      {
        path: 'application',
        element: <Application />,
      },
      {
        path: 'coverage',
        element: <Coverage />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
