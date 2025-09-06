const Breakpoints = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Breakpoints</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          學習如何在 Chrome DevTools 中設定和管理中斷點，這是除錯 JavaScript 程式碼的核心功能。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>設定行中斷點</li>
            <li>條件中斷點</li>
            <li>日誌中斷點</li>
            <li>DOM 中斷點</li>
            <li>XHR/Fetch 中斷點</li>
            <li>事件中斷點</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">實作練習：</h3>
          <p className="text-blue-700">
            開啟瀏覽器開發者工具，在 Sources 面板中嘗試設定各種類型的中斷點，觀察程式執行流程。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Breakpoints;
