export default function BlockingOverrides() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Blocking / Request Overrides</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 工具提供兩種進階控制：<b>Request Blocking</b> 與 <b>Local Overrides</b>。
          前者直接阻擋符合規則的資源請求（顯示為 <code>blocked:devtools</code>），
          後者則允許你在本機建立覆寫檔案，讓特定 URL 直接回傳本地版本。
          這對除錯第三方腳本、測試無網路狀態、或快速 Demo 改動特別有用。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>Request Blocking</b>：在 Network → 右上 ⋮ → <b>More tools → Network request blocking</b>。新增 URL 規則即可阻擋。</li>
          <li><b>Local Overrides</b>：在 Sources 面板 → <b>Overrides</b>，選擇本機資料夾，允許 DevTools 儲存並覆寫指定 URL 回應。</li>
          <li>被封鎖的請求會顯示 <code>blocked:devtools</code>；被覆寫的請求會顯示「local override」標籤。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，打開 DevTools → Network。</li>
          <li>試試 <b>Request Blocking</b>：新增規則 <code>*/ads.js</code> 或 <code>*/api/*</code>，重載頁面觀察。</li>
          <li>試試 <b>Local Overrides</b>：到 Sources → Overrides → 選資料夾 → Allow。  
            - 在 Network 找到 <code>banner.json</code> → 右鍵 <b>Save for overrides</b>。  
            - 修改內容 → 重載頁面 → 頁面顯示修改後的 JSON。  
          </li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href="/fixtures/network/blocking-overrides.html"
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（Blocking / Overrides）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>用 Request Blocking 阻擋 <code>ads.js</code>，確認 Console 不再印出「ads script executed」。</li>
            <li>用 Request Blocking 阻擋 <code>/api/data.json</code>，頁面顯示「API 載入失敗」。</li>
            <li>啟用 Local Overrides，修改 <code>banner.json</code> 內文，頁面橫幅應顯示新文字。</li>
          </ul>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>快速「拔掉第三方腳本」：用 Blocking 阻擋 <code>*/tracking.js</code>。</li>
          <li>快速「假資料」：用 Overrides 改 API JSON，不需要後端配合。</li>
          <li>搭配「Disable cache」確保觀察的都是新結果。</li>
        </ul>
      </section>
    </div>
  );
}
