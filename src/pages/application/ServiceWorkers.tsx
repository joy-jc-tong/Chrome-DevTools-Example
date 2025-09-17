export default function ServiceWorkers() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Service Workers（Bypass / Update on reload）</h1>
        <p className="text-gray-700">
          舊版 SW 阻擋更新時，在 Application → <b>Service Workers</b> 勾 <b>Bypass for network</b> 或
          <b> Update on reload</b>，可直接走網路或強制更新 SW。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁註冊 v1，請求 <code>/version.txt</code>（回 v1）。</li>
          <li>切換註冊 v2，再請求；若仍是 v1，勾 Bypass / Update on reload 後重試。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href={`${import.meta.env.BASE_URL}fixtures/application/sw-demo.html`} target="_blank" rel="noreferrer">
          開啟示範頁（SW 版本切換）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>觀察不勾任何選項時，舊版 SW 仍攔截的狀況。</li>
          <li>勾 Bypass / Update on reload 後，回應應變為 v2。</li>
        </ul>
      </section>
    </div>
  );
}
