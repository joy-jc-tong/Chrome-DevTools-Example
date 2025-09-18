export default function WebSocketPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">WebSocket / Events 檢視器</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板可以檢視 WebSocket 連線，並在「Messages」分頁看到雙向事件流。
          你可以同時追蹤瀏覽器送出的訊息和伺服器回應，非常適合即時應用的除錯。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想確認聊天室或遊戲傳的資料是不是正確。</li>
          <li>想檢查伺服器回覆的格式（JSON/文字）有沒有問題。</li>
          <li>想找出是否有不必要的訊息洪流造成效能問題。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Network 面板並建立 WebSocket 連線（例：點「連線 WebSocket」按鈕）。</li>
          <li>在請求清單中找到 WS 連線，點開後切到 Messages 分頁。</li>
          <li>傳送訊息（例：按「送出訊息」按鈕），觀察「送出/接收」的事件記錄。</li>
          <li>可以過濾 Send / Receive，並檢查原始 JSON 或文字內容。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/network/websocket.html`}
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

    </div>
  );
}
