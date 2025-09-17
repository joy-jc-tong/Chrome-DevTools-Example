export default function Accessibility() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Accessibility Pane（Name / Role / Value）</h1>
        <p className="text-gray-700 leading-relaxed">
          Accessibility 面板可檢查目前選取節點的「計算後無障礙資訊」：包括 <b>Role</b>、<b>Name</b>（可見名稱或替代文字）、
          以及 <b>States/Properties</b>（如 <code>aria-pressed</code>、<code>aria-hidden</code>）。適合排查「按鈕被做成 div、鍵盤無法操作、
          名稱缺漏、誤用 aria 屬性」等常見問題。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>Computed Properties</b>：查看最終的 Name / Role / Value 與是否可聚焦。</li>
          <li><b>Accessibility Tree</b>：確認節點是否被隱藏（例如被 <code>aria-hidden</code> 或 CSS 影響）。</li>
          <li><b>Keyboard</b>：檢查是否能以 <kbd>Tab</kbd> 聚焦、以 <kbd>Enter</kbd>/<kbd>Space</kbd> 觸發。</li>
          <li><b>States</b>：例如 <code>aria-pressed</code>、<code>aria-expanded</code> 必須與實際 UI 同步。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，於 Elements 選取對應元素。</li>
          <li>切到右側 <b>Accessibility</b> 面板，檢查 <em>Computed name / Role / Keyboard-focusable / Properties</em>。</li>
          <li>依說明修正（改 tag、補 aria-label、補 <code>tabindex</code> 與鍵盤事件、同步 state）。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href={`${import.meta.env.BASE_URL}fixtures/elements/accessibility.html`}
              target="_blank" rel="noreferrer"
            >
              開啟示範頁（含多種 a11y 問題）
            </a>
          </div>

          <ol className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>選取「假按鈕」區（用 <code>&lt;div&gt;</code> 做的按鈕）。在 Accessibility 檢查 Role/Name。將其修正為真正的 <code>&lt;button&gt;</code> 或補上 <code>role="button"</code>、<code>tabindex="0"</code>、鍵盤事件。</li>
            <li>選取「圖示按鈕」（只有 SVG 沒有 accessible name）。補上 <code>aria-label</code> 或加上可見文字。</li>
            <li>選取「切換開關」。按下後檢查 <code>aria-pressed</code> 是否有同步更新。</li>
            <li>選取「被誤用 aria-hidden 的段落」。移除多餘的 <code>aria-hidden="true"</code> 讓它回到無障礙樹。</li>
            <li>檢查標題階層（有 <code>h1</code> 後直接 <code>h3</code> 的錯誤）。修正結構或用 DevTools 臨時改標籤。</li>
          </ol>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>在暫停互動或測試鍵盤時，開啟 <b>Rendering → Emulate vision deficiencies</b> 模擬視覺狀況（延伸檢查）。</li>
          <li>搭配 Console 的 <code>getEventListeners($0)</code> 檢查鍵盤事件是否有綁到目前元素。</li>
          <li>按鈕/連結必須可用鍵盤操作：<kbd>Tab</kbd> 聚焦、<kbd>Enter</kbd>/<kbd>Space</kbd> 觸發。</li>
        </ul>
      </section>
    </div>
  );
}
