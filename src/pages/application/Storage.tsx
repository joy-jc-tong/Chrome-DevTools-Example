const Storage = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Storage 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          在 Storage 面板中，您可以檢視和管理各種儲存機制，包括 Local Storage、Session Storage、IndexedDB、Web SQL 和 Cookies。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Local Storage</h3>
            <p className="text-sm text-gray-600 mb-3">
              持久性儲存，資料會一直保存直到被手動清除。
            </p>
            <div className="text-xs text-gray-500">
              容量：通常為 5-10MB
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Session Storage</h3>
            <p className="text-sm text-gray-600 mb-3">
              會話性儲存，關閉瀏覽器分頁後資料會消失。
            </p>
            <div className="text-xs text-gray-500">
              容量：通常為 5-10MB
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">IndexedDB</h3>
            <p className="text-sm text-gray-600 mb-3">
              非關聯式資料庫，支援複雜資料結構和大量資料。
            </p>
            <div className="text-xs text-gray-500">
              容量：通常為可用磁碟空間的 50%
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Web SQL</h3>
            <p className="text-sm text-gray-600 mb-3">
              關聯式資料庫，使用 SQL 語法（已棄用）。
            </p>
            <div className="text-xs text-gray-500">
              狀態：已棄用，建議使用 IndexedDB
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-blue-700">
            <li>檢視和編輯儲存資料</li>
            <li>清除特定儲存空間</li>
            <li>監控儲存使用量</li>
            <li>除錯儲存相關問題</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Storage;
