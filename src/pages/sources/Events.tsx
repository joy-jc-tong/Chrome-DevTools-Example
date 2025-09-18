export default function EventsBreakpoints() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Event Listener Breakpoints</h1>
        <p className="text-gray-700 leading-relaxed">
          Event Listener Breakpoints 可以讓程式在 事件被觸發的那一刻 停下來。
          像鍵盤輸入、計時器觸發、動畫開始等，都能即時中斷。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想確認「是哪個程式碼」在處理鍵盤輸入。</li>
          <li>想追蹤計時器（setInterval / setTimeout）到底從哪裡來。</li>
          <li>想鎖定動畫或滑鼠事件的觸發點。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources 面板右側找到 Event Listener Breakpoints。</li>
          <li>展開類別並勾選要監看的事件（例：Timer → setInterval、Keyboard → keydown）。</li>
          <li>回到頁面操作：<br/>
            <span className="ml-4 block">
              按「Start interval」→ 會在計時器事件觸發時停下。<br/>
              在輸入框打字 → 會在鍵盤事件觸發時停下。
            </span>
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/events.html`} target="_blank" rel="noreferrer">
            開啟示範頁（Timer / Keyboard）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>找到 <code>setInterval</code> 建立的位置（呼叫堆疊應顯示來源）。</li>
            <li>勾 <b>Animation</b> 再按「開始動畫」，在 <code>requestAnimationFrame</code> 處停下。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
