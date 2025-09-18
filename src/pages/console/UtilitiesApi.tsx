export default function UtilitiesApi() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Console Utilities API</h1>
        <p className="text-gray-700 leading-relaxed">
          Console Utilities API 是一組內建的「快速工具指令」。
          你可以用它們直接取得在 Elements 選到的元素、列出事件監聽、查看物件結構，或把資料複製到剪貼簿。
        </p>
      </header>

      {/* 為什麼要用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">為什麼要用？</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>想在 Console 快速拿到 Elements 裡選到的元素 → 用 $0。</li>
          <li>想檢查某個元素綁了哪些事件 → 用 getEventListeners($0)。</li>
          <li>想知道物件有哪些欄位 → 用 keys(obj)。</li>
          <li>想把表格資料或物件快速匯出成 JSON → 用 copy(data)。</li>
        </ul>
      </section>

      {/* 怎麼用 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">怎麼用？</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在 Elements 面板選一個元素。</li>
          <li>在 Console 輸入：<br/>
            <span className="ml-4 block">
              $0 → 拿目前選的節點；$1 → 拿上一次選的節點（最多到 $4）。<br/>
              getEventListeners($0) → 查看事件清單（含 passive 與 handler）。<br/>
              keys(obj) → 查看物件的屬性鍵。<br/>
              copy(data) → 把資料複製到剪貼簿，可直接貼到編輯器。
            </span>
          </li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">使用下方示範頁（新分頁開啟）：</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href={`${import.meta.env.BASE_URL}fixtures/console/utilities-api.html`}
              target="_blank" rel="noreferrer"
            >
              開啟示範頁（含事件與表格）
            </a>
          </div>

          <ul className="list-decimal list-inside text-gray-700 mt-3 space-y-1">
            <li>在 Elements 選取「按鈕 A」，在 Console 輸入 <code>getEventListeners($0)</code> 檢查 click 是否有兩個 handler。</li>
            <li>在 Elements 改選「卡片區塊」，回 Console 輸入 <code>$1</code> 驗證上一個被選過的是「按鈕 A」。</li>
            <li>輸入 <code>keys(window.sampleRows[0])</code> 檢視表格欄位；再用 <code>copy(window.sampleRows)</code> 導出 JSON。</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
