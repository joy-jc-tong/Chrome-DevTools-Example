export default function PerfThrottling() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">CPU / Network 模擬（Throttling）</h1>
        <p className="text-gray-700">
          Performance 面板可以在錄製前設定 CPU 節流（例如 4× / 6×）和 Network 節流（例如 Slow 3G）。
          這能模擬低階裝置或慢速網路，幫助你測試效能優化前後的差異。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想確認網站在低階手機或慢網路下，體驗是不是能接受。</li>
          <li>想比較優化前後的指標（INP、TBT、LCP）是否真的有改善。</li>
          <li>想重現真實使用者的卡頓情境，方便釐清問題。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Performance 面板，在設定裡選擇 CPU Throttling = 6×，Network = Slow 3G。</li>
          <li>開始錄製，操作頁面（例：連續點擊「互動測試」按鈕，觸發重計算與 DOM 更新）。</li>
          <li>停止錄製後，觀察 INP / TBT 指標與 Long task 分布。</li>
          <li>關閉或降低節流，再錄一次，比較指標的差異。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/performance/throttle-inp.html`} target="_blank" rel="noreferrer">
            開啟示範頁（INP/TBT 測試）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 6× CPU 下測一次 INP；把重計算切分後（toggle 優化），再測一次，對比 INP/TBT。</li>
            <li>同時開啟 Network 節流 → 觀察 LCP 與 INP 是否相互影響。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
