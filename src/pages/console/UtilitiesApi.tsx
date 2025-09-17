export default function UtilitiesApi() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Console Utilities API（$0 / $1 / getEventListeners / keys / copy）</h1>
        <p className="text-gray-700 leading-relaxed">
          Console 內建一組「快速工具 API」，可直接存取選取元素、檢查事件監聽、探索物件結構並導出資料。
          常用在臨場排錯與資料抽取，例如：從 Elements 把目前選的節點帶到 Console、列出所有事件監聽、
          或把頁面表格內容轉成 JSON。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><b>$0</b>：Elements 面板「目前選取」的 DOM 節點；<b>$1</b> 是上一次選取（最多到 <code>$4</code>）。</li>
          <li><b>getEventListeners(node)</b>：回傳該節點綁定的事件清單（含類型、capture/passive、handler）。</li>
          <li><b>keys(obj)</b>：取物件可列舉的屬性鍵（相當於 <code>Object.keys</code>）。</li>
          <li><b>copy(data)</b>：把資料序列化後複製到剪貼簿（字串/物件/陣列皆可）。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>開啟下方示範頁，於 Elements 選取區塊或表格。</li>
          <li>切到 Console，輸入 <code>$0</code> 取得目前節點；用 <code>$1</code> 取得上一個節點。</li>
          <li>輸入 <code>getEventListeners($0)</code> 檢視事件（展開看 handler 與 passive）。</li>
          <li>輸入 <code>keys(window.sampleRows[0])</code> 或 <code>Object.keys(...)</code> 探索欄位。</li>
          <li>輸入 <code>copy(window.sampleRows)</code> 將表格資料複製為 JSON，貼到你愛用的編輯器。</li>
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

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>搭配 <b>Live Expression</b> 監看 <code>keys</code> 或物件屬性變化（例如某 state）</li>
          <li><code>copy($0.outerHTML)</code> 直接複製目前 DOM 的 HTML 字串。</li>
          <li>輸入 <code>$0 = $0</code> 可把目前節點固定成全域變數，避免切換選取時遺失參照。</li>
        </ul>
      </section>
    </div>
  );
}
