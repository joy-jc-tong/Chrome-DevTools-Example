const Sources = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Sources 面板</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Sources 面板的學習內容。在這裡您可以學習如何除錯 JavaScript 程式碼、設定中斷點以及進行程式碼分析。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>JavaScript 程式碼除錯</li>
            <li>中斷點設定與管理</li>
            <li>變數監控與檢查</li>
            <li>呼叫堆疊分析</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sources;
