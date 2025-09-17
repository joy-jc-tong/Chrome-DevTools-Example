export default function Overrides() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Local Overrides（持久覆寫）</h1>
        <p className="text-gray-700">把遠端檔案「存成本機副本」，重整後仍以本機版本回應，超適合快速嘗試 CSS/JS 修正。</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>Sources → <b>Overrides</b> → 選資料夾 → Allow。</li>
          <li>打開示範頁 → Network 或 Sources 內找到 <code>styles.css</code>。</li>
          <li>右鍵 <b>Save for overrides</b> → 改變按鈕顏色/字重 → 重整仍保留。</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/overrides.html`} target="_blank" rel="noreferrer">
          開啟示範頁（覆寫 CSS）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>把 <code>.btn</code> 的背景改成 <code>#10b981</code>、字重 700，重整驗證仍生效。</li>
        </ul>
      </section>
    </div>
  );
}
