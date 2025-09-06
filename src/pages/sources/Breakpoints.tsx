export default function Breakpoints() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Conditional Breakpoints（條件中斷點）</h1>
        <p className="text-gray-700">只在「滿足條件」時才停下（例如某筆輸入造成錯誤）。</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → 打開 <b>Sources</b> → 找到 <code>conditional.js</code>。</li>
          <li>在 <code>processInput</code> 的行號上點一下 → 右鍵「Add conditional breakpoint…」。</li>
          <li>輸入條件：<code>text === 'error'</code>（或 <code>/bad/i.test(text)</code>）。</li>
          <li>回頁面輸入 <code>error</code> → 送出 → 程式應在該行暫停。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href="/fixtures/sources/conditional.html" target="_blank" rel="noreferrer">
          開啟示範頁（只在 “error” 停）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>條件：<code>text === 'error'</code> → 驗證只有輸入 error 才中斷。</li>
          <li>把條件改成 <code>text.length &gt;= 8</code> 試試。</li>
        </ul>
      </section>
    </div>
  );
}
