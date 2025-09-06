export default function XhrFetch() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">XHR / Fetch Breakpoints</h1>
        <p className="text-gray-700">在「發出請求前」就暫停，檢查 payload 或決定是否繼續。</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Sources 右側「Breakpoints」區 → <b>XHR/fetch</b> → 新增關鍵字：<code>/search</code>。</li>
          <li>在示範頁按「搜尋 hello」與「搜尋 error」；匹配 <code>/search</code> 的請求會在 <em>發送前</em> 暫停。</li>
          <li>在暫停點檢查 <code>url</code>、<code>init.body</code>（或 XHR 的 <code>payload</code>）。</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href="/fixtures/sources/xhr-fetch.html" target="_blank" rel="noreferrer">
          開啟示範頁（攔截 /search）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>新增條件字串：<code>/search</code> → 觀察每次搜尋都會停下。</li>
          <li>在 Call Stack 中展開，確認是按鈕 handler 觸發。</li>
        </ul>
      </section>
    </div>
  );
}
