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
import Timeline from '../pages/memory/Timeline';
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
import Initiator from '../pages/network/Initiator';
import ProtocolPriority from '../pages/network/ProtocolPriority';
import WebSocket from '../pages/network/WebSocket';
import BlockingOverrides from '../pages/network/BlockingOverrides';
import Throttling from '../pages/network/Throttling';
import HAR from '../pages/network/HAR';
import Screenshots from '../pages/performance/Screenshots';
import Cls from '../pages/performance/Cls';
import Flamegraphs from '../pages/performance/Flamegraphs';
import PerfThrottling from '../pages/performance/PerfThrottling';

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
            element: <Initiator />,
          },
          {
            path: 'initiator',
            element: <Initiator />,
          },
          {
            path: 'protocol-priority',
            element: <ProtocolPriority />,
          },
          {
            path: 'websocket',
            element: <WebSocket />,
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
            element: <Screenshots />,
          },
          {
            path: 'screenshots',
            element: <Screenshots />,
          },
          {
            path: 'cls',
            element: <Cls />,
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
          {
            path: 'timeline',
            element: <Timeline />,
          },
        ],
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
