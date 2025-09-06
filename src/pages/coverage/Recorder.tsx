const Recorder = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Recorder</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Recorder 是 Chrome DevTools 中的自動化測試工具，可以記錄使用者的操作並生成可重複執行的腳本，用於自動化測試和除錯。
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-orange-50 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2">主要功能：</h3>
            <ul className="list-disc list-inside space-y-1 text-orange-700">
              <li><strong>操作記錄:</strong> 記錄滑鼠點擊、鍵盤輸入等操作</li>
              <li><strong>腳本生成:</strong> 自動生成可執行的測試腳本</li>
              <li><strong>重複執行:</strong> 重複執行記錄的操作</li>
              <li><strong>匯出功能:</strong> 匯出為 Puppeteer 腳本</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">使用步驟：</h3>
            <ol className="list-decimal list-inside space-y-1 text-red-700">
              <li>開啟 Chrome DevTools</li>
              <li>切換到 Recorder 面板</li>
              <li>點擊「Start new recording」</li>
              <li>在頁面上執行要記錄的操作</li>
              <li>點擊「End recording」</li>
              <li>檢視生成的腳本</li>
            </ol>
          </div>

          <div className="p-4 bg-rose-50 rounded-lg">
            <h3 className="font-semibold text-rose-800 mb-2">應用場景：</h3>
            <ul className="list-disc list-inside space-y-1 text-rose-700">
              <li>自動化測試腳本生成</li>
              <li>使用者操作重現</li>
              <li>回歸測試</li>
              <li>效能測試自動化</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recorder;
