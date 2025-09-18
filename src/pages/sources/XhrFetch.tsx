export default function XhrFetch() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">XHR / Fetch Breakpoints</h1>
        <p className="text-gray-700 leading-relaxed">
          XHR / Fetch Breakpoints 可以在 發出網路請求前 先暫停，讓你檢查請求的網址、參數或 payload。
          它就像是在網路呼叫的入口處設一個攔截器。
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想在 API 發送前先看 payload 是否正確。</li>
          <li>想針對特定請求（例如 /search）停下來檢查。</li>
          <li>想找出是哪段程式碼觸發了某個請求。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources 面板右側的 Breakpoints → XHR/fetch。</li>
          <li>新增一個關鍵字（例：/search）。</li>
          <li>回到頁面操作，當發出符合條件的請求時程式會暫停。</li>
          <li>在暫停點檢查 url、init.body 或 XHR 的 payload。</li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/xhr-fetch.html`} target="_blank" rel="noreferrer">
            開啟示範頁（攔截 /search）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>新增條件字串：<code>/search</code> → 觀察每次搜尋都會停下。</li>
            <li>在 Call Stack 中展開，確認是按鈕 handler 觸發。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
