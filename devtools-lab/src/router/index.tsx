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
import DomBreakpoints from '../pages/elements/DomBreakpoints';
import EventListeners from '../pages/elements/EventListeners';
import Layout from '../pages/elements/Layout';
import CssOverview from '../pages/elements/CssOverview';
import Changes from '../pages/elements/Changes';
import Accessibility from '../pages/elements/Accessibility';
import LiveExpressions from '../pages/console/LiveExpressions';
import UtilitiesApi from '../pages/console/UtilitiesApi';
import Monitor from '../pages/console/Monitor';
import Profiles from '../pages/console/Profiles';

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
        children: [
          {
            index: true,
            element: <DomBreakpoints />,
          },
          {
            path: 'dom-breakpoints',
            element: <DomBreakpoints />,
          },
          {
            path: 'event-listeners',
            element: <EventListeners />,
          },
          {
            path: 'layout',
            element: <Layout />,
          },
          {
            path: 'css-overview',
            element: <CssOverview />,
          },
          {
            path: 'changes',
            element: <Changes />,
          },
          {
            path: 'accessibility',
            element: <Accessibility />,
          },
        ],
      },
      {
        path: 'console',
        element: <Console />,
        children: [
          {
            index: true,
            element: <LiveExpressions />,
          },
          {
            path: 'live-expressions',
            element: <LiveExpressions />,
          },
          {
            path: 'utilities-api',
            element: <UtilitiesApi />,
          },
          {
            path: 'monitor',
            element: <Monitor />,
          },
          {
            path: 'profiles',
            element: <Profiles />,
          },
        ],
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
