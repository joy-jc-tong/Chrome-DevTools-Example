export default function EventsBreakpoints() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Event Listener Breakpoints</h1>
        <p className="text-gray-700">在事件「被觸發」那一刻就停下（Keyboard/Timer/Animation…）。</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → Sources 右側的 <b>Event Listener Breakpoints</b>。</li>
          <li>展開「<b>Timer</b>」勾選 <b>setInterval</b>；展開「<b>Keyboard</b>」勾 <b>keydown</b>。</li>
          <li>在頁面按「Start interval」，或聚焦輸入框打字 → 會在對應事件處停下。</li>
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
