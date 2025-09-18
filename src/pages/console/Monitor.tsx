export default function MonitorPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Console Monitor</h1>
        <p className="text-gray-700 leading-relaxed">
          Console 提供一些監看工具，可以自動幫你輸出函式呼叫或事件觸發。
          像 monitor(fn) 會追蹤函式執行，monitorEvents(target, types) 會追蹤事件發生，搭配 unmonitor / unmonitorEvents 可以隨時停掉。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想檢查某個函式是不是「被呼叫太多次」。</li>
          <li>想觀察某個元素上有哪些事件一直在觸發。</li>
          <li>想快速比對不同模式下（例如 throttle / debounce）的差異。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">監看函式：</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>monitor(fn) → 監看函式的呼叫與引數。</li>
              <li>unmonitor(fn) → 停止監看該函式。</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">監看事件：</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
              <li>monitorEvents($0, 'scroll') → 監看目前選到的元素（或 window）的事件。</li>
              <li>monitorEvents($0, ['scroll','wheel']) → 一次監看多種事件。</li>
              <li>unmonitorEvents($0) → 停止監看該元素的所有事件。</li>
            </ul>
          </div>
        </div>
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

    </div>
  );
}
