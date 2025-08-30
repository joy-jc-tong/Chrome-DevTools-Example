const LiveExpressions = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Live Expressions</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Live Expressions 功能允許您監控 JavaScript 表達式的即時值，無需在程式碼中插入 console.log 語句。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">主要功能：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>即時監控變數值變化</li>
            <li>支援複雜表達式計算</li>
            <li>自動更新顯示結果</li>
            <li>支援物件和陣列展開檢視</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LiveExpressions;
