import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Chrome DevTools 練功房
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-blue-600">Elements</h2>
          <p className="text-gray-600">檢視與調整 DOM、CSS、排版、可存取性資訊</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-green-600">Console</h2>
          <p className="text-gray-600">檢視 JavaScript 錯誤、警告、日誌訊息</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-purple-600">Sources</h2>
          <p className="text-gray-600">除錯 JavaScript 程式碼，設定中斷點</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-orange-600">Network</h2>
          <p className="text-gray-600">監控網路請求和回應</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-red-600">Performance</h2>
          <p className="text-gray-600">分析頁面效能和優化</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-indigo-600">Memory</h2>
          <p className="text-gray-600">監控記憶體使用和洩漏</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-teal-600">Application</h2>
          <p className="text-gray-600">管理儲存空間、快取、服務工作者</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border">
          <h2 className="text-xl font-semibold mb-3 text-pink-600">More Tools</h2>
          <p className="text-gray-600">更多開發者工具功能</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
