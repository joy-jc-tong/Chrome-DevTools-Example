export default function RecorderPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Recorder / User flows</h1>
        <p className="text-gray-700">
          使用 <b>Recorder</b> 錄製「登入 → 搜尋 → 加購物車」流程，接著 <b>Replay</b> 或 <b>Export</b>（.puppeteer/.json）。
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → 打開 Recorder → <b>Record</b>。</li>
          <li>輸入帳密（任意）、搜尋關鍵字、加入購物車 → 停止錄製。</li>
          <li>Replay 驗證，或 Export 產出腳本。</li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/coverage/recorder-shop.html`} target="_blank" rel="noreferrer">
            開啟示範頁（Login → Search → Cart）
          </a>
        </div>
      </section>
    </div>
  );
}
