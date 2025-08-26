const Network = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Network 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Network 面板的學習內容。在這裡您可以學習如何監控網路請求、分析回應時間以及檢查資源載入狀況。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>網路請求監控</li>
            <li>回應時間分析</li>
            <li>資源載入檢查</li>
            <li>效能優化技巧</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Network;
