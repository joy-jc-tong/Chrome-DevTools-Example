const BlockingOverrides = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Blocking / Request Overrides（Request blocking / Local overrides）</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Blocking / Request Overrides 頁面的學習內容。在這裡您可以學習如何阻擋特定的網路請求，設定本地覆寫規則，以及模擬不同的網路環境條件。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>請求阻擋設定</li>
            <li>本地覆寫規則</li>
            <li>網路環境模擬</li>
            <li>除錯與測試</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlockingOverrides;
