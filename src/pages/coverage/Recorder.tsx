export default function RecorderPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Recorder / User flows</h1>
        <p className="text-gray-700">
          Recorder 可以錄下使用者在頁面的操作流程，像是「登入 → 搜尋 → 加購物車」。
          錄完之後可以直接 重播 (Replay)，或匯出成腳本（.puppeteer / .json）。
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想快速重現使用者操作，不用每次都手動點。</li>
          <li>想在 Debug 或測試時，檢查某個流程是否穩定。</li>
          <li>想把錄下的流程轉成自動化腳本，交給測試或 CI 使用。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Recorder 面板，點 Record 開始錄製。</li>
          <li>在頁面執行操作（例：登入 → 搜尋 → 加入購物車）。</li>
          <li>停止錄製後，可以選擇：
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Replay：直接重播操作。</li>
              <li>Export：匯出為 .puppeteer 或 .json 腳本。</li>
            </ul>
          </li>
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
