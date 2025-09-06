export default function MemoryTimelinePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Record allocations over time（記錄配置隨時間）</h1>
        <p className="text-gray-700">
          <b>Record allocations over time</b> 會畫出時間軸上的配置量與存活物件數，觀察長流程是否持續攀升（疑似洩漏）、
          以及 GC 後是否回落。適合在真實使用者路徑（多步操作）中檢查記憶體趨勢。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → Memory 面板 → <b>Record allocations over time</b> → <b>Start</b>。</li>
          <li>依序執行：新增清單 → 切換頁面 → 返回 → 重複幾輪。</li>
          <li>按 <b>Stop</b>，觀察曲線是否回落（GC 後下降）或一路上升（疑洩漏）。</li>
          <li>切換「修正版本」後重做，同步觀察趨勢變化。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href="/fixtures/memory/memory-timeline.html" target="_blank" rel="noreferrer">
          開啟示範頁（長路徑內存趨勢）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>在「未修正」模式下操作 30–60 秒，確認曲線上升且不回落。</li>
          <li>切到「修正」模式再操作，曲線應出現週期性回落（GC 後）。</li>
        </ul>
      </section>
    </div>
  );
}
