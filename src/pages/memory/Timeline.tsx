const Timeline = () => {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Memory Timeline</h1>
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-lg text-gray-700 mb-4">
          Memory Timeline 提供記憶體使用量的時間軸視圖，讓您能夠觀察記憶體使用模式的變化趨勢，並識別記憶體洩漏。
        </p>
        
        <div className="space-y-6">
          <div className="p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">什麼是 Memory Timeline？</h3>
            <p className="text-blue-700">
              Memory Timeline 會持續監控記憶體使用量，並以圖表形式顯示記憶體分配的變化趨勢，幫助您識別記憶體洩漏和效能問題。
            </p>
          </div>

          <div className="p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">監控指標</h3>
            <ul className="list-disc list-inside space-y-1 text-green-700">
              <li>JS Heap：JavaScript 堆記憶體使用量</li>
              <li>Documents：文件物件數量</li>
              <li>DOM Nodes：DOM 節點數量</li>
              <li>Event Listeners：事件監聽器數量</li>
              <li>GPU Memory：GPU 記憶體使用量</li>
            </ul>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold text-yellow-800 mb-2">使用步驟</h3>
            <ol className="list-decimal list-inside space-y-1 text-yellow-700">
              <li>開啟 Chrome DevTools</li>
              <li>切換到 Memory 面板</li>
              <li>選擇 "Timeline" 標籤</li>
              <li>點擊 "Record" 開始記錄</li>
              <li>執行需要測試的操作</li>
              <li>點擊 "Stop" 停止記錄</li>
              <li>分析記憶體使用趨勢</li>
            </ol>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-800 mb-2">分析重點</h3>
            <ul className="list-disc list-inside space-y-1 text-purple-700">
              <li>記憶體使用量是否持續上升</li>
              <li>垃圾回收後記憶體是否釋放</li>
              <li>特定操作是否導致記憶體洩漏</li>
              <li>記憶體使用峰值和谷值</li>
            </ul>
          </div>

          <div className="p-4 bg-red-50 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">常見問題模式</h3>
            <ul className="list-disc list-inside space-y-1 text-red-700">
              <li>鋸齒狀上升：記憶體洩漏</li>
              <li>階梯狀上升：未釋放的物件累積</li>
              <li>突然上升：大量物件分配</li>
              <li>持續上升：記憶體洩漏嚴重</li>
            </ul>
          </div>

          <div className="p-4 bg-indigo-50 rounded-lg">
            <h3 className="font-semibold text-indigo-800 mb-2">最佳實踐</h3>
            <ul className="list-disc list-inside space-y-1 text-indigo-700">
              <li>定期監控記憶體使用量</li>
              <li>在關鍵操作前後檢查記憶體</li>
              <li>使用強制垃圾回收測試</li>
              <li>比較不同版本的記憶體使用</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
