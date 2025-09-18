export default function Breakpoints() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Conditional Breakpoint</h1>
        <p className="text-gray-700 leading-relaxed">
          Conditional Breakpoint 是一種「有條件的中斷點」。
          它只會在程式執行到該行、而且條件成立時才停下來。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>不想每次都停下來，只想在 特定輸入 或 特定狀況 出現時才暫停。</li>
          <li>例如：輸入值是 "error" 才觸發，其他正常情況就放過。</li>
          <li>可以避免一直手動按 Resume，大幅提升除錯效率。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources 面板找到要偵錯的檔案（例：conditional.js）。</li>
          <li>在目標行號上點右鍵 → Add conditional breakpoint…。</li>
          <li>輸入條件（例：text === 'error' 或 /bad/i.test(text)）。</li>
          <li>回到頁面輸入測試值，當條件成立時程式就會暫停。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/conditional.html`} target="_blank" rel="noreferrer">
            開啟示範頁（只在 "error" 停）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>條件：<code>text === 'error'</code> → 驗證只有輸入 error 才中斷。</li>
            <li>把條件改成 <code>text.length &gt;= 8</code> 試試。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
