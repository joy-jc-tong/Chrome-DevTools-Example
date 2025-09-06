const Overrides = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Overrides</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          學習如何使用 Overrides 功能來修改網頁的檔案內容，進行即時的程式碼測試和除錯。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>建立 Override 檔案</li>
            <li>修改 JavaScript 檔案</li>
            <li>修改 CSS 樣式</li>
            <li>修改 HTML 內容</li>
            <li>本地檔案同步</li>
            <li>版本控制整合</li>
          </ul>
        </div>
        <div className="mt-6 p-4 bg-red-50 rounded-lg">
          <h3 className="font-semibold text-red-800 mb-2">注意事項：</h3>
          <p className="text-red-700">
            Overrides 功能會將修改的檔案儲存在本地，重新整理頁面時會使用修改後的版本，這對於快速測試和除錯非常有用。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overrides;
