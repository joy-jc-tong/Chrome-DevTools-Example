export default function ManifestIndexedDB() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold">IndexedDB Viewer（資料結構 / 版本）</h1>
        <p className="text-gray-700">
          IndexedDB Viewer 可以在 DevTools 裡直接檢視資料庫結構，包含 資料庫版本、object stores、indexes 與實際資料。
          當資料庫升版時（onupgradeneeded），也能看到新的 store 或 index 是否正確建立。
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想確認 IndexedDB 裡有哪些資料表（stores）和索引（indexes）。</li>
          <li>想檢查資料是否真的寫入成功。</li>
          <li>想驗證升版後的結構變更（例如新增 index、資料遷移）。</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>打開 Application → IndexedDB。</li>
          <li>展開資料庫，檢查 stores、indexes 與資料。</li>
          <li>建立或升版資料庫後（例如在程式中觸發 onupgradeneeded），回到 Viewer 驗證結構是否更新正確。</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <a className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
             href={`${import.meta.env.BASE_URL}fixtures/application/indexeddb.html`} target="_blank" rel="noreferrer">
            開啟示範頁（版本升級與索引）
          </a>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>用 index 查詢 tag=work，確認結果。</li>
            <li>在 Viewer 刪除一筆，再回頁面讀取比對。</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
