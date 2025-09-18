export default function DomBreakpoints() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">DOM Breakpoints</h1>
        <p className="text-gray-700 leading-relaxed">
          DOM Breakpoints 就像幫某個網頁元素掛上「監視器」。
          只要這個元素或它的屬性/子節點被改動，瀏覽器就會幫你 自動暫停程式，讓你看是誰動了它。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>清單裡的項目莫名消失 → 設 子樹修改 看是誰刪的。</li>
          <li>按鈕樣式自己變了 → 設 屬性修改 找出改 class 或 style 的程式碼。</li>
          <li>整個元素突然消失 → 設 節點移除 查出是誰 remove。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板 選一個元素（例：某個 <code>&lt;li&gt;</code>）。</li>
          <li>右鍵 → Break on… → 選擇：<br/>
            <span className="ml-4 block">
              <strong>Subtree modifications</strong>：監看子節點的新增/刪除/移動。<br/>
              <strong>Attributes modifications</strong>：監看屬性（class、style、data-*）。<br/>
              <strong>Node removal</strong>：監看這個元素本身被刪掉。
            </span>
          </li>
          <li>回到網頁操作，當變化發生 → DevTools 會在 Sources 面板自動暫停，並顯示 Call Stack（誰呼叫的程式碼）。</li>
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
              href={`${import.meta.env.BASE_URL}fixtures/elements/dom-breakpoints.html?fault=remove`}
              target="_blank"
              rel="noreferrer"
            >
              開啟示範頁（自動移除列表項）
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-900"
              href={`${import.meta.env.BASE_URL}fixtures/elements/dom-breakpoints.html?fault=attr`}
              target="_blank"
              rel="noreferrer"
            >
              開啟示範頁（自動變更屬性）
            </a>
            <a
              className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-900"
              href={`${import.meta.env.BASE_URL}fixtures/elements/dom-breakpoints.html`}
              target="_blank"
              rel="noreferrer"
            >
              開啟示範頁（手動觸發）
            </a>
          </div>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>對列表中的其中一個 <code>&lt;li&gt;</code> 設定 <b>Subtree</b> 或 <b>Node removal</b> 中斷點，觀察自動移除時的暫停位置。</li>
            <li>對任一按鈕設定 <b>Attribute</b> 中斷點，點擊「切換 class」或「改 style」驗證暫停。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
