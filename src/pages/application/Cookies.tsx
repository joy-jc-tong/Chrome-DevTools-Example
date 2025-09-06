const Cookies = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Cookies 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Cookies 面板讓您檢視、編輯和管理網站設定的 Cookies，包括它們的屬性、值和過期時間。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Cookie 屬性</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">Name:</span> Cookie 名稱</div>
              <div><span className="font-medium">Value:</span> Cookie 值</div>
              <div><span className="font-medium">Domain:</span> 適用網域</div>
              <div><span className="font-medium">Path:</span> 適用路徑</div>
              <div><span className="font-medium">Expires:</span> 過期時間</div>
              <div><span className="font-medium">Size:</span> Cookie 大小</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">安全屬性</h3>
            <div className="space-y-2 text-sm">
              <div><span className="font-medium">HttpOnly:</span> 僅限 HTTP 存取</div>
              <div><span className="font-medium">Secure:</span> 僅限 HTTPS 傳輸</div>
              <div><span className="font-medium">SameSite:</span> 跨站請求限制</div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Cookie 類型</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Session Cookies</h4>
                <p className="text-xs text-gray-600">關閉瀏覽器後自動刪除</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-1">Persistent Cookies</h4>
                <p className="text-xs text-gray-600">有明確過期時間的 Cookies</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">管理功能</h3>
            <div className="space-y-2 text-sm">
              <div>• 檢視所有 Cookies 的詳細資訊</div>
              <div>• 編輯 Cookie 的值和屬性</div>
              <div>• 刪除單個或所有 Cookies</div>
              <div>• 過濾和搜尋 Cookies</div>
              <div>• 匯出 Cookies 資料</div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-orange-50 rounded-lg">
          <h3 className="font-semibold text-orange-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-orange-700">
            <li>檢視和編輯 Cookie 屬性</li>
            <li>理解 Cookie 安全設定</li>
            <li>管理 Cookie 生命週期</li>
            <li>除錯 Cookie 相關問題</li>
            <li>測試 Cookie 行為</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
