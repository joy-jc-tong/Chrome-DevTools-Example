export default function HarPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">HAR 匯出 / 匯入</h1>
        <p className="text-gray-700 leading-relaxed">
          HAR（HTTP Archive）是一種標準化的網路追蹤檔案，記錄所有請求與回應，包括 headers、payload、timing 等。
          在 DevTools 的 Network 面板可以把請求匯出成 HAR，也能匯入別人的 HAR 來重現網路狀況。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想把「疑難雜症的網路證據」打包交給同事或外包廠商。</li>
          <li>沒有重現環境，也能離線查看別人的請求序列與時間線。</li>
          <li>想保存某次效能基準（baseline），方便日後比較。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Network 面板產生一些請求。</li>
          <li>匯出 HAR：在請求清單空白處或任一請求上右鍵 → Save all as HAR with content。</li>
          <li>匯入 HAR：把 HAR 檔拖進 Network 面板，或右鍵選單 → Import HAR。</li>
          <li>匯入後可像真實流量一樣檢視每個 request 的 Headers、Preview、Timing、Initiator 等資訊。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <div className="flex flex-wrap gap-2 mb-2">
            <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/network/har-demo.html`} target="_blank" rel="noreferrer">
              開啟示範頁（產生多種請求）
            </a>
            <a className="px-3 py-1.5 rounded-lg bg-gray-200 text-gray-900" href={`${import.meta.env.BASE_URL}fixtures/network/sample.har`} target="_blank" rel="noreferrer">
              下載範例 HAR（用來匯入）
            </a>
          </div>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>在示範頁點各種按鈕，製造 API/圖片/JS/CSS 請求，再匯出 HAR。</li>
            <li>把下載的 <code>sample.har</code> 拖進 Network 面板，瀏覽匯入後的請求與 Timing。</li>
            <li>用「Filter」過濾 <code>XHR</code> 或 <code>Img</code>，練習從 HAR 讀出瓶頸。</li>
          </ol>
        </div>
      </section>

    </div>
  );
}
