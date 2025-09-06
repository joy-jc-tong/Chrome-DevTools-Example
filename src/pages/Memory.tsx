import { Outlet } from 'react-router-dom';

const Memory = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Memory 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          這是 Memory 面板的學習內容。在這裡您可以學習如何監控記憶體使用量、檢測記憶體洩漏以及進行記憶體分析。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>記憶體使用量監控</li>
            <li>記憶體洩漏檢測</li>
            <li>記憶體分析工具</li>
            <li>記憶體優化技巧</li>
          </ul>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Memory;
