export default function ServiceWorkers() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Service Workers（Bypass / Update on reload）</h1>
        <p className="text-gray-700">
          Service Workers 面板可以控制 SW 的行為。
          當舊版 SW 阻擋更新時，你可以用 Bypass for network 直接跳過快取，或用 Update on reload 強制更新 SW。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想跳過 Service Worker，直接從網路拿最新檔案。</li>
          <li>遇到 SW 沒自動更新，想手動強制換成新版本。</li>
          <li>測試 SW 行為，驗證不同版本是否正確生效。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Application → Service Workers。</li>
          <li>勾選 Bypass for network → 請求會直接走網路，不經過 SW。</li>
          <li>勾選 Update on reload → 下次重新整理會強制更新 SW。</li>
          <li>驗證請求結果是否已從新版 Service Worker 或網路取得。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/application/sw-demo.html`} target="_blank" rel="noreferrer">
            開啟示範頁（SW 版本切換）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>觀察不勾任何選項時，舊版 SW 仍攔截的狀況。</li>
            <li>勾 Bypass / Update on reload 後，回應應變為 v2。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
