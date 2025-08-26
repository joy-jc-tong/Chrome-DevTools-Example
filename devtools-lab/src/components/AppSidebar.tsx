import { NavLink } from 'react-router-dom';

const sidebarItems = [
  {
    path: '/elements',
    label: 'Elements',
    description: '檢視與調整 DOM、CSS、排版、可存取性資訊',
  },
  {
    path: '/console',
    label: 'Console',
    description: '檢視 JavaScript 錯誤、警告、日誌訊息',
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
  },
  {
    path: '/performance',
    label: 'Performance',
    description: '分析頁面效能、載入時間、渲染效能',
  },
  {
    path: '/memory',
    label: 'Memory',
    description: '監控記憶體使用量、記憶體洩漏',
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
  return (
    <aside className="fixed left-0 top-16 w-60 h-[calc(100vh-4rem)] bg-gray-100 border-r border-gray-200 overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `block p-3 rounded-lg transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 ${
                    isActive
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'text-gray-700 hover:bg-blue-50'
                  }`
                }
              >
                <div className="font-medium">{item.label}</div>
                <div className="text-sm mt-1 opacity-80">
                  {item.description}
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AppSidebar;
