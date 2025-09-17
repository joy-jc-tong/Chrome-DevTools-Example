export default function MonitorPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">monitor / monitorEvents / unmonitor</h1>
        <p className="text-gray-700 leading-relaxed">
          Console 提供 <b>monitor(fn)</b> 來自動列印函式的呼叫（含引數），
          <b>monitorEvents(target, types)</b> 來列印事件觸發（含 event 物件），
          以及 <b>unmonitor(fn)</b> / <b>unmonitorEvents(target)</b> 來停止監看。
          適合用於確認 handler 是否「被過度觸發」、或快速盤點某元素上發生了哪些事件。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>monitor(fn)</b>：開始監看某個函式，只要被呼叫就會在 Console 印出 <em>函式名、引數</em>。</li>
          <li><b>unmonitor(fn)</b>：停止監看該函式。</li>
          <li><b>monitorEvents($0, 'scroll')</b>：監看目前選取節點（或 window）的事件，支援字串或陣列（如 <code>['scroll','wheel']</code>）。</li>
          <li><b>unmonitorEvents($0)</b>：停止監看該目標的所有事件。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁。</li>
          <li>在 Console 執行 <code>monitor(window.heavyScrollHandler)</code>，觀察滾動時呼叫頻率。</li>
          <li>切換示範頁的「原始 / throttle / debounce」模式，比較呼叫次數差異。</li>
          <li>在 Elements 選取「可滾動容器」，回 Console 輸入 <code>monitorEvents($0, ['scroll','wheel'])</code>，觀察事件洪流。</li>
          <li>使用 <code>unmonitor(window.heavyScrollHandler)</code> 與 <code>unmonitorEvents($0)</code> 停止監看。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/console/monitor.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（過度觸發的 scroll handler）
          </a>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>執行 <code>monitor(window.heavyScrollHandler)</code>，滾動容器，觀察呼叫次數。</li>
            <li>切到 <b>throttle</b> 模式再滾動，確認呼叫頻率下降。</li>
            <li>改用 <b>debounce</b> 模式，滾動後鬆手，觀察只在結束時觸發。</li>
            <li>在 Elements 選取容器，執行 <code>monitorEvents($0, ['scroll','wheel'])</code>，比對事件量。</li>
            <li>用 <code>unmonitor</code> / <code>unmonitorEvents</code> 停止監看，清空 Console。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>若只想看「誰在呼叫」而不想改動原始碼，<b>monitor()</b> 比在程式加 <code>console.log</code> 更乾淨。</li>
          <li>用 <b>monitorEvents(window, 'resize')</b> 或 <b>monitorEvents(document, 'click')</b> 快速盤點全域事件。</li>
          <li>搭配 <b>Live Expressions</b> 監看 <code>performance.now() - t0</code>，邊滾動邊觀察 handler 密度。</li>
        </ul>
      </section>
    </div>
  );
}
