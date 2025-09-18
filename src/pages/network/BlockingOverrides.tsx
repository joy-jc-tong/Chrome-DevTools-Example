export default function BlockingOverrides() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Blocking / Request Overrides</h1>
        <p className="text-gray-700 leading-relaxed">
          Network 工具提供兩種進階控制：
          <br />
          <b>Request Blocking</b>：直接阻擋符合規則的請求（顯示為 blocked:devtools）。
          <br />
          <b>Local Overrides</b>：把遠端檔案替換成本機版本，請求會回傳你修改後的內容。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想測試網站在 缺少某些資源 時的行為（例如廣告腳本被封鎖）。</li>
          <li>想快速修改 API 回應或檔案內容，不需要改後端。</li>
          <li>想 Demo 一個 UI 修正，或模擬不同的伺服器回應。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Request Blocking</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
              <li>打開 Network → More tools → Network request blocking。</li>
              <li>新增規則（例：*/ads.js 或 */api/*）。</li>
              <li>重載頁面，符合規則的請求會顯示為 blocked:devtools。</li>
            </ol>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Local Overrides</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1 ml-4">
              <li>在 Sources → Overrides 選一個本機資料夾並允許存取。</li>
              <li>在 Network 找到要改的檔案（例：banner.json），右鍵 → Save for overrides。</li>
              <li>修改內容後重載頁面，請求會顯示 local override，並套用你修改後的版本。</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 互動練習 */}
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/network/blocking-overrides.html`}
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

    </div>
  );
}
