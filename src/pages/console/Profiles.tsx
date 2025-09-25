export default function ProfilesPage() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Console Profiles</h1>
        <p className="text-gray-700 leading-relaxed">
          除了 Performance 面板能錄製效能外，你也可以在 Console 用 console.profile() / console.profileEnd() 對特定程式段落做 CPU Profile。
          這樣可以鎖定一小段程式碼的效能熱點，而不是整個頁面。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想比較「優化前 vs 優化後」演算法的效能差異。</li>
          <li>想只針對某個操作（例如按下按鈕）來看效能，而不是錄整頁。</li>
          <li>想快速找出一段程式的 CPU 使用瓶頸。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Console 輸入 console.profile('name') 開始錄製。</li>
          <li>執行你要測試的程式動作。</li>
          <li>在 Console 輸入 console.profileEnd('name') 結束錄製。</li>
          <li>打開 Performance 面板 → Profiles，就能看到剛剛的 CPU Profile 結果。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <a
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
            href={`${import.meta.env.BASE_URL}fixtures/console/profiles.html`}
            target="_blank" rel="noreferrer"
          >
            開啟示範頁（heavy work 測試）
          </a>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Console 輸入 <code>console.profile()</code>。</li>
            <li>點「執行 heavy work」→ 等待完成。</li>
            <li>輸入 <code>console.profileEnd()</code>，然後去 Performance 面板檢查 CPU 熱點。</li>
            <li>修改程式（例如調小迴圈次數），再跑一次對照差異。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
