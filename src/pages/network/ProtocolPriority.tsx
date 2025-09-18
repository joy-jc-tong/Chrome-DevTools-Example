export default function ProtocolPriority() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Protocol / Priority</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板可以顯示每個請求用的 傳輸協定（HTTP/1.1、HTTP/2、HTTP/3）和 優先順序（Priority）。
          這能幫助你了解資源是怎麼被瀏覽器安排下載的。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想知道網站是不是用了最新的 HTTP/2 或 HTTP/3。</li>
          <li>想分析為什麼有些資源載入比較慢。</li>
          <li>想檢查瀏覽器排程是不是把重要資源（HTML/CSS/JS）排在高優先級。</li>
          <li>想測試 preload 或 fetchpriority 是否真的改變了下載順序。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Network 面板，在表格中啟用 Protocol 和 Priority 欄位（右鍵 → 勾選）。</li>
          <li>載入頁面或點「載入多資源」按鈕。</li>
          <li>觀察每個請求的 協定版本（h2/h3/http/1.1）與 優先順序（Highest, High, Medium, Low, Lowest）。</li>
          <li>對比一般圖片與 fetchpriority="high" 的圖片，看看 Priority 有何不同。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/network/protocol-priority.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（Protocol / Priority）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>比對 HTML 與 JS 的 Priority（通常較高）。</li>
            <li>觀察圖片是否預設為 Low；加了 <code>fetchpriority="high"</code> 的圖片是否 Priority 提升。</li>
            <li>確認 Protocol 欄位是否為 h2/h3，若是 http/1.1，思考伺服器端設定。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
