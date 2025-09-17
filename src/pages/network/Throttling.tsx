export default function Throttling() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Throttling（自訂網路 / Round-trip）</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板右上有 <b>Throttling</b> 下拉選單，可模擬 3G/Slow 4G/Offline，或新增自訂檔案下載/上傳速率與往返延遲（RTT）。
          搭配「Network conditions」側欄，可以更細緻地測試 UA 與快取/離線情境。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>Throttling 下拉</b>：選擇 Slow 3G / Fast 3G / Slow 4G / Offline，或點擊「Add…」新增自訂配置（下載/上傳/延遲）。</li>
          <li><b>Network conditions</b>：右上 ⋮ → More tools → <em>Network conditions</em>，可獨立切換 User agent、Caching 行為。</li>
          <li><b>Round-trip 敏感度</b>：串接（序列）請求在高延遲下會被放大；應優先改為平行、或使用預取/預載。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → 打開 DevTools → Network。</li>
          <li>在 Throttling 選單選「Slow 3G」，或自訂：下載 400kb/s、上傳 400kb/s、RTT 300ms。</li>
          <li>點「<b>串接 3 次 API</b>」並觀察 Waterfall：你會看到三段依序的等待，總延遲 ≈ 3 × RTT + 傳輸時間。</li>
          <li>點「<b>平行載入 6 張圖</b>」並觀察優先權與連線競爭；嘗試把其中一張加上 <code>fetchpriority="high"</code> 的差異。</li>
          <li>切換「Offline」再操作，驗證錯誤處理與快取（若有）。</li>
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

      <section>
        <h2 className="text-xl font-semibold mb-2">小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>降低 round-trips：把序列 API 合併、用 <code>preload</code>/<code>prefetch</code>、或在伺服器渲染首批資料。</li>
          <li>針對關鍵資源加 <code>fetchpriority="high"</code> 或 HTTP/2 Push（若仍使用），縮短關鍵路徑。</li>
          <li>搭配 Performance 面板紀錄，在 Summary 檢視 Long task 與網路瓶頸是否相互影響。</li>
        </ul>
      </section>
    </div>
  );
}
