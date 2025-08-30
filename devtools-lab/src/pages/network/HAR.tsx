const HAR = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">HAR 匯出 / 匯入</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 HAR 匯出 / 匯入頁面的學習內容。在這裡您可以學習如何匯出和匯入 HTTP Archive (HAR) 檔案，分析網路請求記錄，以及與其他開發者或工具分享網路分析結果。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>HAR 檔案匯出</li>
            <li>HAR 檔案匯入</li>
            <li>網路請求記錄分析</li>
            <li>分析結果分享</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HAR;
