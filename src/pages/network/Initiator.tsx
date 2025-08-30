const Initiator = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Initiator / Dependencies（追來源與鏈結）</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Initiator / Dependencies 頁面的學習內容。在這裡您可以學習如何追蹤網路請求的來源，分析請求之間的依賴關係，以及了解資源載入的觸發鏈結。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>請求來源追蹤</li>
            <li>依賴關係分析</li>
            <li>載入鏈結檢視</li>
            <li>效能優化診斷</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Initiator;
