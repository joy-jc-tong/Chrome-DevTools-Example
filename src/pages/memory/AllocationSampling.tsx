const AllocationSampling = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Allocation Sampling</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Allocation Sampling 是一種輕量級的記憶體分析工具，可以即時監控記憶體分配情況，幫助您找出記憶體洩漏的根源。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">什麼是 Allocation Sampling？</h3>
            <p className="text-blue-700">
              Allocation Sampling 會記錄 JavaScript 物件的分配和釋放情況，提供即時的記憶體使用統計，而不需要拍攝完整的堆快照。
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">主要優勢</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700">
              <li>低效能影響</li>
              <li>即時監控</li>
              <li>詳細的分配統計</li>
              <li>適合長時間監控</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">使用場景</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-700">
              <li>監控長時間運行的應用程式</li>
              <li>檢測漸進式記憶體洩漏</li>
              <li>分析記憶體分配模式</li>
              <li>優化記憶體使用效率</li>
            </ul>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">操作步驟</h3>
            <ol className="list-decimal list-inside space-y-1 text-purple-700">
              <li>開啟 Chrome DevTools</li>
              <li>切換到 Memory 面板</li>
              <li>選擇 "Allocation sampling"</li>
              <li>點擊 "Start" 開始監控</li>
              <li>執行需要測試的操作</li>
              <li>點擊 "Stop" 停止監控</li>
              <li>分析分配統計結果</li>
            </ol>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">解讀結果</h3>
            <ul className="list-disc list-inside space-y-1 text-red-700">
              <li>查看分配最多的函數</li>
              <li>檢查未釋放的物件</li>
              <li>分析記憶體分配趨勢</li>
              <li>識別記憶體洩漏模式</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationSampling;
