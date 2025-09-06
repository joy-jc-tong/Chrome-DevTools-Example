export default function ManifestIndexedDB() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">IndexedDB Viewer（資料結構 / 版本）</h1>
        <p className="text-gray-700">
          在 Application → <b>IndexedDB</b> 可檢視資料庫、object stores、indexes 與實際資料。
          升版在 <code>onupgradeneeded</code> 進行（建立 store/index、資料遷移）。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟示範頁 → 點「建 v1」建立 DB 與 <code>notes</code> store。</li>
          <li>點「升 v2」新增索引 <code>byTag</code>。</li>
          <li>在 IndexedDB 檢視器確認 stores / indexes 與資料。</li>
        </ol>
      </section>

      <section>
        <h2 className="text-xl font-semibold">互動練習</h2>
        <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
           href="/fixtures/application/indexeddb.html" target="_blank" rel="noreferrer">
          開啟示範頁（版本升級與索引）
        </a>
        <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
          <li>用 index 查詢 tag=work，確認結果。</li>
          <li>在 Viewer 刪除一筆，再回頁面讀取比對。</li>
        </ul>
      </section>
    </div>
  );
}
