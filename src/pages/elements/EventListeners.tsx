export default function EventListeners() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Event Listeners Pane</h1>
        <p className="text-gray-700 leading-relaxed">
          Event Listeners Pane 就像幫元素開一個「事件清單」。
          你可以看到這個元素綁了哪些事件（click、scroll…），事件來自哪個檔案，還能知道是不是 passive。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>點按鈕時反應怪怪的 → 看是不是綁了兩個 click。</li>
          <li>滾動頁面時卡卡的 → 看 scroll 事件是不是 不是 passive。</li>
          <li>想查事件從哪裡來的 → 看來源檔案與行號。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板 選一個元素（例：某個按鈕）。</li>
          <li>切到右邊的 Event Listeners 分頁。</li>
          <li>展開事件類型（click、scroll…），就能看到：<br/>
            <span className="ml-4 block">
              綁了多少事件<br/>
              來源檔案與行號<br/>
              是否標記為 passive
            </span>
          </li>
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
              href={`${import.meta.env.BASE_URL}fixtures/elements/event-listeners.html`}
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

    </div>
  );
}
