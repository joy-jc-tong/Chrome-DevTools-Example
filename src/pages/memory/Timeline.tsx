export default function MemoryTimelinePage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Record allocations over time（記錄配置隨時間）</h1>
        <p className="text-gray-700">
          Record allocations over time 會顯示一段期間內的記憶體配置曲線，包括配置量與存活物件數。
          你可以用它來檢查長流程是否有記憶體洩漏，或確認垃圾回收後記憶體是否回落。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想觀察多步操作下，記憶體是否持續攀升。</li>
          <li>想驗證垃圾回收後，記憶體能不能正確釋放。</li>
          <li>想比對修正前後的程式版本，確認洩漏問題是否解決。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Memory 面板，選 Record allocations over time → 點 Start。</li>
          <li>在頁面上依序操作（例：新增清單 → 切換頁面 → 返回），重複幾輪。</li>
          <li>停止錄製後，觀察曲線：
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>若 GC 後回落 → 表示正常。</li>
              <li>若一路上升 → 可能有記憶體洩漏。</li>
            </ul>
          </li>
          <li>切換「修正版本」再測一次，對照趨勢是否改善。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/memory/memory-timeline.html`} target="_blank" rel="noreferrer">
            開啟示範頁（長路徑內存趨勢）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在「未修正」模式下操作 30–60 秒，確認曲線上升且不回落。</li>
            <li>切到「修正」模式再操作，曲線應出現週期性回落（GC 後）。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
