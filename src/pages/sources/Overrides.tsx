export default function Overrides() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Local Overrides</h1>
        <p className="text-gray-700 leading-relaxed">
          Local Overrides 可以把線上的檔案存成「本機副本」。
          重整頁面後，瀏覽器會優先使用你修改過的版本，超適合測試 CSS/JS 修正。
        </p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想改 CSS 樣式（例如按鈕顏色）後，重整也不會消失。</li>
          <li>想在不動到後端的情況下，快速測試 JS 或 UI 修正。</li>
          <li>想模擬修改過的檔案在整個流程裡的效果。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Sources → Overrides 選一個本機資料夾，並允許存取。</li>
          <li>打開示範頁，找到要修改的檔案（例：styles.css）。</li>
          <li>右鍵 → Save for overrides。</li>
          <li>修改內容後重整頁面，仍會套用你本機的變更。</li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/overrides.html`} target="_blank" rel="noreferrer">
            開啟示範頁（覆寫 CSS）
          </a>
          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>把 <code>.btn</code> 的背景改成 <code>#10b981</code>、字重 700，重整驗證仍生效。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
