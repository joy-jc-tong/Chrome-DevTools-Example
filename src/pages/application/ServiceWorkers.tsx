const ServiceWorkers = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Service Workers 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Service Workers 面板讓您檢視和管理註冊的 Service Workers，包括它們的狀態、快取策略和事件監聽器。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Service Worker 狀態</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium">Installing:</span>
                <span className="ml-2 text-gray-600">正在安裝中</span>
              </div>
              <div>
                <span className="font-medium">Installed:</span>
                <span className="ml-2 text-gray-600">已安裝</span>
              </div>
              <div>
                <span className="font-medium">Activating:</span>
                <span className="ml-2 text-gray-600">正在啟動中</span>
              </div>
              <div>
                <span className="font-medium">Activated:</span>
                <span className="ml-2 text-gray-600">已啟動</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">快取管理</h3>
            <p className="text-sm text-gray-600 mb-3">
              Service Workers 可以攔截網路請求並提供快取回應，實現離線功能。
            </p>
            <div className="text-xs text-gray-500">
              支援 Cache API 和 IndexedDB 儲存
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">事件監聽</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">fetch:</span> 攔截網路請求</div>
              <div><span className="font-medium">install:</span> Service Worker 安裝事件</div>
              <div><span className="font-medium">activate:</span> Service Worker 啟動事件</div>
              <div><span className="font-medium">message:</span> 與主執行緒通訊</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-green-700">
            <li>檢視 Service Worker 註冊狀態</li>
            <li>監控快取策略和儲存</li>
            <li>除錯 Service Worker 程式碼</li>
            <li>測試離線功能</li>
            <li>強制更新 Service Worker</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceWorkers;
