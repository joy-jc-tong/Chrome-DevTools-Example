export default function HarPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">HAR 匯出 / 匯入</h1>
        <p className="text-gray-700 leading-relaxed">
          HAR（HTTP Archive）是一種標準化的網路追蹤格式，包含請求/回應、時間線（timings）、headers、payload 等。
          在 DevTools 的 Network 面板可以「匯出 HAR」記錄現場問題，也可以「匯入 HAR」重看別人的抓包。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">常見用途</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>把疑難雜症的「網路證據」打包給同事/外包廠商。</li>
          <li>在沒有重現環境時，離線瀏覽別人的請求序列與時間線。</li>
          <li>留存效能基準（baseline）以便日後對照。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>打開下方示範頁，於 Network 面板製造一些請求。</li>
          <li><b>匯出 HAR</b>：在 Network 請求清單空白處或任何請求上「右鍵」 → <em>Save all as HAR with content</em>（含回應內容）。</li>
          <li><b>匯入 HAR</b>：將 HAR 檔 <em>拖放</em> 到 Network 面板，或使用右鍵選單的 <em>Import HAR</em>。</li>
          <li>匯入後可像真實流量一樣檢視每個 request 的 Headers、Preview、Timing、Initiator 等。</li>
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

      <section>
        <h2 className="text-xl font-semibold mb-2">小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>包含內容</b>：選「with content」才能離線查看回應（JSON/HTML/CSS/圖片）。</li>
          <li><b>隱私</b>：HAR 可能含 Cookie/Authorization/查詢字串，分享前請先脫敏。</li>
          <li><b>可讀性</b>：用 <code>.har</code> 上傳到問題追蹤工具，或用 HAR viewer（或 DevTools 本身）閱讀。</li>
        </ul>
      </section>
    </div>
  );
}
