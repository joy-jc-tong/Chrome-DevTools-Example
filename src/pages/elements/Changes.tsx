export default function Changes() {
  return (
    <div className="space-y-8">
      {/* 標題＋摘要 */}
      <header>
        <h1 className="text-2xl font-bold">Changes（本地改動差異）</h1>
        <p className="text-gray-700 leading-relaxed">
          Changes 面板會記錄在 DevTools 內進行的本地改動（例如在 Elements 的 Attributes/Styles、
          或在 Sources 直接編輯檔案），並以差異（diff）呈現，便於回顧、擷取或複製貼回專案。
          常見情境：快速 Demo 修 UI、臨時調整樣式與字詞、比對多處修改。
        </p>
      </header>

      {/* 功能要點 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">功能要點</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>記錄在 DevTools 內的本地修改（Styles/Elements/Sources）並以檔案為單位顯示 diff。</li>
          <li>支援複製整段 patch，方便貼到 PR 或專案原始碼。</li>
          <li>與 <b>Local Overrides</b> 可搭配：若需要重整後留存改動，可再使用 Overrides（本題先不使用）。</li>
        </ul>
      </section>

      {/* 操作步驟 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">操作步驟</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-1">
          <li>在新分頁開啟下方示範頁。</li>
          <li>在 Elements → Styles 面板直接調整 CSS 宣告；或在 Elements 面板改變節點屬性/文字。</li>
          <li>開啟 <b>More tools → Changes</b>，即可看到逐檔案的差異（新增/刪除行）。</li>
          <li>點選檔名可檢視詳細變更；可複製 patch 以貼回專案。</li>
        </ol>
      </section>

      {/* 互動練習 */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">互動練習</h2>
        <div className="rounded-xl border p-4 bg-gray-50">
          <p className="text-gray-700 mb-3">開啟示範頁（新分頁）：</p>
          <div className="flex flex-wrap gap-2">
            <a
              className="px-3 py-1.5 rounded-lg bg-blue-600 text-white"
              href="/fixtures/elements/changes.html"
              target="_blank" rel="noreferrer"
            >
              開啟示範頁
            </a>
          </div>

          <div className="mt-3">
            <p className="font-medium mb-1">請在 DevTools 內完成以下三組修改（至少三處）：</p>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              <li>
                <b>Styles 調整：</b>把 <code>.cta</code> 的按鈕改成更醒目的主色與更大 padding（例如
                <code>background</code>、<code>padding</code>、<code>border-radius</code>）。
              </li>
              <li>
                <b>文案/屬性：</b>把「微弱提示」那段的文字色調深（修正低對比）
                ，並替 CTA 加上 <code>aria-label</code> 或 <code>title</code>。
              </li>
              <li>
                <b>小型 Refactor：</b>在內嵌 <code>&lt;style&gt;</code> 中直接新增一條 <code>.cta:hover</code> 規則，
                或移除無用的 <code>.unused-rule</code>。
              </li>
            </ol>
            <p className="text-gray-700 mt-2">
              完成後，打開 <b>More tools → Changes</b> 檢視 diff；嘗試複製 patch。
            </p>
          </div>
        </div>
      </section>

      {/* 小技巧 */}
      <section>
        <h2 className="text-xl font-semibold mb-2">使用小技巧</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>若 diff 太多，可在 Elements 限縮修改範圍（針對特定區塊）。</li>
          <li>需要重整後留存變更時，再開啟 <b>Local Overrides</b>（此題不必）。</li>
          <li>在 Sources 也能直接編輯檔案內容，Changes 同樣會記錄差異。</li>
        </ul>
      </section>
    </div>
  );
}
