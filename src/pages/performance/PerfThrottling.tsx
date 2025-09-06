const PerfThrottling = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">CPU / Network 模擬</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Performance Throttling 功能的學習內容。在這裡您可以學習如何模擬不同的 CPU 和網路條件，以便在各種環境下測試應用程式的效能表現。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>CPU 節流模擬設定</li>
            <li>網路節流模擬設定</li>
            <li>不同裝置效能模擬</li>
            <li>慢速網路環境測試</li>
            <li>低端裝置效能測試</li>
            <li>節流條件下的效能分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PerfThrottling;
