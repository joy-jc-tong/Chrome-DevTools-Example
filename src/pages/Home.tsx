import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Chrome DevTools 練功房
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Elements</h2>
          <p className="text-gray-600 mb-4">檢視與調整 DOM、CSS、排版、可存取性資訊</p>
          <Link to="/elements" className="text-blue-500 hover:text-blue-700">開始學習 →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-green-600">Console</h2>
          <p className="text-gray-600 mb-4">檢視 JavaScript 錯誤、警告、日誌訊息</p>
          <Link to="/console" className="text-green-500 hover:text-green-700">開始學習 →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-purple-600">Sources</h2>
          <p className="text-gray-600 mb-4">調試 JavaScript 代碼，設置斷點</p>
          <Link to="/sources" className="text-purple-500 hover:text-purple-700">開始學習 →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-orange-600">Network</h2>
          <p className="text-gray-600 mb-4">監控網路請求和響應</p>
          <Link to="/network" className="text-orange-500 hover:text-orange-700">開始學習 →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-red-600">Performance</h2>
          <p className="text-gray-600 mb-4">分析頁面性能和優化</p>
          <Link to="/performance" className="text-red-500 hover:text-red-700">開始學習 →</Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">Memory</h2>
          <p className="text-gray-600 mb-4">監控記憶體使用和洩漏</p>
          <Link to="/memory" className="text-indigo-500 hover:text-indigo-700">開始學習 →</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
