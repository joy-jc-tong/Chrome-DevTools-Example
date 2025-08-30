const Throttling = () => {
  return (
    <div className="max-w-4xl p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Throttling（自訂網路 / Round-trip）</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700">
          這是 Throttling 頁面的學習內容。在這裡您可以學習如何設定網路節流，模擬慢速網路環境，調整往返時間，以及測試應用程式在不同網路條件下的表現。
        </p>
        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-800 mb-2">學習重點：</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            <li>網路節流設定</li>
            <li>慢速網路模擬</li>
            <li>往返時間調整</li>
            <li>效能測試與優化</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Throttling;
