export default function Blackboxing() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">Blackboxing（忽略第三方庫堆疊）</h1>
        <p className="text-gray-700">把某些檔案標記為「不感興趣」，除錯時堆疊會自動跳過它們。</p>
      </header>
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開示範頁 → 觸發錯誤。</li>
          <li>在 Sources 左側找到 <code>vendor-ui.js</code> → 右鍵 <b>Blackbox script</b>。</li>
          <li>再次觸發錯誤，Call Stack 將直接定位到 <code>app.js</code> 的實際來源。</li>
        </ol>
      </section>
      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white" href={`${import.meta.env.BASE_URL}fixtures/sources/blackbox.html`} target="_blank" rel="noreferrer">
          開啟示範頁（第三方包裝錯誤）
        </a>
        <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
          <li>Blackbox <code>vendor-ui.js</code> → 堆疊變乾淨。</li>
        </ul>
      </section>
    </div>
  );
}
