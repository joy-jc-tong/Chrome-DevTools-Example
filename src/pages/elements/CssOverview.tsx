export default function CssOverview() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">CSS Overview</h1>
        <p className="text-gray-700 leading-relaxed">
          CSS Overview 會整理整個頁面的樣式資訊，像是色彩、字型、媒體查詢，還會檢查文字對比問題或找出沒用到的 CSS。
          它就像是一個快速的設計稽核工具。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想看整個網站用了哪些顏色 → 用 Colors 看色票分布。</li>
          <li>發現文字太淺、對比不足 → 在 Contrast issues 找問題與修正建議。</li>
          <li>想確認全站字型與媒體查詢狀況 → 看 Fonts / Media queries 統計。</li>
          <li>懷疑有多餘 CSS → 有時會在 Unused declarations 找到。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟要檢查的頁面。</li>
          <li>按 Ctrl/⌘ + Shift + P，輸入 Show CSS Overview。</li>
          <li>點 Capture overview 進行擷取。</li>
          <li>在 Colors、Contrast issues、Fonts、Media queries 區塊查看結果，點項目可回到對應元素。</li>
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
              href={`${import.meta.env.BASE_URL}fixtures/elements/css-overview.html`}
              target="_blank" rel="noreferrer"
            >
              開啟示範頁（含對比不足＆相近色）
            </a>
          </div>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 CSS Overview 中查看 <b>Contrast issues</b>，找到對比不足的段落與按鈕文字。</li>
            <li>在 Colors 區塊觀察是否有大量相近色（接近但不同編碼，如 <code>#999</code> 與 <code>#9a9a9a</code>）。</li>
            <li>在 Fonts / Media queries 檢查字體與斷點策略是否一致。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
