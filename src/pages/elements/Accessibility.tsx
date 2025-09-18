export default function Accessibility() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Accessibility Pane</h1>
        <p className="text-gray-700 leading-relaxed">
          Accessibility Pane 會顯示元素的「無障礙資訊」，像是 Role（角色）、Name（名稱或替代文字）、以及狀態屬性（例如 aria-pressed、aria-hidden）。
          它能幫助確認這個元素對螢幕閱讀器或鍵盤使用者是不是友善。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>有些「按鈕」其實是用 <code>&lt;div&gt;</code> 做的，結果鍵盤不能操作。</li>
          <li>圖片沒有 alt 或 aria-label，螢幕閱讀器會唸不出名字。</li>
          <li>元素被 aria-hidden 或 CSS 隱藏，使用者其實看不到。</li>
          <li>像 aria-pressed、aria-expanded 這些狀態沒有和 UI 同步，會讓助讀器誤解。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 選一個元素。</li>
          <li>切到右邊的 Accessibility 面板。</li>
          <li>檢查 Name / Role / Keyboard-focusable / Properties。</li>
          <li>根據需要修正：改正確的 tag、補上 aria-label、設定 tabindex、或同步 aria 狀態。</li>
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

    </div>
  );
}
