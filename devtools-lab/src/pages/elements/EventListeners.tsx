export default function EventListeners() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Event Listeners Pane</h1>
        <p className="text-gray-700 leading-relaxed">
          Event Listeners 面板能快速檢視元素上綁定的事件、來源檔案以及事件是否為{" "}
          <code>passive</code>。這對於調查滾動卡頓、事件重複綁定或事件觸發順序特別有用。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>檢視某元素綁定了哪些事件（例如 click、scroll）。</li>
          <li>定位事件處理程式的來源檔案與行號。</li>
          <li>檢查事件是否為 <code>passive</code>，避免滾動事件阻塞。</li>
          <li>發現重複綁定或記憶體洩漏的潛在來源。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板選取某個 DOM 節點。</li>
          <li>切換到右側的 <b>Event Listeners</b> Pane。</li>
          <li>展開事件類型（例如 click、scroll）。</li>
          <li>檢查來源檔案、事件順序與是否為 passive。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-2">
            使用下方示範頁（會在新分頁開啟）：
          </p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href="/fixtures/elements/event-listeners.html"
              target="_blank"
              rel="noreferrer"
            >
              開啟示範頁
            </a>
          </div>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>檢查按鈕元素上的 <code>click</code> 事件，確認是否被綁定了兩次。</li>
            <li>檢查 <code>scroll</code> 事件，觀察 passive 狀態。</li>
            <li>點擊按鈕，觀察 Console 中的日誌，並對照 Event Listeners Pane。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>可搭配 <b>getEventListeners($0)</b> 在 Console 中快速列出選取元素的事件。</li>
          <li>對滾動相關元素建議設定 passive 事件，避免阻塞主執行緒。</li>
          <li>對可疑元素定期檢查是否被重複綁定事件。</li>
        </ul>
      </section>
    </div>
  );
}
