export default function PerfThrottling() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">CPU / Network 模擬（Throttling）</h1>
        <p className="text-gray-700">
          在 Performance 錄製前，可設定 <b>CPU 4×/6× throttle</b> 與 Network 節流，以模擬低階裝置與慢網路，
          再比較 INP/TBT/LCP 改善前後的差異。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁，打開 Performance → 設定 CPU Throttling = 6×，Network = Slow 3G。</li>
          <li>開始錄製 → 連續點擊「互動測試」按鈕（會觸發重計算與 DOM 更新）。</li>
          <li>停止錄製 → 觀察 <b>INP / TBT</b> 與 Long task 分布。</li>
          <li>把 throttle 關掉或降低 → 再錄一次 → 比較指標差異。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href="/fixtures/performance/throttle-inp.html" target="_blank" rel="noreferrer">
          開啟示範頁（INP/TBT 測試）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>在 6× CPU 下測一次 INP；把重計算切分後（toggle 优化），再測一次，對比 INP/TBT。</li>
          <li>同時開啟 Network 節流 → 觀察 LCP 與 INP 是否相互影響。</li>
        </ul>
      </section>
    </div>
  );
}
