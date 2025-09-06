export default function CoverageTool() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Coverage（找未用 CSS / JS）</h1>
        <p className="text-gray-700">
          透過 <b>Command Menu</b>（⌘/Ctrl+Shift+P）→ <b>Show Coverage</b> 開啟 Coverage 面板，
          錄製期間統計「已執行/未使用」位元組，協助盤點可延後載入或分拆的模組。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁 → Coverage 面板點 <b>Start instrumenting coverage</b>。</li>
          <li>點「載入延遲模組」與「套用延遲 CSS」。</li>
          <li>停止錄製，依「Unused bytes」排序，列出可延後載入清單。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href="/fixtures/coverage/coverage-lazy.html" target="_blank" rel="noreferrer">
          開啟示範頁（延遲模組 / CSS）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>將 `chunk-b.js` 設為互動後才載入（按鈕觸發），驗證初始未用率下降。</li>
          <li>把 `late.css` 中不必要規則拆到條件載入，重測 Coverage。</li>
        </ul>
      </section>
    </div>
  );
}
