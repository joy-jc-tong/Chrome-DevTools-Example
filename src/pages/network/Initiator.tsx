export default function Initiator() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Network Initiator</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 面板可以幫你顯示請求之間的因果關係。
          用 Show initiator 可以看「誰觸發了這個請求」，用 Show dependencies 可以看「這個請求又帶出了哪些後續資源」。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想知道是哪段 JS 或 HTML 造成了某個 API 呼叫。</li>
          <li>想搞清楚為什麼載入了一張多餘的圖片。</li>
          <li>想分析某個資源下載後，還會引發哪些後續請求（例如 CSS 觸發字型載入）。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Network 面板並觀察請求。</li>
          <li>在任一請求上右鍵 → Show initiator，可以看到是哪段程式或元素觸發的。</li>
          <li>在任一請求上右鍵 → Show dependencies，可以看到該請求下載後又引發了哪些後續請求。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/network/initiator.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（Initiator/Dependencies）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>點「載入資料」後，找到 JSON 請求 → 右鍵 Show initiator。</li>
            <li>再檢查圖片請求 → 右鍵 Show initiator，確認依賴鏈。</li>
            <li>最後回到 JSON → 右鍵 Show dependencies，應能看到圖片。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
