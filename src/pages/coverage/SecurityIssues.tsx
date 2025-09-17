export default function SecurityIssuesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Security / Issues 面板</h1>
        <p className="text-gray-700">
          透過 <b>Security</b> 與 <b>Issues</b> 面板檢視 CSP、混合內容、跨站設定等警告與修正建議。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁（含 <b>meta CSP</b> 與被阻擋的 inline script）。</li>
          <li>開啟 <b>Issues</b> 面板查看違規細節與修正建議。</li>
          <li>嘗試移除/調整 CSP（在 DevTools Sources 臨時改）後重整驗證警告消失。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href={`${import.meta.env.BASE_URL}fixtures/coverage/security-csp.html`} target="_blank" rel="noreferrer">
          開啟示範頁（CSP 違規）
        </a>
      </section>
    </div>
  );
}
