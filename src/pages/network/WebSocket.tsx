export default function WebSocketPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">WebSocket / Events 檢視器</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板支援檢視 WebSocket 連線。點開 WebSocket 請求後，可在「Messages」分頁看到雙向事件流
          （客戶端送出的訊息與伺服器回應）。這對除錯即時應用特別重要，例如聊天室、遊戲、通知服務。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>WebSocket 請求會顯示在 Network 表格中，標示為 <code>WS</code>。</li>
          <li>點開後有 <b>Frames</b> / <b>Messages</b> 分頁，顯示傳入/傳出的資料。</li>
          <li>可過濾訊息方向（Send / Receive），並查看原始 JSON 或文字。</li>
          <li>適合驗證資料格式是否正確、或是否有不必要的訊息洪流。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，並打開 DevTools → Network。</li>
          <li>點「連線 WebSocket」按鈕 → 瀏覽器會建立一條 <code>ws://</code> 連線。</li>
          <li>切到 Network 面板 → 找到 <b>WS</b> 請求 → 點開 → Messages 分頁。</li>
          <li>點「送出訊息」按鈕 → 在 Messages 分頁中應看到送出與伺服器回覆。</li>
          <li>試著多次送訊息，觀察 event log。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href="/fixtures/network/websocket.html"
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（WebSocket 測試）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>建立連線後，在 Network → Messages 檢視器裡觀察握手與 ping/pong。</li>
            <li>送出一個訊息，例如 <code>&#123;"type":"ping"&#125;</code>，確認伺服器回覆。</li>
            <li>快速連續送訊息，觀察 event 流量。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>用「Filter → WS」快速過濾出所有 WebSocket 連線。</li>
          <li>如果訊息格式是 JSON，可在 Messages 面板直接展開 JSON。</li>
          <li>注意不要把心跳訊息（ping/pong）誤當成有效 payload。</li>
        </ul>
      </section>
    </div>
  );
}
