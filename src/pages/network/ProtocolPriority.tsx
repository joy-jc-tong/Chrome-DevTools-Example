export default function ProtocolPriority() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Protocol / Priority</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板中的 <b>Protocol</b> 與 <b>Priority</b> 欄位，可以檢視每個請求的傳輸協定（HTTP/1.1、HTTP/2、HTTP/3）
          以及瀏覽器排程資源的優先順序。這些資訊對於效能分析非常關鍵，能幫助判斷：
          為什麼有的資源比較慢才載入、是否用了最新協定、是否有優先級錯置問題。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>Protocol</b>：顯示資源傳輸的協定版本（http/1.1, h2, h3）。</li>
          <li><b>Priority</b>：顯示瀏覽器給資源的下載優先順序（Highest, High, Medium, Low, Lowest）。</li>
          <li>通常 HTML / CSS / JS 會是 High/Highest，而圖片/字型則可能較低。</li>
          <li>可以藉由 preload / fetchpriority 屬性來調整資源優先順序。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，並打開 DevTools → Network 面板。</li>
          <li>在表格欄位中打開 <b>Protocol</b> 與 <b>Priority</b>（右鍵 → 選擇欄位顯示）。</li>
          <li>點「載入多資源」按鈕，頁面會載入多個 JS / 圖片 / 字型。</li>
          <li>觀察每個 request 的協定（h2/h3/http1.1）與優先順序。</li>
          <li>對比圖片的 <code>fetchpriority="high"</code> 與一般圖片，看看 Priority 有何不同。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href="/fixtures/network/protocol-priority.html"
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

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>若遇到「圖片載太慢」，可考慮在 <code>&lt;img&gt;</code> 加 <code>fetchpriority="high"</code>。</li>
          <li>確保伺服器支援 HTTP/2/3，可提升多路傳輸效能。</li>
          <li>搭配 Waterfall Timeline，可以直觀看到優先順序是否生效。</li>
        </ul>
      </section>
    </div>
  );
}
