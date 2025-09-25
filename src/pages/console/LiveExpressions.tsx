export default function LiveExpressions() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Live Expressions</h1>
        <p className="text-gray-700 leading-relaxed">
          Live Expressions 可以在 Console 上方固定顯示一個程式表達式的結果，會隨著頁面變化自動更新。
          就像是幫變數或狀態掛一個「即時監控器」。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想持續觀察 FPS 或效能指標，不用一直打指令。</li>
          <li>想看某個全域變數（例如 window.state.count）是不是被改動。</li>
          <li>想追蹤某個 DOM 元素的屬性（像 document.title）有沒有變化。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Console 面板。</li>
          <li>點右上角的「眼睛」圖示 → Create live expression。</li>
          <li>輸入任何 JS 表達式（例：performance.now()。</li>
          <li>結果會即時更新，並固定顯示在 Console 頂部，可以同時建立多個。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/console/live-expressions.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（含計時器與 state）
          </a>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>監看 <code>performance.now()</code>：觀察自載入以來的經過時間。</li>
            <li>監看 <code>window.appState.count</code>：每秒增加的計數器。</li>
            <li>監看 <code>document.title</code>：點擊「改標題」按鈕後，觀察值是否即時更新。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
