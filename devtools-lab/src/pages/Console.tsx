const Console = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Console 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Console 面板的學習內容。在這裡您可以學習如何檢視 JavaScript 錯誤、警告訊息以及各種日誌輸出。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>JavaScript 錯誤訊息檢視</li>
            <li>警告與日誌輸出</li>
            <li>Console API 使用</li>
            <li>除錯技巧與方法</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Console;
