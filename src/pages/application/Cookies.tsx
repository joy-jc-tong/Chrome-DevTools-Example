export default function CookiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Cookies（SameSite / Secure / HttpOnly）</h1>
        <p className="text-gray-700">
          Cookies Viewer 可以在 DevTools 的 Application → Cookies 中檢視網站的 Cookie 屬性。
          你可以看到到期時間、SameSite、Secure、HttpOnly 等細節。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想檢查跨站請求是否正確帶上 Cookie（通常需要 SameSite=None; Secure）。</li>
          <li>想確認敏感 Cookie 是否加上 HttpOnly，避免被 JS 讀取。</li>
          <li>想比對不同屬性組合對登入狀態或安全性的影響。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在頁面上設置不同屬性的 Cookie（例：透過按鈕操作）。</li>
          <li>打開 Application → Cookies，檢視每個 Cookie 的 Expires、SameSite、Secure、HttpOnly。</li>
          <li>在 Console 嘗試用 document.cookie 讀取，對比有無 HttpOnly 的差異。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/application/cookies.html`} target="_blank" rel="noreferrer">
            開啟示範頁（設定不同屬性）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>設 <code>SameSite=None; Secure</code>（需 HTTPS 才會生效）。</li>
            <li>理解為什麼 JS 無法設定或讀取 <code>HttpOnly</code>。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
