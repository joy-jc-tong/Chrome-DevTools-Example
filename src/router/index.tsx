import { createBrowserRouter } from 'react-router-dom';
import PageShell from '../components/PageShell';
import Elements from '../pages/Elements';
import Console from '../pages/Console';
import Sources from '../pages/Sources';
import Breakpoints from '../pages/sources/Breakpoints';
import XhrFetch from '../pages/sources/XhrFetch';
import Events from '../pages/sources/Events';
import Blackboxing from '../pages/sources/Blackboxing';
import Overrides from '../pages/sources/Overrides';
import Snippets from '../pages/sources/Snippets';
import Network from '../pages/Network';
import Performance from '../pages/Performance';
import Memory from '../pages/Memory';
import HeapSnapshot from '../pages/memory/HeapSnapshot';
import AllocationSampling from '../pages/memory/AllocationSampling';
import Application from '../pages/Application';
import Storage from '../pages/application/Storage';
import Manifest from '../pages/application/Manifest';
import Cookies from '../pages/application/Cookies';
import MoreTools from '../pages/MoreTools';
import CoverageTool from '../pages/coverage/CoverageTool';
import Rendering from '../pages/coverage/Rendering';
import Sensors from '../pages/coverage/Sensors';
import Recorder from '../pages/coverage/Recorder';
import SecurityIssues from '../pages/coverage/SecurityIssues';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
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
import ProtocolPriority from '../pages/network/ProtocolPriority';
import BlockingOverrides from '../pages/network/BlockingOverrides';
import Throttling from '../pages/network/Throttling';
import HAR from '../pages/network/HAR';
import Flamegraphs from '../pages/performance/Flamegraphs';
import PerfThrottling from '../pages/performance/PerfThrottling';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageShell />,
    children: [
      {
        index: true,
        element: <Home />,
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
        children: [
          {
            index: true,
            element: <Breakpoints />,
          },
          {
            path: 'breakpoints',
            element: <Breakpoints />,
          },
          {
            path: 'xhr-fetch',
            element: <XhrFetch />,
          },
          {
            path: 'events',
            element: <Events />,
          },
          {
            path: 'blackboxing',
            element: <Blackboxing />,
          },
          {
            path: 'overrides',
            element: <Overrides />,
          },
          {
            path: 'snippets',
            element: <Snippets />,
          },
        ],
      },
      {
        path: 'network',
        element: <Network />,
        children: [
          {
            index: true,
            element: <ProtocolPriority />,
          },
          {
            path: 'protocol-priority',
            element: <ProtocolPriority />,
          },
          {
            path: 'blocking-overrides',
            element: <BlockingOverrides />,
          },
          {
            path: 'throttling',
            element: <Throttling />,
          },
          {
            path: 'har',
            element: <HAR />,
          },
        ],
      },
      {
        path: 'performance',
        element: <Performance />,
        children: [
          {
            index: true,
            element: <Flamegraphs />,
          },
          {
            path: 'flamegraphs',
            element: <Flamegraphs />,
          },
          {
            path: 'throttling',
            element: <PerfThrottling />,
          },
        ],
      },
      {
        path: 'memory',
        element: <Memory />,
        children: [
          {
            index: true,
            element: <HeapSnapshot />,
          },
          {
            path: 'heap-snapshot',
            element: <HeapSnapshot />,
          },
          {
            path: 'allocation-sampling',
            element: <AllocationSampling />,
          },
        ],
      },
      {
        path: 'application',
        element: <Application />,
        children: [
          {
            index: true,
            element: <Storage />,
          },
          {
            path: 'storage',
            element: <Storage />,
          },
          {
            path: 'manifest',
            element: <Manifest />,
          },
          {
            path: 'cookies',
            element: <Cookies />,
          },
        ],
      },
      {
        path: 'more-tools',
        element: <MoreTools />,
        children: [
          {
            index: true,
            element: <CoverageTool />,
          },
          {
            path: 'coverage',
            element: <CoverageTool />,
          },
          {
            path: 'rendering',
            element: <Rendering />,
          },
          {
            path: 'sensors',
            element: <Sensors />,
          },
          {
            path: 'recorder',
            element: <Recorder />,
          },
          {
            path: 'security-issues',
            element: <SecurityIssues />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
});
