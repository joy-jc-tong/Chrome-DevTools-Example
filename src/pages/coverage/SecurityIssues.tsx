export default function SecurityIssuesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Security / Issues 面板</h1>
        <p className="text-gray-700">
          Security 與 Issues 面板會顯示網站的安全相關資訊與警告。
          像是 CSP（內容安全政策）、混合內容（HTTP/HTTPS 混用）、跨站設定等，並提供修正建議。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想檢查網站是否有不安全的資源或設定。</li>
          <li>想知道被阻擋的 script 或資源是哪裡出問題。</li>
          <li>想依照 DevTools 提示，快速修正 CSP 或跨站錯誤。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟一個有安全警告的頁面（例：含 meta CSP 與被阻擋的 inline script）。</li>
          <li>打開 Issues 面板，查看違規細節與修正建議。</li>
          <li>在 Sources 裡臨時修改 CSP，重整頁面，驗證警告是否消失。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/coverage/security-csp.html`} target="_blank" rel="noreferrer">
            開啟示範頁（CSP 違規）
          </a>
        </div>
      </section>
    </div>
  );
}
