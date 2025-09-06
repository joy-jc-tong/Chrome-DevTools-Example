const Manifest = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Manifest 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Manifest 面板顯示 Web App Manifest 檔案的內容，這是 Progressive Web App (PWA) 的核心配置檔案。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">基本資訊</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">name:</span> 應用程式名稱</div>
              <div><span className="font-medium">short_name:</span> 簡短名稱</div>
              <div><span className="font-medium">description:</span> 應用程式描述</div>
              <div><span className="font-medium">start_url:</span> 啟動 URL</div>
              <div><span className="font-medium">display:</span> 顯示模式</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">圖示設定</h3>
            <p className="text-sm text-gray-600 mb-3">
              icons 陣列定義應用程式在不同裝置和情境下使用的圖示。
            </p>
            <div className="text-xs text-gray-500">
              支援多種尺寸：192x192, 512x512 等
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">顯示模式</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">fullscreen:</span> 全螢幕模式</div>
              <div><span className="font-medium">standalone:</span> 獨立應用程式模式</div>
              <div><span className="font-medium">minimal-ui:</span> 最小化 UI 模式</div>
              <div><span className="font-medium">browser:</span> 瀏覽器模式</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">主題色彩</h3>
            <p className="text-sm text-gray-600 mb-3">
              theme_color 和 background_color 定義應用程式的主題色彩。
            </p>
            <div className="text-xs text-gray-500">
              影響狀態列、位址列等 UI 元素
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
          <h3 className="font-semibold text-purple-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-purple-700">
            <li>檢視 Manifest 檔案內容</li>
            <li>驗證 PWA 安裝條件</li>
            <li>測試不同顯示模式</li>
            <li>檢查圖示和主題設定</li>
            <li>除錯 PWA 相關問題</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Manifest;
