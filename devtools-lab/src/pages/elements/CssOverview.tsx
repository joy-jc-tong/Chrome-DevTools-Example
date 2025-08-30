export default function CssOverview() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">CSS Overview</h1>
        <p className="text-gray-700 leading-relaxed">
          CSS Overview 可彙整整頁的樣式資訊：色彩、字型、媒體查詢、未使用宣告（若偵測到）與
          <b> 文字對比問題</b>。用於快速稽核設計一致性與可存取性（a11y）。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Colors：列出頁面使用到的色票與近似色；可點擊篩選來源元素。</li>
          <li>Contrast issues：標示對比不足的文字，顯示實際前景/背景與建議修正。</li>
          <li>Fonts / Media queries：統計全站字體與媒體查詢分布，用於設計稽核。</li>
          <li>Unused declarations（有時）：在特定情況下會列出未使用的 CSS 宣告。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟要稽核的頁面（下方示範頁）。</li>
          <li>Command Menu（<kbd>Ctrl/⌘</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>）輸入 <em>“Show CSS Overview”</em>。</li>
          <li>點選 <b>Capture overview</b> 進行擷取。</li>
          <li>瀏覽 <em>Colors / Contrast issues / Fonts / Media queries</em> 區塊，點擊項目回到對應元素。</li>
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
              href="/fixtures/elements/css-overview.html"
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

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>對比不足的文字可在 Elements → Styles 直接調整色碼，再回到 CSS Overview 重擷取驗證。</li>
          <li>若顏色分布過於零碎，考慮建立設計色票與語意色（primary/secondary/neutral）。</li>
          <li>對於跨頁檢查，可用同一套 fixture 不同查詢參數，或用 Recorder 錄流後逐頁擷取。</li>
        </ul>
      </section>
    </div>
  );
}
