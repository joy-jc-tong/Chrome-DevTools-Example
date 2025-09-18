export default function Throttling() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Throttling（自訂網路 / Round-trip）</h1>
        <p className="text-gray-700 leading-relaxed">
          Throttling 可以模擬不同的網路狀況，例如 慢速 3G、4G 或離線，也能自訂下載/上傳速率與延遲（RTT）。
          搭配 Network conditions，還能切換 User-Agent 與快取行為。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想測試網站在慢速網路下的體驗。</li>
          <li>想模擬離線情境，檢查錯誤處理或快取是否正常。</li>
          <li>想分析串接 API 在高延遲下的影響，並思考是否該改成平行請求或用預載。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Network 面板，在右上角 Throttling 選單選擇 Slow 3G / Fast 3G / Slow 4G / Offline，或點 Add… 來新增自訂配置（下載速率 / 上傳速率 / RTT）。</li>
          <li>也可以在 More tools → Network conditions 裡調整 User-Agent 和 Caching 行為。</li>
          <li>觀察請求的 Waterfall，比較串接 vs 平行載入在不同延遲下的差異。</li>
          <li>切到 Offline 再操作，驗證錯誤處理與快取行為。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/network/throttling.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（Throttling / Round-trip）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Slow 3G 下點「串接 3 次 API」；記錄三個請求的 <b>TTFB</b> 與總耗時。</li>
            <li>改成「平行載入 6 張圖」，觀察連線併發與 <b>Priority</b> 欄位；把最後一張設 <code>fetchpriority="high"</code> 再比對。</li>
            <li>切換 Offline 後重試，確認錯誤行為是否合理（重試、fallback 文案）。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
