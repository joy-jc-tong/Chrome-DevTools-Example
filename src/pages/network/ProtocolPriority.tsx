const ProtocolPriority = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Protocol / Priority（HTTP/2/3 與優先級）</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Protocol / Priority 頁面的學習內容。在這裡您可以學習如何分析 HTTP/2 和 HTTP/3 協議的特性，了解請求優先級的設定，以及優化網路傳輸效能。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>HTTP/2 協議分析</li>
            <li>HTTP/3 協議特性</li>
            <li>請求優先級設定</li>
            <li>傳輸效能優化</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProtocolPriority;
