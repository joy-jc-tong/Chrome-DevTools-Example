export default function Initiator() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Initiator / Dependencies</h1>
        <p className="text-gray-700 leading-relaxed">
          在 Network 面板中，右鍵任一請求 → <b>「Show initiator」</b> 或 <b>「Show dependencies」</b>，
          可以顯示「誰觸發了該請求」以及「此請求又帶出了哪些後續依賴」。這對排查效能問題特別有用，
          例如：為什麼會多載入某張圖片？或是哪個 JS 造成了額外 API 呼叫？
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>Initiator</b>：顯示該請求是由哪段 JS / HTML 觸發（例如某個 script 標籤或 fetch）。</li>
          <li><b>Dependencies</b>：顯示此資源載入後，又引發了哪些其他請求（例如 CSS 再載入字型）。</li>
          <li>可在 Requests 表格右鍵選單 → <b>Show initiator</b> 或 <b>Show dependencies</b>。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，並打開 DevTools → Network 面板。</li>
          <li>點「載入資料」按鈕，會發出一個 <code>fetch()</code> → 這是 initiator。</li>
          <li>該 JSON 載入後，程式會再依序載入一張圖片（依賴）。</li>
          <li>在 Network 請求列表，右鍵 JSON → <b>Show initiator</b>，確認是按鈕 handler。</li>
          <li>右鍵圖片 → <b>Show initiator</b>，看到是 JSON handler 引發的。</li>
          <li>右鍵 JSON → <b>Show dependencies</b>，應能看到圖片是它的依賴。</li>
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

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>排查「為什麼會多載入某資源」時，先檢查 initiator。</li>
          <li>對照 Dependencies，可以快速理解某些資源鏈（CSS → 字型、JS → API）。</li>
          <li>搭配 Coverage 或 Performance，可以進一步分析效能瓶頸。</li>
        </ul>
      </section>
    </div>
  );
}
