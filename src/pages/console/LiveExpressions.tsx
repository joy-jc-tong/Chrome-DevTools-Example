export default function LiveExpressions() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Live Expressions</h1>
        <p className="text-gray-700 leading-relaxed">
          Live Expressions 可在 Console 頂部固定顯示一個表達式的即時結果，用於長期監看變數或狀態，
          不需要一直手動輸入。常見用途包括：持續觀察 FPS、某個全域變數、Redux state、或 DOM 元素屬性變化。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>透過 Console 右上角的 <b>眼睛圖示（⋮ → Create live expression）</b> 新增。</li>
          <li>輸入任何 JS 表達式（例如 <code>document.title</code>、<code>window.state.count</code>）。</li>
          <li>結果會即時更新，並固定在 Console 頂部。</li>
          <li>支援多個 Live Expressions 並排顯示。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開下方示範頁。</li>
          <li>在 Console 面板右上，點擊「眼睛」圖示 → <b>Create live expression</b>。</li>
          <li>輸入要監看的表達式，例如 <code>performance.now() - window.t0</code>。</li>
          <li>頁面持續更新時，Console 頂部會即時顯示數值變化。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href="/fixtures/console/live-expressions.html"
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（含計時器與 state）
          </a>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>監看 <code>performance.now() - window.t0</code>：觀察自載入以來的經過時間。</li>
            <li>監看 <code>window.appState.count</code>：每秒增加的計數器。</li>
            <li>監看 <code>document.title</code>：點擊「改標題」按鈕後，觀察值是否即時更新。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>監控 <b>FPS</b> 或 <code>window.performance.memory.usedJSHeapSize</code>，快速觀察效能。</li>
          <li>監看 Redux / Vuex / Zustand 等全域 state，取代臨時寫 <code>setInterval(console.log…)</code>。</li>
          <li>可同時新增多個 Live Expressions，形成簡易「監控面板」。</li>
        </ul>
      </section>
    </div>
  );
}
