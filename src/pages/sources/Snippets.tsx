const Snippets = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Snippets</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          學習如何使用 Snippets 功能來建立和執行可重複使用的 JavaScript 程式碼片段，提升開發效率。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>建立程式碼片段</li>
            <li>執行 Snippets</li>
            <li>除錯程式碼片段</li>
            <li>儲存常用腳本</li>
            <li>自動化測試腳本</li>
            <li>效能測試工具</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
          <h3 className="font-semibold text-indigo-800 mb-2">應用場景：</h3>
          <p className="text-indigo-700">
            Snippets 非常適合用於快速測試 API、執行資料分析、建立自動化腳本，或是儲存常用的除錯程式碼。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
