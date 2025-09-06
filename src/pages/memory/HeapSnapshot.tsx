const HeapSnapshot = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Heap Snapshot</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Heap Snapshot 是 Chrome DevTools 中強大的記憶體分析工具，可以幫助您檢測記憶體洩漏和優化記憶體使用。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">什麼是 Heap Snapshot？</h3>
            <p className="text-blue-700">
              Heap Snapshot 會拍攝 JavaScript 堆記憶體的快照，顯示所有物件的記憶體使用情況，包括物件之間的引用關係。
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">主要功能</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700">
              <li>檢測記憶體洩漏</li>
              <li>分析物件引用關係</li>
              <li>識別記憶體使用最多的物件</li>
              <li>比較不同時間點的記憶體狀態</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">使用步驟</h3>
            <ol className="list-decimal list-inside space-y-1 text-yellow-700">
              <li>開啟 Chrome DevTools</li>
              <li>切換到 Memory 面板</li>
              <li>選擇 "Heap snapshot"</li>
              <li>點擊 "Take snapshot" 拍攝快照</li>
              <li>分析結果並識別問題</li>
            </ol>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">注意事項</h3>
            <ul className="list-disc list-inside space-y-1 text-red-700">
              <li>快照會消耗大量記憶體</li>
              <li>建議在開發環境中使用</li>
              <li>避免在生產環境頻繁拍攝快照</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeapSnapshot;
