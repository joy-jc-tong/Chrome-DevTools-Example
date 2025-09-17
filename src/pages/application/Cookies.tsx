export default function CookiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Cookies（SameSite / Secure / HttpOnly）</h1>
        <p className="text-gray-700">
          在 Application → <b>Cookies</b> 檢視屬性。跨站情境通常需要
          <code> SameSite=None; Secure</code>；敏感 Cookie 建議 <code>HttpOnly</code> 防 JS 讀取。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → 透過按鈕設置不同屬性。</li>
          <li>到 Application → Cookies 檢視 Expires / SameSite / Secure / HttpOnly。</li>
          <li>Console 讀取 <code>document.cookie</code>，比較有無 <code>HttpOnly</code> 的差異。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href={`${import.meta.env.BASE_URL}fixtures/application/cookies.html`} target="_blank" rel="noreferrer">
          開啟示範頁（設定不同屬性）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>設 <code>SameSite=None; Secure</code>（需 HTTPS 才會生效）。</li>
          <li>理解為什麼 JS 無法設定或讀取 <code>HttpOnly</code>。</li>
        </ul>
      </section>
    </div>
  );
}
