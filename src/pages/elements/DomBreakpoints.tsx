export default function DomBreakpoints() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">DOM Breakpoints</h1>
        <p className="text-gray-700 leading-relaxed">
          在 Elements 面板中，可以為 DOM 節點設置中斷點來追蹤其變化。當選定的節點或其子節點發生修改時，
          程式執行會自動暫停，協助定位觸發變化的程式碼。此功能適用於調試動態內容更新、樣式修改或元素移除等情境。
          可選擇三種類型的中斷點：子樹修改（Subtree）、屬性修改（Attributes）、節點移除（Node removal）。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>子樹修改：當目標節點內的任一子節點被新增、移動或刪除時暫停。</li>
          <li>屬性修改：當目標節點的屬性（含 class、style、data-*）被變更時暫停。</li>
          <li>節點移除：當目標節點本身被從 DOM 中移除時暫停。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板選取目標節點（例如列表中的某一項）。</li>
          <li>於該節點上按右鍵 → <b>Break on…</b> → 選擇 <em>Subtree / Attribute / Node removal</em> 之一。</li>
          <li>回到頁面操作或觸發程式碼變動；程式將在 Sources 面板暫停，並顯示呼叫堆疊。</li>
          <li>展開 <b>Call Stack</b> 與 <b>Scope</b>，定位觸發變化的程式位置與相關變數。</li>
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

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>與 <b>Event Listener Breakpoints</b> 搭配：若不知道由事件或計時器觸發，可同時勾選 <em>Timer</em> 或 <em>Mouse</em> 類別。</li>
          <li>暫停時可在 Console 觀察 <code>$0</code>（目前選取節點）與變動前後的屬性差異。</li>
        </ul>
      </section>
    </div>
  );
}
