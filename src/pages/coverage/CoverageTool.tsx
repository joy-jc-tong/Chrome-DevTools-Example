export default function CoverageTool() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Coverage（找未用 CSS / JS）</h1>
        <p className="text-gray-700">
          Coverage 可以分析在頁面載入與操作過程中，哪些 CSS / JS 有被使用，哪些沒有。
          結果會顯示「已執行 / 未使用」的位元組數，幫助你發現可以延後載入或拆分的程式碼。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想找出哪些 CSS / JS 沒有被用到，避免浪費流量。</li>
          <li>想規劃哪些模組可以改成延遲載入（lazy load）。</li>
          <li>想優化效能，減少首次載入的資源體積。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>按 ⌘/Ctrl+Shift+P，輸入 Show Coverage 打開 Coverage 面板。</li>
          <li>點 Start instrumenting coverage 開始錄製。</li>
          <li>操作頁面（例：載入延遲模組、套用延遲 CSS）。</li>
          <li>停止錄製後，依 Unused bytes 排序，找出可延後或拆分的資源清單。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/coverage/coverage-lazy.html`} target="_blank" rel="noreferrer">
            開啟示範頁（延遲模組 / CSS）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>將 `chunk-b.js` 設為互動後才載入（按鈕觸發），驗證初始未用率下降。</li>
            <li>把 `late.css` 中不必要規則拆到條件載入，重測 Coverage。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
