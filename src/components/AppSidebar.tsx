import { NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

// 定義側邊欄項目結構
interface SidebarChild {
  path: string;
  name: string;
}

interface SidebarItem {
  path: string;
  label: string;
  description: string;
  children?: SidebarChild[];
}

const sidebarItems: SidebarItem[] = [
  {
    path: '/elements',
    label: 'Elements',
    description: '檢視與調整 DOM、CSS、排版、可存取性資訊',
    children: [
      { path: '/elements/dom-breakpoints', name: 'DOM Breakpoints' },
      { path: '/elements/event-listeners', name: 'Event Listeners' },
      { path: '/elements/layout', name: 'Layout Pane' },
      { path: '/elements/css-overview', name: 'CSS Overview' },
      { path: '/elements/changes', name: 'Changes' },
      { path: '/elements/accessibility', name: 'Accessibility' },
    ],
  },
  {
    path: '/console',
    label: 'Console',
    description: '檢視 JavaScript 錯誤、警告、日誌訊息',
    children: [
      { path: '/console/live-expressions', name: 'Live Expressions' },
      { path: '/console/utilities-api', name: 'Utilities API' },
      { path: '/console/monitor', name: 'Monitor' },
      { path: '/console/profiles', name: 'Profiles' },
    ],
  },
  {
    path: '/sources',
    label: 'Sources',
    description: '除錯 JavaScript 程式碼、設定中斷點',
  },
  {
    path: '/network',
    label: 'Network',
    description: '監控網路請求、回應時間、資源載入',
    children: [
      { path: '/network/initiator', name: 'Initiator / Dependencies' },
      { path: '/network/protocol-priority', name: 'Protocol / Priority' },
      { path: '/network/websocket', name: 'WebSocket / Events' },
      { path: '/network/blocking-overrides', name: 'Blocking / Overrides' },
      { path: '/network/throttling', name: 'Throttling（自訂網路）' },
      { path: '/network/har', name: 'HAR 匯出 / 匯入' },
    ],
  },
  {
    path: '/performance',
    label: 'Performance',
    description: '分析頁面效能、載入時間、渲染效能',
    children: [
      { path: '/performance/screenshots', name: 'Screenshots / Filmstrip' },
      { path: '/performance/cls', name: 'Web Vitals Lane & Layout Shift Regions' },
      { path: '/performance/flamegraphs', name: 'Main / Bottom-Up / Call Tree 讀法' },
      { path: '/performance/throttling', name: 'CPU / Network 模擬' },
    ],
  },
  {
    path: '/memory',
    label: 'Memory',
    description: '監控記憶體使用量、記憶體洩漏',
    children: [
      { path: '/memory/heap-snapshot', name: 'Heap Snapshot' },
      { path: '/memory/allocation-sampling', name: 'Allocation Sampling' },
      { path: '/memory/timeline', name: 'Timeline' },
    ],
  },
  {
    path: '/application',
    label: 'Application',
    description: '管理儲存空間、快取、服務工作者',
  },
  {
    path: '/coverage',
    label: 'Coverage',
    description: '檢視程式碼覆蓋率、未使用的程式碼',
  },
];

const AppSidebar = () => {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  // 根據當前路徑自動展開對應的父項
  useEffect(() => {
    const currentPath = location.pathname;
    const newExpandedItems = new Set(expandedItems);
    
    // 檢查當前路徑是否屬於某個父項
    for (const item of sidebarItems) {
      if (item.children) {
        const hasActiveChild = item.children.some(child => 
          currentPath === child.path || currentPath.startsWith(item.path + '/')
        );
        if (hasActiveChild) {
          newExpandedItems.add(item.path);
        }
      }
    }
    
    setExpandedItems(newExpandedItems);
  }, [location.pathname]);

  const toggleExpanded = (path: string) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(path)) {
      newExpandedItems.delete(path);
    } else {
      newExpandedItems.add(path);
    }
    setExpandedItems(newExpandedItems);
  };

  const isParentActive = (item: SidebarItem) => {
    if (!item.children) return false;
    return item.children.some((child: SidebarChild) => 
      location.pathname === child.path || location.pathname.startsWith(item.path + '/')
    );
  };

  return (
    <aside className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] bg-gray-100 border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              {/* 父項 */}
              <div className="mb-1">
                <button
                  onClick={() => item.children ? toggleExpanded(item.path) : undefined}
                  className={`w-full text-left p-3 rounded-lg transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 ${
                    isParentActive(item)
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm mt-1 opacity-80">
                        {item.description}
                      </div>
                    </div>
                    {item.children && (
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedItems.has(item.path) ? 'rotate-90' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                </button>
              </div>

              {/* 子項 */}
              {item.children && expandedItems.has(item.path) && (
                <ul className="ml-4 space-y-1">
                  {item.children.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-lg text-sm transition-colors duration-200 hover:bg-blue-50 hover:text-blue-700 ${
                            isActive
                              ? 'bg-blue-100 text-blue-700 border-l-2 border-blue-500'
                              : 'text-gray-600 hover:bg-blue-50'
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
