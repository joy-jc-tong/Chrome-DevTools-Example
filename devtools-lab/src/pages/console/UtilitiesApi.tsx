const UtilitiesApi = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Utilities API</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Utilities API 提供了一系列實用的除錯工具和輔助函數，幫助開發者更有效地進行程式碼除錯和效能分析。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">核心功能：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>monitor() - 監控函數調用</li>
            <li>monitorEvents() - 監控 DOM 事件</li>
            <li>profile() - 效能分析</li>
            <li>profileEnd() - 結束效能分析</li>
            <li>copy() - 複製物件到剪貼簿</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UtilitiesApi;
